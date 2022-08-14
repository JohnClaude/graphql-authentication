const { GraphQLString } = require("graphql");
const graphql = require("graphql");
const AuthService = require("../services/auth");

const { GraphQLObjectType } = graphql;

const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, request) {
        return AuthService.signup({
          email: email,
          password: password,
          req: request,
        });
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, request) {
        return AuthService.login({
          email: email,
          password: password,
          req: request,
        });
      },
    },
  },
});

module.exports = mutation;
