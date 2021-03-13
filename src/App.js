import logo from './logo.svg';
import './App.css';
import DraggableList from './DragList';

function App() {
  return (
    <div className="App">
      <DraggableList items={'Lorem ipsum dolor sit'.split(' ')} />
    </div>
  );
}

export default App;
