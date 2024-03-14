import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  if (isLoading) {
    return <Landing />;
  }
  return (
    <main className='app-main-container'>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App