<style>
    .select-control {
        width: 200px !important;
    }

    .select-control.city-control {
        width: 200px !important;
    }

    .select-control.district-control {
        width: 200px !important;
    }

    .select-control.price-control {
        width: 140px !important;
    }

    .select-control.area-control {
        width: 170px !important;
    }

    #btnSearch {
        color: white;
    }
</style>
<form id="boxSearchForm" action="{{ route('nha_dat_ban_post') }}" method="get" novalidate="novalidate">
    @csrf
    <div class="search-bar shadow-lv-1 clearfix">
        <div class="search-guide" style="left: 1274.5px; top: 64px; display: block;">
            <div class="icon-guide"><img src="./assets/image/ic_triangle.svg"></div>
        </div>
        <ul class="search-bar-tab mar-left-16 pad-top-8 mar-right-16">
            <li class="filter-nha-dat actived" ptype="38" style="width: 70px;" name="nha-dat-ban">Bán</li>
            <li class="filter-nha-dat" ptype="49" style="width: 100px;" name="nha-dat-cho-thue">Cho thuê</li>
        </ul>
        <input data-val="true" data-val-required="The CateId field is required." id="type" name="CateId" type="hidden" value="38">

        <div class="search-bar-suggestion pad-top-8 mar-right-16">
            <input type="hidden" id="suggestionTemp">
            <input id="Keyword" name="Keyword" type="hidden" value="">
            <input type="text" placeholder="Tìm kiếm địa điểm, khu vực" class="search-bar-input ui-autocomplete-input" id="search-suggestion" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
            <span class="icon-close hiding">
                <img src="./assets/image/ic_close.png">
            </span>
        </div>
        <div class="select-control city-control">
            <div class="select-control-label">
                <div class="dropbox-label">Khu vực</div>
                <select name="province" id="filter-province" class="province" data-type="province">
                    <option value="toan-quoc" name="toan-quoc" selected>Toàn quốc</option>
                    @foreach($provinces as $province)
                    <option value="{!! $province->slug !!}" name="$province->slug">{!! $province->name !!}</option>
                    @endforeach
                </select>
            </div>
            <!-- list tp cu~ -->
        </div>
        <div class="select-control district-control">
            <div class="select-control-label">
                <div class="dropbox-label">Quận, huyện</div>
                <select name="quan" id="filter-district">
                    <option value="0" selected>
                        Tất cả
                    </option>
                    <option value="1">
                        Tất cả 2
                    </option>
                    <option value="2">
                        Tất cả 4
                    </option>
                </select>
            </div>
        </div>
        <div class="select-control price-control">
            <div class="select-control-label">
                <div class="dropbox-label">Mức giá</div>
                <select name="gia" id="filter-price">
                    <option value="0" selected>Tất cả</option>
                    <option value="1">1 - 2 tỷ</option>
                    <option value="2">2 - 3 tỷ</option>
                    <option value="3">3 - 5 tỷ</option>
                    <option value="4">5 - 7 tỷ</option>
                    <option value="5">7 - 10 tỷ</option>
                </select>
            </div>
        </div>
        <div class="select-control area-control">
            <div class="select-control-label">
                <div class="dropbox-label">Diện tích</div>
                <select name="dt" id="filter-area">
                    <option value="0" selected>Tất cả</option>
                    <option value="1">1 - 2 tỷ</option>
                    <option value="2">30 - 50 m2</option>
                    <option value="3">50 - 80 m2</option>
                    <option value="4">80 - 100 m2</option>
                    <option value="5">100 - 150 m2</option>
                    <option value="6">150 - 200 m2</option>
                </select>
            </div>

        </div>

        <input type="submit" id="btnSearch" class="btn-blue-7" value="Tìm kiếm">
        <div id="link-reset" aria-label="Xóa tiêu chí lọc" data-microtip-position="bottom-left" role="tooltip"><img src="./assets/image/ic_reset.svg"></div>
    </div>
</form>
<script type="text/javascript">
                ///<reference path='../../../../../../../../DVG.BDS.WebApp.FrontEnd.StaticFiles/wwwroot/js/Common/FrontEnd.BoxSearch.js' />
                (function getData() {
                    if (window.FrontEnd && window.FrontEnd.BoxSearch) {
                        var boxSearchServices = new FrontEnd.BoxSearch({
                            boxSearchDataCacheKey: 'BoxSearchData',
                            boxSearchDataCacheTime: 120,
                            getDataForBoxSearchUrl: '/Systems/Home/GetDataForBoxSearch'
                        })
                        boxSearchServices.GetData().then(function(data) {
                            (function callJQuery() {
                                if (window.FrontEnd && window.FrontEnd.Home && window.FrontEnd.Home
                                    .BoxSearchBinnova) {
                                    new window.FrontEnd.Home.BoxSearchBinnova({
                                        cities: data.cities,
                                        cateList: data.cateList,
                                        priceLevels: data.priceLevels
                                    });
                                } else {
                                    setTimeout(callJQuery, 100)
                                }
                            })();
                        })
                    } else {
                        setTimeout(getData, 100);
                    }
                })();
            </script>
<script>
    $(document).ready(function() {
        $('.filter-nha-dat').click(function() {
            $(this).addClass('actived').siblings().removeClass('actived');
        });


        // clear filter
        $('#link-reset').click(function() {
            $('#boxSearchForm')[0].reset();
        });

        $('.province').click( function(){
            
            alert('sd');
                // $.ajax({
                //     type: "get",
                //     url: "/user/ajaxDistrict",
                //     data: {
                //         parent_code: id
                //     },
                //     dataType: "html",
                //     success: function(data) {

                //     }
                // }).done(function(data) {
                //     $('#districts').html(data);

                // });
        })
    });
</script>
