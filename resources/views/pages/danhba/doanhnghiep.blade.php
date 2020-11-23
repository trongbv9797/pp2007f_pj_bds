@extends('layouts.master')

@section('title','Môi giới nhà đất | Các cá nhân, công ty môi giới nhà đất')

@section('styles')
<link rel="stylesheet" href="https://staticfile.batdongsan.com.vn/css/filestatic.ver202011110519.msvbds.FrontEnd.min.css" />
<link rel="stylesheet" type="text/css" href="https://staticfile.batdongsan.com.vn/css/Broker/broker.min.css" media="all">
<link href="https://file4.batdongsan.com.vn/images/icon-bds.ico" rel="shortcut icon" type="image/x-icon" />
<style>
    .arclink{
        line-height:normal;
    }
</style>
@section('content')

<div class="form-content">
        <div class="adPosition" positionCode="BANNER_POSITION_BACKGROUND" style=""></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>

        <div id="staticDomain" statsDomain="https://statistic.batdongsan.com.vn" data-fileimg="https://file4.batdongsan.com.vn" data-web="https://batdongsan.com.vn" data-msvrouter="/microservice-architecture-router" data-msvrouter-personal="/microservice-architecture-router-personal" data-cssServer="https://staticfile.batdongsan.com.vn" data-oldsystem="https://batdongsan.com.vn" data-content="https://batdongsan.com.vn" data-domainorigin="batdongsan.com.vn" data-sug-sell="https://suggestion1.batdongsan.com.vn/" data-sug-rent="https://suggestion2.batdongsan.com.vn/" class="hide"></div>
        <div id="addonImage" addon-image="https://staticfile.batdongsan.com.vn/images/no-image.png"></div>
        <div id="SiteLeft" class="banner-left">
            <div class="container-default">
                <div>
                    <div id="ban_wide_left" class="ban_wide_scroll">
                        <div class="adPosition" positionCode="BANNER_POSITION_WIDE_LEFT" style="margin-bottom: 0px"></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>
                    </div>

                    <div id="ban_left" class="ban_scroll" style="display: block; top: 0px; position: fixed; left: 321.5px;">
                        <div class="adPosition" positionCode="BANNER_POSITION_LEFT" style="margin-bottom: 0px"></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="popupMarking  save" style="display: none">
            <img src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/filled/ic_unsave.svg">
            <span> L&#x1B0;u tin th&#xE0;nh c&#xF4;ng</span>
        </div>
        <div class="popupMarking  unsave" style="display: none">
            <img src="https://staticfile.batdongsan.com.vn/images/mobile/icons/24x24/outlined/ic_save.svg">
            <span> &#x110;&#xE3; b&#x1ECF; l&#x1B0;u tin</span>
        </div>
            <div class="site-center">
                


