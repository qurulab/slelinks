import React from 'react'
import styles from "./info.module.scss"

const Info = () => {
  return (
    <div className={ styles["info"] }>
        <div className={ styles["info__content"] }>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatum?
        </div>
    </div>
  )
}

export default Info