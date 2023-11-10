<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'video',
        'rating',
        'price',
        'type'

    ];
    public function enrolment_item(): HasMany
    {
        return $this->hasMany(EnrolmentItem::class);
    }
}