<link rel="stylesheet" href="https://staticfile.batdongsan.com.vn/css/excoloSlider.css" />
<link rel="stylesheet" type="text/css" href="https://staticfile.batdongsan.com.vn/css/Broker/broker.min.css" media="all">
<div id="MiddleSubMenu">
    

    <div class="broker-top-search enterprise-top-search">
        <div class="col1">
            <div class="label_search">Tìm kiếm doanh nghiệp</div>
        </div>
        <div class="col2">
            <div style="position: relative;">
                <input type="text" id="txtKeyword" maxlength="100" class="suggest" placeholder="Nhập từ khóa tìm kiếm">
            </div>
        </div>
        <div class="clear"></div>
        <div id="searchcontrol">
            <div class="col1">
                &nbsp;
            </div>
            <div class="col2">
                <div id="divBusiness" class="comboboxs advance-select-box mr10">
                    <span class="select-text">
                        <span class="select-text-content" style="width: 182px;">Lĩnh vực</span>
                    </span>
                    <input type="hidden" id="hdBusiness" value="0">
                    <div id="divBusinessOptions" class="advance-select-options advance-options" hddvalue="hdBusiness" ddlid="divBusiness" style="">
                        <ul class="advance-options" style="min-width: 160px;">
                            <li vl="" class="advance-options">Lĩnh vực</li>
                                    <li vl="8" class="advance-options" style="min-width: 175px;">Ch&#x1EE7; &#x111;&#x1EA7;u t&#x1B0;</li>
                                    <li vl="6" class="advance-options" style="min-width: 175px;">Thi c&#xF4;ng x&#xE2;y d&#x1EF1;ng</li>
                                    <li vl="11" class="advance-options" style="min-width: 175px;">T&#x1B0; v&#x1EA5;n thi&#x1EBF;t k&#x1EBF;</li>
                                    <li vl="9" class="advance-options" style="min-width: 175px;">S&#xE0;n giao d&#x1ECB;ch b&#x1EA5;t &#x111;&#x1ED9;ng s&#x1EA3;n</li>
                                    <li vl="10" class="advance-options" style="min-width: 175px;">Trang tr&#xED; n&#x1ED9;i th&#x1EA5;t</li>
                                    <li vl="7" class="advance-options" style="min-width: 175px;">V&#x1EAD;t li&#x1EC7;u x&#xE2;y d&#x1EF1;ng</li>
                                    <li vl="12" class="advance-options" style="min-width: 175px;">T&#xE0;i ch&#xED;nh ph&#xE1;p l&#xFD;</li>
                                    <li vl="15" class="advance-options" style="min-width: 175px;">C&#xE1;c l&#x129;nh v&#x1EF1;c kh&#xE1;c</li>
                        </ul>
                    </div>
                </div>                
                <div id="divBrCity" class="comboboxs advance-select-box mr10">
                    <span class="select-text">
                        <span class="select-text-content" style="width: 182px;">Tỉnh/Thành phố</span>
                    </span>
                    <input type="hidden" id="hdCity" value="">
                    <div id="divBrCityOptions" class="advance-select-options advance-options" hddvalue="hdCity" ddlid="divBrCity" style="">
                        <ul class="advance-options" style="min-width: 207px;">
                            <li vl="" class="advance-options" style="min-width: 175px;">Tỉnh/Thành phố</li>
                                    <li vl="SG" class="advance-options" style="min-width: 175px;">H&#x1ED3; Ch&#xED; Minh</li>
                                    <li vl="HN" class="advance-options" style="min-width: 175px;">H&#xE0; N&#x1ED9;i</li>
                                    <li vl="DDN" class="advance-options" style="min-width: 175px;">&#x110;&#xE0; N&#x1EB5;ng</li>
                                    <li vl="BD" class="advance-options" style="min-width: 175px;">B&#xEC;nh D&#x1B0;&#x1A1;ng</li>
                                    <li vl="DNA" class="advance-options" style="min-width: 175px;">&#x110;&#x1ED3;ng Nai</li>
                                    <li vl="KH" class="advance-options" style="min-width: 175px;">Kh&#xE1;nh H&#xF2;a</li>
                                    <li vl="HP" class="advance-options" style="min-width: 175px;">H&#x1EA3;i Ph&#xF2;ng</li>
                                    <li vl="LA" class="advance-options" style="min-width: 175px;">Long An</li>
                                    <li vl="QNA" class="advance-options" style="min-width: 175px;">Qu&#x1EA3;ng Nam</li>
                                    <li vl="VT" class="advance-options" style="min-width: 175px;">B&#xE0; R&#x1ECB;a V&#x169;ng T&#xE0;u</li>
                                    <li vl="DDL" class="advance-options" style="min-width: 175px;">&#x110;&#x1EAF;k L&#x1EAF;k</li>
                                    <li vl="CT" class="advance-options" style="min-width: 175px;">C&#x1EA7;n Th&#x1A1;</li>
                                    <li vl="BTH" class="advance-options" style="min-width: 175px;">B&#xEC;nh Thu&#x1EAD;n  </li>
                                    <li vl="LDD" class="advance-options" style="min-width: 175px;">L&#xE2;m &#x110;&#x1ED3;ng</li>
                                    <li vl="TTH" class="advance-options" style="min-width: 175px;">Th&#x1EEB;a Thi&#xEA;n Hu&#x1EBF;</li>
                                    <li vl="KG" class="advance-options" style="min-width: 175px;">Ki&#xEA;n Giang</li>
                                    <li vl="BN" class="advance-options" style="min-width: 175px;">B&#x1EAF;c Ninh</li>
                                    <li vl="QNI" class="advance-options" style="min-width: 175px;">Qu&#x1EA3;ng Ninh</li>
                                    <li vl="TH" class="advance-options" style="min-width: 175px;">Thanh H&#xF3;a</li>
                                    <li vl="NA" class="advance-options" style="min-width: 175px;">Ngh&#x1EC7; An</li>
                                    <li vl="HD" class="advance-options" style="min-width: 175px;">H&#x1EA3;i D&#x1B0;&#x1A1;ng</li>
                                    <li vl="GL" class="advance-options" style="min-width: 175px;">Gia Lai</li>
                                    <li vl="BP" class="advance-options" style="min-width: 175px;">B&#xEC;nh Ph&#x1B0;&#x1EDB;c</li>
                                    <li vl="HY" class="advance-options" style="min-width: 175px;">H&#x1B0;ng Y&#xEA;n</li>
                                    <li vl="BDD" class="advance-options" style="min-width: 175px;">B&#xEC;nh &#x110;&#x1ECB;nh</li>
                                    <li vl="TG" class="advance-options" style="min-width: 175px;">Ti&#x1EC1;n Giang</li>
                                    <li vl="TB" class="advance-options" style="min-width: 175px;">Th&#xE1;i B&#xEC;nh</li>
                                    <li vl="BG" class="advance-options" style="min-width: 175px;">B&#x1EAF;c Giang</li>
                                    <li vl="HB" class="advance-options" style="min-width: 175px;">H&#xF2;a B&#xEC;nh</li>
                                    <li vl="AG" class="advance-options" style="min-width: 175px;">An Giang</li>
                                    <li vl="VP" class="advance-options" style="min-width: 175px;">V&#x129;nh Ph&#xFA;c</li>
                                    <li vl="TNI" class="advance-options" style="min-width: 175px;">T&#xE2;y Ninh</li>
                                    <li vl="TN" class="advance-options" style="min-width: 175px;">Th&#xE1;i Nguy&#xEA;n</li>
                                    <li vl="LCA" class="advance-options" style="min-width: 175px;">L&#xE0;o Cai</li>
                                    <li vl="NDD" class="advance-options" style="min-width: 175px;">Nam &#x110;&#x1ECB;nh</li>
                                    <li vl="QNG" class="advance-options" style="min-width: 175px;">Qu&#x1EA3;ng Ng&#xE3;i</li>
                                    <li vl="BTR" class="advance-options" style="min-width: 175px;">B&#x1EBF;n Tre</li>
                                    <li vl="DNO" class="advance-options" style="min-width: 175px;">&#x110;&#x1EAF;k N&#xF4;ng</li>
                                    <li vl="CM" class="advance-options" style="min-width: 175px;">C&#xE0; Mau</li>
                                    <li vl="VL" class="advance-options" style="min-width: 175px;">V&#x129;nh Long</li>
                                    <li vl="NB" class="advance-options" style="min-width: 175px;">Ninh B&#xEC;nh</li>
                                    <li vl="PT" class="advance-options" style="min-width: 175px;">Ph&#xFA; Th&#x1ECD;</li>
                                    <li vl="NT" class="advance-options" style="min-width: 175px;">Ninh Thu&#x1EAD;n</li>
                                    <li vl="PY" class="advance-options" style="min-width: 175px;">Ph&#xFA; Y&#xEA;n</li>
                                    <li vl="HNA" class="advance-options" style="min-width: 175px;">H&#xE0; Nam</li>
                                    <li vl="HT" class="advance-options" style="min-width: 175px;">H&#xE0; T&#x129;nh</li>
                                    <li vl="DDT" class="advance-options" style="min-width: 175px;">&#x110;&#x1ED3;ng Th&#xE1;p</li>
                                    <li vl="ST" class="advance-options" style="min-width: 175px;">S&#xF3;c Tr&#x103;ng</li>
                                    <li vl="KT" class="advance-options" style="min-width: 175px;">Kon Tum</li>
                                    <li vl="QB" class="advance-options" style="min-width: 175px;">Qu&#x1EA3;ng B&#xEC;nh</li>
                                    <li vl="QT" class="advance-options" style="min-width: 175px;">Qu&#x1EA3;ng Tr&#x1ECB;</li>
                                    <li vl="TV" class="advance-options" style="min-width: 175px;">Tr&#xE0; Vinh</li>
                                    <li vl="HGI" class="advance-options" style="min-width: 175px;">H&#x1EAD;u Giang</li>
                                    <li vl="SL" class="advance-options" style="min-width: 175px;">S&#x1A1;n La</li>
                                    <li vl="BL" class="advance-options" style="min-width: 175px;">B&#x1EA1;c Li&#xEA;u</li>
                                    <li vl="YB" class="advance-options" style="min-width: 175px;">Y&#xEA;n B&#xE1;i</li>
                                    <li vl="TQ" class="advance-options" style="min-width: 175px;">Tuy&#xEA;n Quang</li>
                                    <li vl="DDB" class="advance-options" style="min-width: 175px;">&#x110;i&#x1EC7;n Bi&#xEA;n</li>
                                    <li vl="LCH" class="advance-options" style="min-width: 175px;">Lai Ch&#xE2;u</li>
                                    <li vl="LS" class="advance-options" style="min-width: 175px;">L&#x1EA1;ng S&#x1A1;n</li>
                                    <li vl="HG" class="advance-options" style="min-width: 175px;">H&#xE0; Giang</li>
                                    <li vl="BK" class="advance-options" style="min-width: 175px;">B&#x1EAF;c K&#x1EA1;n</li>
                                    <li vl="CB" class="advance-options" style="min-width: 175px;">Cao B&#x1EB1;ng</li>
                        </ul>
                    </div>
                </div>                
                <div id="divBrDistrict" class="comboboxs advance-select-box mr10">
                    <span class="select-text">
                        <span class="select-text-content" style="width: 182px;">Quận/Huyện</span>
                    </span>
                    <input type="hidden" id="hdDistrict" value="0">
                    <div id="divBrDistrictOptions" class="advance-select-options advance-options" hddvalue="hdDistrict" ddlid="divBrDistrict" style="">
                        <ul class="advance-options" style="min-width: 207px;">
                            <li vl="0" class="advance-options current" style="min-width: 175px;">Quận/Huyện</li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
        <div class="col3">
            <input type="submit" value="Tìm kiếm" id="btnSearch" class="search">
        </div>
        <div class="clear"></div>
    </div>

    <div class="clear"></div>
