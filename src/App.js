import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./About";
import Cart from "./Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./Contact";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";
import { AppProvider } from "./context/productcontex";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const App = () => {
    const theme = {
        colors: {
            heading: "rgb(24 24 29)",
            text: "rgba(29 ,29, 29, .8)",
            white: "#fff",
            black: " #212529",
            helper: "green",

            bg: "rgb(234, 247, 240)",
            // footer_bg: "#0a1435",
            footer_bg: "#10331E",
            btn: "rgb(50, 144, 87)",
            border: "rgba(50, 144, 87, 0.9 )",  
            hr: "#ffffff",
            gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
            shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
            shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
        },
        media: {
            mobile: "768px",
            tab: "998px",
        },
    };
    return (
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/singleProduct/:id" element={<SingleProduct />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                        <Footer />
                    </ThemeProvider>
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    );
};

export default App;
