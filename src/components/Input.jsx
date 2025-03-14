import React, { useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim() !== "") {
      const formattedInput = input
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
      setList([...list, formattedInput]);
      setInput("");
    } else {
      alert("Fill the input field");
    }
  }

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto border-dashed border-2 border-gray-700 bg-white p-4 sm:p-6 md:p-8">
      <h1 className="text-center text-2xl font-black text-neutral-800 hover:underline">
        Items To Buy
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 mt-5"
      >
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Add Product"
          className="border border-gray-600 pl-3 py-2 w-full sm:w-3/4 focus:outline-none rounded-md"
        />
        <button className="bg-rose-500 text-white font-bold py-2 px-4 rounded-md w-full sm:w-1/4 hover:bg-rose-600">
          Add
        </button>
      </form>

      <ul className="mt-5 space-y-3">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-3 rounded-md shadow-md bg-gray-50"
          >
            <p
              className="text-xl font-semibold text-rose-500 truncate max-w-[75%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%]"
              title={item} // Tooltip added here
            >
              {item}
            </p>
            <button
              onClick={() => handleDelete(index)}
              className="text-gray-700 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
