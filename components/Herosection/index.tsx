import React from 'react'
import styles from "./herosection.module.scss"
import Navbar from '../Navbar'
import Button from '../Button'
import Image from 'next/image'
import hero__img from "../../public/assets/images/app-mockup.png"
import Info from '../Info'

const Herosection = () => {
  return (
    <div className={ styles["herosection"] }>
        <Navbar type='light' />
        <div className={ styles["herosection__content"] }>
            <div className={ styles["herosection__content__info"] }>
                <Info />
            </div>
            <div className="container">
                <div className={ styles["herosection__content__details"] }>
                    <div className={ styles["herosection__content__details__left"] }>
                        <div>
                            <h1>Verified and Trusted Artisans for your work</h1>
                            <p>Access over 500 vetted and trusted local service providers for all your domestic needs ranging from plumbing, laundry, painting. Finding a vetted artisan should not be a very difficult task!</p>
                            <div className={ styles["herosection__content__details__left__buttons"] }>
                                <Button type='primary' title="Create a free account in 2 minutes" path="about" />
                                <Button type='secondary' title="Become an Artisan" path="about" />
                            </div>
                        </div>
                    </div>
                    <div className={ styles["herosection__content__details__right"] }>
                        <div className={ styles["herosection__content__details__right--img"] }>
                            <Image src={ hero__img } height={ 200 } width={ 270 } alt='App mockup' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection