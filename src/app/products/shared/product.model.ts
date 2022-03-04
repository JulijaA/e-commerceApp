export class IProduct {
    id: number;
    brand: string;
    name: string;
    gender: string;
    typeOfProduct: string;
    model: string;
    quantity: string;
    price: number;
    imageUrl: string;

    constructor(id: number, brand: string, name: string, gender: string, typeOfProduct: string, model: string, quantity: string, price: number, imageUrl: string) {
      this.id = id;
      this.brand = brand;
      this.name = name;
      this.gender = gender;
      this.typeOfProduct = typeOfProduct;
      this.model = model;
      this.quantity = quantity;
      this.price = price;
      this.imageUrl = imageUrl;
    }
}
