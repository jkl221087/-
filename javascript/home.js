document.addEventListener('DOMContentLoaded', () => {
    // 檢查是否在正確的頁面
    const heroContent = document.querySelector('.hero-content');
    const btn = document.getElementById('btn');
    const backToTopButton = document.getElementById('backToTop');
    const features = document.querySelectorAll('.feature');

    // Hero 區域動畫（僅在 home.html 中執行）
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }

    // 按鈕事件（僅在 home.html 中執行）
    if (btn) {
        btn.addEventListener('click', () => {
            heroContent.classList.add('bounce');
            setTimeout(() => {
                heroContent.classList.remove('bounce');
                window.location.href = 'index.html';
            }, 2000);
        });
    }

    // 回到頂部按鈕
    if (backToTopButton) {
        window.onscroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        };

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 特效動畫（僅在 home.html 中執行）
    if (features.length > 0) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        features.forEach(feature => {
            feature.classList.add('slide-in');
            observer.observe(feature);
        });

        // 為標題添加動畫效果
        const titles = document.querySelectorAll('.features-title, .about1, .about2');
        titles.forEach(title => {
            title.classList.add('slide-in');
            observer.observe(title);
        });

        // 為介紹文字添加動畫效果
        const aboutText = document.querySelector('.about3');
        if (aboutText) {
            aboutText.classList.add('slide-in');
            observer.observe(aboutText);
        }
    }

    // 添加頁面載入動畫
    document.body.classList.add('loaded');

    // 主題切換功能
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // 從 localStorage 獲取保存的主題，如果沒有則使用系統偏好
        const currentTheme = localStorage.getItem('theme') || 
                            (prefersDarkScheme.matches ? 'dark' : 'light');
        
        // 初始化主題
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
                            ? 'light' 
                            : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 在頁面加載完成後初始化主題切換功能
    initThemeToggle();
});
