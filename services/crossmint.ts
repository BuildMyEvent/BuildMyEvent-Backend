// logica para crear wallet a partir de correo
export const createWallet = async (email: string) => {
  const apiKey = process.env.CROSSMINT_API_KEY ?? '';
  const isProduction = process.env.CROSSMINT_ENV === 'production';
  const apiUrl = isProduction
    ? "https://www.crossmint.com/api/v1-alpha1/wallets"
    : "https://staging.crossmint.com/api/v1-alpha1/wallets";
  const chain = isProduction ? "base" : "base-sepolia";

  const options = {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey, // Replace with your actual API key
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email, // Format the email in the request body
      chain: chain,
    }),
  };

  try {
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    if (!response.ok) {
      console.error("Failed to create wallet:", data);
      return { status: response.status, error: data.message || "Failed to create wallet" };
    }

    console.log("Wallet created successfully:", data);
    return { status: response.status, data };
  } catch (error) {
    console.error("Error occurred:", error);
    return { status: 500, error: "An error occurred while creating the wallet" };
  }
};
