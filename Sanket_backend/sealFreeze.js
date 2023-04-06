const imp = {
  auth_key: 10000,
  provider: "Navnit",
};

imp.other = "other data";

// the property can be updated despite it is const
console.log(imp);

const imp2 = {
  auth_key: 10000,
  provider: "Nav_nit",
};
Object.freeze(imp2);

// it freeze the further modification

console.log(imp2);

const imp3 = {
  auth_key: 10000,
  provider: "Nav_nit_3",
};

imp3.auth_key = 10001;

Object.seal(imp3);
imp3.other = "other";

console.log(imp3);
// can not addd new property but old one can be updated

/// Experiment
Object.freeze = function () {
  console.log("hi");
};

const imp4 = {
  name: "Navnit",
};

Object.freeze(imp4);

imp4.age = 21;

console.log(imp4);

//freeze, eal , call,bind ,apply , rest operator,

//creating copy of object without pointing to same heap

const obj1 = {
  name: "navnit",
};

const obj2 = Object.create(obj1);

// orm , sequelize , rdbms , mysqlsql
// project
/*
project : airline booking management systema
*/
