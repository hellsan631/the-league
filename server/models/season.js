module.exports = function(Season) {

  // Get all the games for this season.
  Season.weeklygames = function(id, week, cb) {

    var Games = Season.app.models.Game;
    var filter;
    var reply = [{}];

    if (week) {
      filter = {
        where: {
          seasonId: id,
          week: week
        }
      };
    } else {
      filter = {
        where: {
          seasonId: id
        }
      };
    }

    //Doesn't seem to work in a callback, only .then?
    Games.find(filter)
    .then(function(result){
      console.log(result);
      result.map(function(element){
        if (!reply[0][element.week]) {
          reply[0][element.week] = [element];
        } else {
          reply[0][element.week].push(element);
        }
      });

      cb(null, reply);
      
    });


    
  };


  // IMPORTANT: as soon as you mixin arguments, they are required: true
  // http://localhost:3000/api/Seasons/1/weeklygames/0 --> All games.
  // http://localhost:3000/api/Seasons/1/weeklygames/1 --> Games for week 1.
  Season.remoteMethod(
    'weeklygames', {
      accepts:[
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

};
