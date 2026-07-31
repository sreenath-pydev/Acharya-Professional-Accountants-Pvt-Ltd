import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

/**
 * Server-side render function for SSG prerendering.
 * Renders the App tree into an HTML string and captures Helmet SEO context using MemoryRouter.
 *
 * @param {string} url - The route path to render (e.g. '/about')
 * @returns {{ appHtml: string, helmet: object }}
 */
export function render(url) {
  const helmetContext = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>
        <App isSsr={true} />
      </MemoryRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    appHtml,
    helmet
  };
}
