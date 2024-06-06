import React, { useState } from "react";

const UseState = () => {
  const [data, setdata] = useState({});

  function handle(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }
  function addData() {
    console.log(data);
  }

  return (
    <>
      <input type="text" name="fname" onChange={handle} /><br /><br />
      <input type="text" name="lname" onChange={handle} /><br /><br />
      <input type="text" name="email" onChange={handle} /><br /><br />
      <button onClick={addData}>Submit</button>
    </>
  );
};

export default UseState;