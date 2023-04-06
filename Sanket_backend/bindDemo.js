const player = {
  name: "Navnit",
  numberToBat: "3",
  canBowl: false,

  getDetails: function () {
    console.log(this.name, "comes at No. ", this.numberToBat);
  },
};

player.getDetails();

const ram = player.getDetails;

ram.bind(player);
ram();
