<?php

namespace Quiz\Http\Controllers;

use Illuminate\Http\Request;

use Quiz\Http\Requests;
use Quiz\Http\Controllers\Controller;

class PagesController extends Controller
{
    public function Home()
    {
    	if (\Auth::check())
    	{
    		return view('pages.home');
    	} else {
    		return view('pages.welcome');
    	}
    }
}
