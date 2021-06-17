import { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
export default function RedirectPage() {
  const [timer, setTimer] = useState(5);
  const history = useHistory();
  useEffect(() => {
    const interval = setInterval(() => {
      /* do repeated stuff */
      if (timer === 0) {
        history.push('/');
      }
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className='container my-5'>
      <div className='row '>
        <h2 className='text-center'>
          You Must Be logged in to Proceed to this page
        </h2>
      </div>
      <div className='row'>
        <div className='col text-center my-5'>
          <Link to='/loginpage'>
            <button className='my-3'>Login</button>
          </Link>
          <Link to='/'>
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
      <h2 className='text-center'>redirecting to home in {timer}</h2>
    </div>
  );
}
