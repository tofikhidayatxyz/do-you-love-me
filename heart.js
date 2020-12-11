// modules
const { colors } = require('./colors.json')
const fs = require('fs')
const path = require('path')
const { create } = require('domain')
const chalk = require('chalk')
// constants
const heartPath = path.join(__dirname, 'data/love.txt')
const heartValue = fs.readFileSync(heartPath, 'utf-8')

// main
heartValue.split('\n').forEach((itm, index) => {
    const coloredHeart = itm.split('').map(text => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        return chalk.hex(randomColor)(text)
    }).join('')
    setTimeout(() => {
        console.log(coloredHeart)
    }, 40  * (index + 1))
})