const chinesePage = 'index.html';
const japanesePage = 'jp.html';
const englishPage = 'en.html';

function changeLanguage(langCode) {
    console.log("用户选择了语言代码: " + langCode);

    if (langCode === 'jp') {
        window.location.href = japanesePage;
    } else if (langCode === 'en') {
        window.location.href = englishPage;
    } else if (langCode === 'zh-CN') {
        window.location.href = chinesePage;
    }
}