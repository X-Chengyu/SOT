const quizData = {
    "zh-CN":
        [
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
            { label: "理想情况下，我的生活中不需要任何性或浪漫关系来感到完整。", dimension: 6 }
        ],
    "jp":
        [
            { "label": "異性/非同性の身体を見たとき、強い性的興奮や欲望を感じる。", "dimension": 1 },
            { "label": "同性/非異性の身体を見たとき、強い性的興奮や欲望を感じる。", "dimension": 1 },
            { "label": "性的な魅力を感じるとき、相手の性別は私にとって重要だ。", "dimension": 1 },
            { "label": "性的な魅力を感じるとき、相手の性別は私にとって重要ではない。より深いレベルの人間的特質に惹かれる。", "dimension": 1 },
            { "label": "私はあらゆる性別の人に惹かれることに気づいている。", "dimension": 1 },
            { "label": "私は誰に対しても性的魅力をほとんど、または全く感じたことがない。", "dimension": 1 },
            { "label": "異性/非同性の相手とのキスや親密な接触は、私を性的に興奮させる。", "dimension": 1 },
            { "label": "同性/非異性の相手とのキスや親密な接触は、私を性的に興奮させる。", "dimension": 1 },
            { "label": "異性/非同性の相手と深く、長期的なロマンチックな関係を築きたいと望んでいる。", "dimension": 2 },
            { "label": "同性/非異性の相手と深く、長期的なロマンチックな関係を築きたいと望んでいる。", "dimension": 2 },
            { "label": "私は、あらゆる性別の人と恋に落ちる自分を想像できる。", "dimension": 2 },
            { "label": "ロマンチックな関係を築くことに興味がなく、プラトニックな友情や自立を好む。", "dimension": 2 },
            { "label": "特定の性別のパートナーにロマンチックに惹かれる（例：手をつなぎたい、デートしたい、将来を共にしたい）。", "dimension": 2 },
            { "label": "性別を問わないパートナーにロマンチックに惹かれることに気づいている。", "dimension": 2 },
            { "label": "私の性的ファンタジーは、主に異性/非同性を中心に展開する。", "dimension": 3 },
            { "label": "私の性的ファンタジーは、主に同性/非異性を中心に展開する。", "dimension": 3 },
            { "label": "私の性的ファンタジーでは、すべての性別の相手が登場する可能性があり、明確な好みはない。", "dimension": 3 },
            { "label": "性的ファンタジーはあるが、特定の人や性別は関わらない（例：感覚や動作に焦点を当てる）。", "dimension": 3 },
            { "label": "性的ファンタジーはほとんど、または全くない。", "dimension": 3 },
            { "label": "ファンタジーの中で、私が能動的に主要な役割を演じる相手は異性/非同性だ。", "dimension": 3 },
            { "label": "ファンタジーの中で、私が能動的に主要な役割を演じる相手は同性/非異性だ。", "dimension": 3 },
            { "label": "過去一年間に、異性/非同性と性的接触/親密な行為があった（性交、ディープキスなどに限定されない）。", "dimension": 4 },
            { "label": "過去一年間に、同性/非異性と性的接触/親密な行為があった（性交、ディープキスなどに限定されない）。", "dimension": 4 },
            { "label": "状況が許せば、異性/非同性との性的接触/親密な行為を望む。", "dimension": 4 },
            { "label": "状況が許せば、同性/非異性との性的接触/親密な行為を望む。", "dimension": 4 },
            { "label": "異なる性別の人と性的接触/親密な行為をしたことがあり、その体験は似ている。", "dimension": 4 },
            { "label": "相手の性別にかかわらず、性的接触における感情的な繋がりや信頼を重視する。", "dimension": 4 },
            { "label": "誰との性的接触/親密な行為も求めないし、望まない。", "dimension": 4 },
            { "label": "異性/非同性の友人グループの方が、より強い帰属意識を感じる。", "dimension": 5 },
            { "label": "同性/非異性の友人グループの方が、より強い帰属意識を感じる。", "dimension": 5 },
            { "label": "性自認について話すとき、自分にラベルを貼ることを避ける傾向がある。", "dimension": 5 },
            { "label": "自分の性的指向は長年にわたって変化していないと考えている。", "dimension": 5 },
            { "label": "自分の性的指向は流動的で変化するものだと考えている。", "dimension": 5 },
            { "label": "選べるなら、異性/非同性のパートナーと一緒に公の場に出たい。", "dimension": 5 },
            { "label": "選べるなら、同性/非異性のパートナーと一緒に公の場に出たい。", "dimension": 5 },
            { "label": "私は、友人や家族に異性／非同性への興味を積極的に公言したり、ほのめかしたりしますか。", "dimension": 5 },
            { "label": "私は、友人や家族に同性／非異性への興味を積極的に公言したり、ほのめかしたりしますか。", "dimension": 5 },
            { "label": "私の理想とする長期的なパートナー像において、その人の性別的特徴は明確である（例：男性的特徴または女性的特徴）。", "dimension": 6 },
            { "label": "私の理想とする長期的なパートナー像において、その人の性別的特徴は重要ではない。", "dimension": 6 },
            { "label": "もし「完璧な」デート相手がいるとしたら、その人は異性/非同性だろう。", "dimension": 6 },
            { "label": "もし「完璧な」デート相手がいるとしたら、その人は同性/非異性だろう。", "dimension": 6 },
            { "label": "もし「完璧な」デート相手がいるとしたら、その人の性別は全くのランダムだろう。", "dimension": 6 },
            { "label": "パートナーには、私がすべての性別に潜在的な魅力を感じることへの理解をより強く望む。", "dimension": 6 },
            { "label": "パートナーが、私が性的な魅力をあまり感じないという事実を受け入れてくれることを望みますか。", "dimension": 6 },
            { "label": "理想的な状況下では、満たされていると感じるために性的または恋愛関係は必要ありませんか。", "dimension": 6 }
        ],
    "en":
        [
            { "label": "I feel a strong sexual excitement or desire when seeing a body of the opposite/different gender.", "dimension": 1 },
            { "label": "I feel a strong sexual excitement or desire when seeing a body of the same/similar gender.", "dimension": 1 },
            { "label": "When I feel sexual attraction, the gender of the person matters to me.", "dimension": 1 },
            { "label": "When I feel sexual attraction, the gender of the person is unimportant; I am attracted by deeper personality traits.", "dimension": 1 },
            { "label": "I find myself being attracted to people of all genders.", "dimension": 1 },
            { "label": "I rarely or almost never feel sexual attraction toward anyone.", "dimension": 1 },
            { "label": "Kissing or intimate contact with an opposite/different gender person makes me feel sexually excited.", "dimension": 1 },
            { "label": "Kissing or intimate contact with a same/similar gender person makes me feel sexually excited.", "dimension": 1 },
            { "label": "I desire to form a deep, long-term romantic relationship with the opposite/different gender.", "dimension": 2 },
            { "label": "I desire to form a deep, long-term romantic relationship with the same/similar gender.", "dimension": 2 },
            { "label": "I can imagine myself falling in love with people of any gender.", "dimension": 2 },
            { "label": "I am not interested in romantic relationships; I prefer platonic friendships or independence.", "dimension": 2 },
            { "label": "I find myself romantically attracted to partners of a specific gender (e.g., wanting to hold hands, date, share a future).", "dimension": 2 },
            { "label": "I find myself romantically attracted to partners regardless of gender.", "dimension": 2 },
            { "label": "My sexual fantasies primarily revolve around the opposite/different gender.", "dimension": 3 },
            { "label": "My sexual fantasies primarily revolve around the same/similar gender.", "dimension": 3 },
            { "label": "Objects of all genders may appear in my sexual fantasies, with no obvious preference.", "dimension": 3 },
            { "label": "I have sexual fantasies, but they do not involve any specific person or gender (e.g., focus on feelings, movements).", "dimension": 3 },
            { "label": "I have few or almost no sexual fantasies.", "dimension": 3 },
            { "label": "In my fantasies, the person I actively play the primary role with is the opposite/different gender.", "dimension": 3 },
            { "label": "In my fantasies, the person I actively play the primary role with is the same/similar gender.", "dimension": 3 },
            { "label": "In the past year, I have had sexual contact/intimacy (including but not limited to intercourse, deep kissing) with the opposite/different gender.", "dimension": 4 },
            { "label": "In the past year, I have had sexual contact/intimacy (including but not limited to intercourse, deep kissing) with the same/similar gender.", "dimension": 4 },
            { "label": "If conditions permit, I would be willing to engage in sexual contact/intimacy with the opposite/different gender.", "dimension": 4 },
            { "label": "If conditions permit, I would be willing to engage in sexual contact/intimacy with the same/similar gender.", "dimension": 4 },
            { "label": "I have had sexual contact/intimacy with people of different genders, and the experience feels similar.", "dimension": 4 },
            { "label": "Regardless of the person's gender, I value emotional connection and trust more in sexual contact.", "dimension": 4 },
            { "label": "I do not seek or desire sexual contact/intimacy with anyone.", "dimension": 4 },

            { "label": "I find that friend groups of the opposite/different gender make me feel a stronger sense of belonging.", "dimension": 5 },
            { "label": "I find that friend groups of the same/similar gender make me feel a stronger sense of belonging.", "dimension": 5 },
            { "label": "When discussing sexual orientation, I tend to avoid labeling myself.", "dimension": 5 },
            { "label": "I believe my sexual orientation has not changed over the years.", "dimension": 5 },
            { "label": "I believe my sexual orientation is fluid and changing.", "dimension": 5 },
            { "label": "If I were to choose, I would prefer to appear in public with an opposite/different gender partner.", "dimension": 5 },
            { "label": "If I were to choose, I would prefer to appear in public with a same/similar gender partner.", "dimension": 5 },
            { "label": "I actively disclose or hint to friends or family about my interest in the opposite/different gender.", "dimension": 5 },
            { "label": "I actively disclose or hint to friends or family about my interest in the same/similar gender.", "dimension": 5 },

            { "label": "In my image of an ideal long-term partner, their gender characteristics are clear (e.g., masculine or feminine traits).", "dimension": 6 },
            { "label": "In my image of an ideal long-term partner, their gender characteristics are unimportant.", "dimension": 6 },
            { "label": "If I had a 'perfect' date, they would be the opposite/different gender.", "dimension": 6 },
            { "label": "If I had a 'perfect' date, they would be the same/similar gender.", "dimension": 6 },
            { "label": "If I had a 'perfect' date, their gender would be completely random.", "dimension": 6 },
            { "label": "I would prefer my partner to understand my potential attraction to all genders.", "dimension": 6 },
            { "label": "I would prefer my partner to accept the fact that I do not often feel sexual attraction.", "dimension": 6 },
            { "label": "Ideally, I do not need any sexual or romantic relationship in my life to feel complete.", "dimension": 6 }
        ]
};

