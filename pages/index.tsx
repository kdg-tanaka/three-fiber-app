"use client";
import Spline from '@splinetool/react-spline';
import type { SplineEvent } from "@splinetool/runtime";

export default function App() {
  const onMouseHover = (e: SplineEvent) => {
    console.log("Mouse Hover");
  }

  const mouseDown = (e: SplineEvent) => {
    console.log("Mouse Down");
  }
  const onKeyUp = (e: SplineEvent) => {
    if (e.target.name === "Key1") return console.log("Key1 up");
  };

  const onKeyDown = (e: SplineEvent) => {
    if (e.target.name === "Key1") return console.log("Key1 down");
  };

  return (
    <>
      <h1>spline-sample-app</h1>
      <div className='keyboard'>
        <Spline scene="https://prod.spline.design/YxGtjqiAauUhZF1m/scene.splinecode"
          onMouseHover={onMouseHover}
          onMouseDown={mouseDown}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      </div>
    </>
  );
}
