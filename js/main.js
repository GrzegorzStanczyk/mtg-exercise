$(function() {


  $.getJSON('https://mtgjson.com/json/KLD.json', function(kaladesh) {
    var cards = kaladesh.cards
		console.log(cards)
		var $cardsList = $('ul')
		$cardsList.empty()
		for(var i = 0; i < cards.length; i++) {
			if(cards[i].colors == "Red" & cards[i].type.indexOf("Creature") >= 0) {
				$cardsList.append(addCard(cards[i].multiverseid, cards[i].type, cards[i].colors))
			}
		}
		carousel()
  })

	function addCard(img, type, color) {
		var $card = $('<li />', {
			html: 'type: ' + type + '<br>' + 'color: ' + color + '<br>' + 'img: ' + img
		})
		return $card
	}

	function carousel() {

			var slidesLenght = $('li:nth-child(3n+1)').length
			var widthSlide = $('li').width()
			var actualPosition = 0
			var contentWidth = (slidesLenght-5)*(widthSlide)
			var $leftButton = $('.left-cursor')
			var $rightButton = $('.right-cursor')
			var $overflowContent = $('.container')

			$rightButton.on('click', function(){
				console.log(actualPosition)
				if (actualPosition>=contentWidth) return

				actualPosition+=widthSlide
				$overflowContent.animate({scrollLeft: actualPosition}, 400)
			})

			$leftButton.on('click', function(){
				console.log(actualPosition)
				if (actualPosition == 0) return

				actualPosition-=widthSlide
				$overflowContent.animate({scrollLeft: actualPosition}, 400)
			})
	}






})
