import { useEffect } from 'react';

const Toast = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('toastContainer').style.display = 'none';
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="toastContainer">
      <div className="tost">{message}</div>
    </div>
  );
};

export default Toast;