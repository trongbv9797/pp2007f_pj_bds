<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta http-equiv="audience" content="general">
    <meta name="resource-type" content="document">
    <meta name="abstract" content="Thông tin nhà đất Việt Nam">
    <meta name="classification" content="Bất động sản Việt Nam">
    <meta name="area" content="Nhà đất và bất động sản">
    <meta name="placename" content="Việt Nam">
    <meta name="author" content="Batdongsan.com.vn">
    <meta name="copyright" content="©2007 Batdongsan.com.vn">
    <meta name="owner" content="Batdongsan.com.vn">
    <meta name="generator" content="Công ty Cổ phần PropertyGuru Việt Nam">
    <meta name="distribution" content="Global">
    <meta name="revisit-after" content="1 days">
    <meta property="og:url" content="https://batdongsan.com.vn/">
    <meta property="og:title" content="Kênh thông tin số 1 về bất động sản - Cập nhật mới nhất tháng 11/2020">
    <meta property="og:description" content="Kênh thông tin số 1 về bất động sản tại Việt Nam. Mang đến nguồn thông tin mua bán và cho thuê nhà đất, văn phòng, chung cư... Cập nhật tin tức bất động sản nhanh nhất và chính xác nhất.">
    <meta property="og:image" content="https://staticfile.batdongsan.com.vn/images/Logo/BDSLogo.jpg">
    <meta name="robots" content="index,follow">

    <meta name="custom-apple-itunes-app" content="app-id=866492094">
    <meta name="keywords" content="">
    <meta name="description" content="Kênh thông tin số 1 về bất động sản tại Việt Nam. Mang đến nguồn thông tin mua bán và cho thuê nhà đất, văn phòng, chung cư... Cập nhật tin tức bất động sản nhanh nhất và chính xác nhất.">
    @yield('metas')
    {{--CSRF Token--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    {{--Styles css common--}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/filestatic.msvbds.FrontEnd.min.css">
    <link rel="stylesheet" href="./assets/css/filestatic.msvbds.home.min.css">
    <link rel="stylesheet" href="./assets/css/microtip.css">
    @yield('style-libraries')
    {{--Styles custom--}}
    @yield('styles')
</head>
<body>
    @include('partial.header')

    <div class="content">
        @yield('content')
    </div>

    @include('partial.footer')

    {{--Scripts js common--}}
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity=
    "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity=
    "sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity=
    "sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    {{--Scripts link to file or js custom--}}
    <script src="./assets/js/filestatic.msvbds.FrontEnd.Common.Home.min.js"></script>

    <script src="./assets/js/filestatic.msvbds.jquery.compress.js"></script>

    @yield('scripts')
</body>
</html>
