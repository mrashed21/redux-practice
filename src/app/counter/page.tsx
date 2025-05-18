"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((p) => p + 1);
  };
  const decrement = () => {
    if (counter === 0) return;
    setCounter((p) => p - 1);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-3xl font-bold"> Counter</h1>
        <div className="mt-5 flex items-center gap-5">
          <Button variant="outline" onClick={decrement}>
            <Minus />
          </Button>
          <p>{counter}</p>
          <Button variant="outline" onClick={increment}>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
