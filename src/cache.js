class Cache{
    Get(key) {
        if (this.#hits.has(key) && this.#hits.get(key) > 0) {
            this.#hits.set(key, this.#hits.get(key) - 1);
            return this.#values.get(key);
        }
        return null;
    }

    Add(key, value, hits = 1) {
        this.#hits.set(key, hits);
        this.#values.set(key, value);
    }

    #values = new Map();
    #hits = new Map();
}
export {Cache}