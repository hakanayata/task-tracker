import { useEffect, useState } from "react";

export default function AddTask({ addTask }) {
    const [text, setText] = useState("");
    const [date, setDate] = useState("");

    // date to display on page load
    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");

    useEffect(() => {
        setDate(`${year}-${month}-${day}T${hours}:${mins}`);
    }, [now]);

    // console.log(`${year}-${month}-${day}T${hours}:${mins}Z`);

    function handleSubmit(e) {
        e.preventDefault();

        addTask(text, date);

        setText("");
        setDate(`${year}-${month}-${day}T${hours}:${mins}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="task-name">Task name</label>
                <input
                    type="text"
                    name="task-name"
                    id="task-name"
                    placeholder="Enter a task..."
                    value={text}
                    onChange={(e) => setText(e.target.value.trim())}
                    required
                    maxLength="27"
                />
            </div>
            <div className="form-control">
                <label htmlFor="date">Date</label>
                <input
                    type="datetime-local"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) =>
                        setDate(
                            new Date(e.target.value)
                                .toISOString()
                                .slice(0, 16) + "Z"
                        )
                    }
                    required
                />
            </div>
            <button className="btn" type="submit" id="save-task">
                Save Task
            </button>
        </form>
    );
}
