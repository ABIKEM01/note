import React, { useContext } from 'react'
import styles from './NotePad.module.css'
import AllContext from '../../Context'


const NoteUpdate = () => {
    const store = useContext(AllContext)
    const { updateFormData, changeHandler, updateSubmitHandler, removeHandlerUpdate } = store
    return (
        <div>
            <form onSubmit={updateSubmitHandler} className={styles.updateformContainer}>

                <input type='text' className='updateTask' placeholder='Title' value={updateFormData.title} onChange={changeHandler} name='title' />
                <textarea type='text' className='updateTask' name='task' value={updateFormData.task} onChange={changeHandler}  ></textarea>
                <button type='submit'>Update</button>
                <span onClick={removeHandlerUpdate} className={styles.removeHandler}>X</span>
            </form>
        </div>
    )
}

export default NoteUpdate