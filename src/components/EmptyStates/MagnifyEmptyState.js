import React, { useContext } from 'react';
import MagnifyIcon from '../../assets/icons/magnify';
import { ThemeContext } from '../../context/ThemeContext';

const MagnifyEmptyState = ({ message }) => {
  const { theme } = useContext(ThemeContext);
  const fillColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="text-center">
      <div className="w-52 m-auto mt-8 mb-2 items-center">
        <MagnifyIcon fillColor={fillColor} />
      </div>
      <h3 className="text-gray-400">{message}</h3>
    </div>
  );
};

export default MagnifyEmptyState;
