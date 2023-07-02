<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecommendedBookRequest;
use App\Http\Resources\RecommendedBookCollection;
use App\Http\Resources\RecommendedBookResource;
use App\Models\RecommendedBook;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class RecommendedBookController extends Controller
{
    /**
     * Display a listing of the Recommended Books of an user.
     *
     * @return JsonResponse
     */
    public function index($userId): JsonResponse
    {
        try {
            $recommendedBooks = RecommendedBook::query()
                ->where('user_id', $userId)
                ->paginate();
            return response()->json((new RecommendedBookCollection($recommendedBooks)), ResponseAlias::HTTP_OK);
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage(), $exception->getCode());
        }
    }


    /**
     * Store a newly created recommended book resource.
     *
     * @param RecommendedBookRequest $request
     * @param RecommendedBook $recommendedBook
     * @return JsonResponse
     */
    public function store(RecommendedBookRequest $request, RecommendedBook $recommendedBook): JsonResponse
    {
        try {
            $recommendedBook = $recommendedBook->fill($request->all())->save();
            return response()->json($recommendedBook, ResponseAlias::HTTP_CREATED);
        } catch (\Exception $exception) {
            return response()->json($exception->getMessage(), $exception->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param RecommendedBook $recommendedBook
     * @return JsonResponse
     */
    public function show(RecommendedBook $recommendedBook): JsonResponse
    {
        try {
            return response()->json((new RecommendedBookResource($recommendedBook)), ResponseAlias::HTTP_OK);
        } catch (\Exception $exception) {
            return \response()->json($exception->getMessage(), $exception->getCode());
        }
    }
}
