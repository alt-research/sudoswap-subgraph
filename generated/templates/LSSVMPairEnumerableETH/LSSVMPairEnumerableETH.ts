// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AssetRecipientChange extends ethereum.Event {
  get params(): AssetRecipientChange__Params {
    return new AssetRecipientChange__Params(this);
  }
}

export class AssetRecipientChange__Params {
  _event: AssetRecipientChange;

  constructor(event: AssetRecipientChange) {
    this._event = event;
  }

  get a(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DeltaUpdate extends ethereum.Event {
  get params(): DeltaUpdate__Params {
    return new DeltaUpdate__Params(this);
  }
}

export class DeltaUpdate__Params {
  _event: DeltaUpdate;

  constructor(event: DeltaUpdate) {
    this._event = event;
  }

  get newDelta(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class FeeUpdate extends ethereum.Event {
  get params(): FeeUpdate__Params {
    return new FeeUpdate__Params(this);
  }
}

export class FeeUpdate__Params {
  _event: FeeUpdate;

  constructor(event: FeeUpdate) {
    this._event = event;
  }

  get newFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NFTWithdrawal extends ethereum.Event {
  get params(): NFTWithdrawal__Params {
    return new NFTWithdrawal__Params(this);
  }
}

export class NFTWithdrawal__Params {
  _event: NFTWithdrawal;

  constructor(event: NFTWithdrawal) {
    this._event = event;
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get newOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SpotPriceUpdate extends ethereum.Event {
  get params(): SpotPriceUpdate__Params {
    return new SpotPriceUpdate__Params(this);
  }
}

export class SpotPriceUpdate__Params {
  _event: SpotPriceUpdate;

  constructor(event: SpotPriceUpdate) {
    this._event = event;
  }

  get newSpotPrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SwapNFTInPair extends ethereum.Event {
  get params(): SwapNFTInPair__Params {
    return new SwapNFTInPair__Params(this);
  }
}

export class SwapNFTInPair__Params {
  _event: SwapNFTInPair;

  constructor(event: SwapNFTInPair) {
    this._event = event;
  }
}

export class SwapNFTOutPair extends ethereum.Event {
  get params(): SwapNFTOutPair__Params {
    return new SwapNFTOutPair__Params(this);
  }
}

export class SwapNFTOutPair__Params {
  _event: SwapNFTOutPair;

  constructor(event: SwapNFTOutPair) {
    this._event = event;
  }
}

export class TokenDeposit extends ethereum.Event {
  get params(): TokenDeposit__Params {
    return new TokenDeposit__Params(this);
  }
}

export class TokenDeposit__Params {
  _event: TokenDeposit;

  constructor(event: TokenDeposit) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TokenWithdrawal extends ethereum.Event {
  get params(): TokenWithdrawal__Params {
    return new TokenWithdrawal__Params(this);
  }
}

export class TokenWithdrawal__Params {
  _event: TokenWithdrawal;

  constructor(event: TokenWithdrawal) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LSSVMPairEnumerableETH__getBuyNFTQuoteResult {
  value0: i32;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: i32,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getError(): i32 {
    return this.value0;
  }

  getNewSpotPrice(): BigInt {
    return this.value1;
  }

  getNewDelta(): BigInt {
    return this.value2;
  }

  getInputAmount(): BigInt {
    return this.value3;
  }

  getProtocolFee(): BigInt {
    return this.value4;
  }
}

export class LSSVMPairEnumerableETH__getSellNFTQuoteResult {
  value0: i32;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: i32,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getError(): i32 {
    return this.value0;
  }

  getNewSpotPrice(): BigInt {
    return this.value1;
  }

  getNewDelta(): BigInt {
    return this.value2;
  }

  getOutputAmount(): BigInt {
    return this.value3;
  }

  getProtocolFee(): BigInt {
    return this.value4;
  }
}

export class LSSVMPairEnumerableETH extends ethereum.SmartContract {
  static bind(address: Address): LSSVMPairEnumerableETH {
    return new LSSVMPairEnumerableETH("LSSVMPairEnumerableETH", address);
  }

  assetRecipient(): Address {
    let result = super.call("assetRecipient", "assetRecipient():(address)", []);

    return result[0].toAddress();
  }

  try_assetRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "assetRecipient",
      "assetRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bondingCurve(): Address {
    let result = super.call("bondingCurve", "bondingCurve():(address)", []);

    return result[0].toAddress();
  }

  try_bondingCurve(): ethereum.CallResult<Address> {
    let result = super.tryCall("bondingCurve", "bondingCurve():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  delta(): BigInt {
    let result = super.call("delta", "delta():(uint128)", []);

    return result[0].toBigInt();
  }

  try_delta(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("delta", "delta():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fee(): BigInt {
    let result = super.call("fee", "fee():(uint96)", []);

    return result[0].toBigInt();
  }

  try_fee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fee", "fee():(uint96)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllHeldIds(): Array<BigInt> {
    let result = super.call("getAllHeldIds", "getAllHeldIds():(uint256[])", []);

    return result[0].toBigIntArray();
  }

  try_getAllHeldIds(): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getAllHeldIds",
      "getAllHeldIds():(uint256[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAssetRecipient(): Address {
    let result = super.call(
      "getAssetRecipient",
      "getAssetRecipient():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getAssetRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetRecipient",
      "getAssetRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getBuyNFTQuote(
    numNFTs: BigInt
  ): LSSVMPairEnumerableETH__getBuyNFTQuoteResult {
    let result = super.call(
      "getBuyNFTQuote",
      "getBuyNFTQuote(uint256):(uint8,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(numNFTs)]
    );

    return new LSSVMPairEnumerableETH__getBuyNFTQuoteResult(
      result[0].toI32(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getBuyNFTQuote(
    numNFTs: BigInt
  ): ethereum.CallResult<LSSVMPairEnumerableETH__getBuyNFTQuoteResult> {
    let result = super.tryCall(
      "getBuyNFTQuote",
      "getBuyNFTQuote(uint256):(uint8,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(numNFTs)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LSSVMPairEnumerableETH__getBuyNFTQuoteResult(
        value[0].toI32(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  getSellNFTQuote(
    numNFTs: BigInt
  ): LSSVMPairEnumerableETH__getSellNFTQuoteResult {
    let result = super.call(
      "getSellNFTQuote",
      "getSellNFTQuote(uint256):(uint8,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(numNFTs)]
    );

    return new LSSVMPairEnumerableETH__getSellNFTQuoteResult(
      result[0].toI32(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getSellNFTQuote(
    numNFTs: BigInt
  ): ethereum.CallResult<LSSVMPairEnumerableETH__getSellNFTQuoteResult> {
    let result = super.tryCall(
      "getSellNFTQuote",
      "getSellNFTQuote(uint256):(uint8,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(numNFTs)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LSSVMPairEnumerableETH__getSellNFTQuoteResult(
        value[0].toI32(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  nft(): Address {
    let result = super.call("nft", "nft():(address)", []);

    return result[0].toAddress();
  }

  try_nft(): ethereum.CallResult<Address> {
    let result = super.tryCall("nft", "nft():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pairVariant(): i32 {
    let result = super.call("pairVariant", "pairVariant():(uint8)", []);

    return result[0].toI32();
  }

  try_pairVariant(): ethereum.CallResult<i32> {
    let result = super.tryCall("pairVariant", "pairVariant():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  poolType(): i32 {
    let result = super.call("poolType", "poolType():(uint8)", []);

    return result[0].toI32();
  }

  try_poolType(): ethereum.CallResult<i32> {
    let result = super.tryCall("poolType", "poolType():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  spotPrice(): BigInt {
    let result = super.call("spotPrice", "spotPrice():(uint128)", []);

    return result[0].toBigInt();
  }

  try_spotPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("spotPrice", "spotPrice():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  swapNFTsForToken(
    nftIds: Array<BigInt>,
    minExpectedTokenOutput: BigInt,
    tokenRecipient: Address,
    isRouter: boolean,
    routerCaller: Address
  ): BigInt {
    let result = super.call(
      "swapNFTsForToken",
      "swapNFTsForToken(uint256[],uint256,address,bool,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(nftIds),
        ethereum.Value.fromUnsignedBigInt(minExpectedTokenOutput),
        ethereum.Value.fromAddress(tokenRecipient),
        ethereum.Value.fromBoolean(isRouter),
        ethereum.Value.fromAddress(routerCaller)
      ]
    );

    return result[0].toBigInt();
  }

  try_swapNFTsForToken(
    nftIds: Array<BigInt>,
    minExpectedTokenOutput: BigInt,
    tokenRecipient: Address,
    isRouter: boolean,
    routerCaller: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "swapNFTsForToken",
      "swapNFTsForToken(uint256[],uint256,address,bool,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(nftIds),
        ethereum.Value.fromUnsignedBigInt(minExpectedTokenOutput),
        ethereum.Value.fromAddress(tokenRecipient),
        ethereum.Value.fromBoolean(isRouter),
        ethereum.Value.fromAddress(routerCaller)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CallCall extends ethereum.Call {
  get inputs(): CallCall__Inputs {
    return new CallCall__Inputs(this);
  }

  get outputs(): CallCall__Outputs {
    return new CallCall__Outputs(this);
  }
}

export class CallCall__Inputs {
  _call: CallCall;

  constructor(call: CallCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class CallCall__Outputs {
  _call: CallCall;

  constructor(call: CallCall) {
    this._call = call;
  }
}

export class ChangeAssetRecipientCall extends ethereum.Call {
  get inputs(): ChangeAssetRecipientCall__Inputs {
    return new ChangeAssetRecipientCall__Inputs(this);
  }

  get outputs(): ChangeAssetRecipientCall__Outputs {
    return new ChangeAssetRecipientCall__Outputs(this);
  }
}

export class ChangeAssetRecipientCall__Inputs {
  _call: ChangeAssetRecipientCall;

  constructor(call: ChangeAssetRecipientCall) {
    this._call = call;
  }

  get newRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeAssetRecipientCall__Outputs {
  _call: ChangeAssetRecipientCall;

  constructor(call: ChangeAssetRecipientCall) {
    this._call = call;
  }
}

export class ChangeDeltaCall extends ethereum.Call {
  get inputs(): ChangeDeltaCall__Inputs {
    return new ChangeDeltaCall__Inputs(this);
  }

  get outputs(): ChangeDeltaCall__Outputs {
    return new ChangeDeltaCall__Outputs(this);
  }
}

export class ChangeDeltaCall__Inputs {
  _call: ChangeDeltaCall;

  constructor(call: ChangeDeltaCall) {
    this._call = call;
  }

  get newDelta(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeDeltaCall__Outputs {
  _call: ChangeDeltaCall;

  constructor(call: ChangeDeltaCall) {
    this._call = call;
  }
}

export class ChangeFeeCall extends ethereum.Call {
  get inputs(): ChangeFeeCall__Inputs {
    return new ChangeFeeCall__Inputs(this);
  }

  get outputs(): ChangeFeeCall__Outputs {
    return new ChangeFeeCall__Outputs(this);
  }
}

export class ChangeFeeCall__Inputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }

  get newFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeFeeCall__Outputs {
  _call: ChangeFeeCall;

  constructor(call: ChangeFeeCall) {
    this._call = call;
  }
}

export class ChangeSpotPriceCall extends ethereum.Call {
  get inputs(): ChangeSpotPriceCall__Inputs {
    return new ChangeSpotPriceCall__Inputs(this);
  }

  get outputs(): ChangeSpotPriceCall__Outputs {
    return new ChangeSpotPriceCall__Outputs(this);
  }
}

export class ChangeSpotPriceCall__Inputs {
  _call: ChangeSpotPriceCall;

  constructor(call: ChangeSpotPriceCall) {
    this._call = call;
  }

  get newSpotPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeSpotPriceCall__Outputs {
  _call: ChangeSpotPriceCall;

  constructor(call: ChangeSpotPriceCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetRecipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _delta(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _spotPrice(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get calls(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }

  get revertOnFail(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SwapNFTsForTokenCall extends ethereum.Call {
  get inputs(): SwapNFTsForTokenCall__Inputs {
    return new SwapNFTsForTokenCall__Inputs(this);
  }

  get outputs(): SwapNFTsForTokenCall__Outputs {
    return new SwapNFTsForTokenCall__Outputs(this);
  }
}

export class SwapNFTsForTokenCall__Inputs {
  _call: SwapNFTsForTokenCall;

  constructor(call: SwapNFTsForTokenCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get minExpectedTokenOutput(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenRecipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get isRouter(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get routerCaller(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class SwapNFTsForTokenCall__Outputs {
  _call: SwapNFTsForTokenCall;

  constructor(call: SwapNFTsForTokenCall) {
    this._call = call;
  }

  get outputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SwapTokenForAnyNFTsCall extends ethereum.Call {
  get inputs(): SwapTokenForAnyNFTsCall__Inputs {
    return new SwapTokenForAnyNFTsCall__Inputs(this);
  }

  get outputs(): SwapTokenForAnyNFTsCall__Outputs {
    return new SwapTokenForAnyNFTsCall__Outputs(this);
  }
}

export class SwapTokenForAnyNFTsCall__Inputs {
  _call: SwapTokenForAnyNFTsCall;

  constructor(call: SwapTokenForAnyNFTsCall) {
    this._call = call;
  }

  get numNFTs(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxExpectedTokenInput(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nftRecipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get isRouter(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get routerCaller(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class SwapTokenForAnyNFTsCall__Outputs {
  _call: SwapTokenForAnyNFTsCall;

  constructor(call: SwapTokenForAnyNFTsCall) {
    this._call = call;
  }

  get inputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SwapTokenForSpecificNFTsCall extends ethereum.Call {
  get inputs(): SwapTokenForSpecificNFTsCall__Inputs {
    return new SwapTokenForSpecificNFTsCall__Inputs(this);
  }

  get outputs(): SwapTokenForSpecificNFTsCall__Outputs {
    return new SwapTokenForSpecificNFTsCall__Outputs(this);
  }
}

export class SwapTokenForSpecificNFTsCall__Inputs {
  _call: SwapTokenForSpecificNFTsCall;

  constructor(call: SwapTokenForSpecificNFTsCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get maxExpectedTokenInput(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nftRecipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get isRouter(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get routerCaller(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class SwapTokenForSpecificNFTsCall__Outputs {
  _call: SwapTokenForSpecificNFTsCall;

  constructor(call: SwapTokenForSpecificNFTsCall) {
    this._call = call;
  }

  get inputAmount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawAllETHCall extends ethereum.Call {
  get inputs(): WithdrawAllETHCall__Inputs {
    return new WithdrawAllETHCall__Inputs(this);
  }

  get outputs(): WithdrawAllETHCall__Outputs {
    return new WithdrawAllETHCall__Outputs(this);
  }
}

export class WithdrawAllETHCall__Inputs {
  _call: WithdrawAllETHCall;

  constructor(call: WithdrawAllETHCall) {
    this._call = call;
  }
}

export class WithdrawAllETHCall__Outputs {
  _call: WithdrawAllETHCall;

  constructor(call: WithdrawAllETHCall) {
    this._call = call;
  }
}

export class WithdrawERC1155Call extends ethereum.Call {
  get inputs(): WithdrawERC1155Call__Inputs {
    return new WithdrawERC1155Call__Inputs(this);
  }

  get outputs(): WithdrawERC1155Call__Outputs {
    return new WithdrawERC1155Call__Outputs(this);
  }
}

export class WithdrawERC1155Call__Inputs {
  _call: WithdrawERC1155Call;

  constructor(call: WithdrawERC1155Call) {
    this._call = call;
  }

  get a(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class WithdrawERC1155Call__Outputs {
  _call: WithdrawERC1155Call;

  constructor(call: WithdrawERC1155Call) {
    this._call = call;
  }
}

export class WithdrawERC20Call extends ethereum.Call {
  get inputs(): WithdrawERC20Call__Inputs {
    return new WithdrawERC20Call__Inputs(this);
  }

  get outputs(): WithdrawERC20Call__Outputs {
    return new WithdrawERC20Call__Outputs(this);
  }
}

export class WithdrawERC20Call__Inputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }

  get a(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawERC20Call__Outputs {
  _call: WithdrawERC20Call;

  constructor(call: WithdrawERC20Call) {
    this._call = call;
  }
}

export class WithdrawERC721Call extends ethereum.Call {
  get inputs(): WithdrawERC721Call__Inputs {
    return new WithdrawERC721Call__Inputs(this);
  }

  get outputs(): WithdrawERC721Call__Outputs {
    return new WithdrawERC721Call__Outputs(this);
  }
}

export class WithdrawERC721Call__Inputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }

  get a(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nftIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class WithdrawERC721Call__Outputs {
  _call: WithdrawERC721Call;

  constructor(call: WithdrawERC721Call) {
    this._call = call;
  }
}

export class WithdrawETHCall extends ethereum.Call {
  get inputs(): WithdrawETHCall__Inputs {
    return new WithdrawETHCall__Inputs(this);
  }

  get outputs(): WithdrawETHCall__Outputs {
    return new WithdrawETHCall__Outputs(this);
  }
}

export class WithdrawETHCall__Inputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawETHCall__Outputs {
  _call: WithdrawETHCall;

  constructor(call: WithdrawETHCall) {
    this._call = call;
  }
}