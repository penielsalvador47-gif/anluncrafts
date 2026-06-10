// =============================================================
// ANLUN CRAFTS — Interactions, i18n & Map
// =============================================================

// ============ TRANSLATIONS ===================================
const translations = {
    en: {
        "announce": "✦ Heritage Collection Launch — Enjoy <strong>20% OFF</strong> with code <strong>ANLUN20</strong> ✦ Free shipping over NT$ 2,800 ✦",
        "nav.story": "Our Story", "nav.collection": "Collection", "nav.craft": "Craft", "nav.origin": "Origin", "nav.offers": "Offers", "nav.contact": "Contact",
        "hero.eyebrow": "Crafted in Banaue · Curated in Taipei",
        "hero.line1": "Tradition", "hero.line2": "<em>woven</em> into", "hero.line3": "modern life.",
        "hero.lede": "Heirloom-quality rattan, bamboo and abaca crafts — handwoven in the Cordillera mountains, brought to Taiwan by collectors who believe four hundred years of craft deserve more than a museum case.",
        "hero.cta": "Explore Collection", "hero.cta2": "Our Heritage",
        "hero.meta1": "Signature Pieces", "hero.meta2": "Years of Craft", "hero.meta3": "Handwoven",
        "hero.scroll": "SCROLL",
        "marquee.a": "HANDWOVEN HERITAGE", "marquee.b": "IFUGAO ARTISANRY", "marquee.c": "SLOW MADE", "marquee.d": "BANAUE → TAIPEI",
        "story.caption": "— Hape Eng, lovingly woven, 2024 —",
        "story.eyebrow": "The Anlun House",
        "story.title": "A house built on patience, fibre, and time.",
        "story.p1": "<strong>安倫 (Ān Lún)</strong> — meaning <em>\"peaceful order\"</em> — was founded in Taipei to bring the rapidly disappearing weaving traditions of the Ifugao people, who terraced the mountains of Banaue more than two thousand years ago, to the Taiwanese audience that appreciates a quiet kind of beauty.",
        "story.p2": "Every piece in our collection is born from natural rattan and bamboo, gathered with respect from the forests of the Cordilleras, and shaped over weeks — sometimes months — by master weavers who learned this language from their grandmothers. We pay every artisan above market wage and travel to Banaue four times a year to choose each piece in person.",
        "story.s1": "Generations of weavers", "story.s2": "Master artisans", "story.s3": "Care per stitch",
        "values.eyebrow": "Why Anlun",
        "values.title": "Built for the few who notice the details.",
        "values.v1.t": "100% Handwoven", "values.v1.d": "Not a single machine touches our crafts. Every fibre is laid by hand, the way it has been for four centuries.",
        "values.v2.t": "Banaue Born", "values.v2.d": "Sourced and woven only in the highlands of Ifugao — the same earth that has cradled this craft for millennia.",
        "values.v3.t": "Fair Artisan Wage", "values.v3.d": "Every purchase pays our weavers above-market rates — keeping the craft alive for the next generation.",
        "values.v4.t": "Heirloom Quality", "values.v4.d": "Built to outlive trends, outlast generations. A piece you'll one day hand to your children.",
        "products.eyebrow": "The Collection",
        "products.title": "Five pieces. Five stories. <em>One people.</em>",
        "products.intro": "Each item is a living chapter of Ifugao history — chosen for its distinct silhouette, weave, and role in the daily and ceremonial life of the Cordillera mountains.",
        "p.features": "Features", "p.tag": "−20% LAUNCH", "p.enquire": "Enquire to Purchase",
        "p1.tag": "Ceremonial · Heirloom",
        "p1.desc": "The most revered piece in our collection. The Inabnutan is a ceremonial bag crowned with a dramatic V-shaped opening and clothed in a dense fringe of dark plant fibres — once worn only by elders and chieftains during ritual gatherings.",
        "p1.f1": "Hand-twisted natural fibre fringe", "p1.f2": "Reinforced chevron-braided opening", "p1.f3": "Solid rattan body, woven over six weeks", "p1.f4": "One-of-one — no two are alike",
        "p2.tag": "Everyday · Carry",
        "p2.desc": "The original Ifugao backpack — and arguably the original sustainable bag. Lightweight, airy, and impossibly strong, the Pasiking has carried rice, tools, and traveller's belongings up and down the terraces for generations.",
        "p2.f1": "Slim profile fits city or trail", "p2.f2": "Braided rattan shoulder straps", "p2.f3": "Reinforced base for heavy loads", "p2.f4": "Available in 5 graduated sizes",
        "p3.tag": "Domestic · Sculptural",
        "p3.desc": "A study in geometric grace. The Hape Eng's curved silhouette and tightly woven walls were originally designed to hold harvested rice — today, it stands as a sculptural object in modern interiors, with an honest, lived-in beauty.",
        "p3.f1": "Refined diagonal weave", "p3.f2": "Solid bamboo rim and base", "p3.f3": "Hand-braided carrying cord", "p3.f4": "Sealed with natural beeswax",
        "p4.tag": "Storage · Architectural",
        "p4.desc": "All sharp lines and warm tones, the Kupit is woven in a characteristic red-brown herringbone that almost glows in low light. Architectural in form, it was traditionally used to store dry rice, valuables and sacred objects.",
        "p4.f1": "Signature herringbone twill weave", "p4.f2": "Naturally dyed rattan strips", "p4.f3": "Single hand-tied shoulder strap", "p4.f4": "Square base, tapered shoulders",
        "p5.tag": "Heritage · Open Weave",
        "p5.desc": "A breathing basket. The Kayabang's silhouette — narrow at the base, opening into a crown of vertical bamboo bars — was designed to carry vegetables from the terraces back home, allowing the produce to breathe on the long descent.",
        "p5.f1": "Open-weave ventilated crown", "p5.f2": "Hand-shaved bamboo vertical ribs", "p5.f3": "Tight rattan binding at every joint", "p5.f4": "Sculptural floor or shelf piece",
        "origin.eyebrow": "From Mountain to Doorstep",
        "origin.title": "Where every weave begins.",
        "origin.intro": "Every Anlun piece travels 1,200 kilometres — from the rice terraces of Banaue, in the Ifugao province of the Philippines, across the sea to our Taipei studio, and finally to your home.",
        "origin.from": "Crafted in", "origin.to": "Curated in",
        "origin.f1.l": "Province", "origin.f2.l": "Town", "origin.f3.l": "Elevation", "origin.f4.l": "UNESCO Heritage", "origin.f5.l": "Distance to Taipei", "origin.f6.l": "Coordinates",
        "origin.quote": "\"The terraces of Banaue are often called the Eighth Wonder of the World — carved by hand into the mountains over two thousand years ago. The hands that shape our crafts are the same hands that still tend those terraces today.\"",
        "offer.eyebrow": "Limited · Heritage Launch",
        "offer.title": "Take 20% off your first heirloom.",
        "offer.text": "Use code <strong>ANLUN20</strong> at checkout. Enjoy complimentary carbon-neutral shipping anywhere in Taiwan on every order above NT$ 2,800, and an engraved certificate of authenticity hand-signed by the weaver of your piece.",
        "offer.f1": "Shipping over NT$ 2,800", "offer.f2": "Easy returns", "offer.f3": "Certificate of authenticity",
        "offer.cta": "Claim Your Discount",
        "test.eyebrow": "In their own words",
        "test.title": "Loved by collectors and dreamers alike.",
        "test.t1": "\"My Inabnutan arrived wrapped like a relic. It is the most beautiful object in my home — every guest stops in front of it.\"",
        "test.t2": "\"I carry my Pasiking everywhere. It's been three years and it has only grown more beautiful with use. A forever bag.\"",
        "test.t3": "\"You can feel the hours in each weave. Buying from Anlun feels less like a purchase and more like an inheritance.\"",
        "srv.eyebrow": "Care · Payment · Contact",
        "srv.title": "We look after you, always.",
        "srv.c1.t": "Customer Care",
        "srv.c1.l1": "Concierge", "srv.c1.l2": "Phone", "srv.c1.l3": "Hours", "srv.c1.l4": "Showroom", "srv.c1.l5": "LINE",
        "srv.c1.v3": "Mon — Sat · 10 AM – 7 PM TWT",
        "srv.c1.v4": "No. 88, Da'an Rd, Da'an Dist, Taipei 106",
        "srv.c2.t": "Payment Methods",
        "srv.c2.s": "Secure checkout. Locally trusted.",
        "srv.c2.cod": "CASH ON DELIVERY",
        "srv.c3.t": "Shipping & Returns",
        "srv.c3.l1": "Taiwan", "srv.c3.l2": "7-Eleven Pickup", "srv.c3.l3": "International", "srv.c3.l4": "Returns", "srv.c3.l5": "Packaging",
        "srv.c3.v1": "1 – 3 business days", "srv.c3.v2": "Free over NT$ 2,800", "srv.c3.v3": "5 – 10 business days",
        "srv.c3.v4": "30 days, hassle-free", "srv.c3.v5": "100% biodegradable",
        "news.title": "Letters from the Loom",
        "news.text": "Monthly stories from the weavers, behind-the-scenes from new collections, and first access to limited drops.",
        "news.btn": "Subscribe",
        "news.ok": "Thank you. The next letter is on its way to you. ✦",
        "footer.tag": "Tradition woven into modern life.",
        "footer.addr": "Anlun Crafts Co., Ltd.<br>No. 88, Da'an Rd, Sec. 1<br>Da'an District, Taipei 106 · Taiwan",
        "footer.h1": "Discover", "footer.h2": "Care", "footer.h3": "Follow",
        "footer.l1": "Returns",
        "footer.rights": "© 2024 安倫 Crafts Co., Ltd. · 統一編號 12345678 · All weaves reserved.",
        "footer.respect": "Designed in Taipei. Crafted with respect for the Ifugao people."
    },
    zh: {
        "announce": "✦ 傳承系列上市 — 輸入優惠碼 <strong>ANLUN20</strong> 享 <strong>八折優惠</strong> ✦ NT$ 2,800 以上免運 ✦",
        "nav.story": "品牌故事", "nav.collection": "商品系列", "nav.craft": "工藝", "nav.origin": "原產地", "nav.offers": "優惠", "nav.contact": "聯絡我們",
        "hero.eyebrow": "巴納韋手工編織 · 台北精選",
        "hero.line1": "讓傳統", "hero.line2": "<em>編織</em>進", "hero.line3": "現代生活。",
        "hero.lede": "傳家級藤、竹、蕉麻工藝品——由科迪勒拉山的伊富高族工匠純手工編織，跨海來到台灣。我們相信，四百年的工藝傳承，值得被珍藏在生活裡，而非僅供於博物館。",
        "hero.cta": "探索系列", "hero.cta2": "了解傳承",
        "hero.meta1": "精選作品", "hero.meta2": "年工藝傳承", "hero.meta3": "純手工編織",
        "hero.scroll": "向下滑動",
        "marquee.a": "手工編織之美", "marquee.b": "伊富高工藝", "marquee.c": "慢工細作", "marquee.d": "巴納韋 → 台北",
        "story.caption": "— Hape Eng,精心編織, 2024 —",
        "story.eyebrow": "安倫之家",
        "story.title": "以耐心、纖維與時間，打造的一個家。",
        "story.p1": "<strong>安倫</strong>——意為<em>「平和有序」</em>——在台北成立，致力於將兩千多年前在巴納韋山區開鑿梯田的伊富高族人，那即將失傳的編織傳統，帶給懂得欣賞靜謐之美的台灣朋友。",
        "story.p2": "每一件作品都源自天然藤與竹，採集自科迪勒拉山的森林，經由傳承自祖母輩的編織大師，花上數週甚至數月的時間，一絲一縷地編織而成。我們支付高於市場行情的工資，並每年四次親赴巴納韋，親手挑選每一件作品。",
        "story.s1": "代編織傳承", "story.s2": "位編織大師", "story.s3": "份用心編織",
        "values.eyebrow": "為何選擇安倫",
        "values.title": "獻給願意細細品味細節的少數人。",
        "values.v1.t": "100% 純手工", "values.v1.d": "我們的工藝品從不假機器之手，每一根纖維皆由人手鋪設，沿襲四百年來的方式。",
        "values.v2.t": "巴納韋出生", "values.v2.d": "僅選自伊富高高原——那片孕育此工藝已逾千年的土地。",
        "values.v3.t": "公平工資", "values.v3.d": "每一筆消費都讓編織者獲得高於市場的工資，使這項工藝得以傳承給下一代。",
        "values.v4.t": "傳家級品質", "values.v4.d": "比潮流更持久，比世代更綿長。這是您他日將傳給孩子的一件物品。",
        "products.eyebrow": "商品系列",
        "products.title": "五件作品。五段故事。<em>同一個民族。</em>",
        "products.intro": "每一件作品都是伊富高族活生生的歷史篇章——以獨特的輪廓、編織技法，以及在科迪勒拉山日常與儀式生活中所扮演的角色，被精心挑選而出。",
        "p.features": "商品特色", "p.tag": "−20% 上市優惠", "p.enquire": "立即諮詢購買",
        "p1.tag": "儀式 · 傳家",
        "p1.desc": "本系列中最受敬重的一件。Inabnutan 為儀式用背袋,頂部呈現戲劇性的 V 字開口,外覆以深色植物纖維編織的密集流蘇——昔日僅長者與部落首領於祭祀場合佩戴。",
        "p1.f1": "手工捻製天然纖維流蘇", "p1.f2": "強化人字編織開口", "p1.f3": "純藤主體,費時六週編成", "p1.f4": "唯一獨有 — 每件絕無雷同",
        "p2.tag": "日常 · 隨身",
        "p2.desc": "伊富高族最原始的後背包——也可說是最早的永續包款。輕盈、透氣,卻堅韌無比。Pasiking 世代承載著稻米、工具與旅人之物,行走於梯田之間。",
        "p2.f1": "纖薄外型,城市山野皆宜", "p2.f2": "編織藤製肩帶", "p2.f3": "強化底部承載重物", "p2.f4": "提供五種漸進尺寸",
        "p3.tag": "居家 · 雕塑感",
        "p3.desc": "幾何之美的研究。Hape Eng 曲線的輪廓與緊密的編織壁,原本用於盛裝收成的稻米——今日,它在現代居家中化為雕塑般的存在,散發著樸實而生活化的美感。",
        "p3.f1": "精緻斜紋編織", "p3.f2": "實心竹邊與底部", "p3.f3": "手工編織提繩", "p3.f4": "天然蜂蠟封層",
        "p4.tag": "收納 · 建築感",
        "p4.desc": "全是俐落的線條與溫暖的色調,Kupit 以獨特的紅棕色人字紋編織而成,在微光下幾乎發光。其建築般的造型,傳統上用於儲存乾米、貴重物品與神聖之物。",
        "p4.f1": "招牌人字斜紋編織", "p4.f2": "天然染色藤條", "p4.f3": "單條手繫肩帶", "p4.f4": "方形底部,漸窄肩線",
        "p5.tag": "傳統 · 鏤空編織",
        "p5.desc": "一只會呼吸的籃。Kayabang 底部窄、頂部開展為直立竹條的冠狀輪廓——專為從梯田將蔬菜運回家而設計,讓農作物在漫長的下山路上得以呼吸。",
        "p5.f1": "鏤空透氣的頂冠", "p5.f2": "手工削製的竹製垂直骨架", "p5.f3": "每處接合處皆以藤條緊密綁紮", "p5.f4": "可作為地板或層架的雕塑作品",
        "origin.eyebrow": "從山脈到您家門口",
        "origin.title": "每一份編織的起點。",
        "origin.intro": "每一件安倫的作品都會旅行 1,200 公里——從菲律賓伊富高省巴納韋的稻米梯田,跨越海洋來到我們台北的工作室,最終抵達您的家。",
        "origin.from": "編織於", "origin.to": "精選於",
        "origin.f1.l": "省份", "origin.f2.l": "城鎮", "origin.f3.l": "海拔", "origin.f4.l": "UNESCO 世界遺產", "origin.f5.l": "至台北距離", "origin.f6.l": "座標",
        "origin.quote": "「巴納韋的梯田常被稱為世界第八奇蹟——是兩千多年前以雙手在山間刻畫出來的。今日塑造我們作品的雙手,正是仍在照料那片梯田的雙手。」",
        "offer.eyebrow": "限時 · 上市優惠",
        "offer.title": "首件傳家工藝享八折優惠。",
        "offer.text": "結帳時輸入優惠碼 <strong>ANLUN20</strong>。凡訂單金額滿 NT$ 2,800,即享全台免運(碳中和配送),並附贈由編織者親筆簽名的鑴刻認證書。",
        "offer.f1": "NT$ 2,800 以上免運", "offer.f2": "30 天輕鬆退貨", "offer.f3": "親筆簽名認證書",
        "offer.cta": "立即領取優惠",
        "test.eyebrow": "他們這樣說",
        "test.title": "深受收藏家與夢想家喜愛。",
        "test.t1": "「我的 Inabnutan 像聖物般包裝送達。它是我家中最美麗的物件——每位賓客都會駐足凝視。」",
        "test.t2": "「我隨身攜帶 Pasiking 三年了,它隨著使用愈發美麗。是真正的一生之包。」",
        "test.t3": "「在每一道編織中都能感受時間的厚度。從安倫購物,與其說是消費,不如說是承接一份傳承。」",
        "srv.eyebrow": "客服 · 付款 · 聯繫",
        "srv.title": "我們時時刻刻為您守候。",
        "srv.c1.t": "客戶服務",
        "srv.c1.l1": "客服信箱", "srv.c1.l2": "客服電話", "srv.c1.l3": "服務時間", "srv.c1.l4": "實體門市", "srv.c1.l5": "LINE 帳號",
        "srv.c1.v3": "週一至週六 · 早上 10 時 - 晚間 7 時",
        "srv.c1.v4": "台北市大安區大安路一段 88 號",
        "srv.c2.t": "付款方式",
        "srv.c2.s": "安全結帳,在地信賴。",
        "srv.c2.cod": "貨到付款",
        "srv.c3.t": "配送與退換",
        "srv.c3.l1": "台灣本島", "srv.c3.l2": "7-11 取貨", "srv.c3.l3": "國際配送", "srv.c3.l4": "退換貨", "srv.c3.l5": "包裝",
        "srv.c3.v1": "1 - 3 個工作天", "srv.c3.v2": "NT$ 2,800 以上免運", "srv.c3.v3": "5 - 10 個工作天",
        "srv.c3.v4": "30 天輕鬆退換", "srv.c3.v5": "100% 可生物分解",
        "news.title": "織紋家書",
        "news.text": "每月分享編織者的故事、新系列幕後花絮,並搶先獲取限量發售商品。",
        "news.btn": "訂閱電子報",
        "news.ok": "感謝您。下一封家書即將寄達。 ✦",
        "footer.tag": "讓傳統,編織進現代生活。",
        "footer.addr": "安倫文創有限公司<br>台北市大安區大安路一段 88 號<br>106 台北 · 台灣",
        "footer.h1": "探索", "footer.h2": "服務", "footer.h3": "追蹤我們",
        "footer.l1": "退換貨",
        "footer.rights": "© 2024 安倫文創有限公司 · 統一編號 12345678 · 版權所有",
        "footer.respect": "設計於台北。以對伊富高族的敬意精心打造。"
    },
    fil: {
        "announce": "✦ Paglulunsad ng Heritage Collection — Tamasahin ang <strong>20% OFF</strong> sa code <strong>ANLUN20</strong> ✦ Libreng padala sa NT$ 2,800 pataas ✦",
        "nav.story": "Aming Kuwento", "nav.collection": "Koleksyon", "nav.craft": "Sining", "nav.origin": "Pinagmulan", "nav.offers": "Alok", "nav.contact": "Ugnayan",
        "hero.eyebrow": "Ginawa sa Banaue · Inihandog sa Taipei",
        "hero.line1": "Tradisyon", "hero.line2": "<em>hinabi</em> sa", "hero.line3": "makabagong buhay.",
        "hero.lede": "Mga handog-pamana na yari sa rattan, kawayan at abaka — ginawa sa kamay sa kabundukan ng Cordillera, dinala sa Taiwan ng mga koleksyonista na naniniwalang ang apatnaraang taon ng sining ay nararapat sa higit pa kaysa sa isang museo.",
        "hero.cta": "Tuklasin ang Koleksyon", "hero.cta2": "Aming Pamana",
        "hero.meta1": "Pirasong Likha", "hero.meta2": "Taon ng Sining", "hero.meta3": "Hinabi sa Kamay",
        "hero.scroll": "MAG-SCROLL",
        "marquee.a": "PAMANA NG PAGHAHABI", "marquee.b": "SINING NG IFUGAO", "marquee.c": "DAHAN-DAHAN GINAWA", "marquee.d": "BANAUE → TAIPEI",
        "story.caption": "— Hape Eng, buong pagmamahal na hinabi, 2024 —",
        "story.eyebrow": "Ang Tahanang Anlun",
        "story.title": "Isang tahanan na itinayo sa pasensya, hibla, at panahon.",
        "story.p1": "<strong>安倫 (Ān Lún)</strong> — ibig sabihin ay <em>\"mapayapang kaayusan\"</em> — ay itinatag sa Taipei upang dalhin ang mabilis na nawawalang tradisyon ng paghahabi ng mga Ifugao, na bumuo ng mga hagdanang palayan ng Banaue mahigit dalawang libong taon na ang nakaraan, sa mga Taiwanesong nagpapahalaga sa tahimik na kagandahan.",
        "story.p2": "Bawat piraso sa aming koleksyon ay isinilang mula sa likas na rattan at kawayan, na kinuha nang may paggalang mula sa mga kagubatan ng Cordillera, at hinubog sa loob ng linggo — minsan buwan — ng mga dalubhasang manghahabi. Binabayaran namin ang bawat artisan nang mas mataas sa pamilihan at bumibisita kami sa Banaue apat na beses sa isang taon upang piliin nang personal ang bawat likha.",
        "story.s1": "Henerasyon ng manghahabi", "story.s2": "Dalubhasang artisan", "story.s3": "Pag-aaruga sa bawat hibla",
        "values.eyebrow": "Bakit Anlun",
        "values.title": "Ginawa para sa iilan na nakakapansin ng detalye.",
        "values.v1.t": "100% Hinabi sa Kamay", "values.v1.d": "Walang kahit isang makina ang humahawak sa aming sining. Bawat hibla ay inilatag sa kamay, gaya ng apatnaraang taong nakalipas.",
        "values.v2.t": "Tubong Banaue", "values.v2.d": "Nangangaling at hinabi lamang sa mga kabundukan ng Ifugao — ang lupang nagpalaki ng sining na ito sa loob ng millennia.",
        "values.v3.t": "Patas na Sahod", "values.v3.d": "Bawat pagbili ay nagbibigay ng sahod na mas mataas sa pamilihan — pinananatiling buhay ang sining para sa susunod na henerasyon.",
        "values.v4.t": "Kalidad-Pamana", "values.v4.d": "Mas matagal kaysa sa uso, mas matagal kaysa sa henerasyon. Isang pirasong balang araw ay maipapamana mo sa iyong mga anak.",
        "products.eyebrow": "Ang Koleksyon",
        "products.title": "Limang piraso. Limang kuwento. <em>Iisang lahi.</em>",
        "products.intro": "Bawat bagay ay isang nabubuhay na kabanata ng kasaysayan ng Ifugao — pinili para sa kakaibang silweta, paghahabi, at papel nito sa pang-araw-araw at seremonyal na buhay sa kabundukan ng Cordillera.",
        "p.features": "Mga Tampok", "p.tag": "−20% PAGLULUNSAD", "p.enquire": "Magtanong para Bumili",
        "p1.tag": "Seremonyal · Pamana",
        "p1.desc": "Ang pinakapinagpipitagang piraso sa aming koleksyon. Ang Inabnutan ay isang seremonyal na bag na may madramang hugis-V na bukasan at binalot ng makapal na palawit ng madilim na hibla ng halaman — dating isinusuot lamang ng matatanda at mga pinuno sa mga ritwal.",
        "p1.f1": "Palawit na yari sa hibla, hinabi sa kamay", "p1.f2": "Pinatibay na chevron na bukasan", "p1.f3": "Solidong rattan, hinabi sa loob ng anim na linggo", "p1.f4": "Isa lamang sa mundo — walang katulad",
        "p2.tag": "Pang-araw-araw · Pansala",
        "p2.desc": "Ang orihinal na backpack ng Ifugao — at maaaring ang unang sustainable na bag. Magaan, malanghap, ngunit hindi kapani-paniwalang matibay. Pinasan ng Pasiking ang bigas, kagamitan, at mga gamit ng manlalakbay sa mga hagdanang palayan sa loob ng maraming henerasyon.",
        "p2.f1": "Manipis na hugis, akma sa siyudad o bundok", "p2.f2": "Hinabing strap ng rattan sa balikat", "p2.f3": "Pinatibay na base para sa mabigat na laman", "p2.f4": "May limang lakihan",
        "p3.tag": "Tahanan · Eskultural",
        "p3.desc": "Isang aral sa geometric na biyaya. Ang umiikot na silweta at maigting na pader ng Hape Eng ay orihinal na ginawa para magtago ng aning bigas — ngayon, ito ay tumatayo bilang isang eskultural na bagay sa modernong interior.",
        "p3.f1": "Pinong dyagonal na habi", "p3.f2": "Solidong kawayan sa gilid at base", "p3.f3": "Hinabing tali sa kamay", "p3.f4": "Tinakpan ng natural na pulot-pukyutan",
        "p4.tag": "Imbakan · Arkitektura",
        "p4.desc": "Lahat ay matalim na linya at maiinit na tono, ang Kupit ay hinabi sa katangiang pula-kayumangging herringbone na halos lumiliwanag sa malabong ilaw. Arkitektura sa hugis, ito ay tradisyonal na ginamit para itago ang tuyong bigas, mahahalagang gamit at mga sagradong bagay.",
        "p4.f1": "Lagdang herringbone twill", "p4.f2": "Natural na pinatigan na hibla ng rattan", "p4.f3": "Isang hinabing strap sa kamay", "p4.f4": "Parisukat na base, makitid na balikat",
        "p5.tag": "Pamana · Hayag na Habi",
        "p5.desc": "Isang humihinga na basket. Ang silweta ng Kayabang — makitid sa base, lumalawak sa korona ng patayong kawayan — ay ginawa upang dalhin ang mga gulay mula sa mga hagdanang palayan pauwi, hinahayaang humihinga ang ani sa mahabang paglusong.",
        "p5.f1": "Hayag na habing korona", "p5.f2": "Mga patayong kawayan na hinubog sa kamay", "p5.f3": "Mahigpit na rattan sa bawat sulok", "p5.f4": "Eskultural na piraso sa sahig o estante",
        "origin.eyebrow": "Mula sa Bundok hanggang sa Pinto",
        "origin.title": "Kung saan nagsisimula ang bawat habi.",
        "origin.intro": "Bawat piraso ng Anlun ay naglalakbay ng 1,200 kilometro — mula sa mga hagdanang palayan ng Banaue, sa lalawigan ng Ifugao sa Pilipinas, tumatawid sa dagat patungo sa aming studio sa Taipei, at sa wakas, sa inyong tahanan.",
        "origin.from": "Ginawa sa", "origin.to": "Inihandog sa",
        "origin.f1.l": "Lalawigan", "origin.f2.l": "Bayan", "origin.f3.l": "Taas", "origin.f4.l": "Pamanang UNESCO", "origin.f5.l": "Distansya sa Taipei", "origin.f6.l": "Koordinasyon",
        "origin.quote": "\"Ang mga hagdanang palayan ng Banaue ay madalas tawaging Ikawalong Kababalaghan ng Mundo — inukit sa kamay sa mga bundok mahigit dalawang libong taon na ang nakaraan. Ang mga kamay na humuhubog sa aming sining ay ang parehong mga kamay na patuloy na nag-aaruga sa mga hagdanang iyon hanggang ngayon.\"",
        "offer.eyebrow": "Limitado · Paglulunsad ng Pamana",
        "offer.title": "Magtipid ng 20% sa iyong unang pamana.",
        "offer.text": "Gamitin ang code <strong>ANLUN20</strong> sa checkout. Tamasahin ang libreng carbon-neutral na padala sa buong Taiwan sa bawat order mahigit NT$ 2,800, at isang naka-ukit na sertipiko ng pagiging tunay na pinirmahan ng manghahabi ng iyong piraso.",
        "offer.f1": "Libreng padala sa NT$ 2,800 pataas", "offer.f2": "Madaling pagsasauli sa 30 araw", "offer.f3": "Pinirmahang sertipiko ng pagiging tunay",
        "offer.cta": "Kunin ang Iyong Diskwento",
        "test.eyebrow": "Sa kanilang sariling mga salita",
        "test.title": "Minamahal ng mga koleksyonista at mapangarapin.",
        "test.t1": "\"Dumating ang aking Inabnutan na nakabalot tulad ng isang relikya. Ito ang pinakamagandang bagay sa aking tahanan — tumitigil ang lahat ng bisita sa harap nito.\"",
        "test.t2": "\"Dala-dala ko ang aking Pasiking saanman. Tatlong taon na ito at lalong gumaganda habang ginagamit. Isang habang-buhay na bag.\"",
        "test.t3": "\"Naramdaman mo ang mga oras sa bawat habi. Ang pagbili mula sa Anlun ay parang pagtanggap ng pamana, hindi lamang pagbili.\"",
        "srv.eyebrow": "Pangangalaga · Bayad · Ugnayan",
        "srv.title": "Inaalagaan ka namin, palagi.",
        "srv.c1.t": "Pangangalaga sa Kostumer",
        "srv.c1.l1": "Concierge", "srv.c1.l2": "Telepono", "srv.c1.l3": "Oras", "srv.c1.l4": "Showroom", "srv.c1.l5": "LINE",
        "srv.c1.v3": "Lun — Sab · 10 NU – 7 NG TWT",
        "srv.c1.v4": "No. 88, Da'an Rd, Da'an Dist, Taipei 106",
        "srv.c2.t": "Mga Paraan ng Bayad",
        "srv.c2.s": "Ligtas na checkout. Pinagkakatiwalaan sa lokal.",
        "srv.c2.cod": "BAYAD SA PAGHAHATID",
        "srv.c3.t": "Padala at Pagsasauli",
        "srv.c3.l1": "Taiwan", "srv.c3.l2": "Kunin sa 7-Eleven", "srv.c3.l3": "Internasyonal", "srv.c3.l4": "Pagsasauli", "srv.c3.l5": "Pakete",
        "srv.c3.v1": "1 – 3 araw ng negosyo", "srv.c3.v2": "Libre sa NT$ 2,800 pataas", "srv.c3.v3": "5 – 10 araw ng negosyo",
        "srv.c3.v4": "30 araw, walang abala", "srv.c3.v5": "100% biodegradable",
        "news.title": "Mga Liham mula sa Habilan",
        "news.text": "Buwanang mga kuwento mula sa mga manghahabi, mga behind-the-scenes mula sa mga bagong koleksyon, at unang pagkakataong makakuha ng mga limitadong release.",
        "news.btn": "Mag-subscribe",
        "news.ok": "Salamat. Pababalik na ang susunod na liham sa iyo. ✦",
        "footer.tag": "Tradisyon hinabi sa makabagong buhay.",
        "footer.addr": "Anlun Crafts Co., Ltd.<br>No. 88, Da'an Rd, Sec. 1<br>Da'an District, Taipei 106 · Taiwan",
        "footer.h1": "Tuklasin", "footer.h2": "Pangangalaga", "footer.h3": "Sundan Kami",
        "footer.l1": "Pagsasauli",
        "footer.rights": "© 2024 安倫 Crafts Co., Ltd. · 統一編號 12345678 · Lahat ng habi ay nakareserba.",
        "footer.respect": "Idinisenyo sa Taipei. Ginawa nang may paggalang sa mga Ifugao."
    }
};

