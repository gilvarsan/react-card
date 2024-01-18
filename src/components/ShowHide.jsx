import React, { useState } from 'react';

function ShowHide() {
    const [show, setShow] = useState(true);

    const handleOnclik = (event => {
        setShow(!show);
    })

    return (
        <div className='buttonHelp'>
            <button onClick={handleOnclik}> {show ? 'Hide': 'Show'} Text </button>
            {show && <h2>Help Me!</h2>}
        </div>
    )
}

export default ShowHide