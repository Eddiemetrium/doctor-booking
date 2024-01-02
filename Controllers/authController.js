import User from "../models/UserSchema.js"; 
import Doctor from "../models/DoctorSchema.js"; 
// import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    // Check if the user already exists
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      // User already exists
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new user
    if (role === "patient") {
      user = new User({
        email,
        password: hashPassword,
        name,
        role,
        photo,
        gender,
      });
    } else if (role === "doctor") {
      user = new Doctor({
        email,
        password: hashPassword,
        name,
        role,
        photo,
        gender,
      });
    }

    // Save the user to the database
    await user.save();

    res
      .status(201)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    // Internal server error
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error, try again!" });
  }
};

export const login = async (req, res) => {
  try {
    // Add your login logic here
    // For example, validate user credentials and generate a token
  } catch (err) {
    // Handle errors
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error, try again!" });
  }
};
