import React, {useState} from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import task from "./components/Task";
import tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

let name: string;
// "|" is called union which allows for defining multiple types
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
//one way to create objects but not recommended
// let person:Object;
//this is making a type to better define our object
// we can add a "?" after the name attribute to make it optional
// type Person={
//     name:string;
//     age?:number;
// }
//
// let person: Person = {
//     name:"juan",
//     age:21
// }
//
// let lotsOfPeople:Person[];

interface Person {
    name: string;
    age?: number;
}

interface iTask {
    id: number;
    text: string;
    day: string;
    reminder: boolean;
}

//need to define and array of task, typescript complains with explicit version so doing it props:iTask[]
interface iTasks {
    tasks: iTask[]
}

const App = () => {

    const [showAddTask, setShowAddTask] = useState(false)


    /**
     * Function to add a task, usually id would be generate in backend by sql or some code.
     * Here we just assign a random number to new task, we choose high number to not overlap.
     * @param task - the new task, it is of type iTask declared above.
     */
    const addTask = (task: iTask) => {
        const newId: number = Math.floor(Math.random() * 10000) + 1
        const newTask = {newId, ...task}
        setTasks([...listtasks, newTask])
    }

    /**
     * Function to delete task, we iterate through our list of task and filter out the id we select.
     * @param id - the id of task to be delete, type number.
     */
    const deleteTask = (id: number) => {
        setTasks(listtasks.filter((task) => task.id !== id))
    }

    //toggle reminder function
    const toggleReminder = (id: number) => {
        setTasks(listtasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))
    }

    // Usestate object, it is the state of our data that we display in UI. Notice type iTask[] (an array of iTask)
    // listtask is the array the array of task,
    // setTasks is a function and is the only way of modifying listtasks.
    const [listtasks, setTasks] = useState<iTask[]>([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Study',
            day: 'Feb 10th at 7:20pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Game it',
            day: 'Feb 15th at 12:32pm',
            reminder: true
        }
    ])

    // App component(App.tsk) is our root component(parent/top most component)
    return (
        <div className='container'>
            <Header title='Task Tracker' showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
            {listtasks.length > 0 ?
                <Tasks tasks={listtasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Task to Show"}
            {showAddTask && <AddTask onAdd={addTask}/>}
        </div>
    );
}

export default App;
