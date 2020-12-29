@extends('admin.master')

@section('title', 'Posts Edit')

@section('styles')
<link href="/assets/vendor/selectize/dist/css/selectize.default.css" rel="stylesheet">
<link href="/assets/vendor/summernote/dist/summernote-bs4.css"  rel="stylesheet">
<link href="/assets/vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css" rel="stylesheet">
@endsection

@section('content')


<div class="page-header">
    <h2 class="header-title">{{ __('Edit Post') }}</h2>
    <div class="header-sub-title">
        <nav class="breadcrumb breadcrumb-dash">
        <a href="#" class="breadcrumb-item"><i class="ti-home p-r-5"></i>{{ __('Home') }}</a>
            <a class="breadcrumb-item" href="#">Tables</a>
            <span class="breadcrumb-item active">Data Table</span>
        </nav>
    </div>
</div>
{{Session::get('edit_mess')}}
@if(isset($edit_mess))
<div class="alert alert-success alert-dismissible fade in">
  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
  <strong>{!! $edit_mess !!}</strong>
</div>
@endif

@if (Auth::user()->inRole('admin'))
<form method="POST" action="{{ route('updatePost', $post['id']) }}" enctype="multipart/form-data">
  @else 
  <form method="POST" action="{{ route('memberUpdatePost', $post['id']) }}" enctype="multipart/form-data">
    @endif
    <input type="hidden" name="_token" value="{!! csrf_token() !!}">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="title">Title</label>
      <input type="text" class="form-control" id="title" name="title" value="{{ $post['title'] }}">
      </div>
    </div>


    {{-- <div class="form-row">
        <div class="form-group col-md-3">
            <label for="type">Type</label>
            <select name="type"  id="type" class="form-control category">
              @foreach($types as $type)
            <option value="{{ $type['id'] }}"
            @if($type['id'] == $post['post_type_id']) selected @endif>{{ $type['name'] }}
            </option>
              @endforeach
          </select>
          </div>
    </div> --}}

    {{-- @foreach($types as $type) @if($type->id == $post['post_type_id']) selected @endif @endforeach  --}}
  
    <div class="form-row">
      <div class="form-group col-md-3">
        <label for="price">Price</label>
        <input type="number" name="price" class="form-control" id="price" value="{{ $post['price'] }}">
      </div>
      <div class="form-group col-md-3">
        <label for="area">Area</label>
      <input type="number" name="area" class="form-control" id="area" value="{{ $post['area'] }}">
      </div>
    </div>


    <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputAddress">Address</label>
      <input type="text" name="address" class="form-control" id="inputAddress" value="{{ $post['address'] }}">
    </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-3">
          <label for="city">City</label>
          <select name="province" id="city" class="form-control">
            @foreach($provinces as $province)
          <option class="province" value="{{ $province['code'] }}" 
          @if ($province['code'] == $post['provinces_code'])  selected @endif>
          {{ $province['name'] }}
        </option>
            @endforeach
          </select>
        </div>


        <div class="form-group col-md-3">
          <label for="district">District</label>
          <select id="district" name="district" id="district" class="form-control">
            @foreach($districts as $district)
            <option value="{{ $district['code'] }}" 
            @if ($district['code'] == $post['districts_code'])  selected @endif>{{ $district['name_with_type'] }}
            </option>
            @endforeach
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="ward">Ward</label>
          <select name="ward" id="ward" class="form-control">
            @foreach($wards as $ward)
            <option value="{{ $ward['code'] }}" 
            @if ($ward['code'] == $post['wards_code']) selected @endif>{{ $ward['name_with_type'] }}
          </option>
            @endforeach
          </select>
        </div>
  </div>

  <div class="form-row">
      <div class="form-group col-md-2">
        <label for="bedroom">Number of bedroom</label>
        <input type="number" name="bedroom" class="form-control" id="bedroom" value="{{ $post['number_of_bedroom'] }}">
      </div>
      <div class="form-group col-md-2">
          <label for="restroom">Number of restroom</label>
          <input type="number" name="restroom" class="form-control" id="restroom" value="{{ $post['number_of_restroom'] }}">
        </div>
      <div class="form-group col-md-2">
        <label for="floor">Number of floor</label>
        <input type="number" name="floor" class="form-control" id="floor" value="{{ $post['number_of_floor'] }}">
        </div>
      </div>

      <div class="form-row">
      <div class="form-group col-md-12">
        <label for="content">Content</label>
      <textarea class="form-control rounded-0" name="content" id="content" rows="10">{{ $post['content'] }}</textarea>
        </div>
      </div>


