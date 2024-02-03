const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories and include its associated Products
  try {
    const findAllCategories = await Category.findAll({
      include:[Product]
    });
    res.status(200).json({
      message: "All categories retrieved with their associated products.",
      data: findAllCategories
    });
  } catch(err){
    res.status(500).json({
      message: "Internal server error. Unable to retrieve categories and their associated products.",
      data: err
    });
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value and include its associated Products
  try{
    const findOneCategory = await Category.findByPk(req.params.id,{
      include:[Product]
    });
    if(!findOneCategory){
      res.status(404).json({message:"No category found with this id."});
      return;
    }
    res.status(200).json({
      message:"Category retrieved with its associated products.",
      data: findOneCategory
  });
} catch(err){
  res.status(500).json({
    message: "Internal server error. Unable to retrieve category and its associated products.",
    data: err});
}
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);
    res.status(200).json({
      message:"Category created",
      data: createCategory
    });
  }catch(err){
    res.status(400).json({
      message:"Bad request. Unable to create new category.",
      data: err
    });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCategory = await Category.update(
      {
        id: req.body.id,
        category_name: req.body.category_name
      },
      {
        where:{
          id: req.params.id
        }
      }
    );
    res.status(200).json({
      message:"Category updated.",
      data: updateCategory
    });
  }catch(err){
    res.status(400).json({
      message:"Bad request. Unable to update category.",
      data: err
    });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!deleteCategory) {
      res.status(404).json({message:"No category found with this id."})
      return
    }
    res.status(200).json({
      message: "Category deleted.",
      data: deleteCategory
    });
  } catch(err){
    res.status(500).json({
      message: "Internal server error. Unable to delete category.",
      data: err
    })
  }
});

module.exports = router;
