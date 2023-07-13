/** @jsxImportSource @emotion/react */

import createStyles from '../styles/createStyles';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage = () => {
  const styles = createStyles({
    contactContainer: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: '90%',
      height: '80%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <div css={styles.contactContainer}>
      {/* <h1>Contact me by E-mail, LinkedIn DM or fill out the form below</h1> */}
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
