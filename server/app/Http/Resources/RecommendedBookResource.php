<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RecommendedBookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "book_id" => $this->book_id,
            "selfLink" => $this->self_link ??  null,
            "title" => $this->title ?? null,
            "thumbnail" => $this->thumbnail ?? null,
            "authors" => $this->item ?? null,
            "publishedDate" => $this->published_date ?? null,
            "created_at" => $this->created_at ?? null,
            "updated_at" => $this->updated_at ?? null,
        ];
    }
}
