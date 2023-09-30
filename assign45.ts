interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow arbitrary additional properties
  }
  
  function createCar(manufacturer: string, modelName: string, ...args: any[]): Car {
    const car: Car = {
      manufacturer,
      modelName,
    };
  
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function with required information and additional properties
  const myCar = createCar('Toyota', 'Camry', 'color', 'blue', 'year', 2023);
  
  console.log(myCar);
  
  












export{};