import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Drawer } from "./components/Drawer/Drawer";
import Header from "./components/Header";
import AppContext from "./context";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";



function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoritesItems, setFavoritesItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  if (isDrawerOpen) {
    document.body.style.overflow = 'hidden';
  }
  if (!isDrawerOpen) document.body.style.overflow = 'auto';

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get('http://localhost:3004/cart');
        const favResponse = await axios.get('http://localhost:3004/favorites');
        const ordersResponse = await axios.get('http://localhost:3004/orders');
        const itemsResponse = await axios.get('http://localhost:3004/items');
        setOrderItems(ordersResponse.data);
        setCartItems(cartResponse.data);
        setFavoritesItems(favResponse.data);
        setItems(itemsResponse.data);
        setIsLoading(false);
      } catch (error) {
        alert('Не удалось загрузить данные с сервера');
        console.error(error);
      }
    }
    fetchData();
  }, []);


  const addToCart = (obj) => {
    try {
      if (cartItems.find(itmCrt => itmCrt.id === obj.id)) {
        axios.delete(`http://localhost:3004/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post('http://localhost:3004/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }

    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.error(error);
    }
  }
  const removeFromCart = (obj) => {
    try {
      axios.delete(`http://localhost:3004/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } catch (error) {
      alert('Не удалось удалить из корзины');
      console.error(error);
    }

  }

  const addToFavorites = async (obj) => {
    try {
      if (favoritesItems.find(favObj => favObj.id === obj.id)) {
        axios.delete(`http://localhost:3004/favorites/${obj.id}`);
        setFavoritesItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('http://localhost:3004/favorites', obj);
        setFavoritesItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  }

  const addToOrders = (arr) => {
    function ordersUpdate(i) {
      if (i === arr.length) {
        return;
      }
      axios.post('http://localhost:3004/orders', arr[i]);
      setOrderItems((prev) => [...prev, arr[i]]);
      removeFromCart(arr[i]);
      ordersUpdate(i + 1);
    }
    ordersUpdate(0);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  const isFavorited = (id) => {
    return favoritesItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favoritesItems, isItemAdded, isFavorited, setIsDrawerOpen, setCartItems }}>
      <div className="wrapper clear">
        <Drawer closeCart={() => {
          setIsDrawerOpen(false);
        }}
          cartItems={cartItems}
          setCartItems={setCartItems}
          onRemove={removeFromCart}
          addToOrders={addToOrders}
          isDrawerOpen={isDrawerOpen}

        />
        <Header onClickCart={() => setIsDrawerOpen(true)} />
        <Routes>
          <Route path="/" element={<Home
            items={items}
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            setSearchValue={setSearchValue}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            cartItems={cartItems}
            isLoading={isLoading}
          />} />
          <Route path='favorites' element={<Favorites
            addToFavorites={addToFavorites}
            addToCart={addToCart}
          />} />
          <Route path='orders' element={<Orders
            orderItems={orderItems}
          />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}



export default App;

