<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;


class Usuario extends Model
{
    //protected $table     = 'usuario';
    protected $connection     = 'mongodb';
    protected $collection     = 'usuarios';
    protected $fillable  = ['nome', 'email', 'idade'];
}
