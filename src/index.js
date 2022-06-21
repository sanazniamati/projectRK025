import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text, Line, Rect } from "react-konva";

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={"Text Shadow!"}
          fontFamily={"Calibri"}
          fontSize={40}
          x={100}
          y={20}
          stroke={"red"}
          strokeWidth={2}
          shadowColor={"black"}
          shadowBlur={0}
          shadowOffset={{ x: 10, y: 10 }}
          shadowOpacity={0.5}
        />
        <Line
          stroke={"green"}
          strokeWidth={10}
          lineJoin={"round"}
          lineCap={"round"}
          points={[50, 140, 250, 160]}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffset={{ x: 10, y: 10 }}
          shadowOpacity={0.5}
        />
        <Rect
          x={100}
          y={120}
          width={100}
          height={50}
          fill={"#00D2FF"}
          stroke={"black"}
          strokeWidth={4}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffset={{ x: 10, y: 10 }}
          shadowOpacity={0.5}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
