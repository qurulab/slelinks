import React from 'react'
import styles from "./new-footer.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import logoImg from "../../public/assets/images/logo.png"

const Footer = () => {
  return (
    <div className={ styles["new__footer"] }>
        <div className="container">
            <div className={ styles["new__footer__content"] }>
                <Link href="/">
                    <span><Image src={ logoImg } height={100} width={100} alt='Kichor Logo'/></span>
                </Link>
                <div className={ styles["new__footer__content__links"] }>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Ikpa Akazi</h5>
                        <ul>
                            <Link href="#team">Communities</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Our Team</Link>
                        </ul>
                    </div>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Our Services</h5>
                        <ul>
                            <Link href="">Web development</Link>
                            <Link href="/">Mobile development</Link>
                            <Link href="/">Blockchain development</Link>
                        </ul>
                    </div>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Contact</h5>
                        <ul>
                            <a href="mailto: hello@qurulab.com">hello@ikpaakazi.com</a>
                            <a href="tel:+2347068684876">+234 706 868 4876</a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <p className={ styles["new__footer__helper"] }>Ikpa Akazi. All Rights Reserved. &copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer