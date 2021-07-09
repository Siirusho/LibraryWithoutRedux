import React from "react";

class BooklistForm extends React.Component {
  render() {
    const {
      name,
      description,
      auther,
      handleName,
      handleDescription,
      handleAuthor,
      addBook
    } = this.props;
    return (
      <div id="addbookform">
        <h1> Library </h1>
        <h3>Create new book</h3>
        <form onSubmit={addBook}>
          <input
            placeholder="Enter BookName"
            value={name}
            onChange={handleName}
          />
          <input
            placeholder="Enter Descrption"
            value={description}
            onChange={handleDescription}
          />
          <input
            placeholder="Enter Auther"
            value={auther}
            onChange={handleAuthor}
          />
          <button>Add book</button>
        </form>
      </div>
    );
  }
}
export default BooklistForm;
