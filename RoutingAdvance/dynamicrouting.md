Dynamic Routing

e.g you have a website where is the option for view profile and the route of that profile page is 

www.xyz.com/profile/

So for thath base url in profile route their is a profile of some Person and it's name may differ
e.g
Arun
Arsh
Arru
etc....

so for that profile name what happend

in the base url what happemd

- www.xyz.com/profile/Arun
- www.xyz.com/profile/Arsh
- www.xyz.com/profile/Arru
- www.xyz.com/profile/Ajuu

will be come but now in Static routing if we do how we do it

e.g

For Arun 
app.get('profile/Arun',(req,res){


})

app.get('profile/Arsh',(req,res){


})


like many route we create So it is good to write for every possibility

so the big answer is NO

and to tackle this thing what we do is

DYNAMIC ROUTING