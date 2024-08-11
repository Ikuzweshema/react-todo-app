export type Todo={
    id: number,
    text: string,
    completed: boolean,
};

type TodoItem={
    id: number,
    text: string,
    completed: boolean,
    toggle: () => void,
    onDelete: () => void,
}
type TodoFormProps={
    addNote: (text: string) => void,
    
}