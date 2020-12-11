@extends('admin.master')
@section('title', 'Post Types')
@section ('styles')
<link rel="stylesheet" href="/assets/vendor/datatables/media/css/dataTables.bootstrap4.min.css" />
@endsection
@section('content')
<div class="page-header">
    <h2 class="header-title">Post Types Table</h2>
    <div class="header-sub-title">
        <nav class="breadcrumb breadcrumb-dash">
            <a href="http://127.0.0.1:8000/admin/master" class="breadcrumb-item"><i class="ti-home p-r-5"></i>Home</a>
            <a class="breadcrumb-item" href="{{ route('postTypeIndex') }}">Post Types</a>
            <span class="breadcrumb-item active">All Post Types</span>
        </nav>
    </div>
</div>
<div class="card">
    <div class="card-body">
        @if(session('mess'))
        <p class="alert alert-success">{{ session('mess') }}</p>
        @endif
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
                        <th>Price</th>
                        <th>Unit</th>
                        <th>Days</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($post_types as $post_type)
                    <tr>
                        <td>
                            <div class="checkbox">
                                <input id="{!! $post_type->id !!}" type="checkbox" value="{!! $post_type->id !!}">
                                <label for="{!! $post_type->id !!}"></label>
                            </div>
                        </td>
                        <td>
                            <div class="list-media">
                                <div class="list-item">
                                    <div class="info" style="padding-left: 0px;">
                                        <span class="title">{!! $post_type->name !!}</span>
                                        <span class="sub-title">ID {!! $post_type->id !!}</span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{!! $post_type->price !!}</td>
                        <td>{!! $post_type->unit !!}</td>
                        <td>{!! $post_type->days !!}</td>
                        <td class="text-center font-size-18">
                            <a href="{{ route('editPostType', $post_type->id) }}" class="text-gray m-r-15"><i class="ti-pencil"></i></a>
                            <form action="{{ route('deletePostType', $post_type->id) }}" method="POST">
                                <input type="hidden" name="id" value="{!! $post_type->id !!}">
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