<h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Images</h1>

<hr class="mt-2 mb-5">


<div class="card-body border border-secondary shadow-sm p-3 mb-2">
  <div class="form-group">
      <label class="control-label col-sm-12">( * ) Maximum number of photos by types of news:
          Special VIP - 24
          photos, VIP1 - 20 photos, VIP2 & VIP 3 - 18 photos, VIP Offer - 16 photos, Rewards - 8
          photos. Maximum of 2MB each </label>
      <label class="control-label col-sm-12">( * ) Ads with pictures get 10 times more views and 5
          times more
          people call than ads without pictures. Post a picture to get a quick transaction!
      </label>
      <div class="custom-file col-sm-3">
          <input type="file" name="filename[]" class="custom-file-input" id="customFile" multiple>
          <label class="custom-file-label" for="customFile">Add more photos</label>
      </div>

  </div>
</div>

<div class="row text-center text-lg-left">

  @foreach ($images as $image)
<div class="col-lg-3 col-md-4 col-6">
        <img class="img-fluid img-thumbnail" src="{{ $image->link }}" style="width: 500px; height: 300px;"><br>
        @if (Auth::user()->inRole('admin'))
        <a href="javascript:;" class="btn btn-light deleteImage" image_id="{!!  $image->id !!}" style="color: red;" >Delete</a>
        @else
        <a href="javascript:;" class="btn btn-light deleteImageMember" image_id="{!!  $image->id !!}" style="color: red;" >Delete</a>
        @endif
</div>
@endforeach
</div>
<br>

    <button type="submit" class="btn btn-primary">Save</button>
    <a href="{{ URL::previous() }}" class="btn btn-light">Cancel</a>

  </div>

  </form>

@endsection

@section('scripts')
<script src="/assets/vendor/moment/min/moment.min.js"></script>
<script src="/assets/vendor/selectize/dist/js/standalone/selectize.min.js"></script>
<script src="/assets/vendor/summernote/dist/summernote-bs4.min.js"></script>
<script src="/assets/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
<script src="/assets/js/forms/form-elements.js"></script>

<script>
          $(document).ready(function() {
            // province
            $(".province").click(function() {
                var id = $(this).val();
                $.ajax({
                    type: "get",
                    url: "/user/ajaxDistrict",
                    data: {
                        parent_code: id
                    },
                    dataType: "html",
                    success: function(data) {

                    }
                }).done(function(data) {
                    $('#district').html(data);

                });
            });
            
        });

        function selectDistrict(id) {
            $.ajax({
                type: "get",
                url: "/user/ajaxWard",
                data: {
                    parent_code: id
                },
                dataType: "html",
                success: function(data) {

                }
            }).done(function(data) {
                $('#ward').html(data);

            });
        }

        $(document).on('click', '.deleteImage', function() {

        var id_image = $(this).attr('image_id');
        $(this).closest('div').remove();
        $.ajax({
            type: "get",
            url: "/admin/delete-image",
            data: {
                image_id: id_image
            },
            dataType: "html",

            success: function(data) {}
        }).done(function() {
            html(data);
        });
        });

        $(document).on('click', '.deleteImageMember', function() {

          var id_image = $(this).attr('image_id');
          $(this).closest('div').remove();
          $.ajax({
              type: "get",
              url: "/member/delete-image",
              data: {
                  image_id: id_image
              },
              dataType: "html",

              success: function(data) {}
          }).done(function() {
              html(data);
          });
        });
  </script>
@endsection
