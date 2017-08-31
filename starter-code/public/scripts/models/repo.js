'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT:(Done) What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //This function reads the github url and goes there to extract all the repos and load it into the repos.all array, if an error occurs, it tells us.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
