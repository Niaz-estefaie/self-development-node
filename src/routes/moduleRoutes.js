const express = require('express');
const { createModule, getModules, updateModuleOrder, deleteModule } = require('../controllers/moduleController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/modules', protect, createModule)
    .get('/modules', protect, getModules)
    .put('/modules', protect, updateModuleOrder)
    .delete('/modules/:id', protect, deleteModule);

module.exports = router;