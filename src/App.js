import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import { fetchData } from './redux/home/home';
import CountriesContainer from './components/mainContainer';
import EachCountry from './components/Eachcountry';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CountriesContainer />} />
        <Route path="/c/:countryName" element={<EachCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
