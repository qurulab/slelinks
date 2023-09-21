import React from 'react'
import styles from "./get-started.module.scss"

const GetStarted = () => {
  return (
    <div className={ styles["start"] }>
        <div className="container">
            <div className={ styles["start__content"] }>
                <div className="row">
                    <div className="col-md-10 col-sm-12 col-xs-12">
                        <div className={ styles["start__content__header"] }>
                            <h1>Seamless Onboarding</h1>
                            <p>No filling of long forms, no submittion of long credentials. You can create a free account, add your services, and be available for bookings in few minutes</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={ styles["start__content__grid"] }>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   1
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Create a free account</h6>
                            <p>Get started by creating a free account. It's simple, fast and seamless and it can be completed in 30 seconds</p>
                        </div>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   2
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Add your services</h6>
                            <p>Complete your profile and add your services listings and be available to users for bookings</p>
                        </div>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   3
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Fufil Bookings</h6>
                            <p>Accespt service bookings from customers, fufil the booking and receive yoiur payment to your wallet</p>
                        </div>
                        {/* <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   4
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Fufil bookings</h6>
                            <p>Now you can sit back while you only bother about fufilling bookings. We simply take care of the rest</p>
                        </div> */}
                    </div><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted