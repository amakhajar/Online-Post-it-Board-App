import * as React from "react";
import { createRoot } from 'react-dom/client';
import {Header} from './components/Header/index';
import {Content} from './components/Content/index';
const Index = () => {
  return (
    <div>
  <Header>
  </Header>

  <Content/>
  </div>
  );
};
const root=createRoot(document.getElementById("root"));
root.render(<Index />);
