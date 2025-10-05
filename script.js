let selectedLanguage = 'english';

const translations = {
    english: {
        headerTitle: "Legal Rights Advisor",
        headerSubtitle: "Consumer & Business Owner Rights and Legal Access Platform",
        consumerHotline: "Consumer Right Hotline: 16121",
        policeHotline: "Emergency Police: 999",
        startTitle: "Advanced Legal Consultation System",
        startDescription: "Experience our cutting-edge HCI-based approach to understanding consumer and business owner rights. Our intelligent system will guide you through a comprehensive assessment to identify applicable laws for your specific situation.",
        startBtn: "Begin Legal Assessment",
        phaseIndicator: "Assessment Phase",
        backBtn: "Previous",
        nextBtn: "Next Question",
        finalBtn: "Get Final Result",
        loadingTitle: "Analyzing Your Legal Situation",
        loadingDesc: "Our advanced system is matching your responses with applicable laws...",
        resultTitle: "Final Legal Assessment",
        restartBtn: "Start New Assessment",
        recommendation: "Legal Recommendation",
        nextSteps: "Your Next Steps",
        recommendationText: "Based on your responses, this law is most applicable to your situation. We recommend consulting with a legal professional for detailed advice on how to proceed with your specific case. Keep all relevant documentation and evidence related to your consumer experience.",
        primaryLaw: "Primary Applicable Law",
        error: "Error",
        errorMsg: "Could not fetch prediction. Please try again later."
    },
    bangla: {
        headerTitle: "আইনি অধিকার পরামর্শদাতা",
        headerSubtitle: "ভোক্তা ও ব্যবসায়ী মালিক অধিকার এবং আইনি অ্যাক্সেস প্ল্যাটফর্ম",
        consumerHotline: "ভোক্তা অধিকার হটলাইন: ১৬১২১",
        policeHotline: "জরুরি পুলিশ হেল্পলাইন: ৯৯৯",
        startTitle: "উন্নত আইনি পরামর্শ ব্যবস্থা",
        startDescription: "ভোক্তা এবং ব্যবসায়ী মালিক অধিকার বোঝার জন্য আমাদের অত্যাধুনিক এইচসিআই-ভিত্তিক পদ্ধতির অভিজ্ঞতা নিন। আমাদের বুদ্ধিমান সিস্টেম আপনার নির্দিষ্ট পরিস্থিতির জন্য প্রযোজ্য আইন সনাক্ত করতে একটি ব্যাপক মূল্যায়নের মাধ্যমে আপনাকে গাইড করবে।",
        startBtn: "আইনি মূল্যায়ন শুরু করুন",
        phaseIndicator: "মূল্যায়ন পর্যায়",
        backBtn: "পূর্ববর্তী",
        nextBtn: "পরবর্তী প্রশ্ন",
        finalBtn: "চূড়ান্ত ফলাফল পান",
        loadingTitle: "আপনার আইনি পরিস্থিতি বিশ্লেষণ করা হচ্ছে",
        loadingDesc: "আমাদের উন্নত সিস্টেম প্রযোজ্য আইনের সাথে আপনার প্রতিক্রিয়াগুলি মিলিয়ে দিচ্ছে...",
        resultTitle: "চূড়ান্ত আইনি মূল্যায়ন",
        restartBtn: "নতুন মূল্যায়ন শুরু করুন",
        recommendation: "আইনি সুপারিশ",
        nextSteps: "আপনার পরবর্তী পদক্ষেপ",
        recommendationText: "আপনার প্রতিক্রিয়ার ভিত্তিতে, এই আইনটি আপনার পরিস্থিতিতে সবচেয়ে প্রযোজ্য। আমরা আপনার নির্দিষ্ট মামলা নিয়ে কীভাবে এগিয়ে যেতে হবে সে সম্পর্কে বিস্তারিত পরামর্শের জন্য একজন আইন পেশাদারের সাথে পরামর্শ করার সুপারিশ করি। আপনার ভোক্তা অভিজ্ঞতা সম্পর্কিত সমস্ত প্রাসঙ্গিক ডকুমেন্টেশন এবং প্রমাণ রাখুন।",
        primaryLaw: "প্রাথমিক প্রযোজ্য আইন",
        error: "ত্রুটি",
        errorMsg: "পূর্বাভাস আনা যায়নি। পরে আবার চেষ্টা করুন।"
    }
};

