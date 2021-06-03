const express = require('express');
const router = express.Router();

const userController = require("../controller/user.controller");


/**
 * GET Routes
 */
router.route('/all').get(userController.getAll);
router.route('/:id').get(userController.findById);


/**
 * POST Routes
 */
router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.createUser);


/**
 * UPDATES Routes
 */

 /**
  * DELETE Routes
  */

module.exports = router;
