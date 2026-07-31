/** Verified Unsplash source images used across the marketing site (demo placeholders — see PRODUCT.md). */

function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
}

export const IMAGES = {
  heroTechnician: unsplash("photo-1676210134050-6f12c6898395", 1400),
  bathroomRenovation: unsplash("photo-1733426107854-ee00a25d72a7", 1200),
  heatingSystem: unsplash("photo-1776860155275-eee24bfb1dee", 1200),
} as const;
