export interface Video {
  id: number;
  title: string;
  brand: string;
  videoUrl?: string; // Legacy: Direct video URL (optional)
  cloudflareVideoId?: string; // Cloudflare Stream video UID
  thumbnailUrl: string;
}

export interface VideoCardProps {
  video: Video;
  index: number;
  onClick: () => void;
}
