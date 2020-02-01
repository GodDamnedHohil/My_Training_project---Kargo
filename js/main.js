$('.issuance').on('click', function() {
  $('#issuance').toggleClass('calculator__form-select-dropdown-open')
});
$('.product-type').on('click', function() {
  $('#product-type').toggleClass('calculator__form-select-dropdown-open')
})
$('.city-of-dispatch').on('click', function() {
  $('#city-of-dispatch').toggleClass('calculator__form-select-dropdown-open')
});


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

