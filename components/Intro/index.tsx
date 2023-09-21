import React from 'react'
import styles from "./intro.module.scss"
import { BsLightbulbFill } from "react-icons/bs"
import { GiClothes } from 'react-icons/gi'
import { MdOutlinePlumbing } from 'react-icons/md'

const Intro = () => {
  return (
    <div className={ styles["intro"] }>
        <div className="container">
            <div className={ styles["intro__text"] }>
                <h3>Impa Akazi is a one-stop marketplace connecting qualified, trusted and verified service providers to veriefied users all from one app. Finding artisans for your needs should not be very difficult.</h3>
            </div>
            <div className={ styles["intro__grid"] }>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill size="1.4rem" />&nbsp;Electricity services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <GiClothes />&nbsp;Laundry services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdOutlinePlumbing />&nbsp;Plumbing services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <MdOutlinePlumbing />&nbsp;Automobile Reparis
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill />&nbsp;Electricity services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill />&nbsp;Electricity services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill />&nbsp;Electricity services
                </span>
                <span className={ styles["intro__grid__item"] }>
                    <BsLightbulbFill />&nbsp;Electricity services
                </span>
            </div>
        </div>
    </div>
  )
}

export default Intro