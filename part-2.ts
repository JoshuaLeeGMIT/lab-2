let s: Array<string> = [];

function addTask(task: string): number {
    console.log (task + " added to array.");

    return s.push(task);
}

function listAllTasks(): void {
    s.forEach(task => {
        console.log(task);
    });
}

function deleteTask(task: string): number {
    let i: number;

    if ((i = s.indexOf(task)) != -1) {
        s.splice(i, 1);
        console.log (task + " removed from array.");
    }

    return s.length;
}