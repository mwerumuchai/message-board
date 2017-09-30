import Ember from 'ember';

export function categoryPopularity(params) {
  var category = params[0];
  var popularity;

  if (category.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>');
  } else if (category.get('answers').get('length') <= 2) {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-pencil"></span><span>Let us discuss more</span>');
  } else {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span>Hot Topic!</span>');
  }
  return popularity;
}

export default Ember.Helper.helper(categoryPopularity);
