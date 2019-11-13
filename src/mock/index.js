import Mock from "mockjs"
import { dmenu, menu } from "./menu"

const data = {
  status: "online"
}

const adminInfo = {
  role: "admin",
  authNum: 100,
  dmenu
}

const userInfo = {
  role: "user",
  authNum: 50,
  menu
}

Mock.mock("localhost:9102/api/login", data)
Mock.mock("localhost:9102/api/userInfo", userInfo)

