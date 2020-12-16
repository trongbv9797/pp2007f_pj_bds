<?php
namespace App\Repositories\News;
use App\Models\Article;

class NewsRepository implements NewsRepositoryInterface
{
    public function listNews() {
        $news =Article::orderBy('id', 'DESC')->get();
        return view ('pages.admin.listNews', compact('news'));
    }
}
