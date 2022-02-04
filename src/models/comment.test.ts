const mockingoose = require("mockingoose");
import { Comment } from "./comment";

describe("comment model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      userId: "507f191e810c19729de860ea",
      comment: "comment",
      postId: "507f191e810c19729de860ea"
    };

    mockingoose(Comment).toReturn(_doc, "findOne");

    return Comment.findById({ _id: "507f191e810c19729de860ea" }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
