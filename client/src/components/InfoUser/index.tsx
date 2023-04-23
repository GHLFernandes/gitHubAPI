import React, { FunctionComponent } from 'react'

interface Props {
   user: IUser | undefined
}

export const InfoUser: FunctionComponent<Props> = (props: Props) => {
    
    if(typeof props.user !== "undefined" && (props.user as IUser).name !== undefined){
        const {name, email, bio, avatar_url } = props.user as IUser;
        

        return (
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{bio}</p>
                <img src={avatar_url} alt='GitHub Avatar'/>
            </div>
          )
    }

    return (
        <></>
    )
    
    
  
}
