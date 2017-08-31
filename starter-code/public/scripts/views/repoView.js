'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // COMMENT(done): What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // ui() relates to the about link on the nave bar in the HTML. This function pulls up the about page and empties it then shows the repo information while hiding any about siblings. Called on page load when user selects 'about'. The page load then loads info from repos.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
