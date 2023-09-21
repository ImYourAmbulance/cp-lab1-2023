import {Cache} from "../src/cache";

test('Base case', () => {
    const cache = new Cache();
    cache.Add("key", "value", 1);

    expect(cache.Get("key")).toBe("value");
});


test('Should decrease element counter', () => {
    const cache = new Cache();
    cache.Add("key", "value", 1);
    cache.Get("key");

    expect(cache.Get("key")).toBe(null);
});