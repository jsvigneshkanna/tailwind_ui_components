/* eslint-disable @next/next/no-img-element */

const PrivacyPolicyComp = () => {
  return (
    <div className="privacy_page">
      <div className="w-full flex flex-col md:flex-row px-4 md:px-40 py-36 pb-8  md:py-20 md:pt-44 gap-8 justify-center md:justify-between items-center bg-gradient-to-bl md:bg-gradient-to-l from-[#520044] to-[#000046] text-white">
        <div className=" w-full">
          <div className="text-base">
            <div className="flex flex-col md:flex-row md:justify-between">
              <p className="text-2xl underline underline-offset-8">
                Privace Policy
              </p>
              <p className="text-lg mt-4 md:mt-0 text-blue-400">
                Last Updated: 24th October, 2022
              </p>
            </div>

            <p className=" md:pt-8 pt-4">
              <li className="my-4">
                <p className="inline text-lg md:pt-8 pt-4 text-orange-500">
                  Collection of non-personal information
                </p>
                <p className="pl-6 pt-3">
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
              <li className="my-4">
                <p className="inline text-lg md:pt-8 pt-4 text-orange-500">
                  Use and processing of collected information
                </p>
                <p className="pl-6 pt-3">
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

            <li className="my-4">
              <p className="inline text-lg md:pt-8 pt-4 text-orange-500">
                Privacy of children
              </p>
              <p className="pl-6 pt-3">
                We do not knowingly collect any Personal Information from
                children under the age of 13. If you are under the age of 13,
                please do not submit any Personal Information through our
                Website. We encourage parents and legal guardians to monitor
                their children&apos;s Internet usage and to help enforce this
                Policy by instructing their children never to provide Personal
                Information through our Website without their permission. If you
                have reason to believe that a child under the age of 13 has
                provided Personal Information to us through our Website, please
                contact us.
              </p>
            </li>
            <li className="my-4">
              <p className="inline text-lg md:pt-8 pt-4 text-orange-500">
                Newsletters
              </p>
              <p className="pl-6 pt-3">
                We offer electronic newsletters which you may voluntarily
                subscribe to. You may choose to stop receiving our newsletter or
                marketing emails by following the unsubscribe instructions
                included in these emails or by contacting us. However, you will
                continue to receive essential transactional emails
              </p>
            </li>
            <li className="my-4">
              <p className="inline text-lg md:pt-8 pt-4 text-orange-500">
                Links to other websites
              </p>
              <p className="pl-6 pt-3">
                Our Website contains links to other websites that are not owned
                or controlled by us. Please be aware that we are not responsible
                for the privacy practices of such other websites or third
                parties. We encourage you to be aware when you leave our Website
                and to read the privacy statements of each and every website
                that may collect Personal Information.
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyComp;
