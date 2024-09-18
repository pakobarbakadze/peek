import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Neo4jService } from './services';

@Injectable()
export default class UserRepository {
  constructor(private readonly neo4jService: Neo4jService) {}

  public async createUser(user: User) {
    const session = this.neo4jService.getSession();

    try {
      const result = await session.run(
        'CREATE (n:User {name: $name}) RETURN n',
        { name: user.name },
      );

      return result.records.map((record) => record.get('n').properties);
    } finally {
      session.close();
    }
  }

  public async getUser(name: string) {
    const session = this.neo4jService.getSession();

    try {
      const result = await session.run(
        'MATCH (n:User {name: $name}) RETURN n',
        { name },
      );

      return result.records.map((record) => record.get('n').properties)[0];
    } finally {
      session.close();
    }
  }
}
