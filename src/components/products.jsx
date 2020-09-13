import * as React from 'react';
import { Component } from 'react';

import categoryService from './../services/categoryService';
import productService from './../services/productService';
import shoppingCartService from './../services/shoppingCartService';
import CategoriesList from './common/categoriesList';
import ProductCart from './productCart';

class Products extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: null,
    shoppingCart: null,
  };

  async componentDidMount() {
    let products = await productService.getAll();
    for (let product of products) {
      product.quantity = 0;
    }

    const categories = await categoryService.getAll();

    const shoppingCart = await shoppingCartService.getCart();

    if (shoppingCart.items.length)
      shoppingCart.items.forEach((item) => {
        const index = products.findIndex((p) => p._id === item.product._id);
        if (index !== -1) products[index].quantity = item.quantity;
      });

    this.setState({ products, categories, shoppingCart });
  }

  handleCategorySelect = (categoryName) => {
    this.setState({ selectedCategory: categoryName });
  };

  render() {
    const { products, categories, selectedCategory } = this.state;

    let filteredProducts = [];
    if (selectedCategory)
      filteredProducts = products.filter(
        (p) => p.category === selectedCategory
      );
    else filteredProducts = products;

   // if (!filteredProducts.length) return <h1>Products have not been found</h1>;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-block d-lg-none">
            <div className="sticky-top my-2">
          
              <CategoriesList
                items={categories}
                selectedItem={selectedCategory}
                onItemSelect={this.handleCategorySelect}
              />
            
            </div>
          </div>

          <div className="col-lg-3 d-none d-lg-block">
            <div className="sticky-top">
              <CategoriesList
                items={categories}
                selectedItem={selectedCategory}
                onItemSelect={this.handleCategorySelect}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {filteredProducts.map((product, i) => (
                <div key={i} className="col-md-2 col-lg-3 col-xl-4">
                  <ProductCart key={product._id} product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
