<?php

namespace Quiz\Http\Controllers\Admin;

use Illuminate\Http\Request;

use Quiz\Http\Requests;
use Quiz\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function dashboard()
    {
    	return 'Admin';
    }
}
