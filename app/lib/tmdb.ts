const TMDB_API_KEY = "8265bd1679663a7ea12ac168da84d2e8"; // Public demo key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export const TMDB_CONFIG = {
  apiKey: TMDB_API_KEY,
  baseUrl: TMDB_BASE_URL,
  imageBase: TMDB_IMAGE_BASE,
} as const;

export const IMAGE_SIZES = {
  poster: {
    small: "/w200",
    medium: "/w500",
    large: "/w780",
    original: "/original",
  },
  backdrop: {
    small: "/w300",
    medium: "/w780",
    large: "/w1280",
    original: "/original",
  },
} as const;

export function getImageUrl(
  path: string | null,
  size: "small" | "medium" | "large" | "original" = "medium",
  type: "poster" | "backdrop" = "poster",
): string {
  if (!path) {
    return `https://via.placeholder.com/500x750/141414/E50914?text=No+Image`;
  }

  const sizeConfig = IMAGE_SIZES[type][size];
  return `${TMDB_IMAGE_BASE}${sizeConfig}${path}`;
}

async function tmdbFetch(
  endpoint: string,
  params: Record<string, string> = {},
) {
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
  url.searchParams.append("api_key", TMDB_API_KEY);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }

  return response.json();
}
