import React, { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm";
import Filterdynamic from "../Components/Filterdynamic";
import TodosList from "../Components/TodosList";
import styles from "../styles/Home.css";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Home = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [FilterItem, setFilterItem] = useState([]);
  const [style, setStyle] = useState("cont");

  //checkbox status
  const handleOnChange = (id) => {
    const newArray = items.map((curElem, index) => {
      if (curElem.id == id) {
        return {
          ...curElem,
          status: !curElem.status,
        };
      } else {
        return curElem;
      }
    });
    setItems(newArray);
  };

  const editItem = (id, type) => {
    const updateEdit = items.map((curElem) => {
      if (curElem.id == id) {
        return {
          ...curElem,
          edit: type === "edit" ? true : false,
        };
      } else {
        return curElem;
      }
    });
    setItems(updateEdit);
  };
  // how to delete items section
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // add the items fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
      console.log(inputdata);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
        status: false,
        edit: false,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  // save sedited area
  const saveItem = (id) => {
    const updateTodo = items.map((curElem) => {
      if (curElem.id == id) {
        return { ...curElem, name: isEditItem, edit: false };
      } else {
        return curElem;
      }
    });
    setItems(updateTodo);
  };

  // filter
  const handleFilter = (e) => {
    let value = e.target.value;

    if (value === "all") {
      setFilterItem(items);
    } else if (value === "completed") {
      let newTodo = items.filter((todo) => todo.status === true);

      setFilterItem(newTodo);
    } else if (value === "incomplete") {
      let newTodo = items.filter((todo) => todo.status === false);

      setFilterItem(newTodo);
    }
  };

  useEffect(() => {
    setFilterItem([...items]);
  }, [items]);

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  // enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const enterKeyPress = (event) => {
    if (event.key === "Enter") {
      //  console.log(saveItem);
      saveItem();
    }
  };

  // Input Box Style
  const changeStyle = () => {
    setStyle("inputstyle");
  };

  return (
    <div>
      <div className="Outerbox">
        <div className="textend">
          <TodoForm
            items={items}
            handleFilter={handleFilter}
            setInputData={setInputData}
            inputdata={inputdata}
            changeStyle={changeStyle}
            addItem={addItem}
            handleKeyDown={handleKeyDown}
          />
          <Filterdynamic
            items={items}
            handleFilter={handleFilter}
            FilterItem={FilterItem}
          />
          <TodosList
            FilterItem={FilterItem}
            handleOnChange={handleOnChange}
            isEditItem={isEditItem}
            setIsEditItem={setIsEditItem}
            editItem={editItem}
            saveItem={saveItem}
            deleteItem={deleteItem}
            enterKeyPress={enterKeyPress}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