// ============ LANGUAGE SWITCHING =============================
const langLabels = { en: 'EN', zh: '繁中', fil: 'FIL' };
const langButton = document.getElementById('langButton');
const langMenu = document.getElementById('langMenu');
const langLabel = document.getElementById('langLabel');

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    langLabel.textContent = langLabels[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : (lang === 'fil' ? 'fil' : 'en');
    localStorage.setItem('anlun-lang', lang);
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

langButton.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        applyLanguage(opt.dataset.lang);
        langMenu.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!langMenu.contains(e.target) && e.target !== langButton) {
        langMenu.classList.remove('open');
    }
});

const savedLang = localStorage.getItem('anlun-lang') || 'en';
applyLanguage(savedLang);

// ============ THEME TOGGLE ===================================
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('anlun-theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', next);
    localStorage.setItem('anlun-theme', next);
    // Refresh map tiles for theme change
    if (window.__originMap) {
        setTimeout(() => window.__originMap.invalidateSize(), 100);
    }
});

// ============ IMAGE GALLERY ==================================
function changeImage(productId, imageName) {
    const mainImage = document.getElementById(`${productId}-main`);
    if (!mainImage) return;
    const gallery = mainImage.closest('.product-gallery');
    const thumbnails = gallery.querySelectorAll('.thumbnail');

    mainImage.style.opacity = '0';
    setTimeout(() => {
        if (window.productImages && window.productImages[imageName]) {
            mainImage.src = window.productImages[imageName];
        } else {
            mainImage.src = `images/${imageName}.jpg`;
        }
        mainImage.style.opacity = '1';
    }, 220);

    thumbnails.forEach(t => t.classList.remove('active'));
    const clicked = Array.from(thumbnails).find(t =>
        t.src.includes(`${imageName}.jpg`) ||
        (window.productImages && t.src === window.productImages[imageName])
    );
    if (clicked) clicked.classList.add('active');
}

