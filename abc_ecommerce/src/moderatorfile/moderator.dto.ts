import { IsNotEmpty, IsInt, Length, IsEmail, MinLength, MaxLength } from "class-validator";

export class ModeratorForm {   
   

    @Length(2,10)
    name:string;
    @IsEmail()
    email:string;
    phn:number;
    gender:string;
    religion:string;
    @MinLength(5,{message:'address is too short',})
    @MaxLength(20,{message:'address is long',})
    address:string;
   // adminid:number;


}