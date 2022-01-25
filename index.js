var exp=require('express')
var request=require('request')
var bp=require('body-parser') 

var app=exp()

app.set('view engine','ejs')
app.use(bp.urlencoded({extended:true}))

var city='mumbai'
var url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`
app.get('/',function(req,res){
    request(url,function(err,response,body){
        if(err) throw err

        var data=JSON.parse(body)
        console.log(data)

        a=city
        b=data.main.temp
        c=data.weather[0].icon
        d=data.weather[0].description

        b=5/9*(b-32)
        b=Math.trunc(b)

        res.render('weather',{city:a,temperature:b,icon:c,description:d})
    })

})

app.post('/temp',function(req,res){
    
    city=req.body.city_name
    url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1`
    request(url,function(err,response,body){
        if(err) throw err

        var data=JSON.parse(body)
        console.log(data)

        a=city
        b=data.main.temp
        c=data.weather[0].icon
        d=data.weather[0].description

        b=5/9*(b-32)
        b=Math.trunc(b)
        res.render('weather',{city:a,temperature:b,icon:c,description:d})
    })  
})


app.listen(1105,function(req,res){
    console.log('man ki saanti')
})