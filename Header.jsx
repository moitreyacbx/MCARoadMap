import React from "react";
import './header.css';

export default function Header(props) {

  return (
    <div>
      <div className="Contain"> 
      <h1 className="text-center " id="head">{props.title}</h1>
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
