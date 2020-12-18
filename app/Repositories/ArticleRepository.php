<?php
namespace App\Repositories;

use App\Models\Article;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function index()
    {
        return Article::orderBy('id', 'desc')->limit(15)->get();
    }

    public function articles($id)
    {
        return Article::where('id', $id)->orderBy('id', 'desc')->get();
    }
}