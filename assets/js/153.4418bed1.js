(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{863:function(e,t,r){"use strict";r.r(t);var a=r(17),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nbxplorer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nbxplorer"}},[e._v("#")]),e._v(" NBXplorer")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.nuget.org/packages/NBxplorer.Client",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/nuget/v/NBxplorer.Client.svg",alt:"NuGet",title:"NuGet"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://hub.docker.com/r/nicolasdorier/nbxplorer/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/docker/automated/jrottenberg/ffmpeg.svg",alt:"Docker Automated buil",title:"Docker Automated buil"}}),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://circleci.com/gh/dgarage/NBXplorer",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://circleci.com/gh/dgarage/NBXplorer.svg?style=svg",alt:"CircleCI",title:"CircleCI"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("A minimalist UTXO tracker for HD wallets.\nThe goal is to provide a flexible, .NET-based UTXO tracker for HD wallets.\nThe explorer supports P2SH, P2PKH, P2WPKH, P2WSH, Taproot and multi-signature derivations.")]),e._v(" "),t("p",[e._v("It works on a pruned node and indexes only what you track.")]),e._v(" "),t("p",[e._v("This explorer is not intended to be exposed to the internet; it should be used as an infrastructure tool for tracking the UTXOs of your own service.")]),e._v(" "),t("h2",{attrs:{id:"what-about-alternatives-to-nbxplorer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-about-alternatives-to-nbxplorer"}},[e._v("#")]),e._v(" What about alternatives to NBXplorer?")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("Electrum wallet")]),e._v(" requires an unpruned node with indexing, which is space-intensive and may be difficult to sync.")]),e._v(" "),t("li",[t("code",[e._v("Electrum wallet")]),e._v(" only supports a single cryptocurrency on a single server. If you are an exchange, you would end up running multiple versions of barely maintained Electrum instances.")]),e._v(" "),t("li",[t("code",[e._v("Personal Electrum Server")]),e._v(" supports only a single wallet.")]),e._v(" "),t("li",[t("code",[e._v("Electrum protocol")]),e._v(" is cumbersome for HD wallets.")]),e._v(" "),t("li",[t("code",[e._v("Bitcoin Core RPC")]),e._v(" is inflexible and difficult to use. It also scales poorly when a wallet has too many addresses or UTXOs.")]),e._v(" "),t("li",[t("code",[e._v("Bitcoin Core RPC")]),e._v(" supports multiple wallets but isn't designed to handle thousands of them. Having too many wallets will not scale.")]),e._v(" "),t("li",[e._v("While NBXplorer exposes an "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),t("OutboundLink")],1),e._v(", it also allows you to query the data using the most expressive and flexible language designed for this purpose: "),t("RouterLink",{attrs:{to:"/NBXplorer/docs/Postgres-Schema/"}},[e._v("SQL")]),e._v(".")],1),e._v(" "),t("li",[e._v("Alternative SaaS infrastructure providers depend on third parties, forcing you to compromise your privacy by sharing financial information while relinquishing control over API changes and service level agreements (SLAs).")])]),e._v(" "),t("h2",{attrs:{id:"typical-usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typical-usage"}},[e._v("#")]),e._v(" Typical usage")]),e._v(" "),t("p",[e._v("You start by "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/GenerateWallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a wallet (hot wallet)"),t("OutboundLink")],1),e._v(", or "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/Track",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking a derivation scheme (cold wallet)"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Second, "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/GetUnused",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get the next unused address"),t("OutboundLink")],1),e._v(" to get paid.")]),e._v(" "),t("p",[e._v("Listen to events through "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Events/operation/GetLatest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Polling"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Events/operation/EventStream",target:"_blank",rel:"noopener noreferrer"}},[e._v("Long Polling"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Events/operation/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Sockets"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can then "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/ListTransactionDerivationScheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("List transactions"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/ListUTXOsDerivationScheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("List UTXOs"),t("OutboundLink")],1),e._v(", or "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Derivations/operation/CreatePSBT",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a PSBT"),t("OutboundLink")],1),e._v(" for your app to sign.")]),e._v(" "),t("p",[e._v("When the transaction is signed, "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Transactions/operation/Broadcast",target:"_blank",rel:"noopener noreferrer"}},[e._v("Broadcast it"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("You can also track multiple derivation schemes or individual addresses by "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/#tag/Groups/operation/Create",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a group"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"general-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-features"}},[e._v("#")]),e._v(" General features")]),e._v(" "),t("ul",[t("li",[e._v("Can pass arguments via environment variable, command line or configuration file")]),e._v(" "),t("li",[e._v("Automatically reconnect to your node if the connection goes temporarily down")]),e._v(" "),t("li",[e._v("An easy to use "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Persistence via "),t("RouterLink",{attrs:{to:"/NBXplorer/docs/Postgres-Schema/"}},[e._v("Postgres")])],1),e._v(" "),t("li",[e._v("Connect via RPC to broadcast transaction instead of using the P2P protocol like this example")]),e._v(" "),t("li",[e._v("Connect via RPC to your trusted node to get the proper fee rate.")]),e._v(" "),t("li",[e._v("Altcoin support")]),e._v(" "),t("li",[e._v("Huge test suite")]),e._v(" "),t("li",[e._v("Pruning of transaction data (in practice, we don't need to save the whole transaction, only the spent outpoint and received coin for the wallet)")]),e._v(" "),t("li",[e._v("Multi-wallet")]),e._v(" "),t("li",[e._v("Flexible address generation schemes (multisig, segwit, legacy etc...)")]),e._v(" "),t("li",[e._v("Pruning for big wallets (Removal of tracked transaction which do not impact the resulting UTXO set)")])]),e._v(" "),t("p",[e._v("It currently supports the following altcoins:")]),e._v(" "),t("ul",[t("li",[e._v("Althash")]),e._v(" "),t("li",[e._v("Argoneum")]),e._v(" "),t("li",[e._v("BCash (also known as Bitcoin Cash)")]),e._v(" "),t("li",[e._v("BGold (also known as Bitcoin Gold)")]),e._v(" "),t("li",[e._v("BitCore")]),e._v(" "),t("li",[e._v("Chaincoin")]),e._v(" "),t("li",[e._v("ColossusXT")]),e._v(" "),t("li",[e._v("Dash")]),e._v(" "),t("li",[e._v("Dogecoin")]),e._v(" "),t("li",[e._v("Feathercoin")]),e._v(" "),t("li",[e._v("Gobyte")]),e._v(" "),t("li",[e._v("Groestlcoin")]),e._v(" "),t("li",[e._v("Litecoin")]),e._v(" "),t("li",[e._v("Monacoin")]),e._v(" "),t("li",[e._v("MonetaryUnit")]),e._v(" "),t("li",[e._v("Monoeci")]),e._v(" "),t("li",[e._v("Polis")]),e._v(" "),t("li",[e._v("Qtum")]),e._v(" "),t("li",[e._v("Terracoin")]),e._v(" "),t("li",[e._v("Ufo")]),e._v(" "),t("li",[e._v("Viacoin")])]),e._v(" "),t("p",[e._v("Read our "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API Specification"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"prerequisite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),t("ul",[t("li",[e._v("Install "),t("a",{attrs:{href:"https://www.microsoft.com/net/download",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core SDK v8.0 or above"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Bitcoin Core instance synched and running (at least 24.0).")]),e._v(" "),t("li",[e._v("PostgresSQL v13+")])]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("--postgres")]),e._v(" flag to setup the connection string. See "),t("RouterLink",{attrs:{to:"/NBXplorer/Postgres-Schema/"}},[e._v("schema documentation")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"api-specification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-specification"}},[e._v("#")]),e._v(" API Specification")]),e._v(" "),t("p",[e._v("Read our "),t("RouterLink",{attrs:{to:"/NBXplorer/API/"}},[e._v("API Specification")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"how-to-build-and-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-and-run"}},[e._v("#")]),e._v(" How to build and run?")]),e._v(" "),t("p",[e._v("If you are using Bitcoin core default settings:")]),e._v(" "),t("p",[e._v("On Powershell:")]),e._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\build.ps1\n")])])]),t("p",[e._v("On Linux:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./build.sh\n")])])]),t("p",[e._v("Then to run:")]),e._v(" "),t("p",[e._v("On Powershell:")]),e._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\run.ps1 --help\n")])])]),t("p",[e._v("On Linux:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./run.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--help")]),e._v("\n")])])]),t("p",[e._v("Example, if you have ltc node and btc node on regtest (default configuration), and want to connect to them: (see documentation for other options in the "),t("a",{attrs:{href:"https://www.npgsql.org/doc/connection-string-parameters.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("postgres connection string"),t("OutboundLink")],1),e._v(")")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("./run.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--chains")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("btc,ltc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--network")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("regtest "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--postgres")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"User ID=postgres;Host=127.0.0.1;Port=39382;Database=nbxplorer"')]),e._v("\n")])])]),t("h2",{attrs:{id:"how-to-use-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-api"}},[e._v("#")]),e._v(" How to use the API?")]),e._v(" "),t("p",[e._v("Check "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the API documentation"),t("OutboundLink")],1),e._v(", you can then use any client library:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/junderw/NBXplorer.NodeJS",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer.NodeJS"),t("OutboundLink")],1),e._v(" for NodeJS clients.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.nuget.org/packages/NBxplorer.Client",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer.Client"),t("OutboundLink")],1),e._v(" for .NET clients.")])]),e._v(" "),t("p",[e._v("Here is "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/blob/master/Examples/MultiSig/Program.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("a small C# example"),t("OutboundLink")],1),e._v(" showing a 2-2 multisig with Alice and Bob that you can run on regtest.")]),e._v(" "),t("h2",{attrs:{id:"with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-docker"}},[e._v("#")]),e._v(" With Docker")]),e._v(" "),t("p",[e._v("Use "),t("a",{attrs:{href:"https://hub.docker.com/r/nicolasdorier/nbxplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our image"),t("OutboundLink")],1),e._v(".\nYou can check "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/blob/master/docker-compose.regtest.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("the sample"),t("OutboundLink")],1),e._v(" for configuring and composing it bitcoin core.")]),e._v(" "),t("h2",{attrs:{id:"how-to-develop-on-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-develop-on-it"}},[e._v("#")]),e._v(" How to develop on it?")]),e._v(" "),t("p",[e._v("If you are on Windows, I recommend Visual Studio 2022 (17.8.0).\nIf you are on other platform and want lightweight environment, use "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),t("OutboundLink")],1),e._v(".\nIf you are hardcore, you can code on vim.")]),e._v(" "),t("p",[e._v("I like Visual Studio Code and Visual Studio 2022 as it allows me to debug in step by step.")]),e._v(" "),t("h2",{attrs:{id:"how-to-configure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure"}},[e._v("#")]),e._v(" How to configure?")]),e._v(" "),t("p",[e._v("NBXplorer supports configuration through command line arguments, configuration file, or environment variables.")]),e._v(" "),t("h3",{attrs:{id:"configuration-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[e._v("#")]),e._v(" Configuration file")]),e._v(" "),t("p",[e._v("If you are not using standard install for bitcoind, you will have to change the configuration file:\nIn Windows it is located in")]),e._v(" "),t("div",{staticClass:"language-pwsh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("C:\\Users\\<user>\\AppData\\Roaming\\NBXplorer\\<network>\\settings.config\n")])])]),t("p",[e._v("On linux or mac:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("~/.nbxplorer/"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("network"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/settings.config\n")])])]),t("p",[e._v("The default configuration assumes "),t("code",[e._v("mainnet")]),e._v(" with only "),t("code",[e._v("btc")]),e._v(" chain supported, and uses the default settings of bitcoind.")]),e._v(" "),t("p",[e._v("You can change the location of the configuration file with the "),t("code",[e._v("--conf=pathToConf")]),e._v(" command line argument.")]),e._v(" "),t("h3",{attrs:{id:"command-line-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line-parameters"}},[e._v("#")]),e._v(" Command line parameters")]),e._v(" "),t("p",[e._v("Please note that NBXplorer uses cookie authentication by default. If you run your Bitcoin/Litecoin/Dash nodes using their daemon (like "),t("code",[e._v("bitcoind")]),e._v(", "),t("code",[e._v("litecoind")]),e._v(" or "),t("code",[e._v("dashd")]),e._v("), they generate a new cookie every time you start them, and that should work without any extra configuration.\nIf you run the node(s) using the GUI versions, like Bitcoin\\Litecoin\\Dash Core Qt with the "),t("code",[e._v("-server")]),e._v(" parameter while you set the rpcusername and rpcpassword in their "),t("code",[e._v(".conf")]),e._v(" files, you must set those values for every crypto you are planning to support.\nSee samples below.")]),e._v(" "),t("h4",{attrs:{id:"run-from-source-requires-net-core-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-from-source-requires-net-core-sdk"}},[e._v("#")]),e._v(" Run from source (requires .NET Core SDK)")]),e._v(" "),t("p",[e._v("You should use "),t("code",[e._v("run.ps1")]),e._v(" (Windows) or "),t("code",[e._v("run.sh")]),e._v(" (Linux) to execute NBXplorer, but you can also execute it manually with the following command:\n"),t("code",[e._v("dotnet run --no-launch-profile -p .\\NBXplorer\\NBXplorer.csproj -- <parameters>")])]),e._v(" "),t("h4",{attrs:{id:"run-using-built-dll-requires-net-core-runtime-only"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-using-built-dll-requires-net-core-runtime-only"}},[e._v("#")]),e._v(" Run using built DLL (requires .NET Core Runtime only)")]),e._v(" "),t("p",[e._v("If you already have a compiled DLL, you can run the executable with the following command:\n"),t("code",[e._v("dotnet NBXplorer.dll <parameters>")])]),e._v(" "),t("h4",{attrs:{id:"sample-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-parameters"}},[e._v("#")]),e._v(" Sample parameters")]),e._v(" "),t("p",[e._v("Running NBXplorer HTTP server on port 20300, connecting to the BTC mainnet node locally.\n"),t("code",[e._v("--port=20300 --network=mainnet --btcnodeendpoint=127.0.0.1:32939")])]),e._v(" "),t("p",[e._v("Running NBXplorer on testnet, supporting Bitcoin, Litecoin and Dash, using cookie authentication for BTC and LTC, and RPC username and password for Dash, connecting to all of them locally.\n"),t("code",[e._v("--chains=btc,ltc,dash --network=testnet --dashrpcuser=myuser --dashrpcpassword=mypassword")])]),e._v(" "),t("h3",{attrs:{id:"environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),t("p",[e._v("The same settings as above, for example "),t("code",[e._v("export NBXPLORER_PORT=20300")]),e._v(". This is usefull for configuring docker.")]),e._v(" "),t("h2",{attrs:{id:"how-to-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run"}},[e._v("#")]),e._v(" How to Run")]),e._v(" "),t("h3",{attrs:{id:"command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command Line")]),e._v(" "),t("p",[e._v("You can use the "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("dotnet"),t("OutboundLink")],1),e._v(" command which is part of .NET Core to run NBXplorer. To run from source you must have the .NET Core SDK installed e.g.\n"),t("code",[e._v("dotnet run NBXplorer.dll")]),e._v("\nAs described above you may add configuration parameters if desired.")]),e._v(" "),t("p",[e._v("If you have a compiled version of NBXplorer you should have a file in your build folder named NBXplorer.dll. This cannot itself be directly executed on the command line as it is not an executable file. Instead we can use the "),t("code",[e._v("dotnet")]),e._v(" runtime to execute the dll file.")]),e._v(" "),t("p",[e._v("e.g. "),t("code",[e._v("dotnet NBXplorer.dll")])]),e._v(" "),t("h2",{attrs:{id:"important-note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-note"}},[e._v("#")]),e._v(" Important Note")]),e._v(" "),t("p",[e._v("This tool will only start scanning from the configured "),t("code",[e._v("startheight")]),e._v(". (By default, the height of the blockchain during your first run)\nThis means that you might not see old payments from your HD key.")]),e._v(" "),t("p",[e._v("If you need to see old payments, you need to configure "),t("code",[e._v("--[crypto]startheight")]),e._v(" to a specific height of your choice, then run it again with "),t("code",[e._v("--[crypto]rescan")]),e._v(", e.g.\n"),t("code",[e._v("./run.sh --chains=ltc --ltcrescan --ltcstartheight=101")])]),e._v(" "),t("h2",{attrs:{id:"how-to-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-query"}},[e._v("#")]),e._v(" How to query?")]),e._v(" "),t("h3",{attrs:{id:"using-postman"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-postman"}},[e._v("#")]),e._v(" Using Postman")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.getpostman.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),t("OutboundLink")],1),e._v(" is a useful tool for testing and experimenting with REST API's.")]),e._v(" "),t("p",[e._v("You can test the "),t("a",{attrs:{href:"https://dgarage.github.io/NBXplorer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NBXplorer API"),t("OutboundLink")],1),e._v(" quickly and easily using Postman.")]),e._v(" "),t("p",[e._v("If you use cookie authentication (enabled by default) in your locally run NBXplorer, you need to set that up in Postman:")]),e._v(" "),t("ul",[t("li",[e._v("Run NBXplorer and locate you cookie file (NBXplorer will generate a new Cookie file each time it runs in "),t("RouterLink",{attrs:{to:"/NBXplorer/API/#authentication"}},[e._v("its default data folder")]),e._v(")")],1),e._v(" "),t("li",[e._v("In Postman create a new GET API test")]),e._v(" "),t("li",[e._v("In Authorization select "),t("em",[e._v("Basic Auth")]),e._v(", you should see 2 input boxes for username and password")]),e._v(" "),t("li",[e._v("Open your cookie file with a text editor e.g. Notepad on windows . You should see a cookie string e.g. "),t("code",[e._v("__cookie__:0ff9cd83a5ac7c19a6b56a3d1e7a5c96e113d42dba7720a1f72a3a5e8c4b6c66")])]),e._v(" "),t("li",[e._v("Back in Postman paste the "),t("code",[e._v("__cookie__")]),e._v(" part of your cookie file into username (whatever comes before the 😃")]),e._v(" "),t("li",[e._v("Paste the Hex string (after the : ) into the password box")]),e._v(" "),t("li",[e._v("Click the Update Request button in Postman - this will force Postman to generate the correct HTTP headers based on your cookie details")]),e._v(" "),t("li",[e._v("You should now see a new entry in the Headers section with a Key of "),t("em",[e._v("Authorization")]),e._v(" and Value of "),t("em",[e._v("Basic xxxxxxxxx")]),e._v(" where the string after "),t("code",[e._v("Basic")]),e._v(" will be your Base64 encoded username and password.")]),e._v(" "),t("li",[e._v("Enter the API URL you are going to test")])]),e._v(" "),t("p",[e._v("You can also disable authentication in NBXplorer for testing with the "),t("code",[e._v("--noauth")]),e._v(" parameter. This makes testing quicker:")]),e._v(" "),t("ul",[t("li",[e._v("Run NBXplorer with the "),t("code",[e._v("--noauth")]),e._v(" command line argument or the environment variable "),t("code",[e._v("NBXPLORER_NOAUTH=1")])]),e._v(" "),t("li",[e._v("In Postman create a new GET API test")]),e._v(" "),t("li",[e._v("In Authorization select "),t("em",[e._v("No Auth")])]),e._v(" "),t("li",[e._v("Enter the API URL you are going to test")])]),e._v(" "),t("p",[e._v("You are now ready to test the API - it is easiest to start with something simple such as the fees endpoint e.g.")]),e._v(" "),t("p",[t("code",[e._v("http://localhost:24444/v1/cryptos/btc/fees/3")])]),e._v(" "),t("p",[e._v("this should return a JSON payload e.g.")]),e._v(" "),t("p",[e._v('{\n"feeRate": 9,\n"blockCount": 3\n}')]),e._v(" "),t("h2",{attrs:{id:"message-brokers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-brokers"}},[e._v("#")]),e._v(" Message Brokers")]),e._v(" "),t("h3",{attrs:{id:"azure-service-bus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-service-bus"}},[e._v("#")]),e._v(" Azure Service Bus")]),e._v(" "),t("p",[e._v("Support has been added for Azure Service Bus as a message broker. Currently 2 Queues and 2 Topics are supported")]),e._v(" "),t("h3",{attrs:{id:"queues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),t("ul",[t("li",[e._v("New Block")]),e._v(" "),t("li",[e._v("New Transaction")])]),e._v(" "),t("h3",{attrs:{id:"topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#topics"}},[e._v("#")]),e._v(" Topics")]),e._v(" "),t("ul",[t("li",[e._v("New Block")]),e._v(" "),t("li",[e._v("New Transaction")])]),e._v(" "),t("p",[e._v("Filters should be applied on the client, if required.")]),e._v(" "),t("p",[e._v("To activate Azure Service Bus Mesages you should add an Azure Service Bus Connection string to your config file or on the command line.")]),e._v(" "),t("ul",[t("li",[e._v("To use queues you should specify the queue names you wish to use")]),e._v(" "),t("li",[e._v("To use topics you should specify the topic names you wish to use")])]),e._v(" "),t("p",[e._v("You can use both queues and topics at the same time.")]),e._v(" "),t("h4",{attrs:{id:"config-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-settings"}},[e._v("#")]),e._v(" Config Settings")]),e._v(" "),t("p",[e._v("If you use the Configuration file to setup your NBXplorer options:")]),e._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("asbcnstr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Your Azure Service Bus Connection string")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("asbblockq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of queue to send New Block message to")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("asbtranq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of queue to send New Transaction message to")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("asbblockt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of topic to send New Block message to")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("asbtrant")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of queue to send New Transaction message to")]),e._v("\n")])])]),t("h3",{attrs:{id:"rabbitmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[e._v("#")]),e._v(" RabbitMq")]),e._v(" "),t("p",[e._v("Support has been added for RabbitMq as a message broker. Currently 2 exchanges supported;")]),e._v(" "),t("ul",[t("li",[e._v("New Block")]),e._v(" "),t("li",[e._v("New Transaction")])]),e._v(" "),t("p",[e._v("Filters can be applied on the client by defining routing keys;")]),e._v(" "),t("p",[e._v("For transactions;")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("transactions.#")]),e._v(" to get all transactions.")]),e._v(" "),t("li",[t("code",[e._v("transactions.[BTC].#")]),e._v(" to get all [Bitcoin] transactions.")]),e._v(" "),t("li",[t("code",[e._v("transactions.[BTC].confirmed")]),e._v(" to get only confirmed [Bitcoin] transactions.")]),e._v(" "),t("li",[t("code",[e._v("transactions.[BTC].unconfirmed")]),e._v(" to get only unconfirmed [Bitcoin] transactions.")]),e._v(" "),t("li",[t("code",[e._v("transactions.*.confirmed")]),e._v(" to get all confirmed transactions.")]),e._v(" "),t("li",[t("code",[e._v("transactions.*.unconfirmed")]),e._v(" to get all unconfirmed transactions.")])]),e._v(" "),t("p",[e._v("For blocks;")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("blocks.#")]),e._v(" to get all blocks.")]),e._v(" "),t("li",[t("code",[e._v("blocks.[BTC]")]),e._v(" to get all [Bitcoin] blocks.")])]),e._v(" "),t("p",[e._v("To activate RabbitMq mesages you should add following settings to your config file or on the command line.")]),e._v(" "),t("ul",[t("li",[e._v("rmqhost, rmquser, rmqpass")])]),e._v(" "),t("h4",{attrs:{id:"config-settings-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-settings-2"}},[e._v("#")]),e._v(" Config Settings")]),e._v(" "),t("p",[e._v("If you use the Configuration file to setup your NBXplorer options:")]),e._v(" "),t("div",{staticClass:"language-ini extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmqhost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("RabbitMq host name")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmqvirtual")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("RabbitMq virtual host")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmquser")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("RabbitMq username")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmqpass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("RabbitMq password")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmqtranex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of exchange to send transaction messages")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[e._v("rmqblockex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[e._v("Name of exchange to send block messages")]),e._v("\n")])])]),t("p",[e._v("Payloads are JSON and map to "),t("code",[e._v("NewBlockEvent")]),e._v(", "),t("code",[e._v("NewTransactionEvent")]),e._v(" in the "),t("code",[e._v("NBXplorer.Models")]),e._v(" namespace. There is no support in NBXplorer client for message borkers at the current time. You will need to use the "),t("code",[e._v("Serializer")]),e._v(" in "),t("code",[e._v("NBXplorer.Client")]),e._v(" to de-serialize the objects or then implement your own JSON de-serializers for the custom types used in the payload.")]),e._v(" "),t("p",[e._v("For configuring serializers you can get crypto code info from "),t("code",[e._v("BasicProperties.Headers[CryptoCode]")]),e._v(" of RabbitMq messages or "),t("code",[e._v("UserProperties[CryptoCode]")]),e._v(" of Azure Service Bus messages.\nExamples can be found in unit tests.")]),e._v(" "),t("h4",{attrs:{id:"troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),t("p",[e._v("If you receive a 401 Unauthorized then your cookie data is not working. Check you are using the current cookie by opening the cookie file again - also check the date/time of the cookie file to ensure it is the latest cookie (generated when you launched NBXplorer).")]),e._v(" "),t("p",[e._v("If you receive a 404 or timeout then Postman cannot see the endpoint")]),e._v(" "),t("ul",[t("li",[e._v("are you using the correct Port ?")]),e._v(" "),t("li",[e._v("are you running postman on localhost ?")])]),e._v(" "),t("h2",{attrs:{id:"client-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-api"}},[e._v("#")]),e._v(" Client API")]),e._v(" "),t("p",[e._v("A better documentation is on the way, for now the only documentation is the client API in C# on "),t("a",{attrs:{href:"https://www.nuget.org/packages/NBxplorer.Client",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuget"),t("OutboundLink")],1),e._v(".\nThe "),t("code",[e._v("ExplorerClient")]),e._v(" classes allows you to query unused addresses, and the UTXO of an HD PubKey.\nYou can take a look at "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/blob/master/NBXplorer.Tests/UnitTest1.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("the tests"),t("OutboundLink")],1),e._v(" to see how it works.")]),e._v(" "),t("p",[e._v("There is a simple use case documented on "),t("a",{attrs:{href:"https://programmingblockchain.gitbooks.io/programmingblockchain/content/wallet/web-api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockchain Programming in C#"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"how-to-run-the-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-the-tests"}},[e._v("#")]),e._v(" How to run the tests?")]),e._v(" "),t("p",[e._v("This is easy, from repo directory:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" NBXplorer.Tests\ndotnet "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),t("p",[e._v("The tests can take long the first time, as it download Bitcoin Core binaries. (Between 5 and 10 minutes)")]),e._v(" "),t("h2",{attrs:{id:"how-to-add-support-to-my-altcoin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-support-to-my-altcoin"}},[e._v("#")]),e._v(" How to add support to my altcoin")]),e._v(" "),t("p",[e._v("First you need to add support for your altcoin to "),t("code",[e._v("NBitcoin.Altcoins")]),e._v(". (See "),t("a",{attrs:{href:"https://github.com/MetacoSA/NBitcoin/tree/master/NBitcoin.Altcoins",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("Once this is done and "),t("code",[e._v("NBXplorer")]),e._v(" updated to use the last version of "),t("code",[e._v("NBitcoin.Altcoins")]),e._v(", follow "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/blob/master/NBXplorer.Client/NBXplorerNetworkProvider.Litecoin.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Litecoin example"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If you want to test if everything is working, modify "),t("a",{attrs:{href:"https://github.com/dgarage/NBXplorer/blob/master/NBXplorer.Tests/ServerTester.Environment.cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServerTester.Environment.cs"),t("OutboundLink")],1),e._v(" to match your altcoin.")]),e._v(" "),t("p",[e._v("Then run the tests.")]),e._v(" "),t("h2",{attrs:{id:"licence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#licence"}},[e._v("#")]),e._v(" Licence")]),e._v(" "),t("p",[e._v("This project is under MIT License.")])])}),[],!1,null,null,null);t.default=o.exports}}]);