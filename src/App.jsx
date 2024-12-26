import React, { useState } from "react";
import { workoutSchedule } from "./constant/Planner";
import { dietSchedule } from "./constant/Planner";
import { Clock, ChevronDown, ChevronUp, Flame, Heart, Dumbbell, Utensils } from "lucide-react";
import WorkoutSection from "./components/WorkoutSection";
import DietSection from "./components/DietSection";

const App = () => {
  const [activeDay, setActiveDay] = useState("monday");
  const [activeTab, setActiveTab] = useState("workout"); // New state for tab control

  return (
    <div className="min-h-screen w-full bg-gray-100 py-4 sm:py-8 text-gray-800">
      <div className="w-full max-w-md mx-auto px-4 sm:max-w-7xl sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            12-Week Transformation Plan
          </h1>
          <p className="text-gray-600">Your journey to a stronger, fitter you</p>
        </div>

        {/* Tab Selector */}

        {/* Day Selector */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 mb-6 sm:mb-8 justify-center">
          {Object.keys(workoutSchedule).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all ${
                activeDay === day
                  ? activeTab === "workout"
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="transition-all duration-300 ease-in-out">
          {activeTab === "workout" ? (
            <WorkoutSection schedule={workoutSchedule[activeDay]} />
          ) : (
            <DietSection schedule={dietSchedule[activeDay]} />
          )}
        </div>

        {/* Mobile Tab Bar - Fixed at Bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden">
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => setActiveTab("workout")}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                activeTab === "workout" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Dumbbell className="w-5 h-5" />
              <span className="text-xs mt-1">Workout</span>
            </button>
            <button
              onClick={() => setActiveTab("diet")}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                activeTab === "diet" ? "text-green-600" : "text-gray-600"
              }`}
            >
              <Utensils className="w-5 h-5" />
              <span className="text-xs mt-1">Diet</span>
            </button>
          </div>
        </div>

        {/* Bottom Padding for Mobile */}
        <div className="h-16 sm:h-0 md:h-0"></div>
      </div>
    </div>
  );
};

export default App;