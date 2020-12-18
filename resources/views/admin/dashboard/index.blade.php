@extends('admin.master')

@section('title', 'DashBoard')

@section('styles')

@endsection

@section('content')
    <div class="row">
        <div class="col-md-4 col-sm-12">
            <div id="chart_div" style="height:500px"></div>
        </div>
        <div class="col-md-8 col-sm-12">
            <div id="table_div" style="height:300px"></div>
        </div>

    @endsection


    @section('scripts')
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

        <script>
            google.charts.load('current', {
                'packages': ['corechart']
            });
            google.charts.setOnLoadCallback(drawVisualization);

            function drawVisualization() {
                // Some raw data (not necessarily accurate)
                var data = google.visualization.arrayToDataTable([
                    <?php
                    foreach($item as $it) {
                        echo $it;
                    } 
                    ?>

                ]);

                var options = {
                    title: 'Monthly Coffee Production by Country',
                    vAxis: {
                        title: 'Cups'
                    },
                    hAxis: {
                        title: 'Month'
                    },
                    seriesType: 'bars',
                    series: {
                        5: {
                            type: 'line'
                        }
                    }
                };

                var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
                chart.draw(data, options);
            }

        </script>

        <script>
            google.charts.load('current', {
                'packages': ['table']
            });
            google.charts.setOnLoadCallback(drawTable);

            function drawTable() {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Name');
                data.addColumn('number', 'Salary');
                data.addColumn('boolean', 'Full Time Employee');
                data.addRows([
                    ['Mike', {
                        v: 10000,
                        f: '$10,000'
                    }, true],
                    ['Jim', {
                        v: 8000,
                        f: '$8,000'
                    }, false],
                    ['Alice', {
                        v: 12500,
                        f: '$12,500'
                    }, true],
                    ['Bob', {
                        v: 7000,
                        f: '$7,000'
                    }, true]
                ]);

                var table = new google.visualization.Table(document.getElementById('table_div'));

                table.draw(data, {
                    showRowNumber: true,
                    width: '100%',
                    height: '100%'
                });
            }

        </script>
    @endsection
