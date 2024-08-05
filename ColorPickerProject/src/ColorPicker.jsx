import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-t from-indigo-950 via-emerald-700 to-cyan-700 ">
        <div className="color-picker-container justify-center items-center bg-slate-800 bg- rounded-lg w-1/2 h-1/2 p-8 flex flex-col bg-opacity-70 ">
          <h1 className="text-4xl font-semibold text-white m-2">
            Color Picker
          </h1>
          <div className="color-display text-white m-2  text-2xl">
            <p>Selected Color : {color}</p>
          </div>
          <div className="w-60 h-5 mb-4" style={{ backgroundColor: color }}></div>
          <div>
            <label className="text-white m-2 mb-2 text-2xl">Select a Color : </label>
            <input
              type="color"
              className="bg-blue-950"
              value={color}
              onChange={handleColorChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
