// e36a424513294e0fa13fc3005d6454bf
// https://api.spoonacular.com/recipes/complexSearch?apiKey=e36a424513294e0fa13fc3005d6454bf

const baseUrl = 'https://api.spoonacular.com/';
const apiKey = 'e36a424513294e0fa13fc3005d6454bf';

function getRecipes(route = 'recipes/complexSearch', params = {}) {

    const data = {...params, apiKey: apiKey}

    $.ajax({
        method: "GET",
        url: `${baseUrl}${route}`,
        data,   
    })
    .done(response => {
debugger
    })
    .fail(response => {
        console.log(response);
    })
    .always(() =>{
        console.log('ajax completed');
    })
}

getRecipes('recipes/complexSearch', {
    diet: '1,2,3,4,5,6,7', 
    maxReadyTime: '10,11,12,13,14',
})