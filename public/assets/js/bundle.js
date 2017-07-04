(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/** section board js **/

const token = "AeQ7ekzAKmhr7pvDPpa00Xn5XZctFM4mjWCOA41EItrZVaA9_AAAAAA";
const urlBoard = "arabelyuska/web-ui";

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
},{}]},{},[1])