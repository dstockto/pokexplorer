import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

test('renders the app', () => {
  const {container} = render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);
  expect(container.getElementsByTagName('div')[0]).toHaveClass('App');
});
