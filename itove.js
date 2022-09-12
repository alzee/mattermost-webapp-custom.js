// root.html add <script defer type="text/javascript" src="/static/itove.js"></script>
//
setTimeout(() => {
    let footer = document.querySelector('.hfroute-footer');
    let copyright = footer.querySelector('.footer-copyright');
    copyright.innerText = `© ${new Date().getFullYear()} ITOVE Inc.`;

    let link = footer.querySelector('a');
    let icp = link.cloneNode(true);
    icp.innerText = '鄂ICP备20007274号';
    icp.href = 'https://beian.miit.gov.cn/';
    footer.appendChild(icp);
    console.log(icp);

}, 5000
);
