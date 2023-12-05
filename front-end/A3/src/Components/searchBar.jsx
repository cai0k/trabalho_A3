import React, { useState } from 'react';
import axios from 'axios';
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
    const [nome, setNome] = useState("");
  
    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setNome(value);
      fetchData(value);
    };
  
    return (
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Search..."
          value={nome}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  };

export default SearchBar;
