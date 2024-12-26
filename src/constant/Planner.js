export const workoutSchedule = {
    monday: {
      title: "Push Day",
      time: "7:00 AM - 8:30 AM",
      warmup: {
        duration: "10 minutes",
        exercises: [
          {
            name: "Dynamic stretching",
            duration: "3 minutes",
            description: "Full body stretching"
          },
          {
            name: "Arm circles",
            reps: "10 each direction",
            description: "Both forward and backward"
          },
          {
            name: "Shoulder mobility work",
            duration: "2 minutes",
            description: "All shoulder movements"
          },
          {
            name: "Light push-ups",
            reps: "10",
            description: "Focus on form"
          }
        ]
      },
      mainWorkout: [
        {
          exercise: "Bench Press",
          sets: 4,
          reps: "8-12",
          rest: "90 sec",
          notes: "Progressive overload weekly",
          form: "Retract scapula, feet planted"
        },
        {
          exercise: "Overhead Press",
          sets: 4,
          reps: "8-12",
          rest: "90 sec",
          notes: "Keep core tight",
          form: "Avoid arching back"
        },
        {
          exercise: "Incline Dumbbell Press",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          notes: "Control the weight",
          form: "45-degree bench angle"
        },
        {
          exercise: "Lateral Raises",
          sets: 3,
          reps: "12-15",
          rest: "60 sec",
          notes: "Light weight, strict form",
          form: "Slight bend in elbows"
        },
        {
          exercise: "Tricep Pushdowns",
          sets: 3,
          reps: "12-15",
          rest: "60 sec",
          notes: "Focus on contraction",
          form: "Elbows at sides"
        }
      ],
      absCircuit: [
        {
          exercise: "Cable Crunches",
          sets: 3,
          reps: "15-20",
          rest: "45 sec",
          notes: "Hip hinge movement"
        },
        {
          exercise: "Hanging Leg Raises",
          sets: 3,
          reps: "12-15",
          rest: "45 sec",
          notes: "Full range of motion"
        },
        {
          exercise: "Plank",
          sets: 3,
          duration: "45-60 sec",
          rest: "30 sec",
          notes: "Keep body straight"
        },
        {
          exercise: "Russian Twists",
          sets: 3,
          reps: "20 total",
          rest: "45 sec",
          notes: "Feet elevated"
        }
      ],
      cardio: {
        type: "HIIT",
        duration: "10-15 minutes",
        structure: {
          highIntensity: "30 seconds",
          rest: "30 seconds",
          rounds: "10-15"
        },
        options: [
          "Treadmill sprints",
          "Battle ropes",
          "Burpees",
          "Mountain climbers"
        ]
      }
    },
  
    tuesday: {
      title: "Pull Day",
      time: "7:00 AM - 8:30 AM",
      warmup: {
        duration: "10 minutes",
        exercises: [
          {
            name: "Band pull-aparts",
            reps: "15",
            description: "Warm up shoulders"
          },
          {
            name: "Cat-cow stretches",
            duration: "2 minutes",
            description: "Spinal mobility"
          },
          {
            name: "Light rows",
            reps: "12",
            description: "With resistance band"
          }
        ]
      },
      mainWorkout: [
        {
          exercise: "Pull-ups/Assisted Pull-ups",
          sets: 4,
          reps: "Till failure",
          rest: "90 sec",
          notes: "Full range of motion",
          form: "Control descent"
        },
        {
          exercise: "Barbell Rows",
          sets: 4,
          reps: "8-12",
          rest: "90 sec",
          notes: "Progressive overload",
          form: "45-degree angle"
        },
        {
          exercise: "Face Pulls",
          sets: 3,
          reps: "12-15",
          rest: "60 sec",
          notes: "External rotation",
          form: "Pull to forehead"
        },
        {
          exercise: "Bicep Curls",
          sets: 3,
          reps: "12-15",
          rest: "60 sec",
          notes: "Strict form",
          form: "No swinging"
        },
        {
          exercise: "Cable Rows",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          notes: "Squeeze back",
          form: "Chest up"
        }
      ],
      cardio: {
        type: "HIIT",
        duration: "10-15 minutes",
        structure: {
          highIntensity: "30 seconds",
          rest: "30 seconds",
          rounds: "10-15"
        }
      }
    },
  
    wednesday: {
      title: "Legs & Core",
      time: "7:00 AM - 8:30 AM",
      warmup: {
        duration: "10 minutes",
        exercises: [
          {
            name: "Bodyweight squats",
            reps: "15",
            description: "Wake up legs"
          },
          {
            name: "Hip mobility",
            duration: "3 minutes",
            description: "All directions"
          },
          {
            name: "Leg swings",
            reps: "10 each leg",
            description: "Forward and side"
          }
        ]
      },
      mainWorkout: [
        {
          exercise: "Squats",
          sets: 4,
          reps: "8-12",
          rest: "120 sec",
          notes: "Drive through heels",
          form: "Keep chest up"
        },
        {
          exercise: "Romanian Deadlifts",
          sets: 4,
          reps: "8-12",
          rest: "90 sec",
          notes: "Feel hamstrings",
          form: "Soft knee bend"
        },
        {
          exercise: "Leg Press",
          sets: 3,
          reps: "10-12",
          rest: "90 sec",
          notes: "Full range",
          form: "Feet shoulder width"
        },
        {
          exercise: "Calf Raises",
          sets: 4,
          reps: "15-20",
          rest: "60 sec",
          notes: "Full stretch",
          form: "Controlled movement"
        }
      ],
      absCircuit: [
        {
          exercise: "Decline Crunches",
          sets: 3,
          reps: "15-20",
          rest: "45 sec",
          notes: "Full contraction"
        },
        {
          exercise: "Dead Bug",
          sets: 3,
          reps: "12 each side",
          rest: "45 sec",
          notes: "Keep back flat"
        },
        {
          exercise: "Side Planks",
          sets: 3,
          duration: "30 sec each",
          rest: "30 sec",
          notes: "Hip up high"
        }
      ],
      cardio: {
        type: "HIIT",
        duration: "10-15 minutes",
        structure: {
          highIntensity: "30 seconds",
          rest: "30 seconds",
          rounds: "10-15"
        }
      }
    }
  };

