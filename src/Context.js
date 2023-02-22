import React, { useEffect, useState } from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
    const [allPhotos, setAllPhotos] = useState([]);

    const[cartItems, setCartItems] = useState([]);

    useEffect( () => {

        const fetchPhotos = async () => {
            const response = await fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json");
            const data = await response.json();
            
            setAllPhotos(data);
        }
       
        fetchPhotos();

    }, [])

    const toggleFavorite = (id) => {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id){
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo;
        })

        setAllPhotos(updatedArr);
    }

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const emptyCart = () => {
        setCartItems([])
    }
    
    
    return (
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addToCart, emptyCart, removeFromCart}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;