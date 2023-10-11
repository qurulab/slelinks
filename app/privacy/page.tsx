import React from 'react'
import styles from "./privacy.module.scss"
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const Privacy = () => {
  return (
    <div className={ styles["privacy"] }>
      <div className={ styles["privacy__header"] }>
        <Navbar type='light' />
        <div className={ styles["privacy__header--text"] }>
          <h1>Privacy Policy</h1>
          <p>Effective Date: 1st January 2023</p>
        </div>
      </div>

     <div className="container">

     <div className={ styles["privacy__definitions"] }>
        <h1>DEFINITIONS</h1>
        <div className={ styles["privacy__definitions__details"] }>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>1. "Parties" means both You and the Operator.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>2. "Operator" means Slelinks Technologies Limited, the owner, publisher, and administrator of the Application.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>3. "Personal Data" means any personal information collected for You in relation to your use of this service that is capable of identifying You.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>4. "Personal Data" means any personal information collected for You in relation to your use of this service that is capable of identifying You.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>5. "Products" means the goods and products both tangible and intangible offered on the Application.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>6. "Services" means the services offered on the Application.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>7. "Third Party Service Provider" means a party or parties who are contracted by the owner/data controller for the purposes of processing the personal data of the user.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>8. "User Content" means any audio, video, text, images or other material users choose to display on this Application.</p>
            </div>
            <div className={ styles["privacy__definitions__details--item"] }>
              <p>9. "You, Yours" means the user of this Application.</p>
            </div>
        </div>
      </div>

      <div className={ styles["privacy__intro"] }>
        <h1>INTRODUCTION</h1>
        <div className={ styles["privacy__intro__details"] }>
          <div className={ styles["privacy__intro__details--item"] }>
            <p>1. This Privacy Policy is designed to inform You about the Personal Data we collect, how we collect this data, the uses of the data, and Your rights relating to the Personal Data when You use this Service or purchase the Products and Services offered on the Application.</p>
          </div>
          <div className={ styles["privacy__intro__details--item"] }>
            <p>2. We are committed to protecting your Personal Data while You use this Application.</p>
          </div>
          <div className={ styles["privacy__intro__details--item"] }>
            <p>3. By continuing to use our Application, You acknowledge that You have reviewed the Privacy Policy and agree to its terms. This also means that You have consented to the use of Your Personal Data and have accepted the applicable disclosures.</p>
          </div>
        </div>
      </div>


      <div className={ styles["privacy__data"] }>
        <h1>THE PERSONAL DATA WE COLLECT FROM</h1>
        <p>We collect various information to enable us to provide a good Service to all our users. Depending on how our Service will be used, the different types of Personal Data we collect are as follows:</p>
        <div className={ styles["privacy__data__details"] }>
          <div className={ styles["privacy__data__details--item"] }>
            <p>A. For registered users: During the process of Your registration we may collect the following information
                  Name, Date of Birth, Bank Verification Number, and Mobile Phone
                  Number We may also require other information in relation to:</p>

                <span>
                  <p>1. Your interaction with our representatives;</p>
                  <p>2. receiving notifications by text message or email about marketing;</p>
                  <p>3. receiving general emails from us.</p>
                  <p>4. commenting on our Content or other User Content on our Application</p>
                  <p>5. the purchases You make.</p>
                </span>
          </div>
          <div className={ styles["privacy__data__details--item"] }>
            <p>B. For unregistered users: We will collect passive information from all registered and
                unregistered users. This information includes cookies, IP address information, location information, and certain browser information.</p>
          </div>
          <div className={ styles["privacy__data__details--item"] }>
            <p>C. Sales and billing information: We may collect Your credit and/or debit card information, which includes Your card number, password, etc, Your billing address, Your contact address, and other information required for Your purchase.</p>
          </div>
          <div className={ styles["privacy__data__details--item"] }>
            <p>D. User experience: From time to time we may also request certain Personal Data that may be necessary to improve our Service and the Products and Services we offer for sale on the Application.</p>
          </div>
        </div>
      </div>



      <div className={ styles["privacy__personalData"] }>
        <h1>THE PERSONAL DATA WE COLLECT AS YOU USE OUR SERVICE</h1>
        <p>We use the following to collect Personal Data from You:</p>
        <p>Cookies: We use the data collected by the cookies to offer You the best experience on our Application. Cookies are information stored on Your browser when You visit our Application or use a social network with Your PC, Smartphone, or Tablet. They contain various data which includes the name of the server from which it comes, the numeric identifier, etc. The types of cookies we use are as follows:</p>
        <div className={ styles["privacy__personalData__details"] }>
          <div className={ styles["privacy__personalData__details--item"] }>
            <p>1. Technical cookies: These cookies are essential for the correct functioning of our Application and to provide the Service required to our users.</p>
          </div>
          <div className={ styles["privacy__personalData__details--item"] }>
            <p>2. Profiling cookies: These cookies are used to create user profiles based on personal choices and preferences in order to send advertising messages to Your device.</p>
          </div>
          <div className={ styles["privacy__personalData__details--item"] }>
            <p>3. Third-party cookies: While using our Service, You may receive cookies from applications managed by other organizations. Third-party analytical cookies may also be installed. Third-party analytical cookies are used to detect information on user behaviour on our Application. This is placed in order to monitor the performance and improve the usability of this Application.</p>
          </div>
          <div className={ styles["privacy__personalData__details--item"] }>
            <p>4. Support in configuring your browser: You can manage cookies through the settings of Your browser on Your device. However, deleting cookies from Your browser may remove the preferences You have set for this Application.</p>
          </div>
          <p>Log Data: We also use log files which store automatic information collected when users visit this Application. The log data which may be collected is as follows:</p>
          <span>
            <p>1. the domain and host from which You access the Application:</p>
            <p>2. name of the Internet Service Provider (ISP);</p>
            <p>3. date and time of visit;</p>
            <p>4. Your computer operating system and browser software;</p>
            <p>5. internet protocol (IP) address.</p>
          </span>
        </div>
      </div>


      <div className={ styles["privacy__thirdParty"] }>
        <h1>THIRD PARTIES</h1>
        <p>We may utilize third-party service providers, from time to time to help in processing
          Your Personal Data and help us with our Application.
          We share Your Personal Data with third parties in order to protect the rights, properties, or
          safety of us, the users, or as otherwise required by law.</p>
      </div>

      <div className={ styles["privacy__dataStorage"] }>
        <h1>STORAGE OF PERSONAL DATA</h1>
        <p>We take the security of the Personal Data we collect very seriously and we take reasonable measures to reduce the risk of accidental destruction, loss, or unauthorized access to such information. However, please note that no system involving the transmission of information via electronic storage systems or the Internet is completely secure. <br />The Personal Data and any other information we have about You may be stored for such period as we may determine until You terminate Your account with us or You withdraw Your consent.</p>
      </div>


      <div className={ styles["privacy__processing"] }>
        <h1>PURPOSE OF PROCESSING PERSONAL DATA</h1>
        <p>We collect and use the Personal Data that we collect for the following reasons:</p>
        <div className={ styles["privacy__processing__details"] }>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>1. to provide our Service, maintain and make improvements to the Service we provide to You;</p>
          </div>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>2. to develop new Products and Services on the Application;</p>
          </div>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>3. to provide personalized Service to You including making recommendations and providing personalized content;</p>
          </div>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>4. to provide customer service to You;</p>
          </div>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>5. to provide You with updates on the Application and related items;</p>
          </div>
          <div className={ styles["privacy__processing__details--item"] }>
            <p>to provide analytics and measurement to understand how our Service is used.</p>
          </div>
        </div>
      </div>


      <div className={ styles["privacy__protection"] }>
        <h1>PROTECTION OF PERSONAL DATA</h1>
        <div className={ styles["privacy__protection__details"] }>
          <p>1. Our Service is built with strong security features that continuously protect Your Personal Data. Our security features help us detect and block security threats. If we detect any security risk, we may inform You and guide You through steps to stay protected.</p>
        </div>
      </div>


      <div className={ styles["privacy__disclosure"] }>
        <h1>DISCLOSURE OF PERSONAL DATA</h1>
        <p>When You share Your Personal Data</p>
        <p>Our Service enables You to share information with other users. However, You have control over how You share this information. When You upload any content on our Application, Your content becomes accessible to other users.</p>
        <h3>When we share Your Personal Data</h3>
        <p>We do not disclose Your Personal Data except for any of the following reasons:</p>
        <div className={ styles["privacy__disclosure__details"] }>
          <p>1. if You have granted us permission to do so: We will disclose Your Personal Data where we have received Your unequivocal consent and permission to do so. ;</p>
        </div>
        <div className={ styles["privacy__disclosure__details"] }>
          <p>2. for the purposes of processing Your Personal Data: We may disclose Your Personal Data to our affiliates and other trusted businesses or persons for the purpose of processing Your Personal Data for us, based on our instruction and in compliance with our Privacy Policy;</p>
        </div>
        <div className={ styles["privacy__disclosure__details"] }>
          <p>3. if we are legally required to do so: We may also disclose and share Your Personal Data for the following reasons:</p>
          <ul>
            <li>to meet any applicable law, regulation, legal process, or any legal request such as subpoenas, court orders, or requests for administrative or government bodies;</li>
            <li>enforce our applicable Terms of Use;</li>
            <li>to detect, prevent or address any fraud, security, or technical issues;</li>
            <li>to prosecute or bring any legal action against any user who has violated any law or our Terms of Use.</li>
          </ul>
          <div className={ styles["privacy__disclosure__details"] }>
            <p>4. Any other reason as may be necessary for the operation of our Application.</p>
        </div>
        </div>
      </div>


      <div className={ styles["privacy__content"] }>
        <h1>USER CONTENT</h1>
        <p>We may allow users to post their content or information on this. These contents include audio, video, updates, articles, images or other materials users choose to display on the. Please note that any material which You may post is made accessible to the entire public and will not be regulated by this Privacy Policy.</p>
      </div>


      <div className={ styles["privacy__content"] }>
        <h1>LINKS TO THIRD-PARTY / SERVICES</h1>
        <p>The website may contain links to other pages which we believe may offer useful information. These linked pages are not under our control and this Privacy Policy does not apply to these. We suggest that You contact those directly for information on their privacy policy, security, data collection and distribution policies.</p>
      </div>


      <div className={ styles["privacy__content"] }>
        <h1>CONTACT INFORMATION</h1>
        <p>If You have any questions regarding this Privacy Policy or the Personal Data we collect or if You wish to make any comments or complaints about anything related to this Privacy Policy, please contact us at the following email address: support@slelinks.co.</p>
      </div>


      <div className={ styles["privacy__content"] }>
        <h1>REVISIONS AND MODIFICATIONS</h1>
        <p>We reserve the right to modify and revise this Privacy Policy from time to time without Your explicit consent. If we make any fundamental changes, we will notify You and obtain Your consent to the revised version.</p>
      </div>
     </div>

     <Banner />
     <Footer />
    </div>
  )
}

export default Privacy