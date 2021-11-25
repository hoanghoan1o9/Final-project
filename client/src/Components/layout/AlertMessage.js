import React from 'react'

const AlertMessage = ({info}) => {
    return info === null ? null : (
        <div variant={info.type}>{info.message}</div>
    )
}

export default AlertMessage
