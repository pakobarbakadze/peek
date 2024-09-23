import { ApiProperty } from '@nestjs/swagger';

export default class makeFriendsDto {
  @ApiProperty({
    description: 'The name of the first user',
    example: 'John Doe',
  })
  user1Name: string;

  @ApiProperty({
    description: 'The name of the second user',
    example: 'Jane Doe',
  })
  user2Name: string;
}
