import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className='navigation'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png'
        alt='logo'
      />
      <ul>
        <Link to='/'>
          <li>
            <i class='fas fa-home'></i>
            Home
          </li>
        </Link>

        <Link to='/movies'>
          <li>
            <i class='fas fa-film'></i> Movies
          </li>
        </Link>
        <Link to='/about'>
          <li>
            <i class='far fa-question-circle'></i>About
          </li>
        </Link>
      </ul>
    </div>
  );
};
