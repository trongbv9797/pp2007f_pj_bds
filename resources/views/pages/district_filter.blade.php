<option class="district" value="0">District</option>
@foreach ($districts as $district)
    <option class="district" value="{{ $district->code }}"> {{ $district->name }} </option>
@endforeach
