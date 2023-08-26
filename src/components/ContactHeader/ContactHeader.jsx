import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  console.log(styles);
  return (
    <div className="styles.contact">
      <div className="contact-section">
      <h1>contact us</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
      </div>
    </div>
  );
};

export default ContactHeader;
