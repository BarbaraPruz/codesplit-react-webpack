import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// import Loadable from 'react-loadable';

import './App.css';

import Charts1 from './components/Charts1';
import Charts2 from './components/Charts2';
import SubChild1 from './components/SubChild1';
// const Loader = (props) => {
// 	if (props.error) {
// 		return <div>Oh no, something went wrong!</div>;
// 	} else if (props.delay) {
// 		return <h2>Loading...</h2>
// 	} else {
// 		return null;
// 	}
// }

// const Charts1 = Loadable({
//   loader: () => import('./components/Charts1'),
// 	loading: Loader,
// 	delay: 300  
// })
// const Charts2 = Loadable({
// 	loader: () => import('./components/Charts2'),
// 	loading: Loader,
// 	delay: 300  
// })
// const SubChild1 = Loadable({
// 	loader: () => import('./components/SubChild1'),
// 	loading: Loader,
// 	delay: 300  
// })

function App() {
  return (
    <div className="App">
      <Router>   
        <header className="App-header">
          <h1>Code Splitting on Routes Sample</h1>
          <div className="App-nav">
            <Link to='/charts1' className="App-link">Charts 1</Link>
            <Link to='/charts2' className="App-link">Charts 2</Link>
          </div>
          <hr />        
        </header>
        <section>
            <Route path='/charts1' component={Charts1} />
            <Route path='/charts1/subchild1' component={SubChild1} />           
            <Route path='/charts2' component={Charts2} />                   
        </section>
      </Router>
    </div>
  );
}

export default App;
