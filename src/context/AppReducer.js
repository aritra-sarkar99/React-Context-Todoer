import { v4 as uuid } from "uuid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: uuid(),
          name: action.item.name,
          price: action.item.price,
        },
      ];

      break;
    case "DELETE_ITEM":
      return state.filter((items) => items.id !== action.id);
      break;

    default:
      break;
  }
};
