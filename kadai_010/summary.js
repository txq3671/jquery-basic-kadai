$(document).ready(function() {
  // 文字色変化ボタン
  $('#change-color').click(function() {
    $('#target').css('color', 'red');
  });

  // 文字内容変化ボタン
  $('#change-text').click(function() {
    $('#target').text('Hello!');
  });

  // フェードアウトボタン
  $('#fade-out').click(function() {
    $('#target').fadeOut();
  });

  // フェードインボタン
  $('#fade-in').click(function() {
    $('#target').fadeIn();
  });
});
