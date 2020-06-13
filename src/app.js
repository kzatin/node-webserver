const path=require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))


const app = express()

// Define paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath =path.join(__dirname,'../templates/partials')
// Setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather',
        name: 'zatin khan',
        headtxt : "Front Page header"
    })
})

// app.get('',(req,res)=>{
//    res.send('<h1>Hello express</h1>')
// })

app.get('/help',(req,res)=>{
    // res.send('It is help page!!')
res.send([{
    name:"john",age:"12"
},{
    name:"Max",age:"21"
}])
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About page",
        name:"By Z khan",
        headtxt : "About header"
    })
})

// app.get('/about',(req,res)=>{
//     res.send('It is about page!!')
// })

app.get('/weather',(req,res)=>{
    res.send('It is weather page!!')
})

app.get('/products',(req,res)=>{
    console.log('hello to check commit')
    if(!req.query.search){
     return res.send({
          error:"Write check value"
      })
    }
   res.send({
       products:[]
   })
})

app.get('/about/*',(req,res)=>{
res.send('about article not found')
})

app.get('*',(req,res)=>{
  res.send('404 page')
})

app.listen(3001,()=>{
    console.log('server is up on port 3001')
})