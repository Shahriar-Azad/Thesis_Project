
        const questions = [
            {
                text: "What is your age group?",
                options: ["18-22", "23-27", "28-32", "33-37", "38-42", "43-50"],
                key: "age"
            },
            {
                text: "What is your gender?",
                options: ["Male", "Female"],
                key: "gender"
            },
            {
                text: "What is your highest level of education?",
                options: ["HSC", "Bachelor degree", "Masters", "Others"],
                key: "education"
            },
            {
                text: "Do you check the expiry date on products?",
                options: ["Yes", "No"],
                key: "checkExpiry"
            },
            {
                text: "Do you see product's price list displayed at shops or service provider's place?",
                options: ["Yes", "No", "Not sure"],
                key: "priceListDisplayed"
            },
            {
                text: "If a seller sells you an expired product, what step do you take?",
                options: ["The product should be replaced", "The seller should be fined or punished", "Nothing, it's a minor issue", "Don't know"],
                key: "expiredProductAction"
            },
            {
                text: "Are you aware that selling products without proper labeling (e.g. weight, ingredients, price) is a punishable offense?",
                options: ["Yes", "No"],
                key: "labelingAwareness"
            },
            {
                text: "Have you ever received a product or service that was different from what was promised or advertised?",
                options: ["Yes", "No"],
                key: "falseAdvertising"
            },
            {
                text: "If a shopkeeper uses a fake weight scale to deceive customers, do you know about the law of this offense?",
                options: ["Yes", "No"],
                key: "weightDeceptionLaw"
            },
            {
                text: "Have you ever sold fake or adulterated products?",
                options: ["Yes", "No"],
                key: "soldFakeProducts"
            },
            {
                text: "Have you ever complained or thought about complaining against a business for fraud or cheating?",
                options: ["Yes, I have", "I thought about it but didn't", "No, never"],
                key: "complainedFraud"
            },
            {
                text: "Do you believe most people in your community are aware of their consumer rights under the law?",
                options: ["Yes", "No"],
                key: "communityAwareness"
            },
            {
                text: "Would you use a mobile app or website to report consumer fraud or check legal information if it were easy to use?",
                options: ["Yes", "Maybe", "No"],
                key: "useApp"
            },
            {
                text: "Have you ever been cheated or overcharged while buying something?",
                options: ["Yes", "No"],
                key: "overcharged"
            },
            {
                text: "Are you aware of punishment for manufacturing or processing goods in an illegal process?",
                options: ["Yes", "No"],
                key: "illegalProcessAwareness"
            },
            {
                text: "Have you ever been mistreated, harassed or falsely accused by seller or buyer?",
                options: ["Yes", "No"],
                key: "mistreated"
            },
            {
                text: "What do you do if you face a problem with a seller?",
                options: ["Don't know what to do", "Nothing", "Take legal action"],
                key: "sellerProblemAction"
            },
            {
                text: "Why don't you complain if you face unfair treatment?",
                options: ["Think it's a waste of time", "Fear of trouble", "No big loss", "No trust in legal help"],
                key: "noComplaintReason"
            },
            {
                text: "Have you ever asked for a refund or return?",
                options: ["Yes but the shop refused", "Yes and I got it", "Never"],
                key: "refundExperience"
            }
        ];

        const laws = {
            1: {
                title: "Punishment for not using cover of goods etc.",
                content: "If any person violates any obligation, imposed by any Act or rules, of selling any goods within cover and inscribing weight, amount, ingredients, instructions for use, maximum retail price, date of manufacture, date of packaging and date of expiry of that goods on the label, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            },
            2: {
                title: "Punishment for not showing price-list",
                content: "If any person violates any obligation, imposed by any Act or rules, of displaying the price-list of goods by affixing it at a conspicuous place of his shop or organization, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            },
            4: {
                title: "Punishment for selling goods, medicine or service at higher price than fixed one",
                content: "If any person sells or offers to sell any goods, medicine or service at a price higher than the price fixed under any Act or rules, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            },
            5: {
                title: "Punishment for selling adulterated goods or medicine",
                content: "If any person knowingly sells or offers to sell any adulterated goods or medicine, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
            },
            8: {
                title: "Punishment for deceiving buyers by false advertisement",
                content: "If any person deceives any buyer by any false or untrue advertisement for the purpose of selling any goods or service, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 2 (two) lacs, or with both."
            },
            10: {
                title: "Punishment for deceiving in weight",
                content: "If any person sells or supplies any goods to consumer less than the offered weight, at the time of supplying or selling, he shall be punished with imprisonment for not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            },
            13: {
                title: "Punishment for making or manufacturing fake goods",
                content: "If any person makes or manufactures fake goods, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 2 (two) lacs, or with both."
            },
            14: {
                title: "Punishment for selling any date expired goods or medicine",
                content: "If any person sells or offers to sell any date expired goods or medicine, he shall be punished with imprisonment for a term not exceeding 1 (one) year, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            },
            17: {
                title: "Punishment for filing false or vexatious cases",
                content: "If any person, with a motive to harass any person, businessman or service provider or to defame him publicly or to damage his business reputation, files any false or vexatious case, he shall be punished with imprisonment for a term not exceeding 3 (three) years, or with fine not exceeding Taka 50 (fifty) thousands, or with both."
            }
        };

        let currentQuestion = 0;
        let answers = {};
        let selectedOption = null;

        function startQuestions() {
            document.querySelector('.start-screen').style.display = 'none';
            document.querySelector('.question-container').style.display = 'block';
            document.querySelector('.question-container').classList.add('fade-in');
            showQuestion();
        }

        function showQuestion() {
            const question = questions[currentQuestion];
            document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
            document.getElementById('questionText').textContent = question.text;
            
            const optionsContainer = document.getElementById('options');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.onclick = () => selectOption(index, option);
                optionsContainer.appendChild(optionElement);
            });

            // Update progress
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            document.getElementById('progress').style.width = progress + '%';

            // Show/hide back button
            document.getElementById('backBtn').style.display = currentQuestion > 0 ? 'inline-block' : 'none';
            
            selectedOption = null;
            document.getElementById('nextBtn').disabled = true;
        }

        function selectOption(index, value) {
            // Remove previous selection
            document.querySelectorAll('.option').forEach(opt => {
                opt.style.background = '#f8f9fa';
                opt.style.borderColor = '#e9ecef';
                opt.style.color = '#333';
            });

            // Highlight selected option
            const selectedElement = document.querySelectorAll('.option')[index];
            selectedElement.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
            selectedElement.style.borderColor = '#2980b9';
            selectedElement.style.color = 'white';

            selectedOption = value;
            answers[questions[currentQuestion].key] = value;
            document.getElementById('nextBtn').disabled = false;
        }

        function nextQuestion() {
            if (selectedOption === null) return;

            currentQuestion++;
            
            if (currentQuestion >= questions.length) {
                showLoading();
                setTimeout(() => {
                    calculateResult();
                    showResult();
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
                const previousAnswer = answers[questions[currentQuestion].key];
                if (previousAnswer) {
                    const optionIndex = questions[currentQuestion].options.indexOf(previousAnswer);
                    if (optionIndex !== -1) {
                        selectOption(optionIndex, previousAnswer);
                    }
                }
            }
        }

 