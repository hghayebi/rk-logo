import React, { useEffect, useRef } from "react";
import Logo from "./Logo";
import { useAppDispatch } from "@/hooks/hooks";
import { setContainerBoxPosition } from "@/store";

export default function MediaBox() {
  const dispatch = useAppDispatch();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(
      setContainerBoxPosition({
        bottom: ref.current?.getBoundingClientRect().bottom || 0,
        right: ref.current?.getBoundingClientRect().right || 0,
      })
    );
  }, [dispatch]);
  return (
    <div ref={ref} className="border w-[35rem] h-[35rem] relative">
      <h2>Fear is the worst enemy</h2>

      <Logo />
    </div>
  );
}