</div>
<div id="MainContent">
</div>
<div class="clear">
</div>
<div class="body-left">
    <div>
        <div class="SubTopContent">
        </div>
        <div class="SubTopContent">
        </div>
    </div>
    <div style="clear: both;">
    </div>
    <div class="container-default">
        <div>
            <div class="enterprise-list">
                <h1>
                    Các doanh nghiệp, công ty bất động sản hàng đầu tại Việt Nam
                </h1>
                    <div class="list-company">
                            <h2><a title="Ch&#x1EE7; &#x111;&#x1EA7;u t&#x1B0;" href="ct-dau-tu-du-an">Ch&#x1EE7; &#x111;&#x1EA7;u t&#x1B0;</a></h2>
                            <ul>                          
                            @foreach ($business as $business)
                                    <li>
                                        <div class="parentitem">
                                            <a class="verticalbox" href="{!! route ('singlepost2',$business->id) !!}">
                                                <img class="img childbox" src="https://file4.batdongsan.com.vn/2020/04/22/PGsxuI1y/20200422111005-0350.jpg" alt="{!!  $business->name !!}">
                                            </a>
                                        </div>
                                        
                                        <h3 class="ver"><strong><a title="{!!  $business->name !!}" href="{!! route ('singlepost2',$business->id) !!}">{!!  $business->name !!}</a></strong></h3>
                                    </li>
                                    @endforeach

                            </ul>
                            <div class="clear separable"></div>
                    </div>
            </div>
        </div>
    </div>
