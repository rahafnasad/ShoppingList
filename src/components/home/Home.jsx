import React from 'react'
import style from './home.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import Products from '../products/Products';

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <div className={style.overlay}></div>

        <div className={style.content}>
        <h1>Welcome to our store</h1>
        <p>You will find everything you want at any time</p>
        <div className={style.media}>
        <FaFacebookF className={style.facebook}/>
        <FaInstagram className={style.instagram} />
        <FaTiktok className={style.tiktock}/>
        <FaSnapchatGhost className={style.snapchat} />
        </div>
      



        </div>
    </div>
    <Products/>

    </>
  
  )
}
