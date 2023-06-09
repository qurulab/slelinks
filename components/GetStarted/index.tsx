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
                            <p>No filling of long forms, no submittion of credentials. You can create a free account, add your listings, manage listings all in few minutes</p>
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
                            <h6>Verify your account</h6>
                            <p>Verify your new account by clicking on the link that will be sent to your mail when you register</p>
                        </div>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   3
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Add your listings</h6>
                            <p>Add your services listings by simply filling out a short form with the relevant information</p>
                        </div>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   4
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Fufil bookings</h6>
                            <p>Now you can sit back while you only bother about fufilling bookings. We simply take care of the rest</p>
                        </div>
                    </div><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted