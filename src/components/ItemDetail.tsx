import React from "react";
import Select from "./Select";

function ItemDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Item Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src="/assets/n1-min.png" />
        </div>
      </div>

      {/* Item Details */}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Item Header</div>
        <div className="font-medium md:text-xl">
          {
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iste eum voluptatem obcaecati consequuntur atque labore, laudantium itaque. Qui          molestias eum incidunt aperiam corporis sint ullam quae, magnam odit          delectus."
          }
        </div>
        <div className="flex space-x-6 items-center">
          <div className="text-3xl font-extrabold md:text-6xl">100$</div>
          <Select title={"QTY"} options={[1, 2, 3, 4]} />
          <Select title={"SIZE"} options={[37, 38, 39, 40, 41, 42, 43, 44]} />
        </div>
        {/* Buttons and Links */}
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to cart
          </button>
          <a
            className="text-lg font-bold underline underline-offset-4"
            href="#"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
