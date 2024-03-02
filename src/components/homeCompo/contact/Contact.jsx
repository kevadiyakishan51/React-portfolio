import React from "react";
import PageInfo from "../../commonComp/PageInfo";
import styles from "../../../styles/home/contact/Contact.module.css";

function Contact() {
  return (
    <>
      <PageInfo bgTitle="CONTACT" mainTitle="CONTACT ME" />

      <div className={`${styles.contact}`}>
        <form action="#">
          <div className={`${styles.nameInput}`}>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className={`${styles.nameInput}`}>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className={`${styles.seinput}`}>
            <input type="text" placeholder="Subject" />
          </div>
          <div className={`${styles.seinput}`}>
            <textarea type="text" placeholder="Message" rows="5" class="co12"></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
