const mongoose = require("mongoose");
import express from "express";

jest.mock("./routers/user", () => {
    return 'userRouter';
});

const mockUse = jest.fn();
const mockListen = jest.fn().mockImplementation((port, cb) => cb(jest.fn()));
const jsonSpy = jest.fn();
const connectSpy = jest.fn().mockImplementation(() => Promise.resolve());
const mOpen = jest.fn().mockImplementation((event, cb) => cb(jest.fn()));

jest.mock("express", () => {
    return () => ({
        listen: mockListen,
        use: mockUse,
    });
});

express.json = jsonSpy;

mongoose.connect = connectSpy;
mongoose.connection.once = mOpen;

describe("should test server configuration", () => {
    it("should run server completely", () => {
        require("./app.ts");
        expect(connectSpy).toHaveBeenCalled();
        expect(mockUse).toHaveBeenCalledWith(jsonSpy);
        expect(mockUse).toHaveBeenCalledWith(jsonSpy);
        expect(mockUse).toHaveBeenCalledWith("/user", 'userRouter');
        expect(mockListen).toHaveBeenCalledWith(3000, expect.any(Function));
    });
});