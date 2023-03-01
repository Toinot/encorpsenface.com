<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>En Corps En Face</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
        html, body {
            margin: 0;
            padding: 0;
            font-family: 'Source Sans Pro', sans-serif;
            color: #fff;
        }
        main {
            width: calc(100% - 60px);
            height: calc(100vh - 60px);
            margin: 30px;
            background-color: #004852;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        main .logo-header {
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        main .logo-header img{
            position: absolute;
            max-height: 200px;
        }
        main h2 {
            margin-top: 30px;
            font-weight: normal;
        }
    </style>
</head>
<body>
    <main>
        <div class="logo-header">
            <img src="/fr/media/logo.png" style="max-width: 25%;" alt="">
            <img src="/fr/media/logo_text.svg" id="logo-text" style="opacity: 0; transition: opacity 1s; max-width: 100%;" alt="">
        </div>
        <script>
            $('.logo-header').ready( function () {
                $('#logo-text').css('opacity', 1);
            });
        </script>
        <h2>Nous arrivons bientôt</h2>
    </main>
</body>
</html>