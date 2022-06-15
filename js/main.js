$(document).ready(function () {

  headerScroll();
  $(window).scroll(function () {
    headerScroll();
  });
  menuToggle();

  accordionInit('.featured_projects_accordion');
  scrollToNextSection('.offwork_btn');

  $('.data-fancybox').each(function (index, element) {
    $(this).attr('data-fancybox', '');
  });

  // $('.modal form').each(function(index, el) {
  // 		$(this).submit(function (e) {
  // 			e.preventDefault();
  // 			var msg = $(this).serialize();
  // 			$.ajax({
  // 				type: 'POST',
  // 				url: 'send.php',
  // 				data: msg,
  // 				success: function (data) {
  // 					$.fancybox.close();
  // 					$.fancybox.open({src: '#success'});
  // 				},
  // 				error: function (xhr, str) {
  // 					$.fancybox.close();
  // 					$.fancybox.open({src: '#notsended'});
  // 				}
  // 			});
  // 			return false;
  // 		});
  // 	});

  // 	$('#email').submit(function (e) {
  // 		e.preventDefault();
  // 		var msg = $(this).serialize();
  // 		$.ajax({
  // 			type: 'POST',
  // 			url: 'send.php',
  // 			data: msg,
  // 			success: function (data) {
  // 				$.fancybox.close();
  // 				$.fancybox.open({src: '#email_success'});
  // 			},
  // 			error: function (xhr, str) {
  // 				$.fancybox.close();
  // 				$.fancybox.open({src: '#notsended'});
  // 			}
  // 		});
  // 		return false;
  // 	});
});


function swipeDrawer(event) {
  if ($('body').hasClass('drawer_active')) {
    $('body').removeClass('drawer_active');
  }
}

function headerScroll() {
  var header = $('header'),
    scroll = $(window).scrollTop();

  if ($('body').hasClass('drawer_active')) {
    header.css('position', 'relative');
  } else {
    if (scroll >= 20) header.removeClass('slideDown').addClass('slideUp');
    else header.removeClass('slideUp').addClass('slideDown');
  }
}

function menuToggle() {
  $('.nav_toggle').click(function (e) {
    e.preventDefault();
    $('body').addClass('drawer_active');
  });

  $('.header_drawer_overlay, .header_drawer-close, .header_drawer_back').click(function (e) {
    e.preventDefault();
    $('body').removeClass('drawer_active');
  });


  $(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      $('body').removeClass('drawer_active');
    }
  });

  $(document).bind('swiperight', swipeDrawer);
}

function accordionInit(accordion) {
  let accordionWrapper = $(accordion);
  if (accordionWrapper.length) {
    let accItem = accordionWrapper.find('.accordion_item .accordion_item--toggle');
    accItem.next().hide();
    accItem.first().parent().addClass('active');
    accItem.first().next().slideDown();
    accItem.click(function (e) { 
      e.preventDefault();
      $(this).parent().toggleClass('active');
      $(this).next().slideToggle();
    });
  }
}

function scrollToNextSection(trigger) {
  let triggerBtn = $(trigger);
  if (triggerBtn.length) {
    triggerBtn.click(function (e) { 
      e.preventDefault();
      let parent = $(this).parents('section'),
          nextParentTop = parent.next().offset().top;
      $("html, body").animate({scrollTop: nextParentTop}, "300");
    });
  }
}