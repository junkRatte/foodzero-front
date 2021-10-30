import './App.scss';
import Navbar from './js/components/Navbar';

/* http://127.0.0.1:8000/api/blogs */

function App() {
  return (
    <div className="App">
      <div className="layout-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
