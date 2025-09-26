  const questions = [
            {
                text: "Did you check if the product you bought has an expiration date listed?",
                options: ["Yes", "No"],
                key: "checkExpiry"
            },
            {
                text: "When you noticed that the expiration date was missing, did you ask the seller to change the product?",
                options: ["Yes", "No"],
                key: "askChange"
            },
            {
                text: "If the seller refused to change the product, did you report the issue?",
                options: ["Yes", "No"],
                key: "reportIssue"
            },
            {
                text: "Did the seller provide the correct product as advertised or did they try to deceive you with a different one?",
                options: ["Yes", "No"],
                key: "correctProduct"
            },
            {
                text: "Was the product label clear with all the necessary details (ingredients, weight, instructions, etc.)?",
                options: ["Yes", "No"],
                key: "clearLabel"
            },
            {
                text: "Did the seller advertise the product with misleading claims or incorrect information?",
                options: ["Yes", "No"],
                key: "misleadingAds"
            },
            {
                text: "Did you notice any discrepancies in the product's weight or measurements during the transaction?",
                options: ["Yes", "No"],
                key: "weightDiscrepancy"
            },
            {
                text: "Were you charged more than the displayed price or the official price for the product?",
                options: ["Yes", "No"],
                key: "overcharged"
            },
            {
                text: "Did you find any harm in the product (e.g., unsafe ingredients, counterfeit materials, etc.)?",
                options: ["Yes", "No"],
                key: "harmfulProduct"
            },
            {
                text: "Did the seller take responsibility for the issue and attempt to resolve it properly?",
                options: ["Yes", "No"],
                key: "sellerResponsibility"
            },
            {
                text: "After you realized there was an issue (such as missing expiration date, false advertisement, or overcharging), did you take any action such as requesting a refund or replacement?",
                options: ["Yes", "No"],
                key: "tookAction"
            },
            {
                text: "Did the seller resolve the issue to your satisfaction (e.g., by providing a refund, replacement, or compensation)?",
                options: ["Yes", "No"],
                key: "issueResolved"
            },
            {
                text: "Did the product have a clear expiration date, ingredients list, and proper labeling?",
                options: ["Yes", "No"],
                key: "properLabeling"
            },
            {
                text: "Was the product counterfeit or did it have misleading weight/measurement?",
                options: ["Yes", "No"],
                key: "counterfeit"
            },
            {
                text: "Did the product contain any harmful materials or substances that could affect health or safety?",
                options: ["Yes", "No"],
                key: "harmfulSubstances"
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
        let isPhaseTwo = false;
        let preliminaryLaws = [];

        function startQuestions() {
            document.querySelector('.start-screen').style.display = 'none';
            document.querySelector('.question-container').style.display = 'block';
            document.querySelector('.question-container').classList.add('fade-in');
            showQuestion();
        }

        function showQuestion() {
            const question = questions[currentQuestion];
            const totalQuestions = isPhaseTwo ? 15 : 10;
            const questionNum = currentQuestion + 1;
            
            document.getElementById('questionNumber').textContent = `Question ${questionNum}`;
            document.getElementById('questionText').textContent = question.text;
            document.getElementById('progressText').textContent = `Question ${questionNum} of ${totalQuestions}`;
            
            // Update phase indicator
            if (currentQuestion >= 10 && !isPhaseTwo) {
                isPhaseTwo = true;
                document.getElementById('phaseIndicator').textContent = 'Final Assessment Phase';
            }
            
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
                document.getElementById('nextBtn').textContent = 'Get Final Result';
            } else if (currentQuestion === 9) {
                document.getElementById('nextBtn').textContent = 'Get Preliminary Results';
            } else {
                document.getElementById('nextBtn').textContent = 'Next Question';
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
            answers[questions[currentQuestion].key] = value;
            document.getElementById('nextBtn').disabled = false;
        }

        function nextQuestion() {
            if (selectedOption === null) return;

            currentQuestion++;
            
            if (currentQuestion === 10) {
                // Show preliminary results after 10 questions
                showLoading();
                setTimeout(() => {
                    preliminaryLaws = calculatePreliminaryResults();
                    showPreliminaryResults();
                }, 2000);
            } else if (currentQuestion >= 15) {
                // Show final result after all 15 questions
                showLoading();
                setTimeout(() => {
                    calculateFinalResult();
                    showFinalResult();
                }, 2000);
            } else {
                showQuestion();
            }
        }

        function previousQuestion() {
            if (currentQuestion > 0) {
                if (currentQuestion === 11) {
                    // Going back from phase 2 to phase 1 results
                    isPhaseTwo = false;
                    document.getElementById('phaseIndicator').textContent = 'Initial Assessment Phase';
                }
                currentQuestion--;
                showQuestion();
                
                // Restore previous selection if exists
                const previousAnswer = answers[questions[currentQuestion].key];
                if (previousAnswer) {
                    const optionIndex = questions[currentQuestion].options.indexOf(previousAnswer);
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

        function calculatePreliminaryResults() {
            let applicableLaws = [];

            // Law 1: Product labeling issues
            if (answers.checkExpiry === 'No' || answers.clearLabel === 'No' || answers.properLabeling === 'No') {
                applicableLaws.push(1);
            }

            // Law 2 & 3: Price list display
            if (answers.overcharged === 'Yes') {
                applicableLaws.push(2, 3);
            }

            // Law 4: Overcharging
            if (answers.overcharged === 'Yes') {
                applicableLaws.push(4);
            }

            // Law 8: False advertising
            if (answers.misleadingAds === 'Yes' || answers.correctProduct === 'No') {
                applicableLaws.push(8);
            }

            // Law 9: Not delivering promised goods
            if (answers.correctProduct === 'No' || answers.sellerResponsibility === 'No') {
                applicableLaws.push(9);
            }

            // Law 10-12: Weight and measurement issues
            if (answers.weightDiscrepancy === 'Yes') {
                applicableLaws.push(10, 11, 12);
            }

            // Law 14: Expired products
            if (answers.checkExpiry === 'No' || answers.askChange === 'No') {
                applicableLaws.push(14);
            }

            // Remove duplicates and limit to most relevant laws
            applicableLaws = [...new Set(applicableLaws)];
            
            if (applicableLaws.length === 0) {
                applicableLaws = [1, 8, 9]; // Default laws for consumer protection
            }

            return applicableLaws.slice(0, 5); // Limit to 5 laws for preliminary results
        }

        function calculateFinalResult() {
            // Determine the single most applicable law based on all 15 questions
            let lawScores = {};

            // Score each law based on answers
            Object.keys(laws).forEach(lawNum => {
                lawScores[lawNum] = 0;
            });

            // Scoring logic based on specific answer patterns
            if (answers.checkExpiry === 'No' || answers.properLabeling === 'No') lawScores[1] += 3;
            if (answers.overcharged === 'Yes') lawScores[4] += 3;
            if (answers.misleadingAds === 'Yes') lawScores[8] += 3;
            if (answers.weightDiscrepancy === 'Yes') lawScores[10] += 3;
            if (answers.counterfeit === 'Yes') lawScores[13] += 3;
            if (answers.harmfulProduct === 'Yes' || answers.harmfulSubstances === 'Yes') lawScores[5] += 3;
            if (answers.correctProduct === 'No') lawScores[9] += 2;
            if (answers.clearLabel === 'No') lawScores[1] += 2;
            if (answers.sellerResponsibility === 'No') lawScores[16] += 2;
            if (answers.issueResolved === 'No') lawScores[17] += 1;

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

        function showPreliminaryResults() {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';
            document.querySelector('.result-container').classList.add('fade-in');

            document.getElementById('resultTitle').textContent = 'Preliminary Legal Assessment';
            document.getElementById('continueBtn').style.display = 'inline-block';
            document.getElementById('restartBtn').style.display = 'none';

            const resultContainer = document.getElementById('lawResult');
            resultContainer.innerHTML = '';

            preliminaryLaws.forEach(lawNumber => {
                const law = laws[lawNumber];
                if (law) {
                    const lawBox = document.createElement('div');
                    lawBox.className = 'law-box';
                    lawBox.innerHTML = `
                        <div class="law-number">Law ${lawNumber}</div>
                        <div class="law-title">${law.title}</div>
                        <div class="law-content">${law.content}</div>
                    `;
                    resultContainer.appendChild(lawBox);
                }
            });
        }

        function showFinalResult() {
            document.querySelector('.loading').style.display = 'none';
            document.querySelector('.result-container').style.display = 'block';
            document.querySelector('.result-container').classList.add('fade-in');

            const finalLaw = calculateFinalResult();
            
            document.getElementById('resultTitle').textContent = 'Final Legal Assessment';
            document.getElementById('continueBtn').style.display = 'none';
            document.getElementById('restartBtn').style.display = 'inline-block';

            const resultContainer = document.getElementById('lawResult');
            resultContainer.innerHTML = '';

            const law = laws[finalLaw];
            if (law) {
                const lawBox = document.createElement('div');
                lawBox.className = 'law-box';
                lawBox.innerHTML = `
                    <div class="law-number">Primary Applicable Law ${finalLaw}</div>
                    <div class="law-title">${law.title}</div>
                    <div class="law-content">${law.content}</div>
                `;
                resultContainer.appendChild(lawBox);
                
                // Add recommendation section
                const recommendationBox = document.createElement('div');
                recommendationBox.className = 'law-box';
                recommendationBox.style.borderLeft = '6px solid #27ae60';
                recommendationBox.innerHTML = `
                    <div class="law-number" style="background: linear-gradient(135deg, #27ae60, #2ecc71);">Legal Recommendation</div>
                    <div class="law-title">Your Next Steps</div>
                    <div class="law-content">Based on your responses, Law ${finalLaw} is most applicable to your situation. We recommend consulting with a legal professional for detailed advice on how to proceed with your specific case. Keep all relevant documentation and evidence related to your consumer experience.</div>
                `;
                resultContainer.appendChild(recommendationBox);
            }
        }

        function continueAssessment() {
            document.querySelector('.result-container').style.display = 'none';
            document.querySelector('.question-container').style.display = 'block';
            document.querySelector('.question-container').classList.add('fade-in');
            
            isPhaseTwo = true;
            document.getElementById('phaseIndicator').textContent = 'Final Assessment Phase';
            showQuestion();
        }

        function restart() {
            currentQuestion = 0;
            answers = {};
            selectedOption = null;
            isPhaseTwo = false;
            preliminaryLaws = [];
            
            document.querySelector('.result-container').style.display = 'none';
            document.querySelector('.start-screen').style.display = 'block';
            document.getElementById('progress').style.width = '0%';
            document.getElementById('phaseIndicator').textContent = 'Initial Assessment Phase';
        }