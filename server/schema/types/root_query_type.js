const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    fooField: { type: GraphQLID },
  }),
});

module.exports = RootQueryType;
