var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

url += '?' + $.param({
  'api-key': "82c553e3a1b42babf51d20ade81079e"
});

$.ajax({
  method: 'GET',
  url:'https://api.nytimes.com/svc/topstories/v2/home.json'
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


