<?

    $to = 'info@ekaterina-petr.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Заголовок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>
                    <p>Квартира: '.$_POST['utm_name'].'</p>
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Обратный звонок с сайта <from@ekaterina-petr.ru>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>