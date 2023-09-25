import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Login } from './components/Pages/Login';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Login />
        </LocalizationProvider>
      </Provider>
    </div>
  );
};

export default App;
