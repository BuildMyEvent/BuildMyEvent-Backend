import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import dotenv from  'dotenv';

dotenv.config();

let privateKey = process.env.PRIVATE_KEY || '';

//@ts-expect-error
const account = privateKeyToAccount(privateKey);

export const accountAddress = account.address;

export const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http()
});

export const client = createWalletClient({
    account,
    chain: baseSepolia,
    transport: http()
});