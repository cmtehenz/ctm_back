"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _ShowProfileService = _interopRequireDefault(require("../../../services/ShowProfileService"));

var _UpdateProfileService = _interopRequireDefault(require("../../../services/UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async show(req, res) {
    const user_id = req.user.id;

    const showProfile = _tsyringe.container.resolve(_ShowProfileService.default);

    const user = await showProfile.execute({
      user_id
    });
    return res.json((0, _classTransformer.classToClass)(user));
  }

  async update(req, res) {
    const user_id = req.user.id;
    const {
      name,
      email,
      password,
      old_password
    } = req.body;

    const updateProfile = _tsyringe.container.resolve(_UpdateProfileService.default);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password
    });
    return res.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = ProfileController;