@foreach ($buyerSellers as $buyerSeller)


                                        <div class="vip1" uid="217282">
                                            <div class="p-title">
                                                <a href="https://batdongsan.com.vn/mua-dat-nen-du-an-ben-cat-bd/can-mua-dat-khu-vuc-my-phuoc-1-2-3-4-tpm-binh-duong-vsip-1-2-tdm-mua-nhanh-gia-cao-ad104597"
                                                    title="Cần mua đất khu vực Mỹ Phước 1 - 2 - 3 - 4, TPM Bình Dương, Vsip 1 - 2, tdm, mua nhanh, giá cao">{{ $buyerSeller->title }}</a>
                                            </div>
                                            <div class="p-main">
                                                @foreach ($buyerSeller->imagedemo as $item)
                                                    <div class="p-main-image-crop">
                                                        <a
                                                            href="https://batdongsan.com.vn/mua-dat-nen-du-an-ben-cat-bd/can-mua-dat-khu-vuc-my-phuoc-1-2-3-4-tpm-binh-duong-vsip-1-2-tdm-mua-nhanh-gia-cao-ad104597">



                                                            <img class="product-avatar-img" src="{{ $item->link }}"
                                                                alt="Cần mua đất khu vực Mỹ Phước 1 - 2 - 3 - 4, TPM Bình Dương, Vsip 1 - 2, tdm, mua nhanh, giá cao">
                                                        </a>

                                                    </div>
                                                @endforeach
                                                <div class="p-content pos-relative">
                                                    <div class="p-main-tex mar-bot-8">{{ $buyerSeller->content }}</div>
                                                    <div>
                                                        <div class="floatleft">
                                                            Giá: <span class="product-price">{{ $buyerSeller->price }}
                                                                tỷ</span>&nbsp;
                                                            Diện tích: <span
                                                                class="product-area">{{ $buyerSeller->buyersellerarea->name }}</span><br>
                                                            Quận/Huyện: <span
                                                                class="product-city-dist">{{ $buyerSeller->districts->name }}</span>
                                                            <span class="inline-blk">
                                                                Tỉnh/TP: <span
                                                                    class="product-city-dist">{{ $buyerSeller->districts->path }}</span>
                                                            </span>
                                                        </div>
                                                        <div class="floatright mar-right-10 bot-right-abs">
                                                            {{ $buyerSeller->start }}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clear10"></div>
                                            </div>
                                        </div>
                                    @endforeach
                                    
                                    <div class="clear"></div>
                                    <div class="separable">
                                        {{ $buyerSellers->links() }}
                                    </div>