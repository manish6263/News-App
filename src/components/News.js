import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import NewsItem from './NewsItem';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
    }
    async componentDidMount() {
        this.updateNews();
    }
    handleNextCLick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    handlePrevCLick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=796516bf9f074075b781dadb0c722475&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        });
    }
    capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    render() {
        return (
            <div className='container-my-3'>
                <h1 className="text-center my-4">NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type='button' onClick={this.handlePrevCLick} className="btn btn-dark btn-sm">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil()} type='button' onClick={this.handleNextCLick} className="btn btn-dark btn-sm">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;