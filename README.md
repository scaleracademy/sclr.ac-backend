# sclr.ac-backend
Backend for sclr.ac URL shortner 


## Database 

### Schema 

#### ShortCodes 

1. id 
2. shortcode
3. longUrl 

## Development 

### Database Setup 

Setup database, user for this projet

```postgres
create database sclrac; 
create user sclrac with encrypted password 'sclrac';
grant all privileges on database sclrac to sclrac;
```