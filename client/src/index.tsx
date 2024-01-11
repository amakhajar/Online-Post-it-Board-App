import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {Header} from './components/Header/index';
import {Content} from './components/Content/index';
import "./style.css";
export function Index () {
  return (
    <div>
  <Header />
  <Content/>
  </div>
  );
};
const root=createRoot(document.getElementById("root"));
root.render(<Index />);
