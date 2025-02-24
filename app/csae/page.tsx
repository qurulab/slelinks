import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import styles from "./csae.module.scss"
import Link from 'next/link'

const CSAE = () => {
    return (
        <div className={styles["privacy"]}>
            <div className={styles["privacy__header"]}>
                <Navbar type='light' />
                <div className={styles["privacy__header--text"]}>
                    <h1>Slelinks App Standards Against Child Sexual Abuse and Exploitation (CSAE)</h1>
                    <p>Effective Date: 1st January 2023</p>
                </div>
            </div>

            <div className="container">

                <div className={styles["privacy__intro"]}>
                    <h1>1.INTRODUCTION</h1>
                    <div className={styles["privacy__intro__details"]}>
                        <div className={styles["privacy__intro__details--item"]}>
                            <p>Slelinks is committed to providing a safe and secure environment for all users, particularly children and young learners. We have a zero-tolerance policy toward child sexual abuse and exploitation (CSAE) and take active measures to prevent, report, and eliminate any related activities within our platform.</p>
                        </div>
                    </div>
                </div>


                <div className={styles["privacy__data"]}>
                    <h1>2. Prohibited Activities</h1>
                    <p>We strictly prohibit the following activities on Slelinks:</p>
                    <div className={styles["privacy__data__details"]}>
                        <div className={styles["privacy__data__details--item"]}>
                            <span>
                                <p>- Any form of child sexual abuse material (CSAM) creation, sharing, or distribution.</p>
                                <p>- Any content that exploits, endangers, or sexually harms children.</p>
                                <p>- Engaging in grooming or any predatory behavior toward minors.</p>
                                <p>- Any attempt to contact minors for inappropriate purposes.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["privacy__personalData"]}>
                    <h1>3. Prevention and Safety Measures</h1>
                    <p>To ensure the safety of our users, we implement the following measures:</p>
                    <div className={styles["privacy__data__details"]}>
                        <div className={styles["privacy__data__details--item"]}>
                            <span>
                                <p>- <b>Content Moderation:</b> AI-powered and manual review of user-generated content to detect and remove inappropriate material.</p>
                                <p>- <b>User Reporting:</b>A reporting system allowing users to flag suspicious activities.</p>
                                <p>- <b>Age-Appropriate Features:</b> Restrictions on certain platform functionalities for younger users.</p>
                                <p>- <b>Background Checks:</b> Verification processes for educators and content contributors.</p>
                                <p>- <b>Parental Controls:</b> Features that allow guardians to monitor and restrict child interactions within the app.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["privacy__personalData"]}>
                    <h1>4. Reporting and Law Enforcement Collaboration</h1>
                    <p>We encourage users to report any suspected CSAE incidents. Reports can be made through:</p>
                    <div className={styles["privacy__data__details"]}>
                        <div className={styles["privacy__data__details--item"]}>
                            <span>
                                <p>- <b>In-app reporting tools</b></p>
                                <p>- <b>Email:</b>[Insert Support Email]</p>
                                <p>- <b>Law Enforcement:</b> We cooperate with local and international law enforcement agencies, including INTERPOL and child protection organizations, to report and remove abusive content.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["privacy__data"]}>
                    <h1>5. Compliance and Legal Obligations</h1>
                    <p>Slelinks complies with relevant global laws and regulations, including:</p>
                    <div className={styles["privacy__data__details"]}>
                        <div className={styles["privacy__data__details--item"]}>
                            <span>
                                <p>- United Nations Convention on the Rights of the Child (UNCRC)</p>
                                <p>- General Data Protection Regulation (GDPR) (for child data protection)</p>
                                <p>- U.S. Children's Online Privacy Protection Act (COPPA)</p>
                                <p>- African Charter on the Rights and Welfare of the Child (ACRWC)</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["privacy__data"]}>
                    <h1>6. Consequences for Violations</h1>
                    <p>Violators of our CSAE policy will face:</p>
                    <div className={styles["privacy__data__details"]}>
                        <div className={styles["privacy__data__details--item"]}>
                            <span>
                                <p>- Immediate account suspension or permanent ban.</p>
                                <p>- Reporting to appropriate law enforcement agencies.</p>
                                <p>- Legal actions where necessary.</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles["privacy__data"]}>
                    <h1>7. Continuous Review and Improvement</h1>
                    <p>We regularly update our policies and technology to effectively enhance child safety and combat CSAE.</p>
                </div>

                <div className={styles["privacy__data"]}>
                    <h1>Contact Us</h1>
                    <p>For any concerns or reports, please reach out to: <Link href="">support@slelinks.com </Link></p>
                </div>

            </div>

            <Banner />
            <Footer />
        </div>
    )
}

export default CSAE
