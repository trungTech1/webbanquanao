import React from "react";
import { useNavigate } from "react-router-dom";

export default function category() {
  const navigate = useNavigate();
  return (
    <div>
      category
      <ul>
        <li
          onClick={() => {
            navigate("1");
          }}
        >
          Danh muc 1
        </li>
        <li
          onClick={() => {
            navigate("2");
          }}
        >
          Danh muc 2
        </li>
        <li
          onClick={() => {
            navigate("3");
          }}
        >
          Danh muc 3
        </li>
      </ul>
    </div>
  );
}
