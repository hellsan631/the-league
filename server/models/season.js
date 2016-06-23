module.exports = function (Season) {

  // Get all the games for this season and week.
  Season.getWeeklyGamesByWeek = function (seasonId, week, cb) {    
    var filter = {
      where: {
        seasonId: seasonId,
        week: week
      }
    };
    getGames(filter, cb);
  };
 
  Season.remoteMethod(
    'getWeeklyGamesByWeek', {
      accepts: [
        {
          arg: 'seasonId',
          type: 'string',
          required: true
        },
        {
          arg: 'week',
          type: 'number',
          required: true
        }
      ],
      http: {
        path: '/:seasonId/weeklygames/:week',
        verb: 'get'
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );

  // Get all the games for this season.
  Season.getWeeklyGames = function (seasonId, cb) {
    var filter = {
      where: {
        seasonId: seasonId
      }
    };
    getGames(filter, cb);
  };

  Season.remoteMethod(
    'getWeeklyGames', {
      accepts: [
        {
          arg: 'seasonId',
          type: 'string',
          required: true
        }
      ],
      http: {
        path: '/:seasonId/weeklygames/',
        verb: 'get'
      },
      returns: {
        type: 'object',
        root: true
      }
    }
  );

  function getGames(filter, cb) {
    var reply = {};
    var Games = Season.app.models.Game;
    Games
      .find(filter)
      .then(function (result) {
        result.map(function (element) {
          if (!reply[element.week]) {
            reply[element.week] = [element];
          } else {
            reply[element.week].push(element);
          }
        });

        if (filter.where.week) {
          reply = reply[filter.where.week];
        }

        cb(null, reply);
      });
  }

};
