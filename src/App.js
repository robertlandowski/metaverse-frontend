import AdminForm from "./components/AdminForm";
import AdminList from "./components/AdminList";
import ShopForm from "./components/ShopForm";
import ShopsList from "./components/ShopList";
import BusinessOwnerForm from "./components/BusinessForm";
import BusinessOwnersList from "./components/BusinessOwnersList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AdminForm />
      <AdminList />
      <ShopForm />
      <ShopsList />
      <BusinessOwnerForm />
      <BusinessOwnersList />
    </div>
  );
}

export default App;
