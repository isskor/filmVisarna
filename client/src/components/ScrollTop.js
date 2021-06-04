import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { withRouter } from 'react-router-dom';
const ScrollTop = () => {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(history);
  }, [history.location]);
  return '';
};

export default withRouter(ScrollTop);
