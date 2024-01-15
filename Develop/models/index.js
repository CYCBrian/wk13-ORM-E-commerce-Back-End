// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: "'product_tag",
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through:{
    model: ProductTag,
    unique: false},
  as: 'tag_product',
  onDelete:'Cascade',
  onUpdate:'Cascade'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
