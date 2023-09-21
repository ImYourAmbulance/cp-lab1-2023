class Cache{
    Get(key) {
        if (this.#hits.has(key) && this.#hits.get(key) > 0) {
            this.#hits.set(key, this.#hits.get(key) - 1);
            const result = this.#values.get(key);
            if (this.#hits.get(key) == 0) {
                this.#hits.delete(key);
                this.#values.delete(key);
            }
            return result;
        }
        return null;
    }

    Add(key, value, hits = 1) {
        this.#hits.set(key, hits);
        this.#values.set(key, value);
    }

    ShowHistory() {
        var result = "";
        for (let [key, value] of this.#values) {
            result += key + ", " + value + ", " + this.#hits.get(key) + "\n";
        }
        return result;
    }

    #values = new Map();
    #hits = new Map();
}
export {Cache}