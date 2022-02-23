(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{565:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup1.4825790a.png"},566:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup2.7fd453fc.png"},567:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetup3.c89bc70a.png"},568:function(t,e,n){t.exports=n.p+"assets/img/LightningNetworkNodeSetupCustom.68862c8b.png"},569:function(t,e,n){t.exports=n.p+"assets/img/RideTheLightning.b51de51a.png"},570:function(t,e,n){t.exports=n.p+"assets/img/RideTheLightningServices.f78a7987.png"},571:function(t,e,n){t.exports=n.p+"assets/img/SparkConnect.c32564ac.jpg"},572:function(t,e,n){t.exports=n.p+"assets/img/SparkConnect2.jpg.38b90d2b.png"},771:function(t,e,n){"use strict";n.r(e);var o=n(35),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"lightning-network-and-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-and-btcpay"}},[t._v("#")]),t._v(" Lightning Network and BTCPay")]),t._v(" "),o("p",[t._v("After deploying BTCPay Server, you may want to experiment with an innovative second-layer payment system built on top of Bitcoin protocol - the "),o("a",{attrs:{href:"https://en.bitcoin.it/wiki/Lightning_Network",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning Network"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("This guide will show you how to "),o("strong",[t._v("set up your Lightning Network node in BTCPay")]),t._v(" and guide you through the basics.")]),t._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),o("p",[o("strong",[t._v("Before you proceed, please understand that the Lightning Network is still in the experimental stage.\nUsing the Lightning Network can put your money at risk. Do not use more than you can afford to lose.")])])]),t._v(" "),o("p",[t._v("Take time to familiarize yourself with the risks associated with using the Lightning Network.\n"),o("strong",[t._v("Your keys are in a hot-wallet.\nSome implementations do not have a backup for lightning keys in BTCPay.")]),t._v("\nThis means:")]),t._v(" "),o("ol",[o("li",[t._v("If you erase your BTCPay Server or your machine crashes - you lose all the funds.")]),t._v(" "),o("li",[t._v("If your server gets hacked - a hacker can take all of your funds by accessing your keys.")])]),t._v(" "),o("p",[t._v("While the keys from your "),o("strong",[t._v("Lightning Network")]),t._v(" don't have a backup and someone can steal them theoretically, your on-chain Bitcoin funds are safe and are never uploaded on the server.")]),t._v(" "),o("p",[t._v("As the technology matures and develops, things like a proper backup will be easier to implement in BTCPay.\nAs of "),o("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-lnd-migration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v1.0.3.138"),o("OutboundLink")],1),t._v(", LND is the only lightning network implementation that allows for "),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#where-can-i-find-recovery-seed-backup-for-my-lightning-network-wallet-in-btcpay-server"}},[t._v("lightning seed backups with BTCPay Server")]),t._v(".")],1),t._v(" "),o("p",[o("strong",[t._v("BTCPay currently offers three implementations of the Lightning Network")]),t._v(":")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/lightningnetwork/lnd",target:"_blank",rel:"noopener noreferrer"}},[t._v("LND"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/ElementsProject/lightning",target:"_blank",rel:"noopener noreferrer"}},[t._v("c-lightning"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/ACINQ/eclair",target:"_blank",rel:"noopener noreferrer"}},[t._v("eclair"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"choosing-the-lightning-network-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#choosing-the-lightning-network-implementation"}},[t._v("#")]),t._v(" Choosing the Lightning Network implementation")]),t._v(" "),o("p",[t._v("First, read "),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#can-i-use-a-pruned-node-with-ln-in-btcpay"}},[t._v("here")]),t._v(" about using pruned Bitcoin nodes with lightning network implementations before deploying.")],1),t._v(" "),o("p",[t._v("On the installation, you'll have the option to choose the implementation.")]),t._v(" "),o("p",[t._v("For "),o("RouterLink",{attrs:{to:"/Deployment/LunaNode/"}},[t._v("web-interface installations")]),t._v(", you can simply select the implementation from the drop-down menu.\nFor other "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker"),o("OutboundLink")],1),t._v(" based "),o("RouterLink",{attrs:{to:"/Deployment/"}},[t._v("deployment methods")]),t._v(" you need to:")],1),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BTCPAYGEN_LIGHTNING")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"implementationgoeshere"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" ./btcpay-setup.sh -i\n")])])]),o("p",[t._v("For "),o("strong",[t._v("c-lightning")]),t._v(" use "),o("code",[t._v('export BTCPAYGEN_LIGHTNING="clightning"')])]),t._v(" "),o("p",[t._v("For "),o("strong",[t._v("LND")]),t._v(" use "),o("code",[t._v('export BTCPAYGEN_LIGHTNING="lnd"')])]),t._v(" "),o("p",[t._v("For "),o("strong",[t._v("eclair")]),t._v(" use "),o("code",[t._v('export BTCPAYGEN_LIGHTNING="eclair"')])]),t._v(" "),o("p",[t._v("For eclair it also requires "),o("code",[t._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-txindex"')])]),t._v(" "),o("p",[t._v("Finally, to begin using Lightning, your blockchain needs to be fully synced.")]),t._v(" "),o("h2",{attrs:{id:"connecting-your-internal-lightning-node-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-internal-lightning-node-in-btcpay"}},[t._v("#")]),t._v(" Connecting your internal Lightning Node in BTCPay")]),t._v(" "),o("p",[t._v("Regardless of the implementation (c-lightning or LND) you've decided to use, the process of "),o("strong",[t._v("connecting your internal Lightning Node in BTCPay Server")]),t._v(" is the same.")]),t._v(" "),o("ol",[o("li",[t._v("If you do not have a store, create one.")]),t._v(" "),o("li",[t._v("Store > Settings > Lightning > Modify")]),t._v(" "),o("li",[t._v('Select "Use internal node"')]),t._v(" "),o("li",[t._v('Click "Save"')]),t._v(" "),o("li",[t._v('See "BTC Lightning node updated" message')]),t._v(" "),o("li",[t._v("Make sure it is enabled")])]),t._v(" "),o("p",[o("strong",[t._v("Your blockchain needs to be fully synced before you try to connect your internal Lightning Node, otherwise the connection will fail.")])]),t._v(" "),o("figure",[o("img",{attrs:{src:n(565),alt:"BTCPay Server Lightning Network Setup 1",title:"BTCPay Server Lightning Network Setup 1"}})]),t._v(" "),o("figure",[o("img",{attrs:{src:n(566),alt:"BTCPay Server Lightning Network Setup 2",title:"Use the internal node"}})]),t._v(" "),o("figure",[o("img",{attrs:{src:n(567),alt:"BTCPay Server Lightning Network Setup 3",title:"Test the Lightning Network connection"}})]),t._v(" "),o("p",[t._v('To ensure that your Lightning node is connected and accessible for use in your store\'s invoices, try to test your Lightning connection by clicking the "Public Node Info" link. Verify that a successful connection is displayed. If your internal node connection fails, make sure you have a Lightning implementation '),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#i-previously-installed-btcpayserver-without-lightning-can-i-enable-it"}},[t._v("enabled")]),t._v(" on your server.")],1),t._v(" "),o("p",[t._v("If you are unable to connect to your Lightning node, try "),o("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-restart-btcpay-server"}},[t._v("restarting your server")]),t._v(" or reviewing our "),o("RouterLink",{attrs:{to:"/Troubleshooting/"}},[t._v("troubleshooting guide")]),t._v(". You will not be able to accept lightning payments in your store until your test connection shows as successful.")],1),t._v(" "),o("h2",{attrs:{id:"connecting-an-external-lightning-node-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-an-external-lightning-node-in-btcpay"}},[t._v("#")]),t._v(" Connecting an external Lightning Node in BTCPay")]),t._v(" "),o("p",[t._v('If you would like to provide your own Lightning node connection string, select the "Use custom node" option. If you aren\'t sure of which settings to use, there are some examples provided on this page to help guide you. This is typically used to connect an external Lightning node to a BTCPay Server.')]),t._v(" "),o("figure",[o("img",{attrs:{src:n(568),alt:"BTCPay Server Lightning Network Setup Custom",title:"BTCPay Server Lightning Network Setup Custom"}})]),t._v(" "),o("h2",{attrs:{id:"getting-started-with-btcpay-and-lnd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-lnd"}},[t._v("#")]),t._v(" Getting Started with BTCPay and LND")]),t._v(" "),o("p",[t._v("The easiest way to use "),o("strong",[t._v("LND implementation with BTCPay")]),t._v(" is to use "),o("strong",[o("a",{attrs:{href:"https://github.com/ShahanaFarooqui/RTL",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ride The Lightning"),o("OutboundLink")],1)]),t._v(" (RTL).")]),t._v(" "),o("figure",[o("img",{attrs:{src:n(569),alt:"Ride The Lightning in BTCPay Server",title:"Ride The Lightning in BTCPay Server"}})]),t._v(" "),o("p",[t._v("RTL is a device agnostic "),o("strong",[t._v("web user interface for Lightning Network")]),t._v(" that allows you to operate your node without leaving BTCPay, from your browser.")]),t._v(" "),o("figure",[o("img",{attrs:{src:n(570),alt:"Ride The Lightning Service in BTCPay Server",title:"Ride The Lightning Service in BTCPay Server"}})]),t._v(" "),o("p",[t._v("To initiate RTL in BTCPay, Go to "),o("strong",[t._v("Server Settings > Services > RTL > See information")]),t._v(".")]),t._v(" "),o("p",[t._v("Read the "),o("a",{attrs:{href:"https://medium.com/@suheb.khan/how-to-ride-the-lightning-447af999dcd2",target:"_blank",rel:"noopener noreferrer"}},[t._v("RTL Getting Started Guide"),o("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),o("p",[t._v("For remote use of your LND node on iOS or PC, you can use "),o("a",{attrs:{href:"https://github.com/LN-Zap/zap-tutorials/blob/master/docs/desktop/btcpay-server.mdx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zap wallet integration"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/CWhTOunTb2Q/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=CWhTOunTb2Q","data-id":"CWhTOunTb2Q"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/CWhTOunTb2Q?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("p",[t._v("Besides Zap, there are a few more wallets that allow remote control of the LND node, "),o("a",{attrs:{href:"https://nayuta.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the Nayuta wallet"),o("OutboundLink")],1),t._v(" and the "),o("a",{attrs:{href:"https://github.com/ZeusLN/zeus",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZeusLN"),o("OutboundLink")],1),t._v(". Both of which have not yet extensively been tested by the community.")]),t._v(" "),o("p",[t._v("To remotely control your LND node via web browser, you can use Lightning Joule.")]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/a9_uHJhnKR4/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=a9_uHJhnKR4","data-id":"a9_uHJhnKR4"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/a9_uHJhnKR4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("h3",{attrs:{id:"lnd-commands-lncli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lnd-commands-lncli"}},[t._v("#")]),t._v(" LND Commands lncli")]),t._v(" "),o("p",[t._v("You can use "),o("strong",[t._v("lncli commands")]),t._v(" like described in their "),o("a",{attrs:{href:"https://api.lightning.community/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),o("OutboundLink")],1),t._v(" but instead of using lncli you use the shell script in of the btcpayserver-docker repository calles bitcoin-lncli.sh.")]),t._v(" "),o("p",[t._v("If you're on Docker make sure you're in docker directory.")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n./bitcoin-lncli.sh\n")])])]),o("p",[t._v("So instead of running lncli getinfo you would run "),o("code",[t._v("./bitcoin-lncli.sh getinfo")])]),t._v(" "),o("p",[t._v("Run "),o("code",[t._v("./bitcoin-lncli.sh --help")]),t._v(" to see a full list of commands or check above mentioned API docs.")]),t._v(" "),o("h2",{attrs:{id:"getting-started-with-btcpay-and-c-lightning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-c-lightning"}},[t._v("#")]),t._v(" Getting Started with BTCPay and c-lightning")]),t._v(" "),o("p",[t._v("The most straightforward way to start using the "),o("strong",[t._v("c-lightning implementation in BTCPay")]),t._v(" is to use "),o("a",{attrs:{href:"https://github.com/shesek/spark-wallet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spark Wallet"),o("OutboundLink")],1),t._v(" integration. Just like Zap for LND, Spark is a graphical interface of your internal c-lightning node.")]),t._v(" "),o("p",[t._v("You can use "),o("strong",[t._v("Spark")]),t._v(" as an internal or external wallet. Internal wallet allows users to use Spark via the web-browser inside their BTCPay Server. You can also connect externally to a Spark mobile or desktop app just by scanning a QR code.")]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/uV1R6IQpmg8/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=uV1R6IQpmg8","data-id":"uV1R6IQpmg8"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/uV1R6IQpmg8?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("p",[t._v("Go to "),o("strong",[t._v("Server Settings > Services > Spark Server > See information")])]),t._v(" "),o("figure",[o("img",{attrs:{src:n(571),alt:"Accessing Spark wallet",title:"Accessing Spark wallet"}})]),t._v(" "),o("figure",[o("img",{attrs:{src:n(572),alt:"Accessing Spark wallet",title:"Accessing Spark wallet"}})]),t._v(" "),o("h3",{attrs:{id:"c-lightning-commands-lightning-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#c-lightning-commands-lightning-cli"}},[t._v("#")]),t._v(" c-lightning Commands lightning-cli")]),t._v(" "),o("p",[t._v("To use "),o("strong",[t._v("clightning CLI")]),t._v(" it is the same like above for "),o("code",[t._v("lncli")]),t._v(" but instead you use the shell script "),o("code",[t._v("bitcoin-lightning-cli.sh")])]),t._v(" "),o("p",[t._v("If you're on Docker make sure you're in docker directory.")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" btcpayserver-docker\n./bitcoin-lightning-cli.sh\n")])])]),o("p",[t._v("E.g. to list all commands: "),o("code",[t._v("./bitcoin-lightning-cli.sh help")]),t._v("\nor show info about the node "),o("code",[t._v("./bitcoin-lightning-cli.sh getinfo")])]),t._v(" "),o("h3",{attrs:{id:"lapps-lightning-network-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lapps-lightning-network-apps"}},[t._v("#")]),t._v(" Lapps (Lightning Network Apps)")]),t._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"https://blockstream.com/2018/03/29/blockstreams-week-of-lapps-ends/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lapps"),o("OutboundLink")],1),t._v(" are applications built on top of the "),o("a",{attrs:{href:"https://blockstream.com/2018/01/16/lightning-charge/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lightning Charge"),o("OutboundLink")],1)]),t._v(", a complimentary package that allows users and developers to easier use and develop on top of c-lightning. If you decided to use c-lightning, you can easily "),o("strong",[t._v("connect your BTCPay to any of the Lapps")]),t._v(".")]),t._v(" "),o("p",[t._v("BTCPay exposes all the necessary information required to "),o("strong",[t._v("connect your internal BTCPay c-lightning node to a Lightning Network App")]),t._v(".  Go to Server Settings > Services > Lightning charge server > See information > Credentials.")]),t._v(" "),o("p",[t._v("Below are videos that showcase how to connect some of the lapps to your BTCPay.")]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/6EHNq1anD1k/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=6EHNq1anD1k","data-id":"6EHNq1anD1k"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/6EHNq1anD1k?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/ZbM3jcxau0o/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=ZbM3jcxau0o","data-id":"ZbM3jcxau0o"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/ZbM3jcxau0o?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),t._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/EYrsU3LGpbI/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=EYrsU3LGpbI","data-id":"EYrsU3LGpbI"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/EYrsU3LGpbI?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);