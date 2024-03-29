'use strict';

/**
 * Redemption.js controller
 *
 * @description: A set of functions called "actions" for managing `Redemption`.
 */

module.exports = {

  /**
   * Retrieve redemption records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.redemption.search(ctx.query);
    } else {
      return strapi.services.redemption.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a redemption record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.redemption.fetch(ctx.params);
  },

  /**
   * Count redemption records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.redemption.count(ctx.query, populate);
  },

  /**
   * Create a/an redemption record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.redemption.add(ctx.request.body);
  },

  /**
   * Update a/an redemption record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.redemption.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an redemption record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.redemption.remove(ctx.params);
  }
};
