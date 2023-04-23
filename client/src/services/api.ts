import axios from 'axios';

const url: string = 'https://api.github.com/users';

export const getUser = async(user: string): Promise<IUser> => {
    try{
        const userData: IUser = await axios.get(`${url}/${user}`).then(resp => resp.data);
        
        return userData;
    }catch (e){
        throw(e)
    }
}