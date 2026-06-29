const BASE_URL = "http://localhost:3001";

async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Something went wrong while communicating with the server.");
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export { apiRequest };