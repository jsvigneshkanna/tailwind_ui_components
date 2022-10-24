/* eslint-disable @next/next/no-img-element */

const PrivacyPolicyComp = () => {
  return (
    <div>
      <div className="w-full flex flex-col md:flex-row px-4 md:px-40 py-36 pb-8  md:py-44 gap-8 justify-center md:justify-between items-center bg-gradient-to-bl md:bg-gradient-to-l from-[#520044] to-[#000046] text-white">
        <div className=" w-full md:w-3/4">
          <div className="text-base">
            <div className="flex justify-between">
              <p className="text-2xl underline underline-offset-4">
                Privace Policy
              </p>
              <p className="text-lg">Last Updated: 24th October, 2022</p>
            </div>

            <p className=" md:pt-8 pt-4">
              <li className="my-2">
                <p className="inline text-lg md:pt-8 pt-4">
                  Collection of non-personal information
                </p>
                <p>
                  When you visit the Website our servers automatically record
                  information that your browser sends. This data may include
                  information such as your device&apos;s IP address, browser
                  type and version, operating system type and version, language
                  preferences or the webpage you were visiting before you came
                  to our Website, pages of our Website that you visit, the time
                  spent on those pages, information you search for on our
                  Website, access times and dates, and other statistics.
                </p>
              </li>
              <li className="my-2">
                <p className="inline text-lg md:pt-8 pt-4">
                  Use and processing of collected information
                </p>
                <p>
                  Any of the information we collect from you may be used to
                  personalize your experience; improve our Website; improve
                  customer service; process transactions; send notification
                  emails such as password reminders, updates, etc; and operate
                  our Website. Non-Personal Information collected is used only
                  to identify potential cases of abuse and establish statistical
                  information regarding Website usage. This statistical
                  information is not otherwise aggregated in such a way that
                  would identify any particular user of the system.
                </p>
              </li>
            </p>

            <p className=" md:pt-8 pt-4">
              We may process Personal Information related to you if one of the
              following applies: <br />
              (i) You have given their consent for one or more specific
              purposes. Note that under some legislations we may be allowed to
              process information until you object to such processing (by opting
              out), without having to rely on consent or any other of the
              following legal bases below. This, however, does not apply,
              whenever the processing of Personal Information is subject to
              European data protection law; <br />
              (ii) Provision of information is necessary for the performance of
              an agreement with you and/or for any pre-contractual obligations
              thereof;
              <br />
              (iii) Processing is necessary for compliance with a legal
              obligation to which you are subject; <br />
              (iv) Processing is related to a task that is carried out in the
              public interest or in the exercise of official authority vested in
              us; <br />
              (v) Processing is necessary for the purposes of the legitimate
              interests pursued by us or by a third party. In any case, we will
              be happy to clarify the specific legal basis that applies to the
              processing, and in particular whether the provision of Personal
              Data is a statutory or contractual requirement, or a requirement
              necessary to enter into a contract.
            </p>

            <p className=" md:pt-8 pt-4">
              <li className="my-2">
                <p className="inline text-lg md:pt-8 pt-4">
                  Privacy of children
                </p>
                <p>
                  We do not knowingly collect any Personal Information from
                  children under the age of 13. If you are under the age of 13,
                  please do not submit any Personal Information through our
                  Website. We encourage parents and legal guardians to monitor
                  their children&apos;s Internet usage and to help enforce this
                  Policy by instructing their children never to provide Personal
                  Information through our Website without their permission. If
                  you have reason to believe that a child under the age of 13
                  has provided Personal Information to us through our Website,
                  please contact us.
                </p>
              </li>
              <li className="my-2">
                <p className="inline text-lg md:pt-8 pt-4">Newsletters</p>
                <p>
                  We offer electronic newsletters which you may voluntarily
                  subscribe to. You may choose to stop receiving our newsletter
                  or marketing emails by following the unsubscribe instructions
                  included in these emails or by contacting us. However, you
                  will continue to receive essential transactional emails
                </p>
              </li>
              <li className="my-2">
                <p className="inline text-lg md:pt-8 pt-4">
                  Links to other websites
                </p>
                <p>
                  Our Website contains links to other websites that are not
                  owned or controlled by us. Please be aware that we are not
                  responsible for the privacy practices of such other websites
                  or third parties. We encourage you to be aware when you leave
                  our Website and to read the privacy statements of each and
                  every website that may collect Personal Information.
                </p>
              </li>
            </p>

            <p className=" md:pt-8 pt-4 text-center uppercase">
              Privacy policy will ensure use, by adhering to standard rules
            </p>
          </div>
        </div>
        <div>
          <img
            src="/MIT_license.png"
            alt="license"
            className=" object-contain w-96 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
