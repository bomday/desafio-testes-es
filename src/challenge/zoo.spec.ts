
import { Zoo, Animal } from './zoo';

describe('Zoo', () => {
  let zoo: Zoo;

  beforeEach(() => {
    zoo = new Zoo();
  });

  test('should add a new animal', () => {
    const animal = new Animal('Leo', 'Lion', 5);
    zoo.addAnimal(animal);
    expect(zoo.getAllAnimals()).toContainEqual(animal);
  });

  // Add more tests here

  test('should remove an animal from the zoo', () => {
    // Add animals
    const animal1 = new Animal('Gift', 'Tiger', 1);
    const animal2 = new Animal('Nala', 'Wolf', 2);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);
    
    // Remove animal
    zoo.removeAnimal('Gift');

    // Check expected result
    expect(zoo.getAllAnimals()).not.toContain(animal1);
    expect(zoo.getAllAnimals()).toContain(animal2);
  });

  test('should return an animal by searching for its name', () => {
    // Add animal
    const newAnimal = new Animal('Apolo', 'Coyote', 8);
    zoo.addAnimal(newAnimal);
    
    // Search animal
    const searchedAnimal = zoo.getAnimal('Apolo');

    // Check expected result
    expect(searchedAnimal).toBe(newAnimal);
  });

  test('should return undefined if the animal is not found', () => {
    // Search undefined animal
    const foundAnimal = zoo.getAnimal('Tobby');

    // Check expected result
    expect(foundAnimal).toBeUndefined();
  });

  test('should return all animals', () => {
    // Add animals
    const animal1 = new Animal('Bambi', 'Deer', 5);
    const animal2 = new Animal('Faline', 'Deer', 5);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    // Search all animals
    const animals = zoo.getAllAnimals();

    // Check expected result
    expect(animals).toEqual([animal1, animal2]);
  });

  test('should return all animals of a given species', () => {
    // Add animals
    const bear1 = new Animal('Panda', 'Bear', 15);
    const bear2 = new Animal('Grizzly', 'Bear', 20);
    const bear3 = new Animal('Ice Bear', 'Bear', 18);
    const lion = new Animal('Mufasa', 'Lion', 10);
    zoo.addAnimal(bear1);
    zoo.addAnimal(bear2);
    zoo.addAnimal(bear3);
    zoo.addAnimal(lion);

    // Search for animal species
    const bears = zoo.getAnimalsBySpecies('Bear');

    // Check expected result
    expect(bears).toEqual([bear1, bear2, bear3]);
  });

  test('should return the average age of animals in the zoo', () => {
    // Add animals
    const animal1 = new Animal('Simba', 'Lion', 5);
    const animal2 = new Animal('Nala', 'Lion', 4);
    zoo.addAnimal(animal1);
    zoo.addAnimal(animal2);

    // Calculate average age of animals
    const averageAge = zoo.getAverageAge();

    // Check expected result
    expect(averageAge).toBe(4.5);
  });

  test('should return 0 as the average age if there are no animals in the zoo', () => {
    // Calculate average age of animals
    const averageAge = zoo.getAverageAge();

    // Check expected result
    expect(averageAge).toBe(0);
  });
});