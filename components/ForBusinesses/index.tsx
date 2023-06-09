import styles from "./business.module.scss"
import Image from "next/image"
import businessImg from "../../public/assets/images/business.webp"
import Button from "../Button"

const ForBusinesses = () => {
  return (
    <div className={ styles["businesses"] }>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div>
                        <Image className={ styles["businesses__img"] } src={ businessImg } alt="Business thumbnail" />
                    </div>
                </div>
                {/* <div className="col-md-1"></div> */}
                <div className="col-md-6">
                    <div className={ styles["businesses__text"] }>
                        <h1>More visibility, access to more customers everyday</h1>
                        <p>Leverage our marketplace to increase your access to a wider market for your services and gain better insights on your business data at your fingertips. It's free, easy to get started.</p>
                        <Button title="Get started for free" path="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForBusinesses