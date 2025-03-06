"use client";
import React, { useState } from "react";

interface ProgressBarProps {
  progress: number; // Explicitly define 'progress' as a number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
