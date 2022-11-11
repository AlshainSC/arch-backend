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

> In the directory you wish to create your server architecture in.  


===========================================  
# V 0.1.0
--> Generates template files w/ support for MongoDB, Mongoose, and Express  
--> These are basic, but functional.  Variable names are commented and should be replaced with your own.  
--> Some examples provided, more to follow.  

===========================================  

# VERY IMPORTANT NOTE
This package only functions for mongo/mongoose/express and is in a rough alpha phase.  
Probably don't use this just yet, I'm working on it. 

===========================================  

## TODOS 09.11.22  
> ~~--> CLI user interface.~~  
> ~~--> Initial scaffolding for Express/Mongo project.~~  
> ~~--> Build templates directory.~~  

===========================================  
## TODOS 11.11.22
> --> Cleanup async generator functions //for readability//  
> --> Implement automatic package installation  
> --> Add support for:  
>> --> Databases:  
>>> --> MySQL  
>>> --> PostgreSQL  

>> --> Servers:   
>>> --> Koa  
>>> --> Bare NodeJS  

>> --> ORM:  
>>> --> Prisma  
>>> --> Sequelize  

===========================================  
## End Goals
> --> Integration for all popular combinations of Node backend infrastructure.  
> --> Provide user with more options.  
> --> Final product SHOULD:  
>> --> Construct any Node backend giving the user a complete MVC directory with **(Fill In The Blank)** template structure.  
>> --> Include commented blocks of **(This Is Also An Option)** I.E. {{ authentication }}
