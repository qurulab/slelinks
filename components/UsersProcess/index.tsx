import React from 'react'
import styles from "./process.module.scss"
import { MdManageAccounts, MdReviews } from 'react-icons/md'
import { BiSearchAlt } from "react-icons/bi"

const UsersProcess = () => {
  return (
    <div className={ styles["process"] }>
        <div className="container">
            <div className={ styles["process__header"] }>
                <h1>Vetted Artisans within your reach</h1>
                <p>Discover vetted and trusted local service men for all your needs reanging from plumbing, house cleaning, wall painting, laundry services, house shifting among others</p>
            </div>
            <div className={ styles["process__grid"] }>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon1"] }>
                        <MdManageAccounts />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Create a free account</h5>
                        <p>Download the app and sign up. It is easy and seamless and can be completed in 2 minutes</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon2"] }>
                        <BiSearchAlt />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Find & Request a Service</h5>
                        <p>Browse through our list of vetted local service men and book a service directly on the app</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon3"] }>
                        <MdReviews />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Offer reviews & ratings</h5>
                        <p>Pay and offer reviews and rating once your service has been served</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UsersProcess