import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/home/home';
import EachCountry from '../components/Eachcountry';

describe('Jest Snapshot testing suite', () => {
  it('snapshot of each country', () => {
    const value = renderer.create(
      <Provider store={store}>
        <Router>
          <EachCountry />
        </Router>
      </Provider>,
    ).toJSON();
    expect(value).toMatchSnapshot();
  });
});
