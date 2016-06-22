var moment = require('moment');

module.exports = function(Game) {

  // Get all the games for this week.
  Game.thisweek = function(cb) {

    // This week Monday
    var fromDate = moment()
      .isoWeekday(1)
      .toISOString()
      .substring(0, 10);

    // This week Sunday
    var toDate = moment()
      .isoWeekday(7)
      .toISOString()
      .substring(0, 10);

    var filter = {
      where: {
        playedOn: {
          between: [
            fromDate,
            toDate
          ]
        }
      }
    };

    Game.find(filter)
      .then(function(result) {
        cb(null, result);
      });

  };

  Game.remoteMethod(
    'thisweek', {
      http: {
        path: '/thisweek',
        verb: 'get'
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );

};
