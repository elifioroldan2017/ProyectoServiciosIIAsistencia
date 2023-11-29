import { Curso } from "src/app/curso/interface/Curso"
import { Persona } from "src/app/persona/interface/Persona"
import { Seccion } from "src/app/seccion/interface/Seccion"
import DetalleHorario from "./DetalleHorario"

export interface HorarioProfesor {
    scheduleId: number
    courseId: number
    sectionId: number
    teacherId: number
    scheduleActive: string
    course: Curso
    section: Seccion
    person: Persona
    details: DetalleHorario[]
  }