import React from "react";

class ListItem extends React.Component {
  state = {
    isEditing: false,
    editedName: "",
    editedDescription: "",
    editedAuther: ""
  };

  resetEditingState = () => {
    this.setState({
      isEditing: false,
      editedName: "",
      editedDescription: "",
      editedAuther: ""
    });
  };

  handleChangeName = (e) => {
    const { value: editedName } = e.target;
    this.setState({ editedName });
  };
  handleChangeDescription = (e) => {
    const { value: editedDescription } = e.target;
    this.setState({ editedDescription });
  };
  handleChangeAuther = (e) => {
    const { value: editedAuther } = e.target;
    this.setState({ editedAuther });
  };
  handleEditBtnClick = () => {
    this.setState({
      isEditing: true,
      editedName: this.props.items.name,
      editedDescription: this.props.items.description,
      editedAuther: this.props.items.auther
    });
  };

  handleCancelClick = () => {
    this.resetEditingState();
  };

  handleDeleteBtnClick = () => {
    this.props.delBook(this.props.items.id);
  };

  handleSaveBtnClick = () => {
    this.props.editBook(
      this.props.items.id,
      this.state.editedName,
      this.state.editedDescription,
      this.state.editedAuther
    );
    this.resetEditingState();
  };

  render() {
    const {
      isEditing,
      editedName,
      editedDescription,
      editedAuther
    } = this.state;

    return (
      <div>
        {isEditing ? (
          <>
            <table border="1">
              <tbody>
                <tr>
                  <th>BOOKNAME </th>
                  <th>DESCRIPTION </th>
                  <th>AUTHER </th>
                  <th>Save/Cancel</th>
                </tr>
                <td>
                  <input value={editedName} onChange={this.handleChangeName} />
                </td>
                <td>
                  <input
                    value={editedDescription}
                    onChange={this.handleChangeDescription}
                  />
                </td>
                <td>
                  <input
                    value={editedAuther}
                    onChange={this.handleChangeAuther}
                  />
                </td>
                <div>
                  <td>
                    <button onClick={this.handleSaveBtnClick}>Save</button>
                  </td>
                  <td>
                    <button onClick={this.handleCancelClick}>Cancel</button>
                  </td>
                </div>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <table border="1">
              <tbody>
                <tr>
                  <th>BOOKNAME </th>
                  <th>DESCRIPTION </th>
                  <th>AUTHER </th>
                  <th>DEL/EDIT</th>
                </tr>
                <td> {this.props.items.name}</td>
                <td> {this.props.items.description}</td>
                <td> {this.props.items.auther}</td>
                <th>
                  <button onClick={this.handleDeleteBtnClick}>Delete</button>
                  <button onClick={this.handleEditBtnClick}>Edit</button>
                </th>
              </tbody>
            </table>
          </>
        )}
      </div>
    );
  }
}

export default ListItem;
