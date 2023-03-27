var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next){
    res.render('admin/intel' , {
        layout:'admin/intel'
    });
});
  




module.exports = router;
