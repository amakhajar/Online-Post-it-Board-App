import * as React from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './state/store';
export function Index () {

  
  return (
    <div>
      <Provider store={store}>
     <App/>
   </Provider>
  </div>
  
  );
};
const root=createRoot(document.getElementById("root"));
root.render(<Index />);
