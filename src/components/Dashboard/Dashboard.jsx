import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';


import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export const Dashboard = () => {
  const [query, setQuery] = useState('');

  const hadleFormSubmit = query => {
    setQuery(query);
  };
  

  return (
    <div className="Dashboard">
      <Searchbar onSubmit={hadleFormSubmit} />
      <ImageGallery  query={query} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
