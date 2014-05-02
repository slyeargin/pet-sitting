/* exported Pet */
/* global _:true */
/* jshint unused:false */

class Pet {
  constructor(species, speciesImg, gender, age=3, name='Fluffy'){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 1;
    this.name = name;

    this.health = _.random(10, 100);
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  render(){
    let animalInfo = `<div class=pet data-name=${this.name}>
                      <img class=petPhoto src=${this.speciesImg}>
                      <div class=meta>
                        <div class=name><strong>Name:</strong> ${this.name}</div>
                        <div class=age><strong>Age:</strong> ${this.age}</div>
                        <div class=gender><strong>Gender:</strong> ${this.gender}</div>
                        <div class=health><strong>Health:</strong><progress max="100" value=${this.health}></progress></div>
                        <div class=health><strong>Satiety:</strong><progress max="50" value=${this.full}></progress></div>
                        <div class=health><strong>Mood:</strong><progress max="10" value=${this.mood}></progress></div>
                      </div>
                      <div class=actions>
                        <span class="button-wrap"><a href="#" class="eat button button-pill ">press me</a></span>
                      </div>
                      </div>`;
    $('#output').append(animalInfo);
  }
}
