//boda-fare function
function calculateBodaFare(distanceInKm){
    const baseFare = 50;
    const chargePerKilometre = 15;
    const totalFare = baseFare + (distanceInKm * chargePerKilometre);

  console.log(`Uko kwote? io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKilometre}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("kalia Pikipiki Twende mwahahahaha!!!(evil laughter for those wondering what's going on)");
}

//calling the function
const userInput = prompt("Unafika wapi Mkubwa? kilometer ngapi?");
calculateBodaFare(Number(userInput));