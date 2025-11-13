import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: Date.now().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      // Check if enrollment already exists
      const exists = state.enrollments.some(
        (e: any) => e.user === enrollment.user && e.course === enrollment.course
      );
      if (!exists) {
        state.enrollments = [...state.enrollments, newEnrollment] as any;
      }
    },
    removeEnrollment: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    },
  },
});

export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

