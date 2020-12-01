@extends('admin.master')
@section('title', 'Slides')

@section ('styles')
<link rel="stylesheet" href="/assets/vendor/datatables/media/css/dataTables.bootstrap4.min.css" />
@endsection

@section('content')

<div class="page-header">
                            <h2 class="header-title">Slides Table</h2>
                            <div class="header-sub-title">
                                <nav class="breadcrumb breadcrumb-dash">
                                    <a href="#" class="breadcrumb-item"><i class="ti-home p-r-5"></i>Home</a>
                                    <a class="breadcrumb-item" href="#">Tables</a>
                                    <span class="breadcrumb-item active">Slides Table</span>
                                </nav>
                            </div>
                        </div>  
                        <div class="card">
                            @if(session('slide_del'))
                                <div class="alert alert-success">
                                    {{ session('slide_del') }}
                                </div>
                                @endif
                            <div class="card-body">
                                <div class="table-overflow">
                                    <table id="dt-opt" class="table table-hover table-xl">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div class="checkbox p-0">
                                                        <input id="selectable1" type="checkbox" class="checkAll" name="checkAll">
                                                        <label for="selectable1"></label>
                                                    </div>
                                                </th>
                                                <th>Name</th>
                                                <th>Link</th>
                                                <th>Slug</th>
                                                <th>Type </th>
                                                <th>Width (pixel)</th>
                                                <th>Height (pixel)</th>
                                                <th>Order</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        @foreach($slides as $slide)
                                            <tr>
                                                <td>
                                                    <div class="checkbox">
                                                        <input id="selectable2" type="checkbox">
                                                        <label for="selectable2"></label>
                                                    </div> 
                                                </td>
                                                <td>
                                                    <div class="list-media">
                                                        <div class="list-item">

                                                            <div class="info" style="padding-left: 0px;">
                                                                <span class="title">{!! $slide->name !!}</span>
                                                                <span class="sub-title">ID:{!! $slide->id !!}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><img src="{!! $slide->link!!}" alt="" style="width:300px; heigth:250px"></td>
                                                <td><textarea name="info" rows="5" cols="30">{!! $slide->slug!!}</textarea>

                                                <td>{!! $slide->type!!}</td>
                                                <td>{!! $slide->width!!}</td>
                                                <td>{!! $slide->height!!}</td>
                                                <td>{!! $slide->order!!}</td>
                                                <td class="text-center font-size-18">
                                                    <a href="{!! Route('editSlide', $slide->id) !!}" class="text-gray m-r-15"><i class="ti-pencil"></i></a>
                                                    <form action="{{ route('deleteSlide', $slide->id) }}" method="POST">
                                                        <input type="hidden" name="id" value="{!! $slide->id !!}">
                                                        <input type="hidden" name="_token" value="{!! csrf_token() !!}">
                                                        <button><i class="ti-trash"></i></button>
                                                    </form>
                                                </td>
                                            </tr>
                                            @endforeach

                                        </tbody>
                                    </table>
                                </div> 
                            </div>       
                        </div>   
@endsection

@section('scripts')
<script src="/assets/vendor/datatables/media/js/jquery.dataTables.js"></script>
<script src="/assets/vendor/datatables/media/js/dataTables.bootstrap4.min.js"></script>
<script src="/assets/js/tables/data-table.js"></script>
@endsection