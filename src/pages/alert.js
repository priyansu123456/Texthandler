import React from 'react'

function alert(props) {
return (
    props.alert &&<div className={`alert alert-${props.alert.type}-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}

</div>

)
}

export default alert
