class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const existingProduct = this.products.find(p => p.code === code);
        if (existingProduct) {
            throw new Error(`Ya existe un producto con el código ${code}`);
        }
        const id = new Date().getTime().toString();
        const product = { id, title, description, price, thumbnail, code, stock };
        this.products.push(product);
        return product;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new Error(`No se encontró el producto con id ${id}`);
        }
        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

const product1 = productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});
console.log(product1);

console.log(productManager.getProducts());

try {
    const product2 = productManager.addProduct({
        title: "otro producto",
        description: "Este es otro producto",
        price: 100,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 10,
    });
    console.log(product2);
} catch (error) {
    console.error(error.message);
}

const productById = productManager.getProductById(product1.id);
console.log(productById);

try {
    const productById2 = productManager.getProductById("123456");
    console.log(productById2);
} catch (error) {
    console.error(error.message);
}
