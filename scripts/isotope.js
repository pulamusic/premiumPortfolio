$(document).ready(function () {
  //init Isotope
  let $grid = $('.grid').isotope({
    // options
    // itemSelector: '.grid-item',
    // layoutMode: 'fitRows'
  })
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter')
    $grid.isotope({
      filter: filterValue
    })
  })
  // layout Isotope after each image loads
  $grid.imagesloaded().progress(function () {
    $grid.isotope('layout')
  })
})
