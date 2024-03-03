
import {createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Sidebar from '../../components/sidebar';
import Board from '../../components/board';
import HomePage from '../../components/homePage';


  const router = createBrowserRouter([
    {
      element: <Sidebar />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/board/:boardId",
          element: <Board />
        },
        {
          path: "/board/:boardId/postit/:postitId",
          element: <Board />
        }
      ]
    }
  ]);
 
export default router;