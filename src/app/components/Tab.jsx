"use client";
import React from "react";

export const Tab = ({}) => {
  const changeToBlue = (index) => {
    const newColors = [...colors];
    newColors[index] = "blue";
    setColors(newColors);
  };
  return <div></div>;
};
