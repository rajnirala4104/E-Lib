const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });

class CacheService {
  constructor() {
    this.cache = cache;
  }

  /**
   * Store a value in the cache with the given key. If the key is already set, the value will be overwritten.
   * @param {string} key - The key to store the value under.
   * @param {*} value - The value to store.
   * @param {number} ttl - The time to live of the entry in seconds. Defaults to 1 day.
   * @returns {boolean} - Whether the value was successfully stored or not.
   */
  async set(key, value, ttl = 60 * 60 * 24) {
    return this.cache.set(key, value, ttl);
  }

  /**
   * Retrieve a value from the cache by its key.
   * @param {string} key - The key of the value to retrieve.
   * @returns {*} - The value associated with the key, or undefined if not found.
   */

  async get(key) {
    return this.cache.get(key);
  }

  /**
   * Check if a key is in the cache.
   * @param {string} key - Key to be checked.
   * @returns {boolean} - Whether the key is in the cache or not.
   */
  async has(key) {
    return this.cache.has(key);
  }

  /**
   * Delete a key from the cache.
   * @param {string} key - Key to be deleted.
   * @returns {boolean} - Whether the key was deleted or not.
   */
  async del(key) {
    return this.cache.del(key);
  }

  /**
   * Clear all entries from the cache.
   * @returns {boolean} - Whether the cache was successfully cleared or not.
   */
  async clear() {
    return this.cache.flushAll();
  }

}

module.exports = { CacheService };