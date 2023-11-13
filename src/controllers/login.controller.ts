import { Request, Response } from "express"
import bcrypt from 'bcrypt'
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import User from "../models/user.model";
import dotenv from "dotenv";

dotenv.config()

type CrudFunctionParams = (req: Request, res: Response) => void;

export const loginUser: CrudFunctionParams = async function (req, res) {

  const { email, password } = req.body;
  if (!email || !password) return res.status(401).json({message: "Please enter the requested information"})
  const privateKey:Secret  = process.env.TOKEN_SECRET || ""
  const signOptions: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256', // type of signature
  };
  
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: "user not found" })

  const validated = await bcrypt.compare(password, user.password)
  if (!validated) return res.status(401).json({ message: "incorrect password" })

  if (!user.isVerified) return res.status(401).json({ message: "Not verified" })
  
  const token = await jwt.sign({user}, privateKey, signOptions)
  return res.json({user, token})

}