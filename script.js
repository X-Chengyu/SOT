const quizData = [
    { label: "当看到异性/非同性的身体时，我会感到强烈的性兴奋或欲望。", dimension: 1 },
    { label: "当看到同性/非异性的身体时，我会感到强烈的性兴奋或欲望。", dimension: 1 },
    { label: "我感受到性吸引时，对象的性别对我来说很重要。", dimension: 1 },
    { label: "我感受到性吸引时，对象的性别对我来说不重要，我被更深层次的人格特质吸引。", dimension: 1 },
    { label: "我发现自己会被所有性别的人所吸引。", dimension: 1 },
    { label: "我很少或几乎从未对任何人产生过性吸引。", dimension: 1 },
    { label: "与异性/非同性对象接吻或亲密接触，会让我感到性兴奋。", dimension: 1 },
    { label: "与同性/非异性对象接吻或亲密接触，会让我感到性兴奋。", dimension: 1 },
    { label: "我渴望与异性/非同性建立深刻、长期的浪漫关系。", dimension: 2 },
    { label: "我渴望与同性/非异性建立深刻、长期的浪漫关系。", dimension: 2 },
    { label: "我能想象自己与任何性别的人坠入爱河。", dimension: 2 },
    { label: "我对建立浪漫关系不感兴趣，更倾向于柏拉图式的友谊或独立。", dimension: 2 },
    { label: "我会发现自己被特定性别的伴侣所浪漫地吸引（例如：想牵手、约会、共度未来）。", dimension: 2 },
    { label: "我会发现自己被不分性别的伴侣所浪漫地吸引。", dimension: 2 },
    { label: "我的性幻想主要围绕着异性/非同性展开。", dimension: 3 },
    { label: "我的性幻想主要围绕着同性/非异性展开。", dimension: 3 },
    { label: "我的性幻想中，所有性别的对象都可能出现，没有明显的偏好。", dimension: 3 },
    { label: "我有性幻想，但它们不涉及任何特定的人或性别（例如，关注感觉、动作）。", dimension: 3 },
    { label: "我很少有或几乎没有性幻想。", dimension: 3 },
    { label: "在幻想中，我主动扮演主要角色的对象是异性/非同性。", dimension: 3 },
    { label: "在幻想中，我主动扮演主要角色的对象是同性/非异性。", dimension: 3 },
    { label: "过去一年中，我与异性/非同性有过性接触/亲密行为（包括但不限于性交、深度亲吻）。", dimension: 4 },
    { label: "过去一年中，我与同性/非异性有过性接触/亲密行为（包括但不限于性交、深度亲吻）。", dimension: 4 },
    { label: "如果条件允许，我愿意与异性/非同性进行性接触/亲密行为。", dimension: 4 },
    { label: "如果条件允许，我愿意与同性/非异性进行性接触/亲密行为。", dimension: 4 },
    { label: "我与不同性别的人有过性接触/亲密行为，且体验感相似。", dimension: 4 },
    { label: "无论对象的性别如何，我更看重性接触中的情感联结和信任。", dimension: 4 },
    { label: "我不寻求或不渴望与任何人发生性接触/亲密行为。", dimension: 4 },
    { label: "我发现异性/非同性的朋友群体更容易让我有归属感。", dimension: 5 },
    { label: "我发现同性/非异性的朋友群体更容易让我有归属感。", dimension: 5 },
    { label: "当谈论性取向时，我倾向于回避给自己贴标签。", dimension: 5 },
    { label: "我认为自己的性取向多年来都没有变化。", dimension: 5 },
    { label: "我认为自己的性取向是流动和变化的。", dimension: 5 },
    { label: "如果让我选择，我倾向于与异性/非同性的伴侣一起出现在公共场合。", dimension: 5 },
    { label: "如果让我选择，我倾向于与同性/非异性的伴侣一起出现在公共场合。", dimension: 5 },
    { label: "我会积极地向朋友或家人公开或暗示自己对异性/非同性的兴趣。", dimension: 5 },
    { label: "我会积极地向朋友或家人公开或暗示自己对同性/非异性的兴趣。", dimension: 5 },
    { label: "在我理想的长期伴侣画像中，Ta的性别特征是明确的（例如：男性气质或女性气质）。", dimension: 6 },
    { label: "在我理想的长期伴侣画像中，Ta的性别特征是不重要的。", dimension: 6 },
    { label: "如果我有一个“完美”的约会对象，Ta会是异性/非同性。", dimension: 6 },
    { label: "如果我有一个“完美”的约会对象，Ta会是同性/非异性。", dimension: 6 },
    { label: "如果我有一个“完美”的约会对象，Ta的性别是完全随机的。", dimension: 6 },
    { label: "我更希望我的伴侣能理解我对所有性别的潜在吸引。", dimension: 6 },
    { label: "我更希望我的伴侣能接受我不常感受到性吸引这一事实。", dimension: 6 },
    { label: "理想情况下，我的生活中不需要任何性或浪漫关系来感到完整。", dimension: 6 },
];

