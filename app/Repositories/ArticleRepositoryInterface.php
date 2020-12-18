<?php
namespace App\Repositories;

interface ArticleRepositoryInterface
{
    public function index();
    public function articles($id);
}