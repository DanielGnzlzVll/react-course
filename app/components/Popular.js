import React from 'react'

export default class Popular extends React.Component {
    render(){
        const lenguages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Golang']    

        return (
            <ul className='flex-center'>
                {lenguages.map((lenguage) => (
                <il key={lenguage}>
                    <button className='btn-clear nav-link'>
                        {lenguage}
                    </button>
                </il>
                ))}
            </ul>
        )
    }
}