const questionsData = {
    english: [
        { text: "Did you check if the product you bought has an expiration date listed?", options: ["Yes", "No"], key: "checkExpiry" },
        { text: "When you noticed that the expiration date was missing, did you ask the seller to change the product?", options: ["Yes", "No"], key: "askChange" },
        { text: "If the seller refused to change the product, did you report the issue?", options: ["Yes", "No"], key: "reportIssue" },
        { text: "Did the seller provide the correct product as advertised or did they try to deceive you with a different one?", options: ["Yes", "No"], key: "correctProduct" },
        { text: "Was the product label clear with all the necessary details (ingredients, weight, instructions, etc.)?", options: ["Yes", "No"], key: "clearLabel" },
        { text: "Did the seller advertise the product with misleading claims or incorrect information?", options: ["Yes", "No"], key: "misleadingAds" },
        { text: "Did you notice any discrepancies in the product's weight or measurements during the transaction?", options: ["Yes", "No"], key: "weightDiscrepancy" },
        { text: "Were you charged more than the displayed price or the official price for the product?", options: ["Yes", "No"], key: "overcharged" },
        { text: "Did you find any harm in the product (e.g., unsafe ingredients, counterfeit materials, etc.)?", options: ["Yes", "No"], key: "harmfulProduct" },
        { text: "Did the seller take responsibility for the issue and attempt to resolve it properly?", options: ["Yes", "No"], key: "sellerResponsibility" },
        { text: "After you realized there was an issue (such as missing expiration date, false advertisement, or overcharging), did you take any action such as requesting a refund or replacement?", options: ["Yes", "No"], key: "tookAction" },
        { text: "Did the seller resolve the issue to your satisfaction (e.g., by providing a refund, replacement, or compensation)?", options: ["Yes", "No"], key: "issueResolved" },
        { text: "Did the product have a clear expiration date, ingredients list, and proper labeling?", options: ["Yes", "No"], key: "properLabeling" },
        { text: "Was the product counterfeit or did it have misleading weight/measurement?", options: ["Yes", "No"], key: "counterfeit" },
        { text: "Did the product contain any harmful materials or substances that could affect health or safety?", options: ["Yes", "No"], key: "harmfulSubstances" }
    ],
    bangla: [
        { text: "আপনি কি আপনার কেনা পণ্যে মেয়াদ শেষ হওয়ার তারিখ আছে কিনা তা পরীক্ষা করেছেন?", options: ["হ্যাঁ", "না"], key: "checkExpiry" },
        { text: "যখন আপনি লক্ষ্য করেছেন যে মেয়াদ শেষ হওয়ার তারিখ নেই, তখন আপনি কি বিক্রেতাকে পণ্যটি পরিবর্তন করতে বলেছিলেন?", options: ["হ্যাঁ", "না"], key: "askChange" },
        { text: "বিক্রেতা পণ্যটি পরিবর্তন করতে অস্বীকার করলে, আপনি কি সমস্যাটি রিপোর্ট করেছেন?", options: ["হ্যাঁ", "না"], key: "reportIssue" },
        { text: "বিক্রেতা কি বিজ্ঞাপন অনুযায়ী সঠিক পণ্য সরবরাহ করেছেন নাকি একটি ভিন্ন পণ্য দিয়ে আপনাকে প্রতারিত করার চেষ্টা করেছেন?", options: ["হ্যাঁ", "না"], key: "correctProduct" },
        { text: "পণ্যের লেবেল কি সমস্ত প্রয়োজনীয় বিবরণ (উপাদান, ওজন, নির্দেশাবলী ইত্যাদি) সহ স্পষ্ট ছিল?", options: ["হ্যাঁ", "না"], key: "clearLabel" },
        { text: "বিক্রেতা কি বিভ্রান্তিকর দাবি বা ভুল তথ্য সহ পণ্যটির বিজ্ঞাপন দিয়েছিলেন?", options: ["হ্যাঁ", "না"], key: "misleadingAds" },
        { text: "লেনদেনের সময় আপনি কি পণ্যের ওজন বা পরিমাপে কোনো অসঙ্গতি লক্ষ্য করেছেন?", options: ["হ্যাঁ", "না"], key: "weightDiscrepancy" },
        { text: "আপনাকে কি প্রদর্শিত মূল্য বা পণ্যের জন্য সরকারী মূল্যের চেয়ে বেশি চার্জ করা হয়েছিল?", options: ["হ্যাঁ", "না"], key: "overcharged" },
        { text: "আপনি কি পণ্যটিতে কোনো ক্ষতি খুঁজে পেয়েছেন (যেমন, অনিরাপদ উপাদান, জাল উপাদান ইত্যাদি)?", options: ["হ্যাঁ", "না"], key: "harmfulProduct" },
        { text: "বিক্রেতা কি সমস্যার দায়িত্ব নিয়েছেন এবং এটি সঠিকভাবে সমাধান করার চেষ্টা করেছেন?", options: ["হ্যাঁ", "না"], key: "sellerResponsibility" },
        { text: "আপনি যখন বুঝতে পারলেন যে একটি সমস্যা রয়েছে (যেমন মেয়াদ শেষ হওয়ার তারিখ নেই, মিথ্যা বিজ্ঞাপন, বা বেশি চার্জ), আপনি কি কোনো পদক্ষেপ নিয়েছিলেন যেমন রিফান্ড বা প্রতিস্থাপনের অনুরোধ করা?", options: ["হ্যাঁ", "না"], key: "tookAction" },
        { text: "বিক্রেতা কি আপনার সন্তুষ্টির জন্য সমস্যাটি সমাধান করেছেন (যেমন রিফান্ড, প্রতিস্থাপন বা ক্ষতিপূরণ প্রদান করে)?", options: ["হ্যাঁ", "না"], key: "issueResolved" },
        { text: "পণ্যটিতে কি একটি স্পষ্ট মেয়াদ শেষ হওয়ার তারিখ, উপাদান তালিকা এবং সঠিক লেবেলিং ছিল?", options: ["হ্যাঁ", "না"], key: "properLabeling" },
        { text: "পণ্যটি কি জাল ছিল বা এটির ভুল ওজন/পরিমাপ ছিল?", options: ["হ্যাঁ", "না"], key: "counterfeit" },
        { text: "পণ্যটিতে কি কোনো ক্ষতিকারক উপাদান বা পদার্থ রয়েছে যা স্বাস্থ্য বা নিরাপত্তা প্রভাবিত করতে পারে?", options: ["হ্যাঁ", "না"], key: "harmfulSubstances" }
    ]
};

