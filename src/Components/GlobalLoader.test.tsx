import * as React from "react";
import {render} from "@testing-library/react";
import GlobalLoader from "./GlobalLoader";
import * as ReactQuery from "react-query";
import {renderHook} from "@testing-library/react-hooks";
import {useIsFetching} from "react-query";

describe('The global loader will appear when any API loads are happening', () => {
  it('will render hidden when there are no loads happening', async () => {
    const client = new ReactQuery.QueryClient();
    const wrapper = ((children: JSX.Element) => (
      <ReactQuery.QueryClientProvider client={client}>
        {children}
      </ReactQuery.QueryClientProvider>
    ));


    const {result} = renderHook(() => useIsFetching(), {wrapper});



  });
});
