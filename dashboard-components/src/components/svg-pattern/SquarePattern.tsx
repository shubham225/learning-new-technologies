import React from "react";

export default function SquarePattern() {
  return (
    <div className="text-sky-100">
      <svg aria-hidden="true" className="absolute inset-0 size-full">
        <defs>
          <pattern
            id=":S2:"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            x="100%"
            y="100%"
            patternTransform="translate(112 64)"
          >
            <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
      </svg>
    </div>
  );
}
