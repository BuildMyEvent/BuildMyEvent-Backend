import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import dotenv from 'dotenv';

dotenv.config();

let privateKey = process.env.PRIVATE_KEY || '';

//@ts-expect-error
export const accountClient = privateKeyToAccount(privateKey);

export const accountAddress = accountClient.address;

export const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http()
});

export const client = createWalletClient({
    account: accountClient,
    chain: baseSepolia,
    transport: http()
});