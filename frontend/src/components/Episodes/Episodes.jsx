import React, { useState, useEffect } from "react";

function Episodes() {
  // useEffect will run code/a callback function once the component has mounted (loaded).
  // for us, the perfect use would be to use it to make the call to get episodes etc.
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/findAllEpisodes", {
      method: "GET",
      headers: new Headers({}),
      // this bit kinda works but we need to do something
      //with the Headers to make it more reliable (not sure what yet)
    })
      .then((res) => res.json())
      .then((res) => {
        setEpisodes(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // the 2nd param is an array containing dependencies E.G.
  // if anything in the array were to change/ it would run the callback fn again automatically

  // async = asynchronous - i think this means that it will basically run in the background on a seperate thread
  // (the page wont freeze while it waits for this call to return data)

  return (
    <div>
      <h1>Episode List</h1>
      {isLoading && <h2> Episodes still loading </h2>}
      <ul>
        {episodes.map((episode, index) => (
          <li key={index}>Title: {episode.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
