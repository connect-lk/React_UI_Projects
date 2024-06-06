import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { SiTheconversation } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
function Sidebar() {
  return (
    <>
        <div className="side_bar_contant">
            <div className="top_side_bar_content">
                <div className="items"><FaHome className="icon" /> Home</div>
                <div className="items"><IoIosNotifications className="icon" />  Notification</div>
                <div className="items"><FaShoppingBag className="icon" />  Shop</div>
                <div className="items"><SiTheconversation className="icon" />  Conversation</div>
                <div className="items"><FaWallet className="icon" />  Wallet</div>
                <div className="items"><MdSubscriptions className="icon" />  Subscription</div>
                <div className="items"><CgProfile className="icon" />  My Profile</div>
            </div>
            <div className="bottum_side_bar_content items  "><RiLogoutBoxFill className="icon" />  Logout</div>
        </div>
    </>
  )
}

export default Sidebar