// Imports components to test and renders them according to the `component`
// query param.

import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "../src/components/Hello";

const renderHello = (element: HTMLElement): void => {
  ReactDOM.render(<Hello name="Bozza" enthusiasmLevel={1} />, element);
};

const main = (): void => {
  const urlParams = new URLSearchParams(window.location.search);
  const component = urlParams.get("component");
  const rootElement = document.getElementById("root");

  switch (component) {
    case "Hello":
      renderHello(rootElement);
      break;
    default:
      throw new Error(`no such component: ${component}`);
      break;
  }
};

main();
