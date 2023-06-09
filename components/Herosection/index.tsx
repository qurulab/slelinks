import React from 'react'
import styles from "./herosection.module.scss"
import Navbar from '../Navbar'
import HerosectionForm from '../HerosectionForm'

import { FaNetworkWired } from "react-icons/fa"
import { MdHealthAndSafety, MdQueueMusic } from "react-icons/md"
import { GiWoodAxe } from "react-icons/gi"

const Herosection = () => {
  return (
    <div className={ styles["herosection"] }>
        <Navbar type='light' />
        <div className={ styles["herosection__content"] }>
            <div className="container">
                <div className={ styles["herosection__content__details"] }>
                    <h1>Find & Offer Services with Kichor</h1>
                    <h5>Find verified services providers around your area</h5>
                    <HerosectionForm />
                </div>
            </div>
            <div className={ styles["herosection__content__categories"] }>
            <div className={ styles["herosection__content__categories--item"] }>
                <div className={ styles["herosection__content__categories--item--item1"] }>
                    <span><FaNetworkWired fill='#1E4DDA' size="2.5rem" /></span>
                    <h5>Artisans</h5>
                </div>
            </div>
            <div className={ styles["herosection__content__categories--item"] }>
                <div className={ styles["herosection__content__categories--item--item2"] }>
                    <span><MdHealthAndSafety fill='#1E4DDA' size="2.5rem" /></span>
                    <h5>Health & Beauty</h5>
                </div>
            </div>
            <div className={ styles["herosection__content__categories--item"] }>
                <div className={ styles["herosection__content__categories--item--item3"] }>
                    <span><MdQueueMusic fill='#1E4DDA' size="2.5rem" /></span>
                    <h5>Food & Entertainment</h5>
                </div>
            </div>
            <div className={ styles["herosection__content__categories--item"] }>
                <div className={ styles["herosection__content__categories--item--item4"] }>
                    <span><GiWoodAxe fill='#1E4DDA' size="2.5rem" /></span>
                    <h5>Carpenters</h5>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Herosection