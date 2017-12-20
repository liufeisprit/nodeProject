const e1js = require('ejs')
e1js.renderFile('./views/1.ejs', { name: 'blue' }, (err, data) => {
    if (err) {
        console.log('编译失败')
    } else {
        console.log(data)
    }

})