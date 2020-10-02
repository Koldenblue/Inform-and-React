let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/voters", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let seeder = 
{
  "_id" : ObjectId("5f769f73adc84c6f744686c0"),
  "representatives" : [ 
      {
          "id" : {
              "bioguide" : "H001075",
              "fec" : [ 
                  "S6CA00584"
              ],
              "govtrack" : 412678,
              "votesmart" : 120012,
              "wikipedia" : "Kamala Harris",
              "ballotpedia" : "Kamala Harris",
              "lis" : "S387",
              "wikidata" : "Q10853588",
              "google_entity_id" : "kg:/m/08sry2",
              "opensecrets" : "N00036915",
              "maplight" : 2190,
              "cspan" : 1018696,
              "icpsr" : 41701
          },
          "name" : {
              "first" : "Kamala",
              "last" : "Harris",
              "official_full" : "Kamala D. Harris"
          },
          "bio" : {
              "gender" : "F",
              "birthday" : "1964-10-20"
          },
          "terms" : [ 
              {
                  "type" : "sen",
                  "start" : "2017-01-03",
                  "end" : "2023-01-03",
                  "state" : "CA",
                  "class" : 3,
                  "state_rank" : "junior",
                  "party" : "Democrat",
                  "address" : "112 Hart Senate Office Building Washington DC 20510",
                  "office" : "112 Hart Senate Office Building",
                  "phone" : "202-224-3553",
                  "url" : "https://www.harris.senate.gov",
                  "contact_form" : "https://www.harris.senate.gov/contact"
              }
          ],
          "img" : "https://theunitedstates.io/images/congress/original/H001075.jpg"
      }, 
      {
          "id" : {
              "bioguide" : "F000062",
              "thomas" : "01332",
              "lis" : "S221",
              "govtrack" : 300043,
              "opensecrets" : "N00007364",
              "votesmart" : 53273,
              "fec" : [ 
                  "S0CA00199"
              ],
              "cspan" : 13061,
              "wikipedia" : "Dianne Feinstein",
              "house_history" : 13044,
              "ballotpedia" : "Dianne Feinstein",
              "maplight" : 567,
              "icpsr" : 49300,
              "wikidata" : "Q230733",
              "google_entity_id" : "kg:/m/01gqws"
          },
          "name" : {
              "first" : "Dianne",
              "last" : "Feinstein",
              "official_full" : "Dianne Feinstein"
          },
          "bio" : {
              "birthday" : "1933-06-22",
              "gender" : "F"
          },
          "terms" : [ 
              {
                  "type" : "sen",
                  "start" : "1992-11-10",
                  "end" : "1995-01-03",
                  "state" : "CA",
                  "class" : 1,
                  "party" : "Democrat"
              }, 
              {
                  "type" : "sen",
                  "start" : "1995-01-04",
                  "end" : "2001-01-03",
                  "state" : "CA",
                  "class" : 1,
                  "party" : "Democrat"
              }, 
              {
                  "type" : "sen",
                  "start" : "2001-01-03",
                  "end" : "2007-01-03",
                  "state" : "CA",
                  "class" : 1,
                  "party" : "Democrat",
                  "url" : "http://feinstein.senate.gov"
              }, 
              {
                  "type" : "sen",
                  "start" : "2007-01-04",
                  "end" : "2013-01-03",
                  "state" : "CA",
                  "class" : 1,
                  "party" : "Democrat",
                  "url" : "http://feinstein.senate.gov",
                  "address" : "331 HART SENATE OFFICE BUILDING WASHINGTON DC 20510",
                  "phone" : "202-224-3841",
                  "fax" : "202-228-3954",
                  "contact_form" : "http://www.feinstein.senate.gov/public/index.cfm/e-mail-me",
                  "office" : "331 Hart Senate Office Building"
              }, 
              {
                  "type" : "sen",
                  "start" : "2013-01-03",
                  "end" : "2019-01-03",
                  "state" : "CA",
                  "party" : "Democrat",
                  "class" : 1,
                  "url" : "https://www.feinstein.senate.gov",
                  "address" : "331 Hart Senate Office Building Washington DC 20510",
                  "phone" : "202-224-3841",
                  "fax" : "202-228-3954",
                  "contact_form" : "https://www.feinstein.senate.gov/public/index.cfm/e-mail-me",
                  "office" : "331 Hart Senate Office Building",
                  "state_rank" : "senior",
                  "rss_url" : "http://www.feinstein.senate.gov/public/?a=rss.feed"
              }, 
              {
                  "type" : "sen",
                  "start" : "2019-01-03",
                  "end" : "2025-01-03",
                  "state" : "CA",
                  "class" : 1,
                  "party" : "Democrat",
                  "state_rank" : "senior",
                  "url" : "https://www.feinstein.senate.gov",
                  "rss_url" : "http://www.feinstein.senate.gov/public/?a=rss.feed",
                  "contact_form" : "https://www.feinstein.senate.gov/public/index.cfm/e-mail-me",
                  "address" : "331 Hart Senate Office Building Washington DC 20510",
                  "office" : "331 Hart Senate Office Building",
                  "phone" : "202-224-3841"
              }
          ],
          "img" : "https://theunitedstates.io/images/congress/original/F000062.jpg"
      }, 
      {
          "id" : {
              "bioguide" : "C001110",
              "govtrack" : 412688,
              "wikipedia" : "Lou Correa",
              "wikidata" : "Q6685454",
              "votesmart" : 9732,
              "fec" : [ 
                  "H6CA46116"
              ],
              "opensecrets" : "N00037260",
              "maplight" : 2200,
              "google_entity_id" : "kg:/m/02q_np2",
              "cspan" : 46310,
              "icpsr" : 21711
          },
          "name" : {
              "first" : "J.",
              "middle" : "Luis",
              "last" : "Correa",
              "official_full" : "J. Luis Correa"
          },
          "bio" : {
              "gender" : "M",
              "birthday" : "1958-01-24"
          },
          "terms" : [ 
              {
                  "type" : "rep",
                  "start" : "2017-01-03",
                  "end" : "2019-01-03",
                  "state" : "CA",
                  "district" : 46,
                  "party" : "Democrat",
                  "phone" : "202-225-2965",
                  "address" : "1039 Longworth House Office Building; Washington DC 20515-0546",
                  "office" : "1039 Longworth House Office Building",
                  "url" : "https://correa.house.gov"
              }, 
              {
                  "type" : "rep",
                  "start" : "2019-01-03",
                  "end" : "2021-01-03",
                  "state" : "CA",
                  "district" : 46,
                  "party" : "Democrat",
                  "phone" : "202-225-2965",
                  "address" : "1039 Longworth House Office Building Washington DC 20515-0546",
                  "office" : "1039 Longworth House Office Building",
                  "url" : "https://correa.house.gov"
              }
          ],
          "img" : "https://theunitedstates.io/images/congress/original/C001110.jpg"
      }
  ],
  "username" : "1",
  "password" : "$2b$10$x0RdS0bqA11R9w/iljOVFe5TJOy5GQVvjiRYCqK4fscNyQAdppheW",
  "__v" : 1,
  "concatenatedHomeAddress" : "1313 Disneyland Drive Anaheim 92802 CA",
  "homeAddress" : {
      "address" : "1313 Disneyland Drive",
      "city" : "Anaheim",
      "state" : "CA",
      "zip" : "92802"
  }
}

  db.User.deleteMany({})
  .then(() => db.User.insertMany(seeder))
  .then(data => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
