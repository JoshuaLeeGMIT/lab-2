import {taskList} from './taskList';

class Tasks implements taskList {
    tasks: Array<string> = [];

    addTask(task: string) {
        console.log(task + " has been added to the array.");

        return this.tasks.push(task);
    }

    listAllTasks(): void {
        this.tasks.forEach(task => {
            console.log(task);
        });
    }

    deleteTask(task): number {
        let i: number;

        if ((i = tasks.indexOf(task)) != -1) {
            this.tasks.splice(i, 1);
            console.log(task + " has been removed from the array.");
        }

        return this.tasks.length;
    }
}