import ItemDetail from "./components/ItemDetail";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="select-none p-5 xl:px-24 animate-fadeIn">
      <Nav />
      <ItemDetail />
    </div>
  );
}

export default App;
