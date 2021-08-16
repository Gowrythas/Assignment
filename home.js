$('.forfl').isotope({
    itemSelector: '.forfl',
    layoutMode: 'fitRows'
  });

  $('ul.filters > li').click(function () {
    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter')
    $('.forfl').isotope({
      filter: selector
    });
    return false
  });

  $('.forfl').isotope({
    itemSelector: '.forfl',
    layoutMode: 'fitRows'
  });

  $('ul.alfilters > li').click(function () {
    $('ul.alfilters > li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter')
    $('.forfl').isotope({
      filter: selector
    });
    return false
  });


