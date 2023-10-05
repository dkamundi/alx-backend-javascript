interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome = () => 'Working from home'
    getCoffeeBreak = () => 'Getting a coffee break'
    workDirectorTasks = () => 'Getting to director tasks'
}

class Teacher implements TeacherInterface {
    workFromHome = () => 'Cannot work from home'
    getCoffeeBreak = () => 'Cannot have a break'
    workTeacherTasks = () => 'Getting to work'
}

const createEmployee = (salary: number | string): Teacher | Director => {
    if (Number(salary) && salary < 500) {
        return new Teacher();
    } else {
        return new Director()
    }
}

const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director
const executeWork = (employee: Teacher | Director): void => {
    employee instanceof Teacher ? employee.workTeacherTasks: employee.workDirectorTasks()
}

type Subjects = 'Math' | 'History'

const teachClass = (todayClass: Subjects): string => {
    return todayClass === 'History' ? 'Teaching History' : 'Teaching Math'
}
