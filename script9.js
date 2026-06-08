  $(document).ready(function() {
            
          
            var $logo1 = $('img[src*="logo"]');
            
            var $logo2 = $('img[alt="logo"]');
            
            var $logo3 = $('.logo img');
            
            $("#btnTask1").click(function() {
                
                $('img[src*="logo"]').show();
                
               
                $('img[src*="logo"]')
                    .hide(2000)      
                    .show(2000);     
                
               
                var result = "<div style='background: #e8f4e8; padding: 10px; margin-top: 10px; border-left: 4px solid green;'>";
                result += "<strong>Задание 1 выполнено!</strong><br>";
                result += "Логотип найден тремя способами:<br>";
                result += "1. $('img[src*=\"logo\"]') - найдено: " + $logo1.length + " элементов<br>";
                result += "2. $('img[alt=\"logo\"]') - найдено: " + $logo2.length + " элементов<br>";
                result += "3. $('.logo img') - найдено: " + $logo3.length + " элементов<br>";
                result += "Логотип скрылся и появился с анимацией за 2 секунды.";
                result += "</div>";
                $("#result").html(result);
            });
            
           
            
            $("#btnTask2").click(function() {
              
                $('.gallery img').show();
                
               
                var $allImagesExceptFirst = $('.gallery img:not(:first)');
                
               
                $allImagesExceptFirst.hide(5000);
                
              
                var result = "<div style='background: #e8f4e8; padding: 10px; margin-top: 10px; border-left: 4px solid green;'>";
                result += "<strong>Задание 2 выполнено!</strong><br>";
                result += "Селектор: $('.gallery img:not(:first)')<br>";
                result += "Найдено картинок (кроме первой): " + $allImagesExceptFirst.length + "<br>";
                result += "Все найденные картинки скрыты за 5 секунд.";
                result += "</div>";
                $("#result").html(result);
            });
            
           
            
            $("#btnTask3").click(function() {
               
                $("#siteHeader").show();
                
               
                $("#moto2").css("border", "none");
                
                
                $("#moto2")
                    .css("border", "1px solid #333333")                        
                    .animate({ "border-width": "5px" }, 5000)                    
                    .promise()                                                     
                    .done(function() {                                            
                        $("#siteHeader").fadeOut(5000);                          
                    });
                
              
                var result = "<div style='background: #e8f4e8; padding: 10px; margin-top: 10px; border-left: 4px solid green;'>";
                result += "<strong>Задание 3 выполнено!</strong><br>";
                result += "Цепная функция: $('#moto2').css('border', '1px solid #333333').animate({'border-width':'5px'},5000)<br>";
                result += "• Рамка добавлена (1px solid #333333)<br>";
                result += "• Рамка увеличена до 5px за 5 секунд<br>";
                result += "• Шапка сайта скрывается с эффектом fadeOut() за 5 секунд<br>";
                result += "</div>";
                $("#result").html(result);
            });
            
          
            $("body").append('<p id="newparagraph">Этот абзац был добавлен с помощью jQuery! Дата создания: ' + new Date().toLocaleString() + '</p>');
            
          
            $("#newparagraph")
                .css("background-color", "black")
                .css("color", "white")
                .css("padding", "15px")
                .css("margin", "20px 0")
                .css("text-align", "center")
                .css("border-radius", "5px");
            
          
            
            $("#btnReset").click(function() {
               
                $('.gallery img').show();
                
                
                $("#siteHeader").show();
                
               
                $('img[src*="logo"]').show();
                
               
                $("#moto2").css("border", "none");
                
               
                $("#moto1").attr("alt", "moto1.jpg");
                $("#moto2").attr("title", "");
                
                
                $("#result").html("<div style='background: #f0f0f0; padding: 10px; margin-top: 10px;'>Все изменения сброшены!</div>");
            });
            
          
            console.log("Абзац с id='newparagraph' добавлен в конец body");
            console.log("Цвет фона: черный, цвет текста: белый");
            
        });