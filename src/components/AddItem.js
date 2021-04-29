import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";

export default function AddItem() {
  const { dispatch } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      item: {
        name,
        price: parseFloat(price),
      },
    });
  };

  return (
    <form className="row justify-content-center mt-3" onSubmit={handleSubmit}>
      <div className="col-12 col-lg-3">
        <div className=" mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            type="text"
            className="mdl-textfield__input"
            name=""
            id="sample3"
            onChange={(e) => setName(e.target.value)}
          />
          <label class="mdl-textfield__label label" htmlFor="sample3">
            Add Item
          </label>
        </div>
      </div>

      <div className="col-12 col-lg-2">
        <div className=" mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            type="text"
            className="mdl-textfield__input"
            name=""
            pattern="-?[0-9]*(\.[0-9]+)?"
            id="sample3"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label class="mdl-textfield__label label" htmlFor="sample3">
            Add Price
          </label>
          <span class="mdl-textfield__error">Input is not a number!</span>
        </div>
      </div>

      <div className="col-lg-2 mt-3">
        <button
          type="submit"
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        >
          Add
        </button>
      </div>
    </form>
  );
}
