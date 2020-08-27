const costBike = localStorage.costBike ? JSON.parse(localStorage.costBike) : [];
const costCar = localStorage.costCar ? JSON.parse(localStorage.costCar) : [];

export const saveCostBike = (id, time, nopol) => {
    costBike.push({ id, time, nopol });
    localStorage.setItem("costBike", JSON.stringify(costBike));
  };

  export const saveCostCar = (id, time, nopol) => {
    costCar.push({ id, time, nopol });
    localStorage.setItem("costCar", JSON.stringify(costCar));
  };