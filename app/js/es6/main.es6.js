/* global Pet:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#output').on('click', '.eat', eat);
  }

  let pets = [];

  function add(){
    let speciesImg = $('#species').val();
    let species = $('#species option:selected').text();
    let gender = $('#gender').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, age, name);
    pets.push(pet);
    pet.render();
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    console.log(name);
  }

})();
