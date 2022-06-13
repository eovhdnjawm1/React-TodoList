import { useRecoilState, useRecoilValue } from 'recoil';
import { toDostate } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo'

function ToDoListAfter() {
	// const value = useRecoilValue(toDostate);
	// const modFn = useSetRecoilState(toDostate);
	// 위에 2개가 아래 2개랑 같음
	// const [toDos, setToDos] = useRecoilState(toDostate);

	const toDos = useRecoilValue(toDostate)



	console.log(toDos);



	return (

		<>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<ul>
				{toDos.map((toDo) => (
					// <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
					// 같은것
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</>
	)
}

export default ToDoListAfter;