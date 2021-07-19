import React, { useState } from 'react'
import img1 from "../src/Female_Card.png"
import img2 from "../src/Male_Card.png"

export default function Form() {

  // props drilling and lifting state up

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    message: "",
    gender: "",
    isActive: false,
    city: ""
  })


  const handleInputChange = (e) => {
    // const name = e.name;
    // const target = e.target;
    // const value = target.value;

    setUserDetails({
      ...userDetails,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value


    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value


    })


  }


  let image;

  if (userDetails.gender === "female") {
    image = <img src={img1} style={{ height: "300px", width: "300px" }} alt="" />
  } else if (userDetails.gender === "male") {
    image = <img src={img2} style={{ height: "300px", width: "300px" }} alt="" />

  }



  return (
    <div>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userDetails.firstName}
          onChange={handleInputChange}

        /> <br />


        <label htmlFor="">gender</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={userDetails.gender === "male"}
          onChange={handleInputChange} />
        <label htmlFor="">Male</label>

        <input type="radio"
          name="gender"
          id="female"
          value="female"
          checked={userDetails.gender === "female"}
          onChange={handleInputChange} />
        <label htmlFor="">Female</label> <br />

        <button type="submit" onClick={handleSubmit}>Submit</button>


      </form>


      {image}

      <p>{userDetails.firstName}</p>
      <p>{userDetails.lastName}</p>
      <p> Gender : {userDetails.gender}</p>

    </div>
  )
}