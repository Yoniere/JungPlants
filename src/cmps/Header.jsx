import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <section className='app-header container flex space-between text-center'>
        <div className='logo flex text-center'>JunglPlants</div>
        <nav className='nav-bar clean-list flex'>
            <NavLink exact to ='/'>Home</NavLink>
            <NavLink to ='/plant'>Plant</NavLink>
            <NavLink to ='/about'>About</NavLink>
        </nav>
    </section>
  )
}
