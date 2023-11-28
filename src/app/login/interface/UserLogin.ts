import Menu from "./Menu"

export default interface UserLogin {
    accessToken: string
    tokenType: string
    userId: number
    username: string
    name: string
    lastname1: string
    lastname2: string
    email: string
    menus: Menu[]
  }