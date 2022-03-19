import fetchJson from "./fetchJson";
const { NEXT_PUBLIC_API_URL } = process.env;

export async function getData() {
  const response = await fetchJson(`${NEXT_PUBLIC_API_URL}`);
  const apiData = await response;
  const data = apiData.Search;
  return data;
}
