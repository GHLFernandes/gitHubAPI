interface IUser {
    id: integer
    avatar_url: string
    name: string
    email: string
    bio: string
}

interface UserProps {
    user: IUser
}

type ApiData = {
    message: string
    status: string
    user: IUser
}