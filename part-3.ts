class test implements task {
    let tasks:Array<string> = [];

    function addTask(task:string): number {
        console.log(task + " has been added to the array.");

        return tasks.push(task);
    }

    function listAllTasks(): void {
        tasks.forEach(task => {
            console.log(task);
        });
    }

    function deleteTask(task: string): number {
        let i: number;

        if ((i = tasks.indexOf(task)) != -1) {
            tasks.splice(i, 1);
            console.log(task + " has been removed from the array.");
        }

        return tasks.length;
    }
}