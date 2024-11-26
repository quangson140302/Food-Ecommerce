import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
    

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate();


    const logout = () => {
      localStorage.removeItem("token")
      setToken("");
      navigate("/")

    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Trang Chủ</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Liên Hệ</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {
          !token?<button onClick={()=>setShowLogin(true)}>Đăng Nhập</button>
        :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('myorders')}><img src={assets.bag_icon} alt="" /><p>Đơn Hàng</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Đăng Xuất</p></li>
              </ul>
          </div>}
        
      </div>
    </div>
  )
}

export default Navbar
