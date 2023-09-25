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
                        <h1> Never Miss A Fun Event!</h1>
                        <p>Stay informed of all parties, seminars, picnics and fun moments near you.</p>
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