
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";
import Header from "./component/header/header";
import {Route, Routes} from "react-router-dom";
import MeningocalInfection from "./component/meningocalInfection/meningocalInfection";
import TestList from "./component/testList/testList";
import Form from "./component/form/form";
import Page1 from "./component/meningocalInfection/page1";


function App() {
  const {tg} = useT();

 useEffect( () => {
    tg.ready();
  },  [])

  return (
      <div className="App">
          <Header />
          <Routes>
              <Route index element = {<TestList />}/>
              <Route path={'forma'} element = {<Form />}/>
              <Route path={'test1'} element = {<MeningocalInfection />}/>
              <Route path={'test2'} element = {<Page1 />}/>

          </Routes>
      </div>
  );
}

export default App;
