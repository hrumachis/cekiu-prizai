const mix = require( 'laravel-mix' );

mix
    .options({ extractVueStyles: true })
    .ts( 'resources/main.ts', 'public/js' )
    .sass( 'resources/sass/default.scss', 'public/css' )
    .webpackConfig( {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: { appendTsSuffixTo: [/\.vue$/] },
                    exclude: /node_modules/,
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: Config.babel()
                        }
                    ]
                }
            ],
        },
        resolve: {
            extensions: [ '*', '.js', '.jsx', '.vue', '.ts', '.tsx' ],
            alias: {
                '@': path.resolve('resources/sass')
            }
        },
    } );