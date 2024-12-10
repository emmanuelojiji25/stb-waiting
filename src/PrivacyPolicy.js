import "./PrivacyPolicy.css";
import logo from "./logo.gif";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <Link to="/">
        {" "}
        <img src={logo} className="logo" />
      </Link>
      <h1>Privacy Policy</h1>

      <div className="text-block">
        <h2>Who We Are</h2>
        <p>
          This page is operated by Self Tape Battle, and we are committed to
          protecting your privacy. This policy explains how we collect, use, and
          store your information when you sign up for our mailing list.
        </p>
      </div>

      <div className="text-block">
        <h2>What Information We Collect</h2>
        <p>
          We collect your email address when you voluntarily provide it by
          entering it into our subscription form.
        </p>
      </div>

      <div className="text-block">
        <h2>How We Use Your Information</h2>
        <p>We use your email address to:</p>
        <ul>
          <li>Send you updates about Self Tape Battle.</li>
          <li>Inform you about the launch and any related news or offers.</li>
        </ul>
        <p>
          We will only use your information for the purposes outlined above.
        </p>
      </div>

      <div className="text-block">
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, rent, or share your email address with third parties.
          However, we may disclose your information if required by law or in
          connection with legal proceedings.
        </p>
      </div>

      <div className="text-block">
        <h2>How We Store Your Data</h2>
        <p>
          Your email address is securely stored in our database, which is
          managed with industry-standard security measures to protect your data
          from unauthorized access or misuse.
        </p>
      </div>
      <div className="text-block">
        <p>We retain your email address until:</p>
        <ul>
          <li>You unsubscribe from our mailing list, or</li>
          <li>
            The information is no longer necessary for the purposes it was
            collected.
          </li>
        </ul>
      </div>

      <div className="text-block">
        <h2>Your Rights</h2>
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the information we hold about you.</li>
          <li>Request that we delete your information.</li>
          <li>Withdraw your consent at any time by unsubscribing.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at
          info@selftapebattle.com.
        </p>
      </div>

      <div className="text-block">
        <h2>Opting Out</h2>
        <p>
          You can unsubscribe from our mailing list at any time by clicking the
          "Unsubscribe" link in our emails or by contacting us directly at
          info@selftapebattle.com. Once unsubscribed, your data will be promptly
          deleted.
        </p>
      </div>

      <div className="text-block">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
        </p>
        <p>Email: info@selftapebattle.com</p>
      </div>

      <div className="text-block">
        <h2>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and we encourage you to review it
          periodically.
        </p>
      </div>
      <p>Last Updated: 10/12/24</p>
    </div>
  );
};

export default PrivacyPolicy;
