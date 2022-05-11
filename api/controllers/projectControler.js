const Projects = require('../shemas/projectSchema');

const getAllProjects = async (req, res) => {
  try {
    // eslint-disable-next-line no-underscore-dangle
    const result = await Projects.find({ userId: req.user?._id });
    res.send(result);
  } catch (e) {
    res.status(500);
  }
};

const createNewProject = async (req, res) => {
  try {
    const { _id } = req.user;
    const { name, image = '' } = req.body || {};

    if (!name) {
      res.status(400).send();
      return;
    }

    const newProject = new Projects({ name, image, userId: _id });

    await newProject.save();
    res.send('Project created');
  } catch (e) {
    res.status(500).send();
  }
};

const getSingleProject = async (req, res) => {
  try {
    const result = await Projects.find({ _id: req.query.id });
    if (!result[0]) {
      res.status(400).send();
      return;
    }
    res.send(result[0]);
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = {
  getAllProjects,
  createNewProject,
  getSingleProject,
};
