import styles from "./single-listing.module.scss";
import Image from "next/image"

interface cardProps {
    image: any;
    title: string;
}

const SingleListing: React.FC<cardProps> = ({
    image, title
}) => {
  return (
    <div className={ styles["single__listing"] }>
        <div className={ styles["single__listing__img"] }>
        <div className={ styles["single__listing__img--overlay"] }></div>
            <Image src={ image } height={ 400 } width={ 400 } alt="listing thumbnail" />
            <div className={ styles["single__listing__img__text"] }>
            <h4>{ title }</h4>
        </div>
        </div>
    </div>
  )
}

export default SingleListing