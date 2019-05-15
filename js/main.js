var menuBtn = $('.menu-btn'),
	closeMenuBtn = $('.menu-close-btn'),
	navList = $('.nav-list'),
	lang = $('.lang');

var grid = $('.grid').isotope({
	itemSelector: '.grid__item',
	layoutMode: 'masonry',
	masonry: {
		horizontalOrder: true,
		gutter: 15
	}
});

$('.menu-link').click(function() 
{
	var $page = $('html, body');
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 700);
	return false;
});

menuBtn.click(function(evt)
{
	navList.slideDown(350);

	menuBtn.toggleClass('visually-hidden');
	closeMenuBtn.toggleClass('visually-hidden');
});

closeMenuBtn.click(function(evt)
{
	navList.slideUp(350);
	
	menuBtn.toggleClass('visually-hidden');
	closeMenuBtn.toggleClass('visually-hidden');
});

lang.click(function(evt)
{
	if ($(this).text() == 'UK')
	{
		$(this).text('ENG');
		$(this).siblings('.text-eng').toggleClass('visually-hidden');
		$(this).siblings('.text-uk').toggleClass('visually-hidden');
	}
	else
	{
		$(this).text('UK');
		$(this).siblings('.text-eng').toggleClass('visually-hidden');
		$(this).siblings('.text-uk').toggleClass('visually-hidden');
	}
});