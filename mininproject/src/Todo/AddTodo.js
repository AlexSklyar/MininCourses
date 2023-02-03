import React, { useState } from "react"
import PropTypes from 'prop-types'

const styles = {
    form: {
        marginBottom: "1rem"
        
    },
    input: {
        marginRight: "1rem"
    }
}

function useInputValue(defaultValue=''){
    let [value, setValue] = useState('');
    return {
        bind:{
            value,
            onChange: event=>setValue(event.target.value)
        },
        clear: ()=>setValue(''),
        value: ()=> value
        
    }
}

function AddTodo({onCreate}){
const input = useInputValue('')

function submitHendler(event){
event.preventDefault();

    if(input.value().trim()){
    onCreate(input.value());
    input.clear()
    }
}
return(
<form style={styles.form} onSubmit={submitHendler}>
<input style={styles.input} {...input.bind}/>
<button type="submit">Add Todo</button>
</form>
)
}
AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo