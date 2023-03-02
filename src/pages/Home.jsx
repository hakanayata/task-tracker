import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import Data from "../helper/Data";
import { useState } from "react";

export default function Home() {
    const [data, setData] = useState(Data);
    const [showAddTask, setShowAddTask] = useState(false);

    function addTask(text, date) {
        const newID = data.length + 10;
        setData([...data, { id: newID, text: text, date: date, done: false }]);
    }

    function deleteTask(id) {
        setData(data.filter((item) => item.id !== id));
    }

    function toggleDone(id) {
        setData(
            data.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    }

    return (
        <div className="container">
            <h1 className="header">Task Tracker</h1>
            <button
                className={`btn${showAddTask ? " black" : " green"}`}
                id="add-task"
                onClick={() => setShowAddTask(!showAddTask)}
            >
                Add New Task
            </button>
            {showAddTask && <AddTask addTask={addTask} />}
            {data.length > 0 ? (
                <Tasks
                    data={data}
                    onToggle={toggleDone}
                    onDelete={deleteTask}
                />
            ) : (
                <p>No tasks to show.</p>
            )}
        </div>
    );
}
