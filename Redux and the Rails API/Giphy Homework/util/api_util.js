export const fetchSearchGiphys = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ZuP6ZtbKffSQkxZhRHgjb6OLjnjUv0Jp&limit=2"`
    })
);