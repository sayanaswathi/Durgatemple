/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import './home.css'

export default function Home(){
    return(
        <>
        <Header/>
        <div className="home">
        <Posts/>
        <Sidebar/>
        </div>
        <div> 
        <img src="./images/homepage.jpeg" className="homepage-img"/>
        </div>
        </>
    )
}