</div>
<div class="body-right">
    <div>
            <div class="container-common">
        <div>
            <div>
                <div class="newsletter-form-small">
                    <div class="mb5">
                        <div class="fl">
                            <img src="https://file4.batdongsan.com.vn/images/icon-newsletter-small.jpg">
                        </div>
                        <div class="fl news-text">Nhận bản tin từ Batdongsan.com.vn</div>
                        <div class="clear"></div>
                    </div>
                    <div class="newsletter-content">
                        <div class="newsletter-bound">
                            <div class="fl input">
                                <input type="text" id="email" placeholder="Nhập email của bạn">
                            </div>
                            <div class="fl a"><a href="#" class="newsletter-register" id="newsletterRegister">Đăng ký</a></div>
                            <div class="clear">&nbsp;</div>
                            <div id="emailValid"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    <div class="adPosition" positionCode="BANNER_POSITION_RIGHT_MAIN_CONTENT" style=""></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>
    <div class="clear10"></div>
    <div class="container-common">
        <div class="ent-home">
            

    <div class="hot-article">
        <h2 class="prj-line normal"><span>D&#x1EF1; &#xE1;n &#x111;ang thi c&#xF4;ng</span></h2>
        <div class="bor_box" id="prjProgress">
                <div class="prj-prgress" style="visibility: visible; overflow: hidden; position: relative; z-index: 2; left: 0px; width: 240px;">

                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/du-an-khac-tan-phu/tan-phu-center-city-pj5120/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/11/09/hmcVYWuR/20201109105559-b86e.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                            <h3><a title="Tân Phú Center City" href="/du-an-khac-tan-phu/tan-phu-center-city-pj5120/p4">Tân Phú Center City</a></h3>
                                
                                <div>Tiến độ dự án cập nhật ngày 09/11/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/du-an-khac-nui-thanh-qna/chu-lai-riverside-pj5117/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/11/06/hmcVYWuR/20201106100551-570c.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Chu Lai Riverside" href="/du-an-khac-nui-thanh-qna/chu-lai-riverside-pj5117/p4">Chu Lai Riverside</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 04/11/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/khu-nghi-duong-sinh-thai-phu-quoc-kg/grand-world-phu-quoc-pj2172/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2015/08/08/0I4XNtd4/20150808120415-3a5c.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Grand World Ph&#xFA; Qu&#x1ED1;c" href="/khu-nghi-duong-sinh-thai-phu-quoc-kg/grand-world-phu-quoc-pj2172/p4">Grand World Ph&#xFA; Qu&#x1ED1;c</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 29/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/khu-do-thi-moi-lang-son-ls/apec-diamond-park-pj5107/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/10/28/hmcVYWuR/20201028173335-23fe.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Apec Diamond Park" href="/khu-do-thi-moi-lang-son-ls/apec-diamond-park-pj5107/p4">Apec Diamond Park</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 28/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/khu-phuc-hop-quan-3/terra-royal-pj763/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/10/22/hmcVYWuR/20201022114237-ae30.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Terra Royal" href="/khu-phuc-hop-quan-3/terra-royal-pj763/p4">Terra Royal</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 22/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/can-ho-chung-cu-quan-8/diamond-riverside-pj788/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2016/03/08/0I4XNtd4/20160308081655-5190.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Diamond Riverside" href="/can-ho-chung-cu-quan-8/diamond-riverside-pj788/p4">Diamond Riverside</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 22/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/khu-do-thi-moi-go-vap/cityland-park-hills-pj2409/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/10/21/hmcVYWuR/20201021092453-5470.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="CityLand Park Hills" href="/khu-do-thi-moi-go-vap/cityland-park-hills-pj2409/p4">CityLand Park Hills</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 21/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/du-an-khac-cam-lam-kh/suoi-tan-diamond-town-pj5103/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2020/10/20/hmcVYWuR/20201020092750-94e6.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Su&#x1ED1;i T&#xE2;n Diamond Town" href="/du-an-khac-cam-lam-kh/suoi-tan-diamond-town-pj5103/p4">Su&#x1ED1;i T&#xE2;n Diamond Town</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 20/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/khu-phuc-hop-ha-dong/toa-thap-thien-nien-ky-pj593/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2019/12/20/hmcVYWuR/20191220105709-e52c.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="T&#xF2;a Th&#xE1;p Thi&#xEA;n Ni&#xEA;n K&#x1EF7;" href="/khu-phuc-hop-ha-dong/toa-thap-thien-nien-ky-pj593/p4">T&#xF2;a Th&#xE1;p Thi&#xEA;n Ni&#xEA;n K&#x1EF7;</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 20/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                        <div class="progress clear">
                            <div class="imgthumb">
                                <a href="/du-an-khac-ha-dong/him-lam-van-phuc-pj3433/p4">
                                    <img src="https://file4.batdongsan.com.vn/crop/78x78/2018/04/03/hmcVYWuR/20180403161910-3c70.jpg">
                                </a>
                            </div>
                            <div class="arclink">
                                <h3><a title="Him Lam V&#x1EA1;n Ph&#xFA;c" href="/du-an-khac-ha-dong/him-lam-van-phuc-pj3433/p4">Him Lam V&#x1EA1;n Ph&#xFA;c</a></h3>
                                <div>Tiến độ dự án cập nhật ngày 20/10/2020</div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>

                </div>

            <div class="slide" style="display: block;">
                <span class="slideprevprogress"></span><span class="slidenextprogress"></span>
            </div>
        </div>
    </div>


        </div>
        <div class="clear10"></div>
        
