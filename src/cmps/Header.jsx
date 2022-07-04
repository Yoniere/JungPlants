import React from 'react'

export function Header() {
  return (
    <section className='app-header container flex space-between text-center'>
        <div className='logo flex text-center'>JunglPlants</div>
        <ul className='nav-bar clean-list flex'>
            <li>Home</li>
            <li>Plants</li>
            <li>About</li>
        </ul>
    </section>
  )
}
