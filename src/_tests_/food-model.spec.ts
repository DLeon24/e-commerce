import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  test('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'Coca Cola',
      description: 'Soda',
      price: 5.5
    })
    expect(foodModel.getName()).toEqual('Coca Cola')
    expect(foodModel.getDescription()).toEqual('Soda')
    expect(foodModel.getPrice()).toBe(5.5)
  })
})
