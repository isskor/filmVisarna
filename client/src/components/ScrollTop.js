import { useEffect } from 'react';
import { useHistory } from 'react-router';

import { withRouter } from 'react-router-dom';
const ScrollTop = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history.location]);
  return '';
};

export default withRouter(ScrollTop);