<div class="broker-top-by-cate"><h2><span class="f17">Xu hướng nội ngoại thất</span></h2></div>
<div class="broker-borbox">
            <div style="padding: 5px; width: 60px; height: 60px; float: left;">
                <div class="many-readers-title-icon">
                    <a title="N&#x1ED9;i th&#x1EA5;t ki&#x1EC3;u H&#xE0;n: C&#xE1;c &#x111;&#x1EB7;c tr&#x1B0;ng c&#x1A1; b&#x1EA3;n v&#xE0; c&#xE1;ch b&#xE0;i tr&#xED;" href="/tu-van-noi-ngoai-that/thiet-ke-noi-that-kieu-han-quoc-ar105439">
                        <img style="width: 60px; height: 60px;" src="https://file4.batdongsan.com.vn/crop/60x60/2020/11/04/JGcIp0rf/20201104144436-2c4b.jpg">
                    </a>
                </div>
            </div>
            <div class="data-default-CSSClass" style="padding-left: 75px;padding-bottom: 15px;">
                <p style="padding: 0px; margin: 5px 5px 0px 5px;">
                    <a class="controls-view-date-contents-link" href="/tu-van-noi-ngoai-that/thiet-ke-noi-that-kieu-han-quoc-ar105439" title="N&#x1ED9;i th&#x1EA5;t ki&#x1EC3;u H&#xE0;n: C&#xE1;c &#x111;&#x1EB7;c tr&#x1B0;ng c&#x1A1; b&#x1EA3;n v&#xE0; c&#xE1;ch b&#xE0;i tr&#xED;">
                        N&#x1ED9;i th&#x1EA5;t ki&#x1EC3;u H&#xE0;n: C&#xE1;c &#x111;&#x1EB7;c tr&#x1B0;ng c&#x1A1; b&#x1EA3;n v&#xE0; c&#xE1;ch b&#xE0;i tr&#xED;
                    </a>
                </p>
            </div>
            <div style="clear: both;"></div>
            <div style="padding: 5px; width: 60px; height: 60px; float: left;">
                <div class="many-readers-title-icon">
                    <a title="Tham kh&#x1EA3;o ngay 9 thi&#x1EBF;t k&#x1EBF; n&#x1ED9;i th&#x1EA5;t gi&#xFA;p ti&#x1EBF;t ki&#x1EC7;m th&#x1EDD;i gian d&#x1ECD;n d&#x1EB9;p" href="/mach-ban/tham-khao-ngay-9-thiet-ke-noi-that-giup-tiet-kiem-thoi-gian-don-dep-ar105423">
                        <img style="width: 60px; height: 60px;" src="https://file4.batdongsan.com.vn/crop/60x60/2020/11/03/akCJKkFO/20201103092947-7412.jpg">
                    </a>
                </div>
            </div>
            <div class="data-default-CSSClass" style="padding-left: 75px;padding-bottom: 15px;">
                <p style="padding: 0px; margin: 5px 5px 0px 5px;">
                    <a class="controls-view-date-contents-link" href="/mach-ban/tham-khao-ngay-9-thiet-ke-noi-that-giup-tiet-kiem-thoi-gian-don-dep-ar105423" title="Tham kh&#x1EA3;o ngay 9 thi&#x1EBF;t k&#x1EBF; n&#x1ED9;i th&#x1EA5;t gi&#xFA;p ti&#x1EBF;t ki&#x1EC7;m th&#x1EDD;i gian d&#x1ECD;n d&#x1EB9;p">
                        Tham kh&#x1EA3;o ngay 9 thi&#x1EBF;t k&#x1EBF; n&#x1ED9;i th&#x1EA5;t gi&#xFA;p ti&#x1EBF;t ki&#x1EC7;m th&#x1EDD;i gian d&#x1ECD;n d&#x1EB9;p
                    </a>
                </p>
            </div>
            <div style="clear: both;"></div>
            <div style="padding: 5px; width: 60px; height: 60px; float: left;">
                <div class="many-readers-title-icon">
                    <a title="4 &#xFD; t&#x1B0;&#x1EDF;ng c&#x1EA3;i t&#x1EA1;o nh&#xE0; c&#x1EA5;p 4 ti&#x1EBF;t ki&#x1EC7;m v&#xE0; hi&#x1EC7;u qu&#x1EA3;" href="/mach-ban/cai-tao-nha-cap-4-cu-ar105411">
                        <img style="width: 60px; height: 60px;" src="https://file4.batdongsan.com.vn/crop/60x60/2020/10/30/JGcIp0rf/20201030172047-0dd9.jpg">
                    </a>
                </div>
            </div>
            <div class="data-default-CSSClass" style="padding-left: 75px;padding-bottom: 15px;">
                <p style="padding: 0px; margin: 5px 5px 0px 5px;">
                    <a class="controls-view-date-contents-link" href="/mach-ban/cai-tao-nha-cap-4-cu-ar105411" title="4 &#xFD; t&#x1B0;&#x1EDF;ng c&#x1EA3;i t&#x1EA1;o nh&#xE0; c&#x1EA5;p 4 ti&#x1EBF;t ki&#x1EC7;m v&#xE0; hi&#x1EC7;u qu&#x1EA3;">
                        4 &#xFD; t&#x1B0;&#x1EDF;ng c&#x1EA3;i t&#x1EA1;o nh&#xE0; c&#x1EA5;p 4 ti&#x1EBF;t ki&#x1EC7;m v&#xE0; hi&#x1EC7;u qu&#x1EA3;
                    </a>
                </p>
            </div>
            <div style="clear: both;"></div>
            <div style="padding: 5px; width: 60px; height: 60px; float: left;">
                <div class="many-readers-title-icon">
                    <a title="Top c&#xE1;c lo&#x1EA1;i hoa d&#x1EC5; tr&#x1ED3;ng v&#xE0; c&#xE1;ch ch&#x103;m s&#xF3;c c&#x1A1; b&#x1EA3;n" href="/mach-ban/cac-loai-hoa-de-trong-ar105398">
                        <img style="width: 60px; height: 60px;" src="https://file4.batdongsan.com.vn/crop/60x60/2020/10/29/JGcIp0rf/20201029211751-95fe.jpg">
                    </a>
                </div>
            </div>
            <div class="data-default-CSSClass" style="padding-left: 75px;padding-bottom: 15px;">
                <p style="padding: 0px; margin: 5px 5px 0px 5px;">
                    <a class="controls-view-date-contents-link" href="/mach-ban/cac-loai-hoa-de-trong-ar105398" title="Top c&#xE1;c lo&#x1EA1;i hoa d&#x1EC5; tr&#x1ED3;ng v&#xE0; c&#xE1;ch ch&#x103;m s&#xF3;c c&#x1A1; b&#x1EA3;n">
                        Top c&#xE1;c lo&#x1EA1;i hoa d&#x1EC5; tr&#x1ED3;ng v&#xE0; c&#xE1;ch ch&#x103;m s&#xF3;c c&#x1A1; b&#x1EA3;n
                    </a>
                </p>
            </div>
            <div style="clear: both;"></div>
            <div style="padding: 5px; width: 60px; height: 60px; float: left;">
                <div class="many-readers-title-icon">
                    <a title="Nh&#x1EEF;ng gi&#x1EA3;i ph&#xE1;p kh&#x1EAF;c ph&#x1EE5;c h&#x1EA1;n ch&#x1EBF; c&#x1EE7;a ph&#xF2;ng kh&#xF4;ng c&#xF3; c&#x1EED;a s&#x1ED5;" href="/tu-van-noi-ngoai-that/gia-phap-khac-phuc-han-che-cua-phong-khong-co-cua-so-ar105369">
                        <img style="width: 60px; height: 60px;" src="https://file4.batdongsan.com.vn/crop/60x60/2020/10/29/akCJKkFO/20201029215759-6d6b.jpg">
                    </a>
                </div>
            </div>
            <div class="data-default-CSSClass" style="padding-left: 75px;padding-bottom: 15px;">
                <p style="padding: 0px; margin: 5px 5px 0px 5px;">
                    <a class="controls-view-date-contents-link" href="/tu-van-noi-ngoai-that/gia-phap-khac-phuc-han-che-cua-phong-khong-co-cua-so-ar105369" title="Nh&#x1EEF;ng gi&#x1EA3;i ph&#xE1;p kh&#x1EAF;c ph&#x1EE5;c h&#x1EA1;n ch&#x1EBF; c&#x1EE7;a ph&#xF2;ng kh&#xF4;ng c&#xF3; c&#x1EED;a s&#x1ED5;">
                        Nh&#x1EEF;ng gi&#x1EA3;i ph&#xE1;p kh&#x1EAF;c ph&#x1EE5;c h&#x1EA1;n ch&#x1EBF; c&#x1EE7;a ph&#xF2;ng kh&#xF4;ng c&#xF3; c&#x1EED;a s&#x1ED5;
                    </a>
                </p>
            </div>
            <div style="clear: both;"></div>
