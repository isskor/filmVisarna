import { useState } from 'react';

const useToggle = (el) => {
  const [open, setOpen] = useState(el);

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
