import React from "react";

// Hooks way

//Object orientated way
// this.state = {
//     name:
// }

// state
// const [age, setAge] = useState('13');

// header is a function takes in property number
function Header({ number }) {

// needed for the furute
  const { age, height, name, specialty } =   {
    age: "13",
    height: "202cm",
    name: "Jotaro Kujo",
    specialty: "URARARARAARAR -STAR PLatinum",
  };

  console.log(age);
  console.log(height);
  console.log(specialty);

  // new way

  return (
    <div>
      <h1>The number is {number}</h1>
      <p>{name}</p>
    </div>
  );
}

export default Header;
