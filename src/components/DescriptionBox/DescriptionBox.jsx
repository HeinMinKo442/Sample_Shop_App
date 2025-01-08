import React from "react";

const DescriptionBox = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-center border-2 border-red-100 w-32 py-2 font-medium">Description</div>
        <div className="flex items-center justify-center border-2 border-red-100 w-32 font-normal">Reviews (122)</div>
      </div>
      <div className="flex flex-col gap-6 p-6 border-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          nisi voluptatibus reprehenderit a officiis ipsam sequi dolore, vitae
          quisquam beatae numquam, eaque harum debitis nam aspernatur nemo
          minima consequuntur fugiat libero, assumenda doloremque. Ea neque
          suscipit excepturi odio nulla?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat qui
          labore a eius deserunt voluptates? Officiis ullam aliquam quis at,
          quisquam illum adipisci distinctio soluta. Delectus eligendi vitae
          natus! Officiis!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
