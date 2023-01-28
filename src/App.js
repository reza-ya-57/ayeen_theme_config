import Caption from './components/Caption';
import MainWrapper from './components/MainWrapper';
import DropDown from "./components/DropDown/DropDown";
import { TextField } from '@mui/material';
import './App.css';

function App() {

  return (
    <div className="App">
        سلام چطوری
      <MainWrapper>
        <TextField 
            label='نام کاربری'
        />
        <Caption/>
        <DropDown/>
      </MainWrapper>
    </div>
  );
}

export default App;
