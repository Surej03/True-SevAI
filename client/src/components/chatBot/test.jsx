import { useState } from "react";

const test =()=> {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter text"
        className="border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter number"
        className="border p-2 rounded"
        value={count}
        onChange={(e) => setCount(Number(e.target.value) || 1)}
      />
      <div className="mt-4">
        {Array.from({ length: count }, (_, i) => (
          <p key={i} className="text-lg font-semibold">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default test;