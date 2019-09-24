import React from 'react'

function LenguageNav({ selected, onUpdateLanguage}){
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'Golang']    

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                <il key={language}>
                    <button className='btn-clear nav-link'
                    style = {language === selected ? {color: 'rgb(187, 46, 31)'} : null}
                    onClick={()=>{onUpdateLanguage(language)}}>
                        {language}
                    </button>
                </il>
                ))}
            </ul>
        )
}
export default class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateSelectedLanguage = this.updateSelectedLanguage.bind(this)
    }
    updateSelectedLanguage(selectedLanguage){
        this.setState({selectedLanguage})
    }
    render(){
        <React.Fragment>
            <LenguageNav
            selected={this.state.selectedLanguage}
            onUpdateLanguage={this.updateSelectedLanguage}>
            </LenguageNav>
        </React.Fragment>
    }
}