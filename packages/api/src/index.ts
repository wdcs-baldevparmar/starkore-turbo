import { ethers } from "ethers";

export function getEthBalance(providerUrl: string, address: string) {
  const provider = new ethers.JsonRpcProvider(providerUrl);
  return provider.getBalance(address);
}
