/**
 * Cloudflare Stream utility functions for generating video URLs
 */

const getCustomerCode = (): string => {
  // const customerCode = process.env.NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_CODE;
  const customerCode = "n2iggl8qik1n4ara"; // --- IGNORE ---
  if (!customerCode) {
    console.warn('NEXT_PUBLIC_CLOUDFLARE_CUSTOMER_CODE is not set in environment variables');
    return '';
  }
  return customerCode;
};

/**
 * Generate HLS manifest URL for a Cloudflare Stream video
 * @param videoId - The Cloudflare Stream video UID
 * @returns HLS manifest URL (.m3u8)
 */
export const getStreamUrl = (videoId: string): string => {
  const customerCode = getCustomerCode();
  return `https://customer-${customerCode}.cloudflarestream.com/${videoId}/manifest/video.m3u8`;
};

/**
 * Generate thumbnail URL for a Cloudflare Stream video
 * @param videoId - The Cloudflare Stream video UID
 * @param time - Timestamp to capture thumbnail (e.g., '1s', '10s', '1m')
 * @param height - Height of the thumbnail in pixels
 * @returns Thumbnail image URL
 */
export const getThumbnailUrl = (
  videoId: string,
  time: string = '1s',
  height: number = 270
): string => {
  const customerCode = getCustomerCode();
  return `https://customer-${customerCode}.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=${time}&height=${height}`;
};

/**
 * Generate poster URL for a Cloudflare Stream video (higher quality than thumbnail)
 * @param videoId - The Cloudflare Stream video UID
 * @param time - Timestamp to capture poster (e.g., '1s', '10s', '1m')
 * @returns Poster image URL
 */
export const getPosterUrl = (
  videoId: string,
  time: string = '1s'
): string => {
  const customerCode = getCustomerCode();
  return `https://customer-${customerCode}.cloudflarestream.com/${videoId}/thumbnails/thumbnail.jpg?time=${time}&width=1920`;
};
