import { useState } from 'react';

const useToggle = (el) => {
  const [open, setOpen] = useState(el);
  // toggles between el(string or true value) or false, used to toggle classnames
  const toggle = () => {
    if (open === el) {
      setOpen(false);
    } else {
      setOpen(el);
    }
  };
  return [open, toggle];
};

export default useToggle;
