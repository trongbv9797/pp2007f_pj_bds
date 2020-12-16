<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NewsFromRequest;
use App\Models\Article;
use App\Repositories\News\NewsRepository;

class NewsController extends Controller
{
    //
    public $newsRepository;

    public function __construct(NewsRepository $newsRepository)
    {
        $this->newsRepository = $newsRepository;
    }

    public function listNews() {
        $news =Article::orderBy('id', 'DESC')->get();
        return view ('pages.admin.listNews', compact('news'));
    }

    public function create()
    {
        return view('pages.admin.createNews');
    }

    public function store(NewsFromRequest $NewsFromRequest){
        $news = new Article();
        $news->content = $NewsFromRequest->get('content');
        $news->title = $NewsFromRequest->get('title');
        $news->type = $NewsFromRequest->get('type');
        $news->image_link = $NewsFromRequest->get('image_link');
        $news->slug = $NewsFromRequest->get('slug');


        $mess = "";
        if($news->save()){
            $mess = "Successful add news!";
        }

        return view('pages.admin.createNews', compact('news'))->with('mess', $mess);
    }

    public function edit($id)
    {
        $news = Article::find($id);
        return view("pages.admin.editNews", compact('news'));
    }

    public function update(NewsFromRequest $request, $id)
    {
        $news = Article::find($id);
        $news->title = $request->get('title');
        $news->content = $request->get('content');
        $news->slug = $request->get('slug');
        $news->type = $request->get('type');
        $news->image_link = $request->get('image_link');
        $news->save();
        return redirect('/admin/news')->with("mess", "Edit News success!");

    }
    public function delete (Request $request, $id) {
        $news = Article::find($id);
        $news->delete();
        return redirect()->route('listNews')->with('mess','Deleted successfully!');
    }


}