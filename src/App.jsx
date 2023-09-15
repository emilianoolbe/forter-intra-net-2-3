import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Enrutador } from './routes/Enrutador';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
function App() {

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Enrutador />
      </LocalizationProvider>
    </div>
  );
};

export default App;
