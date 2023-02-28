import { BsTrash } from "react-icons/bs";

export default function Tasks({ data, onDelete, onToggle }) {
    return (
        <div>
            <hr />
            <h2>Task List</h2>
            {data.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`task${item.done ? " done" : ""}`}
                        onDoubleClick={() => onToggle(item.id)}
                    >
                        <h3>
                            {item.text}{" "}
                            {
                                <BsTrash
                                    onClick={() => onDelete(item.id)}
                                    style={{ color: "red" }}
                                />
                            }
                        </h3>
                        <p>
                            {new Date(`${item.date}`)
                                .toLocaleString()
                                .slice(0, 17)}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
