import mongoose, { Mongoose, ConnectionOptions } from 'mongoose';
import { MongoError } from 'mongodb';
import connectDB from './database'

jest.mock('mongoose');

describe('connectDatabase', () => {
  it('should connect database succesfully', async () => {
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    const mongooseConnectSpyOn = jest
      .spyOn<Mongoose, 'connect'>(mongoose, 'connect')
      .mockImplementationOnce((uris: string, options?: ConnectionOptions, callback?: (err?: MongoError) => void) => {
        if (callback) {
          callback();
        }
        return Promise.resolve(mongoose);
      });

    await connectDB();
    expect(consoleLogSpyOn).toBeCalledWith('MongoDB Connected');
    consoleLogSpyOn.mockRestore();
  });
});
