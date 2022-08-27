import React, { useContext } from 'react'
import styles from './NotePad.module.css'
import AllContext from '../../Context'

const NoteForm = () => {
    const store = useContext(AllContext)
    const { task, changeHandler, submitHandler, title, removeHandler } = store
    return (
        <div>
            <form onSubmit={submitHandler} className={styles.formContainer}>

                <input type='text' placeholder='Title' className={styles.formInput} value={title} onChange={changeHandler} name='title' />
                <textarea style={{ rows: '70', cols: '70' }} type='text' name='task' value={task} onChange={changeHandler} className={styles.textarea} ></textarea>
                <button className={styles.formSubmitBtn} type='submit'>Submit</button>
                <span onClick={removeHandler} className={styles.removeHandler}>X</span>
            </form>
        </div>
    )
}

export default NoteForm