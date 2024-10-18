// Aca vamos a tener la logica de los NFTs
import { publicClient, client, accountAddress, accountClient } from './client';
import { factoryAbi, ticketAbi } from './abi';

export const mintNFT = async (contractAddress: string, userAddress: string, uri: string) => {

    console.log('mint parameters', {
        address: contractAddress,
        functionName: 'safeMint',
        args: [userAddress, uri]
    });

    // const { request } = await publicClient.simulateContract({
    //     //@ts-expect-error
    //     address: contractAddress,
    //     abi: ticketAbi,
    //     functionName: 'safeMint',
    //     account: accountClient,
    //     args: [userAddress, uri]
    // });

    // console.log('request', request);

    // const transactionHash = await client.writeContract(request);

    const transactionHash = await client.writeContract({
        //@ts-expect-error
        address: contractAddress,
        abi: ticketAbi,
        functionName: 'safeMint',
        args: [userAddress, uri]
    })

    console.log('transactionHash', transactionHash);

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