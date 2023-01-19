const Minion = require("../models/Minion");

exports.createMinion = async (req, res) => {
  try {
    const minion = await Minion.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Successfully Minion Created",
      data: minion,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't created minion",
      error: error,
    });
  }
};

exports.getMinions = async (req, res) => {
  try {
    const minions = await Minion.find({});

    res.status(200).json({
      status: "success",
      data: minions,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't get the minion data",
      error: error,
    });
  }
};

exports.updateMinion = async (req, res) => {
  const { id } = req.params;
  try {
    const minion = await Minion.updateOne({ _id: id }, req.body, {
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      message: "Minion Successfully Updated!",
      data: minion,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't Update a Minion!",
      error: error,
    });
  }
};

exports.deleteMinion = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Minion.deleteOne({ _id: id });

    res.status(200).json({
      status: "success",
      message: "Minion Successfully deleted!",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't delete a Minion!",
      error: error,
    });
  }
};
