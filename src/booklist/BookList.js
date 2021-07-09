import React from "react";
//import Form from "../login/components/Form";
import BooklistForm from "../booklist/components/BooklisForm";
import List from "../booklist/components/List";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "Jane Eyre",
          description:
            "The novel follows the story of Jane, a seemingly plain and simple girl as she battles through life's struggles. Jane has many obstacles in her life - her cruel and abusive Aunt Reed, the grim conditions at Lowood school, her love for Rochester and Rochester's marriage to Bertha.",
          auther: "Charlotte Bronte",
          id: Math.random()
        },
        {
          name: "The Count of Monte Cristo",
          description:
            "The theme of The Count of Monte Cristo is one of vengeance and forgiveness, power and powerlessness. When Dantes is unfairly given a life-prison sentence by his enemies (Villefort, Danglars, and Fernand), he spends every waking moment planning his revenge.",
          auther: "Alexandre Dumas",
          id: Math.random()
        },
        {
          name: "Manon Lescaut",
          description:
            " It is the story of a lovely young woman, Manon, who is being taken by her brother to live in a convent. Des Grieux, a local student, is overwhelmed by Manon's beauty and falls madly in love with her at first sight.",
          auther: "Antoine François Prévost",
          id: Math.random()
        },
        {
          name: "Three Comrades",
          description:
            "Three Comrades, written by German writer Erich Maria Remarque, is one of the most famous novels in history. The plot develops around three wartime friends, and a girl they meet by accident, who try to make ends meet in a difficult post-war period.",
          auther: "Erich Maria Remarque"
        }
      ]
    };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value
    });
  };
  handleDescription = (e) => {
    this.setState({
      description: e.target.value
    });
  };
  handleAuthor = (e) => {
    this.setState({
      auther: e.target.value
    });
  };

  addBook = (e) => {
    e.preventDefault();
    const newBooks = [...this.state.items];
    if (this.state.name && this.state.description && this.state.auther) {
      newBooks.push({
        name: this.state.name,
        description: this.state.description,
        auther: this.state.auther,
        id: Math.random()
      });
    }
    this.setState({
      items: newBooks,
      name: "",
      description: "",
      auther: ""
    });
  };

  delBook = (id) => {
    const newItems = [...this.state.items];
    const index = this.state.items.findIndex((el) => el.id === id);
    newItems.splice(index, 1);
    this.setState({
      items: newItems
    });
  };

  editBook = (id, newname, newdescription, newauther) => {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.id !== id) return { ...item };
        return {
          ...item,
          name: newname,
          description: newdescription,
          auther: newauther
        };
      })
    });
  };

  render() {
    return (
      <>
        <BooklistForm
          name={this.state.name}
          description={this.state.description}
          auther={this.state.auther}
          handleName={this.handleName}
          handleDescription={this.handleDescription}
          handleAuthor={this.handleAuthor}
          addBook={this.addBook}
        />
        <List
          items={this.state.items}
          delBook={this.delBook}
          editBook={this.editBook}
          logout={this.props.logout}
        />
      </>
    );
  }
}

export default BookList;