const scoringCategories = [
    1, 2, -1, 3, 3, 4, 1, 2, 1, 2,
    3, 4, -1, -1, 1, 2, 3, -1, 4, 1,
    2, -1, -1, 1, 2, 3, 3, 4, -1, -1,
    5, -5, 5, 1, 2, -1, -1, -1, 3, 1,
    2, 3, -1, 4, 4
];

const dimension = {
    "zh-CN":
        [
            "维度一：性吸引力（Sexual Attraction）",
            "维度二：情感依恋与浪漫吸引力（Emotional & Romantic Attraction）",
            "维度三：性幻想（Sexual Fantasies）",
            "维度四：行为（Sexual Behavior - 过去与现在）",
            "维度五：社会归属感与身份（Social and Identity）",
            "维度六：理想与渴望（Ideal and Aspiration）"
        ],
    "jp":
        [
            "次元一：性的魅力（Sexual Attraction）",
            "次元二：感情的愛着とロマンチックな魅力（Emotional & Romantic Attraction）",
            "次元三：性的空想（Sexual Fantasies）",
            "次元四：行動（Sexual Behavior - 過去と現在）",
            "次元五：社会的帰属意識とアイデンティティ（Social and Identity）",
            "次元六：理想と願望（Ideal and Aspiration）"
        ],
    "en":
        [
            "Dimension 1: Sexual Attraction",
            "Dimension 2: Emotional & Romantic Attraction",
            "Dimension 3: Sexual Fantasies",
            "Dimension 4: Sexual Behavior - Past and Present",
            "Dimension 5: Social and Identity",
            "Dimension 6: Ideal and Aspiration"
        ]
};

