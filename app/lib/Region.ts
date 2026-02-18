import { headers } from "next/headers";

export async function Region() {
  try {
    const point = await headers();
    const country = point.get("x-vercel-ip-country");
    return country?.length === 2 ? country.toUpperCase() : "TR";
  } catch (err) {
    console.error("Region failed:", err);
    return "US";
  }
}
