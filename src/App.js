import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Drawer } from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://61eec226d593d20017dbb11a.mockapi.io/items')
      .then(res => { setItems(res.data) });
    axios.get('https://61eec226d593d20017dbb11a.mockapi.io/cart')
      .then(res => { setCartItems(res.data) })
    axios.get('https://61eec226d593d20017dbb11a.mockapi.io/favorites')
      .then(res => { setFavoritesItems(res.data) })
  }, []);

  const addToCart = (obj) => {
    axios.post('https://61eec226d593d20017dbb11a.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const removeFromCart = (id) => {
    axios.delete(`https://61eec226d593d20017dbb11a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const addToFavorites = async (obj) => {
    try {
      if (favoritesItems.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://61eec226d593d20017dbb11a.mockapi.io/favorites/${obj.id}`);
        setFavoritesItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://61eec226d593d20017dbb11a.mockapi.io/favorites', obj);
        setFavoritesItems((prev) => [...prev, data]);
      }

    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }


  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {isDrawerOpen ? <Drawer closeCart={(event) => {
        event.stopPropagation();
        setIsDrawerOpen(false);
      }}
        cartItems={cartItems}
        setCartItems={setCartItems}
        onRemove={removeFromCart}
      />
        : null
      }
      <Header onClickCart={() => setIsDrawerOpen(true)} />
      <Routes>
        <Route path="/" element={<Home
          items={items}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          addToCart={addToCart}
          addToFavorites={addToFavorites}
        />} />
        <Route path='favorites' element={<Favorites
          items={favoritesItems}
          addToFavorites={addToFavorites}
          ddToCart={addToCart}
        />} />
      </Routes>
    </div>
  );
}



export default App;

