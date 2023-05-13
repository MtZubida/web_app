import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModeratorForm } from "./moderator.dto";

import { ModeratorEntity } from "./moderator.entity";


@Injectable()
export class ModeratorService {
    constructor(
       
        @InjectRepository(ModeratorEntity)
        private moderatorRepo: Repository<ModeratorEntity>,

      ) {}

      getmoderator(id):any{
        return this.moderatorRepo.findOneBy({id});
    }
     getmoder():any{
        return this.moderatorRepo.find();
    }
    insertmoderator(mydto:ModeratorForm):any {
        
   return this.moderatorRepo.save(mydto); 
    }
    updatemoderator(id,name,email,phn,gender,religion,address):any {
        return this.moderatorRepo.update(id,{name:name,email:email,phn:phn,gender:gender,religion:religion,address:address});

        
        //return "seller id: "  + id+" and selller name is " + sname+"email is"+email+"phone number is"+phn+"address is"+address;
    
    }

    updatemoderatorbyid(mydto:ModeratorForm,id):any {
        return this.moderatorRepo.update(id,mydto);
           }
    deletemoderatorbyid(id):any {
    
        //return "Delete id is "+id;
    
        return this.moderatorRepo.delete(id);
    }


}