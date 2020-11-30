<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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
        // dd($request->toArray());
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->inputPassword;
        $user->fullname = $request->fullname;
<<<<<<< bc66557b26f139d594431141c8e8fe256da0c913
        $user->dateofbirth = $request->dateofbirth;
=======
        $user->dateofbirth = date('Y-m-d',strtotime($request->dateofbirth));
>>>>>>> delete_user_not_ajax
        $user->address = $request->address;
        $user->sex = $request->sex;
        $user->save();
        return view ('admin.user.create',compact('user'));
    }

<<<<<<< bc66557b26f139d594431141c8e8fe256da0c913
    public function edit() {
        return view ('admin.user.edit');
=======
    public function edit($id) {
        $user = User::find($id);
        return view ('admin.user.edit',compact('user'));
    }

    public function update(Request $request,$id) {
        $user = User::find($id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->inputPassword;
        $user->fullname = $request->fullname;
        $user->dateofbirth = $request->dateofbirth;
        $user->address = $request->address;
        $user->sex = $request->sex;
        $user->save();
        return view ('admin.user.edit',compact('user'));
    }

    public function delete($id) {
        $user = User::find($id);
        $user->delete();
        $users = User::all();
        return view ('admin.user.index',compact('users'));
>>>>>>> delete_user_not_ajax
    }

}
