"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

const loadingStates = [
  {
    text: "Initializing...",
  },
  {
    text: "Looks like a Chad clicked the link.",
  },
  {
    text: "You won't Regret.",
  },
  {
    text: "Unlocking Financial Freedom...",
  },
  {
    text: "Welcome to $Dobs World",
  },
];

export function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up a timer to stop loading after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className="absolute w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
