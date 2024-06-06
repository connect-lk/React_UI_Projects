import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
function Navbar() {
  return (
    <>
        <div className="nav_bar">
        <div className="logo">WDM</div>
        <div className="seacrh">
            <div className="left"><FcSearch />search Heare</div>
            <div className="right"><IoFilter />Filters</div>
        </div>
        <div className="seller">Become a Seller</div>
        </div>
    </>
  )
}

export default Navbar