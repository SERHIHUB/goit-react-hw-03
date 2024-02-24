import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contactItem, onDelet }) {
  return (
    <div className={css.contactList}>
      <ul className={css.contactList}>
        {contactItem.map((item) => {
          return (
            <li key={item.id}>
              <Contact
                id={item.id}
                name={item.name}
                number={item.number}
                onDelet={onDelet}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
