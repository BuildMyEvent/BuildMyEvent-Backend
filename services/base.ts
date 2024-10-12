// Aca vamos a tener la logica de los NFTs
import { publicClient, client, accountAddress } from './client';
import { factoryAbi, ticketAbi } from './abi';

export const mintNFT = async (contractAddress: string, userAddress: string, uri: string) => {
    const { request } = await publicClient.simulateContract({
        //@ts-expect-error
        address: contractAddress,
        abi: ticketAbi,
        functionName: 'safeMint',
        args: [userAddress, uri]
    });

    const transactionHash = await client.writeContract(request);

    return transactionHash;
}

export const createEventTickets = async (name: string, symbol: string) => {
    const { request } = await publicClient.simulateContract({
        address: '0x16789Eaea1b59958e10a5fA27574C8481Cfa6bAB',
        abi: factoryAbi,
        functionName: 'createEventTickets',
        args: [name, symbol, accountAddress]
    });

    const transactionHash = await client.writeContract(request);

    return transactionHash;
}

export const grantMinterRole = async (contractAddress: string) => {
    const { request } = await publicClient.simulateContract({
        //@ts-expect-error
        address: contractAddress,
        abi: ticketAbi,
        functionName: 'grantMinterRole',
        args: [accountAddress]
    });

    const transactionHash = await client.writeContract(request);

    return transactionHash;
}