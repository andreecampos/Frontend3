import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoggaIn from "./pages/LoggaIn";

import PostNyKund from "./pages/PostNyKund";
import InloggadUsers from "./pages/InloggadUsers";
import DetailSida from "./pages/DetailSida";
import ListSida from "./pages/ListSida";
import UserCreate from "./pages/UserCreate"
import UserLocation from "./pages/UserLocation";


const NameContext = createContext({});
function App() {
  const [postList, setPostList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("final-project");
    const headers = {
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${token}`,
    };
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      //.then(data => console.log(data))
      .then((data) => setPostList(data.results));
  }

  return (
    <NameContext.Provider value={{ postList, setPostList }}>
      <div>
        <Routes>
          <Route path="/logga-in" element={<LoggaIn />} />
          <Route path="/list" element={<ListSida />} />
          <Route path="/ny-kund" element={<PostNyKund />} />
          <Route path="/ussers" element={<InloggadUsers />} />
          <Route path="/list/:id" element={<DetailSida />} />
          <Route path="/user-create" element={<UserCreate/>}/>
          <Route path="/login"  element={<UserLocation/>}/>
        </Routes>
      </div>
    </NameContext.Provider>
  );
}

export { NameContext };
export default App;
