import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientList from "./components/ClientList";
import AddClient from "./components/AddClient";
function App() {
  return (
    <div className="App">
      <h1>Client data operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientList />}></Route>
          <Route path="/client/create" element={<AddClient />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
