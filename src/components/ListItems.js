import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export default function ListItems() {
  const { items, dispatch } = useContext(ItemContext);

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", id });
  };
  return (
    <ul className="list-group">
      {items
        ? items.map((item) => {
            return (
              <div className="row justify-content-center">
                <div className="col-10 col-lg-6 ">
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between item my-2"
                  >
                    <div> {item.name} </div>
                    <div> {item.price} </div>
                  </li>
                </div>

                <div className="col-2 col-lg-1  d-flex align-items-center">
                  <button
                    onClick={() => deleteItem(item.id)}
                    class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
                  >
                    <i class="delete-icon material-icons">delete</i>
                  </button>
                </div>
              </div>
            );
          })
        : ""}
    </ul>
  );
}
