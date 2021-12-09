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
    tags: '1',
})



/*

{
  "slug": "the-last-of-us-remastered",
  "name": "The Last Of Us Remastered",
  "playtime": 16,
  "platforms": [
    {
      "platform": {
        "id": 18,
        "name": "PlayStation 4",
        "slug": "playstation4"
      }
    }
  ],
  "stores": [
    {
      "store": {
        "id": 3,
        "name": "PlayStation Store",
        "slug": "playstation-store"
      }
    }
  ],
  "released": "2014-07-29",
  "tba": false,
  "background_image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
  "rating": 4.69,
  "rating_top": 5,
  "ratings": [
    {
      "id": 5,
      "title": "exceptional",
      "count": 1893,
      "percent": 77.08
    },
    {
      "id": 4,
      "title": "recommended",
      "count": 438,
      "percent": 17.83
    },
    {
      "id": 3,
      "title": "meh",
      "count": 91,
      "percent": 3.71
    },
    {
      "id": 1,
      "title": "skip",
      "count": 34,
      "percent": 1.38
    }
  ],
  "ratings_count": 2432,
  "reviews_text_count": 17,
  "added": 7450,
  "added_by_status": {
    "yet": 224,
    "owned": 4606,
    "beaten": 2107,
    "toplay": 196,
    "dropped": 163,
    "playing": 154
  },
  "metacritic": 95,
  "suggestions_count": 470,
  "updated": "2020-05-28T09:59:38",
  "id": 3636,
  "score": null,
  "clip": null,
  "tags": [
    {
      "id": 7,
      "name": "Multiplayer",
      "slug": "multiplayer",
      "language": "eng",
      "games_count": 28238,
      "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    },
    {
      "id": 13,
      "name": "Atmospheric",
      "slug": "atmospheric",
      "language": "eng",
      "games_count": 17669,
      "image_background": "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
    },
    {
      "id": 1,
      "name": "Survival",
      "slug": "survival",
      "language": "eng",
      "games_count": 5448,
      "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
    },
    {
      "id": 15,
      "name": "Stealth",
      "slug": "stealth",
      "language": "eng",
      "games_count": 4378,
      "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
    },
    {
      "id": 97,
      "name": "Action RPG",
      "slug": "action-rpg",
      "language": "eng",
      "games_count": 4053,
      "image_background": "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
    },
    {
      "id": 63,
      "name": "Zombies",
      "slug": "zombies",
      "language": "eng",
      "games_count": 7716,
      "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
    },
    {
      "id": 69,
      "name": "Action-Adventure",
      "slug": "action-adventure",
      "language": "eng",
      "games_count": 9372,
      "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
    },
    {
      "id": 37796,
      "name": "exclusive",
      "slug": "exclusive",
      "language": "eng",
      "games_count": 4513,
      "image_background": "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg"
    },
    {
      "id": 478,
      "name": "3rd-Person Perspective",
      "slug": "3rd-person-perspective",
      "language": "eng",
      "games_count": 85,
      "image_background": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
    }
  ],
  "esrb_rating": {
    "id": 4,
    "name": "Mature",
    "slug": "mature",
    "name_en": "Mature",
    "name_ru": "С 17 лет"
  },
  "user_game": null,
  "reviews_count": 2456,
  "saturated_color": "0f0f0f",
  "dominant_color": "0f0f0f",
  "short_screenshots": [
    {
      "id": -1,
      "image": "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg"
    },
    {
      "id": 208251,
      "image": "https://media.rawg.io/media/screenshots/5a7/5a74e852355169e1767f3b59d5488829.jpeg"
    },
    {
      "id": 208252,
      "image": "https://media.rawg.io/media/screenshots/a4b/a4b8e8d4d56d1889f76872da7364e406.jpeg"
    },
    {
      "id": 208253,
      "image": "https://media.rawg.io/media/screenshots/1ba/1babd5640e3eed7646b6f2834daab303.jpeg"
    },
    {
      "id": 208254,
      "image": "https://media.rawg.io/media/screenshots/9ce/9ce9018611e2931782b87ef8b4bcd012.jpeg"
    },
    {
      "id": 208255,
      "image": "https://media.rawg.io/media/screenshots/5c9/5c9c1f58a945bb06f5467587a9d6d0e4.jpeg"
    },
    {
      "id": 208256,
      "image": "https://media.rawg.io/media/screenshots/6ea/6ea8e1f3d812f7218f9205c1dd658147.jpeg"
    }
  ],
  "parent_platforms": [
    {
      "platform": {
        "id": 2,
        "name": "PlayStation",
        "slug": "playstation"
      }
    }
  ],
  "genres": [
    {
      "id": 3,
      "name": "Adventure",
      "slug": "adventure"
    },
    {
      "id": 4,
      "name": "Action",
      "slug": "action"
    }
  ]
}

*/


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
    // Get selected year
    const timeRange = getDateRangeObject()
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
    renderGamwList();
})


getGames(this.getGameParams());
*/