import { Button, TextField } from '@mui/material'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { getUser } from '../../services/api';

interface Props {
    getUserData: (dataUser: IUser | undefined) => void
}

export const SearchUser: FunctionComponent<Props> = ({ getUserData }) => {
    const [user, setUser] = useState<string>('');
    const [dataUser, setDataUser] = useState<IUser | undefined>();

    useEffect(() => {
        if (dataUser !== undefined) {
            getUserData(dataUser);
        }
    }, [dataUser])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        getUser(user)
            .then(data => setDataUser(data as IUser))
            .catch(err => console.error(err))
            .finally(() => setUser(''));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="searchGitUser"
                    label="Search User"
                    variant="standard"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
                    value={user}
                />
                <Button variant="outlined">Search</Button>
            </form>
        </>
    )
}