import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  test('Class FoodModel', () => {
    const foodModel = new FoodModel('Coca Cola', 'Soda', 5.5)
    expect(foodModel.getName()).toEqual('Coca Cola')
    expect(foodModel.getDescription()).toEqual('Soda')
    expect(foodModel.getPrice()).toEqual(5.5)
  })
})
