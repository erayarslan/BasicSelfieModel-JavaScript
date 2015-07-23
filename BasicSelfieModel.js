/**
 * @module BasicSelfieModel
 * author eray arslan
 * inspired by @ahmetozantekin BasicSelfieModel
 * src https://github.com/ahmetozantekin/BasicSelfieModel
 */

var barzoCount = 50;

var Instagram = function (gender) {
  this.gender = gender;
  this.areYouFamous = false;
  this.like = 0;
};

Instagram.prototype.setAreYouFamous = function (areYouFamous) {
  this.areYouFamous = areYouFamous;
};

Instagram.prototype.profile = function () {
  return this.areYouFamous ? "sexy" : "barzo";
};

var Selfie = function (gender) {
  Instagram.apply(this, arguments);
  this.showBoobs = false;
};

Selfie.prototype = Object.create(Instagram.prototype);
Selfie.prototype.constructor = Selfie;

Selfie.prototype.takePhoto = function (showBoobs) {
  this.showBoobs = showBoobs;

  if (showBoobs) {
    this.areYouFamous = true;
  }

  if (this.gender === "male" && this.areYouFamous === false) {
    this.like = 7;
  } else if (this.gender === "male" && this.areYouFamous === true) {
    this.like = 300 - barzoCount;
  } else if (this.gender == "female") {
    if (!this.areYouFamous) {
      this.like = 20; // bff mode #on
    } else if (this.areYouFamous) {
      this.like = 700;
    }

    while (this.showBoobs && barzoCount < 150) {
      this.like += barzoCount;
      barzoCount++;
    }
  } else {
    throw new Error("Go away fuckin faggot.");
  }
};
