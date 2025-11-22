export interface Video {
  id: number;
  title: string;
  brand: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface VideoCardProps {
  video: Video;
  index: number;
  onClick: () => void;
}
