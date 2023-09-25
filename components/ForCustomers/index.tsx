import styles from "./cusomers.module.scss"
import Image from "next/image"
import customer from "../../public/assets/images/customer.webp"
import Button from "../Button"

const ForCustomers = () => {
  return (
    <div className={ styles["businesses"] }>
        <div className="container">
            <div className="row">
                {/* <div className="col-md-1"></div> */}
                <div className="col-md-6">
                    <div className={ styles["businesses__text"] }>
                        <h1> Put the joy back in schooling.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis egestas lorem a fermentum. Morbi interdum diam et mi fermentum, sed faucibus purus iaculis.</p>
                        <Button type="primary" title="Get started" path="" /><br />
                    </div>
                </div>
                <div className="col-md-5">
                    <div>
                        <Image className={ styles["businesses__img"] } src={ customer } alt="Business thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForCustomers