import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <div>
          <NavLink to="/" end> Inicio </NavLink>
          <NavLink to="/pokemon" > Pokémon</NavLink>
          <NavLink to="/sobre"> Sobre </NavLink>
        </div>
    </nav>
    
  )
}

export default Navbar
