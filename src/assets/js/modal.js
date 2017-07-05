const Modal = () => {
    const modal = '<div class="modal flex flex__justify-center';
    const contentModal('<div class="modal__contentModal"></div>');

    const headerModal = '<div class="modal__header flex flex__justify-between"></div>';
    const contentIcons = '<div class="modal__header--icon flex"></div>';
    const iconShare = '<a href="#" class="btn__icons"><i class="fa fa-share-alt" aria-hidden="true"></i></a>';
    const iconCheck = '<a href="#" class="btn__icons"><i class="fa fa-check" aria-hidden="true"></i></a>';
    const iconMore = '<a href="#" class="btn__icons"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>';
    const save = '<a href="#" class="btn__guardar"><i class="fa fa-thumb-tack" aria-hidden="true"></i><span class="btn--pad">Guardar</span></a>';
    
    const note = '<div class="modal__note"><h2>'+'SOFFA magazine 11 TEASER / design travel food people home lifestyle'+'<h2></div>'
    
    const contImagen = '<div class="modal__pin"></div>';
    const imagen = '<img id="imageModal"src="" class="modal__pin--imagen"/>';
    
    contImagen.append(imagen);
    
    contentIcons.append(iconShare);
    contentIcons.append(iconCheck);
    contentIcons.append(iconMore);
    contentIcons.append(save);
    headerModal.append(contentIcons);
    
    contentModal.append(headerModal);
    contentModal.append(note);
    contentModal.append(contImagen);
    
    modal.append(contentModal);
            
    return modal;
}


$( _=>{
   /*MODAL VIEW*/
    Modal();
    
    const modal = $('#modal');
    
    modal.hide();
    
    $('.content img').on('click', (e)=>{
        modal.show('fall');
        $('#imageModal').attr('src', e.target.src);
    });
  
    $('#close').on('click', ()=>{
     modal.hide(1000); 
    });
});