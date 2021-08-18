/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');
Before(({ I }) => {
  I.amOnPage('/#/like');
});
Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Restaurant yang dicari gaada !', '.card-container ');
  I.amOnPage('/');
  I.seeElement('.card-title a');
  const Restaurantpertama = locate('.card-title a').first();
  const TitleRestaurantpertama = await I.grabTextFrom(Restaurantpertama);
  I.click(Restaurantpertama);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card-container');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title');
  assert.strictEqual(TitleRestaurantpertama, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('Restaurant yang dicari gaada !', '.card-container ');
  I.amOnPage('/');
  I.seeElement('.card-title a');
  I.click(locate('.card-title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  const Restaurantpertama = locate('.card-container a').first();
  const TitleRestaurantpertama = await I.grabTextFrom(Restaurantpertama);
  I.click(Restaurantpertama);

  const likedRestaurantTitle = await I.grabTextFrom('.posts h2');
  assert.strictEqual(TitleRestaurantpertama, likedRestaurantTitle);
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/like');
  I.see('Restaurant yang dicari gaada !', '.card-container');
});
