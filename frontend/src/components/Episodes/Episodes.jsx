import React, { useState, useEffect } from "react";

function Episodes() {
  // useEffect will run code/a callback function once the component has mounted (loaded).
  // for us, the perfect use would be to use it to make the call to get episodes etc.
  useEffect(() => {
    getEpisodes();
  }, []);
  // the 2nd param is an array containing dependencies E.G.
  // if anything in the array were to change/ it would run the callback fn again automatically

  // async = asynchronous - i think this means that it will basically run in the background on a seperate thread
  // (the page wont freeze while it waits for this call to return data)
  const getEpisodes = async () => {
    // fetch is a built in function for making calls, don't even need a library/plugin!
    // AWAIT basically means (wait here until the response comes back)
    await fetch("http://localhost:8080/api/findAllEpisodes", {
      method: "GET",
      headers: new Headers({}),
      // this bit kinda works but we need to do something
      //with the Headers to make it more reliable (not sure what yet)
    })
      .then((res) => console.log(res.json()))
      .catch((error) => console.log(error)); // if there's an error we capture and log it
    // theres better ways of doing this (i think) but i think this is
    // a pretty simple way of doing it thats easy to understand
  };

  return <h1>Episodes</h1>;
}

export default Episodes;
