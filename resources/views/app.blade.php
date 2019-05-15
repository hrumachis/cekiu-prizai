<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{ asset( 'css/default.css' ) }}">
        <link rel="shortcut icon" href="{{ asset( 'images' )}}/favicon/180x180.png"">
        <base href="{{ URL::to("/") }}">
        <title>{{ config( 'app.name' ) }}</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset( 'js/main.js' ) }}"></script>
    </body>
</html>