<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function index(){
        $users = User::paginate(5);
        return response()->json($users);
    }


    public function store(Request $request){

        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);


        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'password' => Hash::make($request->password),
            'role_id'=>2,
        ]);

        return response()->json($user,200);

    }

    public function update(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'min:3','max:50'],
            'email' => ['required',  'email', 'unique:users,email,'.$request->id],
            'phone' => ['required',  'regex:/^([0-9\s\-\+\(\)]*)$/', 'max:255', 'unique:users,phone,'.$request->id],
        ]);

        if($request->password!=""){
              $request->validate([
                    'password' => ['required', 'string', 'min:8'],
              ]);
            User::where('id',$request->id)->update(['password'=>Hash::make($request->password)]);
        }

        //   $user=User::where('id',$request->id)->first();
          User::where('id',$request->id)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,

        ]);

        return response()->json();
    }
}
