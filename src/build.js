const fs = require('fs')
const mustache = require('mustache')

const globals = require('./globals.json')
const template = JSON.stringify(require(`${__dirname}/template.json`))

const content = require(`${__dirname}/pluto.json`)
const theme = mustache.render(template, { ...content, ...globals })
fs.writeFileSync(`${__dirname}/../themes/pluto.json`, theme)
