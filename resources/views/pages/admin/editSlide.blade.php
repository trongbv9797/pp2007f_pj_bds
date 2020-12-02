@extends('admin.master')
@section('title', 'Edit Slides')
@section('content')
<div class="page-header">
    <h2 class="header-title">Edit Slides</h2>
    <div class="header-sub-title">
        <nav class="breadcrumb breadcrumb-dash">
            <a href="#" class="breadcrumb-item"><i class="ti-home p-r-5"></i>Home</a>
            <a class="breadcrumb-item" href="{{ route('Slide') }}">Slides</a>
            <span class="breadcrumb-item active">Edit Slides</span>
        </nav>
    </div>
</div>
<div class="card">
    <div class="card-header border bottom">
        <h4 class="card-title">Please fill the infomation</h4>
    </div>
    @if(isset($mess))
    <div class="alert alert-success">
        {!! $mess !!}
    </div>
    @endif

    @if(isset($errors))
    @foreach($errors->all() as $error)
    <div class="alert alert-danger">
        {!! $error !!}
    </div>
    @endforeach
    @endif
    <div class="card-body">
        <div class="row">
            <div class="col-sm-8">
                <form role="form" id="form-validation" action="{!! Route('updateslide', $slide->id) !!}" method="POST">
                    @csrf
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Name *</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Required *" name="name">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Link *</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Required *" name="link">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Slug *</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Required *" name="slug">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Type *</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" placeholder="Required *" name="type">
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Width *</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" placeholder="Required *" name="width">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Height *</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" placeholder="Required *" name="height">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label control-label">Order *</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" placeholder="Required *" name="order">
                        </div>
                    </div>
                    <button class="btn btn-gradient-success" name="btnSubmit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection 