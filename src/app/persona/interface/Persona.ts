import { Sexo } from "./Sexo"
import { Tipo } from "./Tipo"

export interface Persona {
    personId: number
    personName: string
    personLastname1: string
    personLastname2: string
    personEmail: string
    personAddress: string
    sexId: number
    typeId: number
    personBirthdate: string
    personPhone: string
    personActive: string
    personHasUser: boolean
    objSex: Sexo
    objType: Tipo
  }