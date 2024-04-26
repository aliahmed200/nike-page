import { BiSun } from "react-icons/bi";
import { CiDark } from "react-icons/ci";
import { useEffect, useState } from "react";
import { SHOES } from "./Constant";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewArrivels from "./components/NewArrivels";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const FAKE_CART_ITEM_LIST = SHOES.map((shoe) => {
    return {
      product: shoe,
      qty: 1,
      size: 43,
    };
  });
  useEffect(() => {
    const isDark = localStorage.getItem("isDarkMode");
    if (isDark === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  return (
    <>
      <div className="p-10 xl:px-24 animate-faidIn dark:bg-night-500 ">
        <Nav onClickBtn={() => setIsOpen(true)} />
        <Header />
        <NewArrivels items={SHOES} />
        <Sidebar isOpen={isOpen} onClickClose={() => setIsOpen(false)}>
          <h2 className="text-2xl font-bold mb-10">Cart</h2>
          <Cart Cart_Items={FAKE_CART_ITEM_LIST} />
        </Sidebar>
      </div>
      <div className="fixed bottom-4 right-4 ">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 px-3 py-1 rounded-xl dark:bg-white dark:text-night"
        >
          <CiDark className="dark:hidden text-white" />
          <BiSun className="hidden dark:block" />
        </button>
      </div>
    </>
  );
}

export default App;
