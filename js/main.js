$(function() {
	var slidesLenght = $('li:nth-child(3n+1)').length
	var widthSlide = $('li').width()
	var actualPosition = 0
	var contentWidth = (slidesLenght-5)*(widthSlide)
	var $leftButton = $('.left-cursor')
	var $rightButton = $('.right-cursor')
	var $overflowContent = $('.container')

  $.getJSON('https://mtgjson.com/json/KLD.json', function(kaladesh) {
    var cards = kaladesh.cards
    console.log(cards) // Remove this
  })

 	console.log(slidesLenght)
  console.log(widthSlide)
  console.log(contentWidth)

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

})
