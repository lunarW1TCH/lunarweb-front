/** @jsxImportSource @emotion/react */

import ContactForm from '../components/contact/ContactForm';
import createStyles from '../styles/createStyles';

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
      <ContactForm />
    </div>
  );
};

export default ContactPage;
