console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);


var base = new Airtable({apiKey: 'keyd1oUcUUWiw4gV6'}).base('appaLq7406l2hWuc2');
base('Table 1').select({
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.
  records.forEach(function(record) {
    console.log('Retrieved', record.get('Name'));
  });
  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; }
});
