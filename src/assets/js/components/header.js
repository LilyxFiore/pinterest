'use strict';

const Header = () => {
  const header      = $('<header></header>');
  const nav         = $('<nav>',{class:'nav'});
  const ulPin       = $('<ul>',{class:'ulPin'});
  const liPin       = $('<li>',{class:'liPin'});
  const aPin        = $('<a>',{href:'#',class:'aPin'});
  const pin         = $('<img>',{src:'images/pinterest-logo.png',style:'width:2.5%',class:'pin'});
  const textPin     = $('<span>',{text:'Inicio',class:'textPin'});


   ulPin.append(liPin);
   liPin.append(aPin);
   aPin.append(pin);
   aPin.append(textPin);
   nav.append(ulPin);
   header.append(nav);
 return header;
}
