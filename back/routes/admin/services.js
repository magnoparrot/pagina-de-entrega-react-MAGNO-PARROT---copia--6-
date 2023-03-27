var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next){
    res.render('admin/services' , {
        layout:'admin/services'
    });
});
  




module.exports = router;