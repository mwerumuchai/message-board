import Ember from 'ember';

export function categoryPopularity(params) {
  var category = params[0];

  if(category.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>');
  }
}

export default Ember.Helper.helper(categoryPopularity);
