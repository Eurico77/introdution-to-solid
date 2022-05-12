import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id: id }): User[] {
    const user = this.usersRepository.findById(id);

    if (!user || !user.admin) {
      throw new Error("User not found");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
