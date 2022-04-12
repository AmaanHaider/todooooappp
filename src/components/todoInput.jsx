import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  return (
    <div className="inputDiv">
      <input
        onChange={(e) => {
          //   console.log(e.target.value)
          setText(e.target.value);
        }}
        type="text"
        placeholder="ENTER TODO"
      />

      <button
        onClick={() => {
          getData(text);
        }}
      >
        ADD TODO+
      </button>
    </div>
  );
};
