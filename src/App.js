import "./App.css";
import AddItem from "./components/AddItem";
import ListItems from "./components/ListItems";
import Total from "./components/Total";
import ItemContextProvider, { ItemContext } from "./context/ItemContext";

function App() {
  return (
    <ItemContextProvider>
      <div className="App">
        <div className="container">
          <AddItem />
          <ListItems />
          <Total />
        </div>
      </div>
    </ItemContextProvider>
  );
}

export default App;
