/** section board js **/

const token = "AeQ7ekzAKmhr7pvDPpa00Xn5XZctFM4mjWCOA41EItrZVaA9_AAAAAA";
const urlBoard = "arabelyuska/web-ui";

const wrapper = $('<id class="wrapper"></id>');
const board = $('<section class="board"></section>');

$.getJSON('https://api.pinterest.com/v1/boards/' + urlBoard +'/pins/?access_token=' + token +'&fields=link%2Cnote%2Cimage%2Cboard', function (response){
  $.each(response.data, function(i, value) {
    $(".board").append(addImages(value));
  });
});

function addImages(data) {
  const boardItem = $('<div class="board-item"></div>');
  const boardItemImage = $('<img src =' + data.image.original.url +' class="board-item__image">');
  const boardItemTitle = $('<p class="board-item__title">' + data.note + '</p>');

  boardItem.append(boardItemImage);
  boardItem.append(boardItemTitle);

  return boardItem;
}

$('#root').append(wrapper);
wrapper.append(board);