import UserType from '../../types/userType';
import User from '../../models/userModel';
import UserProfileType from '../../types/userProfileType';
import {GraphQLString} from 'graphql';

module.exports = {
    type: UserProfileType,
    args: {
        fullName: {type: GraphQLString},
        email:  {type: GraphQLString},
        password:  {type: GraphQLString},
        createdAt:  {type: GraphQLString},
        updatedAt:  {type: GraphQLString}
    },
    resolve(parent,args) {
        let user = new User({
            fullName: args.fullName,
            email: args.email,
            password: args.password,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        });
        return user.save();
    }
};