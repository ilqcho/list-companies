import "./App.css";
import React, { useState } from "react";
import Globals from "./Globals";
import Title from './Components/Title';

function App() {
  const companiesData = Globals.companies;
  const [companies, setCompanies] = useState(companiesData);
  const [sort, setSort] = useState(null);

  const sortBy = (element) => {
    if(!sort){ 
      // Ascending sort for array element
      const sortedCompanies = [...companies].sort((a, b) => {
        if(a[element] < b[element]){
          return -1
        }
      });

      setCompanies(sortedCompanies);
      setSort(true);
    } else {
      // Descending sort for array element
      const sortedCompanies = [...companies].sort((a, b) => {
        if(a[element] > b[element]){
          return -1
        }
      });

      setCompanies(sortedCompanies);
      setSort(false);
    }
  }


  return (
    <div className="App">

      <Title 
        title="Compañías"
      />

      <div>
        <table>
          <thead>
            <tr>
              <th>
                ID
                <button className="btn" onClick={() => sortBy('id')}>↑↓</button>
              </th>
              <th>Estado</th>
              <th>
                nombre
                <button className="btn" onClick={() => sortBy('id')}>↑↓</button>
              </th>
              <th>
                Fecha
                <button className="btn" onClick={() => sortBy('id')}>↑↓</button>
              </th>
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
