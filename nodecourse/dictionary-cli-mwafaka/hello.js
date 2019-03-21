const axios = require("axios");

// const hello = () => {
//   console.log("Hello");
// };

// module.exports = {
//   hello
// };

someData = axios.create({
  baseURL: "https://od-api.oxforddictionaries.com/api/v1/entries/en",
  headers: {
    Accept: "application/json",
    app_id: "a2394f7f",
    app_key: "f39056b3f3c1b0ce2b72bddac1b6fe3d"
  }
});
someData.get("hello").then(res => {
  // console.log(res.data.results[0].lexicalEntries);
  // console.log(res.data.results.lexicalEntries);
  var data1 = res.data.results[0].lexicalEntries;
  data1.forEach(element => {
    // console.log(element.text);
    console.log(`hello (${element.lexicalCategory})`);
    console.log(`1 ${element.entries[0].senses[0].short_definitions[0]}`);
    // console.log(element.entries[0].senses[0].short_definitions[0]);
  });
  console.log("Provided by " + res.data.metadata.provider);
});
