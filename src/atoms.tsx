import { atom, selector } from 'recoil';


export interface IToDo {
	text: string;
	// todo doing done 3개만 받을 수 있음
	category: "TO_DO" | "DOING" | "DONE";
	id: number;

}

export const toDostate = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDostate);
		return [
			toDos.filter((toDo) => toDo.category === "TO_DO"),
			toDos.filter((toDo) => toDo.category === "DOING"),
			toDos.filter((toDo) => toDo.category === "DONE"),
		];
	},
});