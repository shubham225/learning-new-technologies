import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-4 place-items-stretch">
      <div className="">
        <div className="flex border border-secondary p-2 rounded-lg justify-between">
          <div className="w-16 h-16 bg-green-400 rounded-md"></div>
          <div className="w-16 h-16 bg-red-400 rounded-md"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-md"></div>
          <div className="w-16 h-16 bg-violet-400 rounded-md"></div>
        </div>
      </div>
      <div className="">
        <div className="flex border border-secondary p-2 rounded-lg justify-center">
          <div className="w-16 h-16 bg-green-400 rounded-md"></div>
          <div className="w-16 h-16 bg-red-400 rounded-md"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-md"></div>
          <div className="w-16 h-16 bg-violet-400 rounded-md"></div>
        </div>
      </div>
      <div className="">
        <div className="flex border border-secondary p-2 rounded-lg">
          <div className="w-16 h-16 bg-green-400 rounded-md hover:grow"></div>
          <div className="w-16 h-16 bg-red-400 rounded-md hover:grow"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-md hover:grow"></div>
          <div className="w-16 h-16 bg-violet-400 rounded-md hover:grow"></div>
        </div>
      </div>
      <div className="">
        <div className="flex border border-secondary p-2 rounded-lg justify-end">
          <div className="w-16 h-16 bg-green-400 rounded-md order-4"></div>
          <div className="w-16 h-16 bg-red-400 rounded-md"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-md"></div>
          <div className="w-16 h-16 bg-violet-400 rounded-md"></div>
        </div>
      </div>
      <div className="">
        <div className="border border-secondary p-2 rounded-lg h-96">
          <div className="w-16 h-16 bg-green-400 rounded-md order-4"></div>
          <div className="w-16 h-16 bg-red-400 rounded-md"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-md"></div>
          <div className="w-16 h-16 bg-violet-400 rounded-md"></div>
        </div>
        </div>
    </div>
  );
}
