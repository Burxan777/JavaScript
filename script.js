const count = document.querySelector('#count')
const amount =document.querySelector('#amount')

const kinosecimihissesi =document.querySelector('#movie')



const oturacaqlar = document.querySelectorAll('.seat:not(.reserved')
const container =document.querySelector('.container')

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
    e.target.classList.toggle('selected')
    calculateTotal()
})


function calculateTotal(){
    const secilmisoturacaqlar = container.querySelectorAll('.seat.selected')
    const oturacaqlarinsayi = secilmisoturacaqlar.length
    count.innerText = oturacaqlarinsayi
    amount.innerText = oturacaqlarinsayi* kinosecimihissesi.value

  //proqram terefde saclanilan ve locala gonderirlernler
    const SecilenyerlerArr =[]
    const butunyerlerArr=[]


    secilmisoturacaqlar.forEach(function(seat){
        SecilenyerlerArr.push(seat)
    })
    oturacaqlar.forEach(function(seat){
        butunyerlerArr.push(seat)
    })

    let secilenIndeks = SecilenyerlerArr.map(function(seat){
        return butunyerlerArr.indexOf(seat)
    })
    

    localdasaxla(secilenIndeks)

}



  


// settiem bazaya yazir
function localdasaxla (indeks){
    localStorage.setItem('secilenyerler',JSON.stringify(indeks))
    localStorage.setItem('secilmismovieindex',kinosecimihissesi.selectedIndex)
}

function localdangetir () {
    const secilenyerlerr = JSON.parse(localStorage.getItem('secilenyerler'))

    if(secilenyerlerr !==null && secilenyerlerr.length > 0){
        oturacaqlar.forEach(function(seat,index){
            if(secilenyerlerr.indexOf(index) > -1){
                seat.classList.add('selected')
            }
        })
    }

    const SecilenFilmIndeksi = localStorage.getItem('secilmismovieindex')
    if(SecilenFilmIndeksi !==null){
    kinosecimihissesi.selectedIndex = SecilenFilmIndeksi          }
}        



localdangetir()