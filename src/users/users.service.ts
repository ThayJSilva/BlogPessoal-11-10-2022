import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException}from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository:Repository<User>
  ){}
  async listar() : Promise<User[]>{
    return this.usersRepository.find();
  }
  users: User[] = []
  create(createUserDto: CreateUserDto) {
    const IdMaxAtual = this.users[this.users.length - 1]?. id || 0;
    const id = IdMaxAtual + 1;
    const user = {
      id,
      ...createUserDto,
};
this.users.push(user)
return user;
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id)
    return this.users[index]
    //return ´this action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
   // return `This action updates a #${id} user`;

   const user = this.findOne(id)

   const newUser = {
    ...user ,
    ...updateUserDto,
   }
   const index= this.users.findIndex((user)=>user.id===id)
  }
  remove(id:number) {
   const index = this.users.findIndex((user) => user.id === id)
   if (index === -1) {
    throw new NotFoundException(`Usuário com id`)//exceçao de quando algo não for encontrado
   }
   return `This action removes a #${id} user`;
  
}
}