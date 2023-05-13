import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerForm } from "./customer.dto";

import { CustomerEntity } from "./customer.entity";


@Injectable()
export class CustomerService {
    constructor(
       
        @InjectRepository(CustomerEntity)
        private customerRepo: Repository<CustomerEntity>,

      ) {}

      getcustomer(id):any{
        return this.customerRepo.findOneBy({id});
    }
     getcust():any{
        return this.customerRepo.find();
    }
    insertcustomer(mydto:CustomerForm):any {
        
   return this.customerRepo.save(mydto); 
    }
    updatecustomer(id,name,email,phn,gender,religion,address):any {
        return this.customerRepo.update(id,{name:name,email:email,phn:phn,gender:gender,religion:religion,address:address});

        
        //return "seller id: "  + id+" and selller name is " + sname+"email is"+email+"phone number is"+phn+"address is"+address;
    
    }

    updatecustomerbyid(mydto:CustomerForm,id):any {
        return this.customerRepo.update(id,mydto);
           }
    deletecustomerbyid(id):any {
    
        //return "Delete id is "+id;
    
        return this.customerRepo.delete(id);
    }


}