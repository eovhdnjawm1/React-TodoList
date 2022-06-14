
import { IToDo, toDostate } from './../atoms';
import React from 'react';
import { useSetRecoilState } from 'recoil';

// [
//     {
//         "text": "5",
//         "id": 1655211906306,
//         "category": "TO_DO"
//     },
//     {
//         "text": "4",
//         "id": 1655211905869,
//         "category": "TO_DO"
//     },
//     {
//         "text": "3",
//         "id": 1655211905611,
//         "category": "TO_DO"
//     },
//     {
//         "text": "2",
//         "id": 1655211905364,
//         "category": "TO_DO"
//     },
//     {
//         "text": "1",
//         "id": 1655211905135,
//         "category": "TO_DO"
//     }
// ]

// 1) id를 기반으로 todo를 찾아야한다.
// index 2 

function ToDo({ text, category, id }: IToDo) {

	//  1번
	// const onClick = (newCategory: IToDo["category"]) => {
	// 	console.log("i want to ", newCategory)
	// }

	// 2번
	const setToDos = useSetRecoilState(toDostate)
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		// console.log("i want go to", event.currentTarget.name)
		const { currentTarget: { name },
		} = event;

		// 클릭한 것의 state id를 찾음
		// 카테고리를 변경하는데 내용과 아이디는 그대로 간다.
		setToDos(oldtoDos => {
			const targetIndex = oldtoDos.findIndex((toDo) => toDo.id === id)
			console.log(targetIndex);
			// const oldToDo = oldtoDos[targetIndex];
			const newToDo = { text, id, category: name as any }
			return [
				...oldtoDos.slice(0, targetIndex),
				newToDo,
				...oldtoDos.slice(targetIndex + 1)];
		})
	}


	return (
		<>
			<li>
				<span>{text}</span>
				{/* 1번 */}
				{/* {category !== "DOING" &&
					<button onClick={() => onClick("DOING")}>Doing</button>}

				{category !== "TO_DO" &&
					<button onClick={() => onClick("TO_DO")}>To Do</button>}

				{category !== "DONE" &&
					<button onClick={() => onClick("DONE")}>Done</button>} */}

				{/* 2번 */}
				{category !== "DOING" &&
					<button name='DOING' onClick={onClick}>Doing</button>}

				{category !== "TO_DO" &&
					<button name='TO_DO' onClick={onClick}>To Do</button>}

				{category !== "DONE" &&
					<button name='DONE' onClick={onClick}>Done</button>}
			</li>
		</>
	)
}

export default ToDo;