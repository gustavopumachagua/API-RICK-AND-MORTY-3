import React from "react";

function Main(props) {
  return (
    <main className="bg-bodyLight dark:bg-bodyDark px-8 py-8 md:px-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {props.children}
    </main>
  );
}

export { Main };
