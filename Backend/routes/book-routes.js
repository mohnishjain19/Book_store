const express=require('express');
const router=express.Router();
const bookController=require("../controllers/books-controller");
const Book = require('../model/Book');


router.get("/",bookController.getAllBooks);
router.post("/",bookController.addBook);
router.get("/:id",bookController.getById);
router.put("/:id",bookController.updateBook);
router.delete("/:id",bookController.deleteBook);

module.exports=router;  