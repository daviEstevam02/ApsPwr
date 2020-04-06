(function(){
        const cards = document.querySelector('.img-area');
        const userProfiles = [
            {nome: 'Bruno Almeida Kotesky',photo: 'icons/IMG_1543.jpg'},
            {nome: 'Davi Cavalcante',photo: 'icons/IMG_9353.jpg'},
            { nome: 'Renzo Hideki',photo: 'icons/RenzoPicture.jpg'},
            {nome: 'Lucas', photo: 'icons/LucasPicture.jpg'},
            { nome: 'Gustavo',photo: 'icons/IMG_1543.jpg'}
        ];
        
        userProfiles.forEach(card => {
            const cardEl =  `<div class="card">
               <div class="img-wrapper">
                 <img src="${card.photo}" alt="${name}">
                 <h2>${card.nome}</h2>
                  <ul>
                    <li><a id="linkUnip" href="">UNIP</a></li>
                    <li><a class="profileCard" href="https://twitter.com/home?lang=pt"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="profileCard" href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin"></i></a></li>
                    <li><a class="profileCard" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                  </ul>
               </div>
              </div>`;
              cards.innerHTML += cardEl;
        });
})();