const laws = {
    english: {
        1: {
            title: "Punishment for not using cover of goods etc.",
            content: "If any person violates any obligation, imposed by any Act or rules, of selling any goods within cover and inscribing weight, amount, ingredients, instructions for use, maximum retail price, date of manufacture, date of packaging and date of expiry of that goods on the label, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        2: {
            title: "Punishment for not showing price-list",
            content: "If any person violates any obligation, imposed by any Act or rules, of displaying the price-list of goods by affixing it at a conspicuous place of his shop or organization, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        3: {
            title: "Punishment for not preserving and displaying price-list of services",
            content: "If any person violates the obligation, imposed under any Act or rules, of preserving price-list of service of his shop or organization and displaying it by affixing at a relevant or conspicuous place, he shall be punished with imprisonment for a term not exceeding 1 (one) year or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        4: {
            title: "Punishment for selling goods, medicine or service at higher price than fixed one",
            content: "If any person sells or offers to sell any goods, medicine or service at a price higher than the price fixed under any Act or rules, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        5: {
            title: "Punishment for selling adulterated goods or medicine",
            content: "If any person knowingly sells or offers to sell any adulterated goods or medicine, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        6: {
            title: "Punishment for mixing prohibited materials in foodstuff",
            content: "If any person mixes with foodstuff any ingredient which is injurious to human life or health and the mixing of which with foodstuff is prohibited by any Act or rules, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        7: {
            title: "Punishment for manufacturing or processing goods in illegal process",
            content: "If any person manufactures or processes any goods in a process which is injurious to human life or health and prohibited under any Act or rules, he shall be punished with imprisonment for a term not exceeding 2 (two) years, or with fine not exceeding Taka 1 (one) lac, or with both."
        },
        8: {
            title: "Punishment for deceiving buyers by false advertisement",
            content: "If any person deceives any buyer by any false or untrue advertisement for the purpose of selling any goods or service, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        9: {
            title: "Punishment for not selling or delivering properly any goods or service promised",
            content: "If any person does not sell or deliver properly any goods or service promised in consideration of money, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        10: {
            title: "Punishment for deceiving in weight",
            content: "If any person sells or supplies any goods to consumer less than the offered weight, at the time of supplying or selling, he shall be punished with imprisonment for not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        11: {
            title: "Punishment for deceiving in measurement",
            content: "If any person sells or delivers any goods to the consumer less than the offered measurement at the time of delivering or selling, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        12: {
            title: "Punishment for deceiving in measuring gauge or anything used for measuring length",
            content: "If any fraud is committed in measuring gauge or anything used for measuring length in selling or delivering goods in any shop or commercial organization of any person, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        13: {
            title: "Punishment for making or manufacturing fake goods",
            content: "If any person makes or manufactures fake goods, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        14: {
            title: "Punishment for selling any date expired goods or medicine",
            content: "If any person sells or offers to sell any date expired goods or medicine, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        15: {
            title: "Punishment for doing any act detrimental to life or security of service receiver",
            content: "If any person, in violation of any prohibition imposed under any Act or rules, does any act which is detrimental to the life or security of any service receiver, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        16: {
            title: "Punishment for damaging money, health or life etc. of service receiver by negligence etc.",
            content: "If any service provider, by negligence, irresponsibility or carelessness, damaging money, health or life of a service receiver, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
        },
        17: {
            title: "Punishment for filing false or vexatious cases",
            content: "If any person, with a motive to harass any person, businessman or service provider or to defame him publicly or to damage his business reputation, files any false or vexatious case, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
        },
        18: {
            title: "Punishment for reoccurring offence",
            content: "If any person convicted of any offence mentioned in this Act does the same offence again, he shall be punished with twice the maximum punishment provided for that offence."
        },
        19: {
            title: "Confiscation, etc.",
            content: "If the court thinks fit, it may, in addition to the punishment provided in the foregoing sections of this Chapter, pass an order to forfeit the illegal goods of manufacturing ingredients, materials etc. related to the offence in favour of the State."
        }
    },
    bangla: {
        1: {
            title: "পণ্যের আবরণ ব্যবহার না করার শাস্তি",
            content: "যদি কোনো ব্যক্তি কোনো পণ্য আবরণের মধ্যে বিক্রয় এবং সেই পণ্যের লেবেলে ওজন, পরিমাণ, উপাদান, ব্যবহারের নির্দেশাবলী, সর্বোচ্চ খুচরা মূল্য, উৎপাদনের তারিখ, প্যাকেজিংয়ের তারিখ এবং মেয়াদ শেষ হওয়ার তারিখ লিখার বাধ্যবাধকতা লঙ্ঘন করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        2: {
            title: "মূল্য তালিকা প্রদর্শন না করার শাস্তি",
            content: "যদি কোনো ব্যক্তি তার দোকান বা প্রতিষ্ঠানের সুস্পষ্ট স্থানে পণ্যের মূল্য তালিকা প্রদর্শন করার বাধ্যবাধকতা লঙ্ঘন করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        3: {
            title: "সেবার মূল্য তালিকা সংরক্ষণ ও প্রদর্শন না করার শাস্তি",
            content: "যদি কোনো ব্যক্তি তার দোকান বা প্রতিষ্ঠানের সেবার মূল্য তালিকা সংরক্ষণ এবং প্রাসঙ্গিক বা সুস্পষ্ট স্থানে প্রদর্শন করার বাধ্যবাধকতা লঙ্ঘন করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        4: {
            title: "নির্ধারিত মূল্যের চেয়ে বেশি মূল্যে পণ্য, ওষুধ বা সেবা বিক্রয়ের শাস্তি",
            content: "যদি কোনো ব্যক্তি নির্ধারিত মূল্যের চেয়ে বেশি মূল্যে কোনো পণ্য, ওষুধ বা সেবা বিক্রয় বা বিক্রয়ের প্রস্তাব করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        5: {
            title: "ভেজাল পণ্য বা ওষুধ বিক্রয়ের শাস্তি",
            content: "যদি কোনো ব্যক্তি জেনেশুনে কোনো ভেজাল পণ্য বা ওষুধ বিক্রয় বা বিক্রয়ের প্রস্তাব করেন, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        6: {
            title: "খাদ্যদ্রব্যে নিষিদ্ধ উপাদান মেশানোর শাস্তি",
            content: "যদি কোনো ব্যক্তি খাদ্যদ্রব্যে এমন কোনো উপাদান মেশান যা মানব জীবন বা স্বাস্থ্যের জন্য ক্ষতিকর এবং যার মিশ্রণ নিষিদ্ধ, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        7: {
            title: "অবৈধ প্রক্রিয়ায় পণ্য উৎপাদন বা প্রক্রিয়াকরণের শাস্তি",
            content: "যদি কোনো ব্যক্তি এমন কোনো প্রক্রিয়ায় পণ্য উৎপাদন বা প্রক্রিয়াকরণ করেন যা মানব জীবন বা স্বাস্থ্যের জন্য ক্ষতিকর এবং নিষিদ্ধ, তবে তিনি ২ (দুই) বছরের কারাদণ্ড বা ১ (এক) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        8: {
            title: "মিথ্যা বিজ্ঞাপনের মাধ্যমে ক্রেতাকে প্রতারণার শাস্তি",
            content: "যদি কোনো ব্যক্তি পণ্য বা সেবা বিক্রয়ের উদ্দেশ্যে মিথ্যা বা অসত্য বিজ্ঞাপনের মাধ্যমে ক্রেতাকে প্রতারিত করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        9: {
            title: "প্রতিশ্রুত পণ্য বা সেবা সঠিকভাবে বিক্রয় বা সরবরাহ না করার শাস্তি",
            content: "যদি কোনো ব্যক্তি অর্থের বিনিময়ে প্রতিশ্রুত পণ্য বা সেবা সঠিকভাবে বিক্রয় বা সরবরাহ না করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        10: {
            title: "ওজনে প্রতারণার শাস্তি",
            content: "যদি কোনো ব্যক্তি বিক্রয় বা সরবরাহের সময় প্রস্তাবিত ওজনের চেয়ে কম ওজনে ভোক্তাকে পণ্য বিক্রয় বা সরবরাহ করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        11: {
            title: "পরিমাপে প্রতারণার শাস্তি",
            content: "যদি কোনো ব্যক্তি বিক্রয় বা সরবরাহের সময় প্রস্তাবিত পরিমাপের চেয়ে কম পরিমাপে ভোক্তাকে পণ্য বিক্রয় বা সরবরাহ করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        12: {
            title: "পরিমাপক যন্ত্রে প্রতারণার শাস্তি",
            content: "যদি কোনো ব্যক্তির দোকান বা বাণিজ্যিক প্রতিষ্ঠানে পণ্য বিক্রয় বা সরবরাহের সময় পরিমাপক যন্ত্রে কোনো প্রতারণা সংঘটিত হয়, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        13: {
            title: "নকল পণ্য তৈরি বা উৎপাদনের শাস্তি",
            content: "যদি কোনো ব্যক্তি নকল পণ্য তৈরি বা উৎপাদন করেন, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        14: {
            title: "মেয়াদোত্তীর্ণ পণ্য বা ওষুধ বিক্রয়ের শাস্তি",
            content: "যদি কোনো ব্যক্তি মেয়াদোত্তীর্ণ পণ্য বা ওষুধ বিক্রয় বা বিক্রয়ের প্রস্তাব করেন, তবে তিনি ১ (এক) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        15: {
            title: "সেবা গ্রহীতার জীবন বা নিরাপত্তার জন্য ক্ষতিকর কাজ করার শাস্তি",
            content: "যদি কোনো ব্যক্তি নিষেধাজ্ঞা লঙ্ঘন করে সেবা গ্রহীতার জীবন বা নিরাপত্তার জন্য ক্ষতিকর কোনো কাজ করেন, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        16: {
            title: "অবহেলার মাধ্যমে সেবা গ্রহীতার অর্থ, স্বাস্থ্য বা জীবনের ক্ষতির শাস্তি",
            content: "যদি কোনো সেবা প্রদানকারী অবহেলা, দায়িত্বহীনতা বা অসাবধানতার মাধ্যমে সেবা গ্রহীতার অর্থ, স্বাস্থ্য বা জীবনের ক্ষতি করেন, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ২ (দুই) লাখ টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        17: {
            title: "মিথ্যা বা উত্ত্যক্তকর মামলা দায়েরের শাস্তি",
            content: "যদি কোনো ব্যক্তি কোনো ব্যক্তি, ব্যবসায়ী বা সেবা প্রদানকারীকে হয়রানি করার বা প্রকাশ্যে তাকে অসম্মান করার বা তার ব্যবসায়িক সুনাম ক্ষুণ্ন করার উদ্দেশ্যে মিথ্যা বা উত্ত্যক্তকর মামলা দায়ের করেন, তবে তিনি ৩ (তিন) বছরের কারাদণ্ড বা ৫০ (পঞ্চাশ) হাজার টাকা পর্যন্ত অর্থদণ্ড, অথবা উভয় দণ্ডে দণ্ডিত হবেন।"
        },
        18: {
            title: "পুনরাবৃত্ত অপরাধের শাস্তি",
            content: "যদি এই আইনে উল্লিখিত কোনো অপরাধের জন্য দোষী সাব্যস্ত কোনো ব্যক্তি পুনরায় একই অপরাধ করেন, তবে তিনি সেই অপরাধের জন্য নির্ধারিত সর্বোচ্চ শাস্তির দ্বিগুণ শাস্তিতে দণ্ডিত হবেন।"
        },
        19: {
            title: "বাজেয়াপ্তকরণ ইত্যাদি",
            content: "আদালত যদি উপযুক্ত মনে করেন, তবে এই অধ্যায়ের পূর্ববর্তী ধারাগুলিতে প্রদত্ত শাস্তির অতিরিক্ত হিসাবে, অপরাধের সাথে সম্পর্কিত অবৈধ পণ্য, উৎপাদন উপাদান, সামগ্রী ইত্যাদি রাষ্ট্রের অনুকূলে বাজেয়াপ্ত করার আদেশ দিতে পারেন।"
        }
    }
};

