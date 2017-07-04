'use strict';

const Header = () => {
  const header      = $('<header></header>');
  const nav         = $('<nav>',{class:'nav'});
  const ulPin       = $('<ul>',{class:'ulPin'});
  const liPin1      = $('<li>',{class:'liPin1'});
  const liPin2      = $('<li>',{class:'liPin2'});
  const aPin        = $('<a>',{href:'#',class:'aPin'});
  const pin         = $('<img>',{src:'images/pinterest-logo.png',style:'width:30px; height:30px',class:'pin'});
  const textPin     = $('<span>',{text:'Inicio',class:'textPin'});
  const inputPin    = $('<input>',{type:'text',placeholder:'Buscar'});


   ulPin.append(liPin1);
   ulPin.append(liPin2);
   liPin1.append(aPin);
   liPin2.append(inputPin);
   aPin.append(pin);
   aPin.append(textPin);
   nav.append(ulPin);
   header.append(nav);
 return header;
}
