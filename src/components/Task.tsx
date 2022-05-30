import {FaTimes} from 'react-icons/fa'


interface taskProp {
    key: iKey | undefined;
    task: iTask | undefined;
    onDelete: Function;
    onToggle: Function;
}

interface iKey {
    key: number
}

interface iTask {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}

const Task = (prop: taskProp) => {
    return (
        <div className={`task ${prop.task?.reminder ? 'reminder' : ''}`}
             onDoubleClick={() => prop.onToggle(prop.task?.id)}>
            <h3>{prop.task?.text}<FaTimes onClick={() => prop.onDelete(prop.task?.id)}
                                          style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{prop.task?.day}</p>
        </div>
    );
};

export default Task;