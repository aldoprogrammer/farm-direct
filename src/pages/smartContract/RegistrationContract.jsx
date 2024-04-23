  //  0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8 

  const CONTRACT_ABI = registrationJson.abi as unknown as AbiItem
  const CONTRACT_ADDRESS = networkSettings[networkId ?? 5777].address as Address

export const registrationContract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS,
  )

  export function getContractAddress() {
    return CONTRACT_ADDRESS
  }

  export async function requestAccounts() {
    return web3.eth.requestAccounts()
  }