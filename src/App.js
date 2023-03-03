

import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        
        <Landing className="lg:px-28" />
        <Features className="lg:px-28" />
        <Benefits />
        <Footer />
        
      </>,
    },
    {
      path: '/features',
      element: <Features className="lg:px-28" />,
    },
    {
      path: '/benefits',
      element: <Benefits />,
    },
    {
      path: '/contacts',
      element: <Footer />,
    }
  ]);


  return (
    <div className="App ">
      < >
      <Header className="px-28"/>
      <RouterProvider router={router} />
      </>

    </div>
  );
}

export default App;

