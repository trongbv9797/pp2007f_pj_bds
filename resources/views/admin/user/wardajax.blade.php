
<option class="ward">Ward</option>
@foreach ($wards as $ward)
    <option class="ward"> {{ $ward->name }} </option>
@endforeach