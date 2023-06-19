import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


const navCss =  { fontSize: '24px', color: 'white', fontWeight: 'bold' };

const Header = () => {

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => { 
    setCookies("access_token","", {
      sameSite: 'none', 
      secure: true,
    });
    window.localStorage.clear();
    navigate("/auth");
   }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/home" style={navCss}>Recipe App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create-recipe" >Create-Recipe</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saved-recipe">Saved-Recipe</NavLink>
            </li>
            <li className="nav-item">
              {!cookies.access_token? (<NavLink className="nav-link" to="/auth">Register/Login</NavLink>):(<NavLink onClick={logout} className="nav-link" >Logout</NavLink>)}
             
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;