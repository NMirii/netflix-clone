"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

interface EdgeInfo {
  location: string;
  edgeRegion: string;
  latency: string;
}

export default function EdgeBadge() {
  const [info, setInfo] = useState<EdgeInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEdge = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/edge-location");
      const data = await res.json();
      const geo = data.geo ?? {};
	  console.log(geo);
      const city = geo.city && geo.city !== "Unknown" ? geo.city : "";
      const country =
        geo.country && geo.country !== "Unknown" ? geo.country : "";
      const location =
        [city, country].filter(Boolean).join(", ") ||
        data.edge?.location ||
        "Unknown";
      setInfo({
        location,
        edgeRegion: data.edge?.location ?? "—",
        latency: data.edge?.latency ?? "—",
      });
    } catch {
      setInfo({ location: "Unknown", edgeRegion: "—", latency: "—" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEdge();
  }, []);

  return (
    <button
      onClick={fetchEdge}
      disabled={loading}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "999px",
        border: "1px solid rgba(99, 220, 120, 0.4)",
        background: "rgba(16, 185, 129, 0.08)",
        color: "#34d399",
        fontSize: "12px",
        fontFamily: "monospace",
        cursor: loading ? "wait" : "pointer",
        transition: "all 0.2s",
        backdropFilter: "blur(4px)",
        whiteSpace: "nowrap",
      }}
      title={`Location: ${info?.location ?? "—"} · Edge: ${info?.edgeRegion ?? "—"} · ${info?.latency ?? "—"} (click to refresh)`}
    >
      <Zap size={12} fill="currentColor" />
      {loading
        ? "Edge..."
        : info
          ? `${info.location} · ${info.latency}`
          : "Edge Runtime"}
    </button>
  );
}
