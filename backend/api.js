
const express =require('express')
const router = express.Router()


const DATA= require('./models/book')


//books full list read

router.get('/booklist', async (req,res)=>{

try{ 

    const list =await DATA.find()
    res.send(list)

}catch (error) {

    console.log(error )

}

})

//books add

router.post("/books",async(req,res)=>{

try{ 
console.log(req.body)

let item= { //fetch and save data from the frntend
    title: req.body.title,
    author:req.body.author,
    description: req.body.description
}

const newbook = new DATA(item) //to check incoming data
const savebook = await  newbook.save() //mongodb save

res.send(savebook)

}catch (error) {

    console.log(error)

}




})

//delete

router.delete('/book/:id' , async(req,res) => {
    try{
        let id =req.params.id
    
        const deletebook = await DATA.findByIdAndDelete(id)
        res.send(deletebook)
    }catch (error){
        console.log(error)
    
    }
    })
    
    
    
    //BOOK update
    
    router.put('/book', async (req, res) => {
        try {
    
            let id = req.body._id
    
            let item = {  //to fetch and save data from front end in server
    
                title: req.body.title,
                author:req.body.author,
                description: req.body.description
            }
            let updateData = { $set: item }
            let updatebook = await DATA.findByIdAndUpdate({ '_id': id }, updateData)
            res.send(updatebook)
        } catch (error) {
            console.log(error)
    
        }
        
    })
    









module.exports = router