const options = {
    "zh-CN":
        ["经常", "很少", "从未", "返回"],
    "jp":
        ["よく当てはまる", "たまに当てはまる", "全く当てはまらない", "戻る"],
    "en":
        ["Often", "Rarely", "Never", "Return"]
};
const optionScores = {
    "zh-CN":
        { "经常": 5, "很少": 2, "从未": 0, "返回": -1 },
    "jp":
        { "よく当てはまる": 5, "たまに当てはまる": 2, "全く当てはまらない": 0, "戻る": -1 },
    "en":
        { "Often": 5, "Rarely": 2, "Never": 0, "Return": -1 }
};

// 词汇表
const vocabulary = {
    "zh-CN":
    {
        'result_hetero': '💑异性恋倾向',
        'result_homo': '🧑‍🤝‍🧑同性恋倾向',
        'result_bi_pan': '👪双/泛性恋倾向',
        'result_a': '👨无性恋倾向',
        'result_fluid': '👩‍👧‍👦流性恋倾向',
        'result_opener': '📋根据您的回答，这是对您性取向的一些探索性分析：\n',
        'disclaimer': '\n❗请注意：这只是一个简单测试，真实的性取向是一个复杂的、多维度的自我认知过程。',

        'progress_prefix': '第 ',
        'progress_suffix': ' 题',
    },
    "jp":
    {
        'result_hetero': '💑異性愛傾向',
        'result_homo': '🧑‍🤝‍🧑同性愛傾向',
        'result_bi_pan': '👪バイ・パンセクシュアル傾向',
        'result_a': '👨アセクシュアル傾向',
        'result_fluid': '👩‍👧‍👦流動性傾向',
        'result_opener': '📋あなたの回答に基づいた、性的指向に関する探索的分析結果です：\n',
        'disclaimer': '\n❗ご注意：これは簡易テストであり、実際の性的指向は複雑で多角的な自己認識のプロセスです。',

        'progress_prefix': '質問 ',
        'progress_suffix': '',
    },
    "en":
    {
        'result_hetero': '💑Heterosexuality',
        'result_homo': '🧑‍🤝‍🧑Homosexuality',
        'result_bi_pan': '👪Bisexuality/Pansexuality',
        'result_a': '👨Asexuality',
        'result_fluid': '👩‍👧‍👦Fluidity',
        'result_opener': '📋Based on your answers, here are some exploratory analyses of your sexual orientation:\n',
        'disclaimer': '\n❗Please note: This is just a simple test. Your true sexual orientation is a complex, multi-dimensional process of self-awareness. ',

        'progress_prefix': 'Question',
        'progress_suffix': '',
    }
}

