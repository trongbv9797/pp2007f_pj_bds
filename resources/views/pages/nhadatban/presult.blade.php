@foreach ($products as $product)
    <div class="vip0 product-item clearfix" uid="649852">
        <div class="product-image ">
            <a class="product-avatar" href="{!!  Route('nhadatban_single_post', $product->id) !!}"
                title="{!!  $product->title !!}" onclick="">
                <img class="product-avatar-img" alt="{!!  $product->title !!}"
                    error-image-src="https://staticfile.batdongsan.com.vn/images/no-image.png"
                    src="./assets/image/20201111095750-3277_wm.jpg" is-lazy-image="true" lazy-id="0">
            </a>
            <span class="product-feature">
            </span>
            <span class="product-media">3</span>
        </div>
        <div class="product-main">
            <h3 class="product-title">
                <a href="{!!  Route('nhadatban_single_post', $product->id) !!}" title="{!!  $product->title !!}"
                    class="vipZero product-link">
                    {!! $product->title !!}
                </a>
            </h3>
            <div class="product-info">
                <span class="price">{!! $product->price !!}</span>
                <span class="dot">·</span>
                <span class="area">{!! $product->area !!}</span>
                <span class="dot">·</span>
                <span class="location">{!! $product->address !!}</span>
            </div>
            <div class="product-content">
                {!! $product->content !!}
            </div>
            <div class="product-wrap clearfix">
                <div class="product-uptime">
                    <span class="product-labeltime">
                        {!! $product->created_at !!}
                        <span class="tooltip-time">{!! $product->created_at!!}</span>
                    </span>
                </div>
                <div class="product-contact">
                    <span class="tooltipMarking" aria-label="Bấm để lưu tin" data-microtip-position="bottom"
                        role="tooltip">
                        <i class="iconSave" data-productid="27748072"
                            data-avatar="&lt;img class=&quot;product-avatar-img&quot; alt=&quot;KH&amp;#193;CH KẸT TIỀN CẦN B&amp;#193;N NHANH L&amp;#212; ĐẤT BI&amp;#202;N H&amp;#210;A NEW CITY , DT 5 X 20 , 6 X 20 , 12 X 20 . Đ&amp;#195; NHẬN SỔ&quot; error-image-src=&quot;https://staticfile.batdongsan.com.vn/images/no-image.png&quot; src=&quot;https://staticfile.batdongsan.com.vn/images/icons/lazy-preview-image-DFE3E8.png&quot; src-lazy=&quot;https://file4.batdongsan.com.vn/crop/350x232/2020/11/11/20201111095750-3277_wm.jpg&quot; is-lazy-image=&quot;true&quot;/&gt;"
                            data-avatarwap="https://file4.batdongsan.com.vn/crop/200x140/2020/11/11/20201111095750-3277_wm.jpg"
                            data-vipclass="vip0" data-isaddon="false" data-has3d="false" data-has360="false"
                            data-hasvideo="false"
                            data-title="KHÁCH KẸT TIỀN CẦN BÁN NHANH LÔ ĐẤT BIÊN HÒA NEW CITY , DT 5 X 20 , 6 X 20 , 12 X 20 . ĐÃ NHẬN SỔ"
                            data-price="1.45 tỷ" data-area="100 m²" data-pricesort="1450000048" data-areasort="100"
                            data-room="0" data-toilets="0" data-address="Biên Hòa, Đồng Nai" data-description="Khách kẹt tiền muốn đẩy nhanh một số Lô Biên Hòa New City ở sân golf Long Thành
                            DT : 5 x 20 m 
                                6  x 18m 
                                9  x 20 m 
                                12 x 20 m
                            Giá : 1.450 tỷ bao sang tên và ra sổ hồng.
                            Tất " data-duration="Hôm nay" data-updatedtime="11/11/2020"
                            data-datesort="11/11/2020 09:58:51" data-contactname="Thái Bá Lợi"
                            data-contactmobile="0946722227"
                            data-url="/ban-dat-nen-du-an-pho-nam-cao-phuong-phuoc-tan-prj-bien-hoa-new-city/khach-ket-tien-can-ban-nhanh-lo-dt-5-x-20-6-x-20-12-x-20-da-nhan-so-pr27748072"
                            data-totalmedia="3" data-createbyuser="649852"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
@endforeach
<div class="text-center">
    
    {!! $products->links() !!}
</div>
