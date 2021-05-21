import React, { useState } from "react";
import { event } from "jquery";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);
	return (
		<div className="text-center mt-5 d-flex align-items-center flex-column">
			<h1>TO-DO LIST</h1>
			<div className="boxList">
				<input
					className="form-control"
					type="text"
					placeholder="Add a New Task"
					value={newTask}
					onChange={event => setNewTask(event.target.value)}
					onKeyPress={event => {
						if (event.key == "Enter") {
							setTasks([
								...tasks,
								{
									id: Math.random()
										.toString(16)
										.substring(2),
									label: newTask
								}
							]);
							setNewTask("");
						}
					}}
				/>

				<ul className="p-0">
					{tasks.map(task => (
						<li key={task.id}>
							{task.label}
							<span
								onClick={event => {
									let filterTasks = tasks.filter(
										t => t.id != task.id
									);
									setTasks(filterTasks);
								}}>
								<i className="far fa-times-circle"></i>
							</span>
						</li>
					))}
				</ul>
				<div>
					<span>
						{tasks.length == 1
							? `${tasks.length} pending tasks`
							: tasks.length == 0
							? "You dont have tasks"
							: `${tasks.length} pending tasks`}
					</span>
				</div>
			</div>
		</div>
	);
}
