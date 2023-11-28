export default interface Horario {
    courseId?: number;
    sectionId?: number;
    teacherId?: number;
    students: number[] | null;
  }