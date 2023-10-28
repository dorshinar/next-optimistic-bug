"use client";

import { useEffect, useOptimistic, useState } from "react";

export function Form() {
  const [_arr, setArr] = useState([1, 2, 3]);
  console.log("🚀 ~ _arr:", _arr);

  useEffect(() => {
    setInterval(() => {
      setArr((a) => [...a, a.length]);
    }, 1000);
  }, []);

  const [arr] = useOptimistic(_arr);
  console.log("🚀 ~ arr:", arr);

  return (
    <form>
      {JSON.stringify(arr)}
      <button>Toggle Checked</button>
    </form>
  );
}
