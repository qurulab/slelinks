import styles from "./button.module.scss"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

interface buttonProps {
    title: string;
    path: string;
}

const Button: React.FC<buttonProps> = ({
    title,
    path
}) => {
  return (
    <Link href={ path } className={ styles["button"] }><span>{ title } &nbsp; <BsArrowRight /></span></Link>
  )
}

export default Button