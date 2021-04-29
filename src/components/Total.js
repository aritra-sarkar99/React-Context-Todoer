import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function Total() {
  let { items } = useContext(ItemContext);

  items = items.map((item) => item.price);
  let total = items.reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <hr />
          <div className="totalPrice d-flex justify-content-end">
            &#8377; {total}
          </div>
        </div>
      </div>
    </div>
  );
}
