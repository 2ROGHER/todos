import React, { JSX } from 'react'

const AddCreateButtonComponent = ({ title="add new task"}): JSX.Element => {
    return (
        <section>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#222222" fill="none">
                    <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span>
                {title}
            </span>
        </section>
    )
}

export default AddCreateButtonComponent