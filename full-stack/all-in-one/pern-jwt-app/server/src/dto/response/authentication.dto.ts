import { UserDTO } from "./user.dto";

export interface AuthenticationDTO {
  token: string;
  refreshToken: string;
  user: UserDTO;
}
