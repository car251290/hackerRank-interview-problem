const Products = require('../models/Products');

router.post('/', controller.createProduct);
router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.export = router;