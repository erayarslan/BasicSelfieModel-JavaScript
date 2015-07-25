/**
 * @module BasicSelfieModel
 * author eray arslan
 * inspired by @ahmetozantekin BasicSelfieModel
 * src https://github.com/ahmetozantekin/BasicSelfieModel
 */

var Instagram = function (gender) {
  this.barzoCount = 50;
  
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
    this.setAreYouFamous(true);
  }

  if (this.gender === "male" && !this.areYouFamous) {
    this.like = 7;
  } else if (this.gender === "male" && this.areYouFamous) {
    this.like = 300 - this.barzoCount;
  } else if (this.gender == "female") {
    if (!this.areYouFamous) {
      this.like = 20; // bff mode #on
    } else if (this.areYouFamous) {
      this.like = 700;
    }

    while (this.showBoobs && this.barzoCount < 150) {
      this.like += this.barzoCount;
      this.barzoCount++;
    }
  } else {
    throw new Error("Go away fuckin faggot.");
  }
};
