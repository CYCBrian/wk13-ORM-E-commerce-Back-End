const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags and includes its associated Product data
    try {
    const findAllTags = await Tag.findAll({
      include:[{model: Product, through:ProductTag, as: 'tag_to_product'}]
    });
    res.status(200).json({
      message: "All tags retrieved with their associated products.",
      data: findAllTags
    });
  } catch(err){
    res.status(500).json({
      message: "Internal server error. Unable to retrieve tags and their associated products.",
      data: err}); //just err or use data: err
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` and includes its associated Product data
  try{
    const findOneTag = await Tag.findByPk(req.params.id,{
      include:[{model: Product, through:ProductTag, as: 'tag_to_product'}]
    });
    if(!findOneTag){
      res.status(404).json({message:"No tag found with this id."});
      return;
    }
    res.status(200).json({
      message:"Tag retrieved with its associated products.",
      data: findOneTag
  });
} catch(err){
  res.status(500).json({
    message: "Internal server error. Unable to retrieve tag and its associated products.",
    data: err});
}
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json({
      message:"Tag created",
      data: createTag
    });
  }catch(err){
    res.status(400).json({
      message:"Bad request. Unable to create new tag.",
      data: err
    });
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateTag = await Tag.update(
      {
        id: req.body.id,
        tag_name: req.body.tag_name
      },
      {
        where:{
          id: req.params.id
        }
      }
    );
    res.status(200).json({
      message:"Tag updated.",
      data: updateTag
    });
  }catch(err){
    res.status(400).json({
      message:"Bad request. Unable to update tag.",
      data: err
    });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!deleteTag) {
      res.status(404).json({message:"No tag found with this id."})
      return
    }
    res.status(200).json({
      message: "Tag deleted.",
      data: deleteTag
    });
  } catch(err){
    res.status(500).json({
      message: "Internal server error. Unable to delete tag.",
      data: err
    })
  }
});

module.exports = router;
