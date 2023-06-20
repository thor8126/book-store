import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CheckoutPage from "./components/CheckoutPage";
import Cart from "./components/Cart";
import Profile from "./components/Profile";

export default function App() {
  const { isAuthenticated, user } = useAuth0();
  const [isLoading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoading && <Navbar user={user} theme={theme} setTheme={setTheme} />}
      {isLoading && <Loader />}
      <div className="px-24">
        {!isLoading && (
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route
              exact
              path="/cart"
              element={isAuthenticated && <Cart user={user} />}
            />
            <Route
              exact
              path="/profile"
              element={isAuthenticated && <Profile user={user} />}
            />
            <Route
              exact
              path="/checkout"
              element={isAuthenticated && <CheckoutPage user={user} />}
            />
          </Routes>
        )}
      </div>
    </>
  );
}
