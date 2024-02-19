import React from "react";
import { useParams } from "react-router-dom";
export default function detail() {
  const { categoryId } = useParams();
  return (
    <div>
      Categorydetail {categoryId}
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
    </div>
  );
}
