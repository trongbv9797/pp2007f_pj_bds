<?php
namespace App\Repositories\User;

use App\Repositories\BaseRepository;
use App\Models\User;
use App\Models\Ward;
use Illuminate\Support\Facades\DB;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public function getModel()
    {
        return User::class;
    }

    public function getUser()
    {
        return $this->model->take(5)->get();
    }

    public function update($id, $attributes = [])
    {
        $result = $this->model->find($id);
        if ($result) {
            if ($attributes->hasFile('avatar1')) {
                $file = $attributes->file('avatar1');
                $name = $file->getClientOriginalName();
                $nameAva = time()."_".$name;
                $file->move(config('app.link_users'), $nameAva);
                $result->avatar = $nameAva;
            }

            $result->username = $attributes->username;
            $result->email = $attributes->email;
            $result->fullname = $attributes->fullname;
            $result->dateofbirth = date('Y-m-d',strtotime($attributes->dateofbirth));
            if($attributes->ward != 0) {
                $result->address = Ward::where('code',$attributes->ward)->first()->path_with_type;
            }
            $result->phonenumber = $attributes->phonenumber;
            $result->sex = $attributes->sex;
            $account = $result->account;
            $result->account = $account + $attributes->account;
            $result->roles()->sync($attributes->role);
            return $result->save();
        }

        return false;
    }

    public function create($attributes = [])
    {   
        if ($attributes->hasFile('avatar')) {
            $file = $attributes->file('avatar');
            $name = $file->getClientOriginalName();
            
            $nameAva = time()."_".$name;
            
            $file->move(config('app.link_users'), $nameAva);
            $attributes->avatar = $nameAva;
        }
        else {
            $attributes->avatar = "";
        }

        $result = new User();

        if ($result) {
            $result->username = $attributes->username;
            $result->email = $attributes->email;
            $result->password = $attributes->inputPassword;
            $result->fullname = $attributes->fullname;
            $result->dateofbirth = date('Y-m-d',strtotime($attributes->dateofbirth));
            $result->address = $attributes->address;
            $result->phonenumber = $attributes->phonenumber;
            $result->sex = $attributes->sex;
            $result->avatar = $attributes->avatar; 
            $result->save();
            $result1 = $result::where('email',$attributes->email)->first();
    
            $resultRole = DB::table('role_user')->insert([
                'user_id' => $result1->id,
                'role_id' => 2,
            ]);
    
        } else {

        return false;
        }
    }

}