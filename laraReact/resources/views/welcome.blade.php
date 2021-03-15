<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

        {{-- <link rel="stylesheet" type="text/css" href="css/app.css"> --}}
        <style>
            .card {
                margin-top: 30px;
            }
            .under-title {
                /* padding-left: 10px; */
                font-size: 12px;
            }
            .paddingTop {
                padding-top: 30px;
            }
        </style>
    </head>
    <body>
        <div id="example"></div>
        <script src="js/app.js"></script>
    </body>
</html>
