import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return 'Hello world!';
    },
  },
};
// tslint:disable-next-line:no-default-export
export default resolverMap;
