import "./App.css";
import React, { useState } from "react";
import Globals from "./Globals";

function App() {
  const companiesData = Globals.companies;
  const [companies, setCompanies] = useState(companiesData);

  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Estado</th>
              <th>nombre</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, i) => (
                <tr key={i}>
                  <td>{company.id}</td>
                  <td>{company.status}</td>
                  <td>{company.name}</td>
                  <td>{company.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
