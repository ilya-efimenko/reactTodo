import './App.css';
import Todo from './components/Todo';

const App:  React.FunctionComponent = () => {

  return (
    <div>
      <h1>My Todos</h1>
      <Todo todoTitle='Learn React' />
      <Todo todoTitle='Fuck React' />
      <Todo todoTitle='Stop React' />
    </div>
  );
};

export default App;
