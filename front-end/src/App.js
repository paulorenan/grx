import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Total from './Pages/Total';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/total" element={<Total />} />
    </Routes>
  );
}

export default App;
