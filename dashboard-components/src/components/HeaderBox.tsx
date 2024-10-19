import React from "react";

export default function HeaderBox({ title, subtext }: HeaderBoxProps) {
  return (
    <div className="header-box">
      <h1 className="header-box-title">{title}</h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
}
