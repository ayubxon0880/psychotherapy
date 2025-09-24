export const TESTS_UZ = [
    {
        id: "phq9",
        title: "PHQ-9 – Depressiya testi",
        description: "9 ta savoldan iborat, depressiya simptomlarini baholash skriningi.",
        questions: [
            "So'nggi 2 haftada qiziqish yoki zavqni yo'qotdingizmi?",
            "Kayfiyatingiz tushkun bo'ldimi?",
            "Uyqu muammolari bo'ldimi?",
            "Charchoq yoki energiya yo'qligi sezildimi?",
            "Ishtahangizda o'zgarish bo'ldimi?",
            "O'zingizni yomon his qildingizmi yoki aybdor deb bildingizmi?",
            "E'tibor jamlay olmadizmi?",
            "Harakatlaringiz juda sekinlashdimi yoki haddan tashqari bezovta bo'ldingizmi?",
            "O'zingizga zarar yetkazish haqida o'yladingizmi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Bir necha kun" },
            { value: 2, label: "Yarim haftadan ko'p" },
            { value: 3, label: "Har kuni" }
        ]
    },

    {
        id: "gad7",
        title: "GAD-7 – Umumiy tashvish testi",
        description: "7 ta savoldan iborat tashvish darajasini baholash testi.",
        questions: [
            "So'nggi 2 haftada asabiylashdingizmi yoki xavotir his qildingizmi?",
            "Nazorat qila olmaslik hissi bo'ldimi?",
            "Turli narsalar haqida haddan tashqari xavotir bo'ldimi?",
            "Dam olishda qiynaldingizmi?",
            "Bezovtalik sabab joyida turolmadizmi?",
            "Oson jahlingiz chiqib qoldimi?",
            "Bu simptomlar sizning kundalik faoliyatingizga halaqit berdimi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Bir necha kun" },
            { value: 2, label: "Yarim haftadan ko'p" },
            { value: 3, label: "Har kuni" }
        ]
    },

    {
        id: "pas",
        title: "PAS – Panika va agorafobiya testi",
        description: "Panika hujumlari va agorafobiya simptomlarini baholash testi (13 ta savol).",
        questions: [
            "Panika hujumlari chastotasi (qanchalik tez-tez sodir bo'ladi)?",
            "Panika hujumlari davomiyligi (odatda qancha vaqt davom etadi)?",
            "Panika hujumlari intensivligi (alomatlar qanchalik kuchli)?",
            "Panika hujumlarini kutish tashvishi (ularni kutib yashaysizmi)?",
            "Hujumlar orasida umumiy tashvish darajasi?",
            "Hujumlar paytidagi jismoniy simptomlar (yurak urishi, terlash, nafas qisishi)?",
            "Hujumlar paytidagi psixik simptomlar (o'lish yoki aqldan ozish qo'rquvi)?",
            "Agorafobiya – ommaviy joylarda yoki qochish qiyin bo'lgan joylarda qo'rquv?",
            "Agorafobiya tufayli cheklovlar (qaysi joylardan qochasiz)?",
            "Ijtimoiy faoliyatga ta'siri (ish, o'qish, oilaviy hayot)?",
            "Xatti-harakatlar (qochish yoki xavfsizlik choralarini ko'rish darajasi)?",
            "Hujumlarga bo'lgan nazorat (ularni boshqarish qanchalik qiyin)?",
            "Umumiy hayot sifati (panika va agorafobiya hayot sifatini qanchalik pasaytiradi)?"
        ],
        options: [
            { value: 0, label: "Yo'q / Hech qachon" },
            { value: 1, label: "Juda kam / Engil" },
            { value: 2, label: "O'rtacha" },
            { value: 3, label: "Kuchli" },
            { value: 4, label: "Juda kuchli / Har doim" }
        ]
    },

    {
        id: "mdq",
        title: "MDQ – Bipolyar buzilish testi",
        description: "Mood Disorder Questionnaire – bipolyar buzilishni skrining qilish testi.",
        questions: [
            "Sizda kayfiyat juda ko'tarilib ketgan davrlar bo'lganmi?",
            "U davrda uxlamasdan ham o'zingizni tetik his qilganmisiz?",
            "Ko'p gapirish yoki gapni bo'lish odatiy hol bo'lganmi?",
            "O'zingizni haddan tashqari quvvatli his qilganmisiz?",
            "Bir vaqtning o'zida ko'plab rejalar qurganmisiz?",
            "Pulni isrof qilgan davrlaringiz bo'lganmi?",
            "Kayfiyatingiz juda tez o'zgarib ketganmi?"
        ],
        options: [
            { value: 1, label: "Ha" },
            { value: 0, label: "Yo'q" }
        ]
    },

    {
        id: "ybocs",
        title: "Y-BOCS – Yel-Braun shkalasi",
        description: "Obsessiv-kompulsiv simptomlarni baholash uchun test (10 ta savol).",
        questions: [
            "So'nggi haftada obsesiv fikrlarning qancha vaqtini oldi?",
            "Obsesiv fikrlar sizga qanchalik kuchli xalaqit berdi?",
            "Obsesiv fikrlar sizda qanchalik noqulaylik yoki iztirob keltirdi?",
            "Obsesiv fikrlarni qarshilik qilish yoki nazorat qilish darajasi qanday?",
            "Obsesiv fikrlarni nazorat qilish qanchalik samarali bo'ldi?",
            "So'nggi haftada kompulsiv xatti-harakatlar qancha vaqt oldi?",
            "Kompulsiyalar sizning odatiy faoliyatingizga qanchalik xalaqit berdi?",
            "Kompulsiyalar sizda qanchalik iztirob yoki noqulaylik tug'dirdi?",
            "Kompulsiv xatti-harakatlarga qarshilik qilish darajasi qanday?",
            "Kompulsiv xatti-harakatlarni nazorat qilish qanchalik samarali bo'ldi?"
        ],
        options: [
            { value: 0, label: "Yo'q / Umuman emas" },
            { value: 1, label: "Engil (vaqti-vaqti bilan, ahamiyatsiz)" },
            { value: 2, label: "O'rtacha (aniq seziladi, lekin boshqarish mumkin)" },
            { value: 3, label: "Kuchli (jiddiy xalaqit beradi, boshqarish qiyin)" },
            { value: 4, label: "Juda kuchli (deyarli butunlay nazoratdan tashqarida)" }
        ]
    },

    {
        id: "ocir",
        title: "OCI-R – Obsessiv simptomlar testi",
        description: "18 ta savoldan iborat obsesiv simptomlarni baholash testi.",
        questions: [
            "Qayta-qayta tekshirishga ehtiyoj sezasizmi? (masalan, eshik qulflanganmi, gaz o'chirilganmi?)",
            "Biror narsaga tegib yoki ushlab qo'yganingizda iflos bo'ldim deb o'ylaysizmi?",
            "Biror ishni yoki so'zni qayta-qayta bajarishga majbur bo'lasizmi?",
            "Boshqa odamlarga zarar yetkazish haqida yoqimsiz fikrlar keladimi?",
            "Tartib va simmetriyaga haddan tashqari e'tibor qaratishingiz bormi?",
            "Biror narsani qayta o'ylashni yoki tekshirishni to'xtata olmaysizmi?",
            "Qo'lingizni yoki tanangizni tez-tez yuvishga majbur bo'lasizmi?",
            "Ma'lum buyumlarni yoki narsalarni yig'ib qo'yishga majbur bo'lasizmi?",
            "Esingizda bo'lmagan narsalarni qayta eslashga yoki takrorlashga urinib qolmayapsizmi?",
            "Tartibsizlik yoki nosimmetriya sizni juda bezovta qiladimi?",
            "Ifloslanishdan yoki kasallik yuqtirishdan ortiqcha qo'rqasizmi?",
            "Biror narsani noto'g'ri qildim deb qayta tekshirasizmi?",
            "Keraksiz narsalarni tashlab yuborish sizga juda qiyinmi?",
            "Zarar yetkazish yoki nomaqbul ish qilish haqida kuchli fikrlar keladimi?",
            "Biror narsani qachon tugatishni bilolmasdan qayta-qayta davom ettirasizmi?",
            "Tartib yoki simmetriya buzilganda juda noqulaylik sezasizmi?",
            "Xavfli yoki yoqimsiz narsalarni yuvmasdan ushlash siz uchun qiyinmi?",
            "Biror narsani tashlab yuborganingizdan keyin afsuslanib qayta olish istagi paydo bo'ladimi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Kamdan-kam" },
            { value: 2, label: "Ba'zan" },
            { value: 3, label: "Ko'p hollarda" },
            { value: 4, label: "Doimiy" }
        ]
    },

    {
        id: "pcl5",
        title: "PCL-5 – Travmadan keyingi stress testi",
        description: "20 ta savoldan iborat posttravmatik stressni baholash testi.",
        questions: [
            "Travmatik voqeani qayta-qayta eslab ketish holatlari bormi?",
            "Travmatik voqea haqida tush ko'rasizmi?",
            "Travmatik voqeani eslatadigan narsalardan qattiq bezovtalikasizmi?",
            "Trauma haqida o'ylashga majbur bo'lib qolganmisiz?",
            "Travmani eslatuvchi narsalardan qochishga harakat qilasizmi?",
            "Trauma haqida gapirish yoki o'ylashdan qochasizmi?",
            "O'z-o'zidan yomon his-tuyg'ular paydo bo'ladimi?",
            "Atrofdagilardan uzoqlashgandek his qilasizmi?",
            "O'z his-tuyg'ularingizni ifoda eta olmayapsizmi?",
            "Yaqin kelajakda ijobiy narsalar bo'lishiga ishonchingiz yo'qmi?",
            "O'zini yoki boshqalarni ayblash hissi bormi?",
            "Salbiy hissiyotlar (qo'rquv, g'azab, ayb, uyat) tez-tez paydo bo'ladimi?",
            "Avvallari qiziqqan narsalarga qiziqishingiz kamayganmi?",
            "Xavf yoki ehtiyotkorlik hissi kuchayganmi?",
            "Haddan tashqari hushyorlik yoki sergaklik holati bormi?",
            "Doimiy ravishda xavf kutayotgan kabi his qilasizmi?",
            "Yomon tushlar yoki eslashlar uyquni buzadimi?",
            "E'tiborni jamlashda qiynalasizmi?",
            "Tez jahlingiz chiqadimi yoki agressiv bo'lasizmi?",
            "Tez qo'rqib ketish holatlari bormi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Bir oz" },
            { value: 2, label: "O'rtacha" },
            { value: 3, label: "Ko'p" },
            { value: 4, label: "Juda ko'p" }
        ]
    },

    {
        id: "mchat",
        title: "M-CHAT-R – Bolalarda autizm skriningi",
        description: "Bolalarda autizm xavfini erta aniqlash uchun 20 ta savoldan iborat test.",
        questions: [
            "Bolangiz kimnidir ko'rsatganda qaraydimi?",
            "Bolangiz oddiy narsalardan zavqlanadimi (masalan, tebranish, o'yinchoq bilan o'ynash)?",
            "Bolangiz boshqa odamlar bilan o'ynashni yoqtiradimi?",
            "Bolangiz zinadan ko'tarilayotganda yordam so'raydimi?",
            "Bolangiz \"haq\" yoki \"yo'q\" degan so'zlarni tushunadimi?",
            "Bolangiz yangi narsaga ishora qilib e'tibor qaratadimi?",
            "Bolangiz odamlarning yuziga qaraydimi?",
            "Bolangiz tabassum bilan javob qaytaradimi?",
            "Bolangiz odamlarning ovozini eshitib javob qaytaradimi?",
            "Bolangiz ko'rsatkich barmog'ini ishlatadimi (narsani so'rash yoki ko'rsatish uchun)?",
            "Bolangiz boshqa odamlarining imo-ishoralarini taqlid qiladimi?",
            "Bolangiz qo'g'irchoq yoki o'yinchoqlardan xayoliy o'yinlarda foydalanadimi?",
            "Bolangiz ismiga javob qaytaradimi?",
            "Bolangiz odatiy narsalarni o'rganishda qiynaladimi?",
            "Bolangiz ko'pincha ko'z bilan aloqa qiladimi?",
            "Bolangiz odatdagi narsalarga qattiq bog'lanib qoladimi?",
            "Bolangiz tovushlarga kuchli reaksiya bildiradimi?",
            "Bolangiz doimiy ravishda qo'l yoki barmoq harakatlarini qiladimi?",
            "Bolangiz boshqa odamlarining hissiyotlariga e'tibor beradimi?",
            "Bolangiz o'yin paytida boshqalar bilan hamkorlik qiladimi?"
        ],
        options: [
            { value: 0, label: "Ha" },
            { value: 1, label: "Yo'q" }
        ]
    },

    {
        id: "aq",
        title: "AQ – Autizm ko'rsatkichlari testi",
        description: "Autistik xususiyatlarni baholash uchun qisqartirilgan (20 savollik) test.",
        questions: [
            "Men ijtimoiy vaziyatlarda o'zimni noqulay his qilaman.",
            "Biror narsaga qiziqqanimda, unga juda chuqur berilib ketaman.",
            "Men yangi odamlar bilan tanishishni qiyin deb hisoblayman.",
            "Men ko'pincha odamlarga qaraganda narsalarga ko'proq qiziqaman.",
            "Kundalik hayotimdagi tartib buzilsa, bezovta bo'laman.",
            "Men odamlarning yuz ifodalarini tushunishda qiynalaman.",
            "Biror narsani takroran qilishni yaxshi ko'raman.",
            "Men odatda mayda tafsilotlarni yaxshi sezaman.",
            "Men doimiy ravishda o'zimga yoqqan mashg'ulotlarim haqida o'ylayman.",
            "Muloqot davomida ko'z bilan aloqa qilish menga qiyin bo'ladi.",
            "Men ijtimoiy qoidalarga rioya qilishda qiynalaman.",
            "Men o'z fikrlarimni boshqalarga tushuntirishda qiynalaman.",
            "Men odatda odamlarning his-tuyg'ularini sezmayman.",
            "Men odamlar bilan suhbatdan ko'ra yolg'iz mashg'ulotlarni afzal ko'raman.",
            "Men biror narsaga haddan tashqari diqqat qaratib, vaqtni sezmayman.",
            "Men hazilni yoki kinoyani tushunishda qiynalaman.",
            "Men vaziyat o'zgarsa tez moslashishda qiynalaman.",
            "Men har doim bir xil yo'ldan yurishni yoki narsalarni bir xil joyda turishini yoqtiraman.",
            "Men kutilmagan hodisalarga salbiy reaksiya bildiraman.",
            "Men yangi ijtimoiy vaziyatlarga kirishda tashvish his qilaman."
        ],
        options: [
            { value: 0, label: "Mutlaqo to'g'ri emas" },
            { value: 1, label: "Qisman to'g'ri" },
            { value: 2, label: "Qisman mos" },
            { value: 3, label: "Mutlaqo to'g'ri" }
        ]
    },

    {
        id: "asrs",
        title: "ASRS v1.1 – Kattalar uchun SДVG testi",
        description: "18 ta savoldan iborat diqqat yetishmovchiligi va giperaktivlikni baholash testi.",
        questions: [
            "Ko'pincha vazifalarni tugatishda qiyinchiliklarga duch kelasizmi?",
            "Katta diqqatni talab qiladigan ishlarni oxiriga yetkazishda qiynalasizmi?",
            "Uzoq vaqt diqqatni bir narsaga qaratishda qiyinchilik sezasizmi?",
            "Beparvolik tufayli ishda yoki darsda xatolar qilasizmi?",
            "Uy ishlari yoki ish joyidagi tartibni saqlashda qiynalasizmi?",
            "Rejalarni tuzish va tashkil qilishda qiyinchiliklarga duch kelasizmi?",
            "Diqqatni jamlashni talab qiladigan ishlarni kechiktirasizmi?",
            "Ko'pincha narsalarni yo'qotib qo'yasizmi (telefon, kalit, hujjat)?",
            "Tashqi omillar (odamlar, tovush) sizni tez chalg'itadimi?",
            "Kundalik vazifalarni bajarishni unutib qo'yasizmi?",
            "Uzoq vaqt davomida tinch o'tirishda qiynalasizmi?",
            "Juda ko'p gapirib yuborasizmi?",
            "Navbatda kutishda qiyinchilik sezasizmi?",
            "Suhbat paytida boshqalarning gapini bo'lib yuborasizmi?",
            "Tinch faoliyatda qatnashishda qiynalasizmi?",
            "O'zingizni tinch turolmaslik yoki bezovtalikda his qilasizmi?",
            "Odatda haddan tashqari faol bo'lib, joyda tinch o'tira olmaysizmi?",
            "O'z navbatingizni kutishda yoki qoidalarga rioya qilishda qiynalasizmi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Kamdan-kam" },
            { value: 2, label: "Ba'zan" },
            { value: 3, label: "Ko'p hollarda" },
            { value: 4, label: "Doimiy" }
        ]
    },

    {
        id: "eat26",
        title: "EAT-26 – Ovqatlanish munosabati testi",
        description: "26 ta savoldan iborat ovqatlanish buzilishini aniqlash testi.",
        questions: [
            "Ozish uchun ovqatlanishni cheklayman.",
            "Ovqat iste'mol qilgach, o'zimni aybdor his qilaman.",
            "Semirib ketishdan qo'rqaman.",
            "Ovqatni kichik bo'laklarga bo'lib yeyman.",
            "Ko'pincha dietaga rioya qilaman.",
            "Ovqat yeyish ustidan nazoratni yo'qotganimni sezaman.",
            "Semirishni xohlamayman.",
            "Tez-tez o'zimni juda semiz deb his qilaman.",
            "Ovqatdan keyin o'zimni qustirish haqida o'ylayman.",
            "Ovqat yeyish meni qo'rqitadi.",
            "Ovqat yeyishni yashirib qilaman.",
            "Ovqatni cheklash menga zavq beradi.",
            "Ovqat iste'moli ustidan doimiy nazorat olib boraman.",
            "Kuchli ochlikni ham ko'pincha inkor qilaman.",
            "Ko'pincha vaznim haqida tashvishlanaman.",
            "O'zimni juda semiz his qilaman, hatto boshqalar shunday deb hisoblamasalar ham.",
            "Ovqat yeyishni to'xtata olmay qolaman.",
            "Juda ko'p ovqatlanib qo'ygan paytlarim bo'lgan.",
            "Ovqat yeyish meni haddan tashqari band qiladi.",
            "Ozish uchun turli usullarni sinab ko'raman.",
            "Ovqat yeyish menga quvonch bermaydi.",
            "Ovqatdan keyin jismoniy mashqlarni majburiy bajaramanda.",
            "Vaznim menga juda muhim.",
            "Ovqat yeyishni haddan tashqari nazorat qilaman.",
            "Tez-tez vaznimni o'lchayman.",
            "Ovqat yeyish meni ko'pincha asabiylashtiradi."
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Ba'zan" },
            { value: 2, label: "Tez-tez" },
            { value: 3, label: "Ko'p hollarda" },
            { value: 4, label: "Har doim" }
        ]
    },

    {
        id: "scoff",
        title: "SCOFF – Tezkor RPP testi",
        description: "5 ta savoldan iborat ovqatlanish buzilishini aniqlash skriningi.",
        questions: [
            "Ovqat iste'mol qilgach, o'zingizni ataylab qustirganmisiz?",
            "Ovqat yeyishda nazoratni yo'qotganingizni his qilganmisiz?",
            "So'nggi vaqtlarda 6 kg va undan ortiq vazn yo'qotganmisiz?",
            "O'zingizni semiz deb hisoblaganmisiz, hatto boshqalar bunday demagan bo'lsa ham?",
            "Ovqat sizning hayotingizni haddan tashqari band qilib qo'yayaptimi?"
        ],
        options: [
            { value: 1, label: "Ha" },
            { value: 0, label: "Yo'q" }
        ]
    },

    {
        id: "audit",
        title: "AUDIT – Alkogol testi (VOZ)",
        description: "10 ta savoldan iborat alkogol iste'molini baholash testi.",
        questions: [
            "Qancha tez-tez alkogol ichasiz?",
            "Bir o'tirishda o'rtacha nechta ichimlik ichasiz?",
            "Bir o'tirishda 6 yoki undan ortiq ichimlik ichganmisiz?",
            "Ichishni to'xtata olmagan paytlaringiz bo'lganmi?",
            "Ichish sababli kundalik vazifalaringizni bajara olmaganmisiz?",
            "Ichganingizdan keyin ertalab yana ichishga majbur bo'lganmisiz?",
            "Ichish sababli pushaymon bo'lganmisiz?",
            "Ichish tufayli esdan chiqib ketgan kunlaringiz bo'lganmi?",
            "Ichish sababli siz yoki boshqalar jarohat olganmisiz?",
            "Boshqalar sizning ichishingiz haqida tashvish bildirganmi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Oyiga 1 martadan kam" },
            { value: 2, label: "Oyiga 2–4 marta" },
            { value: 3, label: "Haftada 2–3 marta" },
            { value: 4, label: "Har kuni yoki deyarli har kuni" }
        ]
    },

    {
        id: "dast10",
        title: "DAST-10 – Narkotik testi",
        description: "10 ta savoldan iborat narkotik moddalar iste'molini baholash testi.",
        questions: [
            "So'nggi 12 oyda noqonuniy narkotik moddalarni iste'mol qilganmisiz?",
            "Narkotiklarni haddan tashqari ko'p yoki tez-tez iste'mol qilganmisiz?",
            "Narkotik tufayli majburiyatlaringizni bajara olmagan paytlaringiz bo'lganmi?",
            "Narkotik sababli oilaviy yoki ijtimoiy muammolarga duch kelganmisiz?",
            "Narkotik tufayli sog'lig'ingizda muammolar sezganmisiz?",
            "Narkotik iste'mol qilganingiz uchun pushaymon bo'lganmisiz?",
            "Narkotik tufayli politsiya yoki qonun bilan muammoga duch kelganmisiz?",
            "Narkotik iste'molini kamaytirishga yoki tashlashga uringanmisiz, ammo muvaffaqiyatsiz bo'lganmisiz?",
            "Narkotik sababli xotira yoki diqqat bilan bog'liq muammolaringiz bo'lganmi?",
            "Atrofingizdagi odamlar sizning narkotik iste'molingiz haqida tashvish bildirganmi?"
        ],
        options: [
            { value: 1, label: "Ha" },
            { value: 0, label: "Yo'q" }
        ]
    },

    {
        id: "ftnd",
        title: "FTND – Nikotin testi",
        description: "6 ta savoldan iborat chekish odatini baholash testi.",
        questions: [
            "Ertalab uyg'onganingizdan keyin qancha vaqt o'tib birinchi sigaretani chekishingiz?",
            "Kun davomida qaysi sigareta siz uchun eng qiyin tashlab qo'yiladigan sigareta?",
            "Kun davomida nechta sigareta chekasiz?",
            "Chekishni taqiqlovchi joylarda (masalan, kutubxona, jamoat transporti) chekishni qiyin deb hisoblaysizmi?",
            "Tongda ertalab boshqa paytlarga qaraganda ko'proq chekishga moyilmisiz?",
            "Kasallik yoki yotib qolganingizda ham chekasizmi?"
        ],
        options: [
            { value: 0, label: "Hech qachon" },
            { value: 1, label: "Ba'zan" },
            { value: 2, label: "Tez-tez" },
            { value: 3, label: "Har doim" }
        ]
    },

    {
        id: "iief",
        title: "IIEF / SHIM – Erkaklarda erektil funksiyani baholash testi",
        description: "15 ta savoldan iborat erkaklarda jinsiy salomatlik testi.",
        questions: [
            "Oxirgi 4 hafta ichida ereksiya hosil qilishda qanchalik qiyinchilikka duch keldingiz?",
            "Oxirgi 4 hafta ichida ereksiyani saqlab qolishda qanchalik qiyinchilikka duch keldingiz?",
            "Oxirgi 4 hafta ichida jinsiy aloqaga erishish uchun yetarli darajada ereksiya qanchalik tez-tez bo'ldi?",
            "Oxirgi 4 hafta ichida jinsiy aloqa davomida ereksiyani oxirigacha saqlab qola oldingizmi?",
            "Oxirgi 4 hafta ichida jinsiy aloqadan qoniqish darajangiz qanday bo'ldi?",
            "Oxirgi 4 hafta ichida jinsiy aloqadan oldingi qiziqish (ishtiyoq) darajangiz qanday edi?",
            "Oxirgi 4 hafta ichida jinsiy aloqadan keyingi qoniqish darajangiz qanday edi?",
            "Oxirgi 4 hafta ichida jinsiy aloqaga urinishlaringiz qanchalik muvaffaqiyatli bo'ldi?",
            "Oxirgi 4 hafta ichida jinsiy aloqadan qoniqish (hamkor bilan) darajangiz qanday bo'ldi?",
            "Oxirgi 4 hafta ichida jinsiy hayotdan umumiy qoniqish darajangiz qanday edi?",
            "Oxirgi 4 hafta ichida jinsiy aloqaga kirishishda o'zingizni qanchalik ishonchli his qildingiz?",
            "Oxirgi 4 hafta ichida jinsiy aloqani tugatishda qanchalik qiyinchilik bo'ldi?",
            "Oxirgi 4 hafta ichida jinsiy aloqada davomiylik sizni qoniqtirdimi?",
            "Oxirgi 4 hafta ichida jinsiy aloqa paytida sherigingizning qoniqishi haqida qanday fikrdasiz?",
            "Oxirgi 4 hafta ichida umumiy jinsiy hayotingizni qanday baholaysiz?"
        ],
        options: [
            { value: 0, label: "Hech qachon / Juda past" },
            { value: 1, label: "Kamdan-kam" },
            { value: 2, label: "Ba'zan" },
            { value: 3, label: "Tez-tez" },
            { value: 4, label: "Har doim / Juda yuqori" }
        ]
    },


    {
        id: "mmpi2",
        title: "MMPI-2 – Ko‘p o‘lchovli shaxsiy test (qisqartirilgan)",
        description: "20 ta savoldan iborat klinik shaxs testining qisqa varianti.",
        questions: [
            "Menga tez-tez bosh og‘rig‘i bezovta qiladi.",
            "Ko‘pincha o‘zimni yolg‘iz his qilaman.",
            "Odamlar menga qarshi gapirishadi deb o‘ylayman.",
            "Men o‘zimni baxtli inson deb bilaman.",
            "Tez-tez tushkun kayfiyatda bo‘laman.",
            "Men bilan tanishish oson.",
            "Ba’zan odamlarni aldaganim bo‘ladi.",
            "Men doimo kuchli qo‘rquvni sezaman.",
            "Yangi joylarda o‘zimni noqulay his qilaman.",
            "Tez-tez asabiylashaman.",
            "Menga odamlar tezda ishonishadi.",
            "Ba’zan tushlarim juda qo‘rqinchli bo‘ladi.",
            "Men boshqalarga qaraganda ko‘proq tashvishlanaman.",
            "Ko‘pincha o‘z fikrimni ochiq aytishga qiynalaman.",
            "Menga odatda odamlar yoqadi.",
            "Ba’zan hech bir sabab bo‘lmasa ham yig‘lagim keladi.",
            "Men o‘zimni juda sog‘lom deb hisoblayman.",
            "Men ko‘pincha o‘zimni kuzatishadi deb o‘ylayman.",
            "Menga ba’zan gapirish o‘rniga jim turish qulayroq.",
            "Men doim ham boshqalarga o‘zimni ochib berolmayman."
        ],
        options: [
            { value: 1, label: "Ha" },
            { value: 0, label: "Yo'q" }
        ]
    }
];

