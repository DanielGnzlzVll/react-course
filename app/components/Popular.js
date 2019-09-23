import React from 'react'

export default class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
    }
    updateSelectedLanguage(selectedLanguage){
        this.setState({selectedLanguage})
    }
    render(){
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Golang']    

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                <il key={language}>
                    <button className='btn-clear nav-link'
                    style = {language === this.state.selectedLanguage ? {color: 'rgb(187, 46, 31)'} : null}
                    onClick={()=>{this.updateSelectedLanguage(language)}}>
                        {language}
                    </button>
                </il>
                ))}
            </ul>
        )
    }
}