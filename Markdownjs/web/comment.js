//Written by Ryan Lee

'use strict';
/*jslint node:true, indent:2, nomen:true*/

$('.bz_comment_text').each(function () {
  var elm = $(this);
  elm.html(markdown.toHTML(elm.text()));
});

$('#comment').on('input', function () {
  $('#bz_preview').html(markdown.toHTML($(this).val()));
});
