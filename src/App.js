// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import Product from './components/Products/product';
import Recipes from './components/Recipes/recipes';
import Blog from './components/Blogs/blogs';
import Contact from './components/Contact/contact';
import RecipeDetail from './components/recipeDetails/recipeDetail';
import Categories from './components/Categories/categories';
import Footer from './components/Footer/footer';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className='background-black'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Product />} />
                        <Route path="/products/:categoryId" element={<Categories />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Recipe Detail Route */}
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
};

export default App;
