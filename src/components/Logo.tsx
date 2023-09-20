"use client";

import React, { useEffect, useRef, useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setLogoPosition, setLogoSize } from "@/store";
import Draggable from "react-draggable";

export default function Logo() {
  const ref = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const { logo, containerBoxPosition } = useAppSelector((state) => state.album);
  const [bottom, setBottom] = useState(logo.relativePosition.bottom);
  const [right, setRight] = useState(logo.relativePosition.right);

  useEffect(() => {
    setTimeout(() => {
      // dispatch(setLogoPosition({ bottom, right }));
    }, 0.001);
  }, []);

  return (
    <Draggable
      bounds="parent"
      axis="both"
      // handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      // position={null}
      // grid={[25, 25]}
      scale={1}
      // onStart={this.handleStart}
      // onDrag={this.handleDrag}
      onStop={(data) => {
        console.log(data);
        console.log(ref.current?.getBoundingClientRect());
        const bottom =
          (ref.current?.getBoundingClientRect().bottom || 0) -
          containerBoxPosition.bottom;
        const right =
          (ref.current?.getBoundingClientRect().right || 0) -
          containerBoxPosition.right;
        dispatch(setLogoPosition({ bottom, right }));
        // setBottom(bottom);
        // setRight(right);
      }}
    >
      <div
        style={{
          bottom: `${-bottom || 0}px`,
          right: `${-right || 0}px`,
        }}
        className="absolute  border min-w-fit min-h-fit"
      >
        <ResizableBox
          handleSize={[40, 40]}
          resizeHandles={["sw", "se", "nw", "ne"]}
          width={logo.size.width}
          height={logo.size.height}
          // draggableOpts={{ grid: [25, 25] }}
          minConstraints={[100, 100]}
          // maxConstraints={[300, 300]}
          onResizeStop={(data) => {
            console.log(data);
            dispatch(
              setLogoSize({
                width: ref.current?.clientWidth || 200,
                height: ref.current?.clientHeight || 200,
              })
            );
          }}
        >
          <Image
            ref={ref}
            width={200}
            height={200}
            src="/next.svg"
            alt="logo"
            className="w-full h-full"
          />
        </ResizableBox>
      </div>
    </Draggable>
  );
}
