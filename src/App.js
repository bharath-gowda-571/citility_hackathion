import logo from './logo.svg';
import './App.css';
import MainArea from './components/MainArea';
import SideNav from './components/SideNav';
function App() {
  const something=<div>somehthing</div>
  console.log(something)
  return (
    <div className="main-container">
      <SideNav/>
      <MainArea x="10"/>
    </div>
  );
}

export default App;
