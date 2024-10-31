import React from "react";

function ItemDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Item Image */}
      <div className="flex-1">
        <div className="bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
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
        <div className="text-3xl font-extrabold md:text-6xl">100$</div>

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
