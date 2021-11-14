import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// /react/
// /react/about
function App() {
  return (
    <BrowserRouter basename="/react">
      <Link to="/">首页</Link> |
      <Link to="/about">关于页面</Link>
      
      <Route path="/" exact render={() => <h1>React子应用首页</h1>}></Route>
      <Route path="/about" exact render={() => <h1>React子应用关于页面</h1>}></Route>
     
    </BrowserRouter>
  );
}

export default App;
