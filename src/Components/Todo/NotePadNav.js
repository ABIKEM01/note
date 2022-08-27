import React, { useContext } from 'react'
import { AiOutlineHome, AiOutlineEdit, AiOutlineStar, AiOutlinePlayCircle, AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai'
import { FaBook, FaTrashAlt } from 'react-icons/fa'
import { ImPlus } from 'react-icons/im'
import { FaRegMoon } from 'react-icons/fa'
import NoteForm from './NoteForm'
import Note from './Note'
import stlyes from './NotePad.module.css'
import NoteUpdate from './NoteUpdate'
import AllContext from '../../Context'
import NoteCalender from './NoteCalender'
import FavouritePage from './FavouritePage'

const NotePadNav = () => {
    const store = useContext(AllContext)
    const { list, clearHandler, moldaOpener, isOpen, updateIsOpen, calendarHandler, calenderOpen, favourite, favOpenHandler, isFavOpen, setIsFavOpen } = store
    { console.log('favvv', favourite) }
    return (
        <div >
            <div className={stlyes.container}>
                <div className={stlyes.noteContainer}>
                    <span><AiOutlineHome /></span>
                    <span className={stlyes.notetext}>NotePad</span>
                    <span><FaRegMoon /></span>
                </div>
                {/* <NoteCalender /> */}
                <div className={stlyes.column}>
                    <h3 onClick={moldaOpener} className={stlyes.editBtn} ><AiOutlineEdit />Add Note</h3>
                    <h3 onClick={calendarHandler} style={{ cursor: 'pointer' }}><AiOutlineCalendar /> Calender</h3>
                    <h3><FaBook /> Previous</h3>
                    <h3 onClick={favOpenHandler}> <AiOutlineStar />Favourite</h3>
                    <h3><AiOutlinePlayCircle />Play ++</h3>
                </div>
                <div className={stlyes.blank}>
                    <h3><ImPlus onClick={moldaOpener} className={stlyes.editBtn} /> </h3>
                    <h3><AiOutlineCalendar onClick={calendarHandler} style={{ cursor: 'pointer' }} /> </h3>
                    <h3><FaBook /> </h3>
                    <h3> <AiOutlineStar /></h3>
                    <h3><FaTrashAlt onClick={clearHandler} className={stlyes.clearBtn} /></h3>
                </div>
                <div className={stlyes.mapFlex}>
                    {/* <Note /> */}
                    {/* {list.length > 0 && list.map((item) => <Note key={item.id} item={item} />)} */}
                    {list.length > 0 && list.map((item) => <Note key={item.id} item={item} />)}
                    {favourite.length > 0 && favourite.map((item) => <FavouritePage key={item.id} item={item} />)}

                </div>

                {isOpen && <NoteForm />}
                {updateIsOpen && <NoteUpdate />}
                {calenderOpen && <NoteCalender />}
                {isFavOpen && <FavouritePage />}
            </div>
        </div>
    )
}

export default NotePadNav
