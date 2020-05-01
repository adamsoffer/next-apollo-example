/* eslint-env jest */
import React from "react";
import { act, render } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import About from "../pages/about";

it('says "we integrate Apollo seamlessly with Next"', async () => {
  const router = {
    pathname: "/about",
    route: "/about",
    query: {},
    asPath: "/about"
  };

  let container;
  await act(async () => {
    container = render(
      <RouterContext.Provider value={router}>
        <About />
      </RouterContext.Provider>
    ).container;
  });

  expect(container.textContent).toMatch(
    /we integrate Apollo seamlessly with Next/
  );
});
