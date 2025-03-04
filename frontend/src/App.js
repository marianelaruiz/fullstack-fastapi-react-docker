import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/guitars") 
      .then((response) => response.data)
      .then((data) => setGuitars(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎸 Lista de violões</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {guitars.map((guitar) => (
          <div key={guitar.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            width: "250px",
            textAlign: "center",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)"
          }}>
            <img src={guitar.image} alt={guitar.name} style={{ width: "100%", borderRadius: "10px" }} />
            <h2>{guitar.name}</h2>
            <p><strong>Marca:</strong> {guitar.brand}</p>
            <p><strong>Tipo:</strong> {guitar.type}</p>
            <p><strong>Precio:</strong> ${guitar.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

