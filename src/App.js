import './App.css';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Home, NotFound, Dashboard, Submit, Login, Signup, Tokens, Watchlist} from './pages'
import PrivateRouter from './PrivateRouter';

function App() {
  return (
  <>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Tokens' element={<Tokens />} exact />
        <Route path='/signup' element={<Signup />} exact />
        <Route path='/login' element={<Login />} exact />
        <PrivateRouter path='/submit' element={<Submit />} exact />
        <PrivateRouter path='/profile'element={<Dashboard />} exact />
        <PrivateRouter path='/watchlist' element={<Watchlist />} exact />
        <Route path="*" element={NotFound} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
