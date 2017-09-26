const assert = require('assert');
const authController = require('../../controllers/auth.controller');
const expect = require('chai').expect;

function AuthController(){

  describe('AuthController', function(){
    describe('isAuthorized', function(){
      it('Should return false if not authorized', function(){
        assert.equal(false), authController.isAuthorized(['user'],'admin');
      })
      it('Should return false if not authorized', function(){
        assert.equal(true), authController.isAuthorized(['user','admin'], 'admin');
      })
    })
    describe('isAuthorizedAsync', function(){
      it('Should return false if not authorized', function(){
        //assert.equal(false, authController.isAuthorized(['user'], admin));
        authController.isAuthorizedAsync(['user'], 'admin',
        function(isAuth){
          assert.equal(false, isAuth);
          done();
        });
      })    
    })
  });
} 