import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./main.css";
import { useState, useEffect } from "react";
import AddItems from "./AddItems";
import Search from "./Search";

function App() {
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  // const API_URL = "http://localhost:3500/items";
  // const [fetchError, setFetchError] = useState(null);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to_do_list")) || []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isModel, setIsModel] = useState(false);

  // useEffect(() => {
  //   // const fecthItems = async () => {
  //   //   try {
  //   //     const response = await fetch(API_URL);
  //   //     if (!response.ok) throw Error("Data not Received from Server");
  //   //     const listItems = await response.json();
  //   //     console.log(listItems);
  //   //     local(listItems);
  //   //     setFetchError(null);
  //   //   } catch (err) {
  //   //     setFetchError(err.message);
  //   //   } finally {
  //   //     setIsLoading(false);
  //   //   }
  //   // };
  //   setTimeout(() => {}, 2000);
  // }, []);

  function local(pass) {
    setItems(pass);
    localStorage.setItem("to_do_list", JSON.stringify(pass));
  }

  async function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newList = { id, checkeda: false, item };
    const listItems = [...items, newList];
    local(listItems);

    // const postOption = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newItem),
    // };
    // const result = await apiRequest(API_URL, postOption);
    // if (result) {
    //   setFetchError(result);
    // }
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    local(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    local(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") {
      setIsModel(true);
    } else {
      console.log(newItem);
      // add Items
      addItem(newItem);
      setNewItem("");
    }
  };

  const handleCloseModel = () => {
    setIsModel(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <main>
        {isLoading && <div id="load"></div>}
        {/* {fetchError && <p id="error">{`Error : ${fetchError}`}</p>} */}
        {!isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
      {isModel && (
        <div className="model" onClick={handleCloseModel}>
          <div className="model-content">
            <p>First Enter the value then press Enter</p>
            <button className="clsBtn">Okay</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
