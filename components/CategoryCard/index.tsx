import styles from "./category-card.module.scss"
import Image from 'next/image'
import Link from "next/link"
import { HiArrowLongRight } from "react-icons/hi2"

interface cardProps {
    title: string;
    description: string;
    thumbnail: any;
    label: string
}

const CategoryCard: React.FC<cardProps> = ({
    title,
    description,
    thumbnail,
    label
}) => {
  return (
    <div className={ styles["category__card"] }>
    <div className={ styles["category__card__img"] }>
        <div className={ styles["category__card__img--overlay"] }></div>
        <Image src={thumbnail} alt='Card thumbnail' className={ styles["category__card__img--img"] } />
    </div>
    <div className={ styles["category__card__text"] }>
        <h6>{ title }</h6>
        <p>{ description }</p>
        <Link className={ styles["category__card__text--btn"] } href="">{ label } &nbsp; <HiArrowLongRight /></Link>
    </div>
</div>
  )
}

export default CategoryCard