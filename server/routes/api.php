<?php

use App\Http\Controllers\RecommendedBookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books/{userId}', [RecommendedBookController::class, 'index']);
Route::post('/books', [RecommendedBookController::class, 'store']);
Route::get('/books-details/{recommendedBook}', [RecommendedBookController::class, 'show']);
