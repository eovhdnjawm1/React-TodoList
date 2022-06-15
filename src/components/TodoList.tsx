import { useRecoilState, useRecoilValue } from 'recoil';
import { categoryState, toDostate } from '../atoms';
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

	const todos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategory(event.currentTarget.value);
	}

	return (

		<>
			<h1>To Dos</h1>
			<select onInput={onInput} value={category}>
				<option value="TO_DO">해야할 것</option>
				<option value="DOING">하는 중</option>
				<option value="DONE">완료</option>
			</select>
			<hr />
			<CreateToDo />
			<hr />
			<ul>
				{todos?.map((toDo) => (
					<ToDo key={toDo.id} {...toDo} />
				))}
			</ul>
		</>
	)
}

export default ToDoListAfter;