import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Author from '../models/authorModel.js';

const authorRouter = express.Router();

authorRouter.get('/', expressAsyncHandler(async(req, res) => {
    try{
        const authors = await Author.find();
        res.json(authors);
    }catch(err){
        res.send('error',err);
    }
})
);




export default authorRouter;