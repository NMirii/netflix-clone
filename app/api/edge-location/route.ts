import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const start = Date.now();

    const country =
      req.geo?.country ?? req.headers.get("x-vercel-ip-country") ?? "Unknown";
    const region =
      req.geo?.region ??
      req.headers.get("x-vercel-ip-country-region") ??
      "Unknown";
    const city =
      req.geo?.city ?? req.headers.get("x-vercel-ip-city") ?? "Unknown";
    const latitude = req.geo?.latitude ?? null;
    const longitude = req.geo?.longitude ?? null;
    const timezone = req.headers.get("x-vercel-ip-timezone") ?? "Unknown";

    const edgeLocation =
      req.headers.get("x-vercel-id")?.split("::")[0] ?? "Local";

    const cacheStatus = req.headers.get("x-cache") ?? "MISS";

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
        executionTime,
        cacheStatus,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: String(error) },
      { status: 500 }
    );
  }
}