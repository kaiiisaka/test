    //при зменении значения в ссылке меняется значение начального объекта.
    let user = { name: 'Иван' };

    let admin = user;
    
    admin.name = 'Петя'; // изменено по ссылке из переменной "admin"
    
    //alert(user.name); // 'Петя', изменения видны по ссылке из переменной "user"

    let user1 = {
        name1: "Джон",
        age1: 30
      };
      
      user1.sayHi = function() {
        alert("Привет!");
      };
      
      user1.sayHi(); // Привет!


