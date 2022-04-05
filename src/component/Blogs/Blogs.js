import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className=" mb-10">
        <h1 className=" rounded font-semibold text-xl border-2 border-gray-600 bg-slate-300 p-2 m-4">
          Q: What is Context API?
        </h1>
        <p className="text-lg font-medium border-2 bg-red-50 rounded m-4 p-2">
          A: The React Context API can be used by a React project to create
          global variables that can be passed around. This is an alternative to
          "prop drilling," in which props are passed from grandparent to child
          to parent, and so on. Context is used when multiple components at
          different nesting levels require access to the same data. Because it
          makes component reuse more difficult, it should be utilized with
          discretion. Context is also touted as a more user-friendly, lighter
          version of Redux state.
        </p>
      </div>
      <div>
        <h1 className=" rounded font-semibold text-xl border-2 border-gray-600 bg-slate-300 p-2 m-4">
          Q:What is semantic tag?
        </h1>
        <p className="text-lg font-medium border-2 bg-red-50 rounded m-4 p-2">
          A: Semantic HTML elements are those that express meaning in a form
          that is readable by both humans and machines. The elements header,
          footer, and article are all considered semantic since they
          appropriately describe the element's purpose and the type of content
          it includes. Semantic aspects also contribute to more uniform code.
          Semantic syntax is a type of HTML syntax that improves readability by
          clearly outlining the various sections and layouts of web pages. By
          making web sites more informative and adaptive, it improves the
          content interpretation of browsers and search engines.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
