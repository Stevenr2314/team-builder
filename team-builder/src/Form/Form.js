import React, {useState} from 'react';



function Form (props) {
    const [formInfo, setFormInfo] = useState({name: '', email: '', role: ''})
    const {teamList, setTeamList} = props

    const handleChange = event => {
        setFormInfo({...formInfo, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log(event.target)
        if(!teamList){
            setTeamList([`${event.target.value}`])
        }
        setTeamList(...teamList, [`${event.target.value}`])
        
    }

return (
    <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor='name'>Name: 
            <input id='nameInput' name='name' type='text' onChange={event => handleChange(event)}/>
        </label>
        <label htmlFor='email'>Email: 
            <input id='emailInput' name='email' type='text' onChange={event => handleChange(event)}/>
        </label>
        <label htmlFor='role'>Role: 
            <select id='roleSelect' name='role' onChange={event => handleChange(event)}>
                <option value='frontEndDeveloper'>Front End Developer</option>
                <option value='backEndDeveloper'>Back End Developer</option>
                <option value='softwareEngineer'>Software Engineer</option>
                <option value='cyberSecurityEngineer'>Cyber Security Engineer</option>
                <option value='designer'>Designer</option>
            </select>
        </label>
        <button>Submit!</button>
    </form>
)
}

export default Form