const scoringCategories = [
    1, 2, -1, 3, 3, 4, 1, 2, 1, 2,
    3, 4, -1, -1, 1, 2, 3, -1, 4, 1,
    2, -1, -1, 1, 2, 3, 3, 4, -1, -1,
    5, -5, 5, 1, 2, -1, -1, -1, 3, 1,
    2, 3, -1, 4, 4
];
const totalScore = 160;

const dimension = [
    "维度一：性吸引力（Sexual Attraction）",
    "维度二：情感依恋与浪漫吸引力（Emotional & Romantic Attraction）",
    "维度三：性幻想（Sexual Fantasies）", "维度四：行为（Sexual Behavior - 过去与现在）",
    "维度五：社会归属感与身份（Social and Identity）",
    "维度六：理想与渴望（Ideal and Aspiration）"
];

const options = ["经常", "很少", "从未"];
const optionScores = { "经常": 5, "很少": 2, "从未": 0 };

let currentQuestionIndex = 0;
let score = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const totalQuestions = quizData.length;

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionTextDimension = document.getElementById('question-text-dimension');
const questionText = document.getElementById('question-text');
const optionsGroup = document.getElementById('options-group');
const progressText = document.getElementById('progress-text');
const finalResult = document.getElementById('final-result');


function startQuiz() {
    homeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    currentQuestionIndex = 0;
    let score = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    if (index >= totalQuestions) {
        showResult();
        return;
    }

    const question = quizData[index];
    questionTextDimension.textContent = dimension[question.dimension - 1];
    questionText.textContent = question.label;
    optionsGroup.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;

        button.onclick = () => selectAnswer(optionScores[option], index);
        optionsGroup.appendChild(button);
    });

    progressText.textContent = `第 ${index + 1} / ${totalQuestions} 题`;
}

function selectAnswer(answerScore, index) {
    if (scoringCategories[index] >= 1 && scoringCategories[index] <= 5) {
        score[scoringCategories[index]] += answerScore;
    }
    else if (scoringCategories[index] == -5) {
        score[5] -= answerScore;
    }

    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    if (score[5] < 0) {
        score[5] = 0;
    }

    let resultText = "📋根据您的回答，这是对您性取向的一些探索性分析：\n\n";
    resultText += `💑异性恋倾向：${Math.round(score[1] / totalScore * 100)}%\n`;
    resultText += `🧑‍🤝‍🧑同性恋倾向：${Math.round(score[2] / totalScore * 100)}%\n`;
    resultText += `👪双/泛性恋倾向：${Math.round(score[3] / totalScore * 100)}%\n`;
    resultText += `👨无性恋倾向：${Math.round(score[4] / totalScore * 100)}%\n`;
    resultText += `👩‍👧‍👦流性恋倾向：${Math.round(score[5] / totalScore * 100)}%\n`;
    resultText += `\n❗请注意：这只是一个简单测试，真实的性取向是一个复杂的、多维度的自我认知过程。`;


    finalResult.textContent = resultText;
}

document.addEventListener('DOMContentLoaded', () => {
    homeScreen.style.display = 'block';
});