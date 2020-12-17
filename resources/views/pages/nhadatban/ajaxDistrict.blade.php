<option class="district" value="0">Tất cả</option>
@foreach ($districts as $district)
    <option class="district" value="{{ $district->code }}"> {{ $district->name }} </option>
@endforeach