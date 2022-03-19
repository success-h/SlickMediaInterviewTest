export class ApiError extends Error {
  constructor(url, status) {
    super(`${url} returned ${status}`);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
    this.name = "ApiError";
    this.status = status;
  }
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);

  if (response.status !== 200) {
    throw new ApiError(url, response.status);
  }

  return await response.json();
}

export default fetchJson;
