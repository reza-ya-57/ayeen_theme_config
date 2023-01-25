import Caption from './components/Caption';
import MainWrapper from './components/MainWrapper';
import DropDown from "./components/DropDown/DropDown"


function App() {

  return (
    <div className="App">
      <MainWrapper>
        <Caption/>
        <DropDown/>
      </MainWrapper>
    </div>
  );
}

export default App;
