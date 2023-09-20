import styles from "./button.module.scss"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

interface buttonProps {
    title: string;
    path: string;
    type: string;
}

const Button: React.FC<buttonProps> = ({
    title,
    path,
    type
}) => {
  return (
    <Link 
      href={ path } 
      className={ type == "primary" ? styles["button__primary"] : styles["button__secondary"] }>
      <span>{ title } &nbsp;
       <BsArrowRight /></span></Link>
  )
}

export default Button