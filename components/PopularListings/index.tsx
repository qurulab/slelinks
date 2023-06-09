import styles from "./popular-listing.module.scss"
import SingleListing from "../SingleListing"
import beauty from "../../public/assets/images/beauty.jpeg"


const PopularListings = () => {
  return (
    <div className={ styles["featured__listings"] }>
        <div className="container">
            <div className={ styles["featured__listings__header"] }>
                <div>
                    <h1>Popular listings</h1>
                    <h5>The popular listings are progressively below</h5>
                </div>
                <div></div>
            </div>
            <div className={ styles["featured__listings__content"] }>
                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ beauty }
                    title="Achilles beauty house"
                />
            </div>
        </div>
    </div>
  )
}

export default PopularListings