const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer();
const upload= multer({dest: './public/images/upload/'})

const createNewCntrl = require('../controlers/acp/createNew');
const findItemsCntrl = require('../controlers/acp/findItemsBD')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('acp/acp');
});

router.get('/addCategory', function(req, res, next) {
    res.render('acp/addCategory');
  });

router.post('/addCategory', upload.none(), async (req, res, next) => {
  console.log('body: ',req.body);
  const { name } = req.body;

  const rezalt = await createNewCntrl.addNewCategory(name);

  console.log(rezalt);
  res.json({status: rezalt.status});
});
  
router.get('/addGroup', function(req, res, next) {
    res.render('acp/addGroup');
});

router.post('/addGroup', upload.none(), async (req, res, next) => {
  console.log('body: ',req.body);
  const { name } = req.body;

  const rezalt = await createNewCntrl.addNewGroup(name);
  
  console.log(rezalt);
  res.json({status: rezalt.status});
});


router.get('/addProduct', (req, res, next) => {
  res.render('acp/addProduct');
});

router.post('/addProduct', upload.single('imgProduct'), (req, res, next) => {
  console.log(req.body);
  console.log('req.file:  ', req.file);

  res.json({status: 'ok'})
});

router.post('/allProducts', upload.none(), async (req, res, next) => {

    // res.json({allAuthors, allgenres});
});

router.post('/book', upload.none(), async (req, res, next) => {
  // const { nameBook, authorBook, genreBook } = req.body;

  // const rezalt = await findBooksDB(nameBook, authorBook, genreBook);

  // res.json(rezalt);
});

router.post('/getGroups&categoryes', async (req, res) => {
  const groups = await findItemsCntrl.findAllGroup();
  const categoriyes = await findItemsCntrl.findAllCategoryes();
console.log(categoriyes, groups);
  res.json({categoriyes, groups});
});

module.exports = router;