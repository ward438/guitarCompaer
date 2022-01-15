// Todo - change to DB using an ORM
const guitars = [
    {
        id: 1,
        make: "Taylor",
        model: "Academy 10",        
        description: "Designed and built with beginner guitar players in mind, the Academy Series 10 combines the full-bodied tone and response of the classic dreadnought shape with Taylor's standards of comfort and playability. Our trademark neck, devised as a more practical take on the traditional guitar neck, makes it easier to fret strings, hold chords, and bend notes, thanks to a slimmer profile and the slightly shorter 24-7/8-inch scale length of the Academy Series. Plus, the Academy 10 ships with one of our most premium features: an armrest, which provides a more comfortable fit for players who are just learning how to manage the larger body of an acoustic guitar. With a solid spruce top and layered sapele back and sides, the dreadnought shape of the Academy 10 produces a warm sound with a strong low end and clear, ringing high tones, smoothened out by the punchy midrange of layered sapele. Between its rich sound and a comfortable shape built to invite inspiration, the Academy 10 provides a perfect solution for beginner players or those looking to buy on a budget.",
        price: '549.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-Acadamy-10-fr-2019.png?itok=yrn9dU91'
    },
    {
        id: 2,
        make: "Taylor",
        model: "Academy 10e",
        description: "This Dreadnought distills the essential features of a great acoustic guitar into a budget-friendly form. Our Academy Series was designed with developing players in mind, so the goal was to create as comfortable a playing experience as possible. The guitar body pairs layered sapele back and sides with a solid Sitka spruce top, and incorporates a feature normally reserved for our premium instruments: a built-in armrest that softens the edge of the body’s bass-side lower bout to enhance the playing comfort. The patented Taylor neck features a slightly shorter 24-7/8-inch scale length, 1-11/16-inch nut width, and light gauge strings, which make fretting and bending strings easier. Tonally the Dreadnought’s body dimensions produce a bold response with a warm low end and punchy treble, making this a great option for strummers and flatpickers. Onboard ES-B electronics include a built-in digital chromatic tuner with an LED display for tuning and low battery indication. Whether you’re at the front end of your guitar journey or just looking for a great strumming guitar without breaking the bank, the A10e will serve you well.",
        price: '699.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-Acadamy-10e-fr-2019.png?itok=gQs92PMx'
    },
    {
        id: 3,
        make: "Taylor",
        model: "Academy 12",
        description: "Our signature Grand Concert body shape brings our high standards of comfort and playability to the Academy Series, our line of budget-friendly guitars. Built with new players in mind, the A12 incorporates a sleek body shape with our trademark neck design and an ergonomic armrest for a truly player-friendly experience. A slightly shorter, 24-7/8-inch scale length also contributes to the smooth feel of the A12, making it easier to fret strings, hold chords, and bend notes as you learn to navigate the neck of an acoustic guitar. But the A12 serves up more than just a comfortable feel, yielding a balanced, robust sound that mingles the sparkle of solid spruce with the punchy, responsive midrange of layered sapele. With that versatile sound and a forgiving, unintrusive design, the A12 gives you the power to pursue your musical inspiration, whether it's your first guitar or a new addition for your collection.",
        price: '599.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-Acadamy-12-fr-2019.png?itok=y8ICrJEW'
    },
    {
        id: 4,
        make: "Taylor",
        model: "GS Mini",
        description: "A marvel of scaled-down design, the GS Mini is a fun little acoustic cannon that has taken the world by storm. Sporting a rich, full voice that belies its compact size, the Mini is ultra-portable, yet just as comfortable to cradle in the comfort of your home, making it the ultimate modern-day parlor guitar. Featuring the easy-playing, patented Taylor neck, this edition of the Mini incorporates a solid mahogany top that yields a strong, evenly balanced response for lively strumming. A structured gig bag is included.",
        price: '599.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-GS-Mini-MAH-fr-2015.png?itok=uAX2p6jw'
    },
    {
        id: 5,
        make: "Taylor",
        model: "GS Mini-e Koa Plus",
        description: "If you’re looking for a compact acoustic guitar with a big voice and a stunning visual appeal to match, look no further than the GS Mini-e Koa Plus. Built with back and sides of layered Hawaiian koa with a solid koa top, this model’s clear, articulate sound is right at home whether you’re practicing on the couch or making music with friends. An attractive finish treatment draws out koa’s lush visual beauty, while built-in electronics make it easy to plug in and play wherever your musical path takes you. It ships with a sturdy Aerocase for reliable, safe transportation.",
        price: '1099.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-GSMini-e-Koa-Plus-frl-2019.png?itok=utkunalI'

    },
    {
        id: 6,
        make: "Taylor",
        model: "114e",
        description: "The 114e features our popular Grand Auditorium body style, whose physical dimensions have made it a popular choice for its appealing performance versatility. Layered walnut back and sides are topped with a solid Sitka spruce soundboard, which together produce signature clear and balanced tone with a pleasing projection and midrange focus. The 1-11/16-inch nut width is slightly narrower than the standard 1-3/4-inch width of other steel-strings in the 300 Series and up, making it easier for developing players to navigate the fretboard. And with Taylor’s onboard Expression System 2 pickup, the guitar is ready to plug in whenever you are. The guitar ships in a durable lightweight gig bag.",
        price: '799.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-114e-fr-2019.png?itok=BPNaNR4H'
    },
    {
        id: 7,
        make: "Taylor",
        model: "100e",
        description: "This Taylor Dreadnought pairs layered walnut back and sides with a solid spruce top, pumping out full-voiced tone that responds to strummers and flatpickers with deep lows, punchy mids, and clear treble notes. The slightly narrower 1-11/16-inch nut width makes barre chords easier on the hands, and with Taylor’s Expression System 2 onboard pickup, you can count on a reliable performance partner that produces natural amplified acoustic tone. The guitar includes a lightweight yet durable Taylor gig bag to accommodate life on the go.",
        price: '799.00',
        imgUrl: 'https://www.taylorguitars.com/sites/default/files/styles/guitar_detail_horizontal/public/responsive-guitar-detail/Taylor-110e-fr-2019.png?itok=2ArCCLd2'
    },
    
    {
        id: 8,
        make: "Martin",
        model: "LX1 Little Martin",
        description: "While the Little Martin is our smallest guitar, it is very big on tone, quality and versatility. The LX1 model features a solid Sitka spruce top and mahogany high-pressure laminate HPL back and sides. It’s ideal for travel, student practice or for just playing around the house or campfire. This model includes sustainable wood certified parts. See specifications for details.",
        price: '399.00',
        imgUrl: 'https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dw5fed4371/images/LX1/LX1_f.jpg?sw=1600&sh=1600&sm=fit'
    },{
        id: 9,
        make: "Martin",
        model: "000-15M",
        description: "The 000-15M model continues the Martin tradition with a 000-14 fret body size, solid mahogany construction and a rich satin finish. Satisfy your desire with an affordable solid wood guitar that is visually distinctive and innovative. Due to material availability this guitar is designed with either a tortoise pattern or black pickguard. Selection may vary.",
        price: '1,349.00',
        imgUrl: 'https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dw0c0f5e76/images/000-15M/000-15M_f.jpg?sw=1600&sh=1600&sm=fit'
    },{
        id: 10,
        make: "Martin",
        model: "D-10E",
        description: "This solid wood Dreadnought model is a great sounding guitar at an affordable price. New to this model are stunning mother-of-pearl pattern fingerboard and rosette inlays with a multi-stripe rosette border. It has an FSC® Certified Richlite® fingerboard and bridge, satin finish body, and a hand-rubbed neck finish. Also new to this model is the Fishman® MX-T electronics package with a built-in soundhole tuner that auto mutes the audio output so you can tune up any time without using a pedal. This guitar comes with a Premium Soft Shell Case so it is Road-ready to join you on all of your adventures!",
        price: '849.00',
        imgUrl: 'https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Sites-martin-master-catalog/default/dw84a803a6/images/D-10E/D-10E_f_Sitka.jpg?sw=1600&sh=1600&sm=fit'
    },{
        id: 11,
        make: "Gibson",
        model: "J-45 Standard-Cherry",
        description: "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 Standard's classic combination of a Sitka spruce top coupled with mahogany back and sides deliver a sound with incredible dynamic range, warm mids, and a tight punchy bass. Now available in Cherry; a Gibson hardshell case is included.",
        price: '2,849.00',
        imgUrl: 'https://static.gibson.com/product-images/Acoustic/ACCNGE89/Cherry/MCRS45CH_front.jpg'
    },{
        id: 12,
        make: "Gibson",
        model: "J-45 Standard 12-String-Vintage Sunburst",
        description: "The J-45 Gets Six Extra Strings and Chimes Like Never Before The J-45 is a truly legendary guitar. The world-famous Workhorse is Gibson's best-selling acoustic of all time. Now it is available in a new 12-string version. Featuring a mahogany body, Sitka spruce top, and mahogany neck, it has a SlimTaper™ neck profile for playing comfort, a bone nut and saddle, TUSQ® bridge pins, Grover® Mini Rotomatic® tuners, and comes equipped with LR Baggs™ VTC electronics, making it ready to deliver beautiful, chiming, 12-string tones on stage or in the studio, right out of the included Gibson hardshell case.",
        price: '3,399.00',
        imgUrl: 'https://static.gibson.com/product-images/Acoustic/ACCDMY224/Vintage%20Sunburst/MCRS4512VS_front_v2.jpg'
    },{
        id: 13,
        make: "Gibson",
        model: "SJ-200 Standard-Wine Red",
        description: "The King of the Flat-Tops, Now in Two New Colors The legacy of Gibson’s “King of the Flat-Tops” lives on in the SJ-200 Standard. From its inaugural appearance in 1937, Gibson’s SJ-200 set an unmatched standard. The SJ-200 continues a legacy of the world’s most famous acoustic guitar, and certainly one of the most popular. The body features gorgeous flame maple and is finished in your choice of Wine Red or Autumnburst. It comes equipped with gold Grover® Rotomatic® tuners, a TUSQ® nut, saddle, and bridge pins, and it is stage and studio-ready with an internal LR Baggs™ Anthem mic/pickup system. A Gibson hardshell case is included.",
        price: '4,999.00',
        imgUrl: 'https://static.gibson.com/product-images/Acoustic/ACC55F178/Wine%20Red/MCJB20WR_front.jpg'
    },
    
    {
        id: 14,
        make: "Fender",
        model: "FA-125 DREADNOUGHT",
        description: "The FA-125 is a visually stunning guitar with a budget-friendly price. Quality laminate construction with a modern Fender 3 3 headstock and Viking bridge create an easy-playing instrument that sounds great. Beginners and developing players will appreciate this guitar, which features a nato neck that gives the guitar lively tone and a smooth playing feel.",
        price: '199.99',
        imgUrl: 'https://www.fmicassets.com/Damroot/LgJpg/10001/0971210521_gtr_frt_001_rr.jpg'
    },{
        id: 15,
        make: "Fender",
        model: "CC-60S CONCERT",
        description: "Compact and comfortable, the CC-60S is ideal for beginning players. The smaller concert-sized body is easy to maneuver in any playing position, with an articulate voice that's great for fingerpicking. Its tuneful solid spruce top, easy-to-play neck, and mahogany back and sides make the CC-60S a perfect choice for the beach, the patio or the coffeehouse.",
        price: '229.99',
        imgUrl: 'https://www.fmicassets.com/Damroot/LgJpg/10001/0970150021_gtr_frt_001_rr.jpg'
    },{
        id: 16,
        make: "Fender",
        model: "MALIBU PLAYER",
        description: "isrupt the status quo with the Malibu Player, a small-body, short scale acoustic-electric with a comfortable feel that will encourage you to reach for new chords and melodies. Featuring a solid spruce top, mahogany back and sides, and 6-in-line headstock, the bold style and balanced, articulate sound make the Malibu Player a natural partner on stage and in the studio. Suitable for any playing style, the mahogany neck features a comfortable, slim-taper 'C'-shaped profile, inspired by Fender’s electric legacy. The same no-compromise attitude that gives the Malibu Player its uniquely killer vibe extends to every aspect of its construction. It features optimized bracing for superior resonance, a GraphTech® NuBone® nut and saddle, and a Fishman® preamp system that allows you to reproduce the guitar’s natural sound when plugged into an amplifier. With superb playability and unique aesthetics, the Malibu Player resonates with those destined to stand out from the crowd.",
        price: '449.99',
        imgUrl: 'https://www.fmicassets.com/Damroot/LgJpg/10002/0970722088_gtr_frt_001_rr.jpg'
    },{
        id: 17,
        make: "Fender",
        model: "ACOUSTASONIC® PLAYER TELECASTER®",
        description: "The evolution of Fender’s trailblazing Acoustasonic platform continues with the introduction of the Acoustasonic Player Telecaster. This acoustic-electric guitar offers its own set of six voices that showcases its unique personality. A streamlined 3-way switch allows for shape-shifting between acoustic and electric tones. With the Acoustasonic Player Telecaster, this platform has been refined to offer a versatile, more accessible tool for the modern musician.",
        price: '4,999.00',
        imgUrl: 'https://www.fmicassets.com/Damroot/LgJpg/10001/0972213250_fen_ins_frt_1_rr.jpg'
    },{
        id: 18,
        make: "PRS",
        model: "SE P20",
        description: "The PRS SE P20 is a parlor-sized acoustic with a big voice. Boasting traditional parlor features like sweet, midrange tone, historic vibe, and easy portability, the PRS SE P20 also brings a unique voice to players. The PRS hybrid “X”/Classical bracing locks down the back and sides while allowing the top to freely vibrate, allowing the PRS SE P20 to project with even, bold tone, while the all-mahogany construction provides an organic warmth to the guitar. Its smaller size keeps playing fun and comfortable for hours, so whether writing, recording, or performing the P20 is sure to impress.",
        price: '549.00',
        imgUrl: 'https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJhY291c3RpYy1pbWFnZXMvU0UtUDIwLTEtR2FsbGVyeS0yMDIyLmpwZyIsImVkaXRzIjp7ImpwZWciOnsicXVhbGl0eSI6ODIsInByb2dyZXNzaXZlIjp0cnVlLCJ0cmVsbGlzUXVhbnRpc2F0aW9uIjp0cnVlLCJvdmVyc2hvb3REZXJpbmdpbmciOnRydWUsIm9wdGltaXplU2NhbnMiOnRydWV9LCJyZXNpemUiOnsid2lkdGgiOjE2MDAsImhlaWdodCI6ODAwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0='
    },{
        id: 19,
        make: "PRS",
        model: "SE T40E",
        description: "The PRS SE T40E pairs ovangkol back and sides with a solid spruce top for full, lush tone. When matched with PRS hybrid“X”/Classical bracing, which allows the top to freely vibrate, the SE T40E’s voice projects with breathtaking volume and delicate nuance. The Tonare Grand body shape delivers a familiar feel and a thunderous tone, well suited for picking and fingerstyle playing.",
        price: '749.00',
        imgUrl: 'https://d2zap0z9ahyacn.cloudfront.net/eyJidWNrZXQiOiJwcnNpbWFnZXMiLCJrZXkiOiJhY291c3RpYy1pbWFnZXMvc2UtdDQwZS0yMDIxLWdhbGxlcnktMS5qcGciLCJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjgyLCJwcm9ncmVzc2l2ZSI6dHJ1ZSwidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWl6ZVNjYW5zIjp0cnVlfSwicmVzaXplIjp7IndpZHRoIjoxNjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19'
    },

]

//?make=gibson sample querystring
// http://localhost:3000/api/guitars?make=gibson
export default function handler(req, res) {

    switch (req.method) {
        case 'GET':
            const { type } = req.query
            if (type !== undefined) {
                res.status(200).json(guitars.filter(guitar => guitar.type === type))
            } else {
                res.status(200).json(guitars)
            }
            break;
        case 'POST':
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            throw Error("Unknown HTTP Method")
    }
}