interface Props {
  todoTitle: string;
}

const Todo: React.FunctionComponent<Props> = props => {
  return (
    <div className='card'>
      <div>
        <h2>{props.todoTitle}</h2>
        <div className='actions'>
          <button className='btn'>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;