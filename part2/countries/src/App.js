import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')


  return (
    <div>
      <div>Find Countries: <input></input></div>
      
    </div>
  );
}

export default App;
