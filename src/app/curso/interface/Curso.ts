import { Carrera } from "./Carrera"

export interface Curso {
    courseId: number
    courseName: string
    courseCredits: string
    careerId: number
    careerActive: string
    objCareer: Carrera
  }