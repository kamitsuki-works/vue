(function() {
  $(function() {
    var jsonUri, search, table;
    jsonUri = "../data/recipe.json";
    search = new Vue({
      el: '#search',
      data: {
        word: ''
      }
    });
    table = new Vue({
      el: '#recipe',
      data: {
        recipes: []
      },
      computed: {
        filterRecipe: function() {
          return this.recipes.filter(function(r) {
            return (search.word == null) || r.item.indexOf(search.word) > -1 || ((r.base1 != null) && r.base1.indexOf(search.word) > -1) || ((r.base2 != null) && r.base2.indexOf(search.word) > -1) || ((r.base3 != null) && r.base3.indexOf(search.word) > -1) || ((r.base4 != null) && r.base4.indexOf(search.word) > -1);
          });
        }
      }
    });
    $.getJSON(jsonUri, function(json) {
      table.recipes = json.recipe;
      return $('#msg').text(json.msg);
    });
  });

}).call(this);
