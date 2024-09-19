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
        'CREATE (n:User {name: $name}) RETURN n',
        { name: user.name },
      );

      return result.records.map(
        (record) => record.get('n').properties,
      )[0] as User;
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

      return result.records.map(
        (record) => record.get('n').properties,
      )[0] as User;
    } finally {
      session.close();
    }
  }
}
