module.exports = function (Season) {



  // Get all the games for this season.
  Season.weeklyGamesWeek = function (id, week, cb) {    
    var filter = {
      where: {
        seasonId: id,
        week: week
      }
    };
    getGames(filter, cb);
  };


  // IMPORTANT: as soon as you mixin arguments, they are required: true
  // http://localhost:3000/api/Seasons/1/weeklygames/0 --> All games.
  // http://localhost:3000/api/Seasons/1/weeklygames/1 --> Games for week 1.
  Season.remoteMethod(
    'weeklyGamesWeek', {
      accepts: [
        {
          arg: 'id',
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
        path: '/:id/weeklygames/:week',
        verb: 'get'
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );

  // Get all the games for this season.
  Season.weeklyGames = function (id, cb) {
    var filter = {
      where: {
        seasonId: id
      }
    };
    getGames(filter, cb);
  };

  // IMPORTANT: as soon as you mixin arguments, they are required: true
  // http://localhost:3000/api/Seasons/1/weeklygames/0 --> All games.
  // http://localhost:3000/api/Seasons/1/weeklygames/1 --> Games for week 1.
  Season.remoteMethod(
    'weeklyGames', {
      accepts: [
        {
          arg: 'id',
          type: 'string',
          required: true
        }
      ],
      http: {
        path: '/:id/weeklygames/',
        verb: 'get'
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );

  function getGames(filter, cb) {
    var reply = [{}];
    var Games = Season.app.models.Game;
    Games.find(filter)
      .then(function (result) {
        console.log(result);
        result.map(function (element) {
          if (!reply[0][element.week]) {
            reply[0][element.week] = [element];
          } else {
            reply[0][element.week].push(element);
          }
        });

        cb(null, reply);

      });
  }

};
