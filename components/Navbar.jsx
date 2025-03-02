import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../src/assets/Logo.png";
import logo3 from "../src/assets/logo3.png";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ Searchproducts }) => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);

  // Function to get user from localStorage
  const getUser = () => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  };

  // Set user on component mount
  useEffect(() => {
    setUser(getUser());

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      setUser(getUser()); // Update state when localStorage changes
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage")); // Manually trigger storage event
  };

  return (
    <nav>
      <Link href="/">
        <Image src={logo3} width={150} height={70} alt="logo" />
      </Link>
      <ul className="nav-links">
        <Link href="/female"><li>Female</li></Link>
        <Link href="/male"><li>Male</li></Link>
        <Link href="/kids"><li>Kids</li></Link>
        <Link href="/products"><li>All Products</li></Link>
      </ul>

      <div className="search-bar">
        <CiSearch />
        <input type="text" placeholder="What you looking for" />
      </div>

      {showCart ? (
        <Link href="/cart">
          <button className="cart" onClick={() => setShowCart(false)}>
            <CgShoppingCart size={22} />
            <span className="cart-item-qty">{totalQty}</span>
          </button>
        </Link>
      ) : (
        <button className="cart" onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className="cart-item-qty">{totalQty}</span>
        </button>
      )}

      {/* Dynamic Login/Logout Button */}
      {user ? (
        <div className="user-info">
          <span>Welcome, {user.name}</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link href="/Login">
          <button className="login-btn">Login</button>
        </Link>
      )}

      {/* Small screen menu */}
      <div className="navbar-smallscreen">
        <RiMenu3Line color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <Link href="/">
              <Image className="logo-small" src={logo} width={140} height={25} alt="logo" />
            </Link>
            <RiCloseLine color="black" fontSize={27} className="close_icon" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen_links">
              <Link href="/cart">
                <button className="cart-small-screen" onClick={() => setShowCart(false)}>
                  <CgShoppingCart size={22} />
                  <span className="cart-item-qty">{totalQty}</span>
                </button>
              </Link>
              <Link href="/female"><li>Female</li></Link>
              <Link href="/male"><li>Male</li></Link>
              <Link href="/kids"><li>Kids</li></Link>
              <Link href="/products"><li>All Products</li></Link>

              {user ? (
                <button className="logout-btn-small" onClick={handleLogout}>Logout</button>
              ) : (
                <Link href="/Login">
                  <button className="login-btn-small">Login</button>
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
