const express = require('express');
const router = express.Router();
const { Sapi } = require('../models/sapi');
const { Race } = require('../models/race');
const { Owner } = require('../models/owner');

const getData = async (n) => {
    var sapi, race, owner = "";
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Sapi.findOne({index:n}).then(s => sapi = s.name);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Race.findOne({index:n}).then(r => race = r.race);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Owner.findOne({index:n}).then(o => owner = o.owner);
    return {
        sapi,
        race,
        owner
    };
}

router.route('/for').get( async (req,res) =>{
    var sapi = [];var race=[];var owner = [];
    for(var i = 1; i <=6 ; i++){
        const data = await getData(i);
        sapi.push(data.sapi);
        race.push(data.race);
        owner.push(data.owner);
    }
    res.json({
        sapi,
        race,
        owner
    })
})

router.route('/promise').get( async (req,res) =>{
    a = [];
    for(b =1; b<=6;b++){
        a.push(b);
    }
    var sapi = [];var race=[];var owner = [];var promises = [];
    a.forEach(async (n)=>{
        promises.push(Promise.resolve(getData(n)));
    })
    Promise.all(promises)
    .then((result)=>{
        result.forEach( n =>{
            sapi.push(n.sapi);
            race.push(n.race);
            owner.push(n.owner);
        }) 
    })
    .then(()=>{
        res.json({
            sapi,
            race,
            owner
        })
    });
})

router.route('/sapi').post(async (req, res) => {
	const sapi = new Sapi(req.body);
	sapi.save()
	.then(()=>res.json({message:"Berhasil"}))
	.catch(err=> console.log(err));
});

router.route('/race').post( async (req, res) => {
	const race = new Race(req.body);
	race.save()
	.then(()=>res.json({message:"Berhasil"}))
	.catch(err=>console.log(err));
});

router.route('/owner').post( async (req, res) => {
	const owner = new Owner(req.body);
	owner.save()
	.then(()=>res.json({message:"Berhasil"}))
	.catch(err=>console.log(err));
});

module.exports = router;
