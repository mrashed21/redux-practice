"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="">
        <h1 className="text-3xl font-bold"> Counter</h1>
        <div className="mt-5 flex items-center gap-5">
          <Button
            variant="outline"
            disabled={count === 0}
            onClick={() => dispatch(decrement())}
          >
            <Minus />
          </Button>
          <p>
            {count < 10 && <span>0</span>}
            {count}
          </p>
          <Button variant="outline" onClick={() => dispatch(increment())}>
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
