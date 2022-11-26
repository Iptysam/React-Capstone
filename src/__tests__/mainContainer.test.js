import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/home/home';
import CountriesContainer from '../components/mainContainer';

describe('Jest Snapshot testing suite', () => {
  it('The main countries container snapshot', () => {
    const value = renderer.create(
      <Provider store={store}>
        <Router>
          <CountriesContainer />
        </Router>
      </Provider>,
    ).toJSON();
    expect(value).toMatchSnapshot();
  });
});
