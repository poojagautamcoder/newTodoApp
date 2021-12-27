import React, { useState, useEffect } from "react";
import styles from "../styles/AddUser.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { elementAcceptingRef } from "@mui/utils";
import { type } from "@testing-library/user-event/dist/type";
import { TiTickOutline } from "react-icons/ti";
import { border, color } from "@mui/system";
import { red } from "@mui/material/colors";

// get the localStorage data back
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const AddUser = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [FilterItem, setFilterItem] = useState([]);
  const [style, setStyle] = useState("cont");

  //checkbox status
  const handleOnChange = (id) => {
    const newArray = items.map((curElem, index) => {
      console.log(curElem);
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
    console.log("jhdfjhfgdfhjg");
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
    console.log(value);
    if (value === "all") {
      setFilterItem(items);
      setItems(items);
      console.log(items);
    } else if (value === "completed") {
      let newTodo = items.filter((todo) => todo.status === true);
      console.log(newTodo);
      setFilterItem(newTodo);
      setItems(newTodo);
    } else if (value === "incomplete") {
      let newTodo = items.filter((todo) => todo.status === false);
      console.log(newTodo);
      setFilterItem(newTodo);
      setItems(newTodo);
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
      // console.log("hello");
      // console.log(event.key);
      addItem();
    }
  };

  // Input Box Style
  const changeStyle = () => {
    console.log("you just clicked");

    setStyle("inputstyle");
  };

  return (
    <>
      <div className="textend">
        <h2 className="heading">Todos List</h2>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍ Add Item"
            className="form-control  inputstyle"
            value={inputdata}
            onChange={(event) => setInputData(event.target.value)}
            onKeyDown={handleKeyDown}
            onClick={changeStyle}
          />
          <button onClick={addItem} className="btn-addtodo">
            +
          </button>
        </div>
        <div className="dynamic-filter">
          <div className="filter">
            <button
              type="button"
              className="btn toggle-btn"
              aria-pressed={FilterItem}
              onClick={(e) => handleFilter(e)}
              value={"all"}
            >
              All{items.status}
            </button>
            <button
              type="button"
              className="btn toggle-btn"
              aria-pressed={FilterItem}
              onClick={(e) => handleFilter(e)}
              value={"completed"}
            >
              Completed{items.status}
            </button>
            <button
              type="button"
              className="btn toggle-btn"
              aria-pressed={FilterItem}
              onClick={(e) => handleFilter(e)}
              value={"incomplete"}
            >
              Incomplete{items.status}
            </button>
          </div>
        </div>

        {/* show our items  */}
        <div className="showItems">
          {items.map((curElem) => {
            return (
              <div className="eachItem" key={curElem.id}>
                <div className="result">
                  <input
                    id="id"
                    type="checkbox"
                    value="checked"
                    // checked = {elm.status ? true:false}
                    // this is not required every time we can do also elm.status
                    checked={curElem.status}
                    onChange={() => handleOnChange(curElem.id)}
                    className="check"
                  />
                </div>

                <div>
                  {/* {JSON.stringify(curElem)} */}
                  {curElem.edit ? (
                    <input
                      type="text"
                      key={curElem.id}
                      className="form-control"
                      value={isEditItem}
                      onChange={(event) => setIsEditItem(event.target.value)}
                    />
                  ) : (
                    <h3 className="heading">{curElem.name}</h3>
                  )}
                </div>

                <div className="todo-btn">
                  <>
                    {curElem.edit ? (
                      <>
                        <div className="tick-cross">
                          <button
                            onClick={() => editItem(curElem.id)}
                            className="cross"
                          >
                            x
                          </button>
                          <button>
                            {" "}
                            <TiTickOutline
                              onClick={() => saveItem(curElem.id)}
                              className="tick"
                            />{" "}
                          </button>
                        </div>
                      </>
                    ) : (
                      <AiFillEdit
                        onClick={() => {
                          editItem(curElem.id, "edit");
                          setIsEditItem(curElem.name);
                        }}
                        edit={curElem.edit}
                        className="writebtn"
                      />
                    )}
                  </>

                  <AiFillDelete
                    onClick={() => deleteItem(curElem.id)}
                    className="dangerbtn"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddUser;
