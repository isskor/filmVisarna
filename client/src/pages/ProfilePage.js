import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';

export default function ProfilePage() {
  const { loggedInUser } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [inputValidation, setInputValidation] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const { editUser, getUserBookings } = useContext(UserContext);
  const [editSuccess, setEditSuccess] = useState(0);

  useEffect(() => {
    getUserBookings();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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


  // Set the default input fields to the information of the logged in user
  useEffect(() => {
    if (loggedInUser) {
      setFirstName(loggedInUser.firstName);
      setLastName(loggedInUser.lastName);
    }
  }, [loggedInUser]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    editUser(user);
    setPassword('');
    toggleEditText();
  };

  // Make text appear after editing information which shows for 10s then dissapears
  const toggleEditText = () => {
    setEditSuccess(true);
    setTimeout(() => {
      setEditSuccess(false);
    }, 10000);
  };

  return (
    <div className='profileContainer'>
      <div className='profileSideBar'>
        <Link to='/upcoming-bookings'>Upcoming Bookings</Link>
        <Link to='/previous-bookings'>Previous Bookings</Link>
      </div>
      <div className='profileMain'>
        <h2> Hello {loggedInUser?.firstName} </h2>{' '}
        <h4> Here you can view your bookings and account settings</h4>
        <hr />
        <div className='profileAccount'>
          <h3> My Details</h3>

          <Form onSubmit={handleSubmit}>
            <div className='profileAccountBox'>
              <div className='profileIcon' />
              <div className='profileAccountContent'>
                <div className='formController'>
                  <Form.Group controlId='formBasicName'>
                    <Form.Label className='login-info'>First name</Form.Label>
                    <Form.Control
                      onChange={firstNameInput}
                      type='text'
                      value={firstName}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <div className='formController'>
                <Form.Group controlId='formBasicLastName'>
                  <Form.Label className='login-info'>Last Name</Form.Label>
                  <Form.Control
                    onChange={lastNameInput}
                    type='text'
                    value={lastName}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className='profileAccountBox'>
              <div className='lockIcon' />
              <div className='profileAccountContent'>
                <div className='formController'>
                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label className='login-info'>Password</Form.Label>
                    <Form.Control
                      onChange={passwordInput}
                      type='password'
                      placeholder='**********'
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <div className='formController'>
                <Form.Group controlId='formConfirmPassword'>
                  <Form.Label>Confirm the password</Form.Label>
                  <Form.Control
                    className={
                      inputValidation ? '' : isValid ? 'is-valid' : 'is-invalid'
                    }
                    onChange={checkPassword}
                    type='password'
                    name='confirm'
                    placeholder='**********'
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Container className='text-center'>
              <Button variant='primary' type='submit'>
                UPDATE INFO
              </Button>
              {editSuccess ? (
                <p className='resultText'> User has been edited! </p>
              ) : (
                ''
              )}
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
}
