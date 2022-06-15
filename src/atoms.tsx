import { atom, selector } from 'recoil';


export interface IToDo {
	text: string;
	// todo doing done 3개만 받을 수 있음
	category: "TO_DO" | "DOING" | "DONE";
	id: number;

}

export const categoryState = atom({
	key: "categoryState",
	default: "TO_DO",
});

export const toDostate = atom<IToDo[]>({
	key: "toDo",
	default: [],
});

export const toDoSelector = selector({
	key: "toDoSelector",
	get: ({ get }) => {
		const toDos = get(toDostate);
		const toCategory = get(categoryState);
		return toDos.filter((toDo) => toDo.category === toCategory);
	},
});