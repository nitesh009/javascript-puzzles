// Bind Method
this.distance = 3000;

const roadTrip = {
  distance : 5000,
  getDistance : function(unit, caption) {
    return this.distance + unit + caption;
  }
}

const roadTrip1 = {
  distance : 15000,
}

console.log(this.distance); // 3000

console.log(roadTrip.distance); // 5000

const getTripDistance = roadTrip.getDistance.bind(roadTrip1,'km');
getTripDistance(' to go');