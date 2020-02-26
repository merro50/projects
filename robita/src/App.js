import React ,{ Component } from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Plan from './components/planpage/plan';
import './lib/fontawesome.css';
import './lib/fontawesome';

//import Plan from './components/planpage/plan';
class App extends Component{
   render(){
      return (
              <BrowserRouter>
              
                 <div className='App'>
                    <Navbar />
                    <Switch>
                           <Route exact path='/' component={ Home }/>
                           <Route path='/plan' component={ Plan }/>
                    </Switch>
                 </div>

              </BrowserRouter>
      )
   }
}

export default App;


/*

<Header/>
 <Sections />
<Footer />

*/