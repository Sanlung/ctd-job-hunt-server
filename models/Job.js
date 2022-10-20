const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name."],
      maxLength: 30,
    },
    position: {
      type: String,
      required: [true, "Please provide the position."],
      maxLength: 30,
    },
    location: {
      type: String,
      maxLength: 30,
    },
    contact: {
      type: String,
      maxLength: 30,
    },
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email.",
      ],
    },
    status: {
      type: String,
      enum: ["eligible", "applied", "interviewed", "declined"],
      default: "eligible",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user info."],
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("Job", JobSchema);