let currentQuestion = 0;
let answers = {};
let selectedOption = null;

function selectLanguage(language) {
    selectedLanguage = language;
    
    // Update language selector buttons
    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Update all text content
    updateLanguage();
}

function updateLanguage() {
    const t = translations[selectedLanguage];
    
    document.getElementById('headerTitle').textContent = t.headerTitle;
    document.getElementById('headerSubtitle').textContent = t.headerSubtitle;
    document.getElementById('consumerHotline').textContent = t.consumerHotline;
    document.getElementById('policeHotline').textContent = t.policeHotline;
    document.getElementById('startTitle').textContent = t.startTitle;
    document.getElementById('startDescription').textContent = t.startDescription;
    document.getElementById('startBtn').textContent = t.startBtn;
    document.getElementById('phaseIndicator').textContent = t.phaseIndicator;
    document.getElementById('backBtn').textContent = t.backBtn;
    document.getElementById('loadingTitle').textContent = t.loadingTitle;
    document.getElementById('loadingDesc').textContent = t.loadingDesc;
    document.getElementById('resultTitle').textContent = t.resultTitle;
    document.getElementById('restartBtn').textContent = t.restartBtn;
}

function startQuestions() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';
    document.querySelector('.question-container').classList.add('fade-in');
    showQuestion();
}

