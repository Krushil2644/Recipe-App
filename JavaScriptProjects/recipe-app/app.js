document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = '<p>Loading...</p>';
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => {
            app.innerHTML = data.meals.map(meal => `
                <div class="recipe">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h2>${meal.strMeal}</h2>
                    <p>${meal.strInstructions.substring(0, 100)}...</p>
                    <a href="${meal.strSource}" target="_blank">Read more</a>
                </div>
            `).join('');
        })
        .catch(error => {
            app.innerHTML = '<p>Failed to load data.</p>';
            console.error(error);
        });
});
