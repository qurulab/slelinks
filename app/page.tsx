import styles from "./page.module.scss";


export default function Home() {
  return (
   <div className={ styles["home"] }>
      <div className="container">
      <h1>Welcome to Kichor</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, molestias!</p>
      </div>
   </div>
  )
}
