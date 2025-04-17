'use strict';

/**
 * custom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custom.custom', ({ strapi }) => ({
  async combinedData(ctx) {
    const [products, categories] = await Promise.all([
      strapi.entityService.findMany('api::product.product', { populate: '*' }),
      strapi.entityService.findMany('api::category.category', { populate: '*' }),
    ]);

    // let stockless10=0
    // let stockgreater10=0

    // products.forEach((el)=>{
    //     if(el.stock <=10){
    //         stockless10++
    //     }
    //     else if(el.stock >10){
    //         stockgreater10++
    //     }
    // })
    
    ctx.body = {
      products,  
      categories,
      // productCount: products.length,
    //   categoryCount: categories.length,

    
    // stockless10,
    // stockgreater10
    };
  }
}));
