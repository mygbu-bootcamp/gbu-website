 import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Admission from '../pages/Admission';
import Placements from '../pages/Placements';
import Landing from '../components/Landing';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/admission", element: <Admission /> },
      { path: "/placements", element: <Placements /> },
     
    ],
  },
]);

export default router;
