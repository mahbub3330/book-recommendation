<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use JsonSerializable;

class RecommendedBookCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {

        return [
            'data' => collect($this->collection)->map(function ($item) {
                return [
                    "id" => $item->id,
                    "book_id" => $item->book_id,
                    "selfLink" => $item->self_link ??  null,
                    "title" => $item->title ?? null,
                    "thumbnail" => $item->thumbnail ?? null,
                    "authors" => $item->item ?? null,
                    "publishedDate" => $item->published_date ?? null,
                    "created_at" => $item->created_at ?? null,
                    "updated_at" => $item->updated_at ?? null,
                ];
            }),
            'pagination' => [
                'current_page' => $this->currentPage(),
                'last_page' => $this->lastPage(),
                'per_page' => $this->perPage(),
                'total' => $this->total(),
                'next_page_url' => $this->nextPageUrl(),

            ],
        ];
    }

}
