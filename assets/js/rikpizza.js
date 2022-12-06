'use strict';
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}
navToggleBtn.addEventListener('click', function () {

  navToggleFunc();

});
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}
let url = 'https://docs.google.com/spreadsheets/d/1xQSghDvP2S9oB-1RfQq96x5kcqYQKlJZgRnm1khZUVw/gviz/tq?tqx=out:json&tq&gid=0';

fetch(url).then(response => response.text()).then(data => document.getElementById("pizzas").innerHTML=myItems(data.substring(47).slice(0, -2)));

function myItems(jsonString){
    var json = JSON.parse(jsonString);
    var table = '';
    console.log(json);
    json.table.rows.forEach(line => {
        table += '<div class="product-card"><div class="product-content"><div class="wrapper special">';
        table += '<h3 class="product-name">' + (line.c[0] ? line.c[0].v : '' ) + '</h3><div class="product-price">';
        if(line.c[2])
          table += '<p class="price-wrap"><span class="small">Chica</span>$' + line.c[2].v + '</p>';
        if(!line.c[2] && line.c[3])
          table += '<p class="price-wrap"><span class="small">Gigante</span>$' + line.c[3].v + '</p>';
        else if(line.c[3])
          table += '<p class="price-wrap"><span class="small">Grande</span>$' + line.c[3].v + '</p>';
        table += '</div></div>';
        table += '<p class="product-text">' + (line.c[1] ? line.c[1].v : '' ) + '</p>';
        table += '</div></div>';
    });

    return table;
}