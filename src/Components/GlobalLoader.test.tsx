import * as React from "react";
import {render} from "@testing-library/react";
import GlobalLoader from "./GlobalLoader";
import {QueryClient, QueryClientProvider} from "react-query";

describe('The global loader will appear when any API loads are happening', () => {
  it('will render hidden when there are no loads happening', async () => {
    const client = new QueryClient();
    client.isFetching = () => {
      return 0;
    }
    const wrapper = ((children: JSX.Element) => (
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    ));

    const {container} = render(wrapper(<GlobalLoader/>));
    const loader = container.getElementsByClassName('global-loader');
    expect(loader.length).toBe(1);
    expect(loader[0]).toHaveClass('hidden');
    const counter = loader[0].getElementsByTagName('span');
    expect(counter[0]).toContainHTML('0');
  });

  it('will render a counter', async () => {
    const client = new QueryClient();
    const wrapper = ((children: JSX.Element) => (
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    ));

    const queries = Math.floor(Math.random() * 42) + 1;

    client.isFetching = () => {
      return queries;
    }

    const {container} = render(wrapper(<GlobalLoader/>));
    const loader = container.getElementsByClassName('global-loader');
    expect(loader.length).toBe(1);
    expect(loader[0]).not.toHaveClass('hidden');
    const counter = loader[0].getElementsByTagName('span');
    expect(counter[0].textContent).toEqual(queries.toString());
    expect(loader[0].getElementsByTagName('svg').length).toEqual(1);
  });
});
