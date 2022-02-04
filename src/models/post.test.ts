const mockingoose = require("mockingoose");
import { Post } from "./post";

describe("post model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      title: "title",
      description: "description"
    };

    mockingoose(Post).toReturn(_doc, "findOne");

    return Post.findById({ _id: "507f191e810c19729de860ea" }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
