
import './App.css';
import {useEffect} from "react";
import {useT} from "./hooks/useT";
import Header from "./component/header/header";
import {Route, Routes} from "react-router-dom";
import MeningocalInfection from "./component/meningocalInfection/meningocalInfection";
import TestList from "./component/testList/testList";
import Form from "./component/form/form";
import Page1 from "./component/meningocalInfection/page1";
import Page2 from "./component/meningocalInfection/page2";
import Page3 from "./component/meningocalInfection/page3";
import Page4 from "./component/meningocalInfection/page4";
import Page5 from "./component/meningocalInfection/page5";
import Page6 from "./component/meningocalInfection/page6";
import Page7 from "./component/meningocalInfection/page7";
import Result from "./component/meningocalInfection/result";


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
              <Route path={'test3'} element = {<Page2 />}/>
              <Route path={'test4'} element = {<Page3 />}/>
              <Route path={'test5'} element = {<Page4 />}/>
              <Route path={'test6'} element = {<Page5 />}/>
              <Route path={'test7'} element = {<Page6 />}/>
              <Route path={'test8'} element = {<Page7 />}/>
              <Route path={'test9'} element = {<Result />}/>
              <Route path ={"testList"}element = {<TestList />}/>

          </Routes>
      </div>
  );
}

export default App;
