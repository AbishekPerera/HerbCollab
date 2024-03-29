import express from "express";
const customerRouter = express.Router();
import Customer from "../models/customer.js";
import bcrypt from "bcryptjs";

//add customer to database
customerRouter.route("/addcustomer").post(async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const password = req.body.password;
  const hashPassword = await bcrypt.hash(password, 10);

  const newCustomer = new Customer({
    name,
    email,
    phone,
    address,
    password: hashPassword,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//get all customers
customerRouter.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

// login customer
/*customerRouter.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Customer.findOne({ email: email, password: password })
    .select("-password") // exclude the password field
    .then((customer) => {
      if (customer) {
        res.json({
          message: "Login successful!",
          customer: customer,
        });
      } else {
        res.status(401).json("Invalid email or password.");
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});*/

//get customer by id
customerRouter.route("/:id").get((req, res) => {
  Customer.findById(req.params.id)
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update customer by id
customerRouter.route("/update/:id").put(async (req, res) => {
  try {
    const customerId = req.params.id;
    const { name, phone, address, password } = req.body;

    if (!password) {
      return res.status(400).send({ message: "Password is required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const updateCustomer = {
      name: name,
      phone: phone,
      address: address,
      password: hashPassword,
    };

    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      updateCustomer,
      { new: true }
    );

    if (!updatedCustomer) {
      return res.status(404).send({
        status: "Error with updating data",
        error: "Customer not found",
      });
    }

    res.status(200).send({ status: "User updated", user: updatedCustomer });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ status: "Error with updating data", error: err.message });
  }
});

export default customerRouter;
