import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments, // xxx should this be assignments: [] as any, like in modulesReducer.ts?
    assignment:
    {
        title: "New Assignment",
        description: "New Description",
        points: 100,
        due_date: "2024-01-01",
        available_from: "2024-01-01",
        until: "2024-01-01"
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            console.log("Kanbas/Courses/Assignments/assignmentsreducer.ts: setAssignments: action.payload: ", action.payload);
            state.assignments = action.payload;
          },

        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },

        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },

        setAssignment: (state, action) => {
            state.assignment = { ...action.payload };
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
