import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/login.module.css';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const { setLoginState } = useContext(UserContext);
  const history = useHistory();
  const { login } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [Error, setError] = useState(false);
 // hämtar setLoginState ifrån userContext, för att kunna sätta den till true vid inloggning
 // use history används för att kunna göra history.push till home vid inloggning
 // loginmetoden hämtas ifrån userContext för att användas vid login
 // Error och settError används för att visa en alertruta vid fel inmatning i formulären

  const [userNameInput, setUserName] = useState('');
  const [passwordInput, setPassword] = useState('');

  const handleUsername = (e) => {
    setUserName(e.target.value);
    setError(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError(false);
  };
// handleUsername och handlePassword tar emot userinput och lägger de i usestate ovan

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await login(userNameInput, passwordInput);
    console.log('user', user);

    if (user.error) {
      setError(true)
    } else {
      setLoginState(true);
      history.push('/');
    }
  };

  return (
    <Container className='mx-auto py-5'>
      <h1 className='text-center login-info'>Login</h1>
      <Form onSubmit={handleLogin}>
        <Alert
          variant={'danger'}
          className={`${styles.Alert} ${
            error ? styles.Alert_active : styles.Alert_inactive
          }`}
        >
          You did not enter the correct credentials
        </Alert>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label className='login-info'>Email</Form.Label>
          <Form.Control
            onChange={handleUsername}
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='login-info'>Password</Form.Label>
          <Form.Control
            onChange={handlePassword}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <Container className='text-center'>
          <Button variant='primary' type='submit'>
            SIGN IN
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
