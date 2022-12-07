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

fetch(url).then(response => response.text()).then(data => myItems(data.substring(47).slice(0, -2)));

function myItems(jsonString){
    var json = JSON.parse(jsonString);
    var table = '';
    json.table.rows.forEach((line, i) => {
        if(i > 1){
          table += '<div class="product-card"><div class="product-content"><div class="wrapper special">';
          table += '<h3 class="product-name">' + (line.c[0] ? line.c[0].v : '' ) + '</h3><div class="product-price">';
          try{
            if(line.c[2].v != null && line.c[2] != null)
              table += '<p class="price-wrap"><span class="small">Grande</span>$' + line.c[2].v + '</p>';
          } catch (e) {}
          try{
            if(line.c[3].v != null && line.c[3] != null)
              table += '<p class="price-wrap"><span class="small">Chica</span>$' + line.c[3].v + '</p>';
          } catch (e) {}
          table += '</div></div>';
          table += '<p class="product-text">' + (line.c[1] ? line.c[1].v : '' ) + '</p>';
          table += '</div></div>';
        }
    });

    document.getElementById("empanadas").innerHTML = '<p class="price-wrap"><span class="small">Docena</span>$' + json.table.rows[0].c[2].v + '</p><p class="price-wrap"><span class="small">Unidad</span>$' + json.table.rows[0].c[3].v + '</p>';
    document.getElementById("canastitas").innerHTML = '<p class="price-wrap"><span class="small">Docena</span>$' + json.table.rows[1].c[2].v + '</p><p class="price-wrap"><span class="small">Unidad</span>$' + json.table.rows[1].c[3].v + '</p>';
    document.getElementById("pizzas").innerHTML = table;
}