import {Cache} from "../src/cache";


test('Existent key should return its value', () => {
    const cache = new Cache();
    cache.Add("key", "value", 1);

    expect(cache.Get("key")).toBe("value");
});


test('Non-existent key should return null', () => {
    const cache = new Cache();

    expect(cache.Get("key")).toBe(null);
});


test('Non-existent key with hits less than 1 should return null', () => {
    const cache = new Cache();
    cache.Add("key", "value", 0);

    expect(cache.Get("key")).toBe(null);
});


test('Should decrease element counter', () => {
    const cache = new Cache();
    cache.Add("key", "value", 1);
    cache.Get("key");

    expect(cache.Get("key")).toBe(null);
});


test('Add pairs and output them correctly', () => {
    const cache = new Cache();
    cache.Add("key1", "value1", 1);
    cache.Add("key2", "value2", 2);

    var desiredRes = "key1, value1, 1\nkey2, value2, 2\n";
    expect(cache.ShowHistory()).toBe(desiredRes);
});


test('Add pairs, perform some operations on them, and output them correctly', () => {
    const cache = new Cache();
    cache.Add("key1", "value1", 1);
    cache.Add("key2", "value2", 2);

    cache.Get("key1");
    cache.Get("key1");
    cache.Get("key2");

    var desiredRes = "key2, value2, 1\n";
    expect(cache.ShowHistory()).toBe(desiredRes);
});
