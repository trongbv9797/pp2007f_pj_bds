<?php

namespace App\Repositories\HistoryAccount;

use App\Models\HistoryAccount;
use App\Repositories\BaseRepository;

class HistoryAccountRepository extends BaseRepository implements HistoryAccountRepositoryInterface
{
    public function getModel() {
        
        return HistoryAccount::class;
    }

}