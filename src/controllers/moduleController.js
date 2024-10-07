const Module = require("../models/Module");

const createModule = async (req, res) => {
  try {
    const { name, title, order, description } = req.body;
    const newModule = await Module.create({ name, title, order, description });
    res.status(201).json(newModule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getModules = async (req, res) => {
  try {
    const modules = await Module.find().sort({ order: 1 });
    res.status(200).json(modules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateModuleOrder = async (req, res) => {
  try {
    const { moduleId, newOrder } = req.body;
    const module = await Module.findById(moduleId);

    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }

    module.order = newOrder;
    await module.save();
    res.status(200).json({ message: 'Order updated', module });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteModule = async (req, res) => {
  try {
    const moduleId = req.params.id;
    const deletedModule = await Module.findByIdAndDelete(moduleId);
    res.status(200).json({ message: 'Module deleted', deletedModule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getModules, createModule, updateModuleOrder, deleteModule };
