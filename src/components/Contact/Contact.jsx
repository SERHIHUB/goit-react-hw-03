import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

function Contact({ id, name, number, onDelet }) {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>
          <FaUserLarge className={css.icon} />
          {name}
        </p>
        <FaPhone className={css.icon} />
        <a href="">{number}</a>
      </div>
      <button className={css.button} onClick={() => onDelet(id)} type="button">
        Delete
      </button>
    </div>
  );
}

export default Contact;