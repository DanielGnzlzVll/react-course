import React from 'react'

export default class Popular extends React.Component {
    render(){
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Golang']    

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                <il key={language}>
                    <button className='btn-clear nav-link'>
                        {language}
                    </button>
                </il>
                ))}
            </ul>
        )
    }
}