import React, { Component } from 'react';
import BookCard from '../Components/BookCard';
import Wrapper from '../Components/Wrapper';
import Col from '../Components/Col';
import API from '../utils/API';
import { List } from '../Components/List';

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.saveBook()
      .then((res) =>
        this.setState({
          books: res.data.items,
        })
      )
      .catch((err) => console.log(err));
  };

  handleBookDelete = (id) => {
    API.deleteBook(id).then((res) => this.getSavedBooks());
  };

  render() {
    return (
      <Wrapper>
        <Col size="md-12">
          <h1 className="text-center">
            <strong>Google Book Search</strong>
          </h1>
          <h2 className="text-center">Save Books</h2>
        </Col>

        <Col size="md-12">
          <BookCard title="Saved Books" icon="download">
            {this.state.books.length ? (
              <List>
                {this.state.books.map((item) => (
                  <Col
                    size="md-12"
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    link={item.link}
                    authors={item.authors}
                    description={item.description}
                    image={item.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(item.id)}
                        className="btn btn-danger ml-2"
                      >
                        Delete
                      </button>
                    )}
                  />
                ))}
              </List>
            ) : (
              <h2 className="text-center">No Saved Books</h2>
            )}
          </BookCard>
        </Col>
      </Wrapper>
    );
  }
}

export default Saved;