export const TESTS_ENG = [
    {
        id: "phq9",
        title: "PHQ-9 - Depression Test",
        description: "9-question screening for depression symptoms assessment.",
        questions: [
            "Have you lost interest or pleasure in activities over the last 2 weeks?",
            "Has your mood been depressed?",
            "Have you had sleep problems?",
            "Have you felt fatigue or lack of energy?",
            "Have you had changes in appetite?",
            "Have you felt bad about yourself or guilty?",
            "Have you had trouble concentrating?",
            "Have your movements been very slow or have you been excessively restless?",
            "Have you had thoughts of harming yourself?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Several days" },
            { value: 2, label: "More than half the days" },
            { value: 3, label: "Nearly every day" }
        ]
    },

    {
        id: "gad7",
        title: "GAD-7 - Generalized Anxiety Test",
        description: "7-question test for anxiety level assessment.",
        questions: [
            "Have you felt nervous or anxious over the last 2 weeks?",
            "Have you felt unable to control worrying?",
            "Have you worried excessively about various things?",
            "Have you had trouble relaxing?",
            "Have you been so restless that it's hard to sit still?",
            "Have you become easily annoyed or irritable?",
            "Have you felt afraid as if something awful might happen?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Several days" },
            { value: 2, label: "More than half the days" },
            { value: 3, label: "Nearly every day" }
        ]
    },

    {
        id: "pas",
        title: "PAS - Panic and Agoraphobia Test",
        description: "Test for panic attacks and agoraphobia symptoms assessment (13 questions).",
        questions: [
            "Frequency of panic attacks (how often do they occur)?",
            "Duration of panic attacks (how long do they typically last)?",
            "Intensity of panic attacks (how severe are the symptoms)?",
            "Anxiety about expecting attacks (do you live in fear of them)?",
            "General anxiety level between attacks?",
            "Physical symptoms during attacks (heart palpitations, sweating, shortness of breath)?",
            "Psychological symptoms during attacks (fear of dying or going crazy)?",
            "Agoraphobia - fear of public places or situations where escape might be difficult?",
            "Limitations due to agoraphobia (which places do you avoid)?",
            "Impact on social activities (work, study, family life)?",
            "Avoidance behaviors (degree of avoiding situations or safety behaviors)?",
            "Control over attacks (how difficult are they to manage)?",
            "Overall quality of life (how much do panic and agoraphobia reduce your quality of life)?"
        ],
        options: [
            { value: 0, label: "No / Never" },
            { value: 1, label: "Very rare / Mild" },
            { value: 2, label: "Moderate" },
            { value: 3, label: "Severe" },
            { value: 4, label: "Very severe / Always" }
        ]
    },

    {
        id: "mdq",
        title: "MDQ - Bipolar Disorder Test",
        description: "Mood Disorder Questionnaire - screening test for bipolar disorder.",
        questions: [
            "Have you had periods when your mood was excessively elevated?",
            "During those periods, did you feel energetic without needing sleep?",
            "Was talking excessively or rapid speech typical for you?",
            "Did you feel exceptionally powerful?",
            "Did you make many plans simultaneously?",
            "Have you had periods of excessive spending?",
            "Did your mood change very rapidly?"
        ],
        options: [
            { value: 1, label: "Yes" },
            { value: 0, label: "No" }
        ]
    },

    {
        id: "ybocs",
        title: "Y-BOCS - Yale-Brown Obsessive Compulsive Scale",
        description: "Test for obsessive-compulsive symptoms assessment (10 questions).",
        questions: [
            "How much time did obsessive thoughts take in the last week?",
            "How much did obsessive thoughts interfere with your life?",
            "How much distress did obsessive thoughts cause?",
            "How much did you resist obsessive thoughts?",
            "How successful were you in controlling obsessive thoughts?",
            "How much time did compulsive behaviors take in the last week?",
            "How much did compulsions interfere with your normal activities?",
            "How much distress did compulsive behaviors cause?",
            "How much did you resist compulsive behaviors?",
            "How successful were you in controlling compulsive behaviors?"
        ],
        options: [
            { value: 0, label: "No / Not at all" },
            { value: 1, label: "Mild (occasionally, insignificant)" },
            { value: 2, label: "Moderate (noticeable but manageable)" },
            { value: 3, label: "Severe (significant interference, hard to control)" },
            { value: 4, label: "Extreme (almost completely uncontrollable)" }
        ]
    },

    {
        id: "ocir",
        title: "OCI-R - Obsessive Symptoms Test",
        description: "18-question test for obsessive symptoms assessment.",
        questions: [
            "Do you feel the need to check things repeatedly?",
            "Do you feel contaminated after touching certain things?",
            "Do you feel compelled to repeat actions or words?",
            "Do you have unpleasant thoughts about harming others?",
            "Do you pay excessive attention to order and symmetry?",
            "Can't you stop rethinking or checking things?",
            "Do you feel compelled to wash your hands or body frequently?",
            "Do you feel compelled to collect certain objects?",
            "Do you try to recall or repeat things you can't remember?",
            "Does disorder or asymmetry bother you greatly?",
            "Are you excessively afraid of contamination or disease transmission?",
            "Do you recheck if you did something wrong?",
            "Do you find it very difficult to discard useless items?",
            "Do you have strong thoughts about harming or doing inappropriate things?",
            "Do you repeatedly continue tasks without knowing when to stop?",
            "Do you feel very uncomfortable when order or symmetry is disrupted?",
            "Do you find it difficult to hold dangerous or unpleasant things without washing?",
            "Do you feel regret and want to retrieve things you discarded?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Rarely" },
            { value: 2, label: "Sometimes" },
            { value: 3, label: "Often" },
            { value: 4, label: "Always" }
        ]
    },

    {
        id: "pcl5",
        title: "PCL-5 - Post-Traumatic Stress Test",
        description: "20-question test for post-traumatic stress assessment.",
        questions: [
            "Do you have repeated memories of the traumatic event?",
            "Do you have dreams about the traumatic event?",
            "Do you get very upset by things reminding you of the trauma?",
            "Do you feel forced to think about the trauma?",
            "Do you try to avoid things reminding you of the trauma?",
            "Do you avoid talking or thinking about the trauma?",
            "Do negative feelings appear spontaneously?",
            "Do you feel distant from people around you?",
            "Can't you express your feelings?",
            "Don't you believe positive things will happen in the near future?",
            "Do you feel guilt about yourself or others?",
            "Do negative emotions (fear, anger, guilt, shame) appear frequently?",
            "Has your interest in previously enjoyable activities decreased?",
            "Has your sense of danger or caution increased?",
            "Are you in a state of excessive alertness or vigilance?",
            "Do you constantly feel like expecting danger?",
            "Do bad dreams or memories disturb your sleep?",
            "Do you have trouble concentrating?",
            "Do you get angry quickly or become aggressive?",
            "Do you get scared easily?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Slightly" },
            { value: 2, label: "Moderately" },
            { value: 3, label: "Quite a bit" },
            { value: 4, label: "Extremely" }
        ]
    },

    {
        id: "mchat",
        title: "M-CHAT-R - Autism Screening in Children",
        description: "20-question test for early autism risk detection in children.",
        questions: [
            "Does your child look when you point at something?",
            "Does your child enjoy simple things (like rocking, playing with toys)?",
            "Does your child like playing with other people?",
            "Does your child ask for help when climbing stairs?",
            "Does your child understand words like 'yes' or 'no'?",
            "Does your child pay attention to new things you point to?",
            "Does your child look at people's faces?",
            "Does your child respond with a smile?",
            "Does your child respond to people's voices?",
            "Does your child use index finger (to ask or point at things)?",
            "Does your child imitate other people's gestures?",
            "Does your child use dolls or toys in imaginary games?",
            "Does your child respond to their name?",
            "Does your child have difficulty learning usual things?",
            "Does your child make eye contact often?",
            "Does your child get strongly attached to usual objects?",
            "Does your child react strongly to sounds?",
            "Does your child constantly make hand or finger movements?",
            "Does your child pay attention to other people's feelings?",
            "Does your child cooperate with others during play?"
        ],
        options: [
            { value: 0, label: "Yes" },
            { value: 1, label: "No" }
        ]
    },

    {
        id: "aq",
        title: "AQ - Autism Indicators Test",
        description: "Shortened test for autistic traits assessment (20 questions).",
        questions: [
            "I feel uncomfortable in social situations.",
            "When I'm interested in something, I get deeply absorbed in it.",
            "I find it difficult to meet new people.",
            "I'm often more interested in things than people.",
            "I get upset when my daily routine is disrupted.",
            "I have difficulty understanding people's facial expressions.",
            "I like doing things repetitively.",
            "I usually notice small details well.",
            "I constantly think about my favorite activities.",
            "I find it difficult to maintain eye contact during communication.",
            "I have difficulty following social rules.",
            "I have difficulty explaining my thoughts to others.",
            "I usually don't notice people's emotions.",
            "I prefer solitary activities over conversations with people.",
            "I get so focused on something that I lose track of time.",
            "I have difficulty understanding jokes or sarcasm.",
            "I have difficulty adapting quickly when situations change.",
            "I like taking the same route or keeping things in the same place.",
            "I react negatively to unexpected events.",
            "I feel anxious entering new social situations."
        ],
        options: [
            { value: 0, label: "Definitely not true" },
            { value: 1, label: "Slightly true" },
            { value: 2, label: "Moderately true" },
            { value: 3, label: "Definitely true" }
        ]
    },

    {
        id: "asrs",
        title: "ASRS v1.1 - ADHD Test for Adults",
        description: "18-question test for attention deficit and hyperactivity assessment.",
        questions: [
            "Do you often have difficulties completing tasks?",
            "Do you have trouble finishing tasks requiring sustained attention?",
            "Do you have difficulty maintaining focus on one thing for long periods?",
            "Do you make mistakes at work or studies due to carelessness?",
            "Do you have trouble maintaining order in household or work tasks?",
            "Do you have difficulties planning and organizing?",
            "Do you postpone tasks requiring concentration?",
            "Do you often lose things (phone, keys, documents)?",
            "Are you easily distracted by external factors (people, sounds)?",
            "Do you forget to perform daily tasks?",
            "Do you have trouble sitting still for long periods?",
            "Do you talk too much?",
            "Do you have difficulty waiting in line?",
            "Do you interrupt others during conversations?",
            "Do you have trouble participating in quiet activities?",
            "Do you feel restless or fidgety?",
            "Are you usually overly active, unable to sit still?",
            "Do you have difficulty waiting your turn or following rules?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Rarely" },
            { value: 2, label: "Sometimes" },
            { value: 3, label: "Often" },
            { value: 4, label: "Always" }
        ]
    },

    {
        id: "eat26",
        title: "EAT-26 - Eating Attitudes Test",
        description: "26-question test for eating disorder identification.",
        questions: [
            "I limit my eating to lose weight.",
            "I feel guilty after eating.",
            "I'm afraid of getting fat.",
            "I cut food into small pieces.",
            "I often follow diets.",
            "I feel like I lose control over eating.",
            "I don't want to gain weight.",
            "I often feel very fat.",
            "I think about vomiting after eating.",
            "Eating scares me.",
            "I eat in secret.",
            "Limiting eating gives me pleasure.",
            "I constantly monitor my food intake.",
            "I often deny strong hunger.",
            "I often worry about my weight.",
            "I feel very fat even when others don't think so.",
            "I can't stop eating.",
            "I've had episodes of eating too much.",
            "Eating occupies me too much.",
            "I try various methods to lose weight.",
            "Eating doesn't bring me joy.",
            "I compulsively exercise after eating.",
            "My weight is very important to me.",
            "I control my eating excessively.",
            "I weigh myself frequently.",
            "Eating often makes me nervous."
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Sometimes" },
            { value: 2, label: "Often" },
            { value: 3, label: "Usually" },
            { value: 4, label: "Always" }
        ]
    },

    {
        id: "scoff",
        title: "SCOFF - Quick Eating Disorder Test",
        description: "5-question screening for eating disorder identification.",
        questions: [
            "Have you deliberately made yourself vomit after eating?",
            "Have you felt like you lose control over eating?",
            "Have you lost more than 6 kg recently?",
            "Have you considered yourself fat when others didn't think so?",
            "Does food occupy your life excessively?"
        ],
        options: [
            { value: 1, label: "Yes" },
            { value: 0, label: "No" }
        ]
    },

    {
        id: "audit",
        title: "AUDIT - Alcohol Test (WHO)",
        description: "10-question test for alcohol consumption assessment.",
        questions: [
            "How often do you drink alcohol?",
            "How many drinks do you typically have per occasion?",
            "How often do you have 6 or more drinks on one occasion?",
            "How often during the last year have you found that you could not stop drinking?",
            "How often during the last year have you failed to do what was normally expected because of drinking?",
            "How often during the last year have you needed a drink in the morning?",
            "How often during the last year have you had guilt or remorse after drinking?",
            "How often during the last year have you been unable to remember what happened?",
            "Have you or someone else been injured because of your drinking?",
            "Has someone expressed concern about your drinking?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Less than monthly" },
            { value: 2, label: "Monthly" },
            { value: 3, label: "Weekly" },
            { value: 4, label: "Daily or almost daily" }
        ]
    },

    {
        id: "dast10",
        title: "DAST-10 - Drug Abuse Test",
        description: "10-question test for drug use assessment.",
        questions: [
            "Have you used illegal drugs in the past 12 months?",
            "Have you used drugs excessively or too frequently?",
            "Have you failed to meet obligations due to drug use?",
            "Have you had family or social problems due to drugs?",
            "Have you had health problems due to drug use?",
            "Have you felt remorse about your drug use?",
            "Have you had legal problems due to drugs?",
            "Have you tried to reduce or quit drug use unsuccessfully?",
            "Have you had memory or concentration problems due to drugs?",
            "Have people expressed concern about your drug use?"
        ],
        options: [
            { value: 1, label: "Yes" },
            { value: 0, label: "No" }
        ]
    },

    {
        id: "ftnd",
        title: "FTND - Nicotine Test",
        description: "6-question test for smoking habit assessment.",
        questions: [
            "How soon after waking do you smoke your first cigarette?",
            "Which cigarette would be hardest to give up?",
            "How many cigarettes do you smoke per day?",
            "Do you find it difficult to refrain from smoking in non-smoking areas?",
            "Do you smoke more frequently in the morning?",
            "Do you smoke even when ill?"
        ],
        options: [
            { value: 0, label: "Never" },
            { value: 1, label: "Sometimes" },
            { value: 2, label: "Often" },
            { value: 3, label: "Always" }
        ]
    },

    {
        id: "iief",
        title: "IIEF/SHIM - Male Sexual Health Assessment",
        description: "15-question test for male sexual health assessment.",
        questions: [
            "How difficult was it to get an erection in the last 4 weeks?",
            "How difficult was it to maintain an erection in the last 4 weeks?",
            "How often were erections sufficient for sexual intercourse?",
            "How often could you maintain erection until completion of intercourse?",
            "How satisfied were you with sexual intercourse?",
            "How was your level of sexual desire before intercourse?",
            "How satisfied were you after sexual intercourse?",
            "How successful were your sexual attempts?",
            "How satisfied were you with sexual intercourse (with partner)?",
            "How satisfied were you with your overall sex life?",
            "How confident did you feel about getting an erection?",
            "How difficult was it to complete sexual intercourse?",
            "Were you satisfied with duration of sexual intercourse?",
            "How did you feel about your partner's satisfaction?",
            "How would you rate your overall sex life?"
        ],
        options: [
            { value: 0, label: "Never / Very low" },
            { value: 1, label: "Rarely" },
            { value: 2, label: "Sometimes" },
            { value: 3, label: "Often" },
            { value: 4, label: "Always / Very high" }
        ]
    },

    {
        id: "mmpi2",
        title: "MMPI-2 - Multidimensional Personality Test (shortened)",
        description: "20-question short version of clinical personality test.",
        questions: [
            "I often get headaches.",
            "I often feel lonely.",
            "I think people talk against me.",
            "I consider myself a happy person.",
            "I'm often in a depressed mood.",
            "I'm easy to get acquainted with.",
            "I've sometimes deceived people.",
            "I always feel strong fear.",
            "I feel uncomfortable in new places.",
            "I get nervous easily.",
            "People trust me quickly.",
            "My dreams are sometimes very frightening.",
            "I worry more than other people.",
            "I often have difficulty expressing my opinion openly.",
            "I usually like people.",
            "I sometimes feel like crying for no reason.",
            "I consider myself very healthy.",
            "I often feel like I'm being watched.",
            "I sometimes prefer silence over talking.",
            "I don't always open up to others."
        ],
        options: [
            { value: 1, label: "Yes" },
            { value: 0, label: "No" }
        ]
    }
];

