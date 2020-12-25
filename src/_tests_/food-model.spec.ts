import { FoodHelper } from '../helpers/food-model-helper'
import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  test('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'Coca Cola',
      description: 'Soda',
      price: 5.5
    })
    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Coca Cola')
    expect(foodModel.getDescription()).toEqual('Soda')
    expect(foodModel.getPrice()).toBe(5.5)
  })

  it('Class FoodHelper', () => {
    const foodHelper = new FoodHelper()
    expect(foodHelper).toEqual(foodHelper)
  })
})
