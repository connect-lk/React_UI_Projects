import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function Post() {
  return (
    <>
        <div className="post_container">
            <div className="person">
                <div className="author">
                    <img src='https://cdn.pixabay.com/photo/2018/01/04/00/19/vietnam-3059529_640.jpg' height={50} width={50} />
                    <div className="text">
                        <h3>City Light</h3>
                        <p>Amazon City</p>
                    </div>
                </div>
                <div className="dot"><HiDotsVertical /></div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, hic.</p>
            <div className="post_img">
                <img src='https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_640.jpg' />
            </div>
            <div className="like_comment">
                <div className="like right"><FaHeart /> 10.3k</div>
                <div className="comment right"><FaComment /> 4.3k</div>
                <div className="share right"><FaShare /> 2k</div>
            </div>
        </div>
    </>
  )
}

export default Post