import React from "react";
import Entry from "./Entry";
import nobel from "../nobel";


function createEntry(nobelPrize) {
    return (
      <Entry
        year={nobelPrize.year}
        category={nobelPrize.category}
        laureates={nobelPrize.laureates}
        key={nobelPrize.id}
        firstname={nobelPrize.firstname}
        surname={nobelPrize.surname}
        motivation={nobelPrize.motivation}
      />
    );
  }

function App() {
    return (
      <div>
        <h1>
          <span>Nobel Prize Winners</span>
        </h1>
        <dl className="dictionary">{nobel.map(createEntry)}</dl>
      </div>
    );
  }
  
  export default App;