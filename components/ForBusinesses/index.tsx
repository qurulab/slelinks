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
                        <h1>Sell More in Schools</h1>
                        <p>Leverage our school communities to increase your access to a wider market of students. Easily sell your services and products to students near you and beyond.</p>
                        <Button type="primary" title="Get started" path="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForBusinesses