// 导航栏点击切换激活状态
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // 移除所有激活状态
    navItems.forEach(i => i.classList.remove('active'));
    // 给当前点击项添加激活状态
    item.classList.add('active');
  });
});

// 页面加载时的淡入效果
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  let opacity = 0;
  const timer = setInterval(() => {
    opacity += 0.1;
    document.body.style.opacity = opacity;
    if (opacity >= 1) clearInterval(timer);
  }, 50);
});