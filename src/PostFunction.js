import React from 'react'  // rafc หรือ rfc แบบฟังชั่นปกติ

export const PostFunction = (props) => {
   
    return (
        <div>
             <p>
                {props.content}
            </p>
            <p>
                Post by : <i>{props.name}</i>
            </p>
        </div>
    )
}

