<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SlideFromRequest;
use App\Models\Slide;
use App\Repositories\Slide\SlideRepositoryInterface;

class SlideController extends Controller
{
    public $slideRepository;

    public function __construct(SlideRepositoryInterface $slideRepository)
    {
        $this->slideRepository = $slideRepository;
    }

    public function index()
    {
        $slides = $this->slideRepository->index();
        
        return view('pages.admin.slide', compact('slides'));
    }

    public function create()
    {   
        return view('pages.admin.createSlide');
    }

    public function store(Request $request)
    {   
        if ($request->hasFile('link')) 
        {
            
            $files = $request->file('link');

            foreach ($files as $file) {
                $slide = new Slide();
                $name = $file->getClientOriginalName();
                $nameImg = time()."_".$name;
                $file->move(config('app.link_slides'), $nameImg);
                $slide->link = $nameImg;
                $slide->name = $request->get('name');
                $slide->slug = $request->get('slug');
                $slide->type = $request->get('type');
                $slide->width = $request->get('width');
                $slide->height = $request->get('height');
                $slide->order = $request->get('order');
                $slide->save();
            }
            
        }
    

        $mess = "";
        if ($slide->save()) {
            $mess = "Successful add new slide!";
        }

        return view('pages.admin.createSlide', compact('slide'))->with('mess', $mess);
    }
    public function edit($id)
    {
        $slide = Slide::find($id);
        $types = Slide::distinct()->get('type');
        return view("pages.admin.editSlide", compact('slide', 'types'));
    }

    public function update(SlideFromRequest $request, $id)
    {
        $slide = Slide::find($id);
        $types = Slide::distinct()->get('type');

        $slide = Slide::findOrFail($id);

        if ($request->hasFile('link1')) {
            $file = $request->file('link1');
            $name = $file->getClientOriginalName();
            $nameImg = time()."_".$name;
            
            $file->move(config('app.link_slides'), $nameImg);
            $slide->link = $nameImg;
        }
        else {
            $slide->link = "";
        }

        $slide->name = $request->get('name');
        $slide->slug = $request->get('slug');
        $slide->type = $request->get('type');
        $slide->width = $request->get('width');
        $slide->height = $request->get('height');
        $slide->order = $request->get('order');
        $slide->save();
        return view("pages.admin.editSlide", compact('slide', 'types'))->with("mess", "Edit Slide success!");
    }

    public function delete(Request $request, $id)
    {
        $slide = Slide::find($id);
        $slide->delete();
        return redirect()->route('Slide')->with('slide_del', "Delete Slide Success");
    }

   
}
