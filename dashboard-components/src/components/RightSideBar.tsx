import React from "react";

export default function RightSideBar() {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-600">S</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">Shubham Shinde</h1>
            <p className="profile-email">@shubhamshinde225</p>
          </div>
        </div>
      </section>

      <section className="h-full border rounded-lg m-3">
        <h1 className="m-2 text-l text-slate-500">Profile Info Here</h1>
      </section>
    </aside>
  );
}
