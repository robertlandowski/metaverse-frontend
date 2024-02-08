import AdminForm from "./components/AdminForm";
import AdminList from "./components/AdminList";
import ShopForm from "./components/ShopForm";
import ShopsList from "./components/ShopList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AdminForm />
      <AdminList />
      <ShopForm />
      <ShopsList />
    </div>
  );
}

export default App;
