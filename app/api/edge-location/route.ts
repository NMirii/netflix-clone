import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const start = Date.now();

  const country =
    req.geo?.country ?? req.headers.get("x-vercel-ip-country") ?? "Unknown";
  const region =
    req.geo?.region ??
    req.headers.get("x-vercel-ip-country-region") ??
    "Unknown";
  const city =
    req.geo?.city ?? req.headers.get("x-vercel-ip-city") ?? "Unknown";
  const latitude = req.geo?.latitude ?? "0";
  const longitude = req.geo?.longitude ?? "0";
  const timezone = req.headers.get("x-vercel-ip-timezone") ?? "Unknown";

  const edgeLocation =
    req.headers.get("x-vercel-edge-region") ??
    req.headers.get("x-edge-location") ??
    "Local";

  const executionTime = `${Date.now() - start}ms`;

  return NextResponse.json({
    geo: {
      country,
      region,
      city,
      latitude,
      longitude,
      timezone,
    },
    edge: {
      location: edgeLocation,
      timestamp: new Date().toISOString(),
      latency: executionTime,
      runtime: "edge",
    },
    performance: {
      coldStart: false,
      executionTime,
      cacheStatus: req.headers.get("x-cache") ?? "MISS",
    },
  });
}
