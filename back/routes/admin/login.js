var usuariosModel = require('./../../models/usuariosModel' );
var express = require('express');
var router = express.Router();





router.post('/', async (req, res, next) => {
try {
var usuario = req.body.usuario;
var password = req.body.password;



var data = await
usuariosModel.getUserByUsernameAndPassword(usuario, password);

if (data != undefined) {
  req.session.usuario = data.id;
  req.session.usuario = data.id;

res.redirect('/admin/novedades' );
} else {
res.render('admin/login', {
layout: 'admin/layout',
error: true
});
}

} catch (error) {
console. log(error);

}
})
router.get('/logout', function (req, res, next){
  req.session.destroy();
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});




module.exports = router;


