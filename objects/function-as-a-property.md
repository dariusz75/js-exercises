####This challenge is about the fact that we now have four rangers in our lighthouseRock object, but only have three bulbs in the superBlinders array. So we need a new way to add a bulb.
<br />
In other words, we're going to create an addBulb method inside the lighthouseRock object that will allow us to add another bulb to the array.
<br />
###Starter code:
<br />
```js
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function( name, skillz, station) {
              this.numRangers++;
              this["ranger" + this.numRangers] = {
                name: name,
                skillz: skillz,
                station: station
                };
              },
  
};
```
Rather than adding the method directly inside the lighthouseRock object, the challenge asks us to add it to the lighthouseRock object on the outside.
<br />
Create a new addBulb function property for the lighthouseRock object, but don’t add it directly inside the object. Instead, add it on the outside of the lighthouseRock object. Pass in name and wattage as parameters.
<br />
In order to accomplish this, we need to use the lighthouseRock object and add the function as a property:

```js
lighthouseRock.addBulb = function(name, wattage) {
  
};
```
<br />
###pushing into the array

```js
lighthouseRock.addBulb = function(name, wattage) {
  weaponBulbs.push();
};
```
Since this method is actually a part of the lighthouseRock object, it means we're going to need to use this in order to refer to it properly:

```js
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push();
};
```
<br />
Lastly, we just need to push the sub-array with the proper values from the parameters:
```js
lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};
```
<br />
####Solution
```js
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  addRanger: function( name, skillz, station) {
              this.numRangers++;
              this["ranger" + this.numRangers] = {
                name: name,
                skillz: skillz,
                station: station
                };
              },
  
};

lighthouseRock.addBulb = function(name, wattage) {
  this.weaponBulbs.push([name, wattage]);
};

lighthouseRock.addBulb('Nova', 222);
console.log(superBlinders);
```

###http://jsbin.com/ruwotu/edit?js,console