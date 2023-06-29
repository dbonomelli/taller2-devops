import logo from './logo.svg';
import './App.scss';
import { HomeContainer } from './containers/HomeContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BaseRouter } from './routes/BaseRouter';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Provider store={store} >

      <BaseRouter></BaseRouter>
    </Provider>
  );
}

export default App;
