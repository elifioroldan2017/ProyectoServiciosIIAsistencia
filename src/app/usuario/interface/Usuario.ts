import { Persona } from "src/app/persona/interface/Persona"
import { Tipousuario } from "src/app/tipousuario/interface/TipoUsuario"

export interface Usuario {
    userId: number
    personId: number
    user: string
    password: string
    usertype: number
    active: string
    objuserType?: Tipousuario
    objPerson?: Persona
  }