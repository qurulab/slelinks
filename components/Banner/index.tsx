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
                  <p>Join Slelinks now to experience school with other people. It's simple, fast and seamless.</p>
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