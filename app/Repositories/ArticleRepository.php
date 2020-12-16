<?php
namespace App\Repositories;

use App\Models\Article;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function index()
    {
        return Article::all()->take(15);
    }
}