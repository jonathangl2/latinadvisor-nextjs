import BannerInterno from "@/components/BannerInterno";
import PodcastGrid from "@/components/PodcastGrid";
import { getAssetUrl } from "@/lib/url";

export default function PodcastPage() {

  const episodes = [
    "https://open.spotify.com/embed-podcast/episode/71ZD7zgHQjUecehtiO0p4X",
    "https://open.spotify.com/embed-podcast/episode/5Vjdpa4auVHO2m9bH7MGzZ",
    "https://open.spotify.com/embed-podcast/episode/3gqCOcjUxvMF0hF2ixTNJW",
    "https://open.spotify.com/embed-podcast/episode/3lPFiP5bUqTRjXZw5dhPlP",
    "https://open.spotify.com/embed-podcast/episode/2Dpov0fWiF6pAqLZaMIJhI",
    "https://open.spotify.com/embed-podcast/episode/5WHsDIHf4ChBbNMoTuX3Hw",
    "https://open.spotify.com/embed-podcast/episode/4P1aCwahlgbHXhGoL1eEQj",
    "https://open.spotify.com/embed-podcast/episode/58oSRqFbHlNMOJbWnZk8lf",
    "https://open.spotify.com/embed-podcast/episode/2HHMaRz2EEphwBhOihprLr",
    "https://open.spotify.com/embed-podcast/episode/0MpFSe01a2B71PYna7rnvF",
    "https://open.spotify.com/embed-podcast/episode/13Q0o9tsudCMYeureBKfbo",
    "https://open.spotify.com/embed-podcast/episode/5c5EJv8KKgDfbl70C6ZWCi",
    "https://open.spotify.com/embed-podcast/episode/0Y4SCSsFnYC3BiTDwZjelI"
  ];

  return (
    <>
			<BannerInterno
				imageSrc={getAssetUrl("/assets/images/banners/podcast.webp")}
				title="PODCAST"
				className="internal_page"
			/>
      <PodcastGrid episodes={episodes} />
    </>
  );
}
