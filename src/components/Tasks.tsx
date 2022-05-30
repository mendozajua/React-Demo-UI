//typescipt defining object/data type
import Task from "./Task";

interface iTask {
    id:number;
    text:string;
    day: string;
    reminder: boolean;
}
//need to define and array of task, typescript complains with explicit version so doing it props:iTask[]

interface Props {
    tasks:iTask[],
    onDelete:Function,
    onToggle:Function;
}
const Tasks = ({tasks,onDelete,onToggle}: Props) => {



    return (
        <>
            {tasks.map((task:iTask)=>(
                // @ts-ignore
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    );
};

export default Tasks;