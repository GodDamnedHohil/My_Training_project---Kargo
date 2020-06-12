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
  changeDropdownData(value,'.issuance__value', '#issuance__data');
});
$('.product-type__options').on('click', function() {
  let value = $(this).attr('data-value');
  changeDropdownData(value, '.product-type__value', '#product-type__data');
});
$('.city-of-dispatch__options').on('click', function() {
  let value = $(this).attr('data-value');
  changeDropdownData(value, '.city-of-dispatch__value', '#city-of-dispatch__data');
});

function changeDropdownData(value, text, data){
  $(text).text(value);
  $(data).val(value);
  console.log($(data).val());
}
//^ dropdown data changes ^

//arrows animation-----------------------------
$('.sidebar__links').on('click', function(){
  $('.arrow').removeClass('arrow_active');
})
$('.hero__navbar-link').on('click', function(){
  $('.arrow').removeClass('arrow_active');
})
$('.close-btn').on('click', function(){
  $('.arrow').removeClass('arrow_active');
})

$('.main-page-link').on('click', function(){
  pinArrow('#arrow-1');
})
$('.delivery-link').on('click', function(){
  pinArrow('#arrow-2');
})
$('.info-link').on('click', function(){
  pinArrow('#arrow-4');
})
function pinArrow(arrow){
  $(arrow).toggleClass('arrow_active');
}
//^ arrows animation ^-----------------------
  
let hotOffers = '.hot-offers';
let expressDeliveryForm = '#express-delivery';
let expressDeliveryContent = '.express-delivery-content';
let groundDeliveryForm = '#ground-delivery';
let groundDeliveryContent = '.ground-delivery-content';
let shipDeliveryForm = '#ship-delivery';
let shipDeliveryContent = '.ship-delivery-content';
let openOffersCounter = 0; 

$('.express-delivery-title').on('click', function(){
  openOffer(hotOffers, expressDeliveryForm, expressDeliveryContent);
});
$('.ground-delivery-title').on('click', function(){
  openOffer(hotOffers, groundDeliveryForm, groundDeliveryContent);
});
$('.ship-delivery-title').on('click', function(){
  openOffer(hotOffers, shipDeliveryForm, shipDeliveryContent);
});

function openOffer(section, form, content){
  let closeFlag;
  let openFlag;
  ($(form).height() == 65) ? closeFlag = 1 : ($(form).height() == 490) ? closeFlag = 0 : closeFlag = -1;
  
  if($(section).width() <= 1020 & closeFlag != -1){
    if(closeFlag == 1){
      $(content).removeClass('hidden');
      $(form).toggleClass('hot-offers__form-open');
      openOffersCounter++;
    }
    if(closeFlag == 0){
      $(content).toggleClass('hidden');
      $(form).removeClass('hot-offers__form-open');
      openOffersCounter--;
    }
    if(openOffersCounter == 0) {
      $(section).removeClass('hot-offers_once-open');
      $(section).removeClass('hot-offers_twice-open');
      $(section).removeClass('hot-offers_tree-times-open');
    }
    if(openOffersCounter == 1) $(section).toggleClass('hot-offers_once-open');
    if(openOffersCounter == 2) $(section).toggleClass('hot-offers_twice-open');
    if(openOffersCounter == 3) $(section).toggleClass('hot-offers_tree-times-open');
  }

}
$('.reviews__slider-img-container').slick({
  arrows: true,
  fade: true,
  cssEase: 'linear',
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: $('.next-arrow'),
  prevArrow: $('.prev-arrow'),
  asNavFor: '.reviews__slider-bottom-container'
});

$('.reviews__slider-bottom-container').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.reviews__slider-img-container',
  fade: true,
  cssEase: 'linear',
})
