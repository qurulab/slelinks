import styles from "./featured-listings.module.scss"
import SingleListing from "../SingleListing"
import listingImg from "../../public/assets/images/listing-img.jpeg"


const FeaturedListings = () => {
  return (
    <div className={ styles["featured__listings"] }>
        <div className="container">
            <div className={ styles["featured__listings__header"] }>
                <div>
                    <h1>Featured listings</h1>
                    <h5>The featured listings are progressively below</h5>
                </div>
                <div></div>
            </div>
            <div className={ styles["featured__listings__content"] }>
                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />

                <SingleListing 
                    image={ listingImg }
                    title="Achilles beauty house"
                />
            </div>
        </div>
    </div>
  )
}

export default FeaturedListings