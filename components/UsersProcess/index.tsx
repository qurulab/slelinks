import React from 'react'
import styles from "./process.module.scss"
import { MdManageAccounts, MdReviews, MdNotificationsActive } from 'react-icons/md'
import { BiSearchAlt, BiGroup } from "react-icons/bi"
import { PiStudentDuotone } from "react-icons/pi"
import { GiShare } from 'react-icons/gi'

const UsersProcess = () => {
  return (
    <div className={ styles["process"] }>
        <div className="container">
            <div className={ styles["process__header"] }>
                <h1>What Can You Do With Slelinks App?</h1>
                <p>Discover students, lecturers and alumni in your school. Slelinks app makes your learning and school experience fun.</p>
            </div>
            <div className={ styles["process__grid"] }>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon1"] }>
                        <MdManageAccounts />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Connect</h5>
                        <p>With Slelinks, you can meet new student, lecturer and alumni from your school and nearly schools.</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon2"] }>
                        <PiStudentDuotone />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Learn</h5>
                        <p>Stay updated with news and announcements from your favourite schools, and lecturers with ease. Access both free and paid learning materials.</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon3"] }>
                        <BiSearchAlt />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>List & Find Hostels</h5>
                        <p>Stop the endless hostel search with the Slelinks App. Find vetted and verified hostels near you.</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon4"] }>
                        <BiGroup />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Build & join Communities</h5>
                        <p>Stay connected with school communities around your school.</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon1"] }>
                        <MdNotificationsActive />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Timely Notifications</h5>
                        <p>Never miss updates that matter for your success. Set email and in-platform notifications with a click.</p>
                    </div>
                </div>
                <div className={ styles["process__grid__item"] }>
                    <div className={ styles["process__grid__item--icon--icon6"] }>
                        <GiShare />
                    </div>
                    <div className={ styles["process__grid__item--text"] }>
                        <h5>Share</h5>
                        <p>Build connections, link to other people and share updates.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UsersProcess