function showQuestion() {
    const currentQuestions = questionsData[selectedLanguage];
    const question = currentQuestions[currentQuestion];
    const totalQuestions = 15;
    const questionNum = currentQuestion + 1;
    
    const t = translations[selectedLanguage];
    
    document.getElementById('questionNumber').textContent = selectedLanguage === 'english' ? `Question ${questionNum}` : `প্রশ্ন ${questionNum}`;
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('progressText').textContent = selectedLanguage === 'english' ? `Question ${questionNum} of ${totalQuestions}` : `প্রশ্ন ${questionNum} এর ${totalQuestions}`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index, option, optionElement);
        optionsContainer.appendChild(optionElement);
    });

    // Update progress
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress').style.width = progress + '%';

    // Show/hide back button
    document.getElementById('backBtn').style.display = currentQuestion > 0 ? 'inline-block' : 'none';
    
    selectedOption = null;
    document.getElementById('nextBtn').disabled = true;
    
    // Update button text
    if (currentQuestion === 14) {
        document.getElementById('nextBtn').textContent = t.finalBtn;
    } else {
        document.getElementById('nextBtn').textContent = t.nextBtn;
    }
}

function selectOption(index, value, element) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Highlight selected option
    element.classList.add('selected');

    selectedOption = value;
    const currentQuestions = questionsData[selectedLanguage];
    answers[currentQuestions[currentQuestion].key] = value;
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (selectedOption === null) return;

    currentQuestion++;
    
    if (currentQuestion >= 15) {
        // Show final result after all 15 questions
        showLoading();
        setTimeout(() => {
            showFinalResult();
        }, 2000);
    } else {
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        
        // Restore previous selection if exists
        const currentQuestions = questionsData[selectedLanguage];
        const previousAnswer = answers[currentQuestions[currentQuestion].key];
        if (previousAnswer) {
            const optionIndex = currentQuestions[currentQuestion].options.indexOf(previousAnswer);
            if (optionIndex !== -1) {
                const optionElement = document.querySelectorAll('.option')[optionIndex];
                selectOption(optionIndex, previousAnswer, optionElement);
            }
        }
    }
}

