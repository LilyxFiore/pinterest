'use strict';

/** section board js **/
const token = "AeQ7ekzAKmhr7pvDPpa00Xn5XZctFM4mjWCOA41EItrZVaA9_AAAAAA";
const urlBoard = "arabelyuska/web-ui";

const wrapper = $('<div class="wrapper"></div>');
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

  boardItem.on('click', (e)=>{
      showModal(data.image.original.url,data.note);
  });
  
  return boardItem;
}


const Modal = () => {
    const contenedor =  $('<div id="modal" class="modal flex flex__justify-between"></div>');
    const contTotal = $('<div class="modal__contentModal"></div>');
    const contData =  $('<div class="modal__pin"></div>');
    
    const note =  $('<div"><h1 id="note" class="modal__header--fonts modal__note"></h1></div>');
    const imagen =  $('<div class="modal__image"><img id="imageModal" src="" class="modal__image--border modal__pin--imagen"/></div>');
    
    const headerModal =  $('<div class="modal__header flex flex__justify-between"></div>');
    const iconShare =  $('<a href="#" class="btn__icons"><i class="fa fa-share-alt" aria-hidden="true"></i></a>');
    const iconCheck =  $('<a href="#" class="btn__icons"><i class="fa fa-check" aria-hidden="true"></i></a>');
    const iconMore =  $('<a href="#" class="btn__icons"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>');
    const save =  $('<button class="btn__guardar modal__header--button"><i class="fa fa-thumb-tack" aria-hidden="true"></i><span class="btn--pad">Guardar</span></button>');
    
    const close =  $('<span id="close" class="modal__close"><i class="fa fa-times" aria-hidden="true"></i></span>'); 
    const iconos =  $('<div class="modal--iconos"></div>');

    iconos.append(iconShare);
    iconos.append(iconCheck);
    iconos.append(iconMore);
    iconos.append(save);

    headerModal.append(iconos);
    
    contData.append(note);
    contData.append(imagen);

    contTotal.append(headerModal);
    contTotal.append(contData);
    
    contenedor.append(close);
    contenedor.append(contTotal);
    
    close.on('click', ()=>{
      contenedor.hide();
    });

            
    return contenedor;
}


$('#root').append(wrapper);
wrapper.append(board);
$('#root').append(Modal());


/*MODAL VIEW*/
  const modal = $('#modal');
  /*render(modal);*/
  modal.hide();
  

  $('#modal').hide();

  function showModal(src,data){
      const modal = $('#modal');
      modal.show();
      $('#imageModal').attr('src', src);
      $('#note').html(data);
  }