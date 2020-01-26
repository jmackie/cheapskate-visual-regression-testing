import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "../src/components/Hello";

const renderHello = (elements: HTMLElement[]): void => {
  elements.forEach(element => {
    ReactDOM.render(<Hello name="Bozza" enthusiasmLevel={1} />, element);
  });
};

const main = (): void => {
  const elements = [
    document.getElementById("desktop"),
    document.getElementById("tablet"),
    document.getElementById("mobile")
  ];
  switch (location.pathname) {
    case "/Hello":
      renderHello(elements);
    default:
      throw new Error("bad path");
  }
};

main();
