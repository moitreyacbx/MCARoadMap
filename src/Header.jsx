import React from "react";

export default function Header(props) {
  let Headerstyle = {
    display: 'inline',
    position : "relative",
    top:"10px",
    fontFamily : "Helvetica",
    fontSize : "100px",
    color :"silver"
  }
  let Container ={
    display :"flex",
    backgroundImage : "url(https://imgs.search.brave.com/FhSDD2cYq0H-9kMhNUsisZwVaxjImZWJN1t9pX7kNw8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzI4/NTg0Ni5qcGc)",
    justifyContent : "center",
    border : "2px solid black"
 
  }
  return (
    <div>
      <div className="Contain" style={Container}> 
      <h1 className="text-center" style={Headerstyle}>{props.title}</h1>
      </div>
      <br />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  );
}
