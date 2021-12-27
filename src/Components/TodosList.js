import React from "react";
import styles from "../styles/List.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";

const TodosList = (props) => {

 const {items,handleFilter,FilterItem, handleOnChange, isEditItem, setIsEditItem, editItem , saveItem, deleteItem}=props;
  
    return(
               
               <div className="showItems">
               {FilterItem.map((curElem) => {
                 return (
                   <div className="eachItem" key={curElem.id}>
                     <div className="result">
                       <input
                         id="id"
                         type="checkbox"
                         value="checked"
                         checked={curElem.status}
                         onChange={() => handleOnChange(curElem.id)}
                         className="check"
                       />
                     </div>
     
                     <div>
                       {curElem.edit ? (
                         <input
                           type="text"
                           key={curElem.id}
                           className=" output-form"
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
    )
}
export default TodosList ;