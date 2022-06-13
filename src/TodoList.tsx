
import { useForm } from 'react-hook-form';

interface IForm {
	toDo: string;
}

function ToDoListAfter() {
	const { register, handleSubmit, setValue } = useForm<IForm>();

	const onSubmit = (data: IForm) => {
		console.log('add to do', data.toDo)
		setValue("toDo", "");
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("toDo", {
					required: "Please write todo",
				})} placeholder='여기 쓰시오' />
				<button>Add</button>
			</form>
		</>
	)
}

export default ToDoListAfter;