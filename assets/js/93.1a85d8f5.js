(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{688:function(e,o,t){"use strict";t.r(o);var n=t(9),r=Object(n.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hardware-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-deployment"}},[e._v("#")]),e._v(" Hardware Deployment")]),e._v(" "),o("p",[e._v('Andreas Antonopoulos tells us "Not your keys, not your Bitcoin".\nHere\'s another Bitcoin axiom "Your hardware. Your node. Your keys. Your Bitcoin".')]),e._v(" "),o("p",[e._v("In order for your Bitcoin experience to be truly self-sovereign and trustless you should consider "),o("strong",[e._v("running nodes on your own hardware")]),e._v(" and internet connection.\n"),o("strong",[e._v("BTCPay Server is an excellent way to run both Bitcoin & Lightning nodes")]),e._v(".\nNot only are you validating transactions you also get the ability to accept base layer Bitcoin and second layer Lightning payments.\nTo that end here are instructions to install and host your very own BTCPay Server.")]),e._v(" "),o("p",[e._v("The process is basically the following:")]),e._v(" "),o("ol",[o("li",[e._v("Purchase and assemble hardware.")]),e._v(" "),o("li",[e._v("Install base Operating System and configure networking.")]),e._v(" "),o("li",[e._v("Install BTCPayServer-Docker.")])]),e._v(" "),o("p",[e._v("While it may be possible to "),o("strong",[e._v("install BTCPayServer or parts of it's architecture on ARM based single board computers")]),e._v(" (ie. Raspberry Pi, Odroid, OrangePi or NanoPC) the process may require additional skills and knowledge that are beyond the scope of this tutorial.\nFor the sake of speed, compatibility and ease of installation it is recommended that you use an Intel/AMD based computer with a minimum of 4 GB RAM and a 500 GB hard drive. The Gigabyte Brix or Intel NUC lines of compact computers are a great place to start. They are basically small, fanless boxes that are built using laptop components.")]),e._v(" "),o("p",[o("strong",[e._v("BTCPayServer can be successfully installed on the following hardware")]),e._v('. The end result is a small, quiet node that is fast enough to sync from block zero. The total cost is approximately $225 (including tax and delivery). These are "off the shelf" components that can be purchased from any online retailer (TigerDirect, NewEgg, Amazon, BestBuy etc). It will take roughly 24 hours to sync the Bitcoin blockchain. You can save little money by cutting the RAM and hard drive size in half.')]),e._v(" "),o("ol",[o("li",[e._v("Gigabyte Brix GB-BXBT-1900\n"),o("img",{attrs:{src:"https://i1.wp.com/lightninginabox.co/wp-content/uploads/2018/08/20150603180458_m.png?resize=300%2C254&ssl=1",alt:"Gigabyte Brix GB-BXBT-1900"}})]),e._v(" "),o("li",[e._v("Crucial 8GB DDR3L-1600 SODIMM\n"),o("img",{attrs:{src:"https://i0.wp.com/lightninginabox.co/wp-content/uploads/2018/08/204-pinsodimmddr3.png?resize=300%2C133&ssl=1",alt:"Crucial 8GB DDR3L-1600"}})]),e._v(" "),o("li",[e._v("WD Blue 1TB Mobile Hard Disk Drive\n"),o("img",{attrs:{src:"https://i1.wp.com/lightninginabox.co/wp-content/uploads/2018/08/81qCyd2gDL._SL1500_.jpg?resize=300%2C300&ssl=1",alt:"WD Blue 1 TB HDD"}})])]),e._v(" "),o("p",[e._v("Other requirements are as follows:")]),e._v(" "),o("ol",[o("li",[e._v("High speed internet connection.")]),e._v(" "),o("li",[e._v("Static IP")]),e._v(" "),o("li",[e._v("Domain Name")]),e._v(" "),o("li",[e._v("Ability to open ports (80, 443, 9735) on your router.")]),e._v(" "),o("li",[e._v("Tiny Screwdriver")]),e._v(" "),o("li",[e._v("USB Thumb Drive")]),e._v(" "),o("li",[e._v("USB Keyboard, Mouse and Monitor (for initial install only). Can be headless when completed.")]),e._v(" "),o("li",[e._v("Four Port USB Hub")])]),e._v(" "),o("p",[e._v("Assuming you purchased the hardware mentioned above, here are the build instructions.")]),e._v(" "),o("p",[o("strong",[e._v("Step 1")]),e._v(' - Configure your domain name.\nIt can take several hours for DNS changes to propagate so you should do this step first.\nLogin to your domain registrar and point an A record from your domain to the external IP address of your internet connection.\nI suggest that you use a subdomain (ie. btcpay.yourdomain.com).\nTo find your external IP address Google "whats my ip".')]),e._v(" "),o("p",[o("strong",[e._v("Step 2")]),e._v(" - Assemble your BTCPayBox (BTCPB). If you already have your own Ubuntu Server you can skip to Step 6.")]),e._v(" "),o("ul",[o("li",[e._v("Remove back cover with screwdriver.")]),e._v(" "),o("li",[e._v("Insert RAM")]),e._v(" "),o("li",[e._v("Install hard drive using included cage.")])]),e._v(" "),o("p",[o("strong",[e._v("Step 3")]),e._v(" - Download "),o("a",{attrs:{href:"https://releases.ubuntu.com/18.04/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu 18.04 Desktop Image"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Step 4")]),e._v(" - Download and install "),o("a",{attrs:{href:"https://etcher.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Etcher"),o("OutboundLink")],1),e._v(". Etcher is software that is used to flash OS images to SD cards and USB Drives.\nIn this case we will be using Etcher to flash our USB Thumb Drive with the Ubuntu OS.")]),e._v(" "),o("p",[o("strong",[e._v("Step 5")]),e._v(" - Connect your USB keyboard, mouse, monitor and thumb drive. Press the power button to boot your BTCPB using the thumb drive. The Ubuntu installation process is pretty simple and easy to follow. Here's a tutorial from the Ubuntu website. "),o("a",{attrs:{href:"https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Ubuntu Desktop"),o("OutboundLink")],1),e._v(". The GB-BXBT-1900 with BIOS version F9 (and earlier) will need to be configured for compatibility with Ubuntu 18.04, due in part to Intel's cstates. Refer to this "),o("a",{attrs:{href:"https://gist.github.com/plembo/4d52f7c71739a54f1a023814bbb87e00",target:"_blank",rel:"noopener noreferrer"}},[e._v("BXBT-1900 Setup Guide"),o("OutboundLink")],1),e._v(" for help.")]),e._v(" "),o("p",[o("strong",[e._v("Step 6")]),e._v(" - Give your BTCPB a static IP address on your local network. There are a few different ways to do this and you will find a ton of articles online. Here's a pretty simple one to follow "),o("a",{attrs:{href:"https://linuxconfig.org/how-to-configure-static-ip-address-on-ubuntu-18-04-bionic-beaver-linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to configure a static IP address on Ubuntu 18.04"),o("OutboundLink")],1),e._v('. To avoid conflicts with other devices on your network you should also set a "reservation" for your BTCPB.')]),e._v(" "),o("p",[o("strong",[e._v("Step 7")]),e._v(' - Log into your router and forward ports 80, 443 and 9735 to your BTPCB\'s local IP address. Every router is different and you should be able to find instructions for your router by searching for "Port Forward + your router make and model".')]),e._v(" "),o("p",[o("strong",[e._v("Step 8")]),e._v(" - Install OpenSSH Server, Fail2ban and GIT. OpenSSH server allows you to connect to your server using SSH clients (ie. "),o("a",{attrs:{href:"https://www.putty.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Putty"),o("OutboundLink")],1),e._v(") Fail2ban bans IP's that attempt to connect to your server and show malicious signs. GIT allows you to clone and manage repositories on github.com.\nOpen a new terminal window and type the following commands:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo apt update")])]),e._v(" "),o("li",[o("code",[e._v("sudo apt install -y openssh-server fail2ban git")])])]),e._v(" "),o("p",[o("strong",[e._v("Step 9")]),e._v(" - Install Uncomplicated Firewall (UFW) and allow only specific ports. UFW is a user-friendly front-end for managing iptables firewall rules and its main goal is to make managing iptables easier or as the name says uncomplicated.\nInstall UFW")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo apt install ufw")])])]),e._v(" "),o("p",[e._v("This command allows SSH connections from your LAN only. Replace 192.168.1.0 with your own subnet.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo ufw allow from 192.168.1.0/24 to any port 22")])])]),e._v(" "),o("p",[e._v("These ports need to be accessible from anywhere. The default subnet is 'any' unless you specify one.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo ufw allow 80, 443, 9735")])])]),e._v(" "),o("p",[e._v("Verify your configuration.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo ufw status")])])]),e._v(" "),o("p",[e._v("Enable your firewall.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo ufw enable")])])]),e._v(" "),o("p",[e._v("Reboot your BTCB and disconnect the keyboard, mouse and monitor. You should now be able to connect to your BTCB from another computer on your LAN via SSH.")]),e._v(" "),o("p",[o("strong",[e._v("Step 10")]),e._v(" - Install BTCPayServer.\nFrom another PC on your network login in to your BTCPB via SSH.")]),e._v(" "),o("p",[e._v("If you are using Windows")]),e._v(" "),o("ul",[o("li",[e._v("download "),o("a",{attrs:{href:"https://releases.ubuntu.com/18.04/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Putty"),o("OutboundLink")],1),e._v(" and create a connection to your BTCPB.")])]),e._v(" "),o("p",[e._v("If you are using another Linux machine open a new terminal and type in the following.\nYou will be prompted for your password.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ssh user@LANIP")]),e._v(" (ie. bob@192.168.1.2)")])]),e._v(" "),o("p",[e._v("Run the following commands.\nMake sure you change the "),o("code",[e._v("BTCPAY_HOST")]),e._v(" parameter to your own domain name.")]),e._v(" "),o("p",[e._v("Login as root")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("sudo su -")])])]),e._v(" "),o("p",[e._v("Create a folder for BTCPay")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("mkdir BTCPayServer")])]),e._v(" "),o("li",[o("code",[e._v("cd BTCPayServer")])])]),e._v(" "),o("p",[e._v("Clone the btcpayserver-docker repository")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("git clone https://github.com/btcpayserver/btcpayserver-docker")])]),e._v(" "),o("li",[o("code",[e._v("cd btcpayserver-docker")])])]),e._v(" "),o("p",[e._v("Set your environment variables.\nRun each command separately.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v('export BTCPAY_HOST="btcpay.YourDomain.com"')])]),e._v(" "),o("li",[o("code",[e._v('export NBITCOIN_NETWORK="mainnet"')])]),e._v(" "),o("li",[o("code",[e._v('export BTCPAYGEN_CRYPTO1="btc"')])]),e._v(" "),o("li",[o("code",[e._v('export BTCPAYGEN_CRYPTO2="ltc"')])]),e._v(" "),o("li",[o("code",[e._v('export BTCPAYGEN_REVERSEPROXY="nginx"')])]),e._v(" "),o("li",[o("code",[e._v('export BTCPAYGEN_LIGHTNING="clightning"')])])]),e._v(" "),o("p",[e._v("The last step is to launch the BTCPayServer setup script.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v(". ./btcpay-setup.sh -i")])]),e._v(" "),o("li",[o("code",[e._v("exit")])])]),e._v(" "),o("p",[o("strong",[e._v("Step 11")]),e._v("\nGo to https://btcpay.yourdomain.com and confirm that your nodes are syncing.\nEnjoy!")]),e._v(" "),o("p",[e._v("If you don't have the time or patience to build your own BTCPB there are a few merchants who can build one for you.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://lightninginabox.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning in a Box"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://nodl.it",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodl.it"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);o.default=r.exports}}]);