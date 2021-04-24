import * as React from "react";
import '../style/global-loader.css';
import Loader from "react-loader-spinner";
import {useIsFetching} from "react-query";

function GlobalLoader() {
  const isFetching = useIsFetching();

  if (!isFetching) {
    return null;
  }

  return (
    <div className={'global-loader'}>
      <Loader type={'ThreeDots'}
              height={100}
              width={100}
              color={'#2074ba'}
      />
    </div>
  );
}

export default GlobalLoader;
