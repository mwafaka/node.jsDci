const { dictionaryLookup } = require("./lib/dictionary")

const main = async () => {
  // capture the first argument to the program and trim it
  let [, , word] = process.argv

  if (!word) {
    console.log("Sorry, please provide a word to find it's meaning")
    process.exit()
  }

  // Remove whitespace
  word = word.trim()

  dictionaryLookup(word)
    .then(console.log)
    .catch(console.error)
}

// call function to be able to run this with:
// node index.js <word>
// main()

// Export will be used by ./bin/dict
// require(../)()
module.exports = main
