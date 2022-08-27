import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const AllContext = React.createContext();

const Provider = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [updateIsOpen, setUpdateIsOpen] = useState(false)
    const [list, setList] = useState(localStorage.list ? JSON.parse(localStorage.list) : [])
    const [favourite, setFavourite] = useState([])
    const [likes, setLikes] = useState([])
    const [items, setItems] = useState([]);
    const [calenderOpen, setCalenderOpen] = useState(false)
    const [isFavOpen, setIsFavOpen] = useState(false)

    const [formData, setFormData] = useState({
        task: '',
        title: '',

    })
    const [updateFormData, setUpdateFormData] = useState({
        id: '',
        task: '',
        title: ''
    })

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));

        const favPresent = localStorage.getItem('favourite');
        console.log('mylocal storage', favPresent);
        if (favPresent && favPresent.length > 0) {
            setFavourite(JSON.parse(favPresent))
        } else {
            setFavourite([])
        }
    }, []);

    const moldaOpener = () => {
        setIsOpen(true)
        setUpdateIsOpen(false)
        setCalenderOpen(false)
        setIsFavOpen(false)
    }
    const changeHandler = (e) => {
        const { name, value, className } = e.target

        if (className === 'updateTask') {
            setUpdateFormData({ ...updateFormData, [name]: value })
        } else
            setFormData({ ...formData, [name]: value })
    }
    const submitHandler = (e) => {
        // if (!formData) return
        e.preventDefault()

        setList([...list,
        {
            id: uuidv4(),
            // value: { ...formData }
            title: (formData.title.length > 15) ? formData.title.substr(0, 15 - 1) + '...' : formData.title,
            task: formData.task,
            favourite: false,
            likes: false
        }
        ])
        localStorage.setItem("list", JSON.stringify(list))
        setIsOpen(false)
        setFormData('')
    }
    const deleteHandler = (id) => {
        const copy = [...list]
        const Filter = copy.length > 0 && copy.filter((list) => list.id !== id)
        setList(Filter)
    }
    const clearHandler = () => {
        setList([])
        setCalenderOpen(false)
    }

    //propulate the message box with initial values to update
    const updateHandler = (id) => {
        const copy = [...list]
        const Find = copy.find((list) => list.id === id)
        console.log('currentid', id)
        console.log('current List', list)
        setUpdateFormData(Find)
        setUpdateIsOpen(true)

    }

    const updateSubmitHandler = (e) => {
        e.preventDefault()
        const copy = [...list]
        const Index = copy.indexOf(copy.find((list) => list.id === updateFormData.id))
        const Item = copy[Index]
        console.log(Item)
        Item.task = updateFormData.task
        Item.title = (updateFormData.title.length > 15) ? updateFormData.title.substr(0, 15 - 1) + '...' : updateFormData.title
        setList(copy)
        setUpdateIsOpen(false)
    }

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };
    const removeHandler = () => {
        setIsOpen(false)
    }
    const removeHandlerUpdate = () => {
        setUpdateIsOpen(false)
    }

    const favouriteHandler = (id) => {
        const copy = [...list]
        const item = copy.length > 0 && copy.find((item) => item.id === id)
        item.favourite = !item.favourite;
        console.log('favourite', item)
        setList(copy)
        { console.log(favourite) }
        const isPresent = favourite.find((f) => f.id === item.id)
        if (!isPresent) {
            setFavourite([...favourite, item])
            localStorage.setItem('favourite', JSON.stringify([...favourite, item]));
        } else {
            const newFavourite = favourite.filter((lis) => lis.id !== lis.id)
            setFavourite(newFavourite)
            localStorage.setItem('favourite', JSON.stringify(newFavourite));
        }

    }
    const likesHandler = (id) => {

        const copy = [...list]
        const item = copy.length > 0 && copy.find((item) => item.id === id)
        item.likes = !item.likes
        console.log('likes item', item)
        setList(copy)
    }
    const calendarHandler = () => {
        setCalenderOpen(true)
    }

    const favOpenHandler = () => {
        setIsFavOpen(true)
        setIsOpen(false)
    }
    const state = {
        isOpen,
        setIsOpen,
        updateIsOpen,
        setUpdateIsOpen,
        list,
        setList,
        favourite,
        setFavourite,
        formData,
        setFormData,
        updateFormData,
        setUpdateFormData,
        moldaOpener,
        changeHandler,
        submitHandler,
        deleteHandler,
        clearHandler,
        updateHandler,
        updateSubmitHandler,
        truncate,
        removeHandler,
        removeHandlerUpdate,
        favouriteHandler,
        items,
        setItems,
        likes,
        setLikes,
        likesHandler,
        calendarHandler,
        calenderOpen,
        setCalenderOpen,
        isFavOpen,
        setIsFavOpen,
        favOpenHandler

    }
    // localStorage.removeItem('favourite')
    // localStorage.removeItem('list')
    return (
        <AllContext.Provider value={state}>
            {props.children}
        </AllContext.Provider>
    )

}
const Consumer = AllContext.Consumer;
export default AllContext
export { Provider, Consumer }