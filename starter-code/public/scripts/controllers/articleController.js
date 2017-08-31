'use strict';
var app = app || {};

(function(module) {
  const articleController = {};

  // COMMENT:(done) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //This function is loading the specific article that is selected by pulling it from articleView.  It's called on page load because its encapsulated in an IIFE.  articleView.index lives in articleView.js
  articleController.index = (ctx) => app.articleView.index(ctx.articles);

  // REVIEW: Middleware for grabbing one article by ID:
  articleController.loadById = (ctx, next) => {
    let articleData = article => {
      ctx.articles = article;
      next();
    };

    // COMMENT:(done) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
    //Its looking for the specific article and loading the context. Its called when user types into the URL. Its called from this IIFE in this js file. findWhere is in article.js, it's a method to query the DB for a record, based on criteria.
    app.Article.findWhere('article_id', ctx.params.article_id, articleData);
  };

  // REVIEW: Middleware for loading up articles by a certain author:
  articleController.loadByAuthor = (ctx, next) => {
    let authorData = articlesByAuthor => {
      ctx.articles = articlesByAuthor;
      next();
    };

    app.Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // REVIEW: Middleware for grabbing all articles with a certain category:
  articleController.loadByCategory = (ctx, next) => {
    let categoryData = articlesInCategory => {
      ctx.articles = articlesInCategory;
      next();
    };

    app.Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // REVIEW: Middleware for grabbing ALL articles:
  articleController.loadAll = (ctx, next) => {
    let articleData =  () => {
      ctx.articles = app.Article.all;
      next();
    };

    if (app.Article.all.length) {
      ctx.articles = app.Article.all;
      next();
    } else {
      app.Article.fetchAll(articleData);
    }
  };

  module.articleController = articleController;
})(app);
