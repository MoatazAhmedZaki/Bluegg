import React, { Component } from "react";
import "../pages/legalCss.css";

import { Link } from "react-router-dom";

export default class LegalStuff extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="legal-page my-5">
        <h1>Legal Stuff</h1>
        <p className="py-2">
          <strong>
            By reading and continuing to use the site you agree to the following
            conditions of use.
          </strong>
        </p>
        <p>
          This website is a service operated by Bluegg Creative Ltd (Bluegg),
          Portland House, 113-116 Bute Street, Cardiff CF10 5EQ
        </p>

        <h3 className="py-5">Disclaimer</h3>
        <p>
          Bluegg makes every effort to ensure that the information on this
          website is accurate and up-to-date. We cannot, however, accept
          responsibility for any loss or inconvenience caused by reliance on
          inaccurate material contained in this site.
        </p>
        <h3 className="py-5">Links to other sites</h3>
        <p>
          Certain links, including hypertext links, in our site will take you to
          external websites. These are provided for your convenience and
          inclusion of any link does not imply endorsement or approval by Bluegg
          of the linked site, its operator or its content. We are not
          responsible for the content of any website outside of our site.
        </p>
        <h3 className="py-5">Privacy policy</h3>
        <p>
          Bluegg may collect personal information from visitors to this site.
          This information is used only to respond to enquiries and to monitor
          site usage. E-mail addresses received as part of an enquiry are only
          retained as long as the enquiry remains open.
          <br />
          Where personal data is requested through forms (including registration
          forms), such data is only used for the purpose stated on the form and
          will not be given or sold to any third parties.
          <br />
          This privacy policy only covers this Bluegg website – websites linked
          to from this site are not covered by this policy.
          <br />
          Bluegg will at all times comply with the requirements of the Data
          Protection Act 1998.
        </p>
        <h3 className="py-5">Use of Cookies</h3>
        <p>
          Cookies are small text files that are placed on your computer by
          websites that you visit.
          <br />
          They are widely used in order to make websites work, or work more
          efficiently, as well as to provide information to the owners of the
          site.
          <br />
          We use Google Analytics to collect anonymised data on people who are
          visiting our website.
          <br />
          <Link to="">Click here for an overview of privacy at Google</Link>
          <br />
          By using our website, you agree that we can place these types of
          cookies on your device.
        </p>

        <h3 className="py-5">Accessibility</h3>
        <p>
          Bluegg endeavours at all times to make the site as accessible as
          reasonably possible to disabled users. In no way does Bluegg seek to
          deliberately discriminate against disabled users access to the website
          service in accordance with the Disability Discrimination Act 1995.
        </p>

        <h3 className="py-5">Processing of your information</h3>
        <p>
          Bluegg will use the information you provide on our mailing list signup
          form to be in touch with you and to provide updates and marketing.
          <br />
          You can change your mind at any time by clicking the unsubscribe link
          in any email you receive from us, or by contacting us at{" "}
          <Link to="">hello@bluegg.co.uk</Link> We will treat your information
          with respect.
          <br />
          We use MailChimp as our marketing automation platform. By consenting
          and submitting this form, you acknowledge that the information you
          provide will be transferred to MailChimp for processing in accordance
          with their <Link to="">Privacy Policy </Link> and{" "}
          <Link to="">Terms.</Link>
        </p>

        <h3 className="py-5">Client Data</h3>
        <p>
          When we work with clients we hold data relevant for fulfilling our
          contractual obligations in relation to projects, for example invoicing
          or contact details. We may also hold password and login information
          for certain accounts where we have been given access and permission to
          use them.
        </p>

        <h3 className="py-5">Where is the data & how is it used?</h3>
        <p>
          We store contact information in our in-house CRM system. This is
          hosted and controlled by us.
          <br />
          We store client billing information in our account system, Harvest.
          You can <Link to=""> view their privacy policy here.</Link>
          <br />
          We store passwords that are provided to us, or that we create for
          admin access to Content Management Systems etc, in our password
          management tool 1Password. You can{" "}
          <Link to="">view their privacy policy here.</Link>
        </p>

        <h3 className="py-5">Why do we hold this data?</h3>
        <p>
          <strong> Fulfilling A Contract</strong> – Without holding this
          information on our clients, we would be unable to fulfil our contract
          to carry out the work we do with you.
        </p>

        <h3 className="py-5">How long is the data held for?</h3>
        <p>
          We hold this data indefinitely or until we are asked to remove this
          from our systems. This helps us to maintain an ongoing relationship
          with our clients.
        </p>

        <h3 className="py-5">
          How can clients view this data, or ask for it to be removed
        </h3>
        <p>
          Contact us at <Link> hello@bluegg.co.uk </Link>and we will respond to
          your request within 7 working days.
        </p>
      </div>
    );
  }
}
