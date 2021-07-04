import * as React from "react";
import '../style/global-loader.css';
import Loader from "react-loader-spinner";
import * as ReactQuery from "react-query";

function GlobalLoader() {
  const isFetching = ReactQuery.useIsFetching();
  let hidden = false;
  if (!isFetching) {
    hidden = true;
  }

  return (
    <div className={`global-loader ${hidden ? 'hidden' : ''}`}>
      <span>{isFetching}</span>
      <Loader type={'ThreeDots'}
              height={100}
              width={100}
              color={'#eeeeee'}
      />
    </div>
  );
}

export default GlobalLoader;