</div>
    </div>
    <div class="clear10"></div>
    <div class="container-default">
        <div></div>

        <div class="fb-fanpage">
    <div id="fb-root"></div>    
    <script>
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.9&appId=302507473246792";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

    <div class="fb-page" data-href="https://www.facebook.com/Batdongsandv/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/Batdongsandv/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Batdongsandv/">Batdongsan.com.vn</a></blockquote>
    </div>
</div>

    </div>
    <div class="clear"></div>
</div>
<div class="banner-bottom">
    <div style="float: left; width: 560px">
    </div>
    <div style="float: left; width: 430px; margin-left: 5px">
    </div>
</div>

                <div class="banner-bottom">
                    <div style="float: left; width: 560px">
                    </div>
                    <div style="float: left; width: 430px; margin-left: 5px">
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="boxLinkFooter">
                        <div id="boxLink" class="footer-link-new">
        <ul><li><a href="/ban-can-ho-chung-cu-rivera-park-ha-noi">Chung cư Rivera Park Hà Nội</a></li><li><a href="/ban-can-ho-chung-cu-chung-cu-c1-c2-xuan-dinh">Chung cư C1 C2 Xuân Đỉnh</a></li><li><a href="/ban-can-ho-chung-cu-anland-nam-cuong">Chung cư Anland Nam Cường</a></li><li><a href="/ban-can-ho-chung-cu-hanhud-hoang-quoc-viet">Chung cư Hanhud Hoàng Quốc Việt</a></li><li><a href="/ban-can-ho-chung-cu-sunshine-center">Sunshine Center</a></li><li><a href="/ban-nha-biet-thu-lien-ke-khu-do-thi-lakeview-city">Bán biệt thự Lakeview City</a></li><li><a href="/ban-nha-biet-thu-lien-ke-ha-do-756-sai-gon">Bán biệt thự Hà Đô 756 Sài Gòn</a></li><li><a href="/ban-can-ho-chung-cu-park-12-park-hill-times-city">Bán chung cư Park 12 Park Hill Times City</a></li><li><a href="/ban-can-ho-chung-cu-vinpearl-condotel-da-nang">Bán căn hộ Vinpearl Condotel Đà Nẵng</a></li><li><a href="/ban-can-ho-chung-cu-soho-premier">Bán căn hộ Soho Premier</a></li></ul><ul><li><a href="/ban-can-ho-chung-cu-duc-long-golden-land">Bán căn hộ Đức Long Golden Land</a></li><li><a href="/ban-can-ho-chung-cu-hung-phat-golden-star">Bán căn hộ Hưng Phát Golden Star</a></li><li><a href="/ban-can-ho-chung-cu-chung-cu-129d-truong-dinh">Bán chung cư 129D Trương Định</a></li><li><a href="/ban-can-ho-chung-cu-e4-tower">Bán chung cư E4 Tower</a></li><li><a href="/ban-nha-rieng-duong-nguyen-trung-truc-66">Bán nhà Nguyễn Trung Trực Bình Thạnh</a></li><li><a href="/nha-dat-ban-bac-ninh">Nhà đất Bắc Ninh</a></li><li><a href="/ban-can-ho-chung-cu-n03-t3-t4-ngoai-giao-doan">Bán chung cư N03 T3 T4 Ngoại Giao Đoàn</a></li><li><a href="/ban-can-ho-chung-cu-valeo-dam-sen">Bán căn hộ Valeo Đầm Sen</a></li><li><a href="/ban-dat-nen-du-an-khu-do-thi-an-thinh">Bán đất nền Khu đô thị An Thịnh</a></li><li><a href="/ban-can-ho-chung-cu-golden-land">Chung cư Golden Land</a></li></ul><ul><li><a href="/ban-can-ho-chung-cu-happy-star-tower">Bán chung cư Happy Star Tower</a></li><li><a href="/ban-can-ho-chung-cu-sunrise-city">Căn hộ Sunrise City</a></li><li><a href="/nha-dat-ban-thai-nguyen">Nhà đất Thái Nguyên</a></li><li><a href="/khu-thuong-mai-dich-vu-long-bien/vincom-center-long-bien-pj994">Vincom Long Bien</a></li><li><a href="/ban-can-ho-chung-cu-sunview-1-2">Sunview Town</a></li><li><a href="/ban-can-ho-chung-cu-times-city">Chung cư Times City</a></li><li><a href="/ban-can-ho-chung-cu-chung-cu-golden-west-le-van-thiem">Chung cư Golden West</a></li><li><a href="/ban-can-ho-chung-cu-alphanam-luxury-apartment">Bán căn hộ Alphanam Luxury Apartment</a></li><li><a href="/ban-can-ho-chung-cu-ecolife-tay-ho">Bán chung cư Ecolife Tây Hồ</a></li><li><a href="/nha-dat-ban-nam-dinh">Nhà đất Nam Định</a></li></ul><ul><li><a href="/nha-dat-ban-hai-phong">Nhà đất Hải Phòng</a></li><li><a href="/nha-dat-ban-hai-duong">Nhà đất Hải Dương</a></li><li><a href="/nha-dat-ban-can-tho">Nhà đất Cần Thơ</a></li><li><a href="/ban-can-ho-chung-cu-centara-thu-thiem">Căn hộ Centara Thủ Thiêm</a></li><li><a href="/ban-can-ho-chung-cu-athena-complex">Chung cư Athena Complex</a></li><li><a href="/ban-can-ho-chung-cu-tu-hiep-plaza">Chung cư Tứ Hiệp Plaza</a></li><li><a href="/tags/cho-thue/Sang-quan-cafe">Sang quán café</a></li><li><a href="/ban-can-ho-chung-cu-gemek-premium">Chung cư Gemek Premium</a></li><li><a href="/ban-can-ho-chung-cu-vinpearl-condotel-nha-trang">Căn hộ Vinpearl Condotel Nha Trang</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-binh-chanh">Bán nhà Bình Chánh</a></li></ul><ul><li><a href="https://batdongsan.com.vn/ban-dat-ninh-kieu-ct">Bán đất Ninh Kiều</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-quan-11">Bán nhà Quận 11</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-phuong-16-3">Bán nhà Phường 16 Gò Vấp</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-phuong-4-15">Bán nhà Phường 4 Quận 8</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-phuong-9-6">Bán nhà Phường 9 Quận 5</a></li><li><a href="https://batdongsan.com.vn/ban-dat-phuong-dong-hoa">Bán đất Đông Hòa</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-phuong-duong-noi">Bán nhà Dương Nội</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-thi-tran-trau-quy">Bán nhà Trâu Quỳ</a></li><li><a href="https://batdongsan.com.vn/nha-dat-ban-xa-tien-xuan">Bán nhà Tiến Xuân</a></li></ul>
    </div>



                </div>
            </div>

        <div id="SiteRight" class="banner-right clearfix">
            <div class="container-default">
                <div>
                    <div id="ban_wide_right" class="ban_wide_scroll">
                        <div class="adPosition" positionCode="BANNER_POSITION_WIDE_RIGHT" style="margin-bottom: 0px"></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>
                    </div>

                    <div id="ban_right" class="ban_scroll">
                        <div class="adPosition" positionCode="BANNER_POSITION_RIGHT" style="margin-bottom: 0px"></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="dialogPopup" role="dialog">
            <div class="nomodal"></div>
            <div class="modal-dialog">
                <div class="modal-content ">
                </div>
            </div>
        </div>

        <div class="adPosition" positionCode="BANNER_POSITION_FLOADING_BOTTOM" style=""></div>
