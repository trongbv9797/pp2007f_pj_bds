<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return view ('admin.user.index',compact('users'));
    }

    public function create() {
        return view ('admin.user.create');
    }

    public function store(Request $request) {
        $user = new User();
        // $disk = Storage::disk('local');
        // dd($path);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->inputPassword;
        $user->fullname = $request->fullname;
        $user->dateofbirth = date('Y-m-d',strtotime($request->dateofbirth));
        $user->address = $request->address;
        $user->phonenumber = $request->phonenumber;
        $user->sex = $request->sex;

        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $name = $file->getClientOriginalName();
            
            $nameAva = time()."_".$name;

            $file->move(config('app.link_users'), $nameAva);
            $user->avatar = $nameAva;
        }
        else {
            $user->avatar = "";
        }
        
        $user->save();
        return view ('admin.user.create');
    }

    public function edit($id) {
        $user = User::find($id);
        return view ('admin.user.edit',compact('user'));
    }

    public function update(Request $request,$id) {
        $user = User::findOrFail($id);

        if ($request->hasFile('avatar1')) {
            $file = $request->file('avatar1');
            $name = $file->getClientOriginalName();
            $nameAva = time()."_".$name;
            $file->move(config('app.link_users'), $nameAva);
            $user->avatar = $nameAva;
        }
        else {
            $user->avatar = "";
        }
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->inputPassword;
        $user->fullname = $request->fullname;
        $user->dateofbirth = date('Y-m-d',strtotime($request->dateofbirth));
        $user->address = $request->address;
        $user->phonenumber = $request->phonenumber;
        $user->sex = $request->sex;
        $user->save();
        $users = User::all();
        return view ('admin.user.index',compact('users'));
    }

    public function delete($id) {
        $user = User::find($id);
        $user->delete();
        $users = User::all();
        return view ('admin.user.index',compact('users'));
    }

}
