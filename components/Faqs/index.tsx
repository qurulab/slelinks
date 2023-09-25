import styles from "./faqs.module.scss"
import SingleFaq from "../Faq"

const Faqs = () => {

    const faqs = [
        {
            id: 1,
            question: "What is Slelinks",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 2,
            question: "Who can use Slelinks?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 3,
            question: "Is there a monthly subscription charge ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 4,
            question: "Can I connect with lecturers?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 5,
            question: "Can all student use Slelinks?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        }
    ]

  return (
    <div className={ styles["faqs"] }>
        <div className="container">
            <div className="row">
                <div className={ styles['faqs__header'] }>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="row">
                <div className={ styles['faqs__details'] }>
                { faqs ? faqs.map((faq) => (
                    <SingleFaq faq={ faq } key={ faq.id }  />
                )) : <p>No questions at the moment</p> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs