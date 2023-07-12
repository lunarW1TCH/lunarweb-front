/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import validator from 'validator';
import axios from 'axios';

import createStyles from '../../styles/createStyles';
import { ITheme } from '../../styles/globalStyles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: '',
  });
  const [hasError, setHasError] = useState({
    email: false,
    title: false,
    message: false,
  });
  const [sent, setSent] = useState(false);
  const [sendingError, setSendingError] = useState(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingError(false);
    console.log(e.currentTarget);

    if (hasError.email || hasError.title || hasError.message) {
      setSendingError(true);
      return;
    }

    try {
      const response = await axios.post(
        'https://lunarweb-node.vercel.app/mail',
        {
          ...formData,
        }
      );
      setSent(true);
    } catch (error) {
      setSendingError(true);
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    setSendingError(false);
    setHasError(prevState => ({ ...prevState, [id]: false }));
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const onBlurHandler = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.currentTarget;

    let isInvalid = false;

    switch (id) {
      case 'email':
        if (!validator.isEmail(value)) {
          isInvalid = true;
        }
        break;
      case 'title':
        if (validator.isEmpty(value.trim())) {
          isInvalid = true;
        }
        break;
      case 'message':
        if (validator.isEmpty(value.trim())) {
          isInvalid = true;
        }
        break;
    }
    setHasError(prevState => ({ ...prevState, [id]: isInvalid }));
  };

  const theme = useTheme() as ITheme;

  const styles = createStyles({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '50%',
      padding: 40,
      borderRadius: 8,
      backgroundColor: 'white',
      color: theme.primary900,
    },
    formInput: {
      marginBottom: 8,
      padding: 4,
    },
    hasError: {
      borderColor: 'red',
      backgroundColor: '#F8C8DC',
    },
    submitButton: {
      width: 100,
      margin: 'auto',
      marginTop: 8,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 24,
      color: theme.primary700,
      '&:hover': {
        color: theme.primary900,
      },
    },
    errorText: {
      marginTop: 10,
      color: 'red',
      textAlign: 'center',
    },
  });

  return (
    <>
      {!sent && (
        <form onSubmit={onSubmitHandler} css={styles.formContainer}>
          <label htmlFor='email'>E-mail</label>
          <input
            css={[styles.formInput, hasError.email && styles.hasError]}
            type='email'
            id='email'
            name='email'
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.email}
            required
          />
          <label htmlFor='title'>Title</label>
          <input
            css={[styles.formInput, hasError.title && styles.hasError]}
            type='title'
            id='title'
            name='title'
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.title}
            required
          />
          <label htmlFor='message'>Your message</label>
          <textarea
            css={[styles.formInput, hasError.message && styles.hasError]}
            id='message'
            name='message'
            rows={10}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={formData.message}
            required
          />
          <button css={styles.submitButton} type='submit'>
            Submit!
          </button>
          {sendingError && (
            <span css={styles.errorText}>
              Something went wrong, please try again later!
            </span>
          )}
        </form>
      )}
      {sent && <h1>Thank you! I&apos;ll get in touch with you shortly.</h1>}
    </>
  );
};

export default ContactForm;
