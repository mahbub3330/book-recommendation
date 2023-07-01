<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RecommendedBook extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'book_id',
        'self_link',
        'title',
        'thumbnail',
        'authors',
        'published_date',
    ];

    /**
     * Each Recommended Book Belongs to an user
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->withDefault();
    }
}