// 语言检测程序
const currentPage = window.location.pathname.split('/').pop();
let currentLang = 'zh-CN';

if (currentPage === 'jp.html' || currentPage === 'jp') {
    currentLang = 'jp';
}
else if (currentPage === 'en.html' || currentPage === 'en') {
    currentLang = 'en';
}

// 实现返回功能：建立value数组
let value = [];

// 分数统计系统
let currentQuestionIndex = 0;
let score = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const totalQuestions = quizData[currentLang].length;

// 绑定变量与ID
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
    score = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    loadQuestion(currentQuestionIndex);
}

// 加载题目
function loadQuestion(index) {
    if (index >= totalQuestions) {
        showResult();
        return;
    }

    const question = quizData[currentLang][index];
    questionTextDimension.textContent = dimension[currentLang][question.dimension - 1];
    questionText.textContent = question.label;
    optionsGroup.innerHTML = '';

    options[currentLang].forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;

        button.onclick = () => selectAnswer(optionScores[currentLang][option], index);
        optionsGroup.appendChild(button);
    });

    progressText.textContent = `${vocabulary[currentLang].progress_prefix} ${index + 1} / ${totalQuestions} ${vocabulary[currentLang].progress_suffix}`;
}

// 答题器
function selectAnswer(answerScore, index) {
    if (answerScore == -1 && index >= 1) {
        currentQuestionIndex--;
    }
    else if (answerScore != -1) {
        if (value.length > index) {
            value[index] = answerScore;
        }
        else {
            value.push(answerScore);
        }

        currentQuestionIndex++;
    }

    loadQuestion(currentQuestionIndex);
}

// 测试完毕后的结果展示页
function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    for (var id = 0; id <= value.length; ++id) {
        if (scoringCategories[id] >= 1 && scoringCategories[id] <= 5) {
            score[scoringCategories[id]] += value[id];
        }
        else if (scoringCategories[id] == -5) {
            score[5] -= value[id];
        }
    }

    if (score[5] < 0) {
        score[5] = 0;
    }

    totalScore = score[1] + score[2] + score[3] + score[4] + score[5]; // 计算总分

    if (totalScore == 0) {
        score[4] = totalScore = 1;
    }

    let resultText = `${vocabulary[currentLang].result_opener}\n`;
    resultText += `${vocabulary[currentLang].result_hetero}：${Math.round(score[1] / totalScore * 100)}%\n`;
    resultText += `${vocabulary[currentLang].result_homo}：${Math.round(score[2] / totalScore * 100)}%\n`;
    resultText += `${vocabulary[currentLang].result_bi_pan}：${Math.round(score[3] / totalScore * 100)}%\n`;
    resultText += `${vocabulary[currentLang].result_a}：${Math.round(score[4] / totalScore * 100)}%\n`;
    resultText += `${vocabulary[currentLang].result_fluid}：${Math.round(score[5] / totalScore * 100)}%\n`;
    resultText += `${vocabulary[currentLang].disclaimer}`;


    finalResult.textContent = resultText;
}

document.addEventListener('DOMContentLoaded', () => {
    homeScreen.style.display = 'block';
});