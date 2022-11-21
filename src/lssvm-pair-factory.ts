import { BigDecimal, BigInt } from "@graphprotocol/graph-ts"
// import { decodeEthFunctionInputs } from "./helpers"
import {
  LSSVMPairFactory,
  BondingCurveStatusUpdate as BondingCurveStatusUpdateEvent,
  CallTargetStatusUpdate,
  NFTDeposit as NFTDepositEvent,
  NewPair as NewPairEvent,
  OwnershipTransferred,
  ProtocolFeeMultiplierUpdate,
  ProtocolFeeRecipientUpdate,
  RouterStatusUpdate,
  TokenDeposit as TokenDepositEvent,
  CreatePairETHCall
} from "../generated/LSSVMPairFactory/LSSVMPairFactory"
import { NewPair, Pair, NFT, DailyETHPairStat, DailyETHPoolStat, DailyETHProtocolStat, BondingCurveStatusUpdate, ProtocolFeeMultiplier, NFTDeposit, TokenDeposit, Collection } from "../generated/schema"
import { LSSVMPairEnumerableETH } from "../generated/templates"
import { plusBigInt, updatePairAttributesIfMissing } from "./utilities"

export function handleCreatePairETH(
  event: CreatePairETHCall
): void {

  let newCollection = Collection.load(event.inputs._nft.toHexString());
  if (!newCollection) {
    newCollection = new Collection(event.inputs._nft.toHexString());
    newCollection.pairs = [];
    newCollection.pairCount = BigInt.fromI32(0);
    newCollection.nfts = [];
    newCollection.save();
  }

  let newPair = Pair.load(event.outputs.pair.toHexString());
  if (!newPair) {
    newPair = new Pair(event.outputs.pair.toHexString())
  }

  newPair.bondingCurveAddress = event.inputs._bondingCurve.toHexString()
  newPair.assetRecipient = event.inputs._assetRecipient.toHexString()
  newPair.poolType = BigInt.fromI32(event.inputs._poolType)
  newPair.delta = event.inputs._delta
  newPair.feeMultiplier = event.inputs._fee.toBigDecimal().div(BigDecimal.fromString((Math.pow(10, 18)).toString()))
  newPair.spotPrice = event.inputs._spotPrice
  newPair.nftIdInventory = event.inputs._initialNFTIDs
  newPair.nfts = []
  newPair.nftBalance = BigInt.fromI32(event.inputs._initialNFTIDs.length)
  newPair.ethBalance = event.transaction.value
  newPair.owner = event.from.toHexString()
  newPair.collection = newCollection.id
  newPair.save()

  // Update Collection pairs and pairCount
  if (!newCollection.pairs.includes(newPair.id)) {
    newCollection.pairCount = plusBigInt(newCollection.pairCount, BigInt.fromI32(1));
    newCollection.pairs = newCollection.pairs.concat([newPair.id]);
    newCollection.save();
  }

  if (event.inputs._initialNFTIDs.length >= 1) {
    for (let i = 0; i <= event.inputs._initialNFTIDs.length - 1; i++) {
      const nftId = event.inputs._initialNFTIDs[i];
      let nft = NFT.load(event.outputs.pair.toHexString() + "-" + nftId.toString());
      if (!nft) {
        nft = new NFT(event.outputs.pair.toHexString() + "-" + nftId.toString());
        nft.tokenId = nftId;
        nft.contractAddress = event.inputs._nft.toHexString();
        nft.pair = event.outputs.pair.toHexString();
        nft.collection = event.inputs._nft.toHexString();
        nft.save();
      }

      newPair.nfts = newPair.nfts.concat([nft.id]);
      newPair.save();

      newCollection.nfts = newCollection.nfts.concat([nft.id]);
      newCollection.save();
    }
  }

  const dayString = new Date(event.block.timestamp.toI64() * 1000).toISOString().slice(0, 10).replaceAll("-", "")
  let poolStats = DailyETHPoolStat.load(newPair.collection + "-" + dayString)
  // todo: initial and current pair attributes/counts
  if (!poolStats) {
    poolStats = new DailyETHPoolStat(newPair.collection + "-" + dayString)
    poolStats.dayString = dayString
    poolStats.nftContract = newPair.collection
  }
  poolStats.ethDeposited = plusBigInt(event.transaction.value, poolStats.ethDeposited)
  poolStats.nftsDeposited = plusBigInt(BigInt.fromI32(event.inputs._initialNFTIDs.length), poolStats.nftsDeposited)
  poolStats.save()
  let protocolStats = DailyETHProtocolStat.load(dayString)
  if (!protocolStats) {
    protocolStats = new DailyETHProtocolStat(dayString)
    protocolStats.dayString = dayString
  }
  protocolStats.ethDeposited = plusBigInt(event.transaction.value, protocolStats.ethDeposited)
  protocolStats.nftsDeposited = plusBigInt(BigInt.fromI32(event.inputs._initialNFTIDs.length), protocolStats.nftsDeposited)
  protocolStats.numPairsCreated = plusBigInt(BigInt.fromI32(1), protocolStats.numPairsCreated)
  protocolStats.save()

  // protocolStats.numPoolsCreated = plusBigInt(BigInt.fromI32(1), protocolStats.numPoolsCreated)
}

