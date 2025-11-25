interface PodcastGridProps {
  episodes: string[];
}

export default function PodcastGrid({ episodes }: PodcastGridProps) {
  return (
    <section className="container-pqr container-fluid py-5">
      <div className="container">
        <div className="row d-flex justify-content-start align-items-stretch py-lg-5">

          {episodes.map((url, index) => (
            <div key={index} className="col-12 col-lg-6 mb-4">
              <iframe
                src={url}
                width="100%"
                height="190"
                frameBorder="0"
                allow="encrypted-media"
                allowTransparency={true}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
