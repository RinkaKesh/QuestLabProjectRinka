import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.Navbar_contailner}>
      <div className={style.logo_contailner}>
        <img src="public/images/download (64).svg" alt="logo" />
        <p>Quest</p>
      </div>
      <div className={style.menuItems_container}>
        <a href="">Playbook</a>
        <div>Resources</div>
        <a href="">Blogs</a>
      </div>
      <div className={style.buttons_container}>
        <button>Get Started</button>
        <button>Book Demo</button>
      </div>
    </div>
  )
}

export default Navbar