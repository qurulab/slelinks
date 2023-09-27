import styles from "./faqs.module.scss"
import SingleFaq from "../Faq"

const Faqs = () => {

    const faqs = [
        {
            id: 1,
            question: "What is Slelinks",
            answer: "Slelinks is a social ed-tech platform for students, lecturers, and alumni to connect, learn, & share."
        },
        {
            id: 2,
            question: "Who can use Slelinks?",
            answer: "Students, lecturers, alumni, bloggers, freelancers"
        }, 
        {
            id: 3,
            question: "Can I connect with students in other schools?",
            answer: "Yes, you can connect with students in other schools and other departments."
        },
        {
            id: 4,
            question: "Is there a monthly subscription charge?",
            answer: "No, Slelinks is free to use"
        },
        {
            id: 5,
            question: "Can I connect with lecturers?",
            answer: "Yes, you can"
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