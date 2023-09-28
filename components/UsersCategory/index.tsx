"use client"

import React from 'react'
import styles from "./users-category.module.scss"
import { useState } from 'react'
import ForBusinesses from '../ForBusinesses'
import ForCustomers from '../ForCustomers'

const UsersCategory = () => {
    const [ toggleState, setToggleState ] = useState(1)

    const handleToggle = (id: number) => {
        setToggleState(id)
    }

  return (
    <div className={ styles["users__categories"] }>
        <div className="container">
            <div className={ styles["users__categories__header"] }>
                <h1>Everythig you need to succeed all in one place</h1>
                <p>Whether you are a student entrepreneur looking to reach more audience or a student looking to have more fun, we have got you covered</p>
            </div>
            <div className={ styles["users__categories__tabs"] }>
                <div onClick={ () => handleToggle(1) }  className={ toggleState === 1 ? styles["users__categories__tabs__item--active"] : styles["users__categories__tabs__item"] }>For Businesses</div>
                <div onClick={ () => handleToggle(2) } className={ toggleState === 2 ? styles["users__categories__tabs__item--active"] : styles["users__categories__tabs__item"] }>For Students</div>
            </div>
        </div>
        <div className={ styles["users__categories__contents"] }>
                { toggleState === 1 ? <ForBusinesses /> : null }

                { toggleState === 2 ? <ForCustomers /> : null }
            </div>
    </div>
  )
}

export default UsersCategory