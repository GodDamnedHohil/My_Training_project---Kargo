$('.issuance').on('click', function() {
  $('#issuance').toggleClass('calculator__form-select-dropdown-open')
});
$('.product-type').on('click', function() {
  $('#product-type').toggleClass('calculator__form-select-dropdown-open')
})
$('.city-of-dispatch').on('click', function() {
  $('#city-of-dispatch').toggleClass('calculator__form-select-dropdown-open')
});
//^ dropdown animation ^
$('.issuance__options').on('click', function() {
  let value = $(this).attr('data-value');
  $('.issuance__value').text(value);
  $('#issuance__data').val(value);
  console.log($('#issuance__data').val());
});
$('.product-type__options').on('click', function() {
  let value = $(this).attr('data-value');
  $('.product-type__value').text(value);
  $('#product-type__data').val(value);
  console.log($('#product-type__data').val())
});
$('.city-of-dispatch__options').on('click', function() {
  let value = $(this).attr('data-value');
  $('.city-of-dispatch__value').text(value);
  $('#city-of-dispatch__data').val(value);
  console.log($('#city-of-dispatch__data').val())
});
//^ dropdown data changes ^

//arrows animation
$('.hero__navbar-link').on('click', function (){
  if ($('#main-page-info').hasClass('main-page-info-active')){
    $('#main-page-info').removeClass('main-page-info-active');
  };
  if ($('#delivery-info').hasClass('delivery-info-active')){
    $('#delivery-info').removeClass('delivery-info-active');
  };
  if ($('#info').hasClass('info-active')){
    $('#info').removeClass('info-active');
  };
});

$('.main-page-link').on('click', function() {
  $('.arrow').removeClass('arrow_active');
  $('#main-page-info').removeClass('main-page-info-active');
  $('#main-page-info').toggleClass('main-page-info-active');
  if ($('#main-page-info').hasClass('main-page-info-active')){
    $('#arrow-1').toggleClass('arrow_active');
  };
});

$('.delivery-link').on('click', function() {
  $('.arrow').removeClass('arrow_active');
  $('#delivery-info').removeClass('delivery-info-active');
  $('#delivery-info').toggleClass('delivery-info-active');
  if ($('#delivery-info').hasClass('delivery-info-active')){
    $('#arrow-2').toggleClass('arrow_active');
  };
});

$('.info-link').on('click', function() {
  $('.arrow').removeClass('arrow_active');
  $('#info').removeClass('info-active');
  $('#info').toggleClass('info-active');
  if ($('#info').hasClass('info-active')){
    $('#arrow-4').toggleClass('arrow_active');
  };
});

$('.close-btn').on('click', function(){
  $('.arrow').removeClass('arrow_active');
  $('#main-page-info').removeClass('main-page-info-active');
  $('#delivery-info').removeClass('delivery-info-active');
  $('#info').removeClass('info-active');
});
//^ arrows animation ^

$('.parallax-window').parallax({
  imageSrc: 'img/plane-without-moving-parts.jpg',
  naturalWidth: 1920,
  naturalHeight: 1080,
  bleed: 780,
  speed: 0.2,
});

  
