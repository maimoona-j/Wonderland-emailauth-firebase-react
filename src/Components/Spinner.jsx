import React from "react";
import spinner from "../Assets/spinner.svg";

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <img src={spinner} alt="loading" className="h-24 mx-auto mb-4" />
      </div>
    </div>
  );
}
