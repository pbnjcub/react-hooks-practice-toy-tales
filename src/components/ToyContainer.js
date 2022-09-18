import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDonate, onUpdate}) {

  

  return (
    <div id="toy-collection">
      {toys.map((toy) => (<ToyCard toy={toy} key={toy.id} onDonate={onDonate} onUpdate={onUpdate} />))}
    </div>
  );
}

export default ToyContainer;
