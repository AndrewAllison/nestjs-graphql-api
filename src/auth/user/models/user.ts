import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;
  @Field({ nullable: true })
  username: string;
  @Field()
  email: string;
  @Field()
  createdOn: Date;
  @Field()
  password: string;
}
