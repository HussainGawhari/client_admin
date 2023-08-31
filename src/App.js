import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientList from "./components/ClientList";
import AddClient from "./components/AddClient";
import EditeClient from "./components/EditeClient";
import ClientDetails from "./components/ClientDetails";
import LoginPage from "./components/login";
import SignUpPage from "./components/signup";
function App() {
  return (
    <div className="App">
      <h1>Client data operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/details/:id" element={<ClientDetails />}></Route>
          <Route path="/edit/:id" element={<EditeClient />}></Route>
          <Route path="/list" element={<ClientList />}></Route>
          <Route path="/create" element={<AddClient />}></Route>
          <Route path="/addclient" element={<AddClient />}></Route>
          <Route path="/register" element={<SignUpPage />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
