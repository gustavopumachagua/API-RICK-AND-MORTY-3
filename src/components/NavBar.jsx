import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function NavBar({ page, setPage }) {
  return (
    <div className="flex justify-center relative">
      <nav className="flex flex-row space-x-4 py-2 bg-cardLight dark:bg-cardDark px-3 rounded-xl border-black border-2 fixed  bottom-6">
        <div className="flex justify-center px-2 py-2 rounded-xl bg-bodyLight dark:bg-bodyDark">
          <div className="bg-bodyLight dark:bg-bodyDark">
            <button className="text-primary dark:text-secondary font-medium">
              Jump
            </button>
            <div className="">
              <a href="#" onClick={() => setPage(10)}></a>
              <a href="#" onClick={() => setPage(20)}></a>
              <a href="#" onClick={() => setPage(30)}></a>
              <a href="#" onClick={() => setPage(40)}></a>
            </div>
          </div>
        </div>
        <div className="py-1">
          <div className="flex flex-row space-x-4">
            <AiFillCaretLeft
              className="text-3xl cursor-pointer text-primary dark:text-secondary"
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            ></AiFillCaretLeft>
            <AiFillCaretRight
              className="text-3xl cursor-pointer text-primary dark:text-secondary"
              onClick={() => {
                if (page < 42) setPage(page + 1);
              }}
            ></AiFillCaretRight>
          </div>
        </div>
        <div className="py-2 ">
          <div className="flex flex-row space-x-4 font-semibold text-primary dark:text-secondary ">
            <p>Page:</p>
            <span>{page}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { NavBar };
