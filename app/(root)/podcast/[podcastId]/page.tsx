import React from "react";

const PodcastDetails = ({ params }: { params: { podcastid: string } }) => {
  return <p className="text-white">PodcastDetails for {params.podcastid}</p>;
};

export default PodcastDetails;
