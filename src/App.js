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
          <Route path="/" element={<ClientList />}></Route>
          <Route path="/detail/:cid" element={<ClientDetails />}></Route>
          <Route path="/edit/:cid" element={<EditeClient />}></Route>
          <Route path="/create" element={<AddClient />}></Route>
          <Route path="/add" element={<AddClient />}></Route>
          <Route path="/register" element={<SignUpPage />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
