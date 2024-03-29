$(function() {
    var country;
    $.getJSON("data/countries.json", function(json) {
        country = json;
    });
    $('#medal-count-table').DataTable({
        ajax: {
            url: "https://olympics.news-engineering.aws.wapo.pub/2020/medals/totals.json",
            dataSrc: ""
        },
        columns: [{
                "data": "rank"
            },
            {
                "data": "title"
            },
            {
                "data": "gold"
            },
            {
                "data": "silver"
            },
            {
                "data": "bronze"
            },
            {
                "data": "total"
            },
        ],
        columnDefs: [{
            targets: 1,
            data: 'title',
            render: function(data, type, row, meta) {
                return '<img src="' + row.icon + '" class="" width="20" height="20"/> ' + country[row.id];
            }
        }],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/zh-HANT.json',
        },
        order: [[5, 'desc']],
        responsive: true
    });
});