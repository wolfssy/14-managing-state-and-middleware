'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT:(done) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // It's showing the about section and hiding any siblings attached to it.  The file that the function lives in is repo.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
