const card = document.getElementById("card")
const header = document.getElementById("header")
const fooetr = document.getElementById("header")
const navbar = document.getElementById("navbar")
const icons = document.querySelectorAll(".icons")
const modal = document.querySelector(".mod-img")
const mod_text = document.querySelector(".mod-text")
const modal_box = document.getElementById("modal_box")
const closeicon = document.getElementById("close")
const wrapper = document.getElementById("wrapper")
const trav = document.querySelector(".trav")
const text = document.querySelector(".text")
const navmenu = document.querySelector(".nav-menu")

let show=false
let hghg=true
const ShowMenu =()=>{
  if(hghg){
    navmenu.style.height="100%"
    navmenu.style.top="0"
    hghg=false
  }else{
    navmenu.style.top="-110%"
    navmenu.style.height="0"
    hghg=true
  }
}

const CloseMenu=()=>{
  if(show){
    navmenu.style.top="0"
    navmenu.style.height="100%"
    show=true
  }else{
    navmenu.style.height="0"
    navmenu.style.top="-110%"

    show=false
  }
}

let int = 0;
const wrapperimg = () => {
  setInterval(() => {
    
 if (int === 0) {
      trav.innerHTML = "O'zbek madaniy merosi"
      text.innerHTML = "O‘zbekiston madaniyati, Markaziy Osiyo xalqlarining ko‘p asrlik an’analari va turmush tarzi bilan chambarchas bog‘liq boy tarixga ega"
      wrapper.style.backgroundImage = "url('./img/bg/2.jpg')";
      int = 1
    } else if (int === 1) {
      trav.innerHTML = "O'zbek me'morchiligi"
      text.innerHTML = "Me’morchilik ijodining gullab-yashnashi O‘zbekiston Buyuk Ipak yo‘lining markazi bo‘lgan o‘rta asrlar davriga to‘g‘ri keladi. XIV asrdan boshlab bu yerda dunyoga mashhur me’morchilik yodgorliklari – Samarqanddagi Registon maydoni, Shohi-Zinda majmuasi, Bibixonim masjidi va Gur-Amir maqbarasi, Shahrisabzdagi Oqsaroy, Buxorodagi Poyi kalon va Labi Hovuz, Xivada minora va madrasalar barpo etildi."
      wrapper.style.backgroundImage = "url('./img/bg/3.jpg')";
      int = 2
    } else if (int === 2) {
      trav.innerHTML = "Xalq san'ati"
      text.innerHTML = "O‘zbekistonda azaldan noyob iste’dodli odamlar yashab, xalq san’atining  nodir an’analarini asrab-avaylab, avloddan-avlodga yetkazib kelmoqdalar. Ushbu an’analar bizning tariximizni, ajoyib madaniyatimiz va milliy qadriyatlarimizni unutishga yo‘l bermaydi."
      wrapper.style.backgroundImage = "url('./img/bg/6.jpg')";
      int = 0
    }

  }, 5000);
}
wrapperimg()

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.style.position = "sticky"
    navbar.style.background = "rgba(8, 13, 29, 0.926)"
    navbar.style.padding = "0.2rem"
  } else {
    navbar.style.position = "absolute"
    navbar.style.padding = "0rem"
    navbar.style.background = "transparent"
  }
}

let vil = ""
const Write = () => {
  for (let i = 0; i < icons.length; i++) {
    icons[i].innerHTML = ` <i onclick="Foto(${i})" id="icon" class="bi bi-search"></i>  `
  }
}

closeicon.onclick = () => {
  modal_box.style.height = "0"
  modal.innerHTML = ""
}

