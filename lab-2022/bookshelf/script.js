console.log("Hello bookshelf");

var Airtable = require("airtable");
console.log(Airtable);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keylgrBH5WYY9nzg2'}).base('appV6a17PCpb1p6rs');

base('books').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('title'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});