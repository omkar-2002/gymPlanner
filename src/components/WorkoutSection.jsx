import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Flame, Heart } from 'lucide-react';

const WorkoutSection = ({ schedule }) => {
  const [expandedSection, setExpandedSection] = useState('main');

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 mb-8">
      {/* Title and Time */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          {schedule.title}
        </h2>
        <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>{schedule.time}</span>
        </div>
      </div>

      {/* Warm Up Section */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={() => toggleSection("warmup")}
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
        >
          <div className="flex items-center gap-3">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="font-medium">Warm Up</span>
          </div>
          {expandedSection === "warmup" ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        {expandedSection === "warmup" && (
          <div className="mt-3 sm:mt-4 pl-4 text-gray-700">
            {schedule.warmup.exercises.map((exercise, index) => (
              <div key={index} className="flex items-center gap-4 py-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div>
                  <p className="font-medium">{exercise.name}</p>
                  <p className="text-sm text-gray-600">
                    {exercise.duration || exercise.reps}
                  </p>
                  {exercise.description && (
                    <p className="text-sm text-gray-500">{exercise.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Workout Section */}
      <div className="mb-4 sm:mb-6">
        <button
          onClick={() => toggleSection("main")}
          className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <span className="font-medium">Main Workout</span>
          </div>
          {expandedSection === "main" ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        {expandedSection === "main" && (
          <div className="mt-3 sm:mt-4">
            <div className="relative w-full overflow-x-auto border border-gray-200 rounded-lg">
              <table className="table-fixed w-[600px] md:w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-1/3 py-3 pl-4 pr-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                      Exercise
                    </th>
                    <th className="w-1/12 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                      Sets
                    </th>
                    <th className="w-1/6 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                      Reps
                    </th>
                    <th className="w-1/6 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                      Rest
                    </th>
                    <th className="w-1/4 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {schedule.mainWorkout.map((exercise, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-800">
                        {exercise.exercise}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                        {exercise.sets}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                        {exercise.reps}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                        {exercise.rest}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-600">
                        {exercise.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Abs Circuit Section */}
      {schedule.absCircuit && (
        <div className="mb-4 sm:mb-6">
          <button
            onClick={() => toggleSection("abs")}
            className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
              <span className="font-medium">Ab Circuit</span>
            </div>
            {expandedSection === "abs" ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          {expandedSection === "abs" && (
            <div className="mt-3 sm:mt-4">
              <div className="relative w-full overflow-x-auto border border-gray-200 rounded-lg">
                <table className="table-fixed w-[600px] md:w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-1/3 py-3 pl-4 pr-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                        Exercise
                      </th>
                      <th className="w-1/6 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                        Sets
                      </th>
                      <th className="w-1/3 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                        Reps/Duration
                      </th>
                      <th className="w-1/6 px-3 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">
                        Rest
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {schedule.absCircuit.map((exercise, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-gray-800">
                          {exercise.exercise}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                          {exercise.sets}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                          {exercise.reps || exercise.duration}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-700">
                          {exercise.rest}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Cardio Section */}
      {schedule.cardio && (
        <div className="mb-4 sm:mb-6">
          <button
            onClick={() => toggleSection("cardio")}
            className="w-full flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
          >
            <div className="flex items-center gap-3">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="font-medium">Cardio</span>
            </div>
            {expandedSection === "cardio" ? (
              <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
          {expandedSection === "cardio" && (
            <div className="mt-3 sm:mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Type</p>
                  <p className="font-medium text-gray-800">{schedule.cardio.type}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Duration</p>
                  <p className="font-medium text-gray-800">
                    {schedule.cardio.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Structure</p>
                  <p className="font-medium text-gray-800">
                    {schedule.cardio.structure.highIntensity} high intensity /{" "}
                    {schedule.cardio.structure.rest} rest
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Rounds</p>
                  <p className="font-medium text-gray-800">
                    {schedule.cardio.structure.rounds}
                  </p>
                </div>
              </div>
              {schedule.cardio.options && (
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Exercise Options:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {schedule.cardio.options.map((option, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white rounded-full text-xs sm:text-sm text-gray-700"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkoutSection;