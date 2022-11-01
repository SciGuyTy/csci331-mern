import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Hello React!</h1>
        <h2>Tyler Koon - q71j523</h2>
        <hr />
      </div>
      <div className="buttons">
        <Counter/>
        <Counter incrementAmount={2} />
      </div>
      
      <div className="footer">
        <hr />
        <p>Repository link: <a href='https://github.com/SciGuyTy/csci331-mern'>https://github.com/SciGuyTy/csci331-mern</a></p>
        <hr />
      </div>
    </div>
  );
}

export default App;
