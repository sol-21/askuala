<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            // 'products' => Course::get(),

        ]);
    }
    public function cart()
    {

        return Inertia::render('Cart/CartPage');
    }
    public function management()
    {

        return Inertia::render('Admin/ContentManagement');
    }
    public function courseDetail($id)
    {

        $product = course::findOrFail($id);

        $type = $product->type;


        $suggestedProducts = Course::where('type', $type)->get();


        return Inertia::render('User/CourseDetail', [

            'product' => $product,
            'suggestedProducts' => $suggestedProducts

        ]);
    }

    //  Instructor Profile

    public function instructorProfile()
    {

        return Inertia::render('Instructor/InstructorProfile');
    }
    public function playlist()
    {
        return Inertia::render('Course/PlayList');
    }
}
