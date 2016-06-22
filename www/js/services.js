"use strict";
const HOST = "https://purrsuit.herokuapp.com/";

angular.module('starter.services', ['ngResource'])


.factory('LogInFactory', ["$resource", function($resource) {
  return $resource(HOST + '/signIn')
}])

.factory('RankFactory', function($resource) {
  return $resource(HOST + '/users/ranking')
})

.factory('SignUp', function($resource) {
  return $resource(HOST + '/users/create')
})

.factory('LogOutFactory', function($resource) {
  return $resource(HOST + '/logout')
})

.factory('EditUser', function($resource) {
  return $resource(HOST + '/users/:id/update.json', {
  id: "@id"
  })
})

.factory('DeleteUser', function($resource) {
  return $resource(HOST + '/users/delete/:id')
})

.factory('LevelsFactory', function($resource) {
  return $resource(HOST + '/levels/all')
})

.factory('ServerFollowDeputy', function($resource) {
  return $resource(HOST + '/users/:id/follow_deputy', {
    id: "@id"
  })
})

.factory('ServerUnfollowDeputy', function($resource) {
  return $resource(HOST + '/users/:id/unfollow_deputy', {
    id: "@id"
  })
})


.factory('ServerFollowedDeputies', function($resource) {
  return $resource(HOST + '/users/:id/followed_deputies', {
    id: "@id"
  })
})

.factory('ServerDeputies', ["$resource", function($resource) {
  return $resource(
    HOST + '/deputies/all',
    {'query': { method: 'GET', isArray: true}}
  );
}])

.factory('ServerFindDeputy', function($resource) {
  return $resource(HOST + '/deputies/:id', {
    id: "@id"
  })
})

.factory('ServerQuests', function($resource) {
  return $resource(HOST + '/quests/all.json')
})

.factory('ServerFindQuest', function($resource) {
  return $resource(HOST + '/quests/:id', {
    id: "@id"
  })
})

.factory('ServerSearchDeputies', function($resource) {
  return $resource(HOST + '/deputies/search/:toSearch', {
    toSearch: "@toSearch"
  })
})

.factory('ServerParty', function($resource) {
  return $resource(HOST + '/parties/:partyId', {
    partyId: "@partyId"
  })
})

.factory('ServerUf', function($resource) {
  return $resource(HOST + '/ufs/:ufId', {
    ufId: "@ufId"
  })
})

.factory('ServerAchievements', function($resource) {
  return $resource(HOST + '/achievements/all.json')
})

.factory('ServerFindAchv', function($resource) {
  return $resource(HOST + '/achievements/:id', {
    id: "@id"
  })
})
