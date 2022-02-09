/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PeggedOracleV1 } from "../PeggedOracleV1";

export class PeggedOracleV1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PeggedOracleV1> {
    return super.deploy(overrides || {}) as Promise<PeggedOracleV1>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PeggedOracleV1 {
    return super.attach(address) as PeggedOracleV1;
  }
  connect(signer: Signer): PeggedOracleV1__factory {
    return super.connect(signer) as PeggedOracleV1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PeggedOracleV1 {
    return new Contract(address, _abi, signerOrProvider) as PeggedOracleV1;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "getDataParameter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peekSpot",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103ac806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063c699c4d614610067578063d39bbef01461014a578063d568866c146101ca578063d6d7d52514610238578063ea887d08146102c1578063eeb8a8d314610238575b600080fd5b6100d56004803603602081101561007d57600080fd5b810190602081018135600160201b81111561009757600080fd5b8201836020820111156100a957600080fd5b803590602001918460018302840111600160201b831117156100ca57600080fd5b5090925090506102de565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010f5781810151838201526020016100f7565b50505050905090810190601f16801561013c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b86004803603602081101561016057600080fd5b810190602081018135600160201b81111561017a57600080fd5b82018360208201111561018c57600080fd5b803590602001918460018302840111600160201b831117156101ad57600080fd5b5090925090506102fd565b60408051918252519081900360200190f35b6100d5600480360360208110156101e057600080fd5b810190602081018135600160201b8111156101fa57600080fd5b82018360208201111561020c57600080fd5b803590602001918460018302840111600160201b8311171561022d57600080fd5b509092509050610311565b6102a66004803603602081101561024e57600080fd5b810190602081018135600160201b81111561026857600080fd5b82018360208201111561027a57600080fd5b803590602001918460018302840111600160201b8311171561029b57600080fd5b509092509050610333565b60408051921515835260208301919091528051918290030190f35b6100d5600480360360208110156102d757600080fd5b5035610358565b505060408051808201909152600381526250454760e81b602082015290565b60006103098383610333565b949350505050565b5050604080518082019091526006815265141959d9d95960d21b602082015290565b60008060008484602081101561034857600080fd5b5035801515969095509350505050565b6040805160208082019390935281518082039093018352810190529056fea26469706673582212202b9263b7e01e8370ef149098417aed0815f2541aaed57d8b53271d5dd6a2bc1664736f6c634300060c0033";
