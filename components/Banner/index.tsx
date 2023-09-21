import React from 'react'
import styles from "./banner.module.scss"
import Image from 'next/image'
import stroke from "../../public/assets/images/stroke.png"
import Link from "next/link"

const Banner = () => {
  return (
    <div className={ styles["banner"] }>
        <div className="container">
        <div className={ styles["banner__content"] }>
            <div className={ styles["banner__content__img"] }>
                <Image src={ stroke } alt='Stroke svg' />
            </div>
            <div className={ styles["banner__content__text"] }>
                <div>
                <h1>Ready to get started?</h1>
                  <p>You have seen the process now. It's simple, fast and seamless to get onboarded, all in less than 2 minutes. Get started now to efficiently find local service men for all your needs</p>
                  <div className={ styles["banner__content__text--button"] }>
                    <Link href=''>Create a free account</Link>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner