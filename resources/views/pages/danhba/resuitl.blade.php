@foreach ($brokers as $broker)
<div class="borderpad10 mar-bot broker-list">
    <div class="ttmgl">
        <div class="avamg">
            <div>
                <a href="{!! route ('singlepost1',$broker->id) !!}">
                    <img src="{!! $broker->broker_images !!}" alt="{!! $broker->name !!}">
                </a>
            </div>
        </div>
        <div class="ttmg">
            <div class="tenmg">
                <h3>
                    <a title="{!! $broker->name !!}" href="{!! route ('singlepost1',$broker->id) !!}">{!! $broker->name !!}</a>
                </h3>
                <div class="broker-address">{!! $broker->address !!}</div>
                <div>
                    <span class="broker-mobile">{!! $broker->mobile !!}</span>
                </div>
            </div>
            <div class="broker-link">
                <a id="lnkSendEmail" class="broker-send-email" data-email="cskh.gigareal@gmail.com" data-type="1" data-typeemail="0">Gửi Email</a>
                <a id="lnkProduct" href="/cho-thue-nha-mat-pho/cong-ty-tnhh-dich-vu-bds-giga-real-eb2825#broker-product-list">Danh sách tin rao</a>
            </div>
        </div>
    </div>

    <div class="clear10">
    </div>
</div>
@endforeach
<div class="pager-block" style="float: right; margin-right: 5px; margin-top: 5px;">
    <div class="ks-pagination-links" style="text-align: center; display: inline-block;">
        {{ $brokers->links() }}

    </div>

</div>