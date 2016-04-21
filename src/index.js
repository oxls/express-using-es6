import express from 'express';

var app = express();

app.get('*', function(req, res){
  res.send('Hello?')
});

app.listen(process.env.PORT || 8080, function () {
  console.log(`Started on port ${process.env.PORT || 8080}`);
});

export default app;
