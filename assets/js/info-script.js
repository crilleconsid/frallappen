/**
 * FRALLAPP
 * SKAPAD AV CHRISTOPHER SÖRNMO
 * VERSION 1.0
**/

/*****************
 ** INNEHÅLL
 ****************
 * 1. FIREBASE
 * 2. FILTER
 ****************
*/


/*******************
// 1. FIREBASE
********************/
$( document ).ready(function() {
    // Hämta data från databas
    var database = firebase.database();

    dbRef = firebase.database().ref().child('date');
    dbRef.on("value", function(snapshot) {
        $('.allData').empty();
        snapshot.forEach(function(child) {

            var sum = ('<tr><td>' + child.key + '</td><td class="align-right">' + child.val() + '</td></tr>');
            $('.allData').append(sum);


            // 2. FILTER --> filtrera i descender när tabellen har laddats in.  
            function sortTable(table, order) {
                var asc   = order === 'asc',
                tbody = table.find('tbody');

                tbody.find('tr').sort(function(a, b) {
                    if (asc) {
                        return $('td:first', a).text().localeCompare($('td:first', b).text());
                    } else {
                        return $('td:first', b).text().localeCompare($('td:first', a).text());
                    }
                }).appendTo(tbody);
            }
            sortTable($('.sortable'),'desc');

    	});
    });
});


/*******************
// 2. FILTER
********************/
$( document ).ready(function() {
    var sorted = true;
    $('table.sortable').each(function() {
        var $table = $(this);
        $table.find('th').each(function(column) {
            var $header = $(this); 
            $header.click(function() {
                sorted = !sorted;

                $table.find('th').removeClass('asc desc');
                $header.addClass(sorted ? 'asc' : 'desc');

                var $rows = $table.find('tbody > tr');
                $rows.sort(function(a, b) {
                    var keyA = $(a).children('td').eq(column).text().toUpperCase();
                    var keyB = $(b).children('td').eq(column).text().toUpperCase();
                    if (keyA > keyB) return sorted ? -1 : 1;
                    if (keyA < keyB) return sorted ? 1 : -1;
                    // return !sorted || (keyA > keyB) ? 1 : -1;
                });
                $rows.each(function(index, row) {
                    $table.children('tbody').append(row);
                });
            });
        });
    });
});