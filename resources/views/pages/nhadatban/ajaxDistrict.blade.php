<option class="district" value="0">Tất cả</option>
@foreach ($districts as $district)
    <option class="district" value="{{ $district->code }}"> {{ $district->name }} </option>
    @if ($district->code == $_GET['district']) selected @endif
@endforeach