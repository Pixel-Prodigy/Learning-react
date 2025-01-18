import "./App.css";
import React, { useState } from "react";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
// } from "@heroui/react";

function App() {
  const [style, setStyle] = useState("");

  function handleClick(clickType) {
    switch (clickType) {
      case "uppercase":
        setStyle((prevStyle) =>
          prevStyle.includes("uppercase")
            ? prevStyle.replace("uppercase", "").trim()
            : `${prevStyle} uppercase`
        );
        break;
      case "lowercase":
        setStyle((prevStyle) =>
          prevStyle.includes("lowercase")
            ? prevStyle.replace("lowercase", "").trim()
            : `${prevStyle} lowercase`
        );
        break;
      case "cursive":
        setStyle((prevStyle) =>
          prevStyle.includes("italic")
            ? prevStyle.replace("italic", "").trim()
            : `${prevStyle} italic`
        );
        break;
      case "italic":
        setStyle((prevStyle) =>
          prevStyle.includes("italic")
            ? prevStyle.replace("italic", "").trim()
            : `${prevStyle} italic`
        );
        break;
      default:
        break;
    }
  }

  return (
    <>
      {/* <header>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Open Menu</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </header> */}

      <div className="flex flex-col items-center justify-between h-[500px] pt-8">
        <div>
          <h1 className="text-[2.8rem] font-[700]">Customise Text</h1>
          <p className="text-center">Just enter text and choose what to do</p>
        </div>

        <div className="flex flex-col h-fit">
          <textarea
            placeholder="Enter text"
            className={`h-16 p-3 mb-1 rounded-md max-h-24 min-h-16 max-w-48 ${style}`}
          ></textarea>

          <button
            className="bg-blue-500 border-none btn max-w-48 btn-primary"
            onClick={() => handleClick("uppercase")}
          >
            u
          </button>

          <button
            className="mt-1 bg-blue-600 border-none btn max-w-48 btn-primary"
            onClick={() => handleClick("lowercase")}
          >
            l
          </button>

          <button
            className="mt-1 bg-blue-500 border-none btn max-w-48 btn-primary"
            onClick={() => handleClick("cursive")}
          >
            c
          </button>

          <button
            className="mt-1 bg-blue-600 border-none btn max-w-48 btn-primary"
            onClick={() => handleClick("italic")}
          >
            i
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
