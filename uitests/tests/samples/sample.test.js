import sum from '../../../src/app/sample/sum'

beforeAll(() => {
   //console.log('Initialize data for tests');
});
beforeEach(() => {
  //  console.log('Setup data f/or test');
});
afterEach(() => {
   
});
afterAll(() => {
   // console.log('Clean data after tests');
});
//toBe
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
//run only this test skill all...others

//test.only('adds 1 + 2 to equal 3', () => {
//    expect(sum(1, 2)).toBe(3);
//});

//toBeGreaterThan
test('adds 5 + 2 to equal 8', () => {
    expect(sum(5, 2)).toBeGreaterThan(5)
});
//toEqual
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});
//not.toBe
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
});
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
//Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
//For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});
//You can check if an array contains a particular item using toContain:
const shoppingList = [
    'diapers',
    'kleenex', 
    'trash bags', 
    'paper towels', 
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
});