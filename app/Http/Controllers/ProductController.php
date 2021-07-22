<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [];
        // $products = Product::with('categories')->get();
        $categories = Category::all();
        // $data['products'] = $products;
        $data['categories'] = $categories;
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
        $product = new Product;

        $validate = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'description' => 'required',
            


        ]);

        $name = "";
        if($request->hasfile('image')) {
            $name = !empty($request->title) ? $request->title : config('app.name');

            $name = Str::slug($name, '-')  . "-" . time() . '.' . $request->image->extension();
            $request->image->move(public_path("/product/images/"), $name);
        }
        $product->product_name = $request->name;
        $product->price = $request->price;
        $product->product_detail = $request->description;
        $product->image =$name;
        $product->tags = json_encode($request->tag);
        $product->save();
         $added = $product->categories()->attach($request->category_id,['created_at'=>now(), 'updated_at'=>now()]);

       if($added){
           return response()->json('Product Added Successfully');

       }


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product= Product::with('categories')->find($product->id);
        return response()->json($product);
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $product= Product::with('categories')->find($product->id);
        return response()->json($product);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product = Product::with('categories')->find($product->id);
        $product->categories()->detach();
        $product->forceDelete();
        if($product){
            return response()->json(['success'=>'Product Successfully Deleted!']);
                    }else{

            return response()->json(['error'=>'Error Deleting Product!']);
        }
    }
}