<script type='text/javascript'> var bannerContext={"CateId":null,"PageId":168,"CityCode":null,"DistrictId":null,"CurrentPage":168};</script>

        <div class="hide" id="domainUserInfo" data-value="https://batdongsan.com.vn"></div>
        <div class="hide" id="domainWeb" data-value="https://batdongsan.com.vn"></div>
        <div class="hide" id="getBannerUrl" data-value="/microservice-architecture-router/Systems/Banner/GetBanners"></div>
        <div class="hide" id="domainStatistic" data-value="https://statistic.batdongsan.com.vn"></div>
        <div class="popup-content ">
        </div>
        <div class="lg-backdrop in" id="dialog-backdrop" style="transition-duration: 150ms;display: none;" onclick="account.CloseAccountPopup()"></div>
        <div id="gototop" title="Go to top"></div>
    </div>
    <div style="display: none"
         class="searching-histories-configs"
         max-searching-histories-length="20"
         sync-time-searching-histories="5"
         sync-searching-histories-url="/Product/ProductSearch/SyncSearchingHistories"
         remove-searching-histories-url="/Product/ProductSearch/RemoveSearchingHistory">
    </div>
    
    
            <script src="https://staticfile.batdongsan.com.vn/js/Common/filestatic.ver202011110518.msvbds.FrontEnd.Common.min.js"></script>
    
    <!--start BannerContext-->
    <script type='text/javascript'> var __bannerContext={"PageId":168,"CateId":null,"CityCode":null,"DistrictId":null,"CurrentPage":1};</script>
    <!--end BannerContext-->
    <!--Start of Zendesk Chat Script-->
    <script type="text/javascript">
        window.$zopim || (function (d, s) {
            var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
                d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
                    z.set.
                        _.push(o)
                }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute("charset", "utf-8");
            $.src = "https://v2.zopim.com/?6fJlcOXWwJofJZOzmeDIifb7bHGvvSte"; z.t = +new Date; $.
                type = "text/javascript"; e.parentNode.insertBefore($, e)
        })(document, "script");
    </script>
    <!--End of Zendesk Chat Script-->
    <script type="text/javascript">
            var newsLetterRegister = new newsLetterRegister.NewsLetterRegister();
            newsLetterRegister.InitializeLoad();

            var commentUser = new commentUser.CommentUser();
            commentUser.InitializeLoad();

            var paramAccount = {
                urlListLogin: '/Systems/Account/Login',
                urlListRegister: '/Systems/Account/Register',
                urlListForgetPass: '/Systems/Account/ForgetPassword',
                urlListCity: '/Contacts/CommonData/GetCityList',
                urlListDistrict: '/Contacts/CommonData/GetListDistrictByCity',
                urlListWard: '/Contacts/CommonData/GetWardList',
            };

            var account = new account.Content();
            account.Initialize(paramAccount);

            var footer = new footer.Footer();
            footer.Initialize();

            var menu = new menu.Menu();
            menu.Initialize();
    </script>

    <div sync-marked-products-url="/Product/MarkedProducts/SyncMarkedProducts"
         unmarked-product-url="/Product/MarkedProducts/UnmarkProduct"
         marked-product-ids-sync-time="0.5"></div>
    
    
    
        <script src="https://staticfile.batdongsan.com.vn/js/excoloSlider.js"></script>
        <script src="https://staticfile.batdongsan.com.vn/js/Project/filestatic.ver202011110518.msvbds.FrontEnd.Project.Home.min.js"></script>
        <script src="https://staticfile.batdongsan.com.vn/js/BDS.Contacts/filestatic.ver202011110518.msvbds.FrontEnd.Enterprise.FormSearch.min.js"></script>
    
    <script type="text/javascript">
        var paramsSearchBroker = {
            txtKeyword: '#txtKeyword',
            btnSearch: '#btnSearch',

            urlListDistrict: '/Contacts/CommonData/GetListDistrictByCity',
            urlRedirect: '/Contacts/Enterprise/UrlSearch',
        };
        var contactFormSearch = new contactsFormSearch.FormSearchBroker();
        contactFormSearch.Initialize(paramsSearchBroker);

        var paramsHome = {
            rptProjects: "#rptProjects",
        }
        var projectHome = projectHome.Home();
        projectHome.Initialize(paramsHome);
    </script>

    <script type="text/javascript">
        try {
            var script_imported = document.createElement('script');
            script_imported.src = 'https://log.batdongsan.com.vn/js/bds/bds-msv-log.min.js?hv=2&dv=' + (new Date().toJSON().slice(0, 10));
            if (document.body != null && document.body != undefined) {
                document.body.appendChild(script_imported);
            } else {
                document.head.appendChild(script_imported);
            }
        } catch (e) { }
    </script>
    <script type="text/javascript">
        document.addEventListener('DOMContentLoaded', function () {
            var lazyImages = [].slice.call(document.querySelectorAll('[src-lazy]'));
            window.countOfLazyImages = lazyImages.length;
            if ('IntersectionObserver' in window) {
                let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            if (lazyImage.attributes['src-lazy']) {
                                lazyImage.src = lazyImage.attributes['src-lazy'].value;
                                lazyImage.removeAttribute('src-lazy');
                                lazyImageObserver.unobserve(lazyImage);
                            }
                        };
                    });
                });
                lazyImages.forEach(function (lazyImage, i) {
                    lazyImage.setAttribute('lazy-id', i);
                    lazyImageObserver.observe(lazyImage);
                });
                (function checkDuplicate() {
                    var countOfLazyElements = [].slice.call(document.querySelectorAll('[lazy-id]'));
                    if (countOfLazyElements.length > window.countOfLazyImages) {
                        var elements = [].slice.call(document.querySelectorAll('[src-lazy]'));
                        elements.forEach(element => {
                            var lazyId = element.attributes['lazy-id'].value;
                            var lazyElements = [].slice.call(document.querySelectorAll(`[lazy-id="${lazyId}"]`));
                            if (lazyElements.length > 1) {
                                for (var i = 1; i < lazyElements.length; i++) {
                                    var lazyElement = lazyElements[i];
                                    lazyImageObserver.observe(lazyElement);
                                    lazyElement.setAttribute('lazy-id', window.countOfLazyImages);
                                    window.countOfLazyImages++;
                                }
                            }
                        });
                    }
                    setTimeout(checkDuplicate, 1000)
                })();
            } else {
                $('[src-lazy]').each(function () {
                    this.src = this.attributes['src-lazy'].value;
                    this.removeAttribute('src-lazy');
                });
            }
        });
    </script>

@endsection