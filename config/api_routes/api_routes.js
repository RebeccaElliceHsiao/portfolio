var ObjectID = require('mongodb').ObjectID

module.exports = function(app, database) {
  const db = database.db('becka_api');

  app.get('/database/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id) };
    db.collection('database').findOne(details, (err, item) => {
      if (err) {
        res.send( {'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    })
  });

  app.delete('/database/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id) };
    db.collection('database').remove(details, (err, item) => {
      if (err) {
        res.send( {'error': 'An error has occurred' });
      } else {
        res.send('item' + id + ' deleted!');
      }
    })
  });

  app.put('/database/:id', (req, res) => {
    const id = req.params.id
    const details = {'_id': new ObjectID(id) };
    db.collection('database').update(details, req.body, (err, item) => {
      if (err) {
        res.send( {'error': 'An error has occurred' });
      } else {
        res.send(item)
      }
    })
  });

  app.post('/database', (req, res) => {
    db.collection('database').insert(req.body, (err, result) => {
      if (err) {
        res.send( {'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0])
      }
    });
  })
}
