import * as React from 'react';


import { Provider } from 'react-redux';
import {  store } from './state/store';

import router from './state/routes/router';
import { RouterProvider } from 'react-router-dom';

export function App() {


 

  return (

   
    <>
    <React.StrictMode>
    <Provider store={store}>
            
                <RouterProvider router={router} />
            </Provider>
        
    </React.StrictMode>
  </>



  );
}