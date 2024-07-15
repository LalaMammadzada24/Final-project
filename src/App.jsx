import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/layouts/Header'
import Home from './pages/Home'
import Footer from './components/layouts/Footer'
import Blog from './pages/Blog'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import { ModeContext } from './context/ModeContext'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/update/AddBlog'
import BlogDetails from './pages/admin/BlogDetails'
import Login from './pages/Login'
import EditBlog from './pages/admin/update/EditBlog'
import {createStore} from 'redux'
import NotFoundPage from './pages/NotFoundPage'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import ForgotPassword from './pages/ForgotPassword'
import UserAccount from './pages/UserAccount'
import ChangePassword from './pages/ChangePassword'
import WriteMessage from './pages/WriteMessage'
import WishList from './pages/WishList'
import Checkout from './pages/Checkout'
import FAQ from './pages/FAQ'
import ThankYou from './pages/ThankYou'
import Preloader from './components/Preloader'


const reducer = (state={count:0},action)=>{
    switch (action.type) {
        case "ADD_BLOG":
           return {count:state.count+(typeof(action.payload) === "number" ? action.payload:1 )};
        
        default:
            return state;
    }
}
const store = createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})


const App = () => {
    const [mode] = useContext(ModeContext)
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },2500);
    },[])
    return (

        <>
        {loading ? (<Preloader/>):
            (
                <BrowserRouter>
            <div className={mode}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                <Route path='/shop/:url' element={<ProductDetails />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/dashboard/add' element={<AddBlog />}></Route>
                <Route path='/dashboard/edit/:slug' element={<EditBlog />}></Route>
                <Route path='/blog/:slug' element={<BlogDetails />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
                <Route path='/useraccount' element={<UserAccount />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/changepassword' element={<ChangePassword />}></Route>
                <Route path='/writemessage' element={<WriteMessage />}></Route>
                <Route path='/wishlist' element={<WishList />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/faq' element={<FAQ />}></Route>
                <Route path='/thankyou' element={<ThankYou />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
            <Footer/>
            </div>
        </BrowserRouter>
            )}
        </>
    )
}

export default App