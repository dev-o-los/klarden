import React from "react";
import { SpotifyCard } from "@/registry/klarden-ui/spotify/spotify-card";

export default function SpotifyCardDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <SpotifyCard trackUrl="https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=17d74867a0a344e5" />
    </div>
  );
}
