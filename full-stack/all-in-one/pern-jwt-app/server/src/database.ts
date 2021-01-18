import { Connection, createConnection, Repository } from "typeorm";
import { User } from "./entity/User";

export class Database {
  public static connection: Connection;
  public static userRepository: Repository<User>;

  public static async initialize() {
    this.connection = await createConnection();
    this.userRepository = this.connection.getRepository(User);
  }
}
