"use client";
import React from "react";

export const dynamic = 'force-dynamic'

const ChatLoader = () => {
  return (
    <div >
      <div id="bubble">
        <div id="circleWrapper">
          <div className="circle" id="circle1"></div>
          <div className="circle" id="circle2"></div>
          <div className="circle" id="circle3"></div>
        </div>
      </div>
    </div>
  );
};
export default ChatLoader;
