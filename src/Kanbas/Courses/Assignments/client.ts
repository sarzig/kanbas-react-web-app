import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

export const updateAssignment = async (module: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${module._id}`, module);
  return response.data;
};

export const deleteAssignment = async (moduleId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${moduleId}`);
  return response.data;
};

export const createAssignment = async (courseId: string, module: any) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, module);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  console.log("calling findAssignmentsForCourse: courseId: ", courseId);
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};