import React from "react";

function Footer({ length }) {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <p>
        {length === 0
          ? `No items in Your List`
          : length === 1
          ? `${length} List item`
          : `${length} List items`}
      </p>
      Copy rights &copy; {year}
    </footer>
  );
}

export default Footer;