export const dietSchedule = {
    monday: {
      title: "High Protein Day",
      totalCalories: "2000-2200",
      macros: {
        protein: "180g",
        carbs: "200g",
        fats: "55g"
      },
      meals: {
        preWorkout: {
          time: "6:00-6:15 AM",
          items: [
            {
              food: "Banana",
              quantity: "1 medium",
              calories: 105,
              carbs: "27g",
              notes: "Quick energy"
            },
            {
              food: "Whey Protein with Water",
              quantity: "1 scoop",
              calories: 120,
              protein: "24g",
              notes: "Fast absorbing protein"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Mix with protein shake"
            },
            {
              food: "Black Coffee",
              quantity: "1 cup",
              calories: 0,
              notes: "Optional, for energy"
            }
          ]
        },
        postWorkout: {
          time: "8:30-9:00 AM",
          items: [
            {
              food: "Whey Protein with Milk",
              quantity: "1 scoop in 250ml milk",
              calories: 220,
              protein: "32g",
              notes: "Recovery protein"
            },
            {
              food: "Eggs",
              quantity: "4 whites + 1 whole",
              calories: 185,
              protein: "22g",
              notes: "High quality protein"
            },
            {
              food: "Oats",
              quantity: "50g",
              calories: 180,
              carbs: "32g",
              notes: "Complex carbs"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Post workout supplement"
            }
          ]
        },
        lunch: {
          time: "2:00 PM",
          items: [
            {
              food: "Rice",
              quantity: "1.5 cups cooked",
              calories: 300,
              carbs: "66g",
              notes: "Main carb source"
            },
            {
              food: "Soya Chunks",
              quantity: "100g (cooked)",
              calories: 220,
              protein: "52g",
              notes: "Plant-based protein"
            },
            {
              food: "Mixed Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Nutrients and fiber"
            }
          ]
        },
        dinner: {
          time: "8:00-9:00 PM",
          items: [
            {
              food: "Chapati",
              quantity: "3 pieces",
              calories: 360,
              carbs: "72g",
              notes: "Complex carbs"
            },
            {
              food: "Chicken/Paneer",
              quantity: "150g",
              calories: 250,
              protein: "30g",
              notes: "Main protein source"
            },
            {
              food: "Mixed Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Micronutrients"
            }
          ]
        }
      },
      supplements: [
        {
          name: "Creatine",
          timing: "5g pre and post workout",
          notes: "For strength and recovery"
        },
        {
          name: "Whey Protein",
          timing: "2 scoops daily",
          notes: "Pre and post workout"
        }
      ]
    },
  
    tuesday: {
      title: "Pull Day Nutrition",
      totalCalories: "2000-2200",
      macros: {
        protein: "180g",
        carbs: "200g",
        fats: "55g"
      },
      meals: {
        preWorkout: {
          time: "6:00-6:15 AM",
          items: [
            {
              food: "Apple",
              quantity: "1 medium",
              calories: 95,
              carbs: "25g",
              notes: "Pre-workout energy"
            },
            {
              food: "Whey Protein with Water",
              quantity: "1 scoop",
              calories: 120,
              protein: "24g",
              notes: "Pre-workout protein"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Strength supplement"
            }
          ]
        },
        postWorkout: {
          time: "8:30-9:00 AM",
          items: [
            {
              food: "Eggs",
              quantity: "6 whites + 1 whole",
              calories: 210,
              protein: "28g",
              notes: "Complete protein"
            },
            {
              food: "Oatmeal",
              quantity: "60g",
              calories: 240,
              carbs: "40g",
              notes: "Complex carbs"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Post workout"
            }
          ]
        },
        lunch: {
          time: "2:00 PM",
          items: [
            {
              food: "Brown Rice",
              quantity: "1.5 cups cooked",
              calories: 330,
              carbs: "69g",
              notes: "Complex carbs"
            },
            {
              food: "Paneer",
              quantity: "150g",
              calories: 390,
              protein: "27g",
              notes: "Main protein"
            },
            {
              food: "Mixed Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Fiber source"
            }
          ]
        },
        dinner: {
          time: "8:00-9:00 PM",
          items: [
            {
              food: "Chapati",
              quantity: "3 pieces",
              calories: 360,
              carbs: "72g",
              notes: "Complex carbs"
            },
            {
              food: "Mixed Dal",
              quantity: "2 cups",
              calories: 300,
              protein: "18g",
              notes: "Protein blend"
            },
            {
              food: "Green Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Micronutrients"
            }
          ]
        }
      },
      supplements: [
        {
          name: "Creatine",
          timing: "5g pre and post workout",
          notes: "For strength and recovery"
        },
        {
          name: "Whey Protein",
          timing: "2 scoops daily",
          notes: "Pre and post workout"
        }
      ]
    },
  
    wednesday: {
      title: "Leg Day Nutrition",
      totalCalories: "2200-2400",
      macros: {
        protein: "180g",
        carbs: "250g",
        fats: "55g"
      },
      meals: {
        preWorkout: {
          time: "6:00-6:15 AM",
          items: [
            {
              food: "Banana",
              quantity: "2 medium",
              calories: 210,
              carbs: "54g",
              notes: "Extra carbs for leg day"
            },
            {
              food: "Whey Protein with Water",
              quantity: "1 scoop",
              calories: 120,
              protein: "24g",
              notes: "Pre-workout protein"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Strength supplement"
            }
          ]
        },
        postWorkout: {
          time: "8:30-9:00 AM",
          items: [
            {
              food: "Whey Protein with Milk",
              quantity: "1 scoop in 300ml milk",
              calories: 250,
              protein: "34g",
              notes: "Recovery protein"
            },
            {
              food: "Oats",
              quantity: "80g",
              calories: 320,
              carbs: "56g",
              notes: "Extra carbs post legs"
            },
            {
              food: "Eggs",
              quantity: "4 whites + 2 whole",
              calories: 240,
              protein: "26g",
              notes: "Complete protein"
            },
            {
              food: "Creatine",
              quantity: "5g",
              calories: 0,
              notes: "Post workout"
            }
          ]
        },
        lunch: {
          time: "2:00 PM",
          items: [
            {
              food: "Rice",
              quantity: "2 cups cooked",
              calories: 400,
              carbs: "88g",
              notes: "Higher carbs for recovery"
            },
            {
              food: "Chicken/Soya",
              quantity: "150g",
              calories: 250,
              protein: "45g",
              notes: "Lean protein"
            },
            {
              food: "Mixed Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Nutrients and fiber"
            }
          ]
        },
        dinner: {
          time: "8:00-9:00 PM",
          items: [
            {
              food: "Chapati",
              quantity: "3 pieces",
              calories: 360,
              carbs: "72g",
              notes: "Complex carbs"
            },
            {
              food: "Mixed Dal",
              quantity: "2 cups",
              calories: 300,
              protein: "18g",
              notes: "Protein blend"
            },
            {
              food: "Vegetables",
              quantity: "200g",
              calories: 70,
              notes: "Micronutrients"
            }
          ]
        }
      },
      supplements: [
        {
          name: "Creatine",
          timing: "5g pre and post workout",
          notes: "For strength and recovery"
        },
        {
          name: "Whey Protein",
          timing: "2 scoops daily",
          notes: "Pre and post workout"
        }
      ]
    }
  };