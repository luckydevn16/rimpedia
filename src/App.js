import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/filters/Filters.js";
import Cards from "./components/cards/Cards.js";
import Pagination from './components/pagination/Pagination.js';
import Search from './components/search/Search.js';
import Navbar from './components/Navbar/Navbar.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes.js';
import Location from './Pages/Location.js';
import CardDetails from './components/cards/CardDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;  

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api])

  return (
    <div className="App">
      <h1 className="text-center">
        Characters
      </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters setSpecies={setSpecies} setStatus={setStatus} setGender={setGender} setPageNumber={setPageNumber} />
          <div className="col-lg-9 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
