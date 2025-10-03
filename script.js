
        let selectedLanguage = 'english';

        const translations = {
            english: {
                headerTitle: "Legal Rights Advisor",
                headerSubtitle: "Consumer & Business Owner Rights and Legal Access Platform",
                consumerHotline: "Consumer Right Hotline: 16121",
                policeHotline: "Emergency Police: 999",
                startTitle: "Advanced Legal Consultation System",
                startDescription: "Experience our cutting-edge HCI-based approach to understanding consumer and business owner rights. Our intelligent system will guide you through a comprehensive assessment to identify applicable laws for your specific situation.",
                feature1Title: "Precise Law Matching",
                feature1Desc: "Advanced algorithm matches your responses to specific legal frameworks",
                feature2Title: "Interactive Interface",
                feature2Desc: "User-friendly design optimized for seamless legal consultation experience",
                feature3Title: "Instant Analysis",
                feature3Desc: "Get immediate insights into your legal rights and applicable regulations",
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
                recommendationText: "Based on your responses, this law is most applicable to your situation. We recommend consulting with a legal professional for detailed advice on how to proceed with your specific case. Keep all relevant documentation and evidence related to your consumer experience."
            },
            bangla: {
                headerTitle: "আইনি অধিকার পরামর্শদাতা",
                headerSubtitle: "ভোক্তা ও ব্যবসায়ী মালিক অধিকার এবং আইনি অ্যাক্সেস প্ল্যাটফর্ম",
                consumerHotline: "ভোক্তা অধিকার হটলাইন: ১৬১২১",
                policeHotline: "জরুরি পুলিশ হেল্পলাইন: ৯৯৯",
                startTitle: "উন্নত আইনি পরামর্শ ব্যবস্থা",
                startDescription: "ভোক্তা এবং ব্যবসায়ী মালিক অধিকার বোঝার জন্য আমাদের অত্যাধুনিক এইচসিআই-ভিত্তিক পদ্ধতির অভিজ্ঞতা নিন। আমাদের বুদ্ধিমান সিস্টেম আপনার নির্দিষ্ট পরিস্থিতির জন্য প্রযোজ্য আইন সনাক্ত করতে একটি ব্যাপক মূল্যায়নের মাধ্যমে আপনাকে গাইড করবে।",
                feature1Title: "সুনির্দিষ্ট আইন মিলান",
                feature1Desc: "উন্নত অ্যালগরিদম আপনার প্রতিক্রিয়াগুলিকে নির্দিষ্ট আইনি কাঠামোর সাথে মেলায়",
                feature2Title: "ইন্টারেক্টিভ ইন্টারফেস",
                feature2Desc: "নিরবচ্ছিন্ন আইনি পরামর্শ অভিজ্ঞতার জন্য ব্যবহারকারী-বান্ধব ডিজাইন",
                feature3Title: "তাৎক্ষণিক বিশ্লেষণ",
                feature3Desc: "আপনার আইনি অধিকার এবং প্রযোজ্য প্রবিধান সম্পর্কে তাৎক্ষণিক অন্তর্দৃষ্টি পান",
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
                recommendationText: "আপনার প্রতিক্রিয়ার ভিত্তিতে, এই আইনটি আপনার পরিস্থিতিতে সবচেয়ে প্রযোজ্য। আমরা আপনার নির্দিষ্ট মামলা নিয়ে কীভাবে এগিয়ে যেতে হবে সে সম্পর্কে বিস্তারিত পরামর্শের জন্য একজন আইন পেশাদারের সাথে পরামর্শ করার সুপারিশ করি। আপনার ভোক্তা অভিজ্ঞতা সম্পর্কিত সমস্ত প্রাসঙ্গিক ডকুমেন্টেশন এবং প্রমাণ রাখুন।"
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

        // const questions = questionsData.english; could affect health or safety?",
        //         options: ["Yes", "No"],
        //         key: "harmfulSubstances"
        //     }
        // ];

        const laws = {
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
            // document.getElementById('feature1Title').textContent = t.feature1Title;
            // document.getElementById('feature1Desc').textContent = t.feature1Desc;
            // document.getElementById('feature2Title').textContent = t.feature2Title;
            // document.getElementById('feature2Desc').textContent = t.feature2Desc;
            // document.getElementById('feature3Title').textContent = t.feature3Title;
            // document.getElementById('feature3Desc').textContent = t.feature3Desc;
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

        function calculateFinalResult() {
            // Determine the single most applicable law based on all 15 questions
            let lawScores = {};

            // Score each law based on answers
            Object.keys(laws).forEach(lawNum => {
                lawScores[lawNum] = 0;
            });

            // Normalize answers for both languages
            const yesAnswers = selectedLanguage === 'english' ? 'Yes' : 'হ্যাঁ';
            const noAnswers = selectedLanguage === 'english' ? 'No' : 'না';

            // Scoring logic based on specific answer patterns
            if (answers.checkExpiry === noAnswers || answers.properLabeling === noAnswers) lawScores[1] += 3;
            if (answers.overcharged === yesAnswers) lawScores[4] += 3;
            if (answers.misleadingAds === yesAnswers) lawScores[8] += 3;
            if (answers.weightDiscrepancy === yesAnswers) lawScores[10] += 3;
            if (answers.counterfeit === yesAnswers) lawScores[13] += 3;
            if (answers.harmfulProduct === yesAnswers || answers.harmfulSubstances === yesAnswers) lawScores[5] += 3;
            if (answers.correctProduct === noAnswers) lawScores[9] += 2;
            if (answers.clearLabel === noAnswers) lawScores[1] += 2;
            if (answers.sellerResponsibility === noAnswers) lawScores[16] += 2;
            if (answers.issueResolved === noAnswers) lawScores[17] += 1;
            if (answers.askChange === yesAnswers && answers.reportIssue === yesAnswers) lawScores[14] += 2;

            // Find the law with highest score
            let maxScore = 0;
            let finalLaw = 1;
            
            Object.keys(lawScores).forEach(lawNum => {
                if (lawScores[lawNum] > maxScore) {
                    maxScore = lawScores[lawNum];
                    finalLaw = parseInt(lawNum);
                }
            });

            return finalLaw;
        }

        function showFinalResult() {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';
            document.querySelector('.result-container').classList.add('fade-in');

            const finalLaw = calculateFinalResult();
            const t = translations[selectedLanguage];
            
            document.getElementById('resultTitle').textContent = t.resultTitle;

            const resultContainer = document.getElementById('lawResult');
            resultContainer.innerHTML = '';

            const law = laws[finalLaw];
            if (law) {
                const lawBox = document.createElement('div');
                lawBox.className = 'law-box';
                lawBox.innerHTML = `
                    <div class="law-number">${selectedLanguage === 'english' ? `Primary Applicable Law ${finalLaw}` : `প্রাথমিক প্রযোজ্য আইন ${finalLaw}`}</div>
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
        }

        function restart() {
            currentQuestion = 0;
            answers = {};
            selectedOption = null;
            
            document.querySelector('.result-container').style.display = 'none';
            document.querySelector('.start-screen').style.display = 'block';
            document.getElementById('progress').style.width = '0%';
        }
    
