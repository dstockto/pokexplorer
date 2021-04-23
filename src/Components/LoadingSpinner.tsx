import * as React from "react";
import Loader from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
}

export default LoadingSpinner;
