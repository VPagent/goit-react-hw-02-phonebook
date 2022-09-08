import {nanoid }from 'nanoid'

function Contacts ({options, onChangeInput, onHandle}){

    return(
        <>
        <label>
            Find contacts by name
            <input type="text" name="filter" onChange={onChangeInput} />
        </label>
        <ul>
            {options.map(({id, userName, tel}) => (
                <li key={id} onClick={onHandle}>
                    name:{userName} tel:{tel}
                    <button key={nanoid(2)} type="button" name={userName} >Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Contacts
