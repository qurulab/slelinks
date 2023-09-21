import React from 'react'
import styles from "./intro.module.scss"
import { BsLightbulbFill } from "react-icons/bs"
import { GiClothes } from 'react-icons/gi'
import { MdOutlinePlumbing, MdCleaningServices, MdSoupKitchen, MdOutlineLocalCarWash } from 'react-icons/md'
import { FaPaintBrush, FaHandsWash } from "react-icons/fa"

const Intro = () => {
  return (
    <div className={ styles["intro"] }>
        <div className="container">
            <div className={ styles["intro__text"] }>
                <h2>Impa Akazi is a one-stop marketplace connecting qualified, trusted and verified service providers to veriefied users all from one app. Finding artisans for your needs should not be very difficult</h2>
            </div>
            <div className={ styles["intro__grid"] }>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill fill='#F1D219' size="1.4rem" />&nbsp; Electricity Services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <GiClothes fill='#F1D219' size="1.4rem" />&nbsp; Laundry Services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdOutlinePlumbing fill='#F1D219' size="1.4rem" />&nbsp; Plumbing Services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdOutlineLocalCarWash fill='#F1D219' size="1.4rem" />&nbsp; Automobile Reparis
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <FaPaintBrush fill='#F1D219' size="1.4rem" />&nbsp; Painting Services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdCleaningServices fill='#F1D219' size="1.4rem" />&nbsp; House cleaning
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdSoupKitchen fill='#F1D219' size="1.4rem" />&nbsp; Kitchen Services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <FaHandsWash fill='#F1D219' size="1.4rem" />&nbsp; Car Washing
                </span>
            </div>
        </div>
    </div>
  )
}

export default Intro