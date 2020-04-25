import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HomePage from "./home/HomePage"
import AboutPage from "./about/AboutPage"
import Header from './common/Header';
import PageNotFound from './PageNotFound'
import CoursePage from './courses/CoursesPage';

function App (){
  return(
    <div>
      <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/courses" component={CoursePage} />
          <Route component={PageNotFound}/>
        </Switch>
    </div>
  )
}


export default App;
