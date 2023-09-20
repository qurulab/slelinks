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
                        <h1>Find quality services providers when it matters most</h1>
                        <p>From plumbers, instrumentalists, mechanics, bakers, tailors to lesson teachers, easily find verfied service providers all from your mobile phones. It's fast and no needless signups</p>
                        <Button type="primary" title="Find service providers" path="" /><br />
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