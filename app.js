const img = document.querySelector('.gif');
const searchBtn = document.querySelector('#search-btn')
const searchBar = document.querySelector('#search-bar');


searchBtn.onclick = () => {

    let searchTerm = searchBar.value;


    const fetchObj = fetch(getURL(searchTerm), { mode: 'cors' })
    .then(resp => {
        return resp.json();
    })
    .then(resp => {
        img.src = resp.data.images.original.url;
        console.log(resp);
    })
    .catch(err=>{
        console.error('Sorry, no results. Try a different term', err);
        img.src = 'https://media3.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=f638e9eei7il582ccmxz0mo61g8o3ygajhbz22j1aldupo2i&rid=giphy.gif&ct=g%22';
    })

}


function getURL(searchTerm) {
    return new URL('https://api.giphy.com/v1/gifs/translate?api_key=SNvI9D9CkRtUv0BOr2FMe34w71wrwUo8&s=' + searchTerm);
}