export function handleNewPairEvent(event: NewPairEvent): void {

}

export function handleBondingCurveStatusUpdate(
  event: BondingCurveStatusUpdateEvent
): void { }

export function handleNFTDeposit(event: NFTDepositEvent): void {
  let entity = new NFTDeposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  let pair = updatePairAttributesIfMissing(Pair.load(event.params.poolAddress.toHexString())!)
  pair.inventoryCount = pair.inventoryCount!.plus(BigInt.fromI32(1))
  entity.timestamp = event.block.timestamp
  entity.pair = event.params.poolAddress.toHexString()
  entity.save()

  const dayString = new Date(event.block.timestamp.toI64() * 1000).toISOString().slice(0, 10).replaceAll("-", "")
  let dailyETHProtocolStats = DailyETHProtocolStat.load(dayString)
  if (!dailyETHProtocolStats) {
    dailyETHProtocolStats = new DailyETHProtocolStat(dayString)
    dailyETHProtocolStats.nftsDeposited = BigInt.fromI32(0)
  }
  dailyETHProtocolStats.nftsDeposited = plusBigInt(dailyETHProtocolStats.nftsDeposited, BigInt.fromI32(1))

  let dailyPairStats = DailyETHPairStat.load(pair.id + "-" + dayString)
  if (!dailyPairStats) {
    dailyPairStats = new DailyETHPairStat(pair.id + "-" + dayString)
    dailyPairStats.nftsDeposited = BigInt.fromI32(0)
  }
  dailyPairStats.nftsDeposited = plusBigInt(dailyPairStats.nftsDeposited, BigInt.fromI32(1))

  let dailyPoolStats = DailyETHPoolStat.load(pair.collection + "-" + dayString)
  if (!dailyPoolStats) {
    dailyPoolStats = new DailyETHPoolStat(pair.collection + "-" + dayString)
    dailyPoolStats.nftsDeposited = BigInt.fromI32(0)
  }
  dailyPoolStats.nftsDeposited = plusBigInt(dailyPoolStats.nftsDeposited, BigInt.fromI32(1))
  dailyETHProtocolStats.save()
  dailyPairStats.save()
  dailyPoolStats.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handleProtocolFeeMultiplierUpdate(
  event: ProtocolFeeMultiplierUpdate
): void {
  let protocolFee = new ProtocolFeeMultiplier("current")
  protocolFee.protocolFeeMultiplier = event.params.newMultiplier.toBigDecimal().div(
    BigDecimal.fromString((Math.pow(10, 18)).toString())
  )
  protocolFee.save()
}

export function handleProtocolFeeRecipientUpdate(
  event: ProtocolFeeRecipientUpdate
): void { }

export function handleRouterStatusUpdate(event: RouterStatusUpdate): void { }

export function handleTokenDeposit(event: TokenDepositEvent): void {
  let entity = new TokenDeposit(
    event.transaction.hash.toHexString() + "-" + event.logIndex.toString()
  )
  let pair = updatePairAttributesIfMissing(Pair.load(event.params.poolAddress.toHexString())!)
  entity.amountDeposited = event.transaction.value
  entity.pair = event.params.poolAddress.toHexString()
  entity.timestamp = event.block.timestamp
  pair.ethLiquidity = pair.ethLiquidity!.plus(event.transaction.value)
  entity.save()

  const dayString = new Date(event.block.timestamp.toI64() * 1000).toISOString().slice(0, 10).replaceAll("-", "")
  let dailyETHProtocolStats = DailyETHProtocolStat.load(dayString)
  if (!dailyETHProtocolStats) {
    dailyETHProtocolStats = new DailyETHProtocolStat(dayString)
    dailyETHProtocolStats.ethDeposited = BigInt.fromI32(0)
  }
  dailyETHProtocolStats.ethDeposited = plusBigInt(dailyETHProtocolStats.ethDeposited, entity.amountDeposited)

  let dailyPairStats = DailyETHPairStat.load(pair.id + "-" + dayString)
  if (!dailyPairStats) {
    dailyPairStats = new DailyETHPairStat(pair.id + "-" + dayString)
    dailyPairStats.ethDeposited = BigInt.fromI32(0)
  }
  dailyPairStats.ethDeposited = plusBigInt(dailyPairStats.ethDeposited, entity.amountDeposited)

  let dailyPoolStats = DailyETHPoolStat.load(pair.collection + "-" + dayString)
  if (!dailyPoolStats) {
    dailyPoolStats = new DailyETHPoolStat(pair.collection + "-" + dayString)
    dailyPoolStats.ethDeposited = BigInt.fromI32(0)
  }
  dailyPoolStats.ethDeposited = plusBigInt(dailyPoolStats.ethDeposited, entity.amountDeposited)
  dailyETHProtocolStats.save()
  dailyPairStats.save()
  dailyPoolStats.save()
}

export function handleSwapTokenForSpecificNFTs(call: ): void {
  
}
