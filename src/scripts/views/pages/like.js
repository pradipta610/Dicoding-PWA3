/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <h1>Favorite Restaurant </h1>
        <div id="card-container" class="card-container">
  </div>
         
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#card-container');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = 'Restaurant yang dicari gaada !';
      restaurantsContainer.style.minHeight = '10vh';
    }
  },
};

export default Like;
