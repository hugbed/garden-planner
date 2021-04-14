import React, { Component } from "react";
import { useCanvas } from './hooks/useCanvas';
import "./GardenView.css";

function GardenView () {

  const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ] = useCanvas();
  
  const handleCanvasClick=(event)=>{
    // on each click get current mouse location 
    const currentCoord = { x: event.clientX, y: event.clientY };
    // add the newest mouse location to an array in state 
    setCoordinates([...coordinates, currentCoord]);
  };
  return <div className="garden-view">
      GARDEN
      <canvas 
        className="App-canvas"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick} />
    </div>;
}

export default GardenView;
