"use client"

import React from 'react'
import styles from "./navbar.module.scss"
import Link from 'next/link'
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import darkLogo from "../../public/assets/images/leaseflow_log_white.png"
import { BiMenuAltLeft, BiMinusCircle } from "react-icons/bi"
import { useState, useEffect } from "react"


interface navbarProps {
    type: string;
}

const Navbar: React.FC<navbarProps> = ({
    type
}) => {

    const [showNavbar, setShowNavbar] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0)

    const [navbar, setNavbar] = useState(false)

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    // Chage navbar backgroud on scrool
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [])


    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", changeWidth)

        return () => {
            window.removeEventListener("resize", changeWidth)
        }
    }, [])


    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })

  return (
    <div className={ navbar === true ? styles["navbar"] : styles["navbar__light"] }>
        <div className="container">
            <div className={ styles["navbar__content"] }>
                <div className={ styles["navbar__content__logo"] }>
                    <Link href="/"><Image height={50} src={ logo } alt='Leaseflow logo'/></Link>
                </div>
                <div onClick={ toggleNavbar } className={ styles["navbar__content__menu"] }>
                    { showNavbar ? <BiMinusCircle fill={ type === "dark" ? '#FFF' : "#fff" } size="2rem" /> : <BiMenuAltLeft fill={ navbar === true ? '#FFF' : "#fff" } size="2rem" /> }
                </div>

                { /* To toggle the menu */ }
                { ( showNavbar || screenWidth > 1200) && (
                    <div className={ styles["navbar__content__details"] }>

                    <div className={ styles["navbar__content__details__left"] }>
                        <div className={ styles["navbar__content__details__left--links"] }>
                            <li><Link href="">Home</Link></li>
                            <li><Link href="">About</Link></li>
                            <li><Link href="">Artisans</Link></li>
                            <li><Link href="">Our Blog</Link></li>
                            <li><Link href="">Contact</Link></li>
                        </div>
                    </div>

                    <div className={ styles["navbar__content__details__right"] }>
                        <div className={ styles["navbar__content__details__right--links"] }>
                            {/* <li><Link href="/auth/sign-in" className={ type === "dark" ? styles["navbar__content__details__right--links--login"] : styles["navbar__content__details__right--links--login--light"] }>Sign In</Link></li> */}
                            <li><Link href="/auth/sign-up" className={ type === "dark" ? styles["navbar__content__details__right--links--register"] : styles["navbar__content__details__right--links--register--light"]  }>Create an account</Link></li>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar