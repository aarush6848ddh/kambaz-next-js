import { courses } from "./courses";
import { modules } from "./modules";
import { assignments } from "./assignments";
import { users } from "./users";
import { enrollments } from "./enrollments";

export { courses, modules, assignments, users, enrollments };

const db = {
  courses,
  modules,
  assignments,
  users,
  enrollments,
};

export default db;
