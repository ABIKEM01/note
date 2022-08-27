import React, { useState, useContext, useEffect } from 'react'
import styles from './NotePad.module.css'
import { FaTrashAlt, FaHeart } from 'react-icons/fa'
import { AiOutlineEdit, AiOutlineCalendar, AiOutlineLike } from 'react-icons/ai'
import AllContext from '../../Context'

const FavouritePage = ({ item }) => {
    { console.log('item check', item) }
    const store = useContext(AllContext)
    const { updateHandler, deleteHandler, favourite, setFavourite, favouriteHandler, setList, likesHandler, likes } = store
    return (
        <>
            {

                <div>
                    <div className={styles.card} >
                        <p className={styles.date}>{new Date().toLocaleString()}</p>
                        <h5>Title: {item.title}</h5>
                        <p>Note: {item.task}</p>
                        <div className={styles.cardAction}>
                            <span className={styles.actionStar}> <AiOutlineEdit onClick={(e) => updateHandler(item.id)} /></span>
                            <span> <button className={styles.actionCopy} onClick={() => navigator.clipboard.writeText("i'm still working on this")}>Copy</button></span>
                            <span><FaHeart onClick={(e) => favouriteHandler(item.id)} style={{ color: `${item.favourite ? 'red' : ''}` }} className={styles.favouriteHandler} /></span>
                            <span><AiOutlineLike className={styles.likesHandler} onClick={(e) => likesHandler(item.id)} style={{ cursor: 'pointer', color: `${item.likes ? 'blue' : ''}` }} /></span>
                            <span className={styles.actionTrash}> <FaTrashAlt onClick={(e) => deleteHandler(item.id)} /></span>
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

export default FavouritePage