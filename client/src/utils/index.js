import React from 'react';
import BookCard from '../Components/BookCard';
import SearchForm from '../Components/SeachForm';
import Wrapper from '../Components/Wrapper';
import Col from '../Components/Col';
import API from './API';
import './App.css';

class Search extends React.Component {
  state = { books: [], search: '' };

  componentDidMount() {
    this.searchBooks(
      'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
    );
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchBooks = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({
          books: res.data.items.map((e, i) => ({
            title: e.volumeInfo.title,
            authors: e.volumeInfo.authors,
            description: e.volumeInfo.description,
            image: e.volumeInfo.imageLinks.thumbnail,
            link: e.volumeInfo.previewLink,
            key: e.id,
          })),
        });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handle', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Wrapper>
        <div className="container fluid">
          <div className="row">
            <Col size="md-6">
              <h2>Book Search</h2>
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

          <div className="row">
            <Col size="md-12">
              {[...this.state.books].map((item) => (
                <BookCard
                  title={item.title}
                  authors={item.authors}
                  description={item.description}
                  image={item.image}
                  link={item.link}
                  key={item.key}
                />
              ))}
            </Col>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Search;
