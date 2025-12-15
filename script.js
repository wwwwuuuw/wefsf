// 导航栏切换交互
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // 移除所有active类
        navItems.forEach(nav => nav.classList.remove('active'));
        // 给当前点击项添加active类
        item.classList.add('active');
        
        // 模拟内容切换（可扩展为不同板块内容加载）
        const target = item.dataset.target;
        console.log(`切换到【${target}】板块`);
        // 实际项目中可结合AJAX加载对应内容，或显示/隐藏不同DOM
    });
});

// 可选：页面加载完成后的初始化
window.onload = function() {
    console.log('孙杨个人博客页面加载完成');
    // 可添加数据校验、动态渲染等逻辑
};