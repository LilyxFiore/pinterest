const Modal = () => {
    const contenedor = '<div class="modal__contenedor"></div>';
    const contData = '<div class="modal__image"></div>';
    
    const note = '<div class="modal__note"><h2>'+'SOFFA magazine 11 TEASER / design travel food people home lifestyle'+'<h2></div>'
    const imagen = '<img src="" class="modal__imagen"/>';
    
    const headerModal = '<div class="modal__header flex flex__justify-between"></div>';
    const contentIcons = '<div class=""></div>';
    const iconShare = '<a href="#" class="btn__icons"><i class="fa fa-share-alt" aria-hidden="true"></i></a>';
    const iconCheck = '<a href="#" class="btn__icons"><i class="fa fa-check" aria-hidden="true"></i></a>';
    const iconMore = '<a href="#" class="btn__icons"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>';
    const save = '<a href="#" class="btn__guardar"><i class="fa fa-thumb-tack" aria-hidden="true"></i><span class="btn--pad">Guardar</span></a>';
    
    contentIcons.append(iconShare);
    contentIcons.append(iconCheck);
    contentIcons.append(iconMore);
    
    headerModal.append();
    contData.append();
    contenedor.append(contData);
            
    return contenedor;
}


$( _=>{
   /*MODAL VIEW*/
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