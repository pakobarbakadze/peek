import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Neo4jService } from '@app/common/neo4j/neo4j.service';

@Injectable()
export default class UserRepository {
  constructor(private readonly neo4jService: Neo4jService) {}

  public async createUser(user: User): Promise<User> {
    const session = this.neo4jService.getSession();

    try {
      const result = await session.run(
        'CREATE (u:User {name: $name, email:$email}) RETURN u',
        {
          name: user.name,
          email: user.email,
        },
      );

      return result.records.map((record) => record.get('u').properties)[0];
    } finally {
      session.close();
    }
  }

  public async getUser(name: string) {
    const session = this.neo4jService.getSession();

    try {
      const result = await session.run(
        'MATCH (u:User {name: $name}) RETURN u',
        { name },
      );

      return result.records.map((record) => record.get('u').properties)[0];
    } finally {
      session.close();
    }
  }

  public async makeFriends(user1Name: string, user2Name: string) {
    const session = this.neo4jService.getSession();

    try {
      await session.run(
        `
        MATCH (u1:User {name: $user1Name}), (u2:User {name: $user2Name})
        CREATE (u1)-[:FRIEND]->(u2)
        `,
        { user1Name, user2Name },
      );
    } finally {
      session.close();
    }
  }
}