export const TESTS_RU = [
    {
        id: "phq9",
        title: "PHQ-9 – Тест на депрессию",
        description: "Скрининг для оценки симптомов депрессии, состоит из 9 вопросов.",
        questions: [
            "Потеряли ли Вы интерес или удовольствие от занятий за последние 2 недели?",
            "Чувствовали ли Вы подавленность или угнетенное настроение?",
            "Были ли у Вас проблемы со сном?",
            "Чувствовали ли Вы усталость или недостаток энергии?",
            "Были ли изменения в Вашем аппетите?",
            "Чувствовали ли Вы себя плохим человеком или виноватым?",
            "Испытывали ли Вы трудности с концентрацией внимания?",
            "Заметили ли Вы, что Ваши движения стали очень медленными или Вы были чрезмерно беспокойны?",
            "Возникали ли у Вас мысли о причинении себе вреда?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Несколько дней" },
            { value: 2, label: "Более половины дней" },
            { value: 3, label: "Почти каждый день" }
        ]
    },

    {
        id: "gad7",
        title: "GAD-7 – Тест на общее тревожное расстройство",
        description: "Тест для оценки уровня тревоги, состоит из 7 вопросов.",
        questions: [
            "Чувствовали ли Вы нервозность или беспокойство за последние 2 недели?",
            "Было ли у Вас чувство потери контроля?",
            "Беспокоились ли Вы чрезмерно о разных вещах?",
            "Испытывали ли Вы трудности с расслаблением?",
            "Были ли Вы настолько беспокойны, что не могли усидеть на месте?",
            "Легко ли Вы раздражались?",
            "Мешали ли эти симптомы Вашей повседневной деятельности?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Несколько дней" },
            { value: 2, label: "Более половины дней" },
            { value: 3, label: "Почти каждый день" }
        ]
    },

    {
        id: "pas",
        title: "PAS – Тест на панику и агорафобию",
        description: "Тест для оценки симптомов панических атак и агорафобии (13 вопросов).",
        questions: [
            "Частота панических атак (как часто они происходят)?",
            "Продолжительность панических атак (сколько обычно длятся)?",
            "Интенсивность панических атак (насколько сильны симптомы)?",
            "Тревога ожидания панических атак (Вы живете в ожидании их)?",
            "Уровень общей тревоги между приступами?",
            "Физические симптомы во время приступов (сердцебиение, потливость, одышка)?",
            "Психические симптомы во время приступов (страх смерти или сойти с ума)?",
            "Агорафобия – страх в общественных местах или местах, где трудно сбежать?",
            "Ограничения из-за агорафобии (каких мест Вы избегаете)?",
            "Влияние на социальную активность (работа, учеба, семейная жизнь)?",
            "Поведение (степень избегания или поиска безопасности)?",
            "Контроль над приступами (насколько трудно ими управлять)?",
            "Общее качество жизни (насколько паника и агорафобия снижают качество жизни)?"
        ],
        options: [
            { value: 0, label: "Нет / Никогда" },
            { value: 1, label: "Очень редко / Легко" },
            { value: 2, label: "Умеренно" },
            { value: 3, label: "Сильно" },
            { value: 4, label: "Очень сильно / Всегда" }
        ]
    },

    {
        id: "mdq",
        title: "MDQ – Тест на биполярное расстройство",
        description: "Опросник по расстройствам настроения – скрининговый тест на биполярное расстройство.",
        questions: [
            "Были ли у Вас периоды, когда настроение было сильно повышенным?",
            "В те периоды Вы чувствовали себя бодрым даже без сна?",
            "Было ли характерно много говорить или перебивать речь?",
            "Чувствовали ли Вы себя чрезмерно энергичным?",
            "Строили ли Вы множество планов одновременно?",
            "Были ли периоды, когда Вы тратили много денег?",
            "Менялось ли Ваше настроение очень быстро?"
        ],
        options: [
            { value: 1, label: "Да" },
            { value: 0, label: "Нет" }
        ]
    },

    {
        id: "ybocs",
        title: "Y-BOCS – Шкала Йеля-Брауна",
        description: "Тест для оценки обсессивно-компульсивных симптомов (10 вопросов).",
        questions: [
            "Сколько времени в последнюю неделю занимали навязчивые мысли?",
            "Насколько сильно навязчивые мысли Вам мешали?",
            "Какой дискомфорт или страдания вызывали навязчивые мысли?",
            "Насколько Вы сопротивлялись навязчивым мыслям или контролировали их?",
            "Насколько эффективным был контроль над навязчивыми мыслями?",
            "Сколько времени в последнюю неделю занимали компульсивные действия?",
            "Насколько компульсии мешали Вашей обычной деятельности?",
            "Какой дискомфорт или страдания вызывали компульсивные действия?",
            "Насколько Вы сопротивлялись компульсивным действиям?",
            "Насколько эффективным был контроль над компульсивными действиями?"
        ],
        options: [
            { value: 0, label: "Нет / Совсем нет" },
            { value: 1, label: "Легко (время от времени, незначительно)" },
            { value: 2, label: "Умеренно (заметно, но управляемо)" },
            { value: 3, label: "Сильно (серьезно мешает, трудно управлять)" },
            { value: 4, label: "Очень сильно (почти полностью вне контроля)" }
        ]
    },

    {
        id: "ocir",
        title: "OCI-R – Тест на обсессивные симптомы",
        description: "Тест для оценки обсессивных симптомов, состоит из 18 вопросов.",
        questions: [
            "Вы чувствуете потребность повторно проверять? (например, заперта ли дверь, выключен ли газ?)",
            "Дотронувшись до чего-либо, Вы думаете, что испачкались?",
            "Вы чувствуете себя вынужденным повторять действия или слова?",
            "Вам приходят неприятные мысли о причинении вреда другим людям?",
            "Вы чрезмерно уделяете внимание порядку и симметрии?",
            "Вы не можете остановиться от повторного обдумывания или проверки?",
            "Вы чувствуете себя вынужденным часто мыть руки или тело?",
            "Вы чувствуете себя вынужденным собирать определенные предметы?",
            "Пытаетесь ли Вы вспомнить или повторить что-то, что забыли?",
            "Беспорядок или асимметрия сильно Вас беспокоят?",
            "Вы чрезмерно боитесь загрязнения или заражения болезнью?",
            "Вы перепроверяете, правильно ли что-то сделали?",
            "Вам очень трудно выбрасывать ненужные вещи?",
            "Приходят ли сильные мысли о причинении вреда или неподобающих действиях?",
            "Вы продолжаете повторять действие, не зная, когда закончить?",
            "Вы чувствуете сильный дискомфорт, когда нарушен порядок или симметрия?",
            "Вам трудно прикасаться к опасным или неприятным вещам без мытья?",
            "После того, как что-то выбросили, Вы чувствуете желание вернуть это?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Очень редко" },
            { value: 2, label: "Иногда" },
            { value: 3, label: "Часто" },
            { value: 4, label: "Постоянно" }
        ]
    },

    {
        id: "pcl5",
        title: "PCL-5 – Тест на посттравматический стресс",
        description: "Тест для оценки посттравматического стресса, состоит из 20 вопросов.",
        questions: [
            "Были ли у Вас случаи непроизвольного воспоминания травматического события?",
            "Вам снятся сны о травматическом событии?",
            "Вы сильно расстраиваетесь от вещей, напоминающих о травме?",
            "Чувствовали ли Вы себя вынужденным думать о травме?",
            "Пытаетесь ли Вы избегать вещей, напоминающих о травме?",
            "Избегаете ли Вы разговоров или мыслей о травме?",
            "Возникают ли у Вас спонтанные плохие чувства?",
            "Чувствуете ли Вы себя отдаленным от окружающих?",
            "Не можете ли Вы выразить свои чувства?",
            "Не верите ли Вы, что в ближайшем будущем произойдет что-то хорошее?",
            "Есть ли чувство вины towards себя или других?",
            "Часто ли возникают негативные эмоции (страх, гнев, вина, стыд)?",
            "Уменьшился ли интерес к ранее интересующим вещам?",
            "Усилилось ли чувство опасности или осторожности?",
            "Есть ли состояние чрезмерной бдительности или настороженности?",
            "Чувствуете ли Вы себя как будто постоянно ожидаете опасности?",
            "Плохие сны или воспоминания нарушают Ваш сон?",
            "Испытываете ли Вы трудности с концентрацией внимания?",
            "Легко ли Вы выходите из себя или становитесь агрессивным?",
            "Бывают ли случаи, когда Вы легко пугаетесь?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Немного" },
            { value: 2, label: "Умеренно" },
            { value: 3, label: "Сильно" },
            { value: 4, label: "Очень сильно" }
        ]
    },

    {
        id: "mchat",
        title: "M-CHAT-R – Скрининг на аутизм у детей",
        description: "Тест для раннего выявления риска аутизма у детей, состоит из 20 вопросов.",
        questions: [
            "Ваш ребенок смотрит, когда Вы на кого-то указываете?",
            "Ваш ребенок получает удовольствие от простых вещей (например, качание, игра с игрушкой)?",
            "Ваш ребенок любит играть с другими людьми?",
            "Просит ли Ваш ребенок о помощи, когда поднимается по лестнице?",
            "Понимает ли Ваш ребенок слова \"да\" или \"нет\"?",
            "Обращает ли Ваш ребенок внимание на новый предмет, на который Вы указали?",
            "Смотрит ли Ваш ребенок на лица людей?",
            "Отвечает ли Ваш ребенок улыбкой?",
            "Реагирует ли Ваш ребенок на звук голоса?",
            "Использует ли Ваш ребенок указательный палец (чтобы попросить или показать что-то)?",
            "Повторяет ли Ваш ребенок жесты других людей?",
            "Использует ли Ваш ребенок куклу или игрушки в воображаемых играх?",
            "Откликается ли Ваш ребенок на свое имя?",
            "Испытывает ли Ваш ребенок трудности с изучением обычных вещей?",
            "Часто ли Ваш ребенок смотрит в глаза?",
            "Сильно ли Ваш ребенок привязывается к обычным вещам?",
            "Сильно ли реагирует Ваш ребенок на звуки?",
            "Постоянно ли Ваш ребенок совершает движения руками или пальцами?",
            "Обращает ли Ваш ребенок внимание на чувства других людей?",
            "Сотрудничает ли Ваш ребенок с другими во время игры?"
        ],
        options: [
            { value: 0, label: "Да" },
            { value: 1, label: "Нет" }
        ]
    },

    {
        id: "aq",
        title: "AQ – Тест на показатели аутизма",
        description: "Сокращенный тест (20 вопросов) для оценки аутистических черт.",
        questions: [
            "Я чувствую себя неловко в социальных ситуациях.",
            "Когда я чем-то интересуюсь, я погружаюсь в это очень глубоко.",
            "Я считаю, что знакомиться с новыми людьми трудно.",
            "Я чаще интересуюсь вещами, чем людьми.",
            "Я расстраиваюсь, если нарушается распорядок моей повседневной жизни.",
            "Я испытываю трудности в понимании выражений лиц людей.",
            "Мне нравится повторять действия.",
            "Я обычно хорошо замечаю мелкие детали.",
            "Я постоянно думаю о своих любимых занятиях.",
            "Мне трудно поддерживать зрительный контакт во время общения.",
            "Я испытываю трудности в соблюдении социальных правил.",
            "Мне трудно объяснять свои мысли другим.",
            "Я обычно не замечаю чувства других людей.",
            "Я предпочитаю одиночные занятия общению с людьми.",
            "Я настолько сосредотачиваюсь на чем-то, что не замечаю время.",
            "Я испытываю трудности в понимании шуток или сарказма.",
            "Мне трудно быстро адаптироваться, когда ситуация меняется.",
            "Мне нравится ходить одной и той же дорогой или чтобы вещи стояли на своих местах.",
            "Я негативно реагирую на неожиданные события.",
            "Я чувствую тревогу, вступая в новые социальные ситуации."
        ],
        options: [
            { value: 0, label: "Совершенно неверно" },
            { value: 1, label: "Частично верно" },
            { value: 2, label: "Частично соответствует" },
            { value: 3, label: "Совершенно верно" }
        ]
    },

    {
        id: "asrs",
        title: "ASRS v1.1 – Тест на СДВГ для взрослых",
        description: "Тест для оценки дефицита внимания и гиперактивности, состоит из 18 вопросов.",
        questions: [
            "Часто ли Вы сталкиваетесь с трудностями при завершении задач?",
            "Испытываете ли Вы трудности с доведением до конца дел, требующих большой концентрации?",
            "Трудно ли Вам долго удерживать внимание на одном предмете?",
            "Делаете ли Вы ошибки на работе или учебе из-за невнимательности?",
            "Испытываете ли Вы трудности с поддержанием порядка дома или на работе?",
            "Испытываете ли Вы трудности с планированием и организацией?",
            "Откладываете ли Вы дела, требующие концентрации внимания?",
            "Часто ли Вы теряете вещи (телефон, ключи, документы)?",
            "Внешние факторы (люди, звуки) легко отвлекают Вас?",
            "Забываете ли Вы выполнять повседневные обязанности?",
            "Трудно ли Вам долго сидеть спокойно?",
            "Слишком много говорите?",
            "Испытываете ли Вы трудности с ожиданием в очереди?",
            "Перебиваете ли Вы других во время разговора?",
            "Трудно ли Вам участвовать в спокойной деятельности?",
            "Чувствуете ли Вы себя неспособным усидеть на месте или беспокойным?",
            "Обычно Вы чрезмерно активны и не можете сидеть спокойно?",
            "Испытываете ли Вы трудности с ожиданием своей очереди или соблюдением правил?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Очень редко" },
            { value: 2, label: "Иногда" },
            { value: 3, label: "Часто" },
            { value: 4, label: "Постоянно" }
        ]
    },

    {
        id: "eat26",
        title: "EAT-26 – Тест отношения к приему пищи",
        description: "Тест для выявления расстройств пищевого поведения, состоит из 26 вопросов.",
        questions: [
            "Я ограничиваю питание, чтобы похудеть.",
            "Я чувствую себя виноватым после еды.",
            "Я боюсь потолстеть.",
            "Я ем пищу маленькими кусочками.",
            "Я часто соблюдаю диету.",
            "Я чувствую, что теряю контроль над приемом пищи.",
            "Я не хочу набирать вес.",
            "Я часто чувствую себя очень толстым.",
            "Я думаю о том, чтобы вызвать рвоту после еды.",
            "Прием пищи пугает меня.",
            "Я ем тайком.",
            "Мне нравится ограничивать питание.",
            "Я постоянно контролирую потребление пищи.",
            "Я часто отрицаю сильный голод.",
            "Я часто беспокоюсь о своем весе.",
            "Я чувствую себя очень толстым, даже если другие так не считают.",
            "Я не могу остановиться от приема пищи.",
            "У меня бывали случаи, когда я съедал очень много.",
            "Прием пищи занимает у меня слишком много времени.",
            "Я пробую различные методы для похудения.",
            "Прием пищи не приносит мне радости.",
            "После еды я чувствую себя обязанным делать физические упражнения.",
            "Мой вес очень важен для меня.",
            "Я чрезмерно контролирую прием пищи.",
            "Я часто взвешиваюсь.",
            "Прием пищи часто раздражает меня."
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Иногда" },
            { value: 2, label: "Часто" },
            { value: 3, label: "Очень часто" },
            { value: 4, label: "Всегда" }
        ]
    },

    {
        id: "scoff",
        title: "SCOFF – Быстрый тест на РПП",
        description: "Скрининг для выявления расстройств пищевого поведения, состоит из 5 вопросов.",
        questions: [
            "Вызывали ли Вы у себя рвоту преднамеренно после еды?",
            "Чувствовали ли Вы, что теряете контроль над приемом пищи?",
            "Потеряли ли Вы более 6 кг веса за последнее время?",
            "Считали ли Вы себя толстым, даже если другие говорили, что это не так?",
            "Занимает ли еда чрезмерно много места в Вашей жизни?"
        ],
        options: [
            { value: 1, label: "Да" },
            { value: 0, label: "Нет" }
        ]
    },

    {
        id: "audit",
        title: "AUDIT – Тест на алкоголь (ВОЗ)",
        description: "Тест для оценки употребления алкоголя, состоит из 10 вопросов.",
        questions: [
            "Как часто Вы употребляете алкоголь?",
            "Сколько порций Вы обычно выпиваете за один раз?",
            "Выпивали ли Вы 6 или более порций за один раз?",
            "Были ли случаи, когда Вы не могли остановиться от питья?",
            "Не выполняли ли Вы свои повседневные обязанности из-за употребления алкоголя?",
            "Чувствовали ли Вы потребность выпить утром после употребления алкоголя?",
            "Чувствовали ли Вы вину из-за употребления алкоголя?",
            "Были ли у Вас провалы в памяти из-за употребления алкоголя?",
            "Получали ли Вы или другие люди травмы из-за Вашего употребления алкоголя?",
            "Выражали ли другие люди беспокойство по поводу Вашего употребления алкоголя?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Реже чем раз в месяц" },
            { value: 2, label: "2–4 раза в месяц" },
            { value: 3, label: "2–3 раза в неделю" },
            { value: 4, label: "Ежедневно или почти ежедневно" }
        ]
    },

    {
        id: "dast10",
        title: "DAST-10 – Тест на наркотики",
        description: "Тест для оценки употребления наркотических веществ, состоит из 10 вопросов.",
        questions: [
            "Употребляли ли Вы запрещенные наркотические вещества за последние 12 месяцев?",
            "Употребляли ли Вы наркотики в чрезмерном количестве или слишком часто?",
            "Были ли случаи, когда Вы не выполняли свои обязанности из-за наркотиков?",
            "Сталкивались ли Вы с семейными или социальными проблемами из-за наркотиков?",
            "Чувствовали ли Вы проблемы со здоровьем из-за наркотиков?",
            "Чувствовали ли Вы вину из-за употребления наркотиков?",
            "Сталкивались ли Вы с проблемами с полицией или законом из-за наркотиков?",
            "Пытались ли Вы уменьшить или бросить употребление наркотиков, но безуспешно?",
            "Были ли у Вас проблемы с памятью или вниманием из-за наркотиков?",
            "Выражали ли окружающие беспокойство по поводу Вашего употребления наркотиков?"
        ],
        options: [
            { value: 1, label: "Да" },
            { value: 0, label: "Нет" }
        ]
    },

    {
        id: "ftnd",
        title: "FTND – Тест на никотин",
        description: "Тест для оценки привычки курения, состоит из 6 вопросов.",
        questions: [
            "Через сколько времени после пробуждения Вы выкуриваете первую сигарету?",
            "Какая сигарета в течение дня для Вас самая трудная, чтобы от нее отказаться?",
            "Сколько сигарет Вы выкуриваете в день?",
            "Считаете ли Вы курение в запрещенных местах (например, библиотека, общественный транспорт) трудным?",
            "Курите ли Вы больше утром, чем в другое время?",
            "Курите ли Вы даже во время болезни или лежа в постели?"
        ],
        options: [
            { value: 0, label: "Никогда" },
            { value: 1, label: "Иногда" },
            { value: 2, label: "Часто" },
            { value: 3, label: "Всегда" }
        ]
    },

    {
        id: "iief",
        title: "IIEF / SHIM – Тест оценки эректильной функции у мужчин",
        description: "Тест для оценки мужского сексуального здоровья, состоит из 15 вопросов.",
        questions: [
            "Как часто за последние 4 недели у Вас были трудности с достижением эрекции?",
            "Как часто за последние 4 недели у Вас были трудности с поддержанием эрекции?",
            "Как часто за последние 4 недели у Вас была эрекция, достаточная для полового акта?",
            "Смогли ли Вы поддерживать эрекцию до конца полового акта за последние 4 недели?",
            "Насколько Вы были удовлетворены половым актом за последние 4 недели?",
            "Каким было Ваше желание (влечение) перед половым актом за последние 4 недели?",
            "Насколько Вы были удовлетворены после полового акта за последние 4 недели?",
            "Насколько успешными были Ваши попытки полового акта за последние 4 недели?",
            "Насколько Вы были удовлетворены половым актом (с партнером) за последние 4 недели?",
            "Каким было Ваше общее удовлетворение половой жизнью за последние 4 недели?",
            "Насколько уверенно Вы себя чувствовали при вступлении в половой акт за последние 4 недели?",
            "Какие трудности были с завершением полового акта за последние 4 недели?",
            "Удовлетворяла ли Вас продолжительность полового акта за последние 4 недели?",
            "Что Вы думаете об удовлетворенности Вашего партнера во время полового акта за последние 4 недели?",
            "Как Вы оцениваете свою общую половую жизнь за последние 4 недели?"
        ],
        options: [
            { value: 0, label: "Никогда / Очень низко" },
            { value: 1, label: "Очень редко" },
            { value: 2, label: "Иногда" },
            { value: 3, label: "Часто" },
            { value: 4, label: "Всегда / Очень высоко" }
        ]
    },

    {
        id: "mmpi2",
        title: "MMPI-2 – Многомерный личностный тест (сокращенный)",
        description: "Сокращенная версия клинического личностного теста, состоит из 20 вопросов.",
        questions: [
            "Меня часто беспокоят головные боли.",
            "Я часто чувствую себя одиноким.",
            "Я думаю, что люди говорят обо мне за моей спиной.",
            "Я считаю себя счастливым человеком.",
            "Я часто бываю в подавленном настроении.",
            "Со мной легко познакомиться.",
            "Иногда я обманывал людей.",
            "Я постоянно чувствую сильный страх.",
            "Я чувствую себя неловко в новых местах.",
            "Я легко раздражаюсь.",
            "Люди быстро доверяют мне.",
            "Иногда мне снятся очень страшные сны.",
            "Я волнуюсь больше, чем другие.",
            "Мне часто трудно открыто высказывать свое мнение.",
            "Мне обычно нравятся люди.",
            "Иногда мне хочется плакать без причины.",
            "Я считаю себя очень здоровым.",
            "Я часто думаю, что за мной наблюдают.",
            "Мне иногда удобнее молчать, чем говорить.",
            "Я не всегда могу открыться другим."
        ],
        options: [
            { value: 1, label: "Да" },
            { value: 0, label: "Нет" }
        ]
    }
];