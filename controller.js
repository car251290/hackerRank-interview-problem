const Products = require('../models/Products');

class Products {
    async createProduct(req, res) {
        try {
            const { body } = req;
            const data = await Products.findAll();
            body.id = data.length + 1;
            const response = await Products.create(body);
            res.status(201).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async getProductById(req, res) {

        const { id } = req.params;
        if (data) {
            res.status(200).json(data);
        } else {
            res.status(404).send("ID not found");
        }


    }
    updateProductById(req, res) {
        res.status(405).json({ message: 'updateProductById' });
    }

}

module.exports = new Products();