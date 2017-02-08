function bookmarkCount() {
var $bookmarkCount = $('.bookmarks');
$('#bookmark-count').text($bookmarkCount.length);
}

$('#enter-button').on('click',function() {
  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();

  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  bookmarkCount();

  $('#web-title').val('');
  $('#web-address').val('');
});

$('#display-side').on('click','.read', function(event) {
  $(this).closest('.bookmarks').toggleClass('read-bookmark');
  $(this).closest('.link').toggleClass('read-link');
  $(this).toggleClass('read-button');

});

$('#display-side').on('click','.delete', function(event) {
  $(this).closest('.bookmarks').remove();
  bookmarkCount();
});

$('#clear-button').on('click', function(event) {
  $('.bookmarks').remove();
  bookmarkCount();
});
