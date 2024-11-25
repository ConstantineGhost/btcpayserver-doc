(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{800:function(e,t,a){"use strict";a.r(t);var n=a(17),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"deploying-btcpay-lunanode-web-wizard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-btcpay-lunanode-web-wizard"}},[e._v("#")]),e._v(" Deploying BTCPay - LunaNode Web-Wizard")]),e._v(" "),t("p",[e._v("This article explains the "),t("strong",[e._v("deployment of BTCPay Server through LunaNode Web-Wizard")]),e._v(". "),t("a",{attrs:{href:"https://www.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LunaNode"),t("OutboundLink")],1),e._v(" is Canadian based hosting provider that accept Bitcoin payments and requires no personal identification except for a phone number verification.")]),e._v(" "),t("p",[e._v("Their web-wizard is one of the easiest ways to "),t("strong",[e._v("deploy BTCPay Servers from a very user-friendly interface")]),e._v(". This method is highly recommended if you don't have a lot of technical knowledge. LunaNode will provide you with a generic domain for your server to get you started. If you want to set up a custom domain you will need to have some comfort with the command line interface.")]),e._v(" "),t("p",[e._v("For the price of around US$15.80 per month, you can have a "),t("strong",[e._v("self-hosted BTCPay Server")]),e._v(", which includes a Bitcoin full node and Lightning Network node.")]),e._v(" "),t("p",[e._v("The video from BTC Sessions below explains all the steps on deploying and setting up BTCPay Server as well how to setup the Lightning Network in different ways.")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/-GJr4XjRCPo/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=-GJr4XjRCPo",title:"How To Accept Bitcoin Payments by deploying BTCpay Server via Web-Deployment","data-id":"-GJr4XjRCPo"}},[t("iframe",{attrs:{title:"How To Accept Bitcoin Payments by deploying BTCpay Server via Web-Deployment","data-src":"https://www.youtube-nocookie.com/embed/-GJr4XjRCPo?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("p",[e._v("Alternatively, a short summary of just the deployment steps is also covered in "),t("a",{attrs:{href:"https://medium.com/@BtcpayServer/launch-btcpay-server-via-web-interface-and-deploy-full-bitcoin-node-lnd-in-less-than-a-minute-dc8bc6f06a3",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"1-create-the-account-and-add-credits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#1-create-the-account-and-add-credits"}},[e._v("#")]),e._v(" 1. Create the account and add credits")]),e._v(" "),t("p",[e._v("Register to LunaNode and add credits to your account.\nNote that you need to wait for the invoice confirmation.")]),e._v(" "),t("h2",{attrs:{id:"2-create-the-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#2-create-the-api-key"}},[e._v("#")]),e._v(" 2. Create the API Key")]),e._v(" "),t("p",[e._v("Once your account has been verified, and credits added, go to the API section and create a new API. Do not close that page and proceed to step 3.")]),e._v(" "),t("h2",{attrs:{id:"3-web-wizard-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#3-web-wizard-deployment"}},[e._v("#")]),e._v(" 3. Web-Wizard Deployment")]),e._v(" "),t("ol",[t("li",[e._v("Go to "),t("a",{attrs:{href:"https://launchbtcpay.lunanode.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("launchbtcpay.lunanode.com"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Paste the API Key and API ID created in step 2. and continue.")]),e._v(" "),t("li",[e._v("Use your own domain or automatically-generated one by LunaNode.")]),e._v(" "),t("li",[e._v("Customize the web-wizard settings according to your needs.")]),e._v(" "),t("li",[e._v("Click Launch VM. Wait 6-7 minutes for Virtual Machine deployment.")])]),e._v(" "),t("p",[e._v("If you've used a custom domain,")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("SSH into the VM using either the password generated by LunaNode or your private-public key pair.")]),e._v(" "),t("li",[e._v("Run the following commands.")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("your.cool.domain\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_PROTOCOL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("REVERSEPROXY_DEFAULT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_HOST")]),e._v('"')]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-restart.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v("\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[e._v("Visit the domain, create an account and log in.")])]),e._v(" "),t("p",[e._v("Now you need to wait for blockchain to sync fully. Depending on the plan you used and the number of coins you added, that can take 1-7 days. If you enable CPU utilization, with Bitcoin and LND, it will take 1-2 days. There is a US$ 3 one-time charge for faster sync if you enable the CPU utilization. The sync pop-up window will disappear when your node fully syncs.")]),e._v(" "),t("h2",{attrs:{id:"4-additional-customization-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#4-additional-customization-optional"}},[e._v("#")]),e._v(" 4. Additional customization (optional)")]),e._v(" "),t("p",[e._v("Once your BTCPay Server instance is setup, as with any deployment method, you can add environment variables such as activating keysend and autopilot for LND as well as get access to your own transmuter.\nFor more information, visit the available "),t("RouterLink",{attrs:{to:"/Docker/#generated-docker-compose"}},[e._v("environment variable list")]),e._v(". This requires knowledge of how to "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("SSH into your server")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);