<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;


//rotas
Route::get('/usuario',   [UsuarioController::class, 'index']);
Route::post('/usuario',  [UsuarioController::class, 'create']);
Route::put('/usuario/{id}',  [UsuarioController::class, 'update']);
Route::delete('/usuario/{id}',  [UsuarioController::class, 'destroy']);
    



