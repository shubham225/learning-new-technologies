import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-8xl font-thin antialiased">
        This is 8xl antialiased Text
      </h1>
      <h2 className="text-4xl font-bold text-secondary italic">This is 4xl Text</h2>
      <h3 className="font-bold">This is h2 Text</h3>
      <h6 className="text-cyan-400 uppercase">This is normal Text</h6>
      <p className="ordinal ">1st</p>
      <p className="tracking-wider">01234567789</p>
      <p className="oldstyle-nums after:content-['_-->']">0123456789</p>
      <p className="underline decoration-red-600 decoration-double hover:decoration-wavy underline-offset-3">
        This is a Paragraph with underline
      </p>
      <div className="w-96 p-3 border m-2">
        <p className="hyphens-auto">
          Officially recognized by the Duden dictionary as the longest word in
          German, Kraftfahrzeug­haftpflichtversicherung is a 36 letter word for
          motor vehicle liability insurance.
        </p>
      </div>
      <span>
        Higher resolution means more than just a better-quality image. With a
        Retina 6K display,{" "}
        <a
          className="text-blue-600 after:content-['_↗']"
          href="https://www.google.com/"
          target="_blank"
        >
          Pro Display XDR
        </a>{" "}
        gives you nearly 40 percent more screen real estate than a 5K display.
      </span>
      <h1 className="text-lg font-bold">Lists:</h1>
      <ul className="list-disc list-inside">
      <li>1st list item</li>
      </ul>
    </div>
  );
}
