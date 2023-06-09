"use client"

import React from 'react'
import styles from "./single-faq.module.scss"
import { BsFillPlusCircleFill } from "react-icons/bs"
import { AiFillMinusCircle } from "react-icons/ai"
import { useState, useEffect } from "react"

interface faqProps {
    // id: number;
    // question: string;
    // answer: string
    faq: any
}

const SingleFaq: React.FC<faqProps> = ({ faq }) => {

    const { question, answer, id } = faq

    const [showDetails, setShowDetails] = useState(false)

    const handleClick = () => {
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        if(id === 1) {
            setShowDetails(true)
        }
    }, [])

  return (
    <div className={ styles["single__faq"] }>
       <div className={ styles["single__faq__content"] }>
        <div className={ styles["single__faq__content__header"] }>
            <h5>{ question }</h5>
            <div className={ styles["single__faq__menu"] }>
            { 
                showDetails ? 
                    <AiFillMinusCircle
                    size="1.5rem"
                    fill='#000' cursor="pointer"
                    onClick={ handleClick } 
                    />
                    : 
                    <BsFillPlusCircleFill
                    fill='#000'
                    size="1.5rem" cursor="pointer"
                    onClick={ handleClick }
                   />  
            }
        </div>
        </div>
        { showDetails ? <p>{ answer }</p> : null }
       </div>
    </div>
  )
}

export default SingleFaq