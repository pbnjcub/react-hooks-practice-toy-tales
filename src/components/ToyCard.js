import React from "react";

function ToyCard({toy, onDonate, onUpdate}) {

  function handleDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => onDonate(toy))
  }
  

  function handleLiked() {
    const toyLikes = toy.likes
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: toyLikes + 1,
    }),
  })
    .then(resp => resp.json())
    .then((updatedToy) => onUpdate(updatedToy));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLiked}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;


