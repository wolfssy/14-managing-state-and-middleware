'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT(done): What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        // This displays total articles by a specific author and the numbers of words used by that author in the articles. This is an argument of the fetchAll function at the bottom of the page. numWordsByAuthor is being called by article.js
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
