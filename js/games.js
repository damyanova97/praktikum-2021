// b3aa62f3a7e64bb489c3401737851eb9
// https://api.rawg.io/api/genres?key=b3aa62f3a7e64bb489c3401737851eb9

const baseUrl = 'https://api.rawg.io/api/';
const key = 'b3aa62f3a7e64bb489c3401737851eb9';

let view = 'list';
let games = [];

function getGames(params = {}) {

    const data = {...params, key: key}
    const route = 'games';
    $.ajax({
        method: "GET",
        url: `${baseUrl}${route}`,
        data,
    })
    .done(response => {
       // games = response.results;
       // renderGameList();
       renderGameList(response.results);
    })
    .fail(response => {
        console.log(response);
    })
    .always(() => {
        console.log('ajax completed');
    })
}

function renderGameList(games = []) {
    games.forEach(game => {
        console.log(game);
    })
}

function renderGame(game){
    const $template = $($('#game-template').html());
    $template.find('.game-name').text(game.name);
    $template.find('.game-released').text(game.released);
    $template.find('.game-rating').text(game.rating);
    $template.find('.game-genres').text(game.genres);
    $('#game-list').append($template);
}

getGames('games', {
    genres: '4,1',
    tags: '7',
})

/*
function renderGameList(){
    $gameList = $('#game-list');
    $gameList.empty();
    games.forEach(game => {
        const $template = getGameTemplate(game);
        $gameList.append($template);
    })
}

function getGameParams() {
    // Get genres from checked checkboxes
    const genres = [];
    $('.genre-checkbox:checked').each((index, el) => {
        genres.push(el.value);
    })
    // Get tags from checked checkboxes
    const tags = [];
    $('.tags-checkbox:cheked').each((index, el) => {
        tags.push(el.value);
    })
    
    const sortBy = $('#filter-sort').val();
    const params = {genres: genres.join(), tags: tags.join(), ordering: sortBy,}
    return params;
}

$('#get-games').click(()=> {
    getGames(this.getGameParams());
})

$('#grid-view').click(e => {
    view = 'grid';
    $(e.currentTarget).addClass('btn-primary').removeClass('btn-outline-primary');
    $('#list-view').addClass('btn-outline-primary').removeClass('btn-primary');
    renderGameList();
})

$('#list-view').click(e => {
    view = 'list';
    $(e.currentTarget).addClass('btn-primary').removeClass('btn-outline-primary');
    $('#grid-view').addClass('btn-outline-primary').removeClass('btn-primary');
    renderGameList();
})


getGames(this.getGameParams());
*/