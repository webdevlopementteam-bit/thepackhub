export const WEB3FORMS_ACCESS_KEYS = [
  "ea1eb459-5e8f-4dfb-a129-2e425e873320",
  "b786ad2a-9040-4232-92a2-3bbdb61d933f",
];

// Kept for backward compatibility
export const WEB3FORMS_ACCESS_KEY = WEB3FORMS_ACCESS_KEYS[0];

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Sends the same form data to every Web3Forms access key in parallel.
 * Resolves to { success, message } — success is true if at least one
 * submission succeeded.
 */
export async function submitToWeb3Forms(fields) {
  const results = await Promise.allSettled(
    WEB3FORMS_ACCESS_KEYS.map(async (key) => {
      const formData = new FormData();
      formData.append("access_key", key);
      Object.entries(fields).forEach(([name, value]) =>
        formData.append(name, value),
      );

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      return response.json();
    }),
  );

  const ok = results.find((r) => r.status === "fulfilled" && r.value?.success);
  if (ok) return ok.value;

  results.forEach((r) => {
    if (r.status === "rejected") console.error("Web3Forms error:", r.reason);
  });

  const failed = results.find((r) => r.status === "fulfilled");
  if (failed) return { success: false, message: failed.value?.message };

  throw results[0]?.reason || new Error("Web3Forms submission failed");
}
