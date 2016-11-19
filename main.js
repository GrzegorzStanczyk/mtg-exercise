$(function() {
  $.getJSON('https://mtgjson.com/json/KLD.json', function(kaladesh) {
    var cards = kaladesh.cards
    console.log(cards) // Remove this
  })
})
