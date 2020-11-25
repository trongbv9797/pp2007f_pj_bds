
<footer>
    <div class="home-small">
        <div class="footer-row">
            <div class="footer-col1">
                <div class="footer-logo">
                    <a href="index.html">
                        @foreach ($image as $image)
                        <img src="{{ $image->slug }}" noloaderror="true"
                            onerror="this.src='https://staticfile.batdongsan.com.vn/images/logo-footer-no1.png'">
                        @endforeach
                    </a>
                </div>
                <div class="footer-company-name center">
                    @foreach ($company as $company)
                    {{ $company->name }}
                    @endforeach
                    @foreach ($company2 as $company2)
                <a href="https://www.propertygurugroup.com/" target="_blank" rel="nofollow">{{ $company2->name }}</a>
                    @endforeach
            </div>
                <div class="footer-add">
                    <span>
                        @foreach ($icon_add as $icon_add)
                        <img src="{{ $icon_add->slug }}">
                        @endforeach

                        @foreach ($add as $add)
                    </span>{{ $add->name }}
                        @endforeach
                </div>
                <div class="footer-add">
                    <span>
                        @foreach ($phone_icon as $phone_icon)
                        <img src="{{ $phone_icon->slug }}">
                        @endforeach

                        @foreach ($phone as $phone)
                    </span>{{ $phone->name }}
                        @endforeach
                </div>
                <div class="footer-add footer-social">
                        @foreach ($sign_up as $sign_up)
                    <a href="{{ $sign_up->name }}" rel="nofollow"
                        target="_blank"><img src="{{ $sign_up->slug }}"
                            class="bct" /></a>
                        @endforeach

                    @foreach($facebook as $facebook)
                    <a href="{{ $facebook->slug }}" rel="nofollow" target="_blank">
                        <img src="{{ $facebook->name }}" />
                    </a>
                    @endforeach

                    @foreach($youtube as $youtube)
                     <a href="{{ $youtube->slug }}" rel="nofollow"
                        target="_blank">
                        <img src="{{ $youtube->name }}" />
                    </a> 
                    @endforeach
                    
                    @foreach($zalo as $zalo)
                    <a href="{{ $zalo->slug }}" rel="nofollow" target="_blank">
                        <img src="{{ $zalo->name }}" />
                    </a>
                    @endforeach
                </div>
            </div>
            <div class="footer-col2">
                <div class="footer-sub-col1">
                    <div class="col-header">HƯỚNG DẪN</div>
                    <div class="col-content">
                        <ul>
                            <li><a href="bao-gia-quang-cao.html#a4" rel="nofollow">Báo giá &amp; hỗ trợ</a></li>
                            <li><a href="nhung-cau-hoi-thuong-gap.html" rel="nofollow">Câu hỏi thường gặp</a></li>
                            <li><a href="gioi-thieu.html" rel="nofollow">Về chúng tôi</a></li>
                            <li><a href="ve-batdongsancomvn.html" rel="nofollow">Thông báo</a></li>
                            <li><a href="lien-he.html" rel="nofollow">Liên hệ</a></li>
                            <li><a href="trang-sitemap.html" rel="nofollow">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-sub-col2">
                    <div class="col-header">QUY ĐỊNH</div>
                    <div class="col-content">
                        <ul>
                            <li><a href="quy-dinh-dang-tin.html" rel="nofollow">Quy định đăng tin</a></li>
                            <li><a href="quy-dinh-su-dung.html" rel="nofollow">Quy chế hoạt động</a></li>
                            <li><a href="dieu-khoan-thoa-thuan.html" rel="nofollow">Điều khoản thỏa thuận</a></li>
                            <li><a href="chinh-sach-bao-mat-thong-tin.html" rel="nofollow">Chính sách bảo mật</a></li>
                            <li><a href="giai-quyet-khieu-nai.html" rel="nofollow">Giải quyết khiếu nại</a></li>
                            <li><a href="https://airtable.com/shrbaUORGfT7arZVJ" target="_blank" rel="nofollow">Góp ý
                                    báo lỗi</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-sub-col3">
                    <div class="col-header">Tổng đài hỗ trợ</div>
                    <div class="col-content">
                        <ul>
                            <li>
                                <span>
                                    <img src="https://file4.batdongsan.com.vn/images/newhome/hotline.png">
                                </span>Tổng đài CSKH: 1900 1881
                            </li>
                            <li>
                                <span>
                                    <img src="https://file4.batdongsan.com.vn/images/newhome/email.png">
                                </span><a href="mailto:hotro@batdongsan.com.vn">hotro@batdongsan.com.vn</a>
                            </li>
                            <li>
                                <span>
                                    <img src="https://file4.batdongsan.com.vn/images/newhome/icon3x/ic_mailbox1.png"
                                        width="16">
                                </span><a rel="nofollow" href="mailto:cskh@batdongsan.com.vn">cskh@batdongsan.com.vn</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-sub-col4">
                    <div class="col-header">Quốc gia</div>
                    <div class="col-content">
                        <div class="list-international">
                            <div>Chọn quốc gia</div>
                            <div class="national">
                                <div class="vietnam">
                                    <img src="https://file4.batdongsan.com.vn/images/newhome/international/vietnam.png">
                                    Việt Nam
                                </div>
                                <ul id="country">
                                    <li>
                                        <a target="_blank" href="http://www.rumah.com/" title="Indonesia Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/indonesia.png"
                                                alt="Indonesia Real Estate">Indonesia
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.ddproperty.com/"
                                            title="Thailand Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/thailand.png"
                                                alt="Thailand Real Estate">Thailand
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.homeguru.com.my/"
                                            title="Malaysia Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/malaysia.png"
                                                alt="Malaysia Real Estate">Malaysia
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.propertyguru.com.sg/"
                                            title="Singapore Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/singapore.png"
                                                alt="Singapore Real Estate">Singapore
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.28hse.com/en/"
                                            title="Hong Kong Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/hongkong.png"
                                                alt="Hong Kong">Hong Kong
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.immobiliare.it/" rel="nofollow"
                                            title="Italy Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/Italy.png"
                                                alt="Italy">Italy
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.luxuryestate.com/" title="Luxury homes">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/italy2.png"
                                                alt="Italy">Italy
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.propertyfinder.co.tz/"
                                            title="Tanzania Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/tanzania.png"
                                                alt="Tanzania Real Estate">Tanzania
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://aqarmap.com/" title="Egypt Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/egypt.png"
                                                alt="Egypt Real Estate">Egypt
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://american-european.net/"
                                            title="Costa Rica Real Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/costa-rica.png"
                                                alt="Costa Rica Real Estate">Costa Rica
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="http://www.malimalihome.net/" title="Macau Estate">
                                            <img src="https://file4.batdongsan.com.vn/images/newhome/international/macau.png"
                                                alt="Macau Real Estate">Macau
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="language">
                            Chọn ngôn ngữ&nbsp;&nbsp;<a href="english.html">
                                <img src="https://file4.batdongsan.com.vn/images/newhome/eu.png">
                                En
                            </a>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="footer-sub-col5">
                    <div class="footer-title">Tải ứng dụng Batdongsan.com.vn</div>
                    <a href="https://play.google.com/store/apps/details?id=vn.com.batdongsan" class="m-r-15"
                        rel="nofollow" target="_blank">
                        <img src="https://file4.batdongsan.com.vn/images/newhome/google-play.png">
                    </a>
                    <a href="https://apps.apple.com/vn/app/batdongsan.com.vn/id866492094" rel="nofollow"
                        target="_blank">
                        <img src="https://file4.batdongsan.com.vn/images/newhome/apple-app-store.png">
                    </a>
                </div>
                <div class="footer-sub-col6">
                    <div id="Footer_NewsletterForm_pnlHomepage">
                        <div class="footer-title">Đăng kí ngay để nhận thông tin từ Batdongsan.com.vn</div>
                        <input type="text" id="email-footer" placeholder="Nhập email của bạn">
                        <a href="javascript:void(0);" id="newsletterRegister-footer" class="newsletter-register">Gửi</a>
                        <div class="clear">&nbsp;</div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="footer-row list-branch">
            @foreach($all_branch as $all_branch)
            <div class="branch-show">{{ $all_branch->name }}
            @endforeach

            @foreach($dropdown as $dropdown)
                <img
                    src="{{ $dropdown->slug }}" class="downarr"><img
                    src="https://file4.batdongsan.com.vn/images/newhome/up-arrow.png" class="uparr hidden"></div>
            @endforeach
            <div class="branch-detail">
                <div class="branch-col">
                    @foreach($branch as $branch)
                    <div class="branch">
                        <div class="branch-name">{{ $branch->name }}</div>
                        <div class="branch-add">
                            {{ $branch->slug }}
                        </div>
                    </div>
                    @endforeach
                </div>
        </div>
        <div class="footer-infomation">
            <div class="footer-info-col1">
                Giấy ĐKKD số 0104630479 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 02/06/2010<br>
                Giấy phép ICP số 2399/GP-STTTT do Sở TTTT Hà Nội cấp ngày 04/09/2014<br>
                Giấy phép GH ICP số 3832/GP-TTĐT do Sở TTTT Hà Nội cấp ngày 08/08/2019
            </div>
            <div class="footer-info-col2">
                Chịu trách nhiệm nội dung GP ICP: Bà Đặng Thị Hường<br>
                Chịu trách nhiệm sàn GDTMĐT: Ông Vũ Triệu Vương<br />(Robert Vuong Trieu Vu)<br />
                Quy chế, quy định giao dịch có hiệu lực từ 23/02/2020
            </div>
            <div class="footer-info-col3">
                Copyright © 2007 - 2020 Batdongsan.com.vn<br>
                Ghi rõ nguồn "Batdongsan.com.vn" khi phát hành lại thông tin từ website này.
            </div>
            <div class="clear"></div>
        </div>
    </div>
</footer>
