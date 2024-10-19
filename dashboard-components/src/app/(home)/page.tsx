import AmountDisplay from "@/components/AmountDisplay";
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <HeaderBox title="Home" subtext="Access and manage dashboard" />
          <AmountDisplay amount={1234.56} />
        </header>
        HOME CONTENT

        <article>
        {Array.from({ length: 10 }, (_, i) => <span key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde, corporis dolorum quasi aperiam totam, officia ad reiciendis doloribus ea, quisquam modi at error corrupti maiores? Iste numquam pariatur alias!</span>)}
        </article> 
      </div>
      <RightSideBar />
    </section>
  );
}
