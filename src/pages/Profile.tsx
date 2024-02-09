import React from "react";
import { useParams } from "react-router-dom";

type ProfileParams = {
  profileId: string;
}

export function Profile(): React.JSX.Element {
  const params = useParams<ProfileParams>();

  return (
    <div>
      <h1>Profile Page {params.profileId}</h1>
    </div>
  );
}