const Foto = (id) => {

  modal_box.style.height = "100vh"

  if (id == 0) {
  
    mod_text.innerHTML = `
    <h1>Samarqand</h1>
    <p>
    Samarqand sayyoramizdagi eng qadimiy shaharlardan biri bo‘lib, Rim va Afina bilan tengdoshdir. U 2750 yoshdan oshgan. Shahar har doim haqiqiy sharqona mehmondo‘stlikning chinakam namunasi bo‘lgani bilan ajralib turgan. Bu yerda bir necha millat vakillari doimo muammosiz yashab kelgan. Samarqandni odatda "Sharqiy Bobil" deb atashadi.
    </p>
    <p>
    Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi. 
    </p>
    `
    for (let i = 0; i < 4; i++) {
      modal.innerHTML += `
   <img class="img" src="./img/Samarqand/${i}.jpg" alt="">
  
   `}
  }
  else {
    if (id == 1) {
      mod_text.innerHTML = `
        <h1>Buxoro</h1>
        <p>
        Buxoro o‘zida qadimiy urf-odatlarning ko‘p asrlik tarixini Islom dini bilan mujassamlashtirdi. Hayratlanarli darajada donolik, muqaddaslik va ta’lim berish muhitiga ega bo‘lgan shahar. Bir marta ushbu shaharda bo‘lganingizda, o‘zingizni go‘yo boshqa dunyoda va boshqa sayyorada bo‘lgandek his etasiz. Madaniy, diniy, etnik sivilizatsiyalarning betakror aralashuvi Buxoroni unutilmas taassurotlar shahriga aylantirdi.
        </p>
        <p>
        Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi.
        </p>
        `
      for (let i = 0; i < 4; i++) {
        modal.innerHTML += `
    <img class="img" src="./img/Buxoro/${i}.jpg" alt="">
   
    `}
    } else {
      if (id == 2) {
        mod_text.innerHTML = `
          <h1>Andijon</h1>
          <p>
          Andijon shahri - o‘zbek sheʼriyatining taniqli vakili, Mug‘allar sulolasining asoschisi, sarkarda va hukmdor Boburning vatani. Bir vaqtlar Buyuk Ipak yo‘li bo‘ylab joylashgan, arxeologik yodgorliklar va tarixiy obidalarga boy bo‘lgan shaharni , tashrif buyurishga tavsiya etamiz:
          </p>
          <p>
          Farg‘ona vodiysi o‘zining hunarmandchilik ustaxonalari bilan mashhur. Andijondan olib kelinadigan eng ko‘p sovg‘alar – kulolchilik, yog‘och o‘ymakorligi mahsulotlari va albatta xon atlas, adras va ipak kabi to‘qimachilik buyumlari hisoblanadi. Agar siz ozgina qimmatbaho vaqtingizni sarflab, Andijondan unchalik uzoq bo‘lmagan Shahrixon shahriga borsangiz, unda siz pichoqni sevadiganlar uchun jannatga tushasiz. 
          </p>
          `
        for (let i = 0; i < 4; i++) {
          modal.innerHTML += `
      <img class="img" src="./img/Andijon/${i}.jpg" alt="">
     
      `}
      } else {
        if (id == 3) {
          mod_text.innerHTML = `
            <h1>Termiz</h1>
            <p>
            Surxondaryo viloyatining eng janubiy shahri va maʼmuriy markazi – Termiz shahri hisoblanadi. Bu shaharda va uning atrofida turli xil dinlar – otashparastlik, nestorianlik, buddaviylik va islom dinlari bilan bog‘liq juda ko‘p diqqatga sazovor joylar saqlangan.
            </p>
            <p>
            Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi.
            </p>
            `
          for (let i = 0; i < 4; i++) {
            modal.innerHTML += `
        <img class="img" src="./img/Termiz/${i}.jpg" alt="">
       
        `}
        } else {
          if (id == 4) {
            mod_text.innerHTML = `
              <h1>Toshkent</h1>
              <p>
              Toshkent o‘zida qadimiy urf-odatlarning ko‘p asrlik tarixini Islom dini bilan mujassamlashtirdi. Hayratlanarli darajada donolik, muqaddaslik va ta’lim berish muhitiga ega bo‘lgan shahar. Bir marta ushbu shaharda bo‘lganingizda, o‘zingizni go‘yo boshqa dunyoda va boshqa sayyorada bo‘lgandek his etasiz. Madaniy, diniy, etnik sivilizatsiyalarning betakror aralashuvi Buxoroni unutilmas taassurotlar shahriga aylantirdi.
              </p>
              <p>
              Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi.
              </p>
              `
            for (let i = 0; i < 4; i++) {
              modal.innerHTML += `
          <img class="img" src="./img/Toshkent/${i}.jpg" alt="">
         
          `}
          } else {
            if (id == 5) {
              mod_text.innerHTML = `
                <h1>Xiva</h1>
                <p>
                Xiva o‘zida qadimiy urf-odatlarning ko‘p asrlik tarixini Islom dini bilan mujassamlashtirdi. Hayratlanarli darajada donolik, muqaddaslik va ta’lim berish muhitiga ega bo‘lgan shahar. Bir marta ushbu shaharda bo‘lganingizda, o‘zingizni go‘yo boshqa dunyoda va boshqa sayyorada bo‘lgandek his etasiz. Madaniy, diniy, etnik sivilizatsiyalarning betakror aralashuvi Buxoroni unutilmas taassurotlar shahriga aylantirdi.
                </p>
                <p>
                Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi.
                </p>
                `
              for (let i = 0; i < 4; i++) {
                modal.innerHTML += `
            <img class="img" src="./img/Xiva/${i}.jpg" alt="">
           
            `}
            } else {
              if (id == 6) {
                mod_text.innerHTML = `
                  <h1>Zomin</h1>
                  <p>
                  Katta hududda joylashgan Zomin davlat tog‘ archa qo‘riqxonasi va uning tarkibiga kiradigan Baxmal o‘rmon xo‘jaligi, Zomin o‘rmon xo‘jaligi, umumiy maydoni 26840 ga. teng bo‘lgan Zomin milliy tabiiy bog‘i;

✔️ Kristall ko‘llar

Nurota tizmalari o‘zining janubiy, qisman g‘arbiy va vohasining bir qismini o‘rab, moʻtadil iqlimni taʼminlaydi, shuningdek, mintaqaning shimolidagi Aydar-Arnasay ko‘llar tizimiga relyef va tabiiy go‘zallikning o‘ziga xosligini beradi;

✔️ Milliy sihatgoh - "Zomin" sanatoriysi

Zomin milliy bog‘ida dengiz sathidan 2 ming metr balandlikda “Zomin” sihatgohi joylashgan.

Eng toza havo, tog‘li landshaftlar, ignabargli o‘simliklar - bularning barchasi kattalar va bolalarga tibbiy muolajalar o‘tqazish uchun eng yaxshi sharoit hisoblanadi.


                  </p>
                  `
                for (let i = 0; i < 4; i++) {
                  modal.innerHTML += `
              <img class="img" src="./img/Zomin/${i}.jpg" alt="">
             
              `}
              } else {
                if (id == 7) {
                  mod_text.innerHTML = `
                    <h1>Mo'ynoq</h1>
                    <p>
                    Mo‘ynoqda suvenirlarni asosan shahar markazidan topish mumkin. Ko‘pincha bu tikuvchilik sanʼati asarlari, jumladan, milliy naqshlar tushirilgan do‘ppi, hamyon, sumka va sharflardir. Hozirgi vaqtda dengizga oid suvenir ishlab chiqarishni yo‘lga qo‘yish uchun keng ko‘lamli tayyorgarlik ishlari olib borilmoqda.
                    </p>
                    <p>
                    Unda go‘yo ulkan oynadagidek yo‘l aks etadi. Ko‘p avlodlar bosib o‘tgan yo‘l. Shaharning boy voqealari, yuksalishlar va pasayishlar, qimmatbaho topilmalar va eksponatlar, qadimiy obidalar dastlabki odamlar bu hududda ming yillar oldin yashay boshlaganliklarini tasdiqlashga imkon beradi.
                    </p>
                    `
                  for (let i = 0; i < 4; i++) {
                    modal.innerHTML += `
                <img class="img" src="./img/Moynoq/${i}.jpg" alt="">
               
                `}
                }
              }
            }
          }
        }
      }
    }
  }


}

window.onload = () => {
  Write()
}