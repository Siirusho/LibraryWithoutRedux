import ListItem from "./ListItem";
import React from "react";
import "../Style.css";

class List extends React.Component {
  render() {
    const { items, editBook, delBook, logout } = this.props;
    if (!items.length)
      return <div className="bookslist">There are no items</div>;
    return (
      <div>
        <>
          <div className="bookslist">
            <h2>View Books</h2>
            {items.map((items) => (
              <ListItem
                key={items.id}
                items={items}
                delBook={delBook}
                editBook={editBook}
              />
            ))}
            <button id="logout" onClick={logout}>
              Log out
            </button>
          </div>
        </>
      </div>
    );
  }
}

export default List;
