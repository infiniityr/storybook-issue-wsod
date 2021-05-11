const path = require('path')

module.exports = ({ config }) => {

    // so I can import { storyFactory } from '~storybook/util/helpers'
    config.resolve.alias['~storybook'] = path.resolve(__dirname)
    // the @ alias points to the `src/` directory, a common alias
    // used in the Vue community
    config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src')

    // THIS is the tricky stuff!
    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    // Filter out the progress plugin on CI, as it is very verbose
    if (process.env.CI) {
        console.log(
        'Webpack compilation will start soon - ProgressPlugin disabled on CI due to too much output'
        );
        config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ProgressPlugin'
        );
    }


    // return the updated Storybook configuration
    return config
}
