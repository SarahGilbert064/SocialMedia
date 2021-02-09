import React from "react";
import gooseMan from "./../img/GooseSelfie.jpg";

function Header () {
  return (
    <React.Fragment>
      <center>
      <h1>Quack Quack, I'm Mr. Goose Man</h1>
      <img className="photo1" src={gooseMan} alt="An image of a goose"/>
      <h3>5,000 Followers</h3>
      <h3>666 Following</h3>
      </center>
    </React.Fragment>
  )
}

export default Header;