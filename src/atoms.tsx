import { atom, selector } from 'recoil';

export enum ECategory {
	"해야할일" = "해야할일",
	"하는중" = "하는중",
	"완료" = "완료",
}

export interface IToDo {
	text: string;
	// todo doing done 3개만 받을 수 있음
	category: ECategory,
	id: number;

}

export const categoryState = atom<ECategory>({
	key: "categoryState",
	default: ECategory.해야할일,
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