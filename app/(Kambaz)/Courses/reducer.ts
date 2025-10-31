import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
  course: {
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description"
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse: (state, { payload: course }) => {
      state.course = course;
    },
    addCourse: (state, { payload: course }) => {
      const newCourse = { 
        ...course, 
        _id: uuidv4(),
        number: course.number || course.name,
        startDate: course.startDate || "2023-09-10",
        endDate: course.endDate || "2023-12-15",
        image: course.image || "/images/reactjs.jpg",
      };
      state.courses = [...state.courses, newCourse] as any;
      // Reset form to default after adding
      state.course = {
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
      };
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId
      );
    },
    updateCourse: (state) => {
      state.courses = state.courses.map((c: any) =>
        c._id === state.course._id ? state.course : c
      ) as any;
    },
  },
});

export const { setCourse, addCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;

