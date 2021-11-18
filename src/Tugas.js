import React, { Component } from "react";

class Tugas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((parsedJSON) =>
        parsedJSON.data.map((item) => ({
          id: `${item.id}`,
          email: `${item.email}`,
          firstName: `${item.first_name}`,
          lastName: `${item.last_name}`,
          image: `${item.avatar}`,
        }))
      )
      .then((items) =>
        this.setState({
          items,
          isLoaded: false,
        })
      )
      .catch((error) => console.log("parsing failed", error));
  }

  render() {
    const { items } = this.state;
    return (
      <div className="boxWhite">
        <h2>List Users</h2>
        {items.length > 0
          ? items.map((item) => {
              const { id, firstName, lastName, image } = item;
              return (
                <div key={id} className="bgCircle">
                  <center>
                    <img src={image} alt={firstName} className="circle" />{" "}
                  </center>
                  <br />
                  <div className="ctr">
                    {firstName} {lastName}
                    <br />
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Tugas;
