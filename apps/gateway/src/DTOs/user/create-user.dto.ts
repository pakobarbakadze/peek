import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    type: String,
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    type: String,
    required: true,
  })
  password: string;
}
