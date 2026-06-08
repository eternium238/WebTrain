 $(document).ready(function() {
            
            var $selectedItems1 = $("#moto_models li:contains('мотоцикл')");
           
            $selectedItems1.each(function() {
                $(this).html("<strong>" + $(this).text() + "</strong>");
            });
            
           
            var resultText1 = "<p><strong>Найдено элементов: " + $selectedItems1.length + "</strong><br>";
            resultText1 += "Выбранные элементы:<br><ul>";
            $selectedItems1.each(function() {
                resultText1 += "<li>" + $(this).text() + "</li>";
            });
            resultText1 += "</ul>";
            resultText1 += "<strong>Использованный селектор:</strong> $(\"#moto_models li:contains('мотоцикл')\")</p>";
            
            $("#result1").html(resultText1);
            
            
            var $selectedImages = $("#forfooter img[title='Производители']");
            
            
            $selectedImages.css("border", "3px solid red");
            
          
            var resultText2 = "<p><strong>Найдено изображений: " + $selectedImages.length + "</strong><br>";
            resultText2 += "Выбранные изображения:<br>";
            $selectedImages.each(function() {
                resultText2 += "• " + $(this).attr("alt") + " (title: " + $(this).attr("title") + ")<br>";
            });
            resultText2 += "<br><strong>Использованный селектор:</strong> $(\"#forfooter img[title='Производители']\")</p>";
            
            $("#result2").html(resultText2);
            
            
            
            var $selectedCells = $("#moto_table tbody tr:even > td:last-child");
         
            $selectedCells.css({
                "font-weight": "bold",
                "background-color": "lightgreen"
            });
            
          
            var resultText3 = "<p><strong>Найдено ячеек: " + $selectedCells.length + "</strong><br>";
            resultText3 += "Выбранные ячейки (последние ячейки в четных строках):<br><ul>";
            $selectedCells.each(function() {
                resultText3 += "<li>" + $(this).text() + "</li>";
            });
            resultText3 += "</ul>";
            resultText3 += "<strong>Использованный селектор:</strong> $(\"#moto_table tbody tr:even > td:last-child\")<br>";
            $("#result3").html(resultText3);
            
        });