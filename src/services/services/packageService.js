import { apiRequest } from "./api";
const BASE_URL = "https://travelsync-production.up.railway.app/";

export const getPackages = () => {
  return apiRequest("/packages");
};

// export const getPackageById = (id) => {
//   return apiRequest(`/packages/${id}`);
// };

export async function getPackageById(id) {
  const response = await fetch(`${BASE_URL}/packages/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch package.");
  }

  return response.json();
}