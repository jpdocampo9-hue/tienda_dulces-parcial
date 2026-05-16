export class ResumenTienda {
  #dulces;

  constructor(dulces) {
    this.#dulces = dulces;
  }

  
  getTotalStock() {
    return this.#dulces.reduce((acc, d) => acc + Number(d.stock), 0);
  }


  getMasEconomico() {
    return this.#dulces.reduce((min, d) =>
      Number(d.precio) < Number(min.precio) ? d : min
    );
  }


  getMasCostoso() {
    return this.#dulces.reduce((max, d) =>
      Number(d.precio) > Number(max.precio) ? d : max
    );
  }
}