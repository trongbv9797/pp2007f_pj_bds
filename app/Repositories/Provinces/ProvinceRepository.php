<?php

namespace App\Repositories\Provinces;

use App\Repositories\BaseRepository;
use App\Models\Province;

Class ProvinceRepository extends BaseRepository implements ProvinceRepositoryInterface
{
    public function getModel(){
        $string = file_get_contents(public_path('assets/dist/tinh_tp.json'));
        $json_a = json_decode($string, true);
        return $json_a;
    }

    public function setModel()
    {
        $this->model = $this->getModel();
    }

    public function getAll()
    {
        return $this->model;
    }
}