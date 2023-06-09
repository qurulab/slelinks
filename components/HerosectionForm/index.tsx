import styles from "./herosection-form.module.scss"

const HerosectionForm = () => {
  return (
    <>
    <form className={ styles["hero__form"] }>
        <div className={ styles["hero__form__inputs"] }>
            <input 
                type="text"
                placeholder='What are you looking for'
                />
            <select name="" id="" defaultValue="Select your city">
                <option>Select your city</option>
                <option value="">Agbor</option>
            </select>
            <select name="" id="" defaultValue="Select category">
                <option>Select category</option>
                <option value="">All categories</option>
            </select>
        </div>
            <button>Search</button>
    </form>
    </>
  )
}

export default HerosectionForm