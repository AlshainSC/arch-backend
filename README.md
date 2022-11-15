# arch-backend  
Server and database file generation following MVC patterns.  

===========================================  

# Installation and Usage 
To install:  

    npm i -g arch-backend  
    
To run the tool:  

> In your project, if you haven't already:  

    npm init  
    
> Then:  

    arch-backend  

> To update:  

    npm update -g arch-backend

> In the directory you wish to create your server architecture in.  


===========================================  
# V 0.2.0
--> Generates template files w/ support for: Express/Koa, MongoDB/PostgreSQL, Mongoose/Sequelize 
--> These are basic, but functional.  Variable names are commented and should be replaced with your own.  
--> Some examples provided, more to follow.  

===========================================  

# VERY IMPORTANT NOTE
This package is in its early stages.  Current templates generated are very basic boilerplate and HAVE NOT YET BEEN TESTED.  
If you would like to contribute to this project or raise an issue, please see: https://github.com/AlshainSC/arch-backend  
  
If you like this project and would like to support the poor and exhausted student developing it, please see:  https://ko-fi.com/alshain
===========================================  

## TODOS 11.11.22
> --> ~~Cleanup async generator functions //for readability//~~  
> --> ~~Implement automatic package installation~~  
> --> Add support for:  
>> --> Databases:  
>>> --> Redis  
>>> --> ~~PostgreSQL~~  

>> --> Servers:   
>>> --> ~~Koa~~  
>>> --> Bare NodeJS  

>> --> ORM:  
>>> --> Prisma  
>>> --> ~~Sequelize~~  

===========================================  
## End Goals
> --> Integration for all popular combinations of Node backend infrastructure.  
> --> Provide user with more options.  
> --> Final product SHOULD:  
>> --> Construct any Node backend giving the user a complete MVC directory with **(Fill In The Blank)** template structure.  
>> --> Include commented blocks of **(This Is Also An Option)** I.E. {{ authentication }}
