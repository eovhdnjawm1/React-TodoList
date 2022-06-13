import { atom } from 'recoil';


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

