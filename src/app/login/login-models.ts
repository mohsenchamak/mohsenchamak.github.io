export interface userModel {
  userName: string,
  userPass: string
}

export interface loginResponse {
  token: string,
  expiration: string
}
