<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'image' => fake()->image(),
            'type' => fake()->randomElement(['Web Development', 'Mobile Development', 'Personal Development']),
            'video' => fake()->country(),
            'rating' => fake()->numberBetween(0, 5),
            'price' => fake()->numberBetween(100, 500),
        ];
    }
}
