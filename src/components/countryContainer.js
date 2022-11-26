import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Country from './country';

const CountriesContainer = () => {
  const tari = useSelector((state) => state.countries);
  const optionArr = ['Africa', 'Europe', 'Asia', 'Antarctica', 'North America', 'South America'];
  const [continent, setContinent] = useState('Africa');
  const workingArr = tari.filter((item) => item.continents[0] === continent);
  return (
    <div className="countriesContainer">
      <select className="continent-change" onChange={(e) => setContinent(e.target.value)}>
        {optionArr.map((item) => <option key={item}>{item}</option>)}
      </select>
      <section className="flex">
        {workingArr.map((item) => (
          <Link className="card" key={item.name.common} data-testid="country" to={`c/${item.name.common}`}>
            <Country name={item.name.common} flags={item.flags.png} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CountriesContainer;
