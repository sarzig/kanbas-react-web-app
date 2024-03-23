import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../A4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../A4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../A4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../A4/ReduxExamples/todos/todosReducer";

export type TodoType = {
    id: string;
    title: string;
};


export interface LabState {
    helloReducer: { message: string; };
    counterReducer: { count: number; };
    addReducer: {
        sum: number;
    };
    todosReducer: {
        todos: TodoType[];
        todo: TodoType;
    };

}
const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer
    },
});
export default store;
