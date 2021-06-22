import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = new UsersRepositories()

        // conferindo se o email está sendo informado
        if(!email) {
            throw new Error("Email incorrect")
        }

        // conferindo se o email cadastrado já existe
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if(userAlreadyExists) {
            throw new Error("User already exists")
        }

        const user = usersRepository.create({
            name,
            email,
            admin
        })

        await usersRepository.save(user)

        return user
    }
}

export { CreateUserService}