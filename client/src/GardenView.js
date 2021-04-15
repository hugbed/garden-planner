import React, { Component } from "react";
import { useCanvas } from "./hooks/useCanvas";
import "./GardenView.css";

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function GardenView() {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
  ] = useCanvas();

  const handleCanvasClick = (event) => {
    const canvas = document.getElementById("garden-canvas");
    const mousePos = getMousePos(canvas, event);

    // on each click get current mouse location
    const currentCoord = { x: mousePos.x, y: mousePos.y };
    // add the newest mouse location to an array in state

    setCoordinates([...coordinates, currentCoord]);
  };
  return (
    <div className="garden-view">
      <canvas
        id="garden-canvas"
        className="app-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
    </div>
  );
}

export default GardenView;
