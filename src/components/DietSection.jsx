import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Utensils, Apple, Coffee, Scale } from 'lucide-react';

const DietSection = ({ schedule }) => {
  const [expandedMeal, setExpandedMeal] = useState('preWorkout');

  const toggleMeal = (meal) => {
    if (expandedMeal === meal) {
      setExpandedMeal(null);
    } else {
      setExpandedMeal(meal);
    }
  };

  // Helper function to calculate total calories for a meal
  const calculateMealTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.calories || 0), 0);
  };

  return (
    <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 mb-8">
      {/* Title and Macros */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {schedule.title}
          </h2>
          <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
            <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{schedule.totalCalories} calories</span>
          </div>
        </div>

        {/* Macros Overview */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Protein</p>
            <p className="font-bold text-blue-600">{schedule.macros.protein}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Carbs</p>
            <p className="font-bold text-orange-600">{schedule.macros.carbs}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Fats</p>
            <p className="font-bold text-purple-600">{schedule.macros.fats}</p>
          </div>
        </div>
      </div>

      {/* Meals Section */}
      <div className="space-y-4">
        {Object.entries(schedule.meals).map(([mealTime, meal]) => (
          <div key={mealTime} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleMeal(mealTime)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Utensils className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-800 capitalize">
                    {mealTime.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{meal.time}</span>
                    <span className="text-gray-400">•</span>
                    <span>{calculateMealTotal(meal.items)} cal</span>
                  </div>
                </div>
              </div>
              {expandedMeal === mealTime ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {expandedMeal === mealTime && (
              <div className="px-4 pb-4">
                <div className="mt-3">
                  <div className="relative w-full overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Food</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Quantity</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Calories</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Macros</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {meal.items.map((item, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                                  {item.food.toLowerCase().includes('coffee') ? (
                                    <Coffee className="w-3 h-3 text-green-600" />
                                  ) : (
                                    <Apple className="w-3 h-3 text-green-600" />
                                  )}
                                </div>
                                <span className="text-sm font-medium text-gray-800">{item.food}</span>
                              </div>
                            </td>
                            <td className="px-3 py-2 text-sm text-gray-600">{item.quantity}</td>
                            <td className="px-3 py-2 text-sm font-medium text-gray-800">
                              {item.calories ? `${item.calories} cal` : '-'}
                            </td>
                            <td className="px-3 py-2">
                              <div className="flex flex-wrap gap-2 text-xs">
                                {item.protein && (
                                  <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                    {item.protein} protein
                                  </span>
                                )}
                                {item.carbs && (
                                  <span className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full">
                                    {item.carbs} carbs
                                  </span>
                                )}
                                {item.fats && (
                                  <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full">
                                    {item.fats} fats
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Notes Section */}
                {meal.items.some(item => item.notes) && (
                  <div className="mt-4 bg-gray-50 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Notes:</h4>
                    <ul className="space-y-1">
                      {meal.items.map((item, index) => (
                        item.notes && (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{item.notes}</span>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Supplements Section */}
      {schedule.supplements && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Supplements</h3>
          <div className="space-y-3">
            {schedule.supplements.map((supplement, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="font-medium text-gray-800">{supplement.name}</p>
                  <p className="text-sm text-gray-600">{supplement.timing}</p>
                </div>
                <div className="text-sm text-gray-600">{supplement.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DietSection;