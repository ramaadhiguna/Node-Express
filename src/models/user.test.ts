const mockingoose = require("mockingoose");
import { User } from "./user";

describe("user model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      username: "name",
      email: "name@email.com",
      password: "password"
    };

    mockingoose(User).toReturn(_doc, "findOne");

    return User.findById({ _id: "507f191e810c19729de860ea" }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
