import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import NotePadNav from './Components/Todo/NotePadNav'
import FavouritePage from './Components/Todo/FavouritePage'
import FavouriteScreen from './Screens/FavouriteScreen'
import NoteScreen from './Screens/NoteScreen'


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<NoteScreen />} />
                <Route path='/favourite' element={<FavouriteScreen />} />
            </Routes>
        </div>
    )
}

export default Router