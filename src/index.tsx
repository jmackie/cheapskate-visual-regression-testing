import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";

const App: React.FunctionComponent<{}> = () => {
  const [enthusiasm, setEnthusiasm] = React.useState(1);
  return (
    <Hello
      name="Bozza"
      enthusiasmLevel={enthusiasm}
      onIncrement={() => setEnthusiasm(enthusiasm + 1)}
      onDecrement={() => setEnthusiasm(enthusiasm - 1)}
    />
  );
};

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
