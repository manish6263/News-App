import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute d-flex justify-content-end badge rounded-pill bg-danger" style={{ right: '-7px', top: '-8px' }}>{source}</span>
                <img src={imageUrl ? imageUrl : 'https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Manish Patel'} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;