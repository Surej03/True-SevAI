import React from 'react'
import {delay, motion} from "framer-motion"


const TermsOfServices = () => {
  return (
    <motion.div
    initial = {{opacity:0.2, y:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <div className='mx-8'>
        <h1 className={`text-xl text-center my-4 font-bold text-white dark:text-black`}>TRUE SEVAI,INC.TERMS OF SERVICE</h1>
        <p className={`font-medium text-white/90 dark:text-black`}>Last Updated: Jan 11, 2025</p>
        <div className='pt-3'>

        <p className='text-sm text-white/80 dark:text-black'>These Terms of Service (<span className='font-semibold'>"Terms"</span>) apply to your access to and use of (a) the website located at https://truesevai.org/ 
          (or any successor links) and all associated web pages, websites, and social media pages (the “Website”) 
          provided by True SevAI, Inc. (<span className='font-semibold'>“True SevAI,” “we,” “our,”</span> or <span className='font-semibold'>“us”</span>) and (b) any online services ((a) and (b), collectively, 
          our <span className='font-semibold'>“Services”</span>).</p>

          <p className='pt-2 font-medium text-white/80 dark:text-black'>By using our Services, you expressly agree to these Terms. Please carefully review these Terms before using our 
            Services, including, without limitation, the warranty disclaimers and releases set forth in Section 10, which limit 
            our liability and your ability to bring certain claims against us.</p>

          <p className='pt-2 font-medium text-white/80 dark:text-black'>BY AGREEING TO THESE TERMS, EXCEPT FOR (I) CERTAIN TYPES OF DISPUTES DESCRIBED IN SECTION 13 (II) WHERE YOU EXERCISE 
            YOUR RIGHT TO OPT OUT OF ARBITRATION AS DESCRIBED IN SECTION 13, OR (III) TO THE EXTENT PROHIBITED BY LAW, 
            DISPUTES BETWEEN YOU AND True SevAI WILL BE RESOLVED SOLELY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS ARBITRATION, 
            CLASS ACTION, ANY OTHER KIND OF REPRESENTATIVE PROCEEDING, OR BY JURY TRIAL.</p>

          <p className='pt-2 text-sm text-white/80 dark:text-black'>We may make changes to these Terms. The <b>“Last Updated”</b> date above indicates when these Terms were last changed. If we 
            make future changes, we may provide you with notice of such changes, such as by sending an email, providing a notice 
            through our Services, or updating the date at the top of these Terms. Unless we say otherwise in our notice, the amended 
            Terms will be effective immediately, and your continued use of our Services after we provide such notice will confirm 
            your acceptance of the changes. If you do not agree to the amended Terms, you must immediately stop using our Services.
             Any changes to these Terms will not apply to any dispute between you and us arising prior to the date on which we 
             posted the updated Terms incorporating such changes or otherwise notified you of such changes.</p>

            <h2 className='pt-2 mx-3 font-medium text-white dark:text-black'>1. Eligibility and Use Restrictions; Accounts</h2>
            <h4 className='pt-2 mx-9 text-sm font-medium underline underline-offset-1 text-white dark:text-black'>a. Eligibility and Use Restrictions.</h4>

            <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>Users under 18 years of age (or the age of legal majority where the user lives) may only use our Services under 
              the supervision of a parent or legal guardian who agrees to be bound by these Terms. The parent or legal guardian of 
              a user under the age of 18 (or the age of legal majority) is fully responsible for the acts or omissions of such 
              user in relation to our Services. If you are a parent or legal guardian and you believe that your child under the 
              age of 18 is using our Services without your consent, please contact us at team@deepai.org. In using our Services, 
              you represent and warrant that you meet the eligibility requirements to use our Services and have the authority 
              to be bound by these Terms, including, without limitation, if you use our Services on behalf of another person or 
              entity (in which case “you” will include that person or entity and that person or entity agrees to be responsible to us).
              </p>

              <h4 className='pt-2 mx-9 text-sm font-medium underline underline-offset-1 text-white dark:text-black'>b. Accounts.</h4>

              <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>You may be required to create an account with us in order to use some or all of our Services. You will promptly 
                update any information contained in your account if it changes. You must maintain the security of your account, 
                as applicable, and promptly notify us if you discover or suspect that someone has accessed your account without 
                your permission. We reserve the right to reject, require that you change, or reclaim usernames, including on 
                behalf of businesses or individuals that hold legal claim, including trademark rights, in those usernames.</p>

                <h2 className='pt-2 mx-3 font-medium text-white dark:text-black'>2. Your Information</h2>

                <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>You may provide certain information to True SevAI in connection with your use of our Services or we may otherwise 
                  collect certain information about you when you use our Services. For information about how we collect, use, 
                  share and otherwise process information about you, please see our Privacy Policy. You agree to receive all 
                  communications, agreements, and notices that we provide in connection with our Services electronically, 
                  including by email, SMS or text message (if you provide your manual consent to opt in to receive SMS or 
                  text messages) to the cell phone number associated with your account, or by posting them to your account 
                  on the Website or otherwise through our Services.</p>

                <h2 className='pt-2 mx-3 font-medium text-white dark:text-black'>3. User Content and Publicity</h2>
                <h4 className='pt-2 mx-9 text-sm font-medium underline underline-offset-1 text-white dark:text-black'>a. Content</h4>

                <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>You may provide input to the Services (“Input”), and receive output from the Services based on the Input (“Output”). 
                  Input and Output are collectively referred to as “Content.” You represent and warrant that you have all rights, 
                  licenses, and permissions needed to provide Input to our Services. You agree that the Input will comply with 
                  applicable law and that the Input will comply with all applicable terms and conditions herein. You own all right, 
                  title, and interest in and to the Content. You understand and acknowledge that artificial intelligence is a 
                  rapidly changing area. While we are continually reliable, we do not adopt or endorse any Output and we are not 
                  responsible for any third-party references generated by the Services. You should not rely on Output, and 
                  should always check the Output for accuracy, completeness and reliability. We may use Content in a number of
                   ways, including to provide, maintain, develop, and improve our Services, comply with applicable law, enforce 
                   our terms and policies, and keep our Services safe.</p>

                <h4 className='pt-2 mx-9 text-sm font-medium underline underline-offset-1 text-white dark:text-black'>b. Restrictions</h4>

                <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>You may not create, share or display any Content for which you do not have all the rights necessary to grant us 
                  the license, and you represent and warrant that your Content, and our use of such Content as permitted by these 
                  Terms, will not violate any rights of any person or entity, including any third-party rights, or cause injury to 
                  any person or entity. You may not create, share or display any User Content that:</p>

                <div className='mx-24 pt-2 text-white/80 dark:text-black'>
                  <ul className='list-disc text-sm'>
                    <li className='pt-2'>Is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, or fraudulent;</li>
                    <li className='pt-2'>Would constitute, encourage, or provide instructions for a criminal offense, violate the rights of any party or otherwise create liability, or violate any applicable law;</li>
                    <li className='pt-2'>May infringe any patent, trademark, trade secret, copyright, or other intellectual or proprietary right of any party;</li>
                    <li className='pt-2'>Contains or depicts any statements, remarks, or claims that do not reflect your honest views and experiences;</li>
                    <li className='pt-2'>Impersonates, or misrepresents your affiliation with, any person or entity;</li>
                    <li className='pt-2'>Contains any unsolicited promotions, political campaigning, advertising, or solicitations;</li>
                    <li className='pt-2'>Contains any private or personal information of a third party without such third party's consent;</li>
                  </ul>
                </div>

              <h4 className='pt-2 mx-9 text-sm font-medium underline underline-offset-1 text-white dark:text-black'>c. Enforcement</h4>
              <p className='pt-2 text-sm mx-14 text-white/80 dark:text-black'>Enforcement of this Section 3 is solely at Deep AI's discretion, and failure to enforce this section in some 
                instances does not constitute a waiver of our right to enforce it in other instances. This section does not create 
                any private right of action on the part of any third party or any reasonable expectation that our Services will not 
                contain any content that is prohibited by these Terms or that objectionable material will be promptly removed after 
                it has been posted.</p>
          </div>
      </div>
    </motion.div>
  )
}

export default TermsOfServices