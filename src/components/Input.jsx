import React from "react";
import { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(by) {
    setInput(by.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      setList([...list, input.toUpperCase()]);
      setInput("");
    } else {
      alert("Fill the input field");
    }
  }

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className=" w-[55rem] mx-auto border-dashed border-2 border-gray-700 bg-white ">
      <h1 className=" text-center hover:text-black font-black text-neutral-800 text-2xl hover:underline mt-5 ">
        Items To Buy
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className=" flex justify-center mt-5 space-x-8 mb-5 "
        >
          <input
            value={input}
            onChange={handleChange}
            required
            type="text"
            placeholder="Add Product"
            className=" border-[0.12rem] pl-3 w-[20rem] border-gray-600 focus:outline-none h-9 "
          ></input>
          <button className=" bg-rose-500 w-[8rem] text-fuchsia-50 font-bold h-9 hover:cursor-grab ">
            Add
          </button>
        </form>
      </div>
      <ul className=" mb-4 ">
        {list.map((item, index) => (
          <li key={index}>
            <div className=" flex justify-between items-center mt-2 w-[50rem] mx-auto ">
              {/* <h3 className=" text-xl font-semibold text-rose-500 ml-4  "> */}
              <p className="max-w-[35rem] text-xl font-semibold text-rose-500 ml-4 ">
                {item}
              </p>
              {/* {item} */}
              {/* </h3> */}
              {/* <button> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-8 w-8 mr-4 cursor-pointer "
                onClick={() => handleDelete(index)}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* </button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
