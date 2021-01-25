var img = ["https://media-exp1.licdn.com/dms/image/C5103AQEIJ7P_g_W60w/profile-displayphoto-shrink_200_200/0/1578105019134?e=1617235200&v=beta&t=FzQIcuIFCEhEhJJ8Pij-jXthr3PxAYvjFbGSNkZf7KY"
, "https://scontent.famd1-2.fna.fbcdn.net/v/t1.0-1/p240x240/46897205_1175803699243642_423596093075357696_n.jpg?_nc_cat=105&ccb=2&_nc_sid=dbb9e7&_nc_ohc=asml6Idi9RIAX_DZDBv&_nc_ht=scontent.famd1-2.fna&tp=6&oh=97f6730015e042ecd5fa837f540435da&oe=60350811"
, "https://timesofindia.indiatimes.com/thumb/msid-76148634,imgsize-251420,width-400,resizemode-4/76148634.jpg"
, "https://freepikpsd.com/wp-content/uploads/2019/10/cartoon-sister-png-4-Transparent-Images.png"];

var names = ["Hitesh vaghela(dad)" , "Usha vaghela(mom)" , "Rudra Vagehela(myself)" , "Parisha vaghela(my sister)"];
var a = 0;

function next()
{
    a++;
    var l = 4;

    if (a > l)
    {
      a = 0;  
    }
    var udimg = img[a];
    var udname = names[a];
    document.getElementById("main_image").src = udimg;
    document.getElementById("names").innerHTML = udname;
}