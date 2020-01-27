// https://github.com/microsoft/TypeScript-React-Starter/blob/master/src/components/Hello.tsx

import * as React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello: React.FunctionComponent<Props> = ({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}) => {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Hello;

const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");
