import React from "react";
import new_collections from "../assets/new_collections";
import Item from "../item/Item";

const NewCollections = () => {
  return (
    <div className="flex justify-center gap-3 h-full flex-col items-center mb-32 md:h-full sm:h-full">
      <h1 className="text-2xl font-bold mb-2">NEW COLLECTIONS</h1>
      <hr className="h-1 w-44 mb-5 bg-black rounded-md" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {new_collections.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
