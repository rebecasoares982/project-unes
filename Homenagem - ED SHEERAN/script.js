$('#albumModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget);
var spotifyLink = button.data('spotify-link');
var modal = $(this);
modal.find('#spotifyLink').attr('href', spotifyLink);
});
 