// ============ SMOOTH SCROLL ==================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            const offset = target.offsetTop - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    });
});

// ============ REVEAL ON SCROLL ===============================
const revealTargets = document.querySelectorAll(
    '.story-text, .story-image, .value-card, .product, .offer-card, .testimonial, .service-card, .newsletter, .origin-text, .origin-map-wrap'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealTargets.forEach(el => io.observe(el));

// ============ MAP ============================================
function initMap() {
    if (typeof L === 'undefined') return;
    const mapEl = document.getElementById('originMap');
    if (!mapEl || mapEl._leaflet_id) return;

    const banaue = [16.9197, 121.0584];
    const taipei = [25.0330, 121.5654];

    const map = L.map('originMap', {
        center: [21.0, 121.3],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: false
    });
    window.__originMap = map;

    // Beautiful subdued tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19
    }).addTo(map);

    // Custom icons
    const banaueIcon = L.divIcon({
        className: 'custom-pin pin-banaue',
        html: '<div class="pin-inner"><span class="pin-dot"></span><span class="pin-pulse"></span></div><div class="pin-label">Banaue · Ifugao</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    const taipeiIcon = L.divIcon({
        className: 'custom-pin pin-taipei',
        html: '<div class="pin-inner pin-inner-gold"><span class="pin-dot pin-dot-gold"></span><span class="pin-pulse pin-pulse-gold"></span></div><div class="pin-label">Taipei · Taiwan</div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    L.marker(banaue, { icon: banaueIcon }).addTo(map);
    L.marker(taipei, { icon: taipeiIcon }).addTo(map);

    // Beautiful dashed route line
    L.polyline([banaue, taipei], {
        color: '#a8602f',
        weight: 2.5,
        dashArray: '8 8',
        opacity: 0.85
    }).addTo(map);
}

if (document.readyState === 'complete') {
    initMap();
} else {
    window.addEventListener('load', initMap);
}

// ============ NEWSLETTER (mocked) ============================
function subscribeNewsletter(e) {
    e.preventDefault();
    const success = document.getElementById('newsletter-success');
    if (success) {
        success.classList.add('visible');
        e.target.reset();
        setTimeout(() => success.classList.remove('visible'), 6000);
    }
}

// ============ KEYBOARD =======================================
themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); themeToggle.click(); }
});

console.log('%c安倫 Crafts', 'font-family: serif; font-size: 28px; font-weight: 700; color: #a8602f;');
console.log('%cTradition woven into modern life.', 'font-family: serif; font-style: italic; font-size: 14px; color: #5a4a3c;');
