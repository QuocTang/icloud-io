import "./footer.scss";

const Footer = () => {
  return (
    <section className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_content">
          <a href="/">Create Apple ID</a> |{" "}
          <a href="https://www.apple.com/support/systemstatus/">
            System Status
          </a>{" "}
          |<a href="https://www.apple.com/privacy/"> Privacy Policy </a>|
          <a href="https://www.apple.com/legal/internet-services/icloud/">
            {" "}
            Terms & Conditions{" "}
          </a>
          |<span> Copyright © 2022 Apple Inc. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
