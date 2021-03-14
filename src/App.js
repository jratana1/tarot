import './App.css';
import DraggableList from './DragList';
import ExampleComponent from './Example'

function App() {
  return (
    <div className="App">
      <DraggableList items={'Lorem ipsum say i to your'.split(' ')} />
      <DraggableList items={'Lorem ipsum say i to your day i think so'.split(' ')} />


    </div>
  );
}

export default App;
