

import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Features from './components/Features';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        
        <Landing />
        <Features id="features" />
      </>,
    },
    {
      path: '/features',
      element: <Features id="features" />,
    }
  ]);


  return (
    <div className="App lg:px-28">
      <Header />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;

