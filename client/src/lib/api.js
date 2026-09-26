/**
 * Backend base URL.
 * Set VITE_API_URL in client/.env for anything other than local dev.
 * Vite only exposes vars prefixed with VITE_ to the browser.
 */
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:7000";

export async function getHealth() {
  const res = await fetch(`${API_URL}/health`);

  if (!res.ok) {
    throw new Error(`Health check failed with status ${res.status}`);
  }

  return res.text();
}

export { API_URL };
