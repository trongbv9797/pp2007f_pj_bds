<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::create ([
            'name' => 'Admin', 
            'slug' => 'admin',
            'permissions' => [
                'user.create' => true,
                'user.update' => true,
                'user.delete' => true,
            ]
        ]);
        
        $member = Role::create ([
            'name' => 'Member', 
            'slug' => 'member',
            'permissions' => [
                'post.create' => true,
            ]
        ]);
    }
}
