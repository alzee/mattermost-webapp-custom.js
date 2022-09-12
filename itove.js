// root.html add <script defer type="text/javascript" src="/static/itove.js"></script>
//
const intv = setInterval(() => {
    let footer = document.querySelector('.hfroute-footer');
    if (footer) {
        let copyright = footer.querySelector('.footer-copyright');
        if (copyright && copyright.id != 'copyright0') {
            copyright.innerText = `© ${new Date().getFullYear()} ITOVE Inc.`;
            copyright.id = 'copyright0';
        }

        if (footer.querySelector('#icp')) {
            // back from signup_user_complete/reset_password link to / not /login so everything will reset
            // so just keep editing?
            clearInterval(intv);
        } else{
            let link = footer.querySelector('a');
            let icp = link.cloneNode(true);
            icp.innerText = '鄂ICP备20007274号';
            icp.href = 'https://beian.miit.gov.cn/';
            icp.id = 'icp';
            footer.appendChild(icp);
        }

        // TODO reset_passwd page
        // let footerResetPwd = footer.querySelector('#footer_section');
    }
}, 1000
);
