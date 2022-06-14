import { useRecoilState, useRecoilValue } from 'recoil';
import { toDostate } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo'
import { toDoSelector } from './../atoms';

function ToDoListAfter() {
	// const value = useRecoilValue(toDostate);
	// const modFn = useSetRecoilState(toDostate);
	// 위에 2개가 아래 2개랑 같음
	// const [toDos, setToDos] = useRecoilState(toDostate);

	// const toDos = useRecoilValue(toDostate)
	// console.log(toDos);

	const [todo, doing, done] = useRecoilValue(toDoSelector);


	return (

		<>
			<h1>To Dos</h1>
			<hr />
			<CreateToDo />
			<hr />
			<ul>
				<h2>해야할거</h2>
				{todo.map((toDo) => (
					// <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
					// 같은것
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<ul>
				<h2>하는 중</h2>
				{doing.map((toDo) => (
					// <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
					// 같은것
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
			<hr />
			<ul>
				<h2>완료</h2>
				{done.map((toDo) => (
					// <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
					// 같은것
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</>
	)
}

export default ToDoListAfter;