function showLoading() {
    document.querySelector('.question-container').style.display = 'none';
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.loading').classList.add('fade-in');
}

async function showFinalResult() {
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.result-container').style.display = 'block';
    document.querySelector('.result-container').classList.add('fade-in');

    const t = translations[selectedLanguage];

    // ✅ Normalize answers to English for API
    const normalizedAnswers = {};
    Object.keys(answers).forEach(key => {
        const value = answers[key];
        // Convert Bangla answers to English
        if (value === 'হ্যাঁ') {
            normalizedAnswers[key] = 'Yes';
        } else if (value === 'না') {
            normalizedAnswers[key] = 'No';
        } else {
            normalizedAnswers[key] = value;
        }
    });

    // ✅ Use the global "answers" object that was filled during questions
    const payload = { answers: normalizedAnswers };

    try {
        // Call FastAPI backend
        const response = await fetch("https://consumer-rights.onrender.com/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        const finalLaw = data.predicted_law;  // returned from FastAPI

        document.getElementById('resultTitle').textContent = t.resultTitle;
        document.getElementById('restartBtn').style.display = 'inline-block';

        const resultContainer = document.getElementById('lawResult');
        resultContainer.innerHTML = '';

        const law = laws[selectedLanguage][finalLaw];
        if (law) {
            const lawBox = document.createElement('div');
            lawBox.className = 'law-box';
            lawBox.innerHTML = `
                <div class="law-number">${t.primaryLaw} ${finalLaw}</div>
                <div class="law-title">${law.title}</div>
                <div class="law-content">${law.content}</div>
            `;
            resultContainer.appendChild(lawBox);

            // Add recommendation section
            const recommendationBox = document.createElement('div');
            recommendationBox.className = 'law-box';
            recommendationBox.style.borderLeft = '6px solid #27ae60';
            recommendationBox.innerHTML = `
                <div class="law-number" style="background: linear-gradient(135deg, #27ae60, #2ecc71);">${t.recommendation}</div>
                <div class="law-title">${t.nextSteps}</div>
                <div class="law-content">${t.recommendationText.replace('this law', selectedLanguage === 'english' ? `Law ${finalLaw}` : `আইন ${finalLaw}`)}</div>
            `;
            resultContainer.appendChild(recommendationBox);
        }

    } catch (error) {
        console.error("Error fetching prediction:", error);
        document.getElementById('lawResult').innerHTML = `
            <div class="law-box" style="border-left: 6px solid red;">
                <div class="law-title">${t.error}</div>
                <div class="law-content">${t.errorMsg}</div>
            </div>
        `;
    }
}

function restart() {
    currentQuestion = 0;
    answers = {};
    selectedOption = null;
    
    document.querySelector('.result-container').style.display = 'none';
    document.querySelector('.start-screen').style.display = 'block';
    document.getElementById('progress').style.width = '0%';
}