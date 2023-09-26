$(document).ready(function() {
	$('#fullpage').fullpage({
        licenseKey: 'null',
        //options here
        menu: '#menu',
        lockAnchors: false,
        anchors: ['1','2','3','4','5','6','7'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Banner', 'About', 'Solutions', 'News', 'FAQS', 'Partners', 'Contact Us'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
		autoScrolling: true,
        scrollHorizontally: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        // dragAndMove: true,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#about #banner',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#ccc', '#fff'],
        paddingTop: '3em',
        paddingBottom: '3rem',
        fixedElements: '#header, .footer',
        responsiveWidth: 900,
        responsiveHeight: 769,
        // responsiveSlides: true,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(origin, destination, direction){},
        afterLoad: function(origin, destination, direction){},
        afterRender: function(){},
        afterResize: function(width, height){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(section, origin, destination, direction){},
        onSlideLeave: function(section, origin, destination, direction){}
    });

	//methods
	// $.fn.fullpage.setAllowScrolling(true);
});


// SLICK JS CONFIG
$(document).ready(function() {
    $('.responsive').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            infinite: true,
            centerMode: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            arrows: false,
            centerMode: true,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}