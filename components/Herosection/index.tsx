import React from 'react'
import styles from "./herosection.module.scss"
import Navbar from '../Navbar'
import Button from '../Button'
import Image from 'next/image'
import hero__img from "../../public/assets/images/slelinks mockup.png"
import google from "../../public/assets/images/google.svg"
import apple from "../../public/assets/images/apple.svg"
// import Info from '../Info'

const Herosection = () => {
  return (
    <div className={ styles["herosection"] }>
        <Navbar type='light' />
        <div className={ styles["herosection__content"] }>
            <div className={ styles["herosection__content__info"] }>
                {/* <Info /> */}
            </div>
            <div className="container">
                <div className={ styles["herosection__content__details"] }>
                    <div className={ styles["herosection__content__details__left"] }>
                        <div>
                            <h1>Do More with Slelinks</h1>
                            <p>Slelinks is a social ed-tech platform for students, lecturers and alumni to connect, learn and share. Experience school and education with others.</p>
                            <div className={ styles["herosection__content__details__left__buttons"] }>
                                <Image src={ google } alt='Google svg' />
                                <Image src={ apple } alt='Apple svg' />
                            </div>
                        </div>
                    </div>
                    <div className={ styles["herosection__content__details__right"] }>
                        <div className={ styles["herosection__content__details__right--pseudo"] }></div>
                        <div className={ styles["herosection__content__details__right--img"] }>
                            <Image src={ hero__img } height={ 250 } width={ 270 } alt='App mockup' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection