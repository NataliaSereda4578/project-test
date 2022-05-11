const router = require('express').Router();
const projectsController = require('../../controllers/projectControler');
const { checkToken } = require('../../servises/authService');

router.get('/all', checkToken, projectsController.getAllProjects);
router.post('/create', checkToken, projectsController.createNewProject);
router.get('/', checkToken, projectsController.getSingleProject);

module.exports = router;
