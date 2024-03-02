
import {createBrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Sidebar from '../components/sidebar';
import Board from '../components/board';
import HomePage from '../components/homePage';


//  const  router=(
   
//         <BrowserRouter>

//       <Routes>
//         <Route path='/' element={<Sidebar children={<HomePage />} />} />
//         <Route path='/board/:boardId' element={<Sidebar children={<Board />} />} />
//           <Route path='/board/:boardId/postit/:postitId' element={<Sidebar children={<Board/>} />} />      
//       </Routes>
//     </BrowserRouter>
    
// )
// <BrowserRouter>

    //   <Routes>
    //     <Route path='/' element={<Sidebar boards={board} children={<HomePage />} />} />
    //     <Route path='/board/:boardId' element={<Sidebar boards={board} children={<Board boards={board} />} />} />
    //       <Route path='/board/:boardId/postit/:postitId' element={<Sidebar boards={board} children={<Board boards={board} />} />} />      
    //   </Routes>
    // </BrowserRouter>


// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Sidebar children={<HomePage />}/>

     
//     },
//     {
//         path:"/board/:boardId",
//         element:<Sidebar children={<Board />}/>,
//     },{
//         path: "/board/:boardId/postit/:postitId",
//         element:<Sidebar children={<Board />}/>,
//     }
//   ]);
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