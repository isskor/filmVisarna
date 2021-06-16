import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { UserContext } from '../contexts/UserContext';

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputValidation, setInputValidation] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const { createUser } = useContext(UserContext);
  const [error, setError] = useState(false);

  // useState variabler för varje input som görs i formuläret, email, password, firstName, lastName
  //confirmpassword som används för att jämföra om det är samma lösenord i båda lösenordsformulären
  // useEffecten nedan sätter condition för att lösenordet stämmer överens och om det är längre än 4 karaktärer
  // isValid är variablen som är true eller false, och därmed ser till om röda utropstecknet syns på frontend eller inte
  // createuser hämtas ifrån usercontext för att användas här

  useEffect(() => {
    if (confirmPassword === '') {
      setInputValidation(true);
    } else {
      setInputValidation(false);
      if (confirmPassword.length >= 4 && password === confirmPassword) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
  }, [password, confirmPassword]);

  const emailInput = (e) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value
      )
    ) {
      setError(false);
      setEmail(e.target.value);
    } else setError('You did not enter the correct credentials');
  };

  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const firstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const checkPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setError(true);
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    let newUser = await createUser(user);
    console.log(newUser);
    if (newUser.error) {
      setError(newUser.error);
      return;
    } else {
      history.push('/thank-you-for-registering');
    }
  };

  return (
    <Container>
      <h1 className='text-center login-info'>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Alert
          variant={'danger'}
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
          {error}
        </Alert>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label className='login-info'>Email</Form.Label>
          <Form.Control
            onChange={emailInput}
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        <small
          id='emailHelp'
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
          Please enter an email adress
        </small>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='login-info'>Password</Form.Label>
          <Form.Control
            onChange={passwordInput}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>

        <Form.Group controlId='formConfirmPassword'>
          <Form.Label>Confirm the password</Form.Label>
          <Form.Control
            className={
              inputValidation ? '' : isValid ? 'is-valid' : 'is-invalid'
            }
            onChange={checkPassword}
            type='password'
            name='confirm'
            placeholder='Confirm Password'
            required
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='login-info'>First name</Form.Label>
          <Form.Control
            onChange={firstNameInput}
            type='text'
            placeholder='First Name'
            required
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='login-info'>Last Name</Form.Label>
          <Form.Control
            onChange={lastNameInput}
            type='text'
            placeholder='Last Name'
            required
          />
        </Form.Group>

        <Container className='text-center'>
          <Button variant='primary' type='submit'>
            REGISTER
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
