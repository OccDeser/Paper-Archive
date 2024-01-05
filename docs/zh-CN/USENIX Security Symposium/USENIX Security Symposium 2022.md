# USENIX Security Symposium 2022
## Under the Hood of DANE Mismanagement in SMTP.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#under-the-hood-of-dane-mismanagement-in-smtp) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#under-the-hood-of-dane-mismanagement-in-smtp)**
### 作者
* Hyeonmin Lee, Seoul National University
* Md. Ishtiaq Ashiq, Virginia Tech
* Moritz Müller, SIDN Labs
* Rol, University of Twente & NLnet Labs
* van Rijswijk-Deij, University of Twente & NLnet Labs
* Taekyoung "Ted" Kwon, Seoul National University
* Taejoong Chung, Virginia Tech
### 摘要
> 基于DNS的身份验证机制（DANE）是一种互联网安全协议，通过引入一种新的DNS记录类型TLSA，使得TLS连接不再依赖CA等可信第三方机构。DANE利用DNSSEC PKI提供TLSA记录的完整性和真实性。由于DANE可以解决SMTP中的安全挑战，例如STARTTLS降级攻击和接收方身份验证，它的部署量逐渐增加，已经超过了100万个具有TLSA记录的SMTP服务器域名。然而，最近的研究报告指出，DANE SMTP服务器存在普遍的配置错误，导致DANE无法广泛传播。
> 
> 
> 
> 
> 
> 
> 
> 本文研究了为什么难以正确部署和管理DANE的原因。我们的研究使用大规模、长期的测量数据来研究DANE的采用和管理情况，并结合对DANE操作者的调查，其中一些操作者服务超过了10万个域名。总体而言，我们发现即使同一实体管理两个服务器，保持名称服务器的TLSA记录与SMTP服务器的证书同步也不是一件简单的事情。此外，许多证书被配置为自动重新发布，这可能导致无效的TLSA记录。通过调查39个邮件服务器操作者，我们还了解到，尽管DANE不再要求使用CA颁发的证书，但大多数操作者仍继续使用这种证书，因为他们担心那些未部署DANE的客户端不信任他们的证书。在确定了正确管理DANE的几个操作挑战后，我们发布了自动化工具，并揭示了未解决的挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lee](https://www.usenix.org/conference/usenixsecurity22/presentation/lee)
- **PDF:** [https://www.usenix.org/system/files/sec22-lee.pdf](https://www.usenix.org/system/files/sec22-lee.pdf)
## Seeing the Forest for the Trees: Understanding Security Hazards in the 3GPP Ecosystem through Intelligent Analysis on Change Requests.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#seeing-the-forest-for-the-trees-understanding-security-hazards-in-the-3gpp-ecosystem-through-intelligent-analysis-on-change-requests) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#seeing-the-forest-for-the-trees-understanding-security-hazards-in-the-3gpp-ecosystem-through-intelligent-analysis-on-change-requests)**
### 作者
* Yi Chen, Indiana University Bloomington
* Di Tang, Indiana University Bloomington
* Yepeng Yao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS, and School of Cyber Security, University of Chinese Academy of Sciences
* Mingming Zha, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Xiaozhong Liu, Worcester Polytechnic Institute
* Haixu Tang, Indiana University Bloomington
* Dongfang Zhao, Indiana University Bloomington
### 摘要
> 随着最近有关3GPP规范中错误内容导致现实世界中的漏洞的报告，人们开始关注规范本身以及制造商和运营商对规范的维护和采用方式。本文报道了对3GPP生态系统的首项研究，旨在了解其安全隐患。我们的研究利用了414,488个变更请求（CRs），记录了从规范中发现的问题和提出的变更，这提供了有关3GPP生态系统安全保证的宝贵信息。
> 
> 
> 
> 
> 
> 
> 
> 分析这些CRs受到一个挑战的阻碍，即寻找与安全相关的CRs（SR-CRs），即使对人类专家来说，安全连接也不能轻易建立。为了识别它们，我们开发了一种新颖的NLP/ML流程，利用一小组正标记的CRs来恢复1,270个高置信度的SR-CRs。我们对它们的测量揭示了规范错误及其原因的严重后果，包括设计错误和呈现问题，特别是在与安全相关的内容中存在不一致描述（不匹配）的普遍性。发现3GPP生态系统固有的安全弱点同样重要，即在规范修复和相关系统打补丁之前就发布了SR-CR。这打开了一个"攻击窗口"，可以长达11年之久！有趣的是，我们发现一些最近报道的漏洞实际上与几年前发布的CRs有关。此外，我们还发现一组影响主要运营商和手机的漏洞，即使到今天也没有得到解决。考虑到SR-CRs的趋势没有显示任何减弱的迹象，我们提出了改进生态系统安全保证措施的建议，包括负责处理SR-CRs。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yi](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yi)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yi.pdf](https://www.usenix.org/system/files/sec22-chen-yi.pdf)
## Exploring the Unchartered Space of Container Registry Typosquatting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#exploring-the-unchartered-space-of-container-registry-typosquatting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#exploring-the-unchartered-space-of-container-registry-typosquatting)**
### 作者
* Guannan Liu, Virginia Tech
* Xing Gao, University of Delaware
* Haining Wang, Virginia Tech
* Kun Sun, George Mason University
### 摘要
> 随着容器化应用的日益流行，容器仓库已经托管了数百万个仓库，允许开发人员存储、管理和共享他们的软件。不幸的是，它们也成为了敌对方传播恶意镜像给公众的温床。在本文中，我们首次对容器仓库对拼写错误攻击的漏洞进行了深入研究，其中敌对方故意上传具有与良性镜像相似的恶意镜像，以便用户由于拼写错误而意外下载到恶意镜像。我们证明，这种拼写错误攻击可能对公共和私有仓库以及多个平台构成严重的安全威胁。为了揭示容器仓库拼写错误攻击的威胁，我们首先进行了一项测量研究和210天的概念验证，揭示人类用户确实会产生随机的拼写错误并下载不需要的容器镜像。我们还系统地调查了私有仓库的攻击向量，并揭示其命名空间是开放的，很容易被利用来发动拼写错误攻击。此外，对于跨多个平台的拼写错误攻击，我们证明敌对方可以轻松自托管恶意仓库或利用现有容器仓库来操作具有类似身份标识的仓库。最后，我们提出了CRYSTAL，这是对现有图像管理的轻量级扩展，可以有效地防御容器用户和仓库对拼写错误攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-guannan](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-guannan)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-guannan.pdf](https://www.usenix.org/system/files/sec22-liu-guannan.pdf)
## Uninvited Guests: Analyzing the Identity and Behavior of Certificate Transparency Bots.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#uninvited-guests-analyzing-the-identity-and-behavior-of-certificate-transparency-bots) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#uninvited-guests-analyzing-the-identity-and-behavior-of-certificate-transparency-bots)**
### 作者
* Brian Kondracki, Stony Brook University
* Johnny So, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 自创建以来，证书透明化（CT）一直是安全网络的重要组成部分。然而，随着TLS采用的增加，CT基本上已经成为了所有新建网站的事实日志，向公众宣布了网络终端的存在，包括那些本来可能隐藏的。因此，网络机器人可以使用CT实时探测网站，因为它们被创建。关于这些机器人、它们的行为和意图，人们知之甚少。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了一种名为CTPOT的分布式蜜罐系统，它为广告以前不存在的域名创建新的TLS证书，并记录来自多个网络视角的活动。使用CTPOT，在十周的时间内，我们创建了4,657个TLS证书，并吸引了31,898个唯一IP地址的150万个网页请求。我们发现CT机器人占据了整体网络机器人人口的一个独特子集，在CT机器人和传统主机扫描网络机器人的IP地址之间重叠不到2%。通过创建具有不同内容类型的证书，我们能够进一步将CT机器人人口细分为不同意图的子集，揭示出这些群体之间恶意行为的鲜明对比。最后，我们通过观察每个机器人请求的文件路径，将观察到的机器人IP地址关联到攻击活动，发现了105个针对我们广告域名的恶意活动。我们的发现揭示了CT机器人生态系统的一些信息，表明它不仅与传统基于IP的机器人不同，而且由许多具有不同目标和行为的实体组成。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kondracki](https://www.usenix.org/conference/usenixsecurity22/presentation/kondracki)
- **PDF:** [https://www.usenix.org/system/files/sec22-kondracki.pdf](https://www.usenix.org/system/files/sec22-kondracki.pdf)
## Playing for K(H)eaps: Understanding and Improving Linux Kernel Exploit Reliability.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#playing-for-k-h-eaps-understanding-and-improving-linux-kernel-exploit-reliability) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#playing-for-k-h-eaps-understanding-and-improving-linux-kernel-exploit-reliability)**
### 作者
* Kyle Zeng, Arizona State University
* Yueqi Chen, Pennsylvania State University
* Haehyun Cho, Arizona State University and Soongsil University
* Xinyu Xing, Pennsylvania State University
* Adam Doupé, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Tiffany Bao, Arizona State University
### 摘要
> Linux内核堆布局的动态显著影响内核堆利用的可靠性，使得评估其可利用性变得具有挑战性。尽管过去已经提出了一些稳定利用技术，但很少有科学研究来评估其有效性并探索其工作条件。
> 
> 
> 
> 
> 
> 
> 
> 在本论文中，我们对内核堆利用可靠性问题进行了系统研究。我们首先采访了内核安全专家，收集了常用的利用稳定化技术，以及对这些技术的专家意见。然后我们在17个真实世界的内核堆利用案例上评估了这些稳定化技术。结果表明，许多内核安全专家对利用稳定化技术持有错误的观点。为了帮助安全社区更好地理解利用稳定化，我们检查了实验结果，并设计了一个通用的内核堆利用模型。我们使用该提出的利用模型来解释利用不可靠性问题，并分析为什么稳定技术会成功或失败。我们还利用该模型提出了一种新的利用技术。我们的实验表明，这种新的稳定化技术平均提高了Linux内核利用的可靠性14.87%。将这种新提出的技术与现有的稳定化方法结合起来，可以产生一种复合稳定化方法，其平均利用可靠性提高了135.53%，超过了专业安全研究人员的利用稳定化效果，提高了67.86%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zeng](https://www.usenix.org/conference/usenixsecurity22/presentation/zeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-zeng.pdf](https://www.usenix.org/system/files/sec22-zeng.pdf)
## In-Kernel Control-Flow Integrity on Commodity OSes using ARM Pointer Authentication.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#in-kernel-control-flow-integrity-on-commodity-oses-using-arm-pointer-authentication) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#in-kernel-control-flow-integrity-on-commodity-oses-using-arm-pointer-authentication)**
### 作者
* Sungbae Yoo, Samsung Research
* Jinbum Park, Samsung Research
* Seolheui Kim, Samsung Research
* Yeji Kim, Samsung Research
* Taesoo Kim, Samsung Research and Georgia Institute of Technology
### 摘要
> 本文介绍了一种基于硬件的内核控制流完整性（CFI）保护，称为PAL，它利用了ARM的指针验证（PA）。与商业化、最先进的基于PA的CFI（如iOS的）相比，它提供了三个重要的优势：1）通过自动化精炼技术增强CFI精确性；2）解决PA在内核使用中的后见之明问题，如抢占劫持和暴力攻击；3）通过后验证确保算法或实现的正确性。
> 
> 
> 
> 
> 
> 
> 
> PAL以操作系统无关的方式实现这些目标，因此可以应用于像Linux和FreeBSD这样的通用操作系统。CFI保护的精确性可以通过最小的工程努力进行调整，以获得更好的性能或更好的安全性。我们的评估结果显示，PAL几乎没有性能开销：例如，在最新的Mac mini（M1）上进行Apache基准测试时，开销小于1%，在Linux性能基准测试上开销为3-5%。我们的后验证方法帮助我们确保PA在内核内部的安全使用所需的安全不变量，同时也揭示了iOS内核上的新攻击向量。PAL以及受CFI保护的内核将开源。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yoo](https://www.usenix.org/conference/usenixsecurity22/presentation/yoo)
- **PDF:** [https://www.usenix.org/system/files/sec22-yoo.pdf](https://www.usenix.org/system/files/sec22-yoo.pdf)
## Midas: Systematic Kernel TOCTTOU Protection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#midas-systematic-kernel-tocttou-protection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#midas-systematic-kernel-tocttou-protection)**
### 作者
* Atri Bhattacharyya, EPFL
* Uros Tesic, Nvidia
* Mathias Payer, EPFL
### 摘要
> 重复提取错误是所有主要操作系统内核中的一大灾难。当数据在允许并发修改的同时在用户/内核信任边界上被提取两次时，就会发生这种错误。这些错误使攻击者能够非法访问内存，造成拒绝服务或升级特权。到目前为止，对抗重复提取错误的唯一保护措施是检测和修复它们。然而，它们仍然非常难以发现。类似地，它们基本上阻止了高效的基于内核的有状态系统调用过滤。我们提出了Midas来减轻重复提取错误。Midas根据需要创建访问数据的即时快照和副本，强制执行我们的关键不变量：在系统调用的整个生命周期中，对用户空间对象的每次读取都将返回相同的值。
> 
> 
> 
> 
> 
> 
> 
> 在计算受限的工作负载评估时，Midas在性能上没有明显下降。在系统调用繁重的工作负载下，Midas的性能开销为0.2-14%，同时保护内核免受任何TOCTTOU攻击。平均而言，在两个基准套件中，Midas在不同工作负载下表现出3.4%的开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bhattacharyya](https://www.usenix.org/conference/usenixsecurity22/presentation/bhattacharyya)
- **PDF:** [https://www.usenix.org/system/files/sec22-bhattacharyya.pdf](https://www.usenix.org/system/files/sec22-bhattacharyya.pdf)
## LinKRID: Vetting Imbalance Reference Counting in Linux kernel with Symbolic Execution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#linkrid-vetting-imbalance-reference-counting-in-linux-kernel-with-symbolic-execution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#linkrid-vetting-imbalance-reference-counting-in-linux-kernel-with-symbolic-execution)**
### 作者
* Jian Liu, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Lin Yi, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, Chinese Academy of Sciences
* Weiteng Chen, UC Riverside
* Chengyu Song, UC Riverside
* Zhiyun Qian, UC Riverside
* Qiuping Yi, Beijing University of Posts and Telecommunications and Beijing Key Lab of Intelligent Telecommunication Software and Multimedia
### 摘要
> Linux 内核采用引用计数器来记录共享内核对象的引用数，以跟踪其生命周期并避免像使用后释放错误这样的内存错误。然而，引用计数器的使用可能很棘手，并且往往容易出错，尤其考虑到内核管理引用计数器的独特约定（例如，内部与外部引用计数器）。在本文中，我们旨在自动发现引用计数器的错误使用，克服两个关键挑战：(1)可扩展性和(2)前述独特的内核约定。具体而言，我们开发了一个基于分层程序分析的解决方案，以高效准确地检查实际引用数的变化与相应的引用计数器之间的不平衡。我们将我们的工具应用于4.14.0 内核（使用了allyesconfig），并发现了118个错误，其中87个是新错误。结果表明我们的工具具有可扩展性和有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-jian](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-jian)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-jian.pdf](https://www.usenix.org/system/files/sec22-liu-jian.pdf)
## Mining Node.js Vulnerabilities via Object Dependence Graph and Query.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mining-node-js-vulnerabilities-via-object-dependence-graph-and-query) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mining-node-js-vulnerabilities-via-object-dependence-graph-and-query)**
### 作者
* Song Li, Johns Hopkins University
* Mingqing Kang, Johns Hopkins University
* Jianwei Hou, Johns Hopkins University/Renmin University of China
* Yinzhi Cao, Johns Hopkins University
### 摘要
> Node.js 是一种受欢迎的非浏览器 JavaScript 平台，提供了一些有用但有时也会存在漏洞的软件包。一方面，之前的研究提出了许多基于程序分析的方法来检测 Node.js 的漏洞，比如命令注入和原型污染，但它们只适用于特定的漏洞，并不能推广到广泛的 Node.js 漏洞。另一方面，之前针对 C/C++ 和 PHP 的研究提出了基于图查询的方法，比如代码属性图 (CPG)，用于高效挖掘漏洞，但由于 JavaScript 语言广泛使用动态特性，这些方法并不直接适用于 JavaScript。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了流敏感和上下文敏感的静态分析方法，结合分支敏感性和指针信息，生成一种新的图结构，称为对象依赖图 (ODG)，采用抽象解释来实现。ODG 将 JavaScript 对象表示为节点，并使用抽象语法树 (AST) 表示它们与关系，可以进行图查询，特别是在对象查找和定义方面，以检测 Node.js 的漏洞。
> 
> 
> 
> 
> 
> 
> 
> 我们实现了一个名为 ODGEN 的开源原型系统，通过抽象解释来为 Node.js 程序生成 ODG，并检测漏洞。我们对最近的 Node.js 漏洞进行评估，结果显示 ODG 结合 AST 和控制流图 (CFG) 可以模拟 16 种漏洞类型中的 13 种。我们使用图查询将 ODGEN 应用于检测六种漏洞类型，结果正确报告了180个零日漏洞，其中我们已经获得了70个公共漏洞和暴露 (CVE) 标识符。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-song](https://www.usenix.org/conference/usenixsecurity22/presentation/li-song)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-song.pdf](https://www.usenix.org/system/files/sec22-li-song.pdf)
## Mistrust Plugins You Must: A Large-Scale Study Of Malicious Plugins In WordPress Marketplaces.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mistrust-plugins-you-must-a-large-scale-study-of-malicious-plugins-in-wordpress-marketplaces) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mistrust-plugins-you-must-a-large-scale-study-of-malicious-plugins-in-wordpress-marketplaces)**
### 作者
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Jonathan Fuller, Georgia Institute of Technology
* Yiting Sun, Georgia Institute of Technology
* Omar Chabklo, Georgia Institute of Technology
* Andres Rodriguez, Georgia Institute of Technology
* Jeman Park, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
### 摘要
> 现代网站的美观和功能大部分来自内容管理系统（CMS）插件，这些插件在广受欢迎的市场上被买卖。受经济激励的驱使，攻击者滥用了对这一经济体系的信任：在合法市场上销售恶意软件，盗版热门插件，并在部署后感染插件。本研究研究了从2012年起在超过40万个生产服务器上的CMS插件的演变。我们开发了一个自动化框架YODA，用于检测恶意插件并追踪它们的来源。YODA在24,931个独特网站上发现了47,337个恶意插件。其中，有41500美元花费在合法插件市场上销售的3685个恶意插件上。盗版插件使开发者损失了228,000美元的收入。部署后的攻击使价值834,000美元的之前无害的插件感染了恶意软件。最后，YODA用于指导我们的纠正工作，因为这些恶意插件中超过94%目前仍然活跃。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kasturi](https://www.usenix.org/conference/usenixsecurity22/presentation/kasturi)
- **PDF:** [https://www.usenix.org/system/files/sec22-kasturi.pdf](https://www.usenix.org/system/files/sec22-kasturi.pdf)
## Web Cache Deception Escalates!
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#web-cache-deception-escalates) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#web-cache-deception-escalates)**
### 作者
* Seyed Ali Mirheidari, University of Trento & Splunk Inc.
* Matteo Golinelli, University of Trento
* Kaan Onarlioglu, Akamai Technologies
* Engin Kirda, Northeastern University
* Bruno Crispo, University of Trento
### 摘要
> 网络缓存欺骗（WCD）将网络缓存误导存储敏感内容，从而使其在互联网上广泛可访问。在一篇名为《缓存和混淆：野外网络缓存欺骗》的USENIX Security Symposium 2020论文中，研究人员首次系统地探索了对340多个网站的攻击。这种用于WCD检测的先进方法通过向网站注入标识并检查是否泄漏到缓存中。然而，这种方案存在两个基本局限性：1）它无法探测那些没有提供标识注入或反射途径的网站。2）标识设置是一个繁琐的过程，使得大规模测量变得不可行。总的来说，之前所有关于WCD的文献都只关注在身份验证门后受保护的网站上个人信息泄漏，对于我们完全理解WCD的全部影响留下了重要的空白。
> 
> 
> 
> 
> 
> 
> 
> 我们扩展了对WCD攻击、其传播和影响的了解。我们提出了一种新颖的WCD检测方法，它放弃了测试先决条件，并利用页面相似性检查和缓存头部启发式来测试任何网站。我们对404个网站进行了比较实验，结果显示我们的方案发现了100多个漏洞，而《缓存和混淆》则只有18个。凭借一种不受先前工作限制的技术，我们在Alexa Top 10K上进行了迄今为止规模最大的WCD实验，并检测到1188个易受攻击的网站。我们提供了案例研究，显示WCD的后果远不止个人信息泄漏，而且针对非身份验证页面的攻击具有极大破坏力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari](https://www.usenix.org/conference/usenixsecurity22/presentation/mirheidari)
- **PDF:** [https://www.usenix.org/system/files/sec22-mirheidari.pdf](https://www.usenix.org/system/files/sec22-mirheidari.pdf)
## FUGIO: Automatic Exploit Generation for PHP Object Injection Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fugio-automatic-exploit-generation-for-php-object-injection-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fugio-automatic-exploit-generation-for-php-object-injection-vulnerabilities)**
### 作者
* Sunnyeo Park, KAIST
* Daejun Kim, KAIST
* Suman Jana, Columbia University
* Sooel Son, KAIST
### 摘要
> PHP对象注入（POI）漏洞是一种安全性关键的错误，允许在易受攻击的PHP应用程序中执行远程代码的类方法。利用此漏洞通常需要先进的面向属性的编程来形成注入对象。现有的现成工具仅专注于识别潜在的POI漏洞，而不确认任何利用对象的存在。为此，我们提出了FUGIO，这是第一个针对POI漏洞的自动利用生成（AEG）工具。FUGIO通过进行粗粒度的静态和动态程序分析，生成一系列作为利用对象蓝图的小工具链列表。然后，FUGIO使用这些已识别的链条进行模糊测试，并生成利用对象。FUGIO从包含已知POI漏洞的30个应用程序中生成了68个利用对象，并不存在任何误报。FUGIO还发现了两个以前未报告的POI漏洞，其中包含五个利用，证明了其生成有效利用的能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/park-sunnyeo](https://www.usenix.org/conference/usenixsecurity22/presentation/park-sunnyeo)
- **PDF:** [https://www.usenix.org/system/files/sec22-park-sunnyeo.pdf](https://www.usenix.org/system/files/sec22-park-sunnyeo.pdf)
## TLS-Anvil: Adapting Combinatorial Testing for TLS Libraries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tls-anvil-adapting-combinatorial-testing-for-tls-libraries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tls-anvil-adapting-combinatorial-testing-for-tls-libraries)**
### 作者
* Marcel Maehren, Ruhr University Bochum
* Philipp Nieting, Ruhr University Bochum
* Sven Hebrok, Paderborn University
* Robert Merget, Ruhr University Bochum
* Juraj Somorovsky, Paderborn University
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> 尽管最新版本的TLS被认为是安全的，但存在缺陷的实现可能会削弱所承诺的安全性能。这些实现缺陷源于TLS规范的复杂性，可能存在指数级的参数组合。组合测试（CT）是一种用于降低复杂性的技术，但在TLS中很难应用，因为参数之间存在语义依赖，从而使开发人员面临着一个被称为测试预言问题的重要挑战：确定软件的观察行为对于给定的测试输入是正确的。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了基于CT的测试套件TLS-Anvil，它可以高效而系统地测试参数值组合，并通过动态提取特定于实现的输入参数模型（IPM）来解决测试预言问题，我们根据TLS特定参数值的交互限制了IPM。因此，我们的方法谨慎地限制了可用的输入空间，从而使我们能够可靠地解决CT算法生成的任何值组合的测试预言问题。
> 
> 
> 
> 
> 
> 
> 
> 我们对包括OpenSSL、BoringSSL和NSS在内的13个知名TLS实现进行了TLS-Anvil的评估。我们的评估发现MatrixSSL存在两个新的漏洞，五个直接影响会话的加密操作的问题，以及15个互操作性问题，116个与错误警报处理相关的问题，以及在所有测试的库中的其他100个问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/maehren](https://www.usenix.org/conference/usenixsecurity22/presentation/maehren)
- **PDF:** [https://www.usenix.org/system/files/sec22-maehren.pdf](https://www.usenix.org/system/files/sec22-maehren.pdf)
## Open to a fault: On the passive compromise of TLS keys via transient errors.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#open-to-a-fault-on-the-passive-compromise-of-tls-keys-via-transient-errors) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#open-to-a-fault-on-the-passive-compromise-of-tls-keys-via-transient-errors)**
### 作者
* George Arnold Sullivan, University of California, San Diego
* Jackson Sippe, University of Colorado Boulder
* Nadia Heninger, University of California, San Diego
* Eric Wustrow, University of Colorado Boulder
### 摘要
> 密码学文献中众所周知，实践中最常用的数字签名方案在计算过程中存在故障时可能会造成灾难性的失效。我们利用被动和主动网络测量方法，分析了由数千万主机生成的数十亿份数字签名中有机产生的故障。我们发现，不受保护的实现中存在持续的明显硬件故障率，导致证书RSA私钥被攻破多年。我们观察到的错误签名使我们能够计算与十大Alexa站点相关联的私密RSA密钥，以及几个使用热门VPN产品的组织的浏览器信任通配符证书，还有一小部分其他网站和网络设备。这些测量结果说明了RSA PKCS#1v1.5签名填充的脆弱性，并提供了对不受保护的硬件实现面临的风险的洞察。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sullivan](https://www.usenix.org/conference/usenixsecurity22/presentation/sullivan)
- **PDF:** [https://www.usenix.org/system/files/sec22-sullivan.pdf](https://www.usenix.org/system/files/sec22-sullivan.pdf)
## Trust Dies in Darkness: Shedding Light on Samsung's TrustZone Keymaster Design.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#trust-dies-in-darkness-shedding-light-on-samsungs-trustzone-keymaster-design) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#trust-dies-in-darkness-shedding-light-on-samsungs-trustzone-keymaster-design)**
### 作者
* Alon Shakevsky, Tel-Aviv University
* Eyal Ronen, Tel-Aviv University
* Avishai Wool, Tel-Aviv University
### 摘要
> 基于ARM架构的Android智能手机依赖于TrustZone硬件支持来实现安全敏感功能的受信任执行环境（TEE）。TEE在Android旁边并行运行一个独立的、隔离的TrustZone操作系统（TZOS）。在TZOS中的加密功能的实现由设备厂商负责，他们创建了专有的未公开文档的设计。
> 
> 
> 
> 
> 
> 
> 
> 在此工作中，我们揭示了三星Galaxy S8、S9、S10、S20和S21旗舰设备中Android硬件支持的Keystore的加密设计和实现。我们对其进行了逆向工程，并提供了加密设计和代码结构的详细描述，同时揭示了严重的设计缺陷。我们提出了一种AES-GCM的IV重用攻击，允许攻击者提取硬件保护的密钥材料，并进行降级攻击，使得即使是最新的三星设备也容易受到IV重用攻击。我们展示了对最新设备的实际密钥提取攻击。我们还展示了我们的攻击对TrustZone与远程服务器之间的两个更高级的加密协议的影响：我们展示了一个可行的FIDO2 WebAuthn登录绕过攻击和对Google安全密钥导入的破坏。
> 
> 
> 
> 
> 
> 
> 
> 我们讨论了基于TrustZone的协议设计流程中的多个缺陷。虽然我们具体的攻击仅适用于三星制造的约1亿部设备，但这引发了对关键加密和安全设计的开放和可证明标准的更普遍要求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shakevsky](https://www.usenix.org/conference/usenixsecurity22/presentation/shakevsky)
- **PDF:** [https://www.usenix.org/system/files/sec22-shakevsky.pdf](https://www.usenix.org/system/files/sec22-shakevsky.pdf)
## Breaking Bridgefy, again: Adopting libsignal is not enough.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#breaking-bridgefy-again-adopting-libsignal-is-not-enough) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#breaking-bridgefy-again-adopting-libsignal-is-not-enough)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London
* Raphael Eikenberg, Applied Cryptography Group, ETH Zurich
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich
### 摘要
> Bridgefy是一款使用基于蓝牙的网状网络的通讯应用程序。其开发者和其他人将其推广为适用于涉及抗议者和国家代理人对峙的大规模抗议活动区域。2020年8月，一份安全分析报告指出了严重的漏洞，使Bridgefy的保密性、身份验证和弹性的声明失效。作为回应，开发者采用了Signal协议，然后继续将其应用程序宣传为适用于高风险用户。
> 
> 
> 
> 
> 
> 
> 
> 在本项研究中，我们分析了修订后的Bridgefy Messenger和SDK的安全性，并否定了其安全性声明。一种攻击（针对Messenger）使对手能够利用时间检查到使用时间（TOCTOU）问题来破坏私人消息的保密性，规避Signal的保证。另一种攻击（针对SDK）允许对手在不知道整个网络的共享加密密钥的情况下恢复广播消息。
> 
> 
> 
> 
> 
> 
> 
> 我们还发现，对2020年8月分析的应对措施未能解决先前报道的漏洞。具体而言，我们表明（i）协议仍然容易受到主动中间人攻击，（ii）对手仍然能够在Bridgefy Messenger的广播频道中冒充其他用户，（iii）使用解压缩炸弹的拒绝服务攻击仍然适用，虽然形式有限，以及（iv）Bridgefy的隐私问题仍然基本上未解决。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albrecht](https://www.usenix.org/conference/usenixsecurity22/presentation/albrecht)
- **PDF:** [https://www.usenix.org/system/files/sec22-albrecht.pdf](https://www.usenix.org/system/files/sec22-albrecht.pdf)
## "I feel invaded, annoyed, anxious and I may protect myself": Individuals' Feelings about Online Tracking and their Protective Behaviour across Gender and Country.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#i-feel-invaded-annoyed-anxious-and-i-may-protect-myself-individuals-feelings-about-online-tracking-and-their-protective-behaviour-across-gender-and-country) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#i-feel-invaded-annoyed-anxious-and-i-may-protect-myself-individuals-feelings-about-online-tracking-and-their-protective-behaviour-across-gender-and-country)**
### 作者
* Kovila P.L. Coopamootoo, Newcastle University
* Maryam Mehrnezhad, Newcastle University
* Ehsan Toreini, Durham University
### 摘要
> 在线追踪是网络用户的主要关注点，然而先前的研究并未发现追踪的认知理解与保护行为之间存在明确的联系。我们假设保护行为是在情感评估追踪后发生的。我们进行了一项在线研究，共有614名参与者来自英国、德国和法国，调查用户对第三方追踪的情感感受以及他们采取的保护行为。我们发现大多数参与者对追踪的感受是负面的，被描述为深度的侵入——超越信息领域，包括烦恼和焦虑的感受，这些感受预示着保护行为的发生。我们还观察到了“隐私性别差距”的迹象，即女性对追踪的负面感受更强烈，但相对于男性，她们采取保护措施的可能性较低。与来自德国和法国的人相比，英国的个人报告的负面感受和保护行为较少。本文对隐私威胁的情感评估及其对保护行为的预测作出了贡献。同时，它还对这些研究结果对各利益相关者的影响进行了讨论，提出了建议，并概述了未来工作的方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/coopamootoo](https://www.usenix.org/conference/usenixsecurity22/presentation/coopamootoo)
- **PDF:** [https://www.usenix.org/system/files/sec22-coopamootoo.pdf](https://www.usenix.org/system/files/sec22-coopamootoo.pdf)
## "Like Lesbians Walking the Perimeter": Experiences of U.S. LGBTQ+ Folks With Online Security, Safety, and Privacy Advice.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#like-lesbians-walking-the-perimeter-experiences-of-u-s-lgbtq-folks-with-online-security-safety-and-privacy-advice) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#like-lesbians-walking-the-perimeter-experiences-of-u-s-lgbtq-folks-with-online-security-safety-and-privacy-advice)**
### 作者
* Christine Geeng, University of Washington
* Mike Harris, University of Washington
* Elissa Redmiles, Max Planck Institute for Software Systems
* Franziska Roesner, University of Washington
### 摘要
> 鉴于对同性恋者或跨性别者的污名化和威胁，LGBTQ+ 人士经常寻求支持和信息，以应对身份认同和个人（数字和实体）安全的挑战。而以往关于数字安全建议的研究主要针对普通人群和一般建议，我们的研究重点关注酷儿安全、安全和隐私建议的需求，以确定特定人群的需求，并为更广泛的建议研究提供参考。我们采访了14位酷儿参与者进行定性半结构化访谈，涵盖了种族、年龄、性别、性取向和社会经济地位的多样性。我们发现，参与者常常向他们信任的酷儿支持群体寻求建议，因为他们经常面临相似的威胁。我们还记录了参与者有时拒绝建议的原因，包括它可能干扰他们的物质生计和与他人建立联系的可能性。基于我们的研究结果，我们建议酷儿特定和一般的安全和安全建议关注具体性——为什么以及如何——而不是一致性，因为建议不能适用于所有人。我们还讨论了交叉性别的价值，作为了解安全研究中的脆弱性的框架，因为我们参与者的交叉性别身份影响了他们的威胁模型和建议观念。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/geeng](https://www.usenix.org/conference/usenixsecurity22/presentation/geeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-geeng.pdf](https://www.usenix.org/system/files/sec22-geeng.pdf)
## "They Look at Vulnerability and Use That to Abuse You": Participatory Threat Modelling with Migrant Domestic Workers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#they-look-at-vulnerability-and-use-that-to-abuse-you-participatory-threat-modelling-with-migrant-domestic-workers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#they-look-at-vulnerability-and-use-that-to-abuse-you-participatory-threat-modelling-with-migrant-domestic-workers)**
### 作者
* Julia Słupska, University of Oxford
* Selina Cho, University of Oxford
* Marissa Begonia, Voice of Domestic Workers
* Ruba Abu-Salma, King's College London
* Nayanatara Prakash, University of Oxford
* Mallika Balakrishnan, Migrants Organise
### 摘要
> 被边缘化群体（例如外籍家政工）在数字隐私和安全研究中的需求常被忽视。如果考虑到，外籍家政工则被视为“旁观者”，甚至被视为威胁，而不是监控的目标和合法的安全主体。我们采用参与式威胁建模（PTM）作为一种整合边缘化人群经验的方法，与32名英国的外籍家政工进行了五次研讨会，以确定对他们隐私和安全的威胁。我们发现外籍家政工认为政府监控、骗局和骚扰以及雇主监控（依此顺序）是对他们隐私和安全的主要威胁。我们还调查了外籍家政工在网络上保持安全的方法，例如配置在线账户的隐私设置，以及创建在线和线下的社区支持网络。根据我们的发现，我们制定并传播了一份数字隐私和安全指南，并提供进一步资源的链接供外籍家政工参考。我们的结论是，安全研究必须考虑到更广泛的社会结构，例如性别化的工作和种族边境政策，这些结构会加剧外籍家政工生活中的不安全感。我们还提出了我们工作的关键教训，包括从不拥有技术设备但受其影响的利益相关者的角度考虑数据共享，并反思安全研究如何停止支持有害的监控形式。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-vulnerability](https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-vulnerability)
- **PDF:** [https://www.usenix.org/system/files/sec22-slupska-vulnerability.pdf](https://www.usenix.org/system/files/sec22-slupska-vulnerability.pdf)
## Networks of Care: Tech Abuse Advocates' Digital Security Practices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#networks-of-care-tech-abuse-advocates-digital-security-practices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#networks-of-care-tech-abuse-advocates-digital-security-practices)**
### 作者
* Julia Slupska, University of Oxford
* Angelika Strohmayer, Northumbria University
### 摘要
> 随着技术成为关系虐待和强制控制的促成因素，支持幸存者的倡导者开始制定数字安全实践来对抗这一问题。现有关于技术相关虐待的研究主要集中在描述虐待的动态和制定解决方案上；我们通过关注在国内暴力庇护所和其他支持服务中工作的倡导者的安全实践来扩充这一文献。我们通过进行26个半结构化访谈和数据走查研讨会收集了研究结果，倡导者在其中描述了他们如何支持幸存者。我们确定了各种相互交织的情感和技术支持实践，包括建立信任、安全计划、赋权、揭去神秘、支持证据收集和推荐。通过与其他服务和利益相关方建立关系，倡导者还在整个社会中建立了关怀网络，为幸存者创造更有支持性的环境。运用批判和女性主义理论，我们认为倡导者是减少这种暴力的关键技术专家。安全和隐私研究人员可以通过采用参与式方法和扩展威胁建模以考虑强制控制等人际伤害和结构性歧视形式，如厌女主义和种族主义，来构建和发展这些关怀网络。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-networks](https://www.usenix.org/conference/usenixsecurity22/presentation/slupska-networks)
- **PDF:** [https://www.usenix.org/system/files/sec22-slupska-networks.pdf](https://www.usenix.org/system/files/sec22-slupska-networks.pdf)
## How Long Do Vulnerabilities Live in the Code? A Large-Scale Empirical Measurement Study on FOSS Vulnerability Lifetimes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-long-do-vulnerabilities-live-in-the-code-a-large-scale-empirical-measurement-study-on-foss-vulnerability-lifetimes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-long-do-vulnerabilities-live-in-the-code-a-large-scale-empirical-measurement-study-on-foss-vulnerability-lifetimes)**
### 作者
* Nikolaos Alexopoulos, Technical University of Darmstadt
* Manuel Brack, Technical University of Darmstadt
* Jan Philipp Wagner, Technical University of Darmstadt
* Tim Grube, Technical University of Darmstadt
* Max Mühlhäuser, Technical University of Darmstadt
### 摘要
> 大型、不断演化的项目中，漏洞存在多长时间？虽然这个问题已在在线论坛上被软件社区认为是一个有趣的问题，但由于确定漏洞引入的确切时间点的过程特别繁琐，所以尚未得到充分深入和广泛的调查。在本文中，我们提供了一个自动化方法，准确估计漏洞在代码中存在的时间（即其寿命）。我们的方法依赖于这样一个观察结果：虽然很难确定一个漏洞的确切引入点，但通过一种启发式方法，可以准确估计足够大的漏洞样本的平均寿命。
> 
> 
> 
> 
> 
> 
> 
> 通过我们的方法，我们进行了首次大规模测量自由和开源软件漏洞寿命的研究，超越了先前研究中估计下限的方法。我们发现漏洞的平均寿命约为4年，不同项目之间存在显著差异（Chromium约为2年，OpenSSL约为7年）。寿命的分布大致可以用指数分布来描述。在考虑特定项目时，不同漏洞类型的寿命没有统计学上的显著差异。漏洞随着时间的推移而变老，根据修复漏洞的年份来看，平均寿命随时间增加，受到代码年龄总体增加的影响。然而，它们的寿命较非漏洞代码更短，对于某些项目来说，随时间的推移，差异增大，暗示了一种可以被视为质量指标的成熟度概念。尽管模糊测试器并不显著减少与内存相关的漏洞的寿命，但还需要进一步研究以更好地理解和量化模糊测试器和其他工具对漏洞寿命和代码库安全性的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/alexopoulos](https://www.usenix.org/conference/usenixsecurity22/presentation/alexopoulos)
- **PDF:** [https://www.usenix.org/system/files/sec22-alexopoulos.pdf](https://www.usenix.org/system/files/sec22-alexopoulos.pdf)
## Expected Exploitability: Predicting the Development of Functional Vulnerability Exploits.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#expected-exploitability-predicting-the-development-of-functional-vulnerability-exploits) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#expected-exploitability-predicting-the-development-of-functional-vulnerability-exploits)**
### 作者
* Octavian Suciu, University of Maryland, College Park
* Connor Nelson, Arizona State University
* Zhuoer Lyu, Arizona State University
* Tiffany Bao, Arizona State University
* Tudor Dumitraș, University of Maryland, College Park
### 摘要
> 在公开披露时评估软件漏洞的利用性是困难且容易出错的，因为现有指标通过技术分析提取的特征很难预测利用程序的开发情况。此外，利用性评估存在偏见，因为“不可利用”的标签可能不准确。
> 
> 
> 
> 
> 
> 
> 
> 为了克服这些挑战，我们提出了一项新的度量标准，称为预期利用性（EE），该度量标准反映了随着时间推移，功能利用程序开发的可能性。我们解决方案的关键在于对利用性的时变视图，这与现有的度量标准有所不同。这使我们能够使用数据驱动技术从披露后发布的文献和概念验证利用等构件中学习EE，并为它们设计新颖的特征集。
> 
> 
> 
> 
> 
> 
> 
> 这种视图还使我们能够研究标签偏差对分类器的影响。我们对利用预测的噪声生成过程进行了表征，表明我们的问题受到了最具挑战性的类型的标签噪声的影响，并提出了在噪声存在的情况下学习EE的技术。
> 
> 
> 
> 
> 
> 
> 
> 在包含103,137个漏洞的数据集上，我们展示了EE对现有度量的精确性提高了从49%到86%，包括两种最先进的利用分类器，而且其精确性随时间大幅提高。我们还强调了EE预测即将发生的漏洞利用和优先处理关键漏洞的实际效用。
> 
> 
> 
> 
> 
> 
> 
> 我们将EE开发成一个在线平台，可以在https://exploitability.app/上公开使用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/suciu](https://www.usenix.org/conference/usenixsecurity22/presentation/suciu)
- **PDF:** [https://www.usenix.org/system/files/sec22-suciu.pdf](https://www.usenix.org/system/files/sec22-suciu.pdf)
## OS-Aware Vulnerability Prioritization via Differential Severity Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#os-aware-vulnerability-prioritization-via-differential-severity-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#os-aware-vulnerability-prioritization-via-differential-severity-analysis)**
### 作者
* Qiushi Wu, University of Minnesota
* Yue Xiao, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Kangjie Lu, University of Minnesota
### 摘要
> Linux内核快速演进并且被广泛定制。这导致了成千上万个版本和派生版本。不幸的是，Linux内核相当脆弱。每年都会报告数千个错误，其中数百个与安全有关。鉴于资源有限，内核维护者必须优先修补更严重的漏洞。实际上，通用漏洞评分系统（CVSS）[1]已成为表征漏洞严重程度的标准。然而，CVSS遇到Linux时存在一个基本问题——它以一种“一刀切”的方式使用。仅为主流Linux评估了Linux漏洞的严重性，而所有受影响的版本和派生版本只会简单地遵守和重复使用CVSS评分。这种无差别的CVSS使用会导致对严重性的低估或高估，进而导致延迟和忽视修补或浪费宝贵的资源。在本文中，我们提出了一种基于操作系统的漏洞优先级排序方法（即DIFFCVSS），它采用差异性严重性分析来评估漏洞。具体而言，给定一个经过评估的严重性漏洞，以及主流版本和目标版本的Linux，DIFFCVSS利用基于静态程序分析和自然语言处理的多种新技术差异性地确定漏洞在目标版本中是否表现出更高或更低的严重性。这种方法的一个独特优势是将具有挑战性和费力的CVSS计算转化为可自动化的差异化分析。我们实现了DIFFCVSS并将其应用于主流Linux和下游Android系统。评估和用户研究结果表明DIFFCVSS能够精确地执行差异性严重性分析，并提供了一种准确有效的方法来识别值得重新评估严重性的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-qiushi](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-qiushi)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-qiushi.pdf](https://www.usenix.org/system/files/sec22-wu-qiushi.pdf)
## Arbiter: Bridging the Static and Dynamic Divide in Vulnerability Discovery on Binary Programs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#arbiter-bridging-the-static-and-dynamic-divide-in-vulnerability-discovery-on-binary-programs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#arbiter-bridging-the-static-and-dynamic-divide-in-vulnerability-discovery-on-binary-programs)**
### 作者
* Jayakrishna Vadayath, Arizona State University
* Moritz Eckert, EURECOM
* Kyle Zeng, Arizona State University
* Nicolaas Weideman, University of Southern California
* Gokulkrishna Praveen Menon, Arizona State University
* Yanick Fratantonio, Cisco Systems Inc.
* Davide Balzarotti, EURECOM
* Adam Doupé, Arizona State University
* Tiffany Bao, Arizona State University
* Ruoyu Wang, Arizona State University
* Christophe Hauser, University of Southern California
* Yan Shoshitaishvili, Arizona State University
### 摘要
> 尽管当前最先进的二进制程序分析方法在弱点发现的背景下非常高效，但它们在准确性和可扩展性之间有固有的权衡。在本文中，我们确定了一组弱点属性，可以帮助静态和动态弱点检测技术，提高前者的准确性和后者的可扩展性。通过精心整合静态和动态技术，我们可以在大规模的实际程序中检测出具有这些属性的弱点。
> 
> 
> 
> 
> 
> 
> 
> 我们实施了我们的技术，在二进制代码分析方面取得了几项进展，并创建了一个名为"ARBITER"的原型。我们通过在四个常见的弱点类别上进行大规模评估来证明我们方法的有效性：CWE-131（缓冲区大小计算错误），CWE-252（未检查的返回值），CWE-134（不受控制的格式化字符串）和CWE-337（可预测的伪随机数生成器种子）。我们在Ubuntu软件源中对超过76,516个x86-64二进制文件进行了评估，并发现了新的弱点，包括在编译过程中插入程序中的缺陷。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/vadayath](https://www.usenix.org/conference/usenixsecurity22/presentation/vadayath)
- **PDF:** [https://www.usenix.org/system/files/sec22-vadayath.pdf](https://www.usenix.org/system/files/sec22-vadayath.pdf)
## Spoki: Unveiling a New Wave of Scanners through a Reactive Network Telescope.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#spoki-unveiling-a-new-wave-of-scanners-through-a-reactive-network-telescope) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#spoki-unveiling-a-new-wave-of-scanners-through-a-reactive-network-telescope)**
### 作者
* Raphael Hiesgen, HAW Hamburg
* Marcin Nawrocki, Freie Universität Berlin
* Alistair King, Kentik
* Alberto Dainotti, CAIDA, UC San Diego and Georgia Institute of Technology
* Thomas C. Schmidt, HAW Hamburg
* Matthias Wählisch, Freie Universität Berlin
### 摘要
> 大规模的互联网扫描是识别特定攻击受害者的常用方法。像ZMap中的无状态扫描已被证明是一种高效的探测互联网规模的方法。然而，无状态扫描需要第二阶段来执行攻击。这对网络望远镜来说是看不见的，网络望远镜只能捕捉到第一个传入的数据包，而且蜜罐也不会观察到它作为相关事件。在本研究中，我们通过Spoki来检查互联网广域扫描流量，它是一个实时运行的响应式网络望远镜，我们设计并实现了它。Spoki响应异步TCP SYN数据包，并与两阶段扫描的第二阶段进行TCP握手。由于它的轻量级特性，它可以扩展到大型前缀，在其中有独特的机会记录在TCP握手ACK中提交的第一个数据序列。我们使用全球部署的Spoki响应式望远镜以及IXP和ISP的流量数据集，在三个月的时间内分析了两阶段扫描仪。我们发现互联网上的TCP SYN的主要部分具有不规则的特征。我们的研究结果还提供了今天扫描的明显特征：(i)高度针对性，(ii)扫描活动在不同地区视角之间明显变化，(iii)很大一部分源自恶意来源。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hiesgen](https://www.usenix.org/conference/usenixsecurity22/presentation/hiesgen)
- **PDF:** [https://www.usenix.org/system/files/sec22-hiesgen.pdf](https://www.usenix.org/system/files/sec22-hiesgen.pdf)
## Many Roads Lead To Rome: How Packet Headers Influence DNS Censorship Measurement.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#many-roads-lead-to-rome-how-packet-headers-influence-dns-censorship-measurement) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#many-roads-lead-to-rome-how-packet-headers-influence-dns-censorship-measurement)**
### 作者
* Abhishek Bhaskar, Georgia Institute of Technology
* Paul Pearce, Georgia Institute of Technology
### 摘要
> 互联网审查已经普遍存在，对世界上成百上千个国家的公民产生了影响。近期的研究已经开发出了一些技术，可以远程执行全球互联网操纵的广泛、纵向测量，并且主要关注审查测量的规模，较少关注可重复性和一致性。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们探讨了数据包头部（例如源IP地址和源端口）在DNS审查中的作用。通过进行大规模测量研究，借鉴了先前和当前审查测量平台采用的技术，我们发现临时源端口和本地源IP地址（例如x.x.x.7与x.x.x.8）的选择会影响路由，从而影响DNS审查。我们发现，在测量的56%自治系统（ASes）中，37%的IP地址显示出了某些与源端口和本地源IP相关的审查行为变化。这种行为通常要么是全有要么是全无，根据数据包头的选择可能无法观察到任何审查行为。这种行为类似于地理定位错误、数据包丢失或网络中断，可能被错误地归因于地理位置错误、数据包丢失或网络中断。根据源IP地址的最低3位的不同，审查差异的规模可能增加一倍以上，这与已知的路由器负载均衡技术一致。我们还观察到小规模的审查变化，只有少数域名根据数据包参数而经历了审查差异。最后，我们发现这些变化是持久的；数据包重试无法控制观察到的变化。我们的结果指出，在未来的DNS审查测量中需要进行方法上的改变，并对此进行了讨论。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bhaskar](https://www.usenix.org/conference/usenixsecurity22/presentation/bhaskar)
- **PDF:** [https://www.usenix.org/system/files/sec22-bhaskar.pdf](https://www.usenix.org/system/files/sec22-bhaskar.pdf)
## GET /out: Automated Discovery of Application-Layer Censorship Evasion Strategies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#get-out-automated-discovery-of-application-layer-censorship-evasion-strategies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#get-out-automated-discovery-of-application-layer-censorship-evasion-strategies)**
### 作者
* Michael Harrity, University of Maryland
* Kevin Bock, University of Maryland
* Frederick Sell, University of Maryland
* Dave Levin, University of Maryland
### 摘要
> 审查制度的军备竞赛最近经历了一次转变，这要归功于最近的努力，表明可以自动发现规避审查的新方法。然而，所有这些以前的自动化努力都是通过操纵TCP/IP标头来进行操作的；虽然令人印象深刻，但实施这些努力已被证明具有挑战性，因为标头修改通常需要比审查规避应用程序提供的权限更高。在这项工作中，应用层几乎没有被探索。这并非没有原因：应用消息的空间比TCP/IP标头要大得多，结构也不如标头有序。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了第一种纯粹在应用层自动发现新的规避审查技术的方法。我们提出了一种通用解决方案，并将其专门应用于中国、印度和哈萨克斯坦的HTTP和DNS审查。我们的自动化技术发现了77种HTTP规避策略和9种DNS规避策略，所有这些策略只需进行应用层修改，使它们更容易被纳入应用程序并部署。我们分析了这些策略，并对审查机构的内部运作情况有了新的认识。我们发现，应用层策略的成功程度很大程度上取决于目标服务器的类型和版本。令人惊讶的是，我们的许多规避策略利用了审查机构比流行的应用程序服务器更符合RFC标准的情况。我们已经将我们的代码公开发布。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/harrity](https://www.usenix.org/conference/usenixsecurity22/presentation/harrity)
- **PDF:** [https://www.usenix.org/system/files/sec22-harrity.pdf](https://www.usenix.org/system/files/sec22-harrity.pdf)
## OpenVPN is Open to VPN Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#openvpn-is-open-to-vpn-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#openvpn-is-open-to-vpn-fingerprinting)**
### 作者
* Diwen Xue, University of Michigan
* Reethika Ramesh, University of Michigan
* Arham Jain, University of Michigan
* Michalis Kallitsis, Merit Network, Inc.
* J. Alex Halderman, University of Michigan
* Jedidiah R. Cr, Arizona State University/Breakpointing Bad
* all, Arizona State University/Breakpointing Bad
* Roya Ensafi, University of Michigan
### 摘要
> 在过去十年中，由于公众对隐私和监控威胁的增加意识，VPN的采用率稳步增长。作为回应，某些政府试图通过使用“双重用途”DPI技术来限制VPN访问。为了调查VPN封锁的潜力，我们开发了一种使用OpenVPN进行准确指纹识别的机制，OpenVPN是商业VPN服务中最流行的协议。我们基于协议特征，例如字节模式、数据包大小和服务器响应，识别出三种指纹。我们扮演攻击者的角色，控制网络，设计了一个两阶段的框架，依次执行被动指纹识别和主动探测。我们与一个拥有百万用户的ISP合作评估了我们的框架，并发现我们能够准确识别超过85%的OpenVPN流量，并且虚警率可以忽略不计，这表明基于OpenVPN的服务可以在几乎没有附带损害的情况下被有效封锁。尽管一些商业VPN实施了反探测措施以避免检测，但我们的框架成功识别了41个“混淆”VPN配置中的34个连接。我们讨论了VPN指纹可识别性对不同威胁模型的影响，并提出了短期防御措施。在更长期内，我们敦促商业VPN提供商在其混淆方法方面更加透明，并采用更有原则的检测反措施，例如审查规避研究中开发的措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xue-diwen](https://www.usenix.org/conference/usenixsecurity22/presentation/xue-diwen)
- **PDF:** [https://www.usenix.org/system/files/sec22-xue-diwen.pdf](https://www.usenix.org/system/files/sec22-xue-diwen.pdf)
## Pool Inference Attacks on Local Differential Privacy: Quantifying the Privacy Guarantees of Apple's Count Mean Sketch in Practice.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pool-inference-attacks-on-local-differential-privacy-quantifying-the-privacy-guarantees-of-apples-count-mean-sketch-in-practice) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pool-inference-attacks-on-local-differential-privacy-quantifying-the-privacy-guarantees-of-apples-count-mean-sketch-in-practice)**
### 作者
* Andrea Gadotti, Imperial College London
* Florimond Houssiau, Alan Turing Institute
* Meenatchi Sundaram Muthu Selva Annamalai, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### 摘要
> 用户设备生成的行为数据，从表情符号的使用到访问的页面，被大规模收集以改进应用和服务。然而，这些数据包含精细的记录，并可以透露个人用户的敏感信息。在保护隐私的同时，企业采用了本地差分隐私作为一种解决方案来收集用户数据。本文首次介绍了池推理攻击，其中对手可以访问用户的模糊数据，定义对象池，并利用用户在多个数据收集中的极化行为来推断用户的首选池。其次，我们利用贝叶斯模型对Apple提出并在iOS和Mac OS设备上部署的局部差分隐私机制Count Mean Sketch进行了这种攻击的具体实例化。使用Apple给出的隐私损失ε的参数，我们考虑了两种特定攻击：一种是在表情符号设置中，对手旨在推断用户对表情符号的肤色偏好；另一种是对访问的网站的攻击，对手想要从用户访问的新闻网站中了解用户的政治倾向。在这两种情况下，我们发现当对手收集足够数据时，该攻击比随机猜测更加有效。我们发现具有高度极化和相关兴趣的用户更容易受到攻击，并且我们展示了我们的攻击是良好校准的，使对手能够针对这些易受攻击的用户。最后，我们使用来自Twitter的用户数据验证了我们在表情符号设置中的结果。综上所述，我们的结果表明，池推理攻击对于受到大ε保护的数据构成了一个问题，强调了对额外技术保障的需求，以及对如何将本地差分隐私应用于多个数据收集的更多研究的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gadotti](https://www.usenix.org/conference/usenixsecurity22/presentation/gadotti)
- **PDF:** [https://www.usenix.org/system/files/sec22-gadotti_1.pdf](https://www.usenix.org/system/files/sec22-gadotti_1.pdf)
## Poisoning Attacks to Local Differential Privacy Protocols for Key-Value Data.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poisoning-attacks-to-local-differential-privacy-protocols-for-key-value-data) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poisoning-attacks-to-local-differential-privacy-protocols-for-key-value-data)**
### 作者
* Yongji Wu, Duke University
* Xiaoyu Cao, Duke University
* Jinyuan Jia, Duke University
* Neil Zhenqiang Gong, Duke University
### 摘要
> 本工作旨在填补LDP协议关于键值数据的安全性研究的空白。在这种LDP协议中，服务器旨在同时估计一些用户中每个键的频率和均值，每个用户都拥有一组键值对。我们的攻击旨在通过向服务器发送精心设计的数据，同时最大化一些攻击者选择的目标键的频率和均值。具体而言，由于我们的攻击有两个目标，我们将其定义为一个两目标优化问题。此外，我们提出了一种近似解决两目标优化问题的方法，从中我们获得了伪用户应向服务器发送的最佳设计数据。我们从理论和实证角度展示了我们的攻击对三种键值数据的LDP协议的有效性。我们还探讨了两种抵御我们攻击的方法，在某些场景下是有效的，但在其他场景中有效性有限。我们的结果突显了对抵御我们的攻击的新防御措施的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-yongji](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-yongji)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-yongji.pdf](https://www.usenix.org/system/files/sec22-wu-yongji.pdf)
## Communication-Efficient Triangle Counting under Local Differential Privacy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#communication-efficient-triangle-counting-under-local-differential-privacy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#communication-efficient-triangle-counting-under-local-differential-privacy)**
### 作者
* Jacob Imola, UC San Diego
* Takao Murakami, AIST
* Kamalika Chaudhuri, UC San Diego
### 摘要
> 在LDP（本地差分隐私）下的网络三角形计数是一项基础任务，用于分析连接模式或计算聚类系数，同时强力保护敏感友谊关系免受中央服务器的影响。特别地，最近的一项研究提出了一种算法，使用用户和服务器之间的两轮交互来显著减少估计误差。然而，该算法由于每个用户需要下载一个大型嘈杂图而导致通信成本过高。在这项研究中，我们提出了具有小估计误差和通信成本的LDP下的三角形计数算法。我们首先提出了由边采样和精心选择用户下载的边构成的两轮算法，以使估计误差很小。然后我们提出了一个双剪切技术，它剪切边的数量，然后剪切噪声三角形的数量，从而显著降低每个用户查询的敏感性。通过全面评估，我们展示了我们的算法显著降低了现有算法的通信成本，例如，在20 Mbps下载速率下，从6小时减少到8秒或更少，同时保持较小的估计误差。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/imola](https://www.usenix.org/conference/usenixsecurity22/presentation/imola)
- **PDF:** [https://www.usenix.org/system/files/sec22-imola.pdf](https://www.usenix.org/system/files/sec22-imola.pdf)
## Twilight: A Differentially Private Payment Channel Network.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#twilight-a-differentially-private-payment-channel-network) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#twilight-a-differentially-private-payment-channel-network)**
### 作者
* Maya Dotan, The Hebrew University of Jerusalem
* Saar Tochner, The Hebrew University of Jerusalem
* Aviv Zohar, The Hebrew University of Jerusalem
* Yossi Gilad, The Hebrew University of Jerusalem
### 摘要
> 支付通道网络（PCN）提供了一种快速且更便宜的替代方案，用于记录在区块链上的交易。客户可以与中继信任地建立支付通道，通过锁定货币来发送已签名的支付，以在网络的通道上移动货币余额。虽然支付从未被公开，但任何人都可以通过监控网络通道上货币余额的变化来追踪客户的支付。我们提出了Twilight，这是首个为其用户提供严格的差分隐私保证的PCN。Twilight中的中继运行一个隐藏其所承载支付的嘈杂支付处理机制。该机制增加了中继的成本，因此Twilight使用可信执行环境（TEE）来对抗希望避免该机制的自私中继，并确保它们遵循其协议。TEE不存储通道的状态，从而将可信计算基础最小化。关键是，Twilight确保即使中继破坏了TEE的安全性，也无法破坏PCN的完整性。我们从隐私和成本的角度对Twilight进行分析，并研究它们之间的权衡。我们使用Intel的SGX框架实现了Twilight，并通过在两个大陆部署中继来评估其性能。我们展示了由4个中继组成的路线能够处理820个支付/秒。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dotan](https://www.usenix.org/conference/usenixsecurity22/presentation/dotan)
- **PDF:** [https://www.usenix.org/system/files/sec22-dotan.pdf](https://www.usenix.org/system/files/sec22-dotan.pdf)
## Watching the watchers: bias and vulnerability in remote proctoring software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#watching-the-watchers-bias-and-vulnerability-in-remote-proctoring-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#watching-the-watchers-bias-and-vulnerability-in-remote-proctoring-software)**
### 作者
* Ben Burgess, Princeton University
* Avi Ginsberg, Georgetown Law
* Edward W. Felten, Princeton University
* Shaanan Cohney, University of Melbourne
### 摘要
> 教育工作者正在迅速转向远程监考和考试软件来满足他们的测试需求，这既是因为COVID-19疫情，也是因为教育行业虚拟化的不断扩大。州教育委员会越来越多地利用这些软件包进行高风险的法律和医疗许可考试。使用这些复杂程序存在三个关键问题：考试的完整性，考试程序的公正性，以及考试参与者的安全和隐私问题。
> 
> 
> 
> 
> 
> 
> 
> 我们通过对美国法学院和州律师执照考试中使用的四个主要监考套件进行案例研究，首次对每个问题进行了技术分析。我们对这些监考套件进行了逆向工程，并发现尽管它们承诺具有高安全性，但所有的防作弊措施都可以轻易地被绕过，并且可能会造成用户安全风险。
> 
> 
> 
> 
> 
> 
> 
> 我们评估了目前的面部识别分类器以及Examplify使用的分类器的准确性，以确定是否更容易对特定肤色的面部进行作弊标记。最后，我们提出了改进远程监考考试体验的整体性和公正性的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/burgess](https://www.usenix.org/conference/usenixsecurity22/presentation/burgess)
- **PDF:** [https://www.usenix.org/system/files/sec22-burgess.pdf](https://www.usenix.org/system/files/sec22-burgess.pdf)
## The Antrim County 2020 Election Incident: An Independent Forensic Investigation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-antrim-county-2020-election-incident-an-independent-forensic-investigation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-antrim-county-2020-election-incident-an-independent-forensic-investigation)**
### 作者
* J. Alex Halderman, University of Michigan
### 摘要
> 2020年11月，密歇根州安特里姆县发布了一份错误的选举结果，总统竞选及其他竞选内容的票数被错误地增加了数千票。安特里姆县随后进行了一系列的更正，经过手工核对，总统竞选的认证结果得到了确认。然而，前总统多次将安特里姆县作为广泛舞弊的证据，并且它仍然是关于2020年选举的阴谋论的核心。应密歇根州国务卿和检察长的要求，我对这一事件进行了一次法庭鉴定调查。借助选举系统的数据，我准确地重演了主要异常情况，并解释了它们的原因，并验证了这些问题已经得到了纠正。然而，我还发现了其他影响特定下票竞选的错误，并且尽管结果受到了异常关注，但这些错误并未得到纠正，其中之一可能改变了地方竞选的结果。基于这一分析，我驳斥了关于该事件的虚假指控和误导信息，得出结论认为这不是安全漏洞的结果，而是一系列操作员错误在不充分的程序和不够严谨的软件设计的情况下造成的。这些事件为选举管理提供了教训，并强调了对选举技术事件进行严谨调查以提高准确性和公众信任的价值。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/halderman](https://www.usenix.org/conference/usenixsecurity22/presentation/halderman)
- **PDF:** [https://www.usenix.org/system/files/sec22-halderman.pdf](https://www.usenix.org/system/files/sec22-halderman.pdf)
## An Audit of Facebook's Political Ad Policy Enforcement.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#an-audit-of-facebooks-political-ad-policy-enforcement) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#an-audit-of-facebooks-political-ad-policy-enforcement)**
### 作者
* Victor Le Pochat, imec-DistriNet, KU Leuven
* Laura Edelson, New York University
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Wouter Joosen, imec-DistriNet, KU Leuven
* Damon McCoy, New York University
* Tobias Lauinger, New York University
### 摘要
> 主要科技公司努力保护其平台上的政治广告的完整性，通过实施和执行自我监管政策，在政治广告上强加透明要求。本文通过对215,030个广告商的4.2百万条政治广告和29.6百万条非政治广告进行全面大规模分析，量化了Facebook当前的执行情况，包括正确识别政治广告和确保广告主的合规性。我们确定了正确被识别为政治广告（真阳性）的广告、错误被识别的广告（假阳性）以及未被检测到的广告（假阴性）。Facebook当前的执行情况似乎不够精确：全球遗漏的广告比被检测到的广告多61％，而55％的美国被检测到的广告实际上并非政治广告。各个国家的检测性能存在差异，其中一些国家的政治页面明显存在的假阴性率高达美国的53倍。此外，在防止政治广告政策被系统性违规的方面，当前的执行情况似乎不足：例如，在美国临时禁止政治广告的期间，广告商仍然能够继续投放政治广告而不予披露。我们将这些缺陷归因于Facebook当前的执行和透明度实施中的五个差距，并提出了改进在线政治广告生态系统安全性的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lepochat](https://www.usenix.org/conference/usenixsecurity22/presentation/lepochat)
- **PDF:** [https://www.usenix.org/system/files/sec22-lepochat.pdf](https://www.usenix.org/system/files/sec22-lepochat.pdf)
## Building an Open, Robust, and Stable Voting-Based Domain Top List.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#building-an-open-robust-and-stable-voting-based-domain-top-list) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#building-an-open-robust-and-stable-voting-based-domain-top-list)**
### 作者
* Qinge Xie, Georgia Institute of Technology
* Shujun Tang, QI-ANXIN Technology Research Institute
* Xiaofeng Zheng, QI-ANXIN Technology Research Institute and Tsinghua University
* Qingran Lin, QI-ANXIN Technology Research Institute
* Baojun Liu, Tsinghua University
* Haixin Duan, QI-ANXIN Technology Research Institute and Tsinghua University
* Frank Li, Georgia Institute of Technology
### 摘要
> 域名排名榜是互联网测量、安全和隐私研究社区的重要资源。数百项先前的研究都使用这些榜单作为一组被认为是流行域名的调查对象。然而，现有的排名榜存在诸多问题，包括对榜单的数据来源和构建方法缺乏透明度、高度波动以及易于操纵排名。尽管存在这些缺陷，但由于缺乏合适的替代品，这些排名榜仍然广泛使用。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们系统地探讨了如何从零开始构建一个域名排名榜。利用广泛的被动DNS数据集，我们研究了不同的排名榜设计考虑因素。作为我们研究的成果，我们提出了一种基于投票的域名排名方法，通过量化各个IP地址对域名的偏好，并通过投票机制确定跨地址的全局排名。我们对我们的排名榜设计进行了实证评估，证明它比现有的排名榜具有更好的稳定性和抵御操纵性，同时作为一种开放透明的排名方法，其他研究人员可以使用或改进。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xie](https://www.usenix.org/conference/usenixsecurity22/presentation/xie)
- **PDF:** [https://www.usenix.org/system/files/sec22-xie.pdf](https://www.usenix.org/system/files/sec22-xie.pdf)
## AMD Prefetch Attacks through Power and Time.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#amd-prefetch-attacks-through-power-and-time) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#amd-prefetch-attacks-through-power-and-time)**
### 作者
* Moritz Lipp, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> 现代操作系统在根本上依赖于对用户应用程序与内核的严格隔离，而这种隔离是由硬件实施的。在英特尔处理器上，这种隔离已被证明是不完善的，例如预取侧信道。随着“熔断”，这种隔离甚至完全被规避。英特尔已经通过相同的软件补丁来缓解预取侧信道和“熔断”。由于相信 AMD 不容易受到这些攻击的影响，这个软件补丁在 AMD 处理器上默认情况下不会激活。
> 
> 
> 
> 
> 
> 
> 
> 本文中，我们展示了 AMD 处理器上的隔离也存在同类型的侧信道泄漏。我们发现了可以从非特权用户空间观察到的预取指令的时间和功耗变化。与之前针对英特尔的预取攻击工作相比，我们展示了 AMD 上的预取指令泄漏更多信息。我们通过多个实际场景的案例研究展示了这种侧信道的重要性。我们展示了首次在 AMD 处理器上对 (细粒度的) KASLR 进行微体系结构突破的情况。我们监控内核活动，例如通过蓝牙播放音频，并建立一个隐蔽通道。最后，我们甚至在 Linux 内核中使用简单的 Spectre 工具以 52.85 B/s 的速度泄漏内核内存。我们展示了在 AMD 处理器上默认情况下应该激活更强的页面表隔离以成功缓解我们提出的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lipp](https://www.usenix.org/conference/usenixsecurity22/presentation/lipp)
- **PDF:** [https://www.usenix.org/system/files/sec22-lipp.pdf](https://www.usenix.org/system/files/sec22-lipp.pdf)
## Hiding in Plain Sight? On the Efficacy of Power Side Channel-Based Control Flow Monitoring.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hiding-in-plain-sight-on-the-efficacy-of-power-side-channel-based-control-flow-monitoring) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hiding-in-plain-sight-on-the-efficacy-of-power-side-channel-based-control-flow-monitoring)**
### 作者
* Yi Han, Rutgers University
* Matthew Chan, Rutgers University
* Zahra Aref, Rutgers University
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security
* Saman Zonouz, Georgia Tech
### 摘要
> 物理侧信道监测利用微控制器产生的物理现象（例如功耗或电磁辐射）来监测恶意行为的程序执行。因此，它为资源受限的嵌入式系统提供了一种有前景的入侵检测解决方案，而这些系统与传统安全措施不兼容。这种方法在工业控制系统等安全关键型嵌入式系统中尤为相关。侧信道监测对潜在攻击者提出了独特的挑战，例如：（1）通过与监测系统物理隔离来限制攻击向量，（2）监测具有不可解释的数据驱动模型的不可变物理侧信道，以及（3）针对应用于它们的体系结构和程序进行专门训练。因此，人们普遍认为物理侧信道监视器提供了很高的安全性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出一种新型攻击，以说明虽然侧信道监测系统创建了许多攻击障碍，但它们仍然容易受到对手的攻击。我们提出了一种方法来设计功能恶意软件，使其在注入到侧信道监测系统时不触发检测器。我们的实验证明，这种攻击对检测器模型和硬件实现具有鲁棒性。我们在流行的ARM微控制器平台上对几个代表性程序进行了攻击评估，展示了这种攻击的可行性，并强调了对侧信道监视器进一步研究的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/han](https://www.usenix.org/conference/usenixsecurity22/presentation/han)
- **PDF:** [https://www.usenix.org/system/files/sec22-han.pdf](https://www.usenix.org/system/files/sec22-han.pdf)
## Hertzbleed: Turning Power Side-Channel Attacks Into Remote Timing Attacks on x86.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hertzbleed-turning-power-side-channel-attacks-into-remote-timing-attacks-on-x86) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hertzbleed-turning-power-side-channel-attacks-into-remote-timing-attacks-on-x86)**
### 作者
* Yingchen Wang, University of Texas at Austin
* Riccardo Paccagnella, University of Illinois Urbana-Champaign
* Elizabeth Tang He, University of Illinois Urbana-Champaign
* Hovav Shacham, University of Texas at Austin
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* David Kohlbrenner, University of Washington
### 摘要
> 功率侧信道攻击利用CPU功耗的数据相关变化来泄露秘密。在本文中，我们展示了在现代Intel（和AMD）的x86架构CPU上，功率侧信道攻击可以转化为定时攻击，而不需要访问任何功耗测量接口。我们的发现得益于动态电压和频率调节（DVFS）。我们发现，在某些情况下，DVFS引起的CPU频率变化取决于毫秒级的当前功耗（因此也是数据）。更糟糕的是，这些变化可以被远程攻击者观察到，因为频率差异会转化为墙上时间差异！
> 
> 
> 
> 
> 
> 
> 
> 频率侧信道在理论上比当今密码工程实践中考虑的软件侧信道更强大，但由于其粗粒度，很难利用。然而，我们表明这个新信道对加密软件的安全构成了真正的威胁。首先，我们对现代x86架构CPU上的数据、功耗和频率之间的依赖关系进行了逆向工程研究，发现即使是看似微小的差异，如字中设置位的位置，也可以通过频率变化来区分。其次，我们描述了一种针对（常量时间实现的）SIKE的新型选择密文攻击，将单个密钥位的猜测放大成成千上万次高功耗或低功耗操作，通过远程定时实现完全密钥提取。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-yingchen)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-yingchen.pdf](https://www.usenix.org/system/files/sec22-wang-yingchen.pdf)
## Binoculars: Contention-Based Side-Channel Attacks Exploiting the Page Walker.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#binoculars-contention-based-side-channel-attacks-exploiting-the-page-walker) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#binoculars-contention-based-side-channel-attacks-exploiting-the-page-walker)**
### 作者
* Zirui Neil Zhao, University of Illinois Urbana-Champaign
* Adam Morrison, Tel Aviv University
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* Josep Torrellas, University of Illinois Urbana-Champaign
### 摘要
> 微架构副通道是一种紧迫的安全威胁。当程序以秘密数据相关的方式调整硬件资源时，就会产生这些通道。它们通常被分为有状态的和无状态的（也称为争用型），取决于它们是否会留下被攻击者后续观察到的痕迹。常识认为，有状态的通道比无状态的通道更容易被监测，因此得到了最多的关注。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种新颖的无状态攻击，展示了这个常识并不总是正确的。我们的攻击称为“双筒望远镜”，它利用了在飞行页步操作和其他内存操作之间尚未探索的相互作用。与其他无状态通道不同，双筒望远镜产生了显著的时间扰动，最高可达来自单个动态指令的20000个周期，使其易于监测。我们展示了这些扰动是与地址相关的，使双筒望远镜能够比以往任何通道更多地泄露受害者内存操作中的虚拟地址位。双筒望远镜无需攻击者和受害者之间的共享内存。
> 
> 
> 
> 
> 
> 
> 
> 利用双筒望远镜，我们设计了隐蔽信道和侧信道攻击。我们的隐蔽信道在Cascade Lake-X机器上达到了高达1116 KB/s的吞吐量。然后，我们设计了一种侧信道攻击，通过学习ECDSA的随机数k，从OpenSSL的侧信道抗性ECDSA中窃取密钥。双筒望远镜显著放大微小行为（例如存储的排序），这对于攻击成功至关重要，因为每次运行后随机数都会改变。最后，我们完全破解了内核ASLR。
> 
> 
> 
> 
> 
> 
> 
> (Note: Some technical terms may have different translation variations, so please ensure to review and verify the terms before using the translation.)

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-zirui](https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-zirui)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhao-zirui.pdf](https://www.usenix.org/system/files/sec22-zhao-zirui.pdf)
## The Dangers of Human Touch: Fingerprinting Browser Extensions through User Actions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-dangers-of-human-touch-fingerprinting-browser-extensions-through-user-actions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-dangers-of-human-touch-fingerprinting-browser-extensions-through-user-actions)**
### 作者
* Konstantinos Solomos, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Soroush Karami, University of Illinois at Chicago
* Nick Nikiforakis, Stony Brook University
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 浏览器扩展指纹识别最近引起了相当大的关注，因为它会带来双重的隐私损失。除了增加浏览器指纹以便进行跟踪之外，安装扩展列表还可以直接用于推断敏感的用户特征。然而，先前的研究都是在一个真空中进行的，忽视了扩展功能的一个核心维度：它们如何对用户操作做出反应。在本文中，我们首次探索了用户触发的扩展指纹识别。在对浏览器扩展进行大规模静态分析的基础上，我们根据发现设计了一系列用户行为模板，使动态扩展测试框架能够全面揭示只能通过用户交互来触发的隐藏扩展功能。我们的实验评估证明了我们提出的技术的有效性，我们能够识别出4971个独特的扩展，其中36%的扩展是最先进的技术无法检测到的。更糟糕的是，我们发现约67%需要鼠标或键盘交互的扩展缺乏适当的安全保护，使它们容易受到通过JavaScript模拟用户操作的页面的攻击。为了帮助扩展开发者保护用户免受这种隐私威胁，我们构建了一个工具，自动包含起源检查以加强扩展对侵入性网站的防护。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/solomos](https://www.usenix.org/conference/usenixsecurity22/presentation/solomos)
- **PDF:** [https://www.usenix.org/system/files/sec22-solomos.pdf](https://www.usenix.org/system/files/sec22-solomos.pdf)
## Unleash the Simulacrum: Shifting Browser Realities for Robust Extension-Fingerprinting Prevention.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#unleash-the-simulacrum-shifting-browser-realities-for-robust-extension-fingerprinting-prevention) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#unleash-the-simulacrum-shifting-browser-realities-for-robust-extension-fingerprinting-prevention)**
### 作者
* Soroush Karami, University of Illinois at Chicago
* Faezeh Kalantari, Arizona State University
* Mehrnoosh Zaeifi, Arizona State University
* Xavier J. Maso, Arizona State University
* Erik Trickel, Arizona State University
* Panagiotis Ilia, University of Illinois at Chicago
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 在线追踪因其对用户隐私的风险而受到了广泛关注。在各种方法中，识别浏览器中安装了哪些扩展插件的技术可以用于指纹识别浏览器和跟踪用户，同时也可以用于推测个人和敏感用户数据。虽然防止某些指纹识别技术相对简单，但减轻基于行为的扩展指纹识别问题则面临着重要挑战，因为它依赖于隐藏源自扩展功能的操作。为此，我们引入了DOM现实转移的概念，通过将用户在浏览中体验到的现实与网页能够观察到的现实分离。为了演示我们的方法，我们开发了一个名为Simulacrum的原型扩展，通过有针对性地对核心Web API接口进行仪器化实现了我们的防御。尽管在概念上很简单，但我们的实现突显了web应用程序、现代浏览器和JavaScript语言的复杂和常常独特的性质和行为所带来的技术挑战。我们通过实验评估我们的系统与一种基于DOM的扩展指纹识别系统，并发现Simulacrum能够轻松保护95.37%的易受攻击的扩展。然后，我们确定了对扩展进行微小修改的方法，使我们的防御对大多数剩余的扩展都适用。为了促进进一步的研究并保护用户免受侵犯隐私的行为，我们将开源我们的系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/karami](https://www.usenix.org/conference/usenixsecurity22/presentation/karami)
- **PDF:** [https://www.usenix.org/system/files/sec22-karami.pdf](https://www.usenix.org/system/files/sec22-karami.pdf)
## Online Website Fingerprinting: Evaluating Website Fingerprinting Attacks on Tor in the Real World.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#online-website-fingerprinting-evaluating-website-fingerprinting-attacks-on-tor-in-the-real-world) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#online-website-fingerprinting-evaluating-website-fingerprinting-attacks-on-tor-in-the-real-world)**
### 作者
* Giovanni Cherubin, Alan Turing Institute
* Rob Jansen, U.S. Naval Research Laboratory
* Carmela Troncoso, EPFL SPRING Lab
### 摘要
> 网站指纹识别（WF）攻击对Tor网络的攻击者允许其观察受害者与Tor网络之间的流量模式，从而预测受害者访问的网站。现有的WF攻击具有极高的准确性。然而，对这些攻击进行评估的条件引发了对其在真实世界中有效性的质疑。我们首次通过将最先进的三重指纹攻击方法调整为在线设置，并使用在Tor出口中绝对安全地采集的数据进行WF模型训练，对网站指纹识别进行了评估。我们通过研究真实条件下的WF，证明攻击者在监视一个小型的5个热门网站时可以达到超过95%的识别准确率，但是当监视的网站数量只有25个时，准确率迅速降至低于80%。我们得出结论，虽然WF攻击可能存在，但在监视超过几个网站时，在真实世界中执行这些攻击很可能是不可行的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cherubin](https://www.usenix.org/conference/usenixsecurity22/presentation/cherubin)
- **PDF:** [https://www.usenix.org/system/files/sec22-cherubin.pdf](https://www.usenix.org/system/files/sec22-cherubin.pdf)
## QCSD: A QUIC Client-Side Website-Fingerprinting Defence Framework.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#qcsd-a-quic-client-side-website-fingerprinting-defence-framework) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#qcsd-a-quic-client-side-website-fingerprinting-defence-framework)**
### 作者
* Jean-Pierre Smith, ETH Zurich
* Luca Dolfi, ETH Zurich
* Prateek Mittal, Princeton University
* Adrian Perrig, ETH Zurich
### 摘要
> 网站指纹攻击是一种分析加密网络通信元数据以识别访问网站的方法，在增强隐私技术，包括虚拟私人网络（VPN）和加密代理上已被证明是有效的。尽管如此，VPN仍然在这些攻击下无法防御，使数百万用户容易受到攻击。对抗网站指纹攻击的提议需要客户端和远程端点之间的合作来重塑网络流量，从而阻碍部署。
> 
> 
> 
> 
> 
> 
> 
> 我们观察到QUIC和HTTP/3的快速广泛部署为将网站指纹防御直接集成到客户端应用程序（如浏览器）中创造了一个令人兴奋的机会，而无需对Web服务器、VPN或部署新的网络服务进行任何更改。因此，我们设计和实现了QCSD框架，利用QUIC和HTTP/3通过双向添加伪造流量和仅从客户端重塑连接来模拟现有的网站指纹防御。作为案例研究，我们仅从客户端模拟了FRONT和Tamaraw两种防御，并收集了多个现场防御流量数据集，对其进行了机器学习攻击的评估。我们的结果证明了这种方法在向客户端发起的防御中重塑连接的潜力，从而消除了网站指纹防御部署的主要障碍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/smith](https://www.usenix.org/conference/usenixsecurity22/presentation/smith)
- **PDF:** [https://www.usenix.org/system/files/sec22-smith.pdf](https://www.usenix.org/system/files/sec22-smith.pdf)
## Secure Poisson Regression.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#secure-poisson-regression) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#secure-poisson-regression)**
### 作者
* Mahimna Kelkar, Cornell Tech
* Phi Hung Le, Google
* Mariana Raykova, Google
* Karn Seth, Google
### 摘要
> 我们介绍了安全泊松回归的首个双方计算构建，该构建使持有输入样本份额的两方能够仅学习到结果泊松模型，同时保护输入数据的隐私。
> 
> 
> 
> 
> 
> 
> 
> 我们的构建依赖于新的安全定点指数运算和相关矩阵乘法协议。我们的安全指数构建避免了昂贵的位分解，并在在线和离线成本上实现了数量级的改善，超越了现有技术。因此，我们安全泊松回归的主要成本是与一个固定矩阵进行的矩阵乘法。我们引入了一种称为相关比尔三元组的新技术，可以在大致一个矩阵乘法的成本下实现多个这样的乘法，进一步降低了安全泊松回归的成本。
> 
> 
> 
> 
> 
> 
> 
> 我们实现了我们的构建并展示了它们的极高效性。在局域网环境中，我们的20位小数精度的安全指数运算在批大小为100,000时只需要不到0.07毫秒。对于包含10,000个样本和1,000个二进制特征的数据集的一次安全泊松回归迭代，在离线阶段需要约65.82秒，在在线阶段需要约55.14秒，并且总通信量为17MB。对于几个真实数据集来说，这意味着训练只需要几秒钟和几MB的通信量。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kelkar](https://www.usenix.org/conference/usenixsecurity22/presentation/kelkar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kelkar.pdf](https://www.usenix.org/system/files/sec22-kelkar.pdf)
## Cheetah: Lean and Fast Secure Two-Party Deep Neural Network Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#cheetah-lean-and-fast-secure-two-party-deep-neural-network-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#cheetah-lean-and-fast-secure-two-party-deep-neural-network-inference)**
### 作者
* Zhicong Huang, Alibaba Group
* Wen-jie Lu, Alibaba Group
* Cheng Hong, Alibaba Group
* Jiansheng Ding, Alibaba Group
### 摘要
> 安全的两方神经网络推理（2PC-NN）可以为客户端和服务器提供隐私保护，是机器学习即服务中一种有前景的技术。然而，当前2PC-NN推理系统的巨大开销仍然是一个令人头疼的问题，特别是在应用于ResNet50等深度神经网络时。在这项工作中，我们提出了Cheetah，一种新的2PC-NN推理系统，它比现有技术更快速和更通信高效。Cheetah的主要贡献有两个方面：第一部分包括精心设计的基于同态加密的协议，可以在没有昂贵旋转操作的情况下评估线性层（即卷积，批归一化和全连接）。第二部分包括几个精简和通信高效的非线性函数（例如ReLU和截断）的原语。使用Cheetah，我们在几个大规模深度神经网络上进行了大量基准测试。以ResNet50为例，Cheetah在WAN环境下的端到端执行成本不到2.5分钟和2.3千兆字节的通信，分别比CrypTFlow2（ACM CCS 2020）高出约5.6倍和12.9倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong](https://www.usenix.org/conference/usenixsecurity22/presentation/huang-zhicong)
- **PDF:** [https://www.usenix.org/system/files/sec22-huang-zhicong.pdf](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf)
## Piranha: A GPU Platform for Secure Computation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#piranha-a-gpu-platform-for-secure-computation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#piranha-a-gpu-platform-for-secure-computation)**
### 作者
* Jean-Luc Watson, University of California, Berkeley
* Sameer Wagh, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### 摘要
> 安全多方计算（MPC）是保护隐私的机器学习（ML）的重要工具。然而，目前大规模ML模型的安全训练需要耗费极长的完成时间。鉴于在明文环境中，大规模ML推理和训练任务通过图形处理单元（GPU）可以显著加速，这就引出了一个自然的问题：安全MPC能否利用GPU加速？最近的几项研究在加速特定组件或协议的背景下研究了这个问题，但并没有提供一个通用解决方案。因此，MPC开发者必须既精通加密协议设计，又精通低级GPU内核开发，以在任何新的协议实现上实现良好性能。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了Piranha，一个使用GPU加速基于秘密共享的MPC协议的通用模块化平台。Piranha允许MPC社区在不需要GPU专业知识的情况下轻松利用GPU的好处。Piranha提供了一个三层架构：（1）设备层，通过提供当前通用GPU库中所缺乏的基于整数的内核，可以独立加速秘密共享协议，（2）模块化协议层，允许开发者通过原地计算和支持非标准内存访问模式的迭代器来最大限度地利用有限的GPU内存，（3）应用层，允许应用程序完全不了解其使用的底层协议。
> 
> 
> 
> 
> 
> 
> 
> 为了展示Piranha的优势，我们实现了3个最先进的线性秘密共享MPC协议，用于安全的神经网络训练：2方SecureML（IEEE S＆P '17），3方Falcon（PETS '21）和4方FantasticFour（USENIX Security Symposium '21）。与它们基于CPU的实现相比，相同的协议在Piranha的协议无关加速上表现出16-48倍的训练时间减少。 Piranha首次展示了使用MPC在一天内训练一个实际的神经网络（如VGG）的可行性。Piranha是开源的，可在https://github.com/ucbrise/piranha 上获取。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/watson](https://www.usenix.org/conference/usenixsecurity22/presentation/watson)
- **PDF:** [https://www.usenix.org/system/files/sec22-watson.pdf](https://www.usenix.org/system/files/sec22-watson.pdf)
## OpenSSLNTRU: Faster post-quantum TLS key exchange.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#opensslntru-faster-post-quantum-tls-key-exchange) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#opensslntru-faster-post-quantum-tls-key-exchange)**
### 作者
* Daniel J. Bernstein, University of Illinois at Chicago and Ruhr University Bochum
* Billy Bob Brumley, Tampere University
* Ming-Shing Chen, Ruhr University Bochum
* Nicola Tuveri, Tampere University
### 摘要
> 谷歌在2016年的CECPQ1实验中将后量子密钥交换算法newhope1024整合到了TLS 1.2中。2019年，谷歌与Cloudflare合作的CECPQ2实验将更高效的密钥交换算法ntruhrss701整合到了TLS 1.3中。
> 
> 
> 
> 
> 
> 
> 
> 本文重新审视了CECPQ2中的选择，并展示了如何通过使用更高安全性的算法sntrup761，在TLS 1.3中实现更高的后量子密钥交换性能。以往的研究表明，ntruhrss701的密钥生成速度比sntrup761快得多，但本文通过一次生成一批密钥的方式，使sntrup761的密钥生成速度变得更快。
> 
> 
> 
> 
> 
> 
> 
> 批量密钥生成在TLS协议层是不可见的，但它引发了软件工程问题，涉及将批量密钥交换整合到现有的TLS库和应用中的难度。本文表明，通过仔细选择软件层，可以轻松地将快速的后量子软件（包括批量密钥交换）整合到TLS中，只需对TLS库进行微小的更改，而无需对应用进行更改。
> 
> 
> 
> 
> 
> 
> 
> 作为可行性的演示，本文报告了其快速sntrup761库通过轻微的OpenSSL更新，成功地整合到了未经修改的网络浏览器和未经修改的TLS终止器中。本文还报告了TLS 1.3握手基准测试结果，实现了比OpenSSL中任何其他软件更高的每秒TLS 1.3握手数。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bernstein](https://www.usenix.org/conference/usenixsecurity22/presentation/bernstein)
- **PDF:** [https://www.usenix.org/system/files/sec22-bernstein.pdf](https://www.usenix.org/system/files/sec22-bernstein.pdf)
## How Are Your Zombie Accounts? Understanding Users' Practices and Expectations on Mobile App Account Deletion.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-are-your-zombie-accounts-understanding-users-practices-and-expectations-on-mobile-app-account-deletion) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-are-your-zombie-accounts-understanding-users-practices-and-expectations-on-mobile-app-account-deletion)**
### 作者
* Yijing Liu, Nankai University
* Yan Jia, Nankai University
* Qingyin Tan, Nankai University
* Zheli Liu, Nankai University
* Luyi Xing, Indiana University Bloomington
### 摘要
> 账户删除是用户行使删除权的重要途径。然而，目前很少有研究针对移动应用中的账户删除功能进行可用性评估。本文通过647名在线调查参与者和20名现场访谈参与者，探索用户对移动应用账户删除的意识、实践和期望。研究基于我们提出的账户删除模型，并总结了对60个移动应用进行的实证测量结果。结果显示，虽然用户对账户删除有很高需求，但由于缺乏意识，用户在实践中普遍保留僵尸应用账户。此外，用户对账户删除的理解和期望与当前应用设计在许多方面有所不同。研究结果表明，当前缺乏规范实施的方式使消费者在删除过程中感到不便，尤其是隐藏的入口和复杂的操作步骤，甚至阻止了相当一部分用户行使账户删除功能。最后，我们提供了一些设计建议，以提高移动应用账户删除功能的可用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yijing](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yijing)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-yijing.pdf](https://www.usenix.org/system/files/sec22-liu-yijing.pdf)
## "How Do You Not Lose Friends?": Synthesizing a Design Space of Social Controls for Securing Shared Digital Resources Via Participatory Design Jams.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-do-you-not-lose-friends-synthesizing-a-design-space-of-social-controls-for-securing-shared-digital-resources-via-participatory-design-jams) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-do-you-not-lose-friends-synthesizing-a-design-space-of-social-controls-for-securing-shared-digital-resources-via-participatory-design-jams)**
### 作者
* Eyitemi Moju-Igbene, Georgia Institute of Technology
* Hanan Abdi, Georgia Institute of Technology
* Alan Lu, Georgia Institute of Technology
* Sauvik Das, Georgia Institute of Technology
### 摘要
> 数字资源（流媒体服务、银行账户、协作文件等）通常在小型社交团体之间共享。然而，这些资源的安全和隐私（S&P）控制与共享访问和所有权（例如，室友共用的 Netflix 密码）的现实情况并不匹配。一个挑战在于社交S&P控制的设计空间尚不清晰。我们通过参与式设计研讨会，与最终用户展开合作，设想他们团体常见的S&P挑战的社交解决方案，填补了这一间隔。在分析生成的想法和团体讨论时，我们确定了与社交S&P控制相关的四个设计考虑因素：社交透明度；治理结构；利益和责任；以及促进团体S&P行为。此外，我们发现在设计社交S&P控制时会出现权衡和挑战：平衡团体安全与个人隐私；应对社交摩擦；减轻社交跟随行为；以及最小化协调成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/moju-igbene](https://www.usenix.org/conference/usenixsecurity22/presentation/moju-igbene)
- **PDF:** [https://www.usenix.org/system/files/sec22-moju-igbene.pdf](https://www.usenix.org/system/files/sec22-moju-igbene.pdf)
## Caring about Sharing: User Perceptions of Multiparty Data Sharing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#caring-about-sharing-user-perceptions-of-multiparty-data-sharing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#caring-about-sharing-user-perceptions-of-multiparty-data-sharing)**
### 作者
* Bailey Kacsmar, University of Waterloo
* Kyle Tilbury, University of Waterloo
* Miti Mazmudar, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### 摘要
> 数据共享通常在实践和研究中被认为是一种“一刀切”的做法。例如，用户获取有关公司如何共享其数据的主要信息来源是隐私政策。隐私政策使用模糊的术语，如“第三方”和“合作伙伴”，以描述数据共享的对象。在现实世界中，数据共享比这些总体术语所包含的要更加细致入微。我们通过在线调查研究了用户对不同数据共享场景的不同感知。我们确定了当明确展示数据共享的方式、共享对象以及共享原因时，用户的感知态度。我们发现用户有偏好，并且在可接受程度上存在变化，这取决于数据共享合作的性质。用户对数据共享的关注需要更透明的共享实践和规定。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kacsmar](https://www.usenix.org/conference/usenixsecurity22/presentation/kacsmar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kacsmar.pdf](https://www.usenix.org/system/files/sec22-kacsmar.pdf)
## Neither Access nor Control: A Longitudinal Investigation of the Efficacy of User Access-Control Solutions on Smartphones.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#neither-access-nor-control-a-longitudinal-investigation-of-the-efficacy-of-user-access-control-solutions-on-smartphones) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#neither-access-nor-control-a-longitudinal-investigation-of-the-efficacy-of-user-access-control-solutions-on-smartphones)**
### 作者
* Masoud Mehrabi Koushki, University of British Columbia
* Yue Huang, University of British Columbia
* Julia Rubin, University of British Columbia
* Konstantin Beznosov, University of British Columbia
### 摘要
> 智能手机上现行的全有或全无的访问控制模型已被公认为不能令用户满意，原因是负担高（包括认知和物理方面）且缺乏设备共享支持。已经提出了几种替代模型。然而，由于缺乏详细的用户授权需求定量数据，尚未对它们的有效性进行实证评估和比较。本文通过30天的日记研究填补了这一空白。我们对美国智能手机用户的一个近代表性样本（N = 55）进行了调查，收集了他们在手机上执行的任务以及每个任务的授权需求的全面列表。利用这些数据，我们首次定量评估了全有或全无模型的有效性，证明了频繁的不必要或遗漏的干预（误报率（FPR）= 90％，漏报率（FNR）= 21％）。相比之下，我们表明应用或任务级别的模型可以将FPR提高至88％，FNR提高至20％，但需要适度（最多15％）增加前期配置。我们还证明电话共享发生的环境在75％的时间内保持一致，显示了基于上下文的解决方案的潜力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/koushki](https://www.usenix.org/conference/usenixsecurity22/presentation/koushki)
- **PDF:** [https://www.usenix.org/system/files/sec22-koushki.pdf](https://www.usenix.org/system/files/sec22-koushki.pdf)
## Jenny: Securing Syscalls for PKU-based Memory Isolation Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#jenny-securing-syscalls-for-pku-based-memory-isolation-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#jenny-securing-syscalls-for-pku-based-memory-isolation-systems)**
### 作者
* David Schrammel, Graz University of Technology
* Samuel Weiser, Graz University of Technology
* Richard Sadek, Graz University of Technology
* Stefan Mangard, Graz University of Technology
### 摘要
> 高效的系统调用过滤是对抗当前面临的众多利用技术和特权提升攻击的关键组成部分。例如，现代浏览器使用沙盒技术和系统调用过滤来隔离关键代码。云计算广泛使用容器来实现系统调用接口的虚拟化。最近，云服务提供商为了性能原因转向进程内容器，需要更好的隔离原语。一种有潜力填补这一空白的新型隔离原语被称为用户空间保护键（PKU）。不幸的是，先前的研究突出了基于PKU的系统在管理系统调用方面存在严重缺陷，质疑其安全性和实用性。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们全面研究了基于PKU的内存隔离系统的系统调用过滤。首先，我们识别出一些能够破坏PKU沙盒的新型基于系统调用的攻击。其次，我们推导出保护PKU域所需的系统调用过滤规则，并展示了有效实施这些规则的方法。第三，我们对不同的系统调用拦截技术进行了比较研究，以确定它们对于PKU的适用性，从而设计出既快速又灵活的安全系统调用拦截技术。
> 
> 
> 
> 
> 
> 
> 
> 我们设计并原型化了名为Jenny的基于PKU的内存隔离系统，它在用户空间提供了强大的系统调用过滤能力。Jenny支持各种拦截技术（如seccomp和ptrace），并允许以嵌套方式进行特定域的系统调用过滤。此外，它能够安全地处理异步信号。我们的评估显示，对于nginx，性能影响仅为0-5%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/schrammel](https://www.usenix.org/conference/usenixsecurity22/presentation/schrammel)
- **PDF:** [https://www.usenix.org/system/files/sec22-schrammel.pdf](https://www.usenix.org/system/files/sec22-schrammel.pdf)
## Physical-Layer Attacks Against Pulse Width Modulation-Controlled Actuators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#physical-layer-attacks-against-pulse-width-modulation-controlled-actuators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#physical-layer-attacks-against-pulse-width-modulation-controlled-actuators)**
### 作者
* Gökçen Yılmaz Dayanıklı, Qualcomm
* Sourav Sinha, Virginia Tech
* Devaprakash Muniraj, IIT Madras
* Ryan M. Gerdes, Virginia Tech
* Mazen Farhood, Virginia Tech
* Mani Mina, Iowa State University
### 摘要
> 网络物理系统（CPS）由集成的计算和物理组件组成。物理组件（例如机器人臂）的动力通过执行器通过驱动信号进行控制。在这项工作中，我们分析了有意的电磁干扰（IEMI）在多大程度上允许攻击者改变驱动信号以干扰或控制一类广泛使用的执行器：那些使用脉宽调制（PWM）编码驱动数据（例如旋转角度或速度）的执行器。我们开发并通过特定频率和调制的IEMI波形实验验证了虚假驱动注入（FAI）的理论。
> 
> 
> 
> 
> 
> 
> 
> 具体地，描述了三种攻击波形，分别称为Block、Block & Rotate和Full Control，这些攻击波形可被攻击者利用来阻塞（服务拒绝）或改变由执行器的合法控制器发送的PWM信号中编码的驱动数据。对多个受PWM控制的执行器进行了攻击波形的有效性评估，观察到攻击者可以使用Block波形对所有测试的执行器进行拒绝服务攻击。此外，攻击者可以使用Block & Rotate和Full Control波形接管Futaba和HiTec等特定制造商的伺服马达。我们提出了一个攻击装置与受害者基于PWM的控制系统之间的耦合模型，以展示攻击者能够利用磁性共振耦合在相当距离上发起攻击。我们展示了对无人机（UAV）的执行器进行室内和飞行中的攻击，这些攻击的影响严重影响了UAV的安全运行，例如改变飞行轨迹。此外，我们还演示了对其他执行器（如使用PWM控制转速的直流马达）的服务拒绝攻击，并讨论了可能的对策（例如光学驱动数据传输）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dayanikli](https://www.usenix.org/conference/usenixsecurity22/presentation/dayanikli)
- **PDF:** [https://www.usenix.org/system/files/sec22-dayanikli.pdf](https://www.usenix.org/system/files/sec22-dayanikli.pdf)
## Branch History Injection: On the Effectiveness of Hardware Mitigations Against Cross-Privilege Spectre-v2 Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#branch-history-injection-on-the-effectiveness-of-hardware-mitigations-against-cross-privilege-spectre-v2-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#branch-history-injection-on-the-effectiveness-of-hardware-mitigations-against-cross-privilege-spectre-v2-attacks)**
### 作者
* Enrico Barberis, Vrije Universiteit Amsterdam
* Pietro Frigo, Vrije Universiteit Amsterdam
* Marius Muench, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### 摘要
> 分支目标注入（BTI或Spectre v2）是最危险的瞬态执行漏洞之一，它允许攻击者利用间接分支预测错误泄露敏感信息。不幸的是，它也被证明很难加以缓解，厂商最初采用了效率低下的软件缓解措施，如retpoline。最近，高效的硬件缓解措施，如Intel eIBRS和Arm CSV2，已作为替代方案在生产中部署，将分支目标状态隔离到特权域之间。假设这足以阻止实际的BTI利用。在本文中，我们对这种信念提出质疑，并披露了Intel和Arm解决方案中的基本设计缺陷。
> 
> 
> 
> 
> 
> 
> 
> 我们引入了分支历史注入（BHI或Spectre-BHB），这是一种基于基于隔离的硬件防御系统构建跨特权BTI攻击的新原始方法。BHI基于这样的观察：虽然分支目标状态现在已在特权域之间隔离，但这种隔离并未扩展到其他跟踪分支历史状态的分支预测器元素中，最终重新启用了跨特权攻击。我们进一步分析了假设基于隔离的缓解措施还隔离了分支历史的保证，并表明，在没有冲突自由设计的情况下，实际上仍有可能进行相同预测器模式的攻击。为了实现我们的方法，我们呈现了端到端的利用方法，在存在或假设的基于隔离的缓解措施下，从Intel系统的用户空间中泄露内核内存，速度为每秒160字节。我们得出结论，像retpoline这样的软件防御措施在可预见的未来仍然是唯一实际可行的BTI缓解措施，对高效的硬件缓解措施的追求必须继续进行。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/barberis](https://www.usenix.org/conference/usenixsecurity22/presentation/barberis)
- **PDF:** [https://www.usenix.org/system/files/sec22-barberis.pdf](https://www.usenix.org/system/files/sec22-barberis.pdf)
## TLB;DR: Enhancing TLB-based Attacks with TLB Desynchronized Reverse Engineering.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tlb-dr-enhancing-tlb-based-attacks-with-tlb-desynchronized-reverse-engineering) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tlb-dr-enhancing-tlb-based-attacks-with-tlb-desynchronized-reverse-engineering)**
### 作者
* Andrei Tatar, Vrije Universiteit, Amsterdam
* Daniël Trujillo, Vrije Universiteit, Amsterdam, and ETH Zurich
* Cristiano Giuffrida, Vrije Universiteit, Amsterdam
* Herbert Bos, Vrije Universiteit, Amsterdam
### 摘要
> 翻译后的摘要如下：
> 
> 
> 
> 
> 
> 
> 
> 翻译间接缓冲器（Translation Lookaside Buffers, TLBs）在最近的微体系结构攻击中起着至关重要的作用。然而，与CPU缓存不同，我们对这些基本的微体系结构组件的确切操作了解甚少。本文介绍了TLB解同步作为一种从软件中逆向工程TLB行为的新技术。与以往依赖于定时或性能计数器的努力不同，我们的技术依赖于TLBs的基本属性，能够进行精确、细粒度的实验。我们利用解同步来揭示TLB行为的新见解，检查先前未记录的特性，如商品化的英特尔处理器上的替换策略和PCID的处理方式。我们还展示了这些知识能够实现更多、更好的攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们的研究结果揭示了现代英特尔CPU的L2 TLB上的一种新的替换策略，以及表明有PCID高速缓存的行为特征。我们利用我们的新见解设计对TLB状态进行干扰，以在最少的步骤中驱逐目标条目，并检查它们对几类先前基于TLB的攻击的影响。我们的发现实现了精确到TLBleed的跨L2的实用侧信道攻击，具有更精细的空间区分度，并且与L1相当的采样速率，以及同时针对两个级别的更细粒度的变体。我们还展示了对依赖于TLB驱逐的其他类攻击的显著速度增益。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tatar](https://www.usenix.org/conference/usenixsecurity22/presentation/tatar)
- **PDF:** [https://www.usenix.org/system/files/sec22-tatar.pdf](https://www.usenix.org/system/files/sec22-tatar.pdf)
## FuzzOrigin: Detecting UXSS vulnerabilities in Browsers through Origin Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzorigin-detecting-uxss-vulnerabilities-in-browsers-through-origin-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzorigin-detecting-uxss-vulnerabilities-in-browsers-through-origin-fuzzing)**
### 作者
* Sunwoo Kim, Samsung Research
* Young Min Kim, Seoul National University
* Jaewon Hur, Seoul National University
* Suhwan Song, Seoul National University
* Gwangmu Lee, EPFL
* Byoungyoung Lee, Seoul National University
### 摘要
> 通用跨站脚本（UXSS）是一种浏览器漏洞，使得容易受攻击的浏览器在加载的任何网页上执行攻击者的脚本。与研究充分的跨站脚本（XSS）相比，UXSS被认为是一种更严重的漏洞。这是因为UXSS的影响不仅仅局限于一个Web应用程序，而是在受害用户运行易受攻击的浏览器的情况下，它会影响到每一个Web应用程序。我们发现，通过模糊测试很难找到UXSS漏洞，原因如下。首先，检测UXSS是一项具有挑战性的任务，因为它是一种语义漏洞。为了检测UXSS，需要理解Web页面之间的复杂交互语义。其次，生成触发UXSS的HTML输入是困难的，因为需要驱动浏览器执行复杂的交互和导航操作。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一种名为FuzzOrigin的浏览器模糊测试工具，旨在检测UXSS漏洞。FuzzOrigin通过（i）设计具有静态起源标记机制的起源净化器和（ii）通过生成处理特定事件的链式导航操作来优先处理起源更新操作，解决了上述两个挑战。我们实现了FuzzOrigin，它可以与大多数现代浏览器一起使用，包括Chrome、Firefox、Edge和Safari。在评估过程中，FuzzOrigin发现了四个以前未知的UXSS漏洞，其中一个在Chrome中，三个在Firefox中，所有这些漏洞都得到了供应商的确认。FuzzOrigin负责发现2021年在Chrome中报告的两个UXSS漏洞中的一个以及全部三个Firefox中的漏洞，突显了它在发现新的UXSS漏洞方面的强大效果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kim](https://www.usenix.org/conference/usenixsecurity22/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec22-kim.pdf](https://www.usenix.org/system/files/sec22-kim.pdf)
## BrakTooth: Causing Havoc on Bluetooth Link Manager via Directed Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#braktooth-causing-havoc-on-bluetooth-link-manager-via-directed-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#braktooth-causing-havoc-on-bluetooth-link-manager-via-directed-fuzzing)**
### 作者
* Matheus E. Garbelini, Singapore University of Technology and Design
* Vaibhav Bedi, Singapore University of Technology and Design
* Sudipta Chattopadhyay, Singapore University of Technology and Design
* Sumei Sun, Institute for Infocomm Research, A*Star
* Ernest Kurniawan, Institute for Infocomm Research, A*Star
### 摘要
> 本文提出、设计和评估了一个系统化的指导模糊测试框架，以自动发现任意蓝牙经典（BT）设备中的实现漏洞。我们模糊测试器的核心是第一个通过无线方式从主机上完全控制BT控制器基带的方法。这使得我们能够拦截和修改任意数据包，以及在封闭源码蓝牙协议栈的较低层次，即链路管理协议（LMP）和基带层，乱序地注入数据包。为了在模糊测试过程中有系统地引导我们，我们提出了一种可扩展且全新的基于规则的方法，在正常的无线通信过程中自动构建协议状态机。具体而言，通过编写一组简单的规则来识别协议消息，我们可以动态构建一个抽象的协议状态机，模糊产生状态相关的数据包，并验证目标设备的响应。截至目前，我们已经对来自11个厂商的13款BT设备进行了模糊测试，并发现了总计18个未知的实现缺陷，其中有24个分配了公共漏洞编号（CVE）。此外，我们的发现还获得了某些厂商的六个漏洞赏金。最后，为了展示我们的框架在蓝牙以外的其他无线协议中的广泛适用性，我们扩展了我们的方法来模糊测试其他无线协议，这进一步揭示了某些Wi-Fi和BLE主机栈中的六个未知漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/garbelini](https://www.usenix.org/conference/usenixsecurity22/presentation/garbelini)
- **PDF:** [https://www.usenix.org/system/files/sec22-garbelini.pdf](https://www.usenix.org/system/files/sec22-garbelini.pdf)
## AmpFuzz: Fuzzing for Amplification DDoS Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ampfuzz-fuzzing-for-amplification-ddos-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ampfuzz-fuzzing-for-amplification-ddos-vulnerabilities)**
### 作者
* Johannes Krupp, CISPA Helmholtz Center for Information Security
* Ilya Grishchenko, University of California, Santa Barbara
* Christian Rossow, CISPA Helmholtz Center for Information Security
### 摘要
> 放大式DDoS攻击仍然是互联网中普遍存在且严重的威胁，最近的攻击已经达到了Tbps的范围。然而，迄今为止已知的所有放大攻击向量要么是通过费力的手动分析由研究人员发现的，要么只能在大型攻击后进行事后识别。然而，理想情况下，攻击向量应该在第一次攻击发生之前就被发现和减轻。
> 
> 
> 
> 
> 
> 
> 
> 为此，我们提出了AmpFuzz，这是一种以协议不可知方式在UDP服务中发现放大向量的第一个系统方法。AmpFuzz基于最先进的灰盒模糊测试技术，并采用一种新的技术来使模糊测试具备UDP感知，从而显著提高了性能。我们对28个Debian网络服务进行了AmpFuzz评估，我们重新发现了7个已知的放大漏洞和6个以前未报告的放大漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/krupp](https://www.usenix.org/conference/usenixsecurity22/presentation/krupp)
- **PDF:** [https://www.usenix.org/system/files/sec22-krupp.pdf](https://www.usenix.org/system/files/sec22-krupp.pdf)
## FRAMESHIFTER: Security Implications of HTTP/2-to-HTTP/1 Conversion Anomalies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#frameshifter-security-implications-of-http-2-to-http-1-conversion-anomalies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#frameshifter-security-implications-of-http-2-to-http-1-conversion-anomalies)**
### 作者
* Bahruz Jabiyev, Northeastern University
* Steven Sprecher, Northeastern University
* Anthony Gavazzi, Northeastern University
* Tommaso Innocenti, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Engin Kirda, Northeastern University
### 摘要
> HTTP/2的采用速度正在快速攀升。然而，在实践中，互联网通信仍很少通过端到端的HTTP/2通道进行。这是由于内容分发网络和其他反向代理，它们是互联网生态系统中无处不在且必不可少的组成部分，只支持客户端端的HTTP/2，而不支持与源服务器的前向连接。相反，代理技术主要依赖于在连接的两端之间进行HTTP/2到HTTP/1协议转换。
> 
> 
> 
> 
> 
> 
> 
> 我们首次系统地探索了HTTP/2到HTTP/1协议转换异常及其安全影响。我们开发了一种基于语法的HTTP/2模糊测试工具，通过HTTP/2帧序列和内容操纵对12种流行的反向代理技术和内容分发网络进行了实验，并发现了大量新颖的网络应用攻击向量，导致请求阻断、拒绝服务、查询致命性错误和请求走私攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jabiyev](https://www.usenix.org/conference/usenixsecurity22/presentation/jabiyev)
- **PDF:** [https://www.usenix.org/system/files/sec22-jabiyev.pdf](https://www.usenix.org/system/files/sec22-jabiyev.pdf)
## Your Microphone Array Retains Your Identity: A Robust Voice Liveness Detection System for Smart Speakers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#your-microphone-array-retains-your-identity-a-robust-voice-liveness-detection-system-for-smart-speakers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#your-microphone-array-retains-your-identity-a-robust-voice-liveness-detection-system-for-smart-speakers)**
### 作者
* Yan Meng, Shanghai Jiao Tong University
* Jiachun Li, Shanghai Jiao Tong University
* Matthew Pillari, University of Virginia
* Arjun Deopujari, University of Virginia
* Liam Brennan, University of Virginia
* Hafsah Shamsie, University of Virginia
* Haojin Zhu, Shanghai Jiao Tong University
* Yuan Tian, University of Virginia
### 摘要
> 尽管在智能家居系统中扮演着重要角色，智能音箱却容易受到声纹欺骗攻击。被动活体检测是一种仅利用采集到的音频而不是依靠已部署的传感器来区分真人声音和重放声音的方法，近年来引起了越来越多的关注。然而，它面临着不同环境因素下的性能下降的挑战，以及对固定用户手势的严格要求。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们提出了一种新颖的活体特征——阵列指纹，它利用智能音箱天然采用的麦克风阵列来确定收集到的音频的身份。我们的理论分析表明，通过利用麦克风的环形布局，与现有方案相比，阵列指纹在环境变化和用户动作方面具有更强的性能。然后，为了利用这种指纹，我们提出了一种轻量级的被动检测方案ARRAYID，并详细介绍了一系列与阵列指纹协同工作的特征。我们在包含32,780个音频样本和14个欺骗设备的数据集上进行评估，结果显示ARRAYID的准确率达到了99.84%，优于现有的被动活体检测方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/meng](https://www.usenix.org/conference/usenixsecurity22/presentation/meng)
- **PDF:** [https://www.usenix.org/system/files/sec22-meng.pdf](https://www.usenix.org/system/files/sec22-meng.pdf)
## Lumos: Identifying and Localizing Diverse Hidden IoT Devices in an Unfamiliar Environment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lumos-identifying-and-localizing-diverse-hidden-iot-devices-in-an-unfamiliar-environment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lumos-identifying-and-localizing-diverse-hidden-iot-devices-in-an-unfamiliar-environment)**
### 作者
* Rahul An, Carnegie Mellon University
* Sharma, Carnegie Mellon University
* Elahe Soltanaghaei, Carnegie Mellon University
* Anthony Rowe, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### 摘要
> 隐藏的物联网设备越来越被用来监视酒店房间或AirBnB的用户。我们设想赋予进入这种陌生环境的用户能力，使用他们个人的手持设备识别和定位（例如，隐藏在植物后面的摄像头）各种隐藏设备（例如，摄像头、麦克风、扬声器）。
> 
> 
> 
> 
> 
> 
> 
> 这一挑战的困难之处在于用户在这种陌生环境中存在有限的网络可见性和物理访问，并且缺乏专门的设备。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了Lumos，一种在普通用户设备上运行的系统（例如，手机、笔记本电脑），可以使用户识别和定位连接到WiFi的隐藏物联网设备，并使用增强现实界面可视化它们的存在。Lumos解决了以下关键挑战：（1）仅使用粗粒度的无线网络层特征来识别各种设备，不使用IP/DNS层信息，也不知道隐藏设备的WiFi信道分配；（2）仅使用手机传感器和无线信号强度测量来定位已识别的物联网设备相对于用户的位置。我们在六个不同环境下评估了Lumos对于44种不同的物联网设备，涵盖了各种类型、型号和品牌。我们的结果显示，Lumos可以以95%的准确率识别隐藏设备，并在两居室、1000平方英尺的公寓中，在30分钟内将其定位的中位误差为1.5米。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-rahul](https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-rahul)
- **PDF:** [https://www.usenix.org/system/files/sec22-sharma-rahul.pdf](https://www.usenix.org/system/files/sec22-sharma-rahul.pdf)
## SkillDetective: Automated Policy-Violation Detection of Voice Assistant Applications in the Wild.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#skilldetective-automated-policy-violation-detection-of-voice-assistant-applications-in-the-wild) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#skilldetective-automated-policy-violation-detection-of-voice-assistant-applications-in-the-wild)**
### 作者
* Jeffrey Young, Clemson University
* Song Liao, Clemson University
* Long Cheng, Clemson University
* Hongxin Hu, University at Buffalo
* Huixing Deng, Clemson University
### 摘要
> 今天的语音个人助手(VPA)服务通过允许第三方开发者构建语音应用并将其发布到市场(例如，亚马逊Alexa和谷歌助手平台)得到了广泛的扩展。为了阻止不法开发者，VPA平台提供商已经明确规定了一系列政策要求，第三方开发者必须遵守，例如，未经许可不得收集针对儿童的语音应用的个人数据。在这项工作中，我们旨在通过对语音应用的全面动态分析，识别现有VPA平台中违反政策的语音应用。为此，我们设计和开发了SkillDetective，一个交互式测试工具，能够以自动化的方式探索语音应用的行为并识别政策违规行为。与以往的工作不同的是，SkillDetective从多个来源（包括文本、图像和音频文件）的更广泛的背景下评估语音应用对52个不同政策要求的符合性。通过SkillDetective，我们测试了54,055个亚马逊Alexa技能和5,583个谷歌助手操作，并从语音应用的交互中收集了518,385个文本输出、约2070个唯一音频文件和31,100个唯一图像。我们发现了6,079个技能和175个操作违反了至少一个政策要求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/young](https://www.usenix.org/conference/usenixsecurity22/presentation/young)
- **PDF:** [https://www.usenix.org/system/files/sec22-young.pdf](https://www.usenix.org/system/files/sec22-young.pdf)
## "OK, Siri" or "Hey, Google": Evaluating Voiceprint Distinctiveness via Content-based PROLE Score.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ok-siri-or-hey-google-evaluating-voiceprint-distinctiveness-via-content-based-prole-score) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ok-siri-or-hey-google-evaluating-voiceprint-distinctiveness-via-content-based-prole-score)**
### 作者
* Ruiwen He, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Xinfeng Li, Zhejiang University
* Yushi Cheng, Tsinghua University
* Wenyuan Xu, Zhejiang University
### 摘要
> 语音特征是由光谱图产生的人类声音独特模式，广泛应用于语音助手的认证。本文研究了语音内容对语音特征独特性的影响，并通过对2457名演讲者和14,600,000个测试样本的研究得出了以下三个问题的答案：1）决定语音特征独特性的影响因素是什么？2）如何量化给定单词的语音特征独特性，例如商业语音助手中的唤醒词？3）如何构造具有高独特性的唤醒词语音特征？为了回答这些问题，我们将语音特征分解为音素，并实验性地得出了错误识别率与音素类型的丰富程度、顺序、长度和元素之间的相关性。然后，我们定义了可以基于语音内容轻松计算却能反映语音独特性的PROLE评分。在PROLE评分的指导下，我们测试了19种商业语音助手产品的30个唤醒词，包括英文和中文的“喂，Siri''、“好的，谷歌''和“你好，小娜''等。最后，我们为用户和制造商提供了选择安全语音特征词的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-ruiwen](https://www.usenix.org/conference/usenixsecurity22/presentation/he-ruiwen)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-ruiwen.pdf](https://www.usenix.org/system/files/sec22-he-ruiwen.pdf)
## Helping hands: Measuring the impact of a large threat intelligence sharing community.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#helping-hands-measuring-the-impact-of-a-large-threat-intelligence-sharing-community) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#helping-hands-measuring-the-impact-of-a-large-threat-intelligence-sharing-community)**
### 作者
* X, Delft University of Technology
* er Bouwman, Delft University of Technology
* Victor Le Pochat, imec-DistriNet, KU Leuven
* Pawel Foremski, Farsight Security, Inc. / IITiS PAN
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Carlos H. Gañán, Delft University of Technology and ICANN
* Giovane C. M. Moura, SIDN Labs
* Samaneh Tajalizadehkhoob, ICANN
* Wouter Joosen, imec-DistriNet, KU Leuven
* Michel van Eeten, Delft University of Technology
### 摘要
> 我们追踪了迄今为止已知的最大志愿安全信息共享社区：COVID-19网络威胁合作联盟，拥有超过4,000名成员。这使我们能够回答长期存在的威胁信息共享问题。首先，大规模的协作是否会提高覆盖率？其次，威胁数据的免费提供是否会提高防御者的行动能力？我们发现CTC主要是聚合了现有行业威胁信息来源。由于其使用VirusTotal进行自动质量保证的高门槛，用户提交的域名通常未被列入CTC的阻止列表。尽管这确保了较低的误报率，但也导致阻止列表的焦点从与COVID-19相关的域名（1.4%-3.6%）转向更通用的滥用行为，如钓鱼，针对这些已有建立的缓解机制。然而，在与COVID-19相关的数据片段中，我们发现了CTC这样的社区的附加价值的有希望的证据：仅有25.1%的这些域名在列入时间时已知于现有的滥用检测基础设施，而整体阻止列表上有58.4%的域名已知。从CTC所代表的独特实验中，我们从中得出了三个未来威胁数据共享倡议的教训。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bouwman](https://www.usenix.org/conference/usenixsecurity22/presentation/bouwman)
- **PDF:** [https://www.usenix.org/system/files/sec22-bouwman.pdf](https://www.usenix.org/system/files/sec22-bouwman.pdf)
## A Large-scale Temporal Measurement of Android Malicious Apps: Persistence, Migration, and Lessons Learned.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-temporal-measurement-of-android-malicious-apps-persistence-migration-and-lessons-learned) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-temporal-measurement-of-android-malicious-apps-persistence-migration-and-lessons-learned)**
### 作者
* Yun Shen, Norton Research Group
* Pierre-Antoine Vervier, Norton Research Group
* Gianluca Stringhini, Boston University
### 摘要
> 我们通过利用2019年至2020年间流行移动安全产品的1170万用户所收集的每日880万台设备上的潜在有害应用（PHA）的实时动态，研究了Android平台上的时间动态。我们发现，Android当前的安全模型将安全产品限制为普通应用，无法自动移除恶意应用，为攻击者打开了重大的机会窗口。这些应用会向用户发出有关新发现威胁的警告，但用户未能立即采取行动，导致PHA在被检测到后平均在设备上存留24天。我们还发现，虽然应用市场在PHA被发现后会将其移除，但在PHA被确定和移除之间存在着显著的延迟：PHA在Google Play上平均存留77天，在第三方应用市场上平均存留34天。最后，我们发现PHA在被原始应用市场移除后会迁移到其他应用市场。本文提供了对Android平台上PHA局势的前所未有的观察，显示出当前Android对抗PHA的防御措施并不像人们普遍认为的那样有效，并指出了安全界应该追求的多个研究方向，包括更有效的PHA清除策略和更好的移动安全产品警示方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shen-yun](https://www.usenix.org/conference/usenixsecurity22/presentation/shen-yun)
- **PDF:** [https://www.usenix.org/system/files/sec22-shen-yun.pdf](https://www.usenix.org/system/files/sec22-shen-yun.pdf)
## A Large-scale and Longitudinal Measurement Study of DKIM Deployment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-and-longitudinal-measurement-study-of-dkim-deployment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-and-longitudinal-measurement-study-of-dkim-deployment)**
### 作者
* Chuhan Wang, Tsinghua University
* Kaiwen Shen, Tsinghua University
* Minglei Guo, Tsinghua University
* Yuxuan Zhao, North China Institute of Computing Technology
* Mingming Zhang, Tsinghua University
* Jianjun Chen, Tsinghua University
* Baojun Liu, Tsinghua University
* Xiaofeng Zheng, Tsinghua University and Qi An Xin Technology Research Institute
* Haixin Duan, Tsinghua University and Qi An Xin Technology Research Institute
* Yanzhong Lin, Coremail Technology Co. Ltd
* Qingfeng Pan, Coremail Technology Co. Ltd
### 摘要
> DomainKeys Identified Mail（DKIM）是一种电子邮件认证协议，用于保护电子邮件内容的完整性。它已经被提出并标准化了十多年，并被雅虎、谷歌和其他主要电子邮件服务提供商采用。然而，由于难以在大规模上测量DKIM的部署情况，对DKIM的采用率和潜在安全问题的了解还很少。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提供了一项大规模的、长期的测量研究，以了解DKIM的部署和管理情况。我们的研究得益于广泛的数据集，包括五年来来自被动DNS数据集的950万个DKIM记录和来自真实世界电子邮件标头的4.6亿个DKIM签名。此外，我们对Alexa排名前100万的域名进行了主动测量。我们的测量结果显示，Alexa排名前100万的域名中有28.1%启用了DKIM，其中2.9%配置有误。我们证明了DKIM密钥管理和DKIM签名在真实世界中普遍存在问题，即使对于知名的电子邮件提供商（如Gmail和Mail.ru）也是如此。我们建议安全社区应该更加关注DKIM部署的系统性问题，并从协议设计的角度减轻这些问题。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-chuhan](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-chuhan)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-chuhan.pdf](https://www.usenix.org/system/files/sec22-wang-chuhan.pdf)
## A Large-scale Investigation into Geodifferences in Mobile Apps.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-investigation-into-geodifferences-in-mobile-apps) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-large-scale-investigation-into-geodifferences-in-mobile-apps)**
### 作者
* Renuka Kumar, University of Michigan
* Apurva Virkud, University of Michigan
* Ram Sundara Raman, University of Michigan
* Atul Prakash, University of Michigan
* Roya Ensafi, University of Michigan
### 摘要
> 最近对网络生态系统的研究引起了人们对因为互联网审查和地理屏蔽而导致互联网内容和服务获取差异日益增加的警示。然而，尽管应用程序对于移动用户的沟通和获取互联网内容至关重要，但在移动应用生态系统中的地理差异却受到了有限的关注。我们首次提出了对移动应用生态系统中地理差异的大规模测量研究。我们设计了一个半自动、并行的测量测试平台，用于在26个国家收集到Google Play上的5,684个流行应用程序。总共，我们收集了117,233个apk文件和112,607个应用程序的隐私政策。我们的结果显示了高水平的地理屏蔽，其中3,672个应用程序在我们的至少一个国家被屏蔽。虽然我们的数据证实了因政府要求而造成应用下架的传闻，但与普遍看法不同，我们发现开发者屏蔽的数量明显高于下架数量，对于移动应用生态系统中的地理屏蔽影响最大。我们还发现开发者会针对不同的国家发布不同版本的应用程序，一些版本具有较弱的安全设置或隐私披露，给用户带来更高的安全和隐私风险。我们提供了有关应用市场所有者应对所发现问题的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kumar](https://www.usenix.org/conference/usenixsecurity22/presentation/kumar)
- **PDF:** [https://www.usenix.org/system/files/sec22-kumar.pdf](https://www.usenix.org/system/files/sec22-kumar.pdf)
## Morphuzz: Bending (Input) Space to Fuzz Virtual Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#morphuzz-bending-input-space-to-fuzz-virtual-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#morphuzz-bending-input-space-to-fuzz-virtual-devices)**
### 作者
* Alex, Boston University and Red Hat
* er Bulekov, Boston University and Red Hat
* B, Red Hat
* an Das, Red Hat
* Stefan Hajnoczi, Red Hat
* Manuel Egele, Boston University
### 摘要
> 整个云生态系统的安全性极大地依赖于虚拟化监控程序在客户虚拟机（VMs）和主机系统之间提供的隔离保证。为了允许VMs与其环境进行通信，虚拟化监控程序提供了一系列虚拟设备，包括网络接口卡和性能优化的基于VIRTIO的SCSI适配器。由于这些设备直接位于虚拟化监控程序的隔离边界上并且接受潜在受攻击者控制的输入（例如来自恶意云租户），设备实现中的错误和漏洞有可能使得虚拟化监控程序的隔离保证失去作用。早期的研究将模糊测试应用于简单的虚拟设备，重点关注庞大输入空间的一小部分，并且现有的虚拟设备模糊测试工具Nyx需要精确编写的规范来测试复杂的设备。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一种名为MORPHUZZ的通用方法，它结合了针对虚拟化监控程序设计的洞察力和基于覆盖率引导的模糊测试，以发现虚拟设备实现中的错误。关键是，MORPHUZZ不依赖于每个设备特定的专业知识。MORPHUZZ是第一种能够自动调用现代云中真实虚拟设备的复杂I/O行为的方法。为了证明这一能力，我们在QEMU和bhyve中实现了MORPHUZZ，并对33个不同的虚拟设备进行了模糊测试（这是对之前研究中分析的16个设备的超集）。此外，我们还展示了MORPHUZZ不限于特定的CPU架构，通过对3个额外的ARM设备进行模糊测试。MORPHUZZ在13/16个虚拟设备的覆盖率上与Nyx相匹配或超过，并且发现了Nyx报告的所有崩溃的超集（110个）。我们将所有新发现的错误报告给了相应的开发者。值得注意的是，MORPHUZZ在没有初始种子输入或专业指导的情况下实现了这一点。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bulekov](https://www.usenix.org/conference/usenixsecurity22/presentation/bulekov)
- **PDF:** [https://www.usenix.org/system/files/sec22-bulekov.pdf](https://www.usenix.org/system/files/sec22-bulekov.pdf)
## Fuzzware: Using Precise MMIO Modeling for Effective Firmware Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzware-using-precise-mmio-modeling-for-effective-firmware-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzware-using-precise-mmio-modeling-for-effective-firmware-fuzzing)**
### 作者
* Tobias Scharnowski, Ruhr-Universität Bochum
* Nils Bars, Ruhr-Universität Bochum
* Moritz Schloegel, Ruhr-Universität Bochum
* Eric Gustafson, UC Santa Barbara
* Marius Muench, Vrije Universiteit Amsterdam
* Giovanni Vigna, UC Santa Barbara and VMware
* Christopher Kruegel, UC Santa Barbara
* Thorsten Holz, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
### 摘要
> 随着嵌入式设备在我们的日常生活中变得越来越普遍，它们成为攻击者的有吸引力的目标。尽管这些设备具有较高的价值和较大的攻击面，但对这种设备应用自动化测试技术如模糊测试并不直接。由于在受限的嵌入式设备上进行模糊测试固件效率低下，最先进的方法选择在仿真器中运行固件（通过一个称为重新主机的过程）。然而，现有的方法要么使用粗粒度的静态模型来描述硬件行为，要么需要手动努力重新主机固件。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了一种轻量级程序分析、重新主机和模糊测试的新颖组合，以解决这些挑战。我们提出了Fuzzware的设计和实现，这是一个仅使用软件的系统，可以以可扩展的方式对未修改的单体固件进行模糊测试。通过确定硬件生成的值在固件逻辑中的实际使用方式，Fuzzware可以自动生成帮助集中模糊测试过程的模型，从而大大提高其效果。
> 
> 
> 
> 
> 
> 
> 
> 我们在合成和真实目标上评估了我们的方法，包括19个硬件平台和77个固件映像。与最先进的工作相比，Fuzzware的代码覆盖率提高了最多3.25倍，而我们的建模方法将输入空间的大小减少了最多95.5％。合成样本包含了66个不同硬件交互的单元测试，我们发现我们的方法是第一个能够自动通过所有单元测试的通用重新主机解决方案。Fuzzware发现了15个全新的错误，其中包括以前被其他作品分析过的目标中的错误；共分配了12个CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/scharnowski](https://www.usenix.org/conference/usenixsecurity22/presentation/scharnowski)
- **PDF:** [https://www.usenix.org/system/files/sec22-scharnowski.pdf](https://www.usenix.org/system/files/sec22-scharnowski.pdf)
## MundoFuzz: Hypervisor Fuzzing with Statistical Coverage Testing and Grammar Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mundofuzz-hypervisor-fuzzing-with-statistical-coverage-testing-and-grammar-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mundofuzz-hypervisor-fuzzing-with-statistical-coverage-testing-and-grammar-inference)**
### 作者
* Cheolwoo Myung, Seoul National University
* Gwangmu Lee, Seoul National University
* Byoungyoung Lee, Seoul National University
### 摘要
> 虚拟化监控程序是一种系统软件，用于管理和运行虚拟机。由于虚拟化监控程序位于典型系统软件堆栈的最低层级，因此其具有重要的安全影响。一旦被攻击，虚拟化监控程序上运行的所有软件组件（包括所有客户虚拟机和每个客户虚拟机内部运行的应用程序）也将受到攻击，因为虚拟化监控程序具有访问这些软件组件的所有特权。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了MUNDOFUZZ，一种虚拟化监控程序模糊测试工具，能够同时进行基于覆盖率的模糊测试和基于语法的模糊测试。我们发现虚拟化监控程序中的覆盖率测量受到由于异步系统事件处理引起的干扰。为了过滤掉这些干扰，MUNDOFUZZ开发了一种统计差异覆盖率测量方法，使得MUNDOFUZZ能够捕获虚拟化监控程序输入的干净覆盖率信息。此外，我们观察到虚拟化监控程序输入具有复杂的输入语法，因为它支持许多不同的设备，并且每个设备都有自己的输入格式。因此，MUNDOFUZZ通过检查给定虚拟化监控程序输入的覆盖特征来学习输入的语法，其基本思想是如果给出语法正确（或不正确）的输入，则虚拟化监控程序的行为将不同。我们使用流行的虚拟化监控程序QEMU和Bhyve对MUNDOFUZZ进行了评估，在覆盖率方面，MUNDOFUZZ的表现优于其他先进的虚拟化监控程序模糊测试工具，提高了4.91%至6.60%。更重要的是，MUNDOFUZZ发现了40个以前未知的漏洞（包括9个CVE漏洞），证明了其在发现实际虚拟化监控程序漏洞方面的强大实际效果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/myung](https://www.usenix.org/conference/usenixsecurity22/presentation/myung)
- **PDF:** [https://www.usenix.org/system/files/sec22-myung.pdf](https://www.usenix.org/system/files/sec22-myung.pdf)
## Drifuzz: Harvesting Bugs in Device Drivers from Golden Seeds.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#drifuzz-harvesting-bugs-in-device-drivers-from-golden-seeds) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#drifuzz-harvesting-bugs-in-device-drivers-from-golden-seeds)**
### 作者
* Zekun Shen, NYU
* Ritik Roongta, NYU
* Brendan Dolan-Gavitt, NYU
### 摘要
> 现代计算机中的外围硬件通常被假定为安全且无恶意，设备驱动程序的实现方式会信任来自硬件的输入。然而，最近的漏洞（例如Broadpwn）表明攻击者可以通过易受攻击的外围设备利用主机，凸显了保护操作系统-外围设备边界的重要性。在本文中，我们提出了一种无硬件的混合符号执行扩展模糊测试技术，针对WiFi和以太网驱动程序，并提出了一种生成高质量初始种子的技术，我们称之为黄金种子，使模糊测试能够绕过驱动程序初始化过程中的复杂代码结构。与先前使用符号执行或灰盒模糊测试的工作相比，Drifuzz在自动查找允许网络接口完全初始化的输入方面更加成功，并且在WiFi驱动程序中提高了214%（3.1倍）的模糊测试覆盖率，在以太网驱动程序中提高了60%（1.6倍）。在我们对14个PCI和USB网络驱动程序进行的实验中，我们发现了12个之前未知的漏洞，其中两个已被分配CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shen-zekun](https://www.usenix.org/conference/usenixsecurity22/presentation/shen-zekun)
- **PDF:** [https://www.usenix.org/system/files/sec22-shen-zekun.pdf](https://www.usenix.org/system/files/sec22-shen-zekun.pdf)
## LTrack: Stealthy Tracking of Mobile Phones in LTE.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ltrack-stealthy-tracking-of-mobile-phones-in-lte) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ltrack-stealthy-tracking-of-mobile-phones-in-lte)**
### 作者
* Martin Kotuliak, ETH Zurich
* Simon Erni, ETH Zurich
* Patrick Leu, ETH Zurich
* Marc Röschlin, ETH Zurich
* Srdjan Čapkun, ETH Zurich
### 摘要
> 我们介绍了一种名为LTrack的新型LTE跟踪攻击，能够使攻击者隐秘地提取用户设备的位置和唯一标识（IMSI）。为了保持隐秘，LTrack中设备的定位完全被动，依靠我们的新型上行/下行嗅探器。我们的嗅探器记录LTE消息的到达时间和定时提前命令的内容，基于这些信息，LTrack计算位置。通过在软件定义无线电上实现，LTrack是首个展示了LTE被动定位的可行性。
> 
> 
> 
> 
> 
> 
> 
> 被动定位攻击揭示了用户的位置轨迹，但最多只能将这些轨迹与设备的伪匿名临时标识（TMSI）相关联，这使得在拥挤区域或长时间跟踪中变得有挑战。LTrack通过引入和实施一种名为IMSI Extractor的新型IMSI Catcher来克服这一挑战。它提取设备的IMSI并将其绑定到其当前的TMSI。IMSI Extractor不依赖于现有的IMSI Catcher使用的虚假基站，后者因为连续传输而易于被检测，而是依靠我们增强的上行/下行嗅探器结合手术级消息掩盖。这使得我们的IMSI Extractor成为迄今为止最隐蔽的IMSI Catcher。
> 
> 
> 
> 
> 
> 
> 
> 我们通过一系列实验评估了LTrack，并显示在视线条件下，攻击者可以在90%的情况下估计手机的位置，误差小于6米。我们成功地对17部连接到我们的工业级LTE测试平台的现代智能手机进行了IMSI Extractor的测试。我们还在某运营商的测试设施中验证了我们的上行/下行嗅探器和IMSI Extractor。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kotuliak](https://www.usenix.org/conference/usenixsecurity22/presentation/kotuliak)
- **PDF:** [https://www.usenix.org/system/files/sec22-kotuliak.pdf](https://www.usenix.org/system/files/sec22-kotuliak.pdf)
## Watching the Watchers: Practical Video Identification Attack in LTE Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#watching-the-watchers-practical-video-identification-attack-in-lte-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#watching-the-watchers-practical-video-identification-attack-in-lte-networks)**
### 作者
* Sangwook Bae, Korea Advanced Institute of Science and Technology (KAIST)
* Mincheol Son, Korea Advanced Institute of Science and Technology (KAIST)
* Dongkwan Kim, Korea Advanced Institute of Science and Technology (KAIST)
* CheolJun Park, Korea Advanced Institute of Science and Technology (KAIST)
* Jiho Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Sooel Son, Korea Advanced Institute of Science and Technology (KAIST)
* Yongdae Kim, Korea Advanced Institute of Science and Technology (KAIST)
### 摘要
> 视频识别攻击是一种实实在在的侵犯隐私的威胁，可以揭示受害者正在观看的视频。在本文中，我们首次研究了长期演进（LTE）网络中的视频识别攻击。我们发现，通过利用广播无线电信号，一个没有特权的对手只需使用软件定义无线电就能够1）识别正在观看对手感兴趣的目标视频的移动用户，并2）推断出这些用户正在观看的视频标题。我们使用来自三个移动运营商的三个视频流服务的46,810个LTE跟踪数据，展示了我们的攻击的准确率高达0.985。我们强调，这种高准确率是由于克服了LTE网络和视频流系统的操作逻辑相关的独特挑战。最后，我们提供了一个利用所呈现的视频识别攻击的端到端攻击方案，并提出了适用于当前LTE网络的应对措施。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bae](https://www.usenix.org/conference/usenixsecurity22/presentation/bae)
- **PDF:** [https://www.usenix.org/system/files/sec22-bae.pdf](https://www.usenix.org/system/files/sec22-bae.pdf)
## DoLTEst: In-depth Downlink Negative Testing Framework for LTE Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#doltest-in-depth-downlink-negative-testing-framework-for-lte-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#doltest-in-depth-downlink-negative-testing-framework-for-lte-devices)**
### 作者
* CheolJun Park, Korea Advanced Institute of Science and Technology (KAIST)
* Sangwook Bae, Korea Advanced Institute of Science and Technology (KAIST)
* BeomSeok Oh, Korea Advanced Institute of Science and Technology (KAIST)
* Jiho Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Eunkyu Lee, Korea Advanced Institute of Science and Technology (KAIST)
* Insu Yun, Korea Advanced Institute of Science and Technology (KAIST)
* Yongdae Kim, Korea Advanced Institute of Science and Technology (KAIST)
### 摘要
> LTE控制平面协议在终端用户设备中的实施缺陷直接导致严重的安全威胁。为了揭示这些缺陷，进行负面测试是一种有希望的方法，其测试用例只包含无效或禁止的消息。尽管它的重要性，蜂窝标准主要关注正面测试用例，从而产生了许多未经检查的实施漏洞，正如许多现有漏洞所证明的那样。为了填补这一空白，我们提出了DOLTEST，一种负面测试框架，可以全面测试终端用户设备。通过详细规范分析产生的可枚举测试用例和确定性预期结果使其适合用作查找实施漏洞的标准。我们使用DOLTEST从五个不同基带制造商的43个设备中发现了26个实施缺陷，证明了其有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/park-cheoljun](https://www.usenix.org/conference/usenixsecurity22/presentation/park-cheoljun)
- **PDF:** [https://www.usenix.org/system/files/sec22-park-cheoljun.pdf](https://www.usenix.org/system/files/sec22-park-cheoljun.pdf)
## Ghost Peak: Practical Distance Reduction Attacks Against HRP UWB Ranging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ghost-peak-practical-distance-reduction-attacks-against-hrp-uwb-ranging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ghost-peak-practical-distance-reduction-attacks-against-hrp-uwb-ranging)**
### 作者
* Patrick Leu, ETH Zurich
* Giovanni Camurati, ETH Zurich
* Alex, TU Darmstadt
* er Heinrich, TU Darmstadt
* Marc Roeschlin, ETH Zurich
* Claudio Anliker, ETH Zurich
* Matthias Hollick, TU Darmstadt
* Srdjan Capkun, ETH Zurich
* Jiska Classen, TU Darmstadt
### 摘要
> 我们展示了对IEEE 802.15.4z高速脉冲重复频率（HRP）超宽带（UWB）距离测量系统的首次无线攻击。具体而言，我们演示了针对Apple U1芯片（嵌入在iPhone和AirTags中）以及与NXP和Qorvo UWB芯片互操作的U1芯片的实际距离缩小攻击。这些芯片已经部署在各种手机和汽车中，用于车辆进入和启动的安全性，并计划用于安全非接触支付、家庭门锁和接触追踪系统。我们的攻击在不需要任何加密材料的情况下进行，将距离缩小从12米（实际距离）到0米（欺骗距离），攻击成功概率高达4％，只需要一种廉价（65美元）的现成设备。访问控制只能容忍次秒级的延迟，以不给用户带来不方便，留下很少的时间来进行耗时的验证。这种距离的缩小对于在安全关键的应用中使用UWB HRP引发了疑问。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/leu](https://www.usenix.org/conference/usenixsecurity22/presentation/leu)
- **PDF:** [https://www.usenix.org/system/files/sec22-leu.pdf](https://www.usenix.org/system/files/sec22-leu.pdf)
## SIMC: ML Inference Secure Against Malicious Clients at Semi-Honest Cost.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#simc-ml-inference-secure-against-malicious-clients-at-semi-honest-cost) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#simc-ml-inference-secure-against-malicious-clients-at-semi-honest-cost)**
### 作者
* Nishanth Ch, Microsoft Research
* ran, Microsoft Research
* Divya Gupta, Microsoft Research
* Sai Lakshmi Bhavana Obbattu, Microsoft Research
* Akash Shah, UCLA
### 摘要
> 安全推断允许模型所有者（或服务器）和输入所有者（或客户端）在不向对方透露私人信息的情况下执行机器学习模型的推断。大量的研究工作已经通过安全的二方计算为这个问题提供了高效的加密解决方案。然而，它们假设双方都是半诚实的，即遵循协议规范。最近，Lehmkuhl等人表明恶意客户端可以使用新型的模型提取攻击方法提取服务器的整个模型。为了纠正这种情况，他们引入了客户端恶意威胁模型，并构建了一个安全的推断系统MUSE，即使客户端是恶意的也可以提供安全性保证。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们设计并构建了SIMC，一个在客户端恶意威胁模型下的新型加密系统，用于安全推断。在MUSE考虑的安全推断基准测试中，SIMC的通信量较少23-29倍，并且比MUSE快11.4倍。SIMC通过一种新颖的非线性激活函数（如ReLU）协议获得了这些改进，该协议的通信量比MUSE少28倍以上，性能比MUSE高出43倍以上。事实上，SIMC的性能超过了最先进的半诚实安全推断系统！
> 
> 
> 
> 
> 
> 
> 
> 最后，和MUSE类似，我们展示了如何将SIMC的大部分加密成本转移到与输入无关的预处理阶段。虽然这个协议的在线阶段SIMC++的成本与MUSE相同，但SIMC的整体改进可以将这个协议的预处理阶段带来类似的改进。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chandran](https://www.usenix.org/conference/usenixsecurity22/presentation/chandran)
- **PDF:** [https://www.usenix.org/system/files/sec22-chandran.pdf](https://www.usenix.org/system/files/sec22-chandran.pdf)
## Efficient Differentially Private Secure Aggregation for Federated Learning via Hardness of Learning with Errors.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#efficient-differentially-private-secure-aggregation-for-federated-learning-via-hardness-of-learning-with-errors) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#efficient-differentially-private-secure-aggregation-for-federated-learning-via-hardness-of-learning-with-errors)**
### 作者
* Timothy Stevens, University of Vermont
* Christian Skalka, University of Vermont
* Christelle Vincent, University of Vermont
* John Ring, MassMutual
* Samuel Clark, Raytheon
* Joseph Near, University of Vermont
### 摘要
> 联邦机器学习利用边缘计算从网络用户数据中开发模型，但联邦学习中的隐私仍然是一个主要挑战。提出了使用差分隐私的技术来解决这个问题，但也带来了新的挑战。许多技术要求一个可信的第三方，否则会在产生有用模型时添加太多的噪音。使用多方计算的安全聚合的最新进展消除了对第三方的需求，但在大规模情况下计算成本很高。我们提出了一种新的联邦学习协议，利用了一种基于Learning With Errors技术的新型差分隐私恶意安全聚合协议。我们的协议优于目前最先进的技术，实证结果表明它可以适应大量参与方，并且对于任何差分隐私联邦学习方案都具有最佳的准确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/stevens](https://www.usenix.org/conference/usenixsecurity22/presentation/stevens)
- **PDF:** [https://www.usenix.org/system/files/sec22-stevens.pdf](https://www.usenix.org/system/files/sec22-stevens.pdf)
## Label Inference Attacks Against Vertical Federated Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#label-inference-attacks-against-vertical-federated-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#label-inference-attacks-against-vertical-federated-learning)**
### 作者
* Chong Fu, Zhejiang University
* Xuhong Zhang, Binjiang Institute of Zhejiang University
* Shouling Ji, Binjiang Institute of Zhejiang University
* Jinyin Chen, Zhejiang University of Technology
* Jingzheng Wu, Institute of Software, Chinese Academy of Sciences
* Shanqing Guo, Shandong University
* Jun Zhou, Ant Group
* Alex X. Liu, Ant Group
* Ting Wang, Pennsylvania State University
### 摘要
> 作为联邦学习（FL）的初始变体，水平联邦学习（HFL）适用于数据集具有相同特征空间但样本空间不同的情况，例如两个地区银行之间的合作；而垂直联邦学习（VFL）则处理数据集具有相同样本空间但特征空间不同的情况，例如银行和电子商务平台之间的合作。
> 
> 
> 
> 
> 
> 
> 
> 虽然已经提出了各种攻击来评估HFL的隐私风险，但是很少有研究探讨VFL的隐私风险。考虑到VFL的典型应用场景是少数参与者（通常为两个）共同训练一个机器学习（ML）模型，其中特征分布在它们之间，但标签只由其中一个参与者拥有，保护其中一个参与者拥有的标签的隐私应该是VFL提供的基本保证，因为这些标签可能非常敏感，例如一个人是否患有某种疾病。然而，我们发现VFL的底层模型结构和梯度更新机制可以被恶意参与者利用，从而获得推断私有标签的能力。更糟糕的是，通过滥用底层模型，他/她甚至可以推断出训练数据集之外的标签。基于我们的发现，我们提出了一组新的针对VFL的标签推断攻击。我们的实验表明，所提出的攻击具有出色的性能。我们进一步分享了我们的观点并讨论了可能的防御措施。我们的研究可以揭示VFL的隐藏隐私风险，并为更安全的VFL研究方向铺平道路。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fu-chong](https://www.usenix.org/conference/usenixsecurity22/presentation/fu-chong)
- **PDF:** [https://www.usenix.org/system/files/sec22-fu-chong.pdf](https://www.usenix.org/system/files/sec22-fu-chong.pdf)
## FLAME: Taming Backdoors in Federated Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#flame-taming-backdoors-in-federated-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#flame-taming-backdoors-in-federated-learning)**
### 作者
* Thien Duc Nguyen, Technical University of Darmstadt
* Phillip Rieger, Technical University of Darmstadt
* Huili Chen, University of California San Diego
* Hossein Yalame, Technical University of Darmstadt
* Helen Möllering, Technical University of Darmstadt
* Hossein Fereidooni, Technical University of Darmstadt
* Samuel Marchal, Aalto University and F-Secure
* Markus Miettinen, Technical University of Darmstadt
* Azalia Mirhoseini, Google
* Shaza Zeitouni, Technical University of Darmstadt
* Farinaz Koushanfar, University of California San Diego
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Thomas Schneider, Technical University of Darmstadt
### 摘要
> 联邦学习（FL）是一种协作式机器学习方法，允许参与者共同训练模型，而无需与他人共享其私人、可能包含敏感信息的本地数据集。尽管具有很多优点，FL容易受到所谓的后门攻击的影响，即敌对方向联邦模型聚合过程中注入篡改的模型更新，以便最终模型针对特定敌对方选择的输入提供有针对性的错误预测。目前对抗后门攻击的提出的防御方法局限于检测和过滤恶意模型更新，只考虑了非常特定和有限的攻击者模型；而基于差分隐私的噪声注入的防御方法会极大地损害聚合模型的良性性能。为了解决这些问题，我们介绍了一种名为FLAME的防御框架，它估计了注入足够量的噪声以确保消除后门。为了尽量减少所需的噪声量，FLAME采用了模型聚类和权重修剪的方法。这样可以确保FLAME在有效消除敌对后门的同时，保持聚合模型的良性性能。我们对来自图像分类、词语预测和物联网入侵检测等应用领域的几个数据集进行了对FLAME的评估，结果表明FLAME可以有效地去除后门，对模型的良性性能几乎没有影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/nguyen](https://www.usenix.org/conference/usenixsecurity22/presentation/nguyen)
- **PDF:** [https://www.usenix.org/system/files/sec22-nguyen.pdf](https://www.usenix.org/system/files/sec22-nguyen.pdf)
## Mitigating Membership Inference Attacks by Self-Distillation Through a Novel Ensemble Architecture.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mitigating-membership-inference-attacks-by-self-distillation-through-a-novel-ensemble-architecture) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mitigating-membership-inference-attacks-by-self-distillation-through-a-novel-ensemble-architecture)**
### 作者
* Xinyu Tang, Princeton University
* Saeed Mahloujifar, Princeton University
* Liwei Song, Princeton University
* Virat Shejwalkar, University of Massachusetts Amherst
* Milad Nasr, University of Massachusetts Amherst
* Amir Houmansadr, University of Massachusetts Amherst
* Prateek Mittal, Princeton University
### 摘要
> 会员推断攻击是评估机器学习（ML）模型隐私泄露的关键指标。在训练ML模型时，重要的是同时保持高的会员隐私性和可用性。在这项工作中，我们提出了一个新的框架来训练具有保护隐私的模型，以在成员和非成员输入上引发类似行为，以减轻会员推断攻击。我们的框架名为SELENA，由两个主要组成部分组成。第一个组成部分和我们的防御的核心是一种新颖的集成架构。我们称之为Split-AI，它将训练数据分成随机子集，并在每个子集上训练一个模型。在测试时，我们使用自适应推断策略：我们的集成架构只聚合那些训练数据中没有包含输入样本的模型的输出。我们的第二个组成部分是自蒸馏（Self-Distillation），它通过我们的Split-AI集成对训练数据集进行蒸馏，而无需使用任何外部公共数据集。我们证明了我们的Split-AI架构能够抵御一系列会员推断攻击，但与差分隐私不同，我们的防御无法对所有可能的攻击者提供可证明的保证。这使得我们能够提高模型的可用性。通过在主要基准数据集上进行广泛实验，我们展示了SELENA在（经验）会员隐私和可用性之间比现有经验隐私防御技术具有更好的折衷效果。特别是，与未经防御的模型相比，SELENA的分类准确率降低不超过3.9％，而会员推断攻击的优势降低了最多3.7倍（与MemGuard相比），降低了最多2.1倍（与对抗正则化相比）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tang](https://www.usenix.org/conference/usenixsecurity22/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/sec22-tang.pdf](https://www.usenix.org/system/files/sec22-tang.pdf)
## Synthetic Data - Anonymisation Groundhog Day.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#synthetic-data-anonymisation-groundhog-day) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#synthetic-data-anonymisation-groundhog-day)**
### 作者
* Theresa Stadler, EPFL
* Bristena Oprisanu, UCL
* Carmela Troncoso, EPFL
### 摘要
> 合成数据被宣传为解决传统匿名化技术不足的隐私保护数据发布的灵丹妙药。承诺是，从生成模型中提取的合成数据保留了原始数据集的统计特性，同时提供了完美的隐私攻击防护。在这项工作中，我们首次定量评估了合成数据发布的隐私增益，并将其与先前的匿名化技术进行了比较。
> 
> 
> 
> 
> 
> 
> 
> 我们对一系列最先进的生成模型进行的评估表明，合成数据既不能防止推断攻击，也不能保留数据实用性。换句话说，我们从实证的角度证明，与传统的匿名化技术相比，合成数据在隐私和实用性之间并没有提供更好的权衡。此外，与传统的匿名化不同，合成数据发布的隐私-实用性权衡很难预测。由于无法预测合成数据集将保留哪些信号，将丢失哪些信息，合成数据导致隐私增益高度变化且实用性损失无法预测。
> 
> 
> 
> 
> 
> 
> 
> 总之，我们发现合成数据远未达到隐私保护数据发布的终极目标。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/stadler](https://www.usenix.org/conference/usenixsecurity22/presentation/stadler)
- **PDF:** [https://www.usenix.org/system/files/sec22-stadler.pdf](https://www.usenix.org/system/files/sec22-stadler.pdf)
## Attacks on Deidentification's Defenses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#attacks-on-deidentifications-defenses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#attacks-on-deidentifications-defenses)**
### 作者
* Aloni Cohen, University of Chicago
### 摘要
> 基于准标识符的去标识化技术（QI去标识化）被广泛应用于实践中，包括k-匿名性、l-多样性和t-接近性。我们提出了三种对QI去标识化的新攻击：两种理论攻击和一种对真实数据集的实际攻击。与以前的工作相比，我们的理论攻击即使在每个属性都是准标识符的情况下也能起作用。因此，它们适用于k-匿名性、l-多样性、t-接近性和大多数其他的QI去标识化技术。
> 
> 
> 
> 
> 
> 
> 
> 首先，我们介绍了一类新的隐私攻击称为降码攻击，并证明了如果一个QI去标识化方案是最小的和分层的，则它是易受降码攻击的。其次，我们将降码攻击转化为强大的谓词唯一化（PSO）攻击，最近提出了将其作为一种演示隐私机制在欧洲《一般数据保护条例》下无法合法匿名化的方法。第三，我们使用LinkedIn.com对EdX发布的一个经过k-匿名处理的数据集中的3名学生进行重新识别（并显示成千上万的学生也可能易受攻击），这破坏了EdX声称符合《家庭教育权利和隐私法》的说法。
> 
> 
> 
> 
> 
> 
> 
> 这项工作的意义既是科学的也是政治的。我们的理论攻击证明了即使将每个属性都视为准标识符，QI去标识化可能不提供任何保护。我们的实际攻击证明，即使是按照严格的隐私法规行事的去标识化专家也未能阻止现实世界中的重新识别。它们共同驳斥了QI去标识化的基本原则，并对为继续使用k-匿名性和其他QI去标识化技术进行实际辩解提出了挑战。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cohen](https://www.usenix.org/conference/usenixsecurity22/presentation/cohen)
- **PDF:** [https://www.usenix.org/system/files/sec22-cohen.pdf](https://www.usenix.org/system/files/sec22-cohen.pdf)
## Birds of a Feather Flock Together: How Set Bias Helps to Deanonymize You via Revealed Intersection Sizes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#birds-of-a-feather-flock-together-how-set-bias-helps-to-deanonymize-you-via-revealed-intersection-sizes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#birds-of-a-feather-flock-together-how-set-bias-helps-to-deanonymize-you-via-revealed-intersection-sizes)**
### 作者
* Xiaojie Guo, Nankai University
* Ye Han, Nankai University
* Zheli Liu, Nankai University
* Ding Wang, Nankai University
* Yan Jia, Nankai University
* Jin Li, Guangzhou University
### 摘要
> 安全的两方协议用于计算与交集相关的统计数据已经引起了行业的广泛关注。这些协议使得两个组织可以联合计算它们的集合交集上的函数（例如计数和求和），而不需要明确地揭示这个交集。然而，大多数这类协议最终会透露出两个集合的交集大小。在这项工作中，我们关注的是攻击者如何利用透露的交集大小来推断一个组织集合中某些元素的成员身份。即使向另一个组织透露一个元素在某个组织集合中的成员身份，也可能违反隐私法规（例如GDPR），因为这样的元素通常用于在两个组织之间识别一个人。我们是第一个研究交集大小泄露中集合成员身份的。我们提出了两种攻击，即基线攻击和特征感知攻击，以评估在现实场景中的这种泄露情况。特别地，我们的特征感知攻击利用了现实中的集合偏差，即具有特定特征的元素更有可能是一个组织集合的成员。结果表明，在三个现实场景中，我们的两种攻击平均可以推断出2.0 ∼ 72.7个集合成员。如果集合偏差不是很弱，则特征感知攻击将优于基线攻击。例如，在COVID-19接触追踪中，特征感知攻击可以在135个协议调用中找到25.9个感染患者的标记，比基线攻击多出1.5倍。我们讨论了这样的结果可能带来的负面现实影响，并提出了对我们的攻击可能的防御方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/guo](https://www.usenix.org/conference/usenixsecurity22/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec22-guo.pdf](https://www.usenix.org/system/files/sec22-guo.pdf)
## Targeted Deanonymization via the Cache Side Channel: Attacks and Defenses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#targeted-deanonymization-via-the-cache-side-channel-attacks-and-defenses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#targeted-deanonymization-via-the-cache-side-channel-attacks-and-defenses)**
### 作者
* Mojtaba Zaheri, New Jersey Institute of Technology
* Yossi Oren, New Jersey Institute of Technology
* Reza Curtmola, New Jersey Institute of Technology
### 摘要
> 定向去匿名攻击使得恶意网站可以发现一个网站访客是否持有某个公共标识符，比如电子邮件地址或者Twitter账号。这些攻击之前被认为依赖于几个假设，限制了它们的实际影响。在这项工作中，我们挑战了这些假设，并展示了去匿名攻击的攻击面比之前认为的大得多。我们通过使用缓存侧信道进行攻击，而不是依赖于跨站泄漏来实现这一点。这使得我们的攻击对最近提出的基于软件的隔离机制，包括跨来源资源策略（CORP）、跨来源打开者策略（COOP）和SameSite cookie属性，都是无意识的。我们在多个硬件微体系结构、多个操作系统和多个浏览器版本上评估了我们的攻击，包括高度安全的Tor浏览器，并展示了对主要网站（包括Google、Twitter、LinkedIn、TikTok、Facebook、Instagram和Reddit）的实际定向去匿名攻击。我们的攻击在大多数情况下在3秒内完成，并可以扩展以针对数量呈指数增长的用户。
> 
> 
> 
> 
> 
> 
> 
> 为了阻止这些攻击，我们提供了一个完整功能的防御，部署为浏览器扩展程序。为了最大限度地减少易受攻击的个人的风险，我们的防御已经在Chrome和Firefox应用商店上可用。我们还负责向多个技术供应商以及电子前哨基金会披露了我们的发现。最后，我们为网站和浏览器供应商以及无法安装扩展程序的用户提供了指导。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zaheri](https://www.usenix.org/conference/usenixsecurity22/presentation/zaheri)
- **PDF:** [https://www.usenix.org/system/files/sec22-zaheri.pdf](https://www.usenix.org/system/files/sec22-zaheri.pdf)
## FReD: Identifying File Re-Delegation in Android System Services.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fred-identifying-file-re-delegation-in-android-system-services) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fred-identifying-file-re-delegation-in-android-system-services)**
### 作者
* Sigmund Albert Gorski III, North Carolina State University
* Seaver Thorn, North Carolina State University
* William Enck, North Carolina State University
* Haining Chen, Google
### 摘要
> 安卓平台的安全性极大地受益于特权的中间件，该中间件提供对受保护资源的间接访问。通过将功能分解为许多不同的服务，并仔细调整文件访问控制策略以减轻软件漏洞的影响，进一步增强了这种架构。然而，如果这些服务通过远程过程调用（RPC）接口错误地将文件访问重新委托给第三方应用程序，它们可能会变成混淆的代理。在本文中，我们提出了一种静态程序分析工具，名为FReD，它识别了基于Java的系统服务RPC接口与服务的Java和C/C++部分中打开的文件路径之间的映射。然后，它将Linux层的文件访问控制策略与安卓层的权限策略相结合，以识别潜在的文件重新委派。我们使用FReD来分析三台运行Android 10的设备，并识别出12个可以从第三方应用程序访问的混淆代理。这些漏洞包括五个有中等严重性的CVE，展示了半自动化方法在发现访问控制实施中的微妙缺陷方面的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gorski](https://www.usenix.org/conference/usenixsecurity22/presentation/gorski)
- **PDF:** [https://www.usenix.org/system/files/sec22-gorski.pdf](https://www.usenix.org/system/files/sec22-gorski.pdf)
## GhostTouch: Targeted Attacks on Touchscreens without Physical Touch.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ghosttouch-targeted-attacks-on-touchscreens-without-physical-touch) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ghosttouch-targeted-attacks-on-touchscreens-without-physical-touch)**
### 作者
* Kai Wang, Zhejiang University
* Richard Mitev, Technical University of Darmstadt
* Chen Yan, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
* Wenyuan Xu, Zhejiang University
### 摘要
> 电容触摸屏已成为智能手机和平板电脑等个人设备的主要人机界面。在本文中，我们提出了GhostTouch，这是对电容触摸屏的首个主动非接触攻击。GhostTouch利用电磁干扰（EMI）在不需要物理接触触摸屏的情况下向其注入虚假的触摸点。通过调节电磁信号的参数和调整天线，我们可以向触摸屏的目标位置注入两种基本触摸事件，即轻触和滑动，并控制它们以操纵底层设备。我们成功地对九款智能手机模型发起了GhostTouch攻击。我们可以连续注入有针对性的轻触，其标准偏差最低仅为14.6 x 19.2像素，延迟不超过0.5秒，距离可达40mm。我们展示了GhostTouch攻击在几个概念验证方案中的实际影响，包括接听窃听电话、按下按钮、向上滑动解锁和输入密码。最后，我们讨论了潜在的硬件和软件对策以减轻这种攻击的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-kai](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-kai)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-kai.pdf](https://www.usenix.org/system/files/sec22-wang-kai.pdf)
## SARA: Secure Android Remote Authorization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sara-secure-android-remote-authorization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sara-secure-android-remote-authorization)**
### 作者
* Abdullah Imran, Purdue University
* Habiba Farrukh, Purdue University
* Muhammad Ibrahim, Purdue University
* Z. Berkay Celik, Purdue University
* Antonio Bianchi, Purdue University
### 摘要
> 现代智能手机配备了可信执行环境(TEEs)，提供了安全功能，甚至可以抵御完全控制常规操作系统(例如Android设备中的Linux)的攻击者的攻击。学术界以及智能手机制造商都提出使用TEEs来加强授权协议的安全性。然而，这些协议的使用受到实用性问题和安全性完整性的限制。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这些问题，本文设计、实现和评估了SARA(安全的Android远程授权)，这是一个使用现有的TEE驱动Android API实现Android应用程序的安全端到端远程授权的Android库。SARA在设计上是实用的，因为它利用了现代Android设备中已经存在的Android API和TEE功能来实现一种新颖的安全授权协议。实际上，SARA不需要对Android操作系统或在TrustZone中运行的代码进行任何修改(TrustZone是支持现有Android设备的TEEs)。因此，它可以直接用于现有智能手机上运行的现有应用程序中。此外，SARA的设计旨在确保即使没有实现安全协议经验的开发人员也可以在其应用程序中使用它。同时，SARA是安全的，因为它允许实现抵御在被攻陷的Android设备上获得root权限的攻击者的授权协议。
> 
> 
> 
> 
> 
> 
> 
> 我们首先通过进行用户研究来评估SARA的可用性。然后，我们使用ProVerif对SARA的安全协议进行形式验证，证明SARA具有安全功能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/imran](https://www.usenix.org/conference/usenixsecurity22/presentation/imran)
- **PDF:** [https://www.usenix.org/system/files/sec22-imran.pdf](https://www.usenix.org/system/files/sec22-imran.pdf)
## FOAP: Fine-Grained Open-World Android App Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#foap-fine-grained-open-world-android-app-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#foap-fine-grained-open-world-android-app-fingerprinting)**
### 作者
* Jianfeng Li, The Hong Kong Polytechnic University
* Hao Zhou, The Hong Kong Polytechnic University
* Shuohan Wu, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
* Xian Zhan, The Hong Kong Polytechnic University
* Xiaobo Ma, Xi'an Jiaotong University
### 摘要
> 尽管加密通信在移动应用程序中得到了广泛采用，但通过应用程序指纹识别（AF）攻击，对手仍然可以从加密的移动流量中识别应用程序或推断出感兴趣的用户活动。然而，大多数现有的AF技术只适用于封闭世界的假设，因此在面对模型训练过程中未见过的应用时，可能导致精确度下降。此外，当用户进行某些涉及特定UI组件的敏感操作时，通常会发生严重的隐私泄漏。不幸的是，现有的AF技术对于获取细粒度的敏感信息来说过于粗粒度。在本文中，我们迈出了第一步，通过开放世界的设置来识别Android应用程序的方法级细粒度用户操作，并提出了一个系统解决方案，名为FOAP，以解决上述限制。首先，为了在开放世界的环境中有效降低误报风险，我们提出了一种新的度量标准，称为结构相似性，以自适应地过滤与感兴趣的应用程序无关的流量段。其次，FOAP通过合成流量和二进制分析实现了细粒度用户操作的识别。具体而言，FOAP通过推断与特定UI组件相关的入口点方法来识别用户在特定UI组件上的操作。广泛的评估和案例研究表明，FOAP不仅准确性合理，而且在细粒度用户活动推断和用户隐私分析方面具有实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-jianfeng](https://www.usenix.org/conference/usenixsecurity22/presentation/li-jianfeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-jianfeng.pdf](https://www.usenix.org/system/files/sec22-li-jianfeng.pdf)
## Identity Confusion in WebView-based Mobile App-in-app Ecosystems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#identity-confusion-in-webview-based-mobile-app-in-app-ecosystems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#identity-confusion-in-webview-based-mobile-app-in-app-ecosystems)**
### 作者
* Lei Zhang, Fudan University
* Zhibo Zhang, Fudan University
* Ancong Liu, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Xiaohan Zhang, Fudan University
* Yanjun Chen, Fudan University
* Yuan Zhang, Fudan University
* Guangliang Yang, Fudan University
* Min Yang, Fudan University
### 摘要
> 移动应用程序（应用）通常将自己的功能委托给其他方，使它们成为托管这些方的超级生态系统。因此，这些移动应用被称为超级应用，而被委托的方随后被称为子应用，表现为“应用内应用”。子应用不仅像正常应用一样加载（第三方）资源，还可以访问超级应用提供的特权API。这引出了一个重要的研究问题-确定谁可以访问这些特权API。
> 
> 
> 
> 
> 
> 
> 
> 根据我们的研究，现实世界中的超级应用采用了三种身份类型 - 即web域，子应用ID和能力 - 来确定特权API的访问权限。然而，这三种身份类型的现有身份验证常常设计不良，导致不符合最小权限原则。也就是说，特权API的授予接收者比预期范围更广，因此在本文中被定义为“身份混淆”。据我们所知，以前的研究没有研究过这种类型的身份混淆漏洞。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首次对现实世界中应用内应用生态系统中的身份混淆进行了系统研究。我们发现，前述三种身份类型的混淆在所研究的47个超级应用中普遍存在。更重要的是，这些混淆导致严重后果，如操纵用户的金融账户和在智能手机上安装恶意软件。我们负责负责地向受影响的超级应用的开发者报告了我们的所有发现，并帮助他们修复了漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-lei](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-lei)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-lei.pdf](https://www.usenix.org/system/files/sec22-zhang-lei.pdf)
## Automated Detection of Automated Traffic.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automated-detection-of-automated-traffic) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automated-detection-of-automated-traffic)**
### 作者
* Cormac Herley, Microsoft Research
### 摘要
> 我们描述了一种在具有分类特征且没有标签可用的情况下区分滥用和合法流量的方法。我们的方法依赖于这样一个观察结果：如果我们能够找到它们，分类特征x的未受攻击的区间将使我们能够估计任何与x独立的特征的良性分布。我们提供了一种算法来寻找这些未受攻击的区间（如果存在），并展示了如何构建适用于非常大的数据量和高滥用水平的总体分类器。该方法是单向的：我们对滥用的唯一重要假设是存在未受攻击的区间，并且滥用流量的分布与良性流量的分布不完全匹配。
> 
> 
> 
> 
> 
> 
> 
> 我们在两个数据集上进行评估：一个来自Web服务器数据集的300万个请求和一个使用公共API爬取的510万个Twitter账号的集合。结果证实该方法成功地识别出了自动行为的聚类。在这两个问题上，我们轻松胜过了孤立森林等无监督方法，并在Twitter数据集上具有与Botometer相当的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/herley](https://www.usenix.org/conference/usenixsecurity22/presentation/herley)
- **PDF:** [https://www.usenix.org/system/files/sec22-herley.pdf](https://www.usenix.org/system/files/sec22-herley.pdf)
## Inferring Phishing Intention via Webpage Appearance and Dynamics: A Deep Vision Based Approach.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#inferring-phishing-intention-via-webpage-appearance-and-dynamics-a-deep-vision-based-approach) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#inferring-phishing-intention-via-webpage-appearance-and-dynamics-a-deep-vision-based-approach)**
### 作者
* Ruofan Liu, National University of Singapore
* Yun Lin, National University of Singapore
* Xianglin Yang, National University of Singapore
* Siang Hwee Ng, National University of Singapore
* Dinil Mon Divakaran, Trustwave
* Jin Song Dong, National University of Singapore
### 摘要
> 可解释的钓鱼检测方法通常基于参考文献，即将可疑网页与常见目标品牌网页的参考清单进行比较。如果检测到某个网页与任何参考网站相似但其域名不一致，则会发出钓鱼警报，并附上一个解释，说明它的目标品牌。与其他技术相比，这种可解释的基于参考的解决方案对不断变化的钓鱼网页更加稳健。然而，网页相似性仍然通过传达部分意图的表示来衡量（如屏幕截图和标志），这样会导致相当多的误报，并给对手提供机会来损害用户对这些方法的信心。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一种名为PhishIntention的方法，通过视觉方式（i）提取网页的品牌意图和获取凭证的意图，并且（ii）与网页进行交互以确认获取凭证的意图，从而提取网页的准确钓鱼意图。我们将PhishIntention设计为一个深度学习视觉模型的异构系统，克服了各种技术挑战。这些模型通过“观察”和“与网页交互”来获取网页的意图，对潜在的HTML混淆具有鲁棒性。我们将PhishIntention与四种最先进的基于参考的方法在包含50K条钓鱼和良性网页的最大钓鱼识别数据集上进行比较。在相似的召回率水平上，PhishIntention的精确度显著高于基线。此外，我们在互联网上进行了为期两个月的连续实地研究，以发现新兴的钓鱼网页。PhishIntention检测到1,942个新的钓鱼网页（其中1,368个未被VirusTotal报告）。与最佳基线相比，PhishIntention产生了86.5%更少的误报（139个虚警对1033个虚报阳性），同时检测到相似数量的真实钓鱼网页。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-ruofan](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-ruofan)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-ruofan.pdf](https://www.usenix.org/system/files/sec22-liu-ruofan.pdf)
## Phish in Sheep's Clothing: Exploring the Authentication Pitfalls of Browser Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#phish-in-sheeps-clothing-exploring-the-authentication-pitfalls-of-browser-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#phish-in-sheeps-clothing-exploring-the-authentication-pitfalls-of-browser-fingerprinting)**
### 作者
* Xu Lin, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Saumya Solanki, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 随着用户在网络上的浏览，他们面临着众多的威胁；其中，导致账户被破坏的攻击尤其具有破坏性。在面临数据泄露和复杂的钓鱼攻击的世界中，网络服务致力于加强用户账户的安全性，采用新的机制来识别和阻止可疑的登录尝试。近年来，浏览器指纹技术已经被纳入主要服务的身份验证流程中，作为触发额外安全机制（例如，双因素身份验证）的决策过程的一部分。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首次全面深入地探讨了依赖浏览器指纹进行身份验证的现实系统的安全隐患。在我们的调查指导下，我们开发了一个工具，用于自动构建指纹向量，复制目标网站的过程，从用户设备中提取与目标网站生成的指纹完全匹配的指纹。随后，我们展示了钓鱼攻击者如何在不同设备上复制用户的指纹，以欺骗高价值网络服务（例如，加密货币交易）的基于风险的身份验证系统，完全绕过双因素身份验证。为了更好地了解攻击者是否能够执行此类攻击，我们研究了钓鱼网站中浏览器指纹实践的演变。虽然攻击者通常不收集所有必要的指纹属性，但不幸的是，对于攻击某些金融机构的攻击者来说情况并非如此，我们观察到越来越多的钓鱼网站能够执行我们的攻击。为了应对我们的攻击所带来的重大威胁，我们已将我们的发现告知了易受攻击的供应商。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/lin-xu](https://www.usenix.org/conference/usenixsecurity22/presentation/lin-xu)
- **PDF:** [https://www.usenix.org/system/files/sec22-lin-xu.pdf](https://www.usenix.org/system/files/sec22-lin-xu.pdf)
## DeepPhish: Understanding User Trust Towards Artificially Generated Profiles in Online Social Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#deepphish-understanding-user-trust-towards-artificially-generated-profiles-in-online-social-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#deepphish-understanding-user-trust-towards-artificially-generated-profiles-in-online-social-networks)**
### 作者
* Jaron Mink, University of Illinois at Urbana-Champaign
* Licheng Luo, University of Illinois at Urbana-Champaign
* Natã M. Barbosa, University of Illinois at Urbana-Champaign
* Olivia Figueira, Santa Clara University
* Yang Wang, University of Illinois at Urbana-Champaign
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 深度学习模型生成的伪造媒体，即深度伪造，近来被应用于构建可信任的社交个人形象，以促进社交工程行为。尽管现有的研究主要集中在深度伪造检测上，但对于用户如何感知和与深度伪造个人形象（例如个人资料）在社交工程环境下进行互动的理解还很有限。本文通过一项用户研究（n = 286）定量评估深度伪造产生的人工痕迹如何影响社交媒体个人资料的可信度以及与用户建立联系的可能性。我们的研究调查了在单个媒体领域（图像或文本）中孤立存在的人工痕迹，以及多个领域之间存在的不匹配关系。我们还评估了用户是否受到提示（或培训）在这个过程中的益处。我们发现，人工痕迹和提示显著降低了深度伪造个人资料的可信度和请求接受率。即使如此，在最佳情况下，仍有43%的用户连接到深度伪造个人资料，显示用户仍然容易受到影响。通过定性数据，我们发现了许多用户感觉困难的原因，例如区分文本痕迹和诚实错误的困难，以及连接决策所承受的社交压力。最后，我们讨论了我们的研究结果对内容审核员、社交媒体平台和未来防御的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mink](https://www.usenix.org/conference/usenixsecurity22/presentation/mink)
- **PDF:** [https://www.usenix.org/system/files/sec22-mink.pdf](https://www.usenix.org/system/files/sec22-mink.pdf)
## Hand Me Your PIN! Inferring ATM PINs of Users Typing with a Covered Hand.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hand-me-your-pin-inferring-atm-pins-of-users-typing-with-a-covered-hand) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hand-me-your-pin-inferring-atm-pins-of-users-typing-with-a-covered-hand)**
### 作者
* Matteo Cardaioli, University of Padua
* Stefano Cecconello, University of Padua
* Mauro Conti, University of Padua
* Simone Milani, University of Padua
* Stjepan Picek, Delft University of Technology
* Eugen Saraci, University of Padua
### 摘要
> 自动取款机（ATM）代表了提取现金的最常用系统。欧洲央行报告称，2019年欧洲ATM上进行了超过110亿次取款和装卸现金的交易。尽管ATM经历了各种技术进化，但个人识别号码（PIN）仍然是这些设备最常见的认证方法。不幸的是，PIN机制容易受到偷窥攻击，攻击者通过在ATM附近安装隐藏摄像机来捕捉PIN键盘。为了解决这个问题，人们习惯用另一只手遮住输入手的行为。虽然这些用户可能相信这种行为足够安全，可以防止上述攻击，但在科学文献中并没有明确评估这种对策的证据。
> 
> 
> 
> 
> 
> 
> 
> 本文提出了一种新的攻击方法，可以重建使用另一只手遮挡输入手的受害者输入的PIN码。我们考虑攻击者可以访问与目标ATM相同品牌/型号的ATM PIN键盘的情景。然后，攻击者使用该型号推断受害者在输入PIN码时按下的数字。我们的攻击之所以成功，归功于一个精心选择的深度学习结构，可以从输入手的位置和移动中推断出PIN码。我们进行了详细的实验分析，包括58个用户。通过我们的方法，我们可以在三次尝试内猜中30%的5位数PIN码 - 这是ATM在封锁卡片之前通常允许的次数。我们还进行了一项调查，包括78个用户，发现在相同情况下，平均准确率仅为7.92%。最后，我们评估了一种屏蔽对策，证明除非整个键盘都被屏蔽，否则效果相当低效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cardaioli](https://www.usenix.org/conference/usenixsecurity22/presentation/cardaioli)
- **PDF:** [https://www.usenix.org/system/files/sec22-cardaioli.pdf](https://www.usenix.org/system/files/sec22-cardaioli.pdf)
## Estimating Incidental Collection in Foreign Intelligence Surveillance: Large-Scale Multiparty Private Set Intersection with Union and Sum.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#estimating-incidental-collection-in-foreign-intelligence-surveillance-large-scale-multiparty-private-set-intersection-with-union-and-sum) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#estimating-incidental-collection-in-foreign-intelligence-surveillance-large-scale-multiparty-private-set-intersection-with-union-and-sum)**
### 作者
* Anunay Kulshrestha, Princeton University
* Jonathan Mayer, Princeton University
### 摘要
> 《外国情报监视法》第702条授权美国情报机构在不需要获得搜查令的情况下截取通信内容。尽管第702条要求针对国外的外国人进行情报目的的监视，但机构“偶然地”收集了与美国人之间或往来的通信，并可以出于情报收集以外的目的搜索这些数据。十多年来，国会成员和民间社会组织一直要求美国情报界估算偶然收集的规模。高级情报官员已经承认定量透明度对于偶然收集具有价值，但情报界尚未确定一种令人满意的估算方法，既尊重个人隐私，保护情报来源和方法，又对情报界资源施加最小负担。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一种利用安全多方计算（MPC）估计偶然收集的新方法。情报界拥有有关被拦截通信各方的记录，而通信服务商则掌握用户的国家级位置信息。通过将这些数据集与MPC相结合，可以生成一种自动的偶然收集聚合估计，以保护被拦截的通信和用户位置的机密性。
> 
> 
> 
> 
> 
> 
> 
> 我们将我们的提案形式化为一个新的私有集合交集的变种，我们称之为多方私有集合交集与联合和求和（MPSIU-Sum）。然后，我们设计和评估了一种高效的基于椭圆曲线密码学和部分同态加密的MPSIU-Sum协议。我们的协议在用于估计第702条监视中的偶然收集所需的大规模情况下表现良好。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kulshrestha](https://www.usenix.org/conference/usenixsecurity22/presentation/kulshrestha)
- **PDF:** [https://www.usenix.org/system/files/sec22-kulshrestha.pdf](https://www.usenix.org/system/files/sec22-kulshrestha.pdf)
## Constant-weight PIR: Single-round Keyword PIR via Constant-weight Equality Operators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#constant-weight-pir-single-round-keyword-pir-via-constant-weight-equality-operators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#constant-weight-pir-single-round-keyword-pir-via-constant-weight-equality-operators)**
### 作者
* Rasoul Akhavan Mahdavi, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### 摘要
> 等式操作符是安全计算任务中的一个基本构建模块，例如私人信息检索。在私人信息检索（PIR）中，用户查询数据库，使得服务器无法知道查询的元素是哪一个。在这项研究中，我们提出了常权码字的等式操作符。常权码是一组共享相同海明权重的码字集合。常权等式操作符的乘积深度仅取决于码字的海明权重，而不取决于元素的位长度。在我们的实验中，我们展示了这些等式操作符比现有的等式操作符快10倍。此外，我们提出了使用常权等式操作符或常权PIR的PIR方法，这是一种先前被认为不切实际的PIR协议方法。我们展示了对于大型流数据的私人检索，常权PIR的通信复杂性和运行时间分别比SEALPIR和MulPIR更小，这两者是PIR的两种最先进的解决方案。此外，我们展示了如何将常权PIR扩展到关键词PIR。在关键词PIR中，所需元素是通过与所寻项目相关的唯一标识符检索的，例如文件名。以前的关键词PIR解决方案需要一轮或多轮通信来将问题简化为普通PIR。我们展示了常权PIR是第一个实际的单轮解决方案，适用于单服务器关键词PIR。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mahdavi](https://www.usenix.org/conference/usenixsecurity22/presentation/mahdavi)
- **PDF:** [https://www.usenix.org/system/files/sec22-mahdavi.pdf](https://www.usenix.org/system/files/sec22-mahdavi.pdf)
## Incremental Offline/Online PIR.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#incremental-offline-online-pir) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#incremental-offline-online-pir)**
### 作者
* Yiping Ma, University of Pennsylvania
* Ke Zhong, University of Pennsylvania
* Tal Rabin, University of Pennsylvania and Algorand Foundation
* Sebastian Angel, University of Pennsylvania and Microsoft Research
### 摘要
> 最近的私人信息检索（PIR）方案通过查询独立的离线阶段对数据库进行预处理，以实现在查询特定的在线阶段中的亚线性计算。这些离线/在线协议扩展了可以有利用PIR的应用范围，但它们做出了一个关键的假设：数据库是不可变的。在存在添加、删除或更新等更改的情况下，现有方案必须从头开始对数据库进行预处理，浪费了之前的努力。为了解决这个问题，本文介绍了离线/在线PIR方案的增量预处理方法，允许在数据库更改后继续使用原始预处理，同时支付与更改数量成比例而不是与数据库大小线性相关的更新成本。我们将两种离线/在线PIR方案改为使用增量预处理，并展示了我们的方法在数据库随时间变化的应用中显著提高了吞吐量并降低了延迟。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ma](https://www.usenix.org/conference/usenixsecurity22/presentation/ma)
- **PDF:** [https://www.usenix.org/system/files/sec22-ma.pdf](https://www.usenix.org/system/files/sec22-ma.pdf)
## GPU-accelerated PIR with Client-Independent Preprocessing for Large-Scale Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#gpu-accelerated-pir-with-client-independent-preprocessing-for-large-scale-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#gpu-accelerated-pir-with-client-independent-preprocessing-for-large-scale-applications)**
### 作者
* Daniel Günther, Technical University of Darmstadt
* Maurice Heymann, Technical University of Darmstadt
* Benny Pinkas, Bar-Ilan University
* Thomas Schneider, Technical University of Darmstadt
### 摘要
> 多服务器私密信息检索（PIR）是一种加密协议，允许客户从n≥2个服务器中安全查询一个数据库条目，其中少于t个服务器可以串通，以便服务器不会获取到有关查询的任何信息。高效的PIR可以用于大规模应用，如遭泄露的凭据检查（C3）（USENIX Security Symposium'19），它允许用户检查他们的凭据是否在数据泄露中被泄漏。然而，目前最先进的PIR方案在这种规模下无法实现快速在线响应。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们引入了客户端独立预处理（CIP）PIR，将（t-1）/n的在线计算移动到一个本地的、与客户端无关的预处理阶段，适用于高效的批量预计算。CIP-PIR的在线性能随着服务器数量n的增加而线性改善。我们通过使用并行化的CPU实现来证明了使用PIR的C3等大规模应用的实际可行性。据我们所知，这是第一个预处理阶段完全独立于客户端的多服务器PIR方案，并且在线性能同时随着服务器数量n的增加而提高。此外，我们首次使用GPU加速了多服务器PIR中大量的异或操作。我们基于GPU的CIP-PIR在n=2服务器上实现了2.1倍的改进，使客户能够在不到1秒的时间内查询一个25 GB的数据库条目。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gunther](https://www.usenix.org/conference/usenixsecurity22/presentation/gunther)
- **PDF:** [https://www.usenix.org/system/files/sec22-gunther.pdf](https://www.usenix.org/system/files/sec22-gunther.pdf)
## Increasing Adversarial Uncertainty to Scale Private Similarity Testing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#increasing-adversarial-uncertainty-to-scale-private-similarity-testing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#increasing-adversarial-uncertainty-to-scale-private-similarity-testing)**
### 作者
* Yiqing Hua, Cornell Tech and Cornell University
* Armin Namavari, Cornell Tech and Cornell University
* Kaishuo Cheng, Cornell University
* Mor Naaman, Cornell Tech and Cornell University
* Thomas Ristenpart, Cornell Tech and Cornell University
### 摘要
> 社交媒体和其他平台依赖于自动检测滥用内容来帮助打击虚假信息、骚扰和滥用行为。一种常见的方法是检查用户内容与服务器端的问题项数据库之间的相似性。然而，这种方法从根本上危及用户的隐私。相反，我们采用客户端检测的方式，仅在匹配发生时通知用户，以警告他们避免滥用内容。
> 
> 
> 
> 
> 
> 
> 
> 我们的解决方案基于保护隐私的相似性测试。现有方法依赖于昂贵的加密协议，无法很好地适应大型数据库，并可能牺牲匹配的正确性。为了应对这一挑战，我们提出并形式化了基于相似性分桶（SBB）的概念。通过SBB，客户端向持有数据库的服务器透露少量信息，以便生成一个可能相似的项桶。该桶足够小，可以有效地应用于保护隐私的相似性协议。为了分析透露信息的隐私风险，我们引入了一个框架，用于衡量敌方正确推断客户端输入谓词的置信度。我们针对图像内容开发了一个实用的SBB协议，并使用实际的社交媒体数据评估了其客户隐私保证。然后，我们将SBB与各种相似性协议相结合，表明与不使用SBB相比，在大规模数据库上的速度提升至少为29倍，同时保持95%以上的正确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hua](https://www.usenix.org/conference/usenixsecurity22/presentation/hua)
- **PDF:** [https://www.usenix.org/system/files/sec22-hua.pdf](https://www.usenix.org/system/files/sec22-hua.pdf)
## Pre-hijacked accounts: An Empirical Study of Security Failures in User Account Creation on the Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pre-hijacked-accounts-an-empirical-study-of-security-failures-in-user-account-creation-on-the-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pre-hijacked-accounts-an-empirical-study-of-security-failures-in-user-account-creation-on-the-web)**
### 作者
* Avinash Sudhodanan, Independent Researcher
* ; Andrew Paverd, Microsoft Security Response Center
### 摘要
> 在网站和在线服务中用户账号的普及性使得账号劫持成为一个严重的安全问题。尽管以前的研究已经研究了攻击者可以通过各种技术获得受害者账号的方式，但对于账号创建过程的研究相对较少。当前趋势是朝着联合认证（例如单点登录）发展，这增加了一个复杂的层级，因为现在许多服务既支持用户直接设置密码的传统方法，也支持用户通过身份提供者进行身份验证的联合方法。
> 
> 
> 
> 
> 
> 
> 
> 受到以前关于预防性账号劫持的研究的启发[Ghasemisharif et al.，USENIX SEC 2018]，我们展示了一整类账号预劫持攻击的存在。这些攻击的特点是攻击者在受害者创建账号之前执行某些操作，从而在受害者创建/恢复账号后，攻击者轻而易举地获得访问权限。假设一个现实中的攻击者只知道受害者的电子邮件地址，我们确定并讨论了五种不同类型的账号预劫持攻击。
> 
> 
> 
> 
> 
> 
> 
> 为了确定此类漏洞在现实中的普遍性，我们分析了75个热门服务，发现其中至少有35个服务对一种或多种账号预劫持攻击是容易受攻击的。尽管其中一些攻击可能会被留意到，但从受害者的角度来看，另一些攻击是完全无法察觉的。最后，我们调查了这些漏洞的根本原因，并提出了一组安全要求，以防止未来出现此类漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sudhodanan](https://www.usenix.org/conference/usenixsecurity22/presentation/sudhodanan)
- **PDF:** [https://www.usenix.org/system/files/sec22-sudhodanan.pdf](https://www.usenix.org/system/files/sec22-sudhodanan.pdf)
## Leaky Forms: A Study of Email and Password Exfiltration Before Form Submission.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#leaky-forms-a-study-of-email-and-password-exfiltration-before-form-submission) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#leaky-forms-a-study-of-email-and-password-exfiltration-before-form-submission)**
### 作者
* Asuman Senol, imec-COSIC, KU Leuven
* Gunes Acar, Radboud University
* Mathias Humbert, University of Lausanne
* Frederik Zuiderveen Borgesius, Radboud University
### 摘要
> 网络用户在在线表单中输入他们的电子邮件地址有很多原因，包括登录或注册服务，或订阅时事通讯。当用户改变主意并在不提交表单的情况下离开网站时，第三方脚本也可以收集到输入到表单中的电子邮件地址。这些电子邮件地址或者从中派生出的标识符被称为数据经纪人和广告商用于对潜在不知情个体进行跨站点、跨平台和持久的识别。为了了解在线追踪器是否滥用对在线表单的访问权限，我们对前一百万个网站进行了一项关于电子邮件和密码收集的度量。通过比较来自欧盟和美国两个角度、桌面和移动两种浏览器配置以及三种同意模式的结果，我们评估了用户位置、浏览器配置和与同意对话框之间的交互的影响。我们的爬虫发现并填充电子邮件和密码字段，监控网络流量以查看泄漏情况，并拦截对填充的输入字段的脚本访问。我们的分析结果显示，在欧盟的抓取中有1,844个网站，在美国的抓取中有2,950个网站，在表单提交之前未经同意将用户的电子邮件地址外泄到追踪、营销和分析域中。虽然大多数电子邮件地址被发送到已知的追踪域，但我们还发现了41个追踪器域，这些域名没有出现在任何热门的屏蔽列表中。此外，我们还发现了52个网站上由第三方会话重放脚本意外收集的密码。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/senol](https://www.usenix.org/conference/usenixsecurity22/presentation/senol)
- **PDF:** [https://www.usenix.org/system/files/sec22-senol.pdf](https://www.usenix.org/system/files/sec22-senol.pdf)
## Might I Get Pwned: A Second Generation Compromised Credential Checking Service.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#might-i-get-pwned-a-second-generation-compromised-credential-checking-service) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#might-i-get-pwned-a-second-generation-compromised-credential-checking-service)**
### 作者
* Bijeeta Pal, Cornell University
* Mazharul Islam, University of Wisconsin–Madison
* Marina Sanusi Bohuk, Cornell University
* Nick Sullivan, Cloudflare
* Luke Valenta, Cloudflare
* Tara Whalen, Cloudflare
* Christopher Wood, Cloudflare
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### 摘要
> 凭证填充攻击使用窃取的密码来登录受害者账户。为了防止这些攻击，最近部署的被攻陷凭证检查（C3）服务提供了API，帮助用户和公司检查用户名和密码是否泄露。然而，这些服务只检查精确密码是否泄露，因此无法应对凭证调整攻击，即试图通过用户泄露密码的变体来攻击用户账户。最近的研究工作表明，即使有凭证填充对策，凭证调整攻击仍然能够相当有效地攻击账户。
> 
> 
> 
> 
> 
> 
> 
> 我们开始研究保护用户免受凭证调整攻击的C3服务。核心挑战是如何在保护诚实客户隐私的同时，防止恶意客户从服务中提取泄露数据。我们对问题进行了形式化处理，并探索了一些衡量密码相似性的方法，以在效能、性能和安全性之间取得平衡。在此研究的基础上，我们设计了一种新型的泄露警报服务，“我会被入侵吗”（MIGP）。我们的模拟结果显示，MIGP能够将最先进的1000次猜测的凭证调整攻击的效能降低94%。MIGP保护用户隐私，限制敏感泄露条目的潜在曝光。我们展示了该协议的快速性，响应时间接近现有的C3服务。我们与Cloudflare合作在实践中部署了MIGP。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pal](https://www.usenix.org/conference/usenixsecurity22/presentation/pal)
- **PDF:** [https://www.usenix.org/system/files/sec22-pal.pdf](https://www.usenix.org/system/files/sec22-pal.pdf)
## Why Users (Don't) Use Password Managers at a Large Educational Institution.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#why-users-dont-use-password-managers-at-a-large-educational-institution) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#why-users-dont-use-password-managers-at-a-large-educational-institution)**
### 作者
* Peter Mayer, Karlsruhe Institute of Technology
* Collins W. Munyendo, The George Washington University
* Michelle L. Mazurek, University of Maryland, College Park
* Adam J. Aviv, The George Washington University
### 摘要
> 我们在美国一所大型私立大学定量调查了密码管理器（PM）的使用状况和普遍密码习惯。在SOUPS 2019的定性调查结果基础上，我们对277名教职员工和学生进行了调查，发现77%的参与者已经在使用密码管理器，但与基于浏览器的密码管理器相比，第三方密码管理器的用户在不同账户之间重复使用密码的可能性显著降低。促使使用密码管理器的最大因素是易用性，这表明沟通和机构活动应更加注重可用性因素。此外，我们的研究结果表明，基于浏览器的密码管理器需要进行设计改进，以鼓励更少的密码重复使用，因为这种管理器得到了更广泛的应用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mayer](https://www.usenix.org/conference/usenixsecurity22/presentation/mayer)
- **PDF:** [https://www.usenix.org/system/files/sec22-mayer.pdf](https://www.usenix.org/system/files/sec22-mayer.pdf)
## Gossamer: Securely Measuring Password-based Logins.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#gossamer-securely-measuring-password-based-logins) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#gossamer-securely-measuring-password-based-logins)**
### 作者
* Marina Sanusi Bohuk, Cornell University
* Mazharul Islam, University of Wisconsin–Madison
* Suleman Ahmad, Cloudflare
* Michael Swift, University of Wisconsin–Madison
* Thomas Ristenpart, Cornell Tech
* Rahul Chatterjee, University of Wisconsin–Madison
### 摘要
> 密码仍然是在线验证用户的主要方式。然而，由于监控提交的密码具有敏感性，对于登录系统的登录请求特征知之甚少。这意味着我们没有答案来回答一些基本问题，比如用户多久提交一个与其实际密码相似的密码，用户是否经常重新提交相同的错误密码，有多少用户使用已知公开违规的密码等等。是否我们能够建立和部署安全地回答这些问题的测量基础设施本身就是一个悬而未决的问题。
> 
> 
> 
> 
> 
> 
> 
> 我们提供了一个名为Gossamer的系统，它能够安全地记录有关登录尝试的信息，包括精心选择的有关提交密码的统计数据。我们提供了一种基于模拟的方法来调整存储不同密码相关统计数据的安全性与实用性之间的权衡。这使得我们能够在测量系统完全被攻击的情况下，减少风险同时收集有用的测量数据。我们与两所大型大学密切合作，并部署了Gossamer来执行一项测量研究，观察了700万个登录请求，时间跨度为七个月。我们收集的测量数据提供了关于使用违规凭据、密码可用性和其他提交的登录请求特征的见解。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sanusi-bohuk](https://www.usenix.org/conference/usenixsecurity22/presentation/sanusi-bohuk)
- **PDF:** [https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf](https://www.usenix.org/system/files/sec22-sanusi-bohuk.pdf)
## DoubleStar: Long-Range Attack Towards Depth Estimation based Obstacle Avoidance in Autonomous Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#doublestar-long-range-attack-towards-depth-estimation-based-obstacle-avoidance-in-autonomous-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#doublestar-long-range-attack-towards-depth-estimation-based-obstacle-avoidance-in-autonomous-systems)**
### 作者
* Ce Zhou, Michigan State University
* Qiben Yan, Michigan State University
* Yan Shi, Michigan State University
* Lichao Sun, Lehigh University
### 摘要
> 深度估计为基础的障碍物避免技术被自动系统（无人机和车辆）广泛采用以确保安全。通常通过立体相机自动检测障碍物并做出飞行/驾驶决策，例如在路径上的障碍物前方停止几米或远离检测到的障碍物。本文探讨了立体视觉深度估算算法用于障碍物避免时存在的新的安全风险。通过利用深度估计算法中立体匹配的弱点和光学成像中的镜头光晕效应，我们提出了DoubleStar，一种投射双重光源纯光以注入虚假障碍物深度的远程攻击。
> 
> 
> 
> 
> 
> 
> 
> DoubleStar包括两种不同的攻击形式：光束攻击和光晕攻击，分别利用投射的光束和镜头光晕球体来制造虚假深度感知。我们成功攻击了两种用于自动系统的商用立体相机（ZED和Intel RealSense）。立体相机感知到的虚假深度的可视化展示了DoubleStar引发的虚假立体匹配。我们进一步使用Ardupilot模拟了攻击，并展示了对无人机的影响。为了验证对真实系统的攻击，我们对装备有最先进的障碍物避免算法的商用无人机进行了现实世界攻击。我们的攻击可以在各种光照条件下不断使飞行的无人机突然停下或在长距离上漂移，甚至绕过传感器融合机制。具体实验结果显示，DoubleStar可以在夜间制造高达15米、白天制造高达8米的虚假深度。为了应对这一新发现的威胁，我们对抗DoubleStar提供了潜在的反制措施讨论。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-ce](https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-ce)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhou-ce.pdf](https://www.usenix.org/system/files/sec22-zhou-ce.pdf)
## Security Analysis of Camera-LiDAR Fusion Against Black-Box Attacks on Autonomous Vehicles.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-analysis-of-camera-lidar-fusion-against-black-box-attacks-on-autonomous-vehicles) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-analysis-of-camera-lidar-fusion-against-black-box-attacks-on-autonomous-vehicles)**
### 作者
* R. Spencer Hallyburton, Duke University
* Yupei Liu, Duke University
* Yulong Cao, University of Michigan
* Z. Morley Mao, University of Michigan
* Miroslav Pajic, Duke University
### 摘要
> 为了实现安全可靠的决策，自动驾驶车辆（AVs）将传感器数据提供给感知算法以了解环境。多帧追踪与传感器融合在检测3D物体方面越来越受欢迎。因此，本研究在AV环境中对相机-LiDAR融合进行了分析，同时考虑了LiDAR欺骗攻击。最近发现，仅使用LiDAR的感知容易受到LiDAR欺骗攻击的影响；但我们证明这些攻击无法破坏相机-LiDAR融合。然后，我们定义了一种新颖的上下文感知攻击：截锥攻击，并显示在8种广泛使用的感知算法中，跨3种仅使用LiDAR和3种相机-LiDAR融合架构，全部对截锥攻击存在严重漏洞。此外，我们证明截锥攻击对现有的对抗LiDAR欺骗的防御具有隐秘性，因为它保持了相机和LiDAR语义之间的一致性。最后，我们展示了截锥攻击可以稳定地随时间实施，形成隐蔽的纵向攻击序列，破坏跟踪模块并对端到端AV控制产生不良影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hallyburton](https://www.usenix.org/conference/usenixsecurity22/presentation/hallyburton)
- **PDF:** [https://www.usenix.org/system/files/sec22-hallyburton.pdf](https://www.usenix.org/system/files/sec22-hallyburton.pdf)
## SAID: State-aware Defense Against Injection Attacks on In-vehicle Network.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#said-state-aware-defense-against-injection-attacks-on-in-vehicle-network) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#said-state-aware-defense-against-injection-attacks-on-in-vehicle-network)**
### 作者
* Lei Xue, The Hong Kong Polytechnic University Shenzhen Research Institute
* Yangyang Liu, The Hong Kong Polytechnic University
* Tianqi Li, The Hong Kong Polytechnic University
* Kaifa Zhao, The Hong Kong Polytechnic University
* Jianfeng Li, The Hong Kong Polytechnic University
* Le Yu, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Guofei Gu, Texas A&M University
### 摘要
> 现代车辆配备了许多连接到车内网络（IVN）的电子控制单元（ECU）用于控制车辆。同时，车辆的各种接口（如OBD-II端口、T-Box、传感器和远程车辆通信）实现了IVN与外部环境的交互。虽然通过这些接口可以提供丰富的增值功能，如诊断和OTA（空中升级），但对手也可能向IVN注入恶意数据，从而造成严重的安全问题。更糟糕的是，现有的防御方法主要关注于检测从IVN发起的注入攻击，如恶意/被入侵的ECU，通过分析CAN帧，不能防御可能导致异常车辆动力学的更高层次的消息注入攻击（MIAs）。在本文中，我们提出了一种新的状态感知的异常消息注入攻击防御方法，命名为SAID。它通过考虑数据语义和车辆动力学来检测要注入到IVN的异常数据，并防止来自连接到车辆的设备（如被入侵的诊断工具和T-Box）发起的MIAs。我们开发了SAID的原型来防御MIAs，并使用真实道路数据和模拟数据进行评估。实验结果表明，SAID可以有效防御超过99%的网络和服务层攻击流量以及所有状态层MIAs，从而有效提高车辆的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xue-lei](https://www.usenix.org/conference/usenixsecurity22/presentation/xue-lei)
- **PDF:** [https://www.usenix.org/system/files/sec22-xue-lei.pdf](https://www.usenix.org/system/files/sec22-xue-lei.pdf)
## Towards Automatically Reverse Engineering Vehicle Diagnostic Protocols.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#towards-automatically-reverse-engineering-vehicle-diagnostic-protocols) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#towards-automatically-reverse-engineering-vehicle-diagnostic-protocols)**
### 作者
* Le Yu, The Hong Kong Polytechnic University
* Yangyang Liu, The Hong Kong Polytechnic University
* Pengfei Jing, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Lei Xue, The Hong Kong Polytechnic University
* Kaifa Zhao, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Ting Wang, The Pennsylvania State University
* Guofei Gu, Texas A&M University
* Sen Nie, Tencent Keen Security Lab
* Shi Wu, Tencent Keen Security Lab
### 摘要
> 在车辆安全评估和保护中，车载协议非常重要，因为它们用于与控制各种车辆组件的ECU（电子控制单元）进行通信、访问甚至操作。不幸的是，大多数车载协议都是专有的，没有公开可用的文档。尽管最近的研究提出了在ECU之间的通信中反向工程CAN协议的方法，但它们无法应用于诊断协议，而攻击者已广泛利用诊断协议发起远程攻击。在本文中，我们提出了一种利用专业车辆诊断工具自动反向工程诊断协议的新框架。具体而言，我们设计和开发了一个新的机电系统，通过一组算法控制可编程机械臂，并借助摄像头自动触发和捕获诊断协议的消息，以及反向工程其格式、语义含义和用于处理响应消息的专有公式。我们进行了一项大规模实验，使用18辆真实的车辆评估了我们的原型。它成功地反向工程了570条消息（446条用于读取传感器值，124条用于控制组件）。实验结果表明，我们的框架在反向工程专有公式方面具有高精度，并获得了比基于应用程序分析的先前方法更多的消息。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-le](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-le)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-le.pdf](https://www.usenix.org/system/files/sec22-yu-le.pdf)
## Rolling Colors: Adversarial Laser Exploits against Traffic Light Recognition.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rolling-colors-adversarial-laser-exploits-against-traffic-light-recognition) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rolling-colors-adversarial-laser-exploits-against-traffic-light-recognition)**
### 作者
* Chen Yan, Zhejiang University
* Zhijian Xu, Zhejiang University and The Chinese University of Hong Kong
* Zhanyuan Yin, The University of Chicago
* Xiaoyu Ji, Zhejiang University
* Wenyuan Xu, Zhejiang University
### 摘要
> 交通信号灯识别对于在城市区域进行完全自动驾驶至关重要。本文研究了通过在摄像机上投射激光干扰来愚弄交通信号灯识别机制的可行性。通过利用CMOS传感器的滚动快门，我们成功地在图像中叠加了一条颜色条纹，这可以导致将红灯识别为绿灯，或将绿灯识别为红灯。为了提高成功率，我们设计了一种基于激光干扰经验模型的优化方法，以搜索有效的激光参数。我们在仿真和真实环境下对2种最先进的识别系统和5个摄像头进行评估，结果显示红绿灯攻击的最大成功率分别为30%和86.25%。我们观察到，在距离40米以上的连续帧中，对移动车辆进行此类攻击是有效的，这可能对自动驾驶产生端到端的影响，如闯红灯或紧急停车。为了减轻这种威胁，我们提出重新设计滚动快门机制的方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yan](https://www.usenix.org/conference/usenixsecurity22/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/sec22-yan.pdf](https://www.usenix.org/system/files/sec22-yan.pdf)
## Provably-Safe Multilingual Software Sandboxing using WebAssembly.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#provably-safe-multilingual-software-sandboxing-using-webassembly) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#provably-safe-multilingual-software-sandboxing-using-webassembly)**
### 作者
* Jay Bosamiya, Carnegie Mellon University
* Wen Shih Lim, Carnegie Mellon University
* Bryan Parno, Carnegie Mellon University
### 摘要
> 从Web到智能合约，许多应用程序需要安全执行不可信代码。我们观察到WebAssembly（Wasm）在支持这些应用程序方面处于理想位置，因为它承诺安全性和性能，同时作为许多高级语言的编译器目标。然而，Wasm的安全性保证只有实施它们的实现一样强大。因此，我们探索了两种不同的方法来生产可证明的沙箱化Wasm代码。其中一种利用传统形式化方法产生数学上的、经过机器检查的安全性证明。第二种方法是将Wasm语义精心嵌入安全的Rust代码中，以便Rust编译器可以生成具有良好性能的安全可执行代码。我们对这两种技术的实施和评估表明，利用Wasm使我们能够得到具有可证明安全性的多语言沙箱化，性能与标准的不安全方法相当。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bosamiya](https://www.usenix.org/conference/usenixsecurity22/presentation/bosamiya)
- **PDF:** [https://www.usenix.org/system/files/sec22-bosamiya.pdf](https://www.usenix.org/system/files/sec22-bosamiya.pdf)
## Backporting Security Patches of Web Applications: A Prototype Design and Implementation on Injection Vulnerability Patches.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#backporting-security-patches-of-web-applications-a-prototype-design-and-implementation-on-injection-vulnerability-patches) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#backporting-security-patches-of-web-applications-a-prototype-design-and-implementation-on-injection-vulnerability-patches)**
### 作者
* Youkun Shi, Fudan University
* Yuan Zhang, Fudan University
* Tianhan Luo, Fudan University
* Xiangyu Mao, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Ziwen Wang, Fudan University
* Yudi Zhao, Fudan University
* Zongan Huang, Fudan University
* Min Yang, Fudan University
### 摘要
> 网络漏洞，尤其是与注入相关的漏洞，在网站应用框架中非常普遍（如Word-Press和Piwigo），可能导致严重后果，如用户信息泄露和服务器端恶意软件执行。在真实世界的网站上修复网络漏洞的主要做法是应用来自官方开发者的安全补丁。然而，这样的做法具有挑战性，因为安全补丁是针对最新版本的网站框架开发的，但由于历史原因，真实世界的网站通常运行旧版本。在旧版本上直接应用安全补丁通常失败，因为网站框架，特别是在易受攻击位置周围的代码，可能会在不同版本之间发生变化。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们设计了一个安全补丁回溯框架，并在注入漏洞补丁方面实现了一个原型，称为SKYPORT。SKYPORT首先在理论上识别可安全回溯的注入漏洞补丁和网站框架版本，然后将补丁回溯到相应的旧版本。在评估中，SKYPORT识别出155个针对旧版本注入漏洞的安全补丁中的98个，可以回溯到750个旧版本的网站应用框架。然后，SKYPORT成功地将所有可回溯的补丁回溯到相应的旧版本，以正确修复漏洞。我们相信这是解决这个重要研究问题的第一步，并希望我们的研究能够引起研究界对回溯安全补丁修复未打补丁漏洞的普遍关注，超出注入相关漏洞的范围。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shi](https://www.usenix.org/conference/usenixsecurity22/presentation/shi)
- **PDF:** [https://www.usenix.org/system/files/sec22-shi.pdf](https://www.usenix.org/system/files/sec22-shi.pdf)
## Experimental Security Analysis of the App Model in Business Collaboration Platforms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#experimental-security-analysis-of-the-app-model-in-business-collaboration-platforms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#experimental-security-analysis-of-the-app-model-in-business-collaboration-platforms)**
### 作者
* Yunang Chen, University of Wisconsin–Madison
* Yue Gao, University of Wisconsin–Madison
* Nick Ceccio, University of Wisconsin–Madison
* Rahul Chatterjee, University of Wisconsin–Madison
* Kassem Fawaz, University of Wisconsin–Madison
* Earlence Fern, University of Wisconsin–Madison
* es, University of Wisconsin–Madison
### 摘要
> 商业合作平台如Microsoft Teams和Slack通过支持文本聊天和第三方资源集成来促进团队合作。用户可以从平台内访问在线文件存储、进行视频通话和管理代码存储库，因此使其成为敏感沟通和资源的中心。这些生产力功能的关键因素是第三方应用程序模型。我们对该模型和第三方应用程序进行了实验性安全分析。由于商业平台及其应用程序是闭源系统，进行这种分析是具有挑战性的。我们的分析方法是系统地调查应用程序和用户之间可能发生的不同类型的互动。我们发现，这些系统中的访问控制模型违反了两个基本安全原则：最小特权和完全中介。这些违规使得恶意应用程序能够利用用户消息和与平台连接的第三方资源的机密性和完整性。我们建立了概念验证攻击，可以：（1）在没有读取消息权限的情况下窃听用户消息；（2）发起虚假视频通话；（3）在没有用户批准或参与的情况下自动将代码合并到存储库中。最后，我们提供了Slack和Microsoft Teams等系统可以采用的对策分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-experimental](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-experimental)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yunang-experimental.pdf](https://www.usenix.org/system/files/sec22-chen-yunang-experimental.pdf)
## SWAPP: A New Programmable Playground for Web Application Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#swapp-a-new-programmable-playground-for-web-application-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#swapp-a-new-programmable-playground-for-web-application-security)**
### 作者
* Phakpoom Chinprutthiwong, SUCCESS Lab, Texas A&M University
* Jianwei Huang, SUCCESS Lab, Texas A&M University
* Guofei Gu, SUCCESS Lab, Texas A&M University
### 摘要
> 客户端网络攻击是当前网络犯罪分子的重要战场之一。为了减轻此类攻击，研究人员提出了许多能够部署在服务器或客户端上的防御措施。服务器端防御措施可以由网络开发人员轻松部署和修改，但缺乏客户端攻击的上下文，如DOM-XSS攻击。另一方面，客户端防御措施，特别是修改过的浏览器或浏览器扩展程序，需要持续的供应商支持或用户参与以保持最新。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们探索了使用新的执行上下文——服务工作者上下文作为网络安全防御开发平台的可行性，该平台是可编程的、与浏览器无关的，并且在客户端上运行而无需用户参与。为此，我们提出并开发了SWAPP（服务工作者应用平台），这是一个用于在服务工作者内实施安全机制的框架。由于大多数浏览器都支持服务工作者，我们的框架与大多数客户端兼容。此外，SWAPP旨在实现应用的扩展性和可编程性。我们通过实现各种应用程序来展示SWAPP的多功能性，这些应用程序可以减轻包括最近针对部署服务工作者的网站的侧信道攻击在内的网络攻击。SWAPP使网站能够将安全任务的一部分从服务器转移到客户端，并且还可以在浏览器正式支持之前部署或更新新兴的安全功能/原型。最后，我们评估了我们框架的性能开销，并展示了在服务工作者上部署防御措施是一个可行的选择。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chinprutthiwong](https://www.usenix.org/conference/usenixsecurity22/presentation/chinprutthiwong)
- **PDF:** [https://www.usenix.org/system/files/sec22-chinprutthiwong.pdf](https://www.usenix.org/system/files/sec22-chinprutthiwong.pdf)
## The Security Lottery: Measuring Client-Side Web Security Inconsistencies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-security-lottery-measuring-client-side-web-security-inconsistencies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-security-lottery-measuring-client-side-web-security-inconsistencies)**
### 作者
* Sebastian Roth, CISPA Helmholtz Center for Information Security
* Stefano Calzavara, Università Ca' Foscari Venezia
* Moritz Wilhelm, CISPA Helmholtz Center for Information Security
* Alvise Rabitti, Università Ca' Foscari Venezia
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 为了减轻各种网络攻击，现代浏览器支持通过HTTP响应头发送的客户端安全策略。为了强制执行这些防御措施，服务器需要将其通知客户端，这似乎是一个直接的过程。然而，用户可能以各种方式访问相同的网站，例如使用不同的用户代理、网络访问方法或语言设置。所有这些使用场景都应该强制执行相同的安全策略，否则将发生安全随机性：根据特定的客户端特征，将为用户提供不同级别的Web应用程序安全性（不一致性）。我们形式化了通过四种流行机制提供的安全保证，并将其应用于衡量不同客户端特征下顶级网站的安全策略中不一致性的普遍性。基于我们的观察结果，我们调查了确定性和非确定性不一致性的安全影响，并展示了即使知名服务也受到它们的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/roth](https://www.usenix.org/conference/usenixsecurity22/presentation/roth)
- **PDF:** [https://www.usenix.org/system/files/sec22-roth.pdf](https://www.usenix.org/system/files/sec22-roth.pdf)
## PatchCleanser: Certifiably Robust Defense against Adversarial Patches for Any Image Classifier.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#patchcleanser-certifiably-robust-defense-against-adversarial-patches-for-any-image-classifier) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#patchcleanser-certifiably-robust-defense-against-adversarial-patches-for-any-image-classifier)**
### 作者
* Chong Xiang, Princeton University
* Saeed Mahloujifar, Princeton University
* Prateek Mittal, Princeton University
### 摘要
> 对图像分类模型进行对抗性贴片攻击的目标是在限制区域（即贴片）内注入对抗性调制像素以诱导模型错误分类。这种攻击可以通过打印和贴在受害对象上来在现实世界中实现，因此对计算机视觉系统构成了实际威胁。为了应对这一威胁，我们设计了PatchCleanser作为一种保证鲁棒性的防御措施来对抗对抗性贴片。在PatchCleanser中，我们对输入图像进行两轮像素屏蔽以抵消对抗性贴片的影响。这种基于图像空间的操作使得PatchCleanser与任何最先进的图像分类器兼容，从而实现高准确度。此外，我们可以证明，在我们的威胁模型内，PatchCleanser对特定图像始终能正确预测类别标签，对任何自适应白盒攻击者具有认证鲁棒性。我们在ImageNet、ImageNette和CIFAR-10数据集上进行了广泛评估，并证明我们的防御措施实现了与最先进的分类模型相似的清晰度准确度，同时还显著提高了认证鲁棒性。值得注意的是，对于1000类ImageNet数据集上的图像，PatchCleanser在出现在图像上的任何2%像素方形贴片的情况下，实现了83.9%的Top-1清晰度准确度和62.1%的Top-1认证鲁棒准确度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xiang](https://www.usenix.org/conference/usenixsecurity22/presentation/xiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-xiang.pdf](https://www.usenix.org/system/files/sec22-xiang.pdf)
## Transferring Adversarial Robustness Through Robust Representation Matching.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#transferring-adversarial-robustness-through-robust-representation-matching) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#transferring-adversarial-robustness-through-robust-representation-matching)**
### 作者
* Pratik Vaishnavi, Stony Brook University
* Kevin Eykholt, IBM
* Amir Rahmati, Stony Brook University
### 摘要
> 随着机器学习的广泛应用，人们对其安全性和可靠性的关注日益增加。因此，许多人开发了针对神经网络的防御方法，以加固其抵御对抗样本的能力，即不易察觉的扰动输入可被可靠地错误分类的输入。对抗训练是为数不多已知能够可靠抵御神经网络对抗攻击的防御方法之一，其中对抗样本在训练过程中被生成并使用。然而，对抗训练对训练过程施加了很大的负荷，并且在模型复杂性和输入维度上扩展效果不佳。在本文中，我们提出了一种低成本的方法，名为Robust Representation Matching (RRM)，用于将对抗训练模型的稳健性转移到针对相同任务进行训练的新模型上，而不考虑其架构差异。受到师生学习的启发，我们的方法引入了一种新颖的训练损失，鼓励学生模型学习教师模型的稳健表示。与之前的工作相比，RRM在模型性能和对抗训练时间方面均表现优越。在CIFAR-10数据集上，RRM训练一个稳健模型的速度比最先进的方法快约1.8倍。此外，RRM对高维度的数据集仍然有效。在Restricted-ImageNet数据集上，RRM训练一个ResNet50模型的速度比标准对抗训练快约18倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/vaishnavi](https://www.usenix.org/conference/usenixsecurity22/presentation/vaishnavi)
- **PDF:** [https://www.usenix.org/system/files/sec22-vaishnavi.pdf](https://www.usenix.org/system/files/sec22-vaishnavi.pdf)
## How Machine Learning Is Solving the Binary Function Similarity Problem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-machine-learning-is-solving-the-binary-function-similarity-problem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-machine-learning-is-solving-the-binary-function-similarity-problem)**
### 作者
* Andrea Marcelli, Cisco Systems, Inc.
* Mariano Graziano, Cisco Systems, Inc.
* Xabier Ugarte-Pedrero, Cisco Systems, Inc.
* Yanick Fratantonio, Cisco Systems, Inc.
* Mohamad Mansouri, EURECOM
* Davide Balzarotti, EURECOM
### 摘要
> 能够准确计算两个二进制代码的相似度在许多不同问题中起着重要作用。安全、编程语言分析和机器学习等多个研究领域已经致力于这个主题超过五年，并发表了数百篇相关论文。人们可能会期望，到了现在，能够回答一些超越单独论文中特定技术的研究问题，而是适用于整个研究领域。然而，不幸的是，该主题受到多个挑战的影响，从可复现性问题到研究结果的不透明性，这阻碍了有意义和有效的进展。
> 
> 
> 
> 
> 
> 
> 
> 本文旨在对这个研究领域的现状进行第一次测量研究。我们首先对现有的研究成果进行系统化。然后，我们确定了一些相关方法，这些方法代表了三个不同研究社区最近提出的广泛解决方案的范例。我们重新实现了这些方法，并创建了一个新的数据集（包含使用不同编译器、优化设置和三种不同架构编译的二进制文件），从而使我们能够进行公平和有意义的比较。这一努力使我们能够回答一些超出单独研究论文的研究问题。通过发布我们的整个模块化框架和数据集（附带文档），我们也希望激发未来在这个有趣的研究领域开展的工作。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/marcelli](https://www.usenix.org/conference/usenixsecurity22/presentation/marcelli)
- **PDF:** [https://www.usenix.org/system/files/sec22-marcelli.pdf](https://www.usenix.org/system/files/sec22-marcelli.pdf)
## Blacklight: Scalable Defense for Neural Networks against Query-Based Black-Box Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#blacklight-scalable-defense-for-neural-networks-against-query-based-black-box-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#blacklight-scalable-defense-for-neural-networks-against-query-based-black-box-attacks)**
### 作者
* Huiying Li, University of Chicago
* Shawn Shan, University of Chicago
* Emily Wenger, University of Chicago
* Jiayun Zhang, Fudan University
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 深度学习系统已知容易受到对抗性样本的攻击。在特定情况下，基于查询的黑盒攻击不需要了解深度学习模型，而是通过提交查询和检查返回结果在网络上计算对抗性样本。最近的研究主要改进了这些攻击的效率，并证明它们在当今的ML-as-a-service平台上的实用性。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了Blacklight，一种对抗基于查询的黑盒攻击的新防御方法。Blacklight的驱动力在于一个基本观点：为了计算对抗性样本，这些攻击在网络上执行迭代优化，产生在输入空间中高度相似的查询。因此，Blacklight通过检测高度相似的查询来检测基于查询的黑盒攻击，使用基于概率内容指纹的高效相似性引擎进行操作。我们对八种最先进的攻击方法进行了Blacklight的评估，涵盖了各种模型和图像分类任务。Blacklight可以识别它们，通常只需少数几个查询。通过拒绝所有检测到的查询，Blacklight可以防止任何攻击完成，即使持续攻击者在被禁止的帐户或被拒绝的查询之后继续提交查询。Blacklight还能够抵御几种强大的对抗措施，包括一种近似于白盒攻击效率的最优黑盒攻击。最后，我们说明了Blacklight如何推广到其他领域，如文本分类。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-huiying](https://www.usenix.org/conference/usenixsecurity22/presentation/li-huiying)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-huiying.pdf](https://www.usenix.org/system/files/sec22-li-huiying.pdf)
## DnD: A Cross-Architecture Deep Neural Network Decompiler.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dnd-a-cross-architecture-deep-neural-network-decompiler) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dnd-a-cross-architecture-deep-neural-network-decompiler)**
### 作者
* Ruoyu Wu, Purdue University
* Taegyu Kim, The Pennsylvania State University
* Dave (Jing) Tian, Purdue University
* Antonio Bianchi, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 近年来，深度神经网络（Deep Neural Networks，DNNs）的使用逐渐增加。尤其是在边缘设备中使用时，会使用专用的DNN编译器将DNN编译为二进制文件。当DNN模型可访问时，可以实现许多安全应用，如DNN模型提取、白盒对抗样本生成以及DNN模型修补和硬化。然而，这些技术无法应用于已编译的DNN。遗憾的是，目前尚无专用的反编译器能够从已编译的二进制代码中恢复DNN的高层表示。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，我们提出了DnD，这是第一个与编译器和ISA无关的DNN反编译器。DnD使用符号执行和专用循环分析相结合的方法，将分析的二进制代码提升到一种新颖的中间表示方式，能够以编译器和ISA无关的方式表达高层数学DNN操作。然后，DnD将提取的数学DNN操作与模板数学DNN操作进行匹配，并恢复所有已识别DNN运算符的超参数和参数，以及整体DNN拓扑结构。我们的评估结果表明，DnD可以完美地从使用两个不同编译器（Glow和TVM）对三种不同ISA（Thumb、AArch64和x86-64）编译的二进制中恢复不同的DNN模型。此外，DnD使得能够提取真实微控制器使用的DNN模型，并使用白盒对抗机器学习技术对其进行攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-ruoyu](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-ruoyu)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-ruoyu.pdf](https://www.usenix.org/system/files/sec22-wu-ruoyu.pdf)
## Measurement by Proxy: On the Accuracy of Online Marketplace Measurements.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#measurement-by-proxy-on-the-accuracy-of-online-marketplace-measurements) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#measurement-by-proxy-on-the-accuracy-of-online-marketplace-measurements)**
### 作者
* Alej, Carnegie Mellon University
* ro Cuevas, Carnegie Mellon University
* Fieke Miedema, Delft University of Technology
* Kyle Soska, University of Illinois Urbana Champaign and Hikari Labs, Inc.
* Nicolas Christin, Carnegie Mellon University and Hikari Labs, Inc.
* Rolf van Wegberg, Delft University of Technology
### 摘要
> 近年来，许多研究都调查了在线匿名（“暗网”）市场。几乎所有研究都采用“代理测量”设计，研究人员从市场公开页面抓取数据，并将买家评论作为实际交易的代理，以获得有关市场规模和收入的洞察。然而，我们不知道这种方法是否会导致结果偏差。
> 
> 
> 
> 
> 
> 
> 
> 我们建立了一个框架来推断市场测量准确性，并使用这个框架将从对汉萨市场的抓取数据得出的估计与警方查获的后端数据库的数据进行对比。我们还通过模拟研究了抓取频率、一致性和速率限制的影响。我们发现，即使进行了适当的抓取工作，仍可能错过约46%的物品——抓取到的列表在价格、浏览量和产品类别上与未抓取的列表存在显著差异。这种偏差也会影响收入计算。我们发现汉萨的总市场收入为5000万美元，而基于我们的抓取数据得出的估计低估了四倍。模拟进一步表明，基于一两次抓取的研究可能会遭受非常差的覆盖率（平均为14%到30%）。
> 
> 
> 
> 
> 
> 
> 
> 高频率的抓取对于实现可靠的覆盖率至关重要，即使没有一致的抓取例程。当抓取频率高困难时，比如受到部署的反抓取对策的影响，创新的抓取器设计，比如首先抓取最热门的列表，有助于提高覆盖率。最后，当人口规模未知时，丰富度估计器可以提供有关人口覆盖率的洞察。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cuevas](https://www.usenix.org/conference/usenixsecurity22/presentation/cuevas)
- **PDF:** [https://www.usenix.org/system/files/sec22-cuevas.pdf](https://www.usenix.org/system/files/sec22-cuevas.pdf)
## Behind the Tube: Exploitative Monetization of Content on YouTube.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#behind-the-tube-exploitative-monetization-of-content-on-youtube) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#behind-the-tube-exploitative-monetization-of-content-on-youtube)**
### 作者
* Andrew Chu, University of Chicago
* Arjun Arunasalam, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Z. Berkay Celik, Purdue University
### 摘要
> YouTube视频分享平台是当今社会上一个重要的在线存在，为大众提供各种类型的内容。随着该平台的观众和用户群的增长，个人用户和大型公司都已经认识到了将这些内容变现的潜力。虽然内容变现是YouTube服务的一项内在能力，但该平台还有一些规定来防止其被滥用。然而，存在一些规避这些要求的方法，其中许多可能对观众和其他用户造成伤害。本文首次提出了关于YouTube内容剥削性变现的综合研究。为此，我们首先创建了两个数据集：一个使用来自十一个讨论YouTube变现的论坛的数千个用户帖子，另一个使用来自五个提供购买和销售YouTube账户的活跃网站的列表数据。然后，我们进行了手动和自动化分析，以了解个体用户和大型频道集体在YouTube上使用的非法变现手段。我们发现有六种不同的非法内容变现手段用于在YouTube上进行非法变现，其中四种是个体用户使用的，两种是频道集体使用的。此外，我们还在YouTube留言板社区中找到了每种手段的实际证据，并提供了对其执行方式的见解。通过这样做，我们提供了一个关于YouTube平台上非法变现手段的全面视角，这有助于激发未来对这些有害活动进行调查的动力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chu](https://www.usenix.org/conference/usenixsecurity22/presentation/chu)
- **PDF:** [https://www.usenix.org/system/files/sec22-chu.pdf](https://www.usenix.org/system/files/sec22-chu.pdf)
## When Sally Met Trackers: Web Tracking From the Users' Perspective.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#when-sally-met-trackers-web-tracking-from-the-users-perspective) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#when-sally-met-trackers-web-tracking-from-the-users-perspective)**
### 作者
* Savino Dambra, EURECOM and Norton Research Group
* Isk, Norton Research Group
* er Sanchez-Rola, Norton Research Group
* Leyla Bilge, Norton Research Group
* Davide Balzarotti, EURECOM
### 摘要
> 网络追踪已经演变成互联网上的一种常态。事实上，网络追踪市场已经增长到数十亿美元。注重隐私的网络从业者和研究人员广泛研究了这一现象，证实了这种实践的普遍性，并提供了有效的解决方案，给用户提供在自由浏览网络时保持隐私的选择。然而，由于所有这些研究只从追踪者的角度看待这一趋势，仍然存在很多关于追踪对真实用户影响的未知。本文的目标是填补网络追踪主题方面的不足。借助网络浏览遥测日志，我们能够从用户角度观察这一趋势。具体而言，我们测量用户遭遇追踪器的速度，并研究减少其隐私风险的选项。此外，我们还估计了追踪器所知道的浏览历史的比例，并讨论了两种追踪策略，以增加对用户的现有了解。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dambra](https://www.usenix.org/conference/usenixsecurity22/presentation/dambra)
- **PDF:** [https://www.usenix.org/system/files/sec22-dambra.pdf](https://www.usenix.org/system/files/sec22-dambra.pdf)
## How to Peel a Million: Validating and Expanding Bitcoin Clusters.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-to-peel-a-million-validating-and-expanding-bitcoin-clusters) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-to-peel-a-million-validating-and-expanding-bitcoin-clusters)**
### 作者
* George Kappos, University College London and IC3
* Haaroon Yousaf, University College London and IC3
* Rainer Stütz, AIT - Austrian Institute of Technology
* Sofia Rollet, AIT - Austrian Institute of Technology
* Bernhard Haslhofer, Complexity Science Hub Vienna
* Sarah Meiklejohn, University College London and IC3
### 摘要
> 比特币及其衍生的数千种加密货币的一个显著特点是全球可见的交易账本。尽管比特币使用假名作为隐藏参与者身份的方法，但大量研究已经证明比特币并不匿名。通过聚类启发式方法的发展，追踪比特币从一个实体发送到另一个实体的流动已成为可能，这在某种程度上最好地体现了比特币的非匿名性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们设计了一种新的启发式方法，用于追踪一种称为"剥离链"的特定类型的流动，该链代表了同一实体进行的许多交易。在此过程中，我们隐式地将这些交易及其相关假名进行了聚类。然后，我们使用这种启发式方法来验证和扩展现有聚类启发式方法的结果。我们还开发了一种基于机器学习的验证方法，并使用一个真实数据集评估了我们所有的方法，并将其与现有技术进行比较。最终，我们的目标不仅是实现更强大的追踪技术，还要引起对这些系统匿名性限制的关注。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kappos](https://www.usenix.org/conference/usenixsecurity22/presentation/kappos)
## RapidPatch: Firmware Hotpatching for Real-Time Embedded Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rapidpatch-firmware-hotpatching-for-real-time-embedded-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rapidpatch-firmware-hotpatching-for-real-time-embedded-devices)**
### 作者
* Yi He, Tsinghua University and BNRist
* Zhenhua Zou, Tsinghua University and BNRist
* Kun Sun, George Mason University
* Zhuotao Liu, Tsinghua University and BNRist
* Ke Xu, Tsinghua University and BNRist
* Qian Wang, Wuhan University
* Chao Shen, Xi'an Jiaotong University
* Zhi Wang, Florida State University
* Qi Li, Tsinghua University and BNRist
### 摘要
> 如今，实时嵌入式设备成为网络攻击的主要目标之一。许多配备过时固件的嵌入式设备面临各种漏洞，但由于两个主要原因，无法及时打补丁。首先，对于拥有不同类型碎片化设备的供应商来说，很难为每种设备生成补丁。其次，要在许多嵌入式设备上部署补丁而不重新启动或停止实时任务是具有挑战性的，这妨碍了对具有高可用性要求的设备（如工控设备）进行补丁安装。在本文中，我们提出了一种名为RapidPatch的新型热补丁框架，通过在异构嵌入式设备上安装通用补丁，实现了补丁的快速传播而不中断其他任务的运行。RapidPatch允许实时操作系统（RTOS）开发人员直接为所有下游设备发布通用补丁，以便设备维护人员可以轻松为不同固件生成设备特定的补丁。我们利用eBPF虚拟机在资源受限的嵌入式设备上执行补丁，并开发了三种热补丁策略，以支持所有主要微控制器（MCU）架构的热补丁。特别是，我们针对不同类型的漏洞提出了两种类型的eBPF补丁，并开发了一个eBPF补丁验证器来确保补丁的安全性。我们使用四个主要RTOS运行在不同嵌入式设备上的重大CVE来评估RapidPatch。我们发现超过90%的漏洞可以通过RapidPatch进行热补丁。我们的系统可以在具有64 KB或更多内存和64 MHz MCU频率的设备上运行。平均补丁延迟小于8 µs，总体延迟开销小于0.6%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-yi](https://www.usenix.org/conference/usenixsecurity22/presentation/he-yi)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-yi.pdf](https://www.usenix.org/system/files/sec22-he-yi.pdf)
## GAROTA: Generalized Active Root-Of-Trust Architecture (for Tiny Embedded Devices).
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#garota-generalized-active-root-of-trust-architecture-for-tiny-embedded-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#garota-generalized-active-root-of-trust-architecture-for-tiny-embedded-devices)**
### 作者
* Esmerald Aliaj, University of California, Irvine
* Ivan De Oliveira Nunes, Rochester Institute of Technology
* Gene Tsudik, University of California, Irvine
### 摘要
> 嵌入式设备（又称智能设备或物联网设备）越来越受欢迎，并变得无处不在。不出所料，它们也成为攻击和恶意软件的吸引目标。设计成本、尺寸和能源限制非常严格的低端嵌入式设备，在安全方面特别具有挑战性，因为它们缺乏资源来实现高端计算设备上可用的复杂安全服务。为此，提出了几种微型根可信（RoTs）来实现设备软件状态的远程验证和运行时完整性等服务。这些RoTs操作是被动的：它们可以证明某个特定设备是否执行了所需的操作（例如软件更新或程序执行）。然而，它们无法保证所需的操作将被执行，因为控制设备的恶意软件可以轻松地通过忽略/丢弃接收到的命令和其他触发事件来阻止对RoT的访问。这是一个重要问题，因为它允许恶意软件有效地“变砖”或使大量（可能是关键任务）的设备失去功能。
> 
> 
> 
> 
> 
> 
> 
> 尽管最近的研究在现有RoTs基础上融入了更多主动行为，但其中大部分都依赖于可信执行环境（TEEs）的广泛硬件支持，而这对于低端设备来说成本通常过高。在本文中，我们致力于系统地设计一种适用于低端MCU的最小主动RoT。我们从以下三个问题开始：（1）在存在恶意软件的情况下需要什么功能来保证操作？（2）如何高效地实现这个功能？（3）这样一个主动RoT架构有哪些安全优势？然后，我们设计、实现、形式化验证和评估GAROTA：通用主动根可信架构。我们相信GAROTA是首个为低端MCU设计的干净板RoT。我们展示了GAROTA如何保证即使完全受软件破坏的低端MCU也能执行所需的操作。我们通过在三种类型的应用中实现由传感硬件、网络事件和定时器触发的操作来证明其实用性。我们还正式指定和验证了GAROTA的功能和属性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/aliaj](https://www.usenix.org/conference/usenixsecurity22/presentation/aliaj)
- **PDF:** [https://www.usenix.org/system/files/sec22-aliaj.pdf](https://www.usenix.org/system/files/sec22-aliaj.pdf)
## ReZone: Disarming TrustZone with TEE Privilege Reduction.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rezone-disarming-trustzone-with-tee-privilege-reduction) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rezone-disarming-trustzone-with-tee-privilege-reduction)**
### 作者
* David Cerdeira, Centro ALGORITMI, Universidade do Minho
* José Martins, Centro ALGORITMI, Universidade do Minho
* Nuno Santos, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* S, Centro ALGORITMI, Universidade do Minho
* ro Pinto, Centro ALGORITMI, Universidade do Minho
### 摘要
> 在TrustZone辅助下的可信执行环境（Trusted Execution Environments，TEEs）中，可信操作系统（trusted OS）对安全世界和普通世界的内存都具有无限制的访问权限。不幸的是，这种架构限制为攻击者开辟了一条探索的通道，他们已经展示了如何利用一系列漏洞来劫持可信操作系统并完全控制系统，主要针对(i) 富执行环境（Rich Execution Environment，REE），(ii)所有可信应用程序（Trusted Applications，TAs）和(iii)安全监控。本文提出了ReZone。ReZone设计背后的主要创新在于利用市售（commercially off-the-shelf，COTS）平台上可用的TrustZone不可知硬件原语来限制可信操作系统的特权。通过ReZone，一个单体化的TEEs被重构和分割为多个名为zones的沙箱域，这些域只能访问私有资源。我们已经在i.MX 8MQuad EVK上完全实现了ReZone，并将其与Android操作系统和OP-TEE集成。我们通过微基准测试和真实世界应用程序对ReZone进行了广泛评估。ReZone可以应对像DRM保护的视频编码这样的流行应用程序，并具有可接受的性能开销。我们调查了80个CVE漏洞报告，并估计ReZone可以减轻其中86.84%的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cerdeira](https://www.usenix.org/conference/usenixsecurity22/presentation/cerdeira)
- **PDF:** [https://www.usenix.org/system/files/sec22-cerdeira.pdf](https://www.usenix.org/system/files/sec22-cerdeira.pdf)
## Holistic Control-Flow Protection on Real-Time Embedded Systems with Kage.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#holistic-control-flow-protection-on-real-time-embedded-systems-with-kage) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#holistic-control-flow-protection-on-real-time-embedded-systems-with-kage)**
### 作者
* Yufei Du, UNC Chapel Hill and University of Rochester
* Zhuojia Shen, University of Rochester
* Komail Dharsee, University of Rochester
* Jie Zhou, University of Rochester
* Robert J. Walls, Worcester Polytechnic Institute
* John Criswell, University of Rochester
### 摘要
> 本文介绍了Kage系统：一种用于保护基于微控制器的嵌入式系统上应用程序和内核代码的控制数据的系统。Kage由符合Kage规范的嵌入式操作系统组成，该系统将所有控制数据存储在与不受信任的数据分开的内存区域中，以及一个编译器，用于高效地转换代码以保护这些内存区域并添加前向控制流完整性检查，还有一个安全API，允许对受保护数据进行安全更新。我们将Kage作为FreeRTOS的一个扩展来实现，FreeRTOS是一种嵌入式实时操作系统。我们使用CoreMark基准测试评估了Kage的性能。Kage引入了5.2%的平均运行时开销和49.8%的代码大小开销。此外，与启用了MPU的基准FreeRTOS相比，代码大小开销仅为14.2%。我们还通过测量和分析可达的代码重用工具评估了Kage的安全保证。与FreeRTOS相比，Kage将可达的工具数量从2,276减少到27，而剩余的27个工具无法组合起来发起实际攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/du](https://www.usenix.org/conference/usenixsecurity22/presentation/du)
- **PDF:** [https://www.usenix.org/system/files/sec22-du.pdf](https://www.usenix.org/system/files/sec22-du.pdf)
## Orca: Blocklisting in Sender-Anonymous Messaging.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#orca-blocklisting-in-sender-anonymous-messaging) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#orca-blocklisting-in-sender-anonymous-messaging)**
### 作者
* Nirvan Tyagi, Cornell University
* Julia Len, Cornell University
* Ian Miers, University of Maryland
* Thomas Ristenpart, Cornell Tech
### 摘要
> 匿名端到端加密消息允许发送消息给收件人，而不会向通讯平台透露发送者的身份。Signal最近推出了一个发送者匿名功能，其中包含一种滥用缓解机制，旨在允许平台代表收件人阻止恶意发件人。
> 
> 
> 
> 
> 
> 
> 
> 我们研究了发送者匿名和滥用缓解之间的紧张关系。我们首先展示了Signal部署机制的局限性，观察到它导致相对较弱的匿名特性，并展示了一种新的悲伤攻击，允许恶意发件人耗尽受害者的电量。因此，我们设计了一种名为Orca的新协议，允许接收者向平台注册一个保护隐私的黑名单。在不了解发送者身份的情况下，平台可以检查发送者是否在黑名单上，并且可以通过接收者识别发送者。我们使用一种新类型的群组签名方案构建了Orca，并给出了形式化的安全概念。我们的原型实现展示了Orca的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/tyagi](https://www.usenix.org/conference/usenixsecurity22/presentation/tyagi)
- **PDF:** [https://www.usenix.org/system/files/sec22-tyagi.pdf](https://www.usenix.org/system/files/sec22-tyagi.pdf)
## Adversarial Detection Avoidance Attacks: Evaluating the robustness of perceptual hashing-based client-side scanning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#adversarial-detection-avoidance-attacks-evaluating-the-robustness-of-perceptual-hashing-based-client-side-scanning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#adversarial-detection-avoidance-attacks-evaluating-the-robustness-of-perceptual-hashing-based-client-side-scanning)**
### 作者
* Shubham Jain, Imperial College London
* Ana-Maria Crețu, Imperial College London
* Yves-Alex, Imperial College London
* re de Montjoye, Imperial College London
### 摘要
> 端到端加密（E2EE）的消息平台使人可以安全和私密地与他人进行沟通。然而，它的广泛采用引发了对非法内容可能以不被察觉的方式共享的担忧。在全球反对密钥托管系统的推动下，基于感知哈希的客户端扫描最近被技术公司、政府和研究人员提出，用于检测E2EE通信中的非法内容。我们在此提出了第一个评估基于感知哈希的客户端扫描抵御检测规避攻击能力的框架，并表明目前的系统不具备鲁棒性。具体而言，我们提出了三种对感知哈希算法的攻击方法：一种通用的黑盒攻击和两种基于离散余弦变换算法的白盒攻击。在大规模的评估中，我们展示了基于感知哈希的客户端扫描机制在黑盒设置下对检测规避攻击非常脆弱，超过99.9%的图片成功遭受攻击同时保留了图片的内容。此外，我们还展示了我们的攻击能够生成多样化的扰动，强烈提示简单的缓解策略将无效。最后，我们表明为了使攻击更加困难所需的更大的阈值可能需要每天标记和解密超过10亿张图片，引发了强烈的隐私担忧。综上所述，我们的结果对目前全球各地政府、组织和研究人员提出的基于感知哈希的客户端扫描机制的鲁棒性产生了严重的质疑。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jain](https://www.usenix.org/conference/usenixsecurity22/presentation/jain)
- **PDF:** [https://www.usenix.org/system/files/sec22-jain.pdf](https://www.usenix.org/system/files/sec22-jain.pdf)
## Hecate: Abuse Reporting in Secure Messengers with Sealed Sender.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hecate-abuse-reporting-in-secure-messengers-with-sealed-sender) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hecate-abuse-reporting-in-secure-messengers-with-sealed-sender)**
### 作者
* Rawane Issa, Boston University
* Nicolas Alhaddad, Boston University
* Mayank Varia, Boston University
### 摘要
> 端到端加密为数十亿人提供了强大的隐私保护，但它也增加了对能够严重伤害人们的内容进行监管的复杂性。为了解决这个问题，Tyagi等人在[Crypto 2019]中引入了非对称消息签名（AMF）的概念，以便人们可以向监管员报告滥用内容，同时保留端到端隐私并与Signal的密封发件人等匿名通信系统兼容。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提供了一种名为Hecate的新的非对称消息签名的构造，它比Tyagi等人的方法更快、更安全，并引入了附加功能。首先，我们的方法使用更少的标准密码原语调用，并在明文模型中运行。其次，除了AMF的问责和可否认性要求，我们还增加了前向和后向保密性。第三，我们将AMF与源追踪相结合，源追踪是另一种内容监管方法，之前只考虑在非匿名网络环境中。源追踪允许消息被转发，并且仅通过报告来识别创建消息的原始源。为了为发送者和转发者提供匿名性，我们引入了一种具有预处理功能的AMF模型，其中每个客户端通过离线认证与监管员进行身份验证，以接收后来在发送匿名消息时使用的令牌，从而提供匿名性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/issa](https://www.usenix.org/conference/usenixsecurity22/presentation/issa)
- **PDF:** [https://www.usenix.org/system/files/sec22-issa.pdf](https://www.usenix.org/system/files/sec22-issa.pdf)
## End-to-Same-End Encryption: Modularly Augmenting an App with an Efficient, Portable, and Blind Cloud Storage.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#end-to-same-end-encryption-modularly-augmenting-an-app-with-an-efficient-portable-and-blind-cloud-storage) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#end-to-same-end-encryption-modularly-augmenting-an-app-with-an-efficient-portable-and-blind-cloud-storage)**
### 作者
* Long Chen, Institute of Software, Chinese Academy of Sciences
* Ya-Nan Li, The University of Sydney
* Qiang Tang, The University of Sydney
* Moti Yung, Google & Columbia University
### 摘要
> 云已经无处不在，我们提出一个问题：如何保护云数据免受云本身的威胁？对于消息应用程序而言，通过云服务器促进用户之间的私密通信，安全性已经通过端到端加密得到了有效解决。通过利用现有通道（TLS、证书和加密），避免了需要编写新基元的需求。然而，对于使用服务器来存储和检索用户数据的应用程序而言，解决类似的“来自服务器本身的隐私”问题（云盲存储）仍然是未解决的问题。现有的提议，如密码保护的秘密共享（PPSS），针对的是存储的端到端加密，但需要新的协议，而大多数流行的商业云存储服务是不可编程的。它们没有足够的简洁性可用于在任何云存储服务中进行迁移。
> 
> 
> 
> 
> 
> 
> 
> 在这里，我们提出了一个创新的系统，利用密钥服务器在云存储中存储私密数据（根据要求必要）。在我们的系统中，用户数据将不受云服务器、密钥服务器或任何非法用户的威胁，经过身份验证的用户可以通过正确的密码短语在任何设备上访问数据。我们系统最有吸引力的特点是它不需要云存储服务器支持任何新的可编程操作，除了现有的客户端登录和数据存储之外。此外，我们的系统只是建立在现有的应用程序密码登录系统之上，所以用户只需要一个密码短语来登录应用程序和访问他的安全存储。我们的协议的安全性经过我们严密的模型验证，并且通过在Amazon S3上进行真实网络实验进行了进一步的证明。我们提醒，Snapchat在他们的“只有我能看见”模块中部署了一个基于我们原则的非常初步的变体，为数亿用户提供服务！

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-long](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-long)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-long.pdf](https://www.usenix.org/system/files/sec22-chen-long.pdf)
## Omnes pro uno: Practical Multi-Writer Encrypted Database.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#omnes-pro-uno-practical-multi-writer-encrypted-database) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#omnes-pro-uno-practical-multi-writer-encrypted-database)**
### 作者
* Jiafan Wang, The Chinese University of Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong
### 摘要
> 多作者加密数据库允许读者安全地搜索多个作者贡献的数据。公钥可搜索加密（PKSE）似乎是正确的基本原理。然而，它的搜索延迟在实践中并不受欢迎，因为它需要对整个数据库进行线性的公钥操作。相比之下，对称可搜索加密（SSE）实现了亚线性搜索，但它本质上不支持多作者。
> 
> 
> 
> 
> 
> 
> 
> 本文旨在将SSE和PKSE的优点结合起来，即亚线性搜索和多作者支持，通过形式化混合可搜索加密（HSE）来实现。HSE需要一些看似相互冲突但又可取的功能，需要新的见解才能实现。
> 
> 
> 
> 
> 
> 
> 
> 我们的第一个贡献是基于历史的安全定义，涉及到更新和作者破坏的新泄漏类型，在已知的PKSE的多作者概念中是不存在的，因为它对作者的安全保护是无意义的。建立在动态SSE（DSSE）之上的HSE应满足前向隐私的实际标准。它的多作者支持再次使之前已知的方法（秘密状态维护）失败。HSE还应具备高效可控搜索的特点-每次搜索可以限制在不同的作者子集中，而搜索令牌大小保持恒定。为此，我们设计了一种新的部分重建技术和两个新的独立兴趣的构建模块-ID耦合密钥聚合加密和（最佳的）基于时期前向隐私的DSSE。
> 
> 
> 
> 
> 
> 
> 
> 我们对真实世界数据集的评估显示，HSE在流行的多作者数据库应用中具有明显优于以往技术的实际效率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-jiafan](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-jiafan)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-jiafan.pdf](https://www.usenix.org/system/files/sec22-wang-jiafan.pdf)
## Faster Yet Safer: Logging System Via Fixed-Key Blockcipher.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#faster-yet-safer-logging-system-via-fixed-key-blockcipher) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#faster-yet-safer-logging-system-via-fixed-key-blockcipher)**
### 作者
* Viet Tung Hoang, Florida State University
* Cong Wu, Florida State University
* Xin Yuan, Florida State University
### 摘要
> 系统日志对法庭分析至关重要，但为了发挥作用，它们需要防篡改。为了保护日志信息，学术界和行业界提出了许多安全日志系统。然而，除了最近的KennyLoggings构造之外，所有其他日志系统都被Paccagnella等人（CCS 2020）的攻击所攻破。在这项工作中，我们构建了一个安全的日志系统，改进了KennyLoggings在可适应性、安全性和性能方面。我们在性能提升方面的关键洞见是使用AES算法固定已知密钥。虽然这种技巧在安全分布式计算中被广泛使用，但这是它第一次在对称密钥密码学领域找到了应用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hoang](https://www.usenix.org/conference/usenixsecurity22/presentation/hoang)
- **PDF:** [https://www.usenix.org/system/files/sec22-hoang.pdf](https://www.usenix.org/system/files/sec22-hoang.pdf)
## IHOP: Improved Statistical Query Recovery against Searchable Symmetric Encryption through Quadratic Optimization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ihop-improved-statistical-query-recovery-against-searchable-symmetric-encryption-through-quadratic-optimization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ihop-improved-statistical-query-recovery-against-searchable-symmetric-encryption-through-quadratic-optimization)**
### 作者
* Simon Oya, University of Waterloo
* Florian Kerschbaum, University of Waterloo
### 摘要
> 对可搜索的对称加密（SSE）方案的有效查询恢复攻击通常依赖于关于查询或数据集的辅助基准信息。虽然在较弱的统计辅助信息假设下也可能进行查询恢复，但基于统计的攻击实现的准确度较低，并且不被视为严重威胁。在本文中，我们提出了一种名为IHOP的基于统计的查询恢复攻击，将查询恢复构建为一个二次优化问题，并通过迭代线性分配问题来达到解决方案。我们对五个真实数据集进行了广泛的评估，并展示了IHOP在不同参数和泄漏配置下优于其他基于统计的查询恢复攻击的表现，包括客户端使用部分访问模式混淆防御的情况。在一些情况下，我们的攻击几乎可以达到完美的查询恢复准确度。最后，我们在一个仅考虑频率泄漏的设置中使用IHOP，其中客户端的查询是相关的，并展示了我们的攻击在应用了最近由Grubbs等人提出的频率隐藏防御PANCAKE时仍然可以利用查询依赖性。我们的研究结果表明，基于统计的查询恢复攻击对于保护隐私的SSE方案构成严重威胁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/oya](https://www.usenix.org/conference/usenixsecurity22/presentation/oya)
- **PDF:** [https://www.usenix.org/system/files/sec22-oya.pdf](https://www.usenix.org/system/files/sec22-oya.pdf)
## Dynamic Searchable Encryption with Optimal Search in the Presence of Deletions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dynamic-searchable-encryption-with-optimal-search-in-the-presence-of-deletions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dynamic-searchable-encryption-with-optimal-search-in-the-presence-of-deletions)**
### 作者
* Javad Ghareh Chamani, Hong Kong University of Science and Technology
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Mohammadamin Karbasforushan, UC Santa Cruz
* Ioannis Demertzis, UC Santa Cruz
### 摘要
> 我们关注动态可搜索加密（DSE）中在存在删除的情况下进行高效（最佳/次最佳）搜索的问题。为此，我们首先提出OSSE，这是第一个能够实现渐近最优搜索时间、与结果大小线性相关且独立于任何先前删除的DSE方案，相比之前的最新技术进展改善了对数倍对数因子。然后，我们提出了第二个方案LLSE，与OSSE实现的最优方案相比，可以实现亚对数级的搜索开销（loglogi_w，其中i_w是关键词的先前插入次数），虽然比我们的第一个方案稍差，但仍优于先前的工作，同时实现更快的删除和渐近较小的服务器存储。两个方案均具有标准泄漏剖面，并具有前后私密性。我们的实验评估结果非常令人鼓舞，因为它显示我们的方案在搜索计算时间上始终优于先前的最新技术进展1.2-6.6倍，同时只需要一次往返即可接收搜索结果。即使与先前的更简单和非常高效的构造相比，在这些构造中所有已删除的记录都作为结果的一部分返回，我们的OSSE仍然在删除率为45-55%时实现了更好的性能，而先前的最新的次最佳方案则在65-75%的删除率时实现了这一点。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chamani](https://www.usenix.org/conference/usenixsecurity22/presentation/chamani)
- **PDF:** [https://www.usenix.org/system/files/sec22-chamani.pdf](https://www.usenix.org/system/files/sec22-chamani.pdf)
## ALASTOR: Reconstructing the Provenance of Serverless Intrusions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#alastor-reconstructing-the-provenance-of-serverless-intrusions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#alastor-reconstructing-the-provenance-of-serverless-intrusions)**
### 作者
* Pubali Datta, University of Illinois at Urbana-Champaign
* Isaac Polinsky, North Carolina State University
* Muhammad Adil Inam, University of Illinois at Urbana-Champaign
* Adam Bates, University of Illinois at Urbana-Champaign
* William Enck, North Carolina State University
### 摘要
> 无服务器计算使开发人员不再需要管理自己的平台和基础设施的负担，使他们能够快速原型设计和部署应用程序。然而，尽管无服务器计算越来越受欢迎，但它也带来了一些令人担忧的安全隐患。其中之一是调查入侵的困难 - 通过将传统应用程序分解为临时可重入函数，无服务器使攻击者能够在合法工作流中隐藏其活动，甚至通过滥用温暖容器重用策略来打破因果路径，从而防止根本原因分析。不幸的是，传统的系统审计方法和商业无服务器安全产品都无法提供所需的透明性来准确跟踪这些新颖威胁。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了ALASTOR，一种基于来源的审计框架，可以在无服务器应用程序中精确追踪可疑事件。ALASTOR在系统和应用层面记录函数活动，以捕获每个函数实例行为的整体图像。然后，它将来自不同函数的来源信息聚合到无服务器平台的中央存储库中，将它们组合在一起，生成复杂函数工作流的全局数据来源图。ALASTOR既与函数又与语言无关，并且可以很容易地集成到现有的无服务器平台中，只需进行最小的修改。我们为OpenFaaS平台实现了ALASTOR并使用广为认可的Nordstrom Hello, Retail!应用程序评估了其性能，发现ALASTOR相比商业可用的监控工具而言，虽然增加了可管理的开销（13.74%），但大大提高了取证能力。据我们所知，ALASTOR是专门设计以满足无服务器平台操作要求的第一个审计框架。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/datta](https://www.usenix.org/conference/usenixsecurity22/presentation/datta)
- **PDF:** [https://www.usenix.org/system/files/sec22-datta.pdf](https://www.usenix.org/system/files/sec22-datta.pdf)
## Back-Propagating System Dependency Impact for Attack Investigation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#back-propagating-system-dependency-impact-for-attack-investigation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#back-propagating-system-dependency-impact-for-attack-investigation)**
### 作者
* Pengcheng Fang, Case Western Reserve University
* Peng Gao, Virginia Tech
* Changlin Liu, Case Western Reserve University
* Erman Ayday, Case Western Reserve University
* Kangkook Jee, University of Texas at Dallas
* Ting Wang, Penn State University
* Yanfang (Fanny) Ye, Case Western Reserve University
* Zhuotao Liu, Tsinghua University
* Xusheng Xiao, Case Western Reserve University
### 摘要
> 对系统审计数据进行因果分析已成为攻击调查的重要解决方案。给定一个兴趣点（POI）事件（例如，在可疑文件创建时触发的警报），因果分析构建一个依赖图，其中节点代表系统实体（例如，进程和文件），边表示实体之间的依赖关系，以揭示攻击顺序。然而，因果分析通常会产生一个庞大的图（> 100,000个边），使安全分析人员难以检查。通过观察各种攻击的依赖图，我们发现（1）与POI事件高度相关的依赖关系通常具有不同的属性集（例如，数据流和时间）与不相关的依赖关系不同；（2）POI事件通常与少数攻击条目（例如，下载文件）相关。基于这些观察结果，我们提出了DEPIMPACT框架，通过以下方式识别依赖图的关键组件（即子图）：（1）为边分配有区分性的依赖权重，以区分代表攻击序列的关键边与不重要的依赖关系，（2）从POI事件向入口点反向传播依赖影响，（3）基于依赖影响对排名靠前的入口节点进行正向因果分析，以过滤掉在正向因果分析中没有发现的边。我们对实际攻击的150,000,000个真实系统审计事件和DARPA TC数据集进行评估，结果显示DEPIMPACT能够将大型依赖图（约1,000,000个边）显著减小到小图（约234个边），减小了4611倍。与其他最先进的因果分析技术的比较表明，DEPIMPACT在减小依赖图的同时保持攻击顺序时更加高效，效果提升了106倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fang](https://www.usenix.org/conference/usenixsecurity22/presentation/fang)
- **PDF:** [https://www.usenix.org/system/files/sec22-fang.pdf](https://www.usenix.org/system/files/sec22-fang.pdf)
## Ground Truth for Binary Disassembly is Not Easy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ground-truth-for-binary-disassembly-is-not-easy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ground-truth-for-binary-disassembly-is-not-easy)**
### 作者
* Chengbin Pang, Nanjing University
* Tiantai Zhang, Nanjing University
* Ruotong Yu, University of Utah
* Bing Mao, Nanjing University
* Jun Xu, University of Utah
### 摘要
> 现代的反汇编工具通常依靠经验评估来验证其性能并发现其局限性，从而推动长期发展。为支持经验评估，建立一个基础是收集真实知识的正确途径。然而，对于应该使用的方法，尚无一致的意见。大多数用户根据自己的经验或意愿选择方法，而不考虑方法的特性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们对构建二进制反汇编的真实知识方法进行研究，旨在揭示未来正确的方式。我们首先对过去研究使用的方法进行分类，揭示了这些方法背后的五个主要机制。根据分类，我们从两个角度总结了这五个机制的特性：（一）机制生成的真实知识的覆盖率和精度，以及（二）机制适用的范围（例如，支持什么样的反汇编任务和什么类型的二进制文件）。总结结合定量评估，说明许多机制不适合支持反汇编真实知识的生成。最符合当今需求的机制是追踪目标二进制文件的编译过程以收集真实知识信息。
> 
> 
> 
> 
> 
> 
> 
> 观察到现有的追踪编译过程的工具仍可能丢失真实结果，并且只能处理x86/x64二进制文件，我们扩展了该工具，以避免忽视这些结果并支持ARM32/AArch64/MIPS32/MIPS64二进制文件。我们预期我们的扩展将使该工具成为一个更好的基础，以实现通用、标准的二进制反汇编真实知识。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pang-chengbin](https://www.usenix.org/conference/usenixsecurity22/presentation/pang-chengbin)
- **PDF:** [https://www.usenix.org/system/files/sec22-pang-chengbin.pdf](https://www.usenix.org/system/files/sec22-pang-chengbin.pdf)
## FreeWill: Automatically Diagnosing Use-after-free Bugs via Reference Miscounting Detection on Binaries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#freewill-automatically-diagnosing-use-after-free-bugs-via-reference-miscounting-detection-on-binaries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#freewill-automatically-diagnosing-use-after-free-bugs-via-reference-miscounting-detection-on-binaries)**
### 作者
* Liang He, TCA, Institute of Software, Chinese Academy of Sciences
* Hong Hu, Pennsylvania State University
* Purui Su, TCA / SKLCS, Institute of Software, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Yan Cai, SKLCS, Institute of Software, Chinese Academy of Sciences
* Zhenkai Liang, National University of Singapore
### 摘要
> 操作系统和常用应用程序中的内存安全问题仍然是顶级安全威胁。作为一种广泛被利用的漏洞，Use After Free（UAF）每年都会导致数百起新的安全事件。现有的错误诊断技术可以报告分配或释放易受攻击对象的位置，但无法为开发人员提供足够的信息来推理漏洞或合成正确的修补程序。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们确定了错误的引用计数作为UAF漏洞的一个常见根本原因：如果开发人员忘记增加新创建引用的计数器，程序可能会过早地释放正在使用的对象，导致其他引用成为悬空指针。我们将这个问题称为引用计数错误。通过提出一种遗漏感知计数模型，我们开发了一种自动方法FREEWILL来诊断UAF漏洞。FREEWILL首先重现UAF漏洞并收集相关执行路径。然后，它识别UAF对象和相关引用。最后，FREEWILL将引用操作与我们的模型进行比较，以检测引用计数错误。我们在76个实际UAF漏洞上评估了FREEWILL，并成功确认48个漏洞的引用计数错误是根本原因，18个漏洞的使用方式错误。FREEWILL还发现了五个空指针解引用漏洞，并未能分析出五个漏洞。FREEWILL的分析平均可以在15分钟内完成，显示了其诊断UAF漏洞的实用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/he-liang](https://www.usenix.org/conference/usenixsecurity22/presentation/he-liang)
- **PDF:** [https://www.usenix.org/system/files/sec22-he-liang.pdf](https://www.usenix.org/system/files/sec22-he-liang.pdf)
## PolyCruise: A Cross-Language Dynamic Information Flow Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#polycruise-a-cross-language-dynamic-information-flow-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#polycruise-a-cross-language-dynamic-information-flow-analysis)**
### 作者
* Wen Li, Washington State University, Pullman
* Jiang Ming, University of Texas at Arlington
* Xiapu Luo, The Hong Kong Polytechnic University
* Haipeng Cai, Washington State University, Pullman
### 摘要
> 尽管当今大多数真实世界的软件系统都是用多种编程语言编写的，但现有的基于程序分析的安全技术仍然局限于单一语言代码。因此，跨语言边界的安全漏洞（例如代码漏洞）在很大程度上作为盲点被忽视。我们提出了PolyCruise，一种技术，它能够实现跨异构语言的整体动态信息流分析（DIFA），从而为多语言软件的安全应用（例如漏洞发现）提供支持。PolyCruise通过在每个语言单元中计算符号依赖关系的轻量级特定语言分析，与由这些依赖关系引导的与语言无关的在线数据流分析相结合，以克服语言的异构性。对其在Python-C程序上进行了广泛的实现评估，包括微型、中型和大规模基准测试，证明了PolyCruise的实际可扩展性和有前景的能力。它已经发现了14个现实世界的多语言系统（如NumPy）中的未知跨语言安全漏洞，其中已确认11个，分配了8个CVE编号，并已修复其中8个。同时，我们还贡献了第一个用于系统评估多语言DIFA的基准套件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-wen](https://www.usenix.org/conference/usenixsecurity22/presentation/li-wen)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-wen.pdf](https://www.usenix.org/system/files/sec22-li-wen.pdf)
## SYMSAN: Time and Space Efficient Concolic Execution via Dynamic Data-flow Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#symsan-time-and-space-efficient-concolic-execution-via-dynamic-data-flow-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#symsan-time-and-space-efficient-concolic-execution-via-dynamic-data-flow-analysis)**
### 作者
* Ju Chen, UC Riverside
* Wookhyun Han, KAIST
* Mingjun Yin, UC Riverside
* Haochen Zeng, UC Riverside
* Chengyu Song, UC Riverside
* Byoungyoung Lee, Seoul National University
* Heng Yin, UC Riverside
* Insik Shin, KAIST
### 摘要
> 符号执行是一种强大的程序分析技术，用于系统地探索执行路径。与基于随机突变的模糊测试相比，符号执行在探索由复杂和严格的分支断言所保护的路径方面表现出色。然而，缺点是符号执行引擎比本机执行要慢得多。尽管符号执行的最新进展显著降低了性能开销，但我们的分析表明，当前最先进的符号执行器忽视了管理符号表达式的开销。基于符号执行可以被建模为动态数据流分析的一种特殊形式的观察，我们建议利用现有高度优化的数据流分析框架来实现符号执行器。为了验证这个想法，我们根据LLVM的数据流刷新器实现了一个SYMSAN原型，并使用nbench、DARPA Cyber Grand Challenge数据集以及Google的Fuzzbench和binutils中的真实应用程序对其进行了评估。结果表明，SYMSAN在管理符号表达式方面的开销要小得多。减少的开销还可以导致更快的符号执行和改进的代码覆盖率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-ju](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-ju)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-ju.pdf](https://www.usenix.org/system/files/sec22-chen-ju.pdf)
## CellIFT: Leveraging Cells for Scalable and Precise Dynamic Information Flow Tracking in RTL.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#cellift-leveraging-cells-for-scalable-and-precise-dynamic-information-flow-tracking-in-rtl) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#cellift-leveraging-cells-for-scalable-and-precise-dynamic-information-flow-tracking-in-rtl)**
### 作者
* Flavien Solt, ETH Zurich
* Ben Gras, Intel Corporation
* Kaveh Razavi, ETH Zurich
### 摘要
> 动态信息流跟踪（动态IFT）是一种被广泛应用于安全领域的技术，可用于分析系统在给定输入下的行为，并检测安全违规行为。虽然目前有许多广泛使用的动态IFT解决方案可适应大型软件，但遗憾的是，在硬件领域中缺乏相同水平的支持。随着开源硬件复杂性的增加和近期硬件攻击不断增多，这种差距变得越来越明显。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了CellIFT，这是硬件动态IFT领域的一个新的设计点。CellIFT利用逻辑宏单元抽象（例如加法器）来实现对给定寄存器传输级（RTL）硬件设计进行仪器化时的可扩展性、精确性和完整性。基于单元的动态IFT不会受到与门等更低抽象级别固有的可扩展性问题的影响，而在给定单元类型有限的情况下，可以实现完整性。我们通过为五个不同的RISC-V设计（包括一个完整的SoC）进行仪器化来展示CellIFT的灵活性。而现有的唯一完整解决方案已经无法为其中两个设计进行仪器化。我们使用微基准测试和标准RISC-V基准测试对仪器化的设计进行了广泛评估，并显示了在不损失精确性的情况下，CellIFT的仿真运行时间比现有技术快21倍至61倍。我们进一步展示了CellIFT在四个场景中的具体应用，包括检测微架构信息泄漏的来源，检测诸如Meltdown等微架构错误，检测诸如Spectre-BCB等推测性漏洞，以及检测SoC全局架构设计缺陷。我们将CellIFT作为开源软件发布，以促进更广泛的RTL级安全研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/solt](https://www.usenix.org/conference/usenixsecurity22/presentation/solt)
- **PDF:** [https://www.usenix.org/system/files/sec22-solt.pdf](https://www.usenix.org/system/files/sec22-solt.pdf)
## FlowMatrix: GPU-Assisted Information-Flow Analysis through Matrix-Based Representation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#flowmatrix-gpu-assisted-information-flow-analysis-through-matrix-based-representation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#flowmatrix-gpu-assisted-information-flow-analysis-through-matrix-based-representation)**
### 作者
* Kaihang Ji, National University of Singapore
* Jun Zeng, National University of Singapore
* Yuancheng Jiang, National University of Singapore
* Zhenkai Liang, National University of Singapore
* Zheng Leong Chua, Independent Researcher
* Prateek Saxena, National University of Singapore
* Abhik Roychoudhury, National University of Singapore
### 摘要
> 动态信息流跟踪（DIFT）是广泛应用于安全和隐私分析的基础。DIFT技术面临的主要挑战是性能和可扩展性。由于程序中存在大量的状态，数据流的数量可能非常庞大，因此使用现有方法来高效执行交互式数据流分析查询是具有挑战性的。在本文中，我们认为基于依赖的信息流规则下的DIFT可以作为对污点状态的线性变换来表示。这使得我们能够使用一种称为FlowMatrix的新型矩阵表示来简洁地表示DIFT操作，并且使得采用GPU作为DIFT分析的协处理器成为可能。FlowMatrix为交互式DIFT查询操作提供了高效的支持。我们设计了一个DIFT查询系统，并在商品化GPU上进行了原型验证。我们的评估结果表明，我们的原型性能超过基于CPU的基准线5.6倍，并且能够对DIFT查询快速响应。与典型的DIFT分析解决方案相比，它的吞吐量提高了两到三个数量级。我们还展示了新的DIFT查询操作的效率和功效。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ji](https://www.usenix.org/conference/usenixsecurity22/presentation/ji)
- **PDF:** [https://www.usenix.org/system/files/sec22-ji.pdf](https://www.usenix.org/system/files/sec22-ji.pdf)
## Bedrock: Programmable Network Support for Secure RDMA Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#bedrock-programmable-network-support-for-secure-rdma-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#bedrock-programmable-network-support-for-secure-rdma-systems)**
### 作者
* Jiarong Xing, Rice University
* Kuo-Feng Hsu, Rice University
* Yiming Qiu, Rice University
* Ziyang Yang, Rice University
* Hongyi Liu, Rice University
* Ang Chen, Rice University
### 摘要
> 远程直接内存访问（RDMA）在云数据中心中变得越来越受欢迎。在RDMA中，客户端绕过服务器CPU，直接读写远程内存。最近的研究发现了一系列RDMA的漏洞，导致了数据包注入、拒绝服务和侧信道泄露等攻击，但是RDMA的防御措施仍然滞后。由于RDMA数据通路绕过基于CPU的软件处理，传统的防御措施无法轻松插入而不引起性能损耗。Bedrock在网络内部为RDMA开发了一个安全基础，利用现代网络硬件的可编程数据平面。它设计了一系列的防御原语，包括源认证、访问控制以及监控和日志记录，以应对基于RDMA的攻击。Bedrock在关键数据通路上不会带来软件开销，并在数据传输中提供原生的RDMA性能。此外，Bedrock与传统的RDMA系统透明地操作，不需要进行RNIC、操作系统或RDMA库的更改。我们对Bedrock进行了一系列全面的实验，并展示了其有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/xing](https://www.usenix.org/conference/usenixsecurity22/presentation/xing)
- **PDF:** [https://www.usenix.org/system/files/sec22-xing.pdf](https://www.usenix.org/system/files/sec22-xing.pdf)
## Creating a Secure Underlay for the Internet.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#creating-a-secure-underlay-for-the-internet) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#creating-a-secure-underlay-for-the-internet)**
### 作者
* Henry Birge-Lee, Princeton University
* Joel Wanner, ETH Zürich
* Grace H. Cimaszewski, Princeton University
* Jonghoon Kwon, ETH Zürich
* Liang Wang, Princeton University
* François Wirz, ETH Zürich
* Prateek Mittal, Princeton University
* Adrian Perrig, ETH Zürich
* Yixin Sun, University of Virginia
### 摘要
> 敌对势力可以利用域间路由漏洞来拦截通信并危及关键互联网应用的安全性。同时，诸如边界网关协议安全性（BGPsec）和下一代网络的可扩展性、控制和隔离（SCION）等安全路由解决方案的部署仍然有限。我们如何利用新兴的安全路由骨干并将其安全性扩展到更广泛的互联网中？
> 
> 
> 
> 
> 
> 
> 
> 我们设计和部署了一个用于引导安全路由的架构。我们的关键洞察是将安全路由骨干抽象为一个虚拟自治系统（AS），称为安全骨干自治系统（SBAS）。尽管SBAS对互联网而言只是一个自治系统，但它是一个联邦网络，参与者之间通过安全骨干交换路由。SBAS在多个位置（称为出现点或PoPs）为其客户的IP前缀进行BGP通告，使得非参与主机的流量可以被路由到附近的SBAS PoP（然后通过安全骨干路由到真正的前缀所有者）。通过这种方式，我们是第一个将联邦安全非BGP路由骨干与BGP互联网集成在一起的。
> 
> 
> 
> 
> 
> 
> 
> 我们展示了一个使用SCIONLab模拟安全骨干和使用PEERING框架向互联网进行BGP通告的真实部署。通过真实攻击和互联网规模模拟，我们证明了SBAS极大地降低了路由攻击的威胁。最后，我们调查了网络运营商以更好地了解最佳的治理和激励模式。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/birge-lee](https://www.usenix.org/conference/usenixsecurity22/presentation/birge-lee)
- **PDF:** [https://www.usenix.org/system/files/sec22-birge-lee.pdf](https://www.usenix.org/system/files/sec22-birge-lee.pdf)
## Off-Path Network Traffic Manipulation via Revitalized ICMP Redirect Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#off-path-network-traffic-manipulation-via-revitalized-icmp-redirect-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#off-path-network-traffic-manipulation-via-revitalized-icmp-redirect-attacks)**
### 作者
* Xuewei Feng, Department of Computer Science and Technology & BNRist, Tsinghua University
* Qi Li, Institute for Network Sciences and Cyberspace & BNRist, Tsinghua University and Zhongguancun Lab
* Kun Sun, Department of Information Sciences and Technology & CSIS, George Mason University
* Zhiyun Qian, UC Riverside
* Gang Zhao, Department of Computer Science and Technology & BNRist, Tsinghua University
* Xiaohui Kuang, Beijing University of Posts and Telecommunications
* Chuanpu Fu, Department of Computer Science and Technology & BNRist, Tsinghua University
* Ke Xu, Department of Computer Science and Technology & BNRist, Tsinghua University and Zhongguancun Lab
### 摘要
> ICMP重定向是一种机制，允许终端主机动态更新特定目的地的路由决策。先前的研究表明，攻击者可能利用ICMP重定向来操纵受害者流量的路由。然而，人们普遍认为ICMP重定向攻击不是现实世界中的威胁，因为它们只能在特定的网络拓扑（如局域网）下发生。在本文中，我们对ICMP的合法性检查机制进行了系统研究，并揭示了检查机制与无状态协议之间的根本差距，导致了广泛的漏洞。特别是，我们发现，在离路径攻击者可以利用一组无状态协议（如UDP、ICMP、GRE、IPIP和SIT）轻松制作具有欺骗性的ICMP错误消息，从而在现实世界中引发ICMP重定向攻击并造成严重破坏，特别是在广域网上。首先，我们展示了离路径攻击者可以通过用一条伪造的ICMP重定向消息欺骗互联网上的各种公共服务器，将其流量误导到黑洞中，从而进行隐蔽的拒绝服务（DoS）攻击。例如，我们揭示了互联网上有超过43K个热门网站容易受到这种DoS攻击。此外，我们还发现54.47K个开放DNS解析器和186个Tor节点在互联网上也容易受到攻击。其次，我们展示了如何利用ICMP重定向攻击NAT网络，离路径攻击者可以在同一NAT网络中进行中间人（MITM）攻击以截取受害者流量。最后，我们开发了对抗攻击的对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/feng](https://www.usenix.org/conference/usenixsecurity22/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/sec22-feng.pdf](https://www.usenix.org/system/files/sec22-feng.pdf)
## VerLoc: Verifiable Localization in Decentralized Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#verloc-verifiable-localization-in-decentralized-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#verloc-verifiable-localization-in-decentralized-systems)**
### 作者
* Katharina Kohls, Radboud University Nijmegen
* Claudia Diaz, imec-COSIC KU Leuven and Nym Technologies SA
### 摘要
> 我们致力于解决去中心化网络中可靠确定节点地理位置的挑战，考虑对抗性环境，并且不依赖于任何受信任的地标。特别地，我们考虑主动攻击者控制一部分节点，宣布虚假位置并且策略性地操纵测量数据。为了解决这个问题，我们提出、实现和评估了VerLoc系统，该系统能够以完全去中心化的方式验证网络节点声称的地理位置。VerLoc安全地安排随机选择的节点之间的往返时间（RTT）测量。然后对一组测量数据应用三边定位算法以验证声称的地理位置。我们通过模拟和在实际环境中使用原型实现（集成在目前由数千节点运行的Nym网络中）来评估VerLoc。我们发现VerLoc在实际环境中可以将节点定位的中位误差限制在60公里以内，并且在攻击模拟中，对于最多拥有20％恶意节点的网络设置，它能够检测和过滤掉对时间进行恶意操作的行为。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kohls](https://www.usenix.org/conference/usenixsecurity22/presentation/kohls)
- **PDF:** [https://www.usenix.org/system/files/sec22-kohls.pdf](https://www.usenix.org/system/files/sec22-kohls.pdf)
## Towards More Robust Keyword Spotting for Voice Assistants.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#towards-more-robust-keyword-spotting-for-voice-assistants) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#towards-more-robust-keyword-spotting-for-voice-assistants)**
### 作者
* Shimaa Ahmed, University of Wisconsin-Madison
* Ilia Shumailov, University of Cambridge
* Nicolas Papernot, University of Toronto and Vector Institute
* Kassem Fawaz, University of Wisconsin-Madison
### 摘要
> 语音助手依赖关键词识别（KWS）来处理由人类发出的语音命令：命令前面附加一个关键词，例如“Alexa”或“Ok Google”，需要识别出关键词才能激活语音助手。通常，关键词识别有两个步骤：设备上的模型首先识别出关键词，然后所得到的语音样本触发云端的第二个模型进行验证和处理激活操作。本研究探讨了这种方法在两种威胁模型下引起的重大隐私和安全问题。首先，我们的实验表明，意外激活导致最多一分钟的语音录音被上传到云端。其次，我们验证了对手可以通过对抗性样本有系统地触发错误激活，从而暴露与语音助手连接的服务的完整性和可用性。我们提出了EKOS（关键词识别集成系统），它利用了KWS任务的语义来防御意外激活和对抗性激活。EKOS在训练和推理阶段利用声学环境中的空间冗余来最小化导致意外激活的分布漂移。它还利用了语音的一个物理属性——不同谐波的冗余，通过在不同谐波上训练一组模型并可证明迫使对手修改更多的频谱以获取对抗性样本。我们的评估结果表明，EKOS增加了对抗性激活的成本，同时保持了自然的准确性。我们通过对商用设备和商业语音助手进行了无线实验来验证EKOS的性能；我们发现EKOS提高了非对抗性环境中关键词识别任务的精确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ahmed](https://www.usenix.org/conference/usenixsecurity22/presentation/ahmed)
- **PDF:** [https://www.usenix.org/system/files/sec22-ahmed.pdf](https://www.usenix.org/system/files/sec22-ahmed.pdf)
## Seeing is Living? Rethinking the Security of Facial Liveness Verification in the Deepfake Era.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#seeing-is-living-rethinking-the-security-of-facial-liveness-verification-in-the-deepfake-era) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#seeing-is-living-rethinking-the-security-of-facial-liveness-verification-in-the-deepfake-era)**
### 作者
* Changjiang Li, Pennsylvania State University and Zhejiang University
* Li Wang, Shandong University
* Shouling Ji, Zhejiang University
* Xuhong Zhang, Zhejiang University
* Zhaohan Xi, Pennsylvania State University
* Shanqing Guo, Shandong University
* Ting Wang, Pennsylvania State University
### 摘要
> 面部活体验证（Facial Liveness Verification，FLV）广泛应用于许多安全敏感领域的身份验证，并由领先的云服务商提供平台即服务（Platform-as-a-Service，PaaS）。然而，随着合成媒体技术（例如deepfake）的快速发展，FLV的安全性面临前所未有的挑战，目前对此知之甚少。
> 
> 
> 
> 
> 
> 
> 
> 为了填补这一空白，本文在真实世界环境中进行了首次系统研究FLV的安全性。具体而言，我们提出了LiveBugger，一种新的基于deepfake的攻击框架，可以实现可定制、自动化的FLV安全评估。借助LiveBugger，我们对代表性FLV平台进行了全面的实证评估，得出了一系列有趣的发现。例如，大多数FLV API并未使用反deepfake检测；即使有这种防御措施，其有效性令人担忧（例如，它可以检测出高质量的合成视频，但可能无法检测出低质量的合成视频）。然后，我们对影响LiveBugger攻击性能的因素进行了深入分析：a）FLV中的偏见（例如性别或种族）可以被利用来选择受害者；b）对抗训练使得deepfake更有效地绕过FLV；c）输入质量对不同的deepfake技术绕过FLV具有不同的影响。基于这些发现，我们提出了一种定制的两阶段方法，可以将攻击成功率提高多达70%。此外，我们对FLV的几个代表性应用（即FLV API的客户端）进行了概念验证攻击，以说明实际影响：由于API的漏洞，许多下游应用程序易受deepfake攻击。最后，我们讨论了改进FLV安全性的潜在对策。我们的发现已得到相应供应商的确认。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-changjiang](https://www.usenix.org/conference/usenixsecurity22/presentation/li-changjiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-changjiang.pdf](https://www.usenix.org/system/files/sec22-li-changjiang.pdf)
## Who Are You (I Really Wanna Know)? Detecting Audio DeepFakes Through Vocal Tract Reconstruction.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#who-are-you-i-really-wanna-know-detecting-audio-deepfakes-through-vocal-tract-reconstruction) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#who-are-you-i-really-wanna-know-detecting-audio-deepfakes-through-vocal-tract-reconstruction)**
### 作者
* Logan Blue, University of Florida
* Kevin Warren, University of Florida
* Hadi Abdullah, University of Florida
* Cassidy Gibson, University of Florida
* Luis Vargas, University of Florida
* Jessica O'Dell, University of Florida
* Kevin Butler, University of Florida
* Patrick Traynor, University of Florida
### 摘要
> 生成式机器学习模型使得声音合成成为现实。虽然这类工具在应用中非常有用，比如患者丧失说话能力时，演员不想重新对话等，但它们也可以用于创建非共识内容，即所谓的深度伪造。这种恶意音频不仅具有较强的欺骗性，可以被用来成功冒充任意用户，而且检测深度伪造非常具有挑战性，通常需要了解特定深度伪造生成器的知识。在本文中，我们利用关节声学领域的技术，开发了一种检测音频深度伪造的新机制。具体而言，我们应用流体动力学来估计人类发音过程中的声道排列情况，并展示深度伪造通常会模拟一些不可能或高度不太可能的解剖结构排列。当参数化以达到99.9%精确度时，我们的检测机制实现了99.5%的召回率，在我们的数据集中仅有一个深度伪造样本被错误地识别。然后，我们讨论了这种方法的局限性，以及深度伪造模型未能均衡重现语音的各个方面。通过这样做，我们证明了当前模型无法捕捉到人类生成语音的微妙但受生物约束的方面，因此可以作为检测音频深度伪造的有力工具。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/blue](https://www.usenix.org/conference/usenixsecurity22/presentation/blue)
- **PDF:** [https://www.usenix.org/system/files/sec22-blue.pdf](https://www.usenix.org/system/files/sec22-blue.pdf)
## DeepDi: Learning a Relational Graph Convolutional Network Model on Instructions for Fast and Accurate Disassembly.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#deepdi-learning-a-relational-graph-convolutional-network-model-on-instructions-for-fast-and-accurate-disassembly) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#deepdi-learning-a-relational-graph-convolutional-network-model-on-instructions-for-fast-and-accurate-disassembly)**
### 作者
* Sheng Yu, University of California Riverside and Deepbits Technology Inc.
* Yu Qu, University of California Riverside
* Xunchao Hu, Deepbits Technology Inc.
* Heng Yin, University of California Riverside and Deepbits Technology Inc.
### 摘要
> 反汇编是许多二进制分析任务的基础。传统的反汇编方法（如线性和递归）不够准确，而更复杂的方法（如概率反汇编、Datalog反汇编和XDA）的开销较大，这使得它们难以在时间关键的安全实践中广泛应用。本文提出了一种新颖的方法DEEPDI，旨在实现准确性和效率的双重目标。DEEPDI的关键思想是使用图神经网络模型来捕捉和传播指令关系。具体来说，DEEPDI首先使用超集反汇编来获取一组指令的超集。然后，我们构建了一个名为指令流图的图模型，以捕捉不同的指令关系。接下来，我们使用关系图卷积网络来传播指令嵌入，以实现准确的指令分类。DEEPDI还提供了一些启发式方法来恢复函数入口点。我们在包含真实世界和混淆二进制文件的几个大规模数据集上评估了DEEPDI。结果表明，DEEPDI在准确性方面与最先进的反汇编器相媲美或更优，并且对未知二进制文件、编译器、平台、混淆二进制文件和对抗性攻击具有鲁棒性。其CPU版本比IDA Pro快两倍，GPU版本快350倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-sheng](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-sheng)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-sheng.pdf](https://www.usenix.org/system/files/sec22-yu-sheng.pdf)
## RE-Mind: a First Look Inside the Mind of a Reverse Engineer.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#re-mind-a-first-look-inside-the-mind-of-a-reverse-engineer) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#re-mind-a-first-look-inside-the-mind-of-a-reverse-engineer)**
### 作者
* Aless, EURECOM
* ro Mantovani, EURECOM
* Simone Aonzo, EURECOM
* Yanick Fratantonio, Cisco Talos
* Davide Balzarotti, EURECOM
### 摘要
> 当一个人类活动需要大量专业知识和非常专门化的认知技能，这些技能被一般人所理解得很少时，通常被认为是“艺术”。安全领域中的不同活动都属于这个范畴，比如利用、黑客攻击，以及本文的重点：二进制逆向工程(RE)。
> 
> 
> 
> 
> 
> 
> 
> 然而，虽然许多领域的专家（从国际象棋选手到计算机程序员）已经被科学家研究以了解他们的心理模型并捕捉其行为上的特殊之处，对于理解二进制代码和解决逆向工程难题的“艺术”而言，至今仍然是一个黑匣子。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们通过对72名参与者在对两个未知二进制文件进行逆向工程活动的16,325分钟的数据进行探索性分析，来衡量专家和初学者逆向工程师在处理x86(反)汇编代码的分析时所采用的不同策略，这是一种典型的静态逆向工程任务。参与者包括39名新手和33名专家。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mantovani](https://www.usenix.org/conference/usenixsecurity22/presentation/mantovani)
- **PDF:** [https://www.usenix.org/system/files/sec22-mantovani.pdf](https://www.usenix.org/system/files/sec22-mantovani.pdf)
## Characterizing the Security of Github CI Workflows.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#characterizing-the-security-of-github-ci-workflows) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#characterizing-the-security-of-github-ci-workflows)**
### 作者
* Igibek Koishybayev, North Carolina State University
* Aleks, North Carolina State University
* r Nahapetyan, North Carolina State University
* Raima Zachariah, Independent Researcher
* Siddharth Muralee, Purdue University
* Bradley Reaves, North Carolina State University
* Alex, North Carolina State University
* ros Kapravelos, North Carolina State University
* Aravind Machiry, Purdue University
### 摘要
> 持续集成与部署（CI/CD）已经彻底改变了软件开发和维护的方式。商业化的CI/CD平台提供了指定和运行CI/CD操作的服务。然而，考虑到它们对机密信息、基础设施的特权访问以及拉取和执行任意代码的能力，它们本身也存在安全风险。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们研究了新近流行的GitHub CI平台的安全性。我们首先确定了任何CI/CD系统都必须具备的四个基本安全属性：准入控制、执行控制、代码控制和访问机密信息。然后，我们比较GitHub CI与其他五个流行的CI/CD平台是否强制执行了这些属性。我们对213,854个GitHub仓库中的447,238个工作流进行了全面分析。我们做出了一些令人不安的观察。我们的分析显示，99.8%的工作流权限过高，并且对仓库具有读写访问权限（而不是只读）。此外，23.7%的工作流可以被pull_request触发，并使用基础仓库中的代码。攻击者可以利用这些工作流，并作为工作流的一部分执行任意代码。由于工作流的模块化特性，我们发现我们的数据集中99.7%的仓库执行来自外部开发的名为"Actions"的插件，用于各种目的。我们发现，97%的仓库执行了至少一个非经过验证的创建者的Action，而我们的数据集中18%的仓库执行了至少一个存在安全更新缺失的Action。这些都是可能被利用的攻击向量，可以用来威胁工作流的执行，进而导致供应链攻击。这项工作凸显了类似GitHub CI的CI/CD平台中固有的系统风险；我们还提出了我们自己的Github action，GWChecker，它可以作为一个早期的警示系统，检测违反了已确定的安全属性的不良实践。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/koishybayev](https://www.usenix.org/conference/usenixsecurity22/presentation/koishybayev)
- **PDF:** [https://www.usenix.org/system/files/sec22-koishybayev.pdf](https://www.usenix.org/system/files/sec22-koishybayev.pdf)
## Decomperson: How Humans Decompile and What We Can Learn From It.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#decomperson-how-humans-decompile-and-what-we-can-learn-from-it) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#decomperson-how-humans-decompile-and-what-we-can-learn-from-it)**
### 作者
* Kevin Burk, UC Santa Barbara
* Fabio Pagani, UC Santa Barbara
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
### 摘要
> 人类分析师必须对二进制程序进行逆向工程，作为许多安全任务的先决条件，例如漏洞分析、恶意软件检测和固件迁移。现有的对人类逆向工程师及其遵循的过程的研究规模有限，并且经常使用需要主观评估的定性度量标准。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们将二进制程序的逆向工程问题重新定义为完美反汇编问题，即从二进制程序中恢复出源代码，经过编译后产生与原始二进制代码完全相同的过程。这为我们提供了一个量化的理解度量，并让我们能够以编程方式考察逆向工程过程。
> 
> 
> 
> 
> 
> 
> 
> 我们开发了一个名为“Decomperson”的工具，支持一组逆向工程师参加一个大规模的安全竞赛，旨在收集参与者逆向工程过程的信息，并明确定义完美反汇编的目标。超过150人参加了比赛，我们收集到了超过35,000份代码提交，这是迄今为止最大规模的人工逆向工程数据集。其中包括了300多个成功的完美反汇编尝试的快照。在本文中，我们展示了完美反汇编如何允许对这样大规模数据集进行编程分析，从而提供了对逆向工程过程的新洞察。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/burk](https://www.usenix.org/conference/usenixsecurity22/presentation/burk)
- **PDF:** [https://www.usenix.org/system/files/sec22-burk.pdf](https://www.usenix.org/system/files/sec22-burk.pdf)
## 99% False Positives: A Qualitative Study of SOC Analysts' Perspectives on Security Alarms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#99-false-positives-a-qualitative-study-of-soc-analysts-perspectives-on-security-alarms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#99-false-positives-a-qualitative-study-of-soc-analysts-perspectives-on-security-alarms)**
### 作者
* Bushra A. Alahmadi, University of Oxford
* Louise Axon, University of Oxford
* Ivan Martinovic, University of Oxford
### 摘要
> 在这项工作中，我们关注安全工具产生的误报（False Positive, FP）警报的普及程度，以及安全运营中心（Security Operation Centers, SOCs）从业人员对其质量的认知。我们通过在线调查与在SOCs工作的安全从业人员（n = 20）合作，从业人员确认了所使用工具的高FP率，需要人工验证。基于这些发现，我们进行了更广泛、以发现为导向的定性调查，与安全从业人员（n = 21）讨论了安全工具的限制，特别是其警报的质量和有效性。我们的结果表明，尽管FP的数量被认为很大，但大多数都归因于良性触发器---在组织的环境中通过合法行为解释的真实警报，分析师可以选择忽略。为了正确评估安全工具的适用性和性能，厂商和研究人员有能力区分FP的类型非常关键。警报验证是一项繁琐的任务，可能导致警报过多而最终麻木不仁。因此，我们调查了SOCs中的警报验证过程，识别可能影响该过程结果的因素。为了提高安全警报的质量，我们确定了五个属性（可靠、可解释、分析能力强、上下文相关、可转移）来促进对警报的有效和快速验证。将这些要求纳入未来的工具中，不仅可以减少警报过多导致的疲劳，还可以通过生成可解释和有意义的警报来改进SOC分析师的决策过程，从而促使及时反应。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/alahmadi](https://www.usenix.org/conference/usenixsecurity22/presentation/alahmadi)
- **PDF:** [https://www.usenix.org/system/files/sec22-alahmadi.pdf](https://www.usenix.org/system/files/sec22-alahmadi.pdf)
## HyperDegrade: From GHz to MHz Effective CPU Frequencies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hyperdegrade-from-ghz-to-mhz-effective-cpu-frequencies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hyperdegrade-from-ghz-to-mhz-effective-cpu-frequencies)**
### 作者
* Alej, Tampere University
* ro Cabrera Aldaya, Tampere University
* Billy Bob Brumley, Tampere University
### 摘要
> 性能退化技术是侧信道攻击的重要补充。在这项工作中，我们提出了HYPERDEGRADE——一种将以往方法与同时多线程（SMT）架构结合的方法。除了这项新技术，我们还通过缓存驱逐来研究性能退化的根本原因，发现了一个以前未知的减速来源。所产生的减速比以前的方法显著更高，这意味着在FLUSH+RELOAD攻击中的时间粒度更大。我们在不同的英特尔微架构上评估了HYPERDEGRADE，获得了显著的减速，在选择的微基准测试案例中，比当前最先进的方法提高了三个数量级。为了评估性能退化在侧信道放大中的有效性，我们提出并评估了泄漏评估指标。结果表明，HYPERDEGRADE增加了时间粒度，而对追踪质量没有显著影响。此外，我们设计了一个公平的实验，从攻击者的角度比较了三种性能退化策略与FLUSH+RELOAD的耦合。我们利用HYPERDEGRADE对OpenSSL中的一个未被利用的漏洞进行了攻击，在某些情况下，将所需的FLUSH+RELOAD追踪数量减少了三倍。关于密码学的贡献，我们重新访问了最近关于TLS-DH密钥交换的Raccoon攻击，并展示了它在其他协议中的应用。利用HYPERDEGRADE，我们开发了一个端到端攻击，展示了类似Raccoon攻击如何在真实数据中成功，填补了以前研究中的一个空白。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/aldaya](https://www.usenix.org/conference/usenixsecurity22/presentation/aldaya)
- **PDF:** [https://www.usenix.org/system/files/sec22-aldaya.pdf](https://www.usenix.org/system/files/sec22-aldaya.pdf)
## Pacer: Comprehensive Network Side-Channel Mitigation in the Cloud.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pacer-comprehensive-network-side-channel-mitigation-in-the-cloud) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pacer-comprehensive-network-side-channel-mitigation-in-the-cloud)**
### 作者
* Aastha Mehta, University of British Columbia (UBC)
* Mohamed Alzayat, Max Planck Institute for Software Systems (MPI-SWS)
* Roberta De Viti, Max Planck Institute for Software Systems (MPI-SWS)
* Björn B. Br, Max Planck Institute for Software Systems (MPI-SWS)
* enburg, Max Planck Institute for Software Systems (MPI-SWS)
* Peter Druschel, Max Planck Institute for Software Systems (MPI-SWS)
* Deepak Garg, Max Planck Institute for Software Systems (MPI-SWS)
### 摘要
> 网络侧信道（NSCs）通过封包的时序和封包大小泄露机密信息。这在公共IaaS云中尤其引起关注，因为任何租户都可能共存并间接观察受害者的流量形状。我们提出了Pacer，这是公共IaaS云端到端消除NSC泄露的第一个系统。它基于有原则的技术，即在客户端之外塑造客户流量，使流量的形状与机密信息无关。然而，Pacer还解决了之前的工作中没有考虑的重要问题 - 它防止内部侧信道泄露影响到改变形状的流量，并且尊重网络流量控制、拥塞控制和丢失恢复信号。Pacer被实现为主机超级监视器的一种半虚拟化扩展，对超级监视器和客户端内核需要进行适度改变，应用程序需要进行可选的、最小的修改。我们介绍了Pacer的关键抽象——伪装隧道，描述了它的设计和实现，并通过实验评估表明，Pacer对带宽、客户端延迟和服务器吞吐量产生适度的开销，同时阻止了使用最先进的CNN分类器进行的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mehta](https://www.usenix.org/conference/usenixsecurity22/presentation/mehta)
- **PDF:** [https://www.usenix.org/system/files/sec22-mehta.pdf](https://www.usenix.org/system/files/sec22-mehta.pdf)
## Composable Cachelets: Protecting Enclaves from Cache Side-Channel Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#composable-cachelets-protecting-enclaves-from-cache-side-channel-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#composable-cachelets-protecting-enclaves-from-cache-side-channel-attacks)**
### 作者
* Daniel Townley, Peraton Labs
* Kerem Arıkan, Binghamton University
* Yu David Liu, Binghamton University
* Dmitry Ponomarev, Binghamton University
* Oğuz Ergin, TOBB University of Economics and Technology
### 摘要
> 隔离执行架构（如Intel SGX）的安全性最近受到侧信道攻击的严重威胁。缓存侧信道攻击使敌对方能够在没有直接访问隔离飞地内存的情况下泄露存储在其中的秘密。在某些情况下，即使没有对受害者应用程序代码或操作系统级特权的了解，也可以泄露秘密。我们提出了可组合缓存块（CC）的概念，这是一种新的可扩展策略，用于动态分割最后一级缓存（LLC），完全将飞地与其他应用程序和彼此隔离开来。CC支持在具有动态调整缓存容量的缓存中对飞地进行隔离，以便在创建和销毁飞地时进行调整。我们提出了一种缓存感知且飞地感知的操作语义，帮助严格建立CC的安全性属性，并通过实验证明CC能够有效防止对缓存的侧信道攻击，并对性能和复杂性影响较小。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/townley](https://www.usenix.org/conference/usenixsecurity22/presentation/townley)
- **PDF:** [https://www.usenix.org/system/files/sec22-townley.pdf](https://www.usenix.org/system/files/sec22-townley.pdf)
## Don't Mesh Around: Side-Channel Attacks and Mitigations on Mesh Interconnects.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dont-mesh-around-side-channel-attacks-and-mitigations-on-mesh-interconnects) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dont-mesh-around-side-channel-attacks-and-mitigations-on-mesh-interconnects)**
### 作者
* Miles Dai, MIT
* Riccardo Paccagnella, University of Illinois at Urbana-Champaign
* Miguel Gomez-Garcia, MIT
* John McCalpin, Texas Advanced Computing Center
* Mengjia Yan, MIT
### 摘要
> 本文研究了现代服务器级别的Intel处理器中使用的芯片内部互连的微体系结构侧信道攻击和缓解方法。我们发现，虽然很难利用，但即使在核心和高速缓存内部已关闭已知攻击向量的情况下，对手仍然可以滥用互连来进行攻击。然后，我们提出了新颖的、非侵入性的缓解机制，以防止互连侧信道攻击，并提供指导未来防御设计的见解。
> 
> 
> 
> 
> 
> 
> 
> 我们的分析首先通过彻底地逆向工程互连来揭示其易受争用条件，这是第一次这样做。我们展示了攻击者可以利用这些条件建立一个容量超过1.5 Mbps的跨核心隐蔽信道。然后，我们通过监控互连争用来演示从易受攻击的加密实现中泄露密钥的侧信道攻击的可行性。最后，我们提出了一个分析模型来量化芯片上不同受害者和攻击者位置的易受攻击程度，并利用结果设计了一个仅使用软件的缓解机制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dai](https://www.usenix.org/conference/usenixsecurity22/presentation/dai)
- **PDF:** [https://www.usenix.org/system/files/sec22-dai.pdf](https://www.usenix.org/system/files/sec22-dai.pdf)
## WebGraph: Capturing Advertising and Tracking Information Flows for Robust Blocking.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#webgraph-capturing-advertising-and-tracking-information-flows-for-robust-blocking) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#webgraph-capturing-advertising-and-tracking-information-flows-for-robust-blocking)**
### 作者
* S, EPFL
* ra Siby, EPFL
* Umar Iqbal, University of Iowa
* Steven Englehardt, DuckDuckGo
* Zubair Shafiq, UC Davis
* Carmela Troncoso, EPFL
### 摘要
> 用户依赖广告和跟踪拦截工具来保护他们的隐私。不幸的是，现有的广告和跟踪拦截工具容易受到可变广告和跟踪内容的影响。在本文中，我们首先证明了一种最先进的广告和跟踪拦截器AdGraph容易受到当前在网络上使用的对抗规避技术的攻击。其次，我们介绍了WebGraph，这是第一个基于机器学习的广告和跟踪拦截器，它基于广告和跟踪行为而不是内容来检测广告和跟踪。通过对与广告和跟踪信息流相关的行为进行特征化，例如在浏览器中存储标识符或与另一个跟踪器共享标识符，WebGraph的性能几乎与先前的方法相当好，但对于对抗性规避更加鲁棒。特别是，我们展示了WebGraph在精度方面与AdGraph相当，同时将对手的成功率从AdGraph几乎完美降低到WebGraph的约8%。最后，我们展示了WebGraph对于使用超越当前网络上已部署的对抗性规避技术的复杂对手也具有鲁棒性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/siby](https://www.usenix.org/conference/usenixsecurity22/presentation/siby)
- **PDF:** [https://www.usenix.org/system/files/sec22-siby.pdf](https://www.usenix.org/system/files/sec22-siby.pdf)
## Automating Cookie Consent and GDPR Violation Detection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automating-cookie-consent-and-gdpr-violation-detection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automating-cookie-consent-and-gdpr-violation-detection)**
### 作者
* Dino Bollinger, ETH Zurich
* Karel Kubicek, ETH Zurich
* Carlos Cotrini, ETH Zurich
* David Basin, ETH Zurich
### 摘要
> 欧洲联盟的《通用数据保护条例》（GDPR）要求网站告知用户有关个人数据收集并请求对Cookie的同意。然而，大多数网站不给用户任何选择，而其他网站则试图欺骗用户接受所有的Cookie。我们通过对近30,000个网站的Cookie横幅进行潜在GDPR违规分析来证明了这种情况的严重性。我们确定了六种新的违规类型，例如错误的分类分配和误导性过期时间，并发现在分析的网站中至少有一种潜在违规行为的比例高达94.7%。
> 
> 
> 
> 
> 
> 
> 
> 我们通过赋予用户保护个人隐私的权力来解决这个问题。我们开发了一款名为CookieBlock的浏览器扩展程序，利用机器学习来在客户端强制执行GDPR的Cookie同意。它仅使用Cookie本身提供的信息自动对Cookie进行使用目的分类。在平均验证准确率为84.4%的情况下，我们的模型达到了与该领域专业知识相媲美的预测质量。此外，我们的方法不像以前的工作那样依赖于网站自身的合作。我们在一组随机抽取的100个网站上对CookieBlock进行了实证评估，在不显著影响网站功能的情况下，它过滤掉了约90%的侵犯隐私的Cookie。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bollinger](https://www.usenix.org/conference/usenixsecurity22/presentation/bollinger)
- **PDF:** [https://www.usenix.org/system/files/sec22-bollinger.pdf](https://www.usenix.org/system/files/sec22-bollinger.pdf)
## Khaleesi: Breaker of Advertising and Tracking Request Chains.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#khaleesi-breaker-of-advertising-and-tracking-request-chains) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#khaleesi-breaker-of-advertising-and-tracking-request-chains)**
### 作者
* Umar Iqbal, University of Washington
* Charlie Wolfe, University of Iowa
* Charles Nguyen, University of California, Davis
* Steven Englehardt, DuckDuckGo
* Zubair Shafiq, University of California, Davis
### 摘要
> 请求链正在被广告商和追踪器用于信息共享和绕过最近引入的网络浏览器隐私保护。关于减轻广告商和追踪器对请求链的不断滥用方面，之前的研究工作很少。现有的广告和追踪器阻止方法缺乏必要的上下文来有效检测广告和追踪请求链。我们提出了Khaleesi，一种机器学习方法，能够捕捉到有效检测广告和追踪请求链所需的基本顺序上下文。我们展示了Khaleesi实现了高准确性，持续性良好，并且在对抗尝试方面通常具有鲁棒性，并且胜过现有方法。我们还展示了Khaleesi适用于在线部署，并且能够改善页面加载性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/iqbal](https://www.usenix.org/conference/usenixsecurity22/presentation/iqbal)
- **PDF:** [https://www.usenix.org/system/files/sec22-iqbal.pdf](https://www.usenix.org/system/files/sec22-iqbal.pdf)
## Practical Data Access Minimization in Trigger-Action Platforms.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#practical-data-access-minimization-in-trigger-action-platforms) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#practical-data-access-minimization-in-trigger-action-platforms)**
### 作者
* Yunang Chen, University of Wisconsin–Madison
* Mohannad Alhanahnah, University of Wisconsin–Madison
* Andrei Sabelfeld, Chalmers University of Technology
* Rahul Chatterjee, University of Wisconsin–Madison
* Earlence Fern, University of Wisconsin–Madison
* es, University of Wisconsin–Madison
### 摘要
> 触发-操作平台（TAPs）连接不同的在线服务，并使用户能够在智能家居和商业生产力等各个领域创建自动化规则。不幸的是，从隐私的角度来看，当前TAPs的设计存在缺陷，允许对敏感用户数据进行无限制访问。我们指出它存在两种过度赋权问题：（1）属性级别，其中它可以访问比运行用户创建规则所需更多的数据属性；（2）令牌级别，其中它可以访问比其所需的API更多。为了缓解过度赋权和随后的隐私问题，我们设计和实施了minTAP，这是一种在TAPs中实现数据访问最小化的实用方法。我们的关键洞察力是用户创建的自动化规则的语义隐含地指定了它所需的最小数据量。这使得minTAP可以利用基于语言的数据最小化方法，通过仅向TAPs发布用户数据的必要属性并防止无关的API访问，应用最小权限原则。通过对流行的IFTTT TAP上的真实用户创建规则进行实验，我们证明minTAP可以在每个规则中清理平均4个敏感的数据属性，而且性能开销适中，无需修改IFTTT。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-practical](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yunang-practical)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yunang-practical.pdf](https://www.usenix.org/system/files/sec22-chen-yunang-practical.pdf)
## Shuffle-based Private Set Union: Faster and More Secure.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#shuffle-based-private-set-union-faster-and-more-secure) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#shuffle-based-private-set-union-faster-and-more-secure)**
### 作者
* Yanxue Jia, Shanghai Jiao Tong University
* Shi-Feng Sun, Shanghai Jiao Tong University
* Hong-Sheng Zhou, Virginia Commonwealth University
* Jiajun Du, Shanghai Jiao Tong University
* Dawu Gu, Shanghai Jiao Tong University
### 摘要
> 私有集合联合（PSU）允许两个参与者，发送者和接收者，在不透露任何比结果更多的信息的情况下计算它们输入数据集的并集。虽然它在实际应用中已经找到了许多应用，但迄今为止，还没有进行过太多的研究，尤其是针对大型数据集的研究。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们以洗牌技术作为设计PSU协议的关键。通过对接收者的集合进行洗牌，我们首次提出了第一个协议，称为ΠR PSU，它消除了以前工作中的昂贵操作，如加性同态加密和对接收者集合的重复操作。它在效率和安全性方面都优于Kolesnikov等人（ASIACRYPT 2019）的最新设计；在我们的设计中，可以避免Kolesnikov等人设计中的不必要的泄露。
> 
> 
> 
> 
> 
> 
> 
> 我们进一步将调查扩展到两个参与者可能持有不平衡输入数据集的应用场景中。通过对发送者的数据集进行洗牌，我们提出了第二个协议ΠS PSU。这个设计可以被视为我们第一个协议的双重版本，并且适用于发送者输入大小远小于接收者的情况。
> 
> 
> 
> 
> 
> 
> 
> 最后，我们在C++上使用大型数据集实现了我们的协议ΠR PSU和ΠS PSU，并进行了全面的可扩展性和并行性评估。结果表明，我们的设计在WAN/LAN设置下，单个线程上与Kolesnikov等人的最新设计相比可以获得4-5倍的改进。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jia](https://www.usenix.org/conference/usenixsecurity22/presentation/jia)
- **PDF:** [https://www.usenix.org/system/files/sec22-jia.pdf](https://www.usenix.org/system/files/sec22-jia.pdf)
## Polynomial Commitment with a One-to-Many Prover and Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#polynomial-commitment-with-a-one-to-many-prover-and-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#polynomial-commitment-with-a-one-to-many-prover-and-applications)**
### 作者
* Jiaheng Zhang, UC Berkeley
* Tiancheng Xie, UC Berkeley
* Thang Hoang, Virginia Tech
* Elaine Shi, CMU
* Yupeng Zhang, Texas A&M University
### 摘要
> 可验证秘密分享（VSS）是一种基础的加密原语，是多方计算和去中心化区块链应用中的基本构建模块。构建VSS的最实用方式之一是通过多项式承诺，其中经销商承诺一个随机多项式，其零阶系数编码了要共享的秘密，并证明了承诺多项式在每个N个验证者的不同点上的评估，即多项式承诺以“一对多”的方式使用。
> 
> 
> 
> 
> 
> 
> 
> 最近的Tomescu等人的工作（IEEE S＆P 2020）首次考虑了具有“一对多证明者批处理”的多项式承诺，以便证明者可以以Oe（1）证明的代价证明N个不同点的评估。然而，他们的方案并不是最优的，需要可信的设置。
> 
> 
> 
> 
> 
> 
> 
> 本文在渐近意义上改进了具有一对多证明者批处理的多项式承诺。我们提出了两种新颖的方案。首先，我们提出了一种在可信设置环境中在所有维度上具有最优渐近性能的方案。其次，我们是第一个考虑透明多项式承诺一对多证明者批处理的人，并提出了一种透明方案，其性能接近于可信设置环境中最佳方案。
> 
> 
> 
> 
> 
> 
> 
> 我们实施了我们的方案并评估了它们的性能。我们的可信设置方案将证明大小提高了20倍，并将验证者时间提高了7.8倍，适用于2 21个参与方，而证明者时间只有轻微的额外开销。我们的透明多项式承诺消除了可信设置，并将证明者时间进一步提高了2.3倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-jiaheng](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-jiaheng)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-jiaheng.pdf](https://www.usenix.org/system/files/sec22-zhang-jiaheng.pdf)
## ppSAT: Towards Two-Party Private SAT Solving.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ppsat-towards-two-party-private-sat-solving) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ppsat-towards-two-party-private-sat-solving)**
### 作者
* Ning Luo, Yale University
* Samuel Judson, Yale University
* Timos Antonopoulos, Yale University
* Ruzica Piskac, Yale University
* Xiao Wang, Northwestern University
### 摘要
> 我们设计并实现了一个隐私保护的布尔可满足性（ppSAT）求解器，允许相互不信任的各方在保持隐私的同时评估其输入公式的合取。首先，我们定义了一组与SAT求解的（已知的）指数复杂性一致的安全保障，并构建了经典DPLL算法的遗忘变体，该算法可以与现有的安全两方计算（2PC）技术集成。我们进一步观察到，大多数已知的SAT求解启发式方法不适用于2PC，因为它们高度依赖数据以最小化探索步骤的数量。面对如何在步骤数量和隐蔽地执行每个步骤的成本之间找到最佳平衡的问题，我们设计了三种高效的遗忘式启发式方法，其中一种是确定性的，另外两种是随机的。通过这项努力，我们能够在生物信息学中haplotype推断问题中产生的小而实际的实例上评估我们的ppSAT求解器。最后，我们展望了使ppSAT求解更加实用的未来方向，特别是冲突驱动公式学习（CDCL）的集成。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/luo](https://www.usenix.org/conference/usenixsecurity22/presentation/luo)
- **PDF:** [https://www.usenix.org/system/files/sec22-luo.pdf](https://www.usenix.org/system/files/sec22-luo.pdf)
## Hyperproofs: Aggregating and Maintaining Proofs in Vector Commitments.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hyperproofs-aggregating-and-maintaining-proofs-in-vector-commitments) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hyperproofs-aggregating-and-maintaining-proofs-in-vector-commitments)**
### 作者
* Shravan Srinivasan, University of Maryland
* Alex, Ergo Platform
* er Chepurnoy, Ergo Platform
* Charalampos Papamanthou, Yale University
* Alin Tomescu, VMware Research
* Yupeng Zhang, Texas A&M University
### 摘要
> 我们介绍了Hyperproofs，这是第一个高效可维护和可聚合的向量承诺（VC）方案。与Merkle证明类似，我们的证明构成了一颗树，这棵树可以高效地维护：在单个叶子节点变化后，更新树中的所有n个证明仅需要O(logn)的时间。重要的是，与Merkle证明不同，Hyperproofs可以高效聚合，聚合Merkle证明的基于SNARK的方法比之快10倍到41倍。同时，单个Hyperproof仅包含logn个代数哈希（例如32字节的椭圆曲线点），聚合b个这样的证明仅有O(log(blogn))大小。与使用SNARK友好哈希函数的Merkle树相比，Hyperproofs更新速度也相当快。
> 
> 
> 
> 
> 
> 
> 
> 作为对Merkle树的另一个优势，Hyperproofs是同态的：两个向量的摘要（和证明）可以同态地合并成它们求和的摘要（和证明）。同态性在新兴应用中非常有用，比如无状态加密货币。首先，它实现了防盗窃性，这是一种鼓励证明计算的新颖特性。其次，它使得摘要和证明的更新更加方便。
> 
> 
> 
> 
> 
> 
> 
> 最后，Hyperproofs有一些限制：它们不是透明的，具有线性大小的公共参数，验证速度较慢，并且聚合证明较大，验证速度较慢，比基于SNARK的方法更慢。尽管如此，Hyperproofs的端到端聚合和验证速度比基于SNARK的Merkle树快10倍到41倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/srinivasan](https://www.usenix.org/conference/usenixsecurity22/presentation/srinivasan)
- **PDF:** [https://www.usenix.org/system/files/sec22-srinivasan.pdf](https://www.usenix.org/system/files/sec22-srinivasan.pdf)
## COMRace: Detecting Data Race Vulnerabilities in COM Objects.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#comrace-detecting-data-race-vulnerabilities-in-com-objects) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#comrace-detecting-data-race-vulnerabilities-in-com-objects)**
### 作者
* Fangming Gu, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Qingli Guo, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Lian Li, Institute of Computing Technology, Chinese Academy of Sciences and School of Computer Science and Technology, University of Chinese Academy of Sciences
* Zhiniang Peng, Sangfor Technologies Inc and Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences
* Wei Lin, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Xiaobo Yang, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
* Xiaorui Gong, Institute of Information Engineering, Chinese Academy of Sciences and School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> Microsoft组件对象模型(COM)是许多关键微软技术的基础，我们开发了COMRace，这是第一个用于商业现成COM对象的数据竞争漏洞检测工具。COMRace针对COM线程模型中的一个严重但之前被忽视的缺陷，该缺陷使得COM对象容易受到数据竞争攻击。在COMRace中，我们应用静态二进制分析来识别现成COM二进制文件中的线程不安全接口方法，然后通过自动合成的概念验证攻击(Proof-of-Concept，简称PoC)来进一步验证二进制分析的结果。我们已经将COMRace应用于Windows平台上的10,420个注册的COM对象，该工具报告了186个易受攻击的接口方法。COMRace自动合成了234个PoC，用于256个选择的方法对(82个不安全方法)的冲突访问，并且有194个PoC触发了竞争条件。此外，145个PoC导致了关键内存损坏，暴露了26个在Common Vulnerabilities and Exposures (CVE)数据库中确认的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gu-fangming](https://www.usenix.org/conference/usenixsecurity22/presentation/gu-fangming)
- **PDF:** [https://www.usenix.org/system/files/sec22-gu-fangming.pdf](https://www.usenix.org/system/files/sec22-gu-fangming.pdf)
## MOVERY: A Precise Approach for Modified Vulnerable Code Clone Discovery from Modified Open-Source Software Components.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#movery-a-precise-approach-for-modified-vulnerable-code-clone-discovery-from-modified-open-source-software-components) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#movery-a-precise-approach-for-modified-vulnerable-code-clone-discovery-from-modified-open-source-software-components)**
### 作者
* Seunghoon Woo, Korea University
* Hyunji Hong, Korea University
* Eunjin Choi, Korea University
* Heejo Lee, Korea University
### 摘要
> 在此论文中，我们提出了一种名为MOVERY的精确方法，用于发现修改后的开源软件组件中的易受攻击的代码克隆（VCCs）。由于开源软件的修改，特别是OSS的内部修改（例如OSS更新）和外部修改（例如在OSS重用期间发生的代码更改），传播的易受攻击的代码存在各种不同的代码语法，因此发现这些被传播的易受攻击的代码是具有挑战性的。
> 
> 
> 
> 
> 
> 
> 
> 通过考虑最旧的易受攻击函数，并仅从安全补丁中提取关键易受攻击和修补代码行，MOVERY生成能够有效解决OSS修改的易受攻击和修补签名。为了可扩展性，MOVERY通过仅关注从其他OSS项目中借用的代码来减少目标软件的搜索空间。最后，当函数与易受攻击签名匹配且与修补签名不同的时候，MOVERY确定该函数为VCC。
> 
> 
> 
> 
> 
> 
> 
> 当我们将MOVERY应用于从不同领域选取的十个流行软件上时，我们观察到91%的发现的VCCs与公开的易受攻击函数具有不同的代码语法。尽管如此，MOVERY发现的VCCs数量至少是现有技术发现的2.5倍以上，且准确性更高：MOVERY发现了415个VCCs，准确率和召回率均为96%，而两种最近的VCC发现技术仅发现了163个和72个VCCs，准确率最多为77%，召回率为38%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/woo](https://www.usenix.org/conference/usenixsecurity22/presentation/woo)
- **PDF:** [https://www.usenix.org/system/files/sec22-woo.pdf](https://www.usenix.org/system/files/sec22-woo.pdf)
## Loki: Hardening Code Obfuscation Against Automated Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#loki-hardening-code-obfuscation-against-automated-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#loki-hardening-code-obfuscation-against-automated-attacks)**
### 作者
* Moritz Schloegel, Ruhr-Universität Bochum
* Tim Blazytko, Ruhr-Universität Bochum
* Moritz Contag, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Julius Basler, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Ali Abbasi, Ruhr-Universität Bochum
### 摘要
> 软件混淆是一项至关重要的技术，用于保护知识产权和管理数字权利。尽管在实践中非常重要，但商业和学术领域的最先进混淆方法都容易受到各种自动解混淆攻击的影响，例如符号执行、污点分析或程序综合。尽管最近提出了一些增强的混淆技术来防止污点分析或符号执行，但它们要么会产生严重的运行时开销，要么可以通过自动化方式（例如编译器优化）移除。一般来说，这些技术往往只针对单一的攻击向量，导致攻击者可以切换到其他更有效的技术，例如程序综合。在这项工作中，我们提出了Loki，一种能够抵御所有已知自动解混淆攻击的软件混淆方法。为此，我们使用并有效地结合了多种技术，包括一种用于综合任意复杂度正式验证表达式的通用方法。与依赖少量硬编码生成规则的最先进方法不同，我们的表达式更加多样化，更难以匹配。我们展示了即使在混合布尔算术（Mixed-Boolean Arithmetic，MBA）解混淆的最新方法中，Loki也无法简化它们。此外，Loki还能够防御之前未被注意的攻击向量，如程序综合，其成功率仅为19%。在全面评估中，我们展示了我们的设计具有更小的开销，同时提供比现有作品更强大的保护水平。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/schloegel](https://www.usenix.org/conference/usenixsecurity22/presentation/schloegel)
- **PDF:** [https://www.usenix.org/system/files/sec22-schloegel.pdf](https://www.usenix.org/system/files/sec22-schloegel.pdf)
## Oops... Code Execution and Content Spoofing: The First Comprehensive Analysis of OpenDocument Signatures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#oops-code-execution-and-content-spoofing-the-first-comprehensive-analysis-of-opendocument-signatures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#oops-code-execution-and-content-spoofing-the-first-comprehensive-analysis-of-opendocument-signatures)**
### 作者
* Simon Rohlmann, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> OpenDocument是互操作办公文档的主要标准之一。由Apache OpenOffice、LibreOffice和Microsoft Office等办公套件支持，OpenDocument格式（ODF）适用于所有主要桌面和移动操作系统上的文本处理，电子表格和演示文稿。
> 
> 
> 
> 
> 
> 
> 
> 当涉及到政府和业务用例时，OpenDocument签名可以保护文档内容的完整性，例如对于合同、修正案或账单。此外，OpenDocument签名也保护文档的宏。由于文档中使用宏的风险是众所周知的，现代办公应用程序只有在受信任实体签署宏代码后才启用其执行。因此，ODF文档的安全性通常取决于正确的签名验证。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们对OpenDocument签名进行了首次全面分析，并揭示了许多严重威胁。我们发现了五种新的攻击方式，并在Windows、macOS、Linux、iOS、Android和两个在线服务上对16个办公应用程序进行了评估。我们的调查发现，尽管只有由受信任实体签署的宏代码才能被执行，但有12个应用程序存在宏代码执行的漏洞。对于18个应用程序中的17个，我们能够在签名有效和可信的情况下伪造签名ODF文档中的内容。最后，我们证明攻击者可以在16个应用程序中更改和伪造签名创建时间，只要他们拥有一个签名的ODF。
> 
> 
> 
> 
> 
> 
> 
> 我们的研究得到了Microsoft、Apache OpenOffice和LibreOffice在协同披露期间的认可。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/rohlmann](https://www.usenix.org/conference/usenixsecurity22/presentation/rohlmann)
- **PDF:** [https://www.usenix.org/system/files/sec22-rohlmann.pdf](https://www.usenix.org/system/files/sec22-rohlmann.pdf)
## Playing Without Paying: Detecting Vulnerable Payment Verification in Native Binaries of Unity Mobile Games.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#playing-without-paying-detecting-vulnerable-payment-verification-in-native-binaries-of-unity-mobile-games) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#playing-without-paying-detecting-vulnerable-payment-verification-in-native-binaries-of-unity-mobile-games)**
### 作者
* Chaoshun Zuo, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> 现代移动游戏通常包含应用内购买（IAP），供玩家购买虚拟货币、装备或额外移动次数等数字物品。理论上，应该安全地实施IAP；但实践中我们发现许多游戏开发者没有这样做，特别是通过错误地放置支付验证的信任，例如局部验证支付交易或根本不使用任何验证，导致了漏洞，使得可以不付费进行游戏。本文介绍了PAYMENTSCOPE，一种静态二进制分析工具，用于自动识别移动游戏中易受攻击的IAP实现。通过使用提供的API对其IAP协议进行建模，并使用基于支付的数据流分析，PAYMENTSCOPE可以直接找出游戏本机二进制中存在的不受信任的支付验证漏洞。我们已经在二进制分析框架Ghidra的基础上实施了PAYMENTSCOPE，并在39,121个Unity（最流行的游戏引擎）移动游戏上进行了测试，PAYMENTSCOPE已经识别出8,954个（占22.89%）易受攻击的游戏。其中，8,233个游戏没有验证支付交易的有效性，721个游戏仅在本地验证交易。我们已向易受攻击游戏的开发者披露了这些漏洞，并且其中许多人已经承认了我们的发现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zuo](https://www.usenix.org/conference/usenixsecurity22/presentation/zuo)
- **PDF:** [https://www.usenix.org/system/files/sec22-zuo.pdf](https://www.usenix.org/system/files/sec22-zuo.pdf)
## Repurposing Segmentation as a Practical LVI-NULL Mitigation in SGX.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#repurposing-segmentation-as-a-practical-lvi-null-mitigation-in-sgx) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#repurposing-segmentation-as-a-practical-lvi-null-mitigation-in-sgx)**
### 作者
* Lukas Giner, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Claudio Canella, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Daniel Gruss, Graz University of Technology
### 摘要
> 加载值注入（LVI）在Spectre样式的困惑代理攻击中利用了Meltdown类型的数据流。已经在Intel SGX封闭环境中演示了LVI的实际攻击，因此采取了消耗巨大的防御措施，其开销为2至19倍。然而，我们发现，在固定硬件上仍然存在LVI-NULL泄露。因此，为了在LVI-fixed CPU上减轻SGX封闭环境中的LVI-NULL问题，仍然需要昂贵的防御措施。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种针对SGX中LVI-NULL的轻量级防御措施，称为LVI-NULLify。我们系统地分析和分类LVI-NULL的变体。我们的分析显示，先前提出的针对LVI-NULL的防御措施是无效的。我们的新型防御措施通过重新使用分段机制来解决这个问题，该机制是x86已经用于每个内存操作的快速传统硬件机制。LVI-NULLify包括一个修改过的SGX-SDK和一个编译器扩展，将托管程序置于对LVI-NULL易受攻击的内存位置的控制下。我们在LVI-fixed的Comet Lake CPU上评估了LVI-NULLify，并观察到最坏情况下性能开销低于10%，大大低于过去的防御措施，最坏情况下开销高达1220%。我们得出结论，LVI-NULLify是一种实际的解决方案，可以保护SGX封闭环境免受LVI-NULL的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/giner](https://www.usenix.org/conference/usenixsecurity22/presentation/giner)
- **PDF:** [https://www.usenix.org/system/files/sec22-giner.pdf](https://www.usenix.org/system/files/sec22-giner.pdf)
## A Hardware-Software Co-design for Efficient Intra-Enclave Isolation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-hardware-software-co-design-for-efficient-intra-enclave-isolation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#a-hardware-software-co-design-for-efficient-intra-enclave-isolation)**
### 作者
* Jinyu Gu, Shanghai Jiao Tong University
* Bojun Zhu, Shanghai Jiao Tong University
* Mingyu Li, Shanghai Jiao Tong University
* Wentai Li, Shanghai Jiao Tong University
* Yubin Xia, Shanghai Jiao Tong University
* Haibo Chen, Shanghai Jiao Tong University
### 摘要
> 单体式编程模型在高兼容性和简化SGX enclave编程方面备受青睐，即以所有依赖库甚至库操作系统（LibOSes）运行安全代码。然而，它不可避免地使受信任计算基础（TCB）膨胀，从而偏离了高安全性的目标。引入细粒度隔离可以有效缓解TCB膨胀，而现有解决方案面临性能问题。我们观察到现成的Intel MPK完全适合高效的内部enclave隔离。然而，MPK和SGX之间的信任模型在设计上是不兼容的。因此，我们提出了LIGHTENCLAVE，它在现有的SGX硬件上采用非侵入式扩展将MPK安全地纳入，并允许在一个enclave内隔离多个轻型enclave。实验证明，LIGHTENCLAVE在为服务器应用程序分隔机密SSL密钥时导致最多4%的开销，并且通过减少通信和运行时开销，可以显着提高Graphene-SGX和Occlum的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gu-jinyu](https://www.usenix.org/conference/usenixsecurity22/presentation/gu-jinyu)
- **PDF:** [https://www.usenix.org/system/files/sec22-gu-jinyu.pdf](https://www.usenix.org/system/files/sec22-gu-jinyu.pdf)
## SGXFuzz: Efficiently Synthesizing Nested Structures for SGX Enclave Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sgxfuzz-efficiently-synthesizing-nested-structures-for-sgx-enclave-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sgxfuzz-efficiently-synthesizing-nested-structures-for-sgx-enclave-fuzzing)**
### 作者
* Tobias Cloosters, University of Duisburg-Essen
* Johannes Willbold, Ruhr-Universität Bochum
* Thorsten Holz, CISPA Helmholtz Center for Information Security
* Lucas Davi, University of Duisburg-Essen
### 摘要
> Intel的软件保护扩展（SGX）提供了一个不可反射的可信执行环境（TEE），以保护安全关键代码免受可能具有恶意意图的操作系统的攻击。如果各个enclave都是安全的，这种保护才能发挥作用，然而，在常规软件中这已经是一个具有挑战性的问题，而对于enclave来说，由于整个环境都可能具有恶意行为，这更加困难。因此，许多enclave都存在常见的漏洞，例如内存损坏和SGX特定漏洞，如空指针解引用。虽然fuzzing是一种评估软件安全性的流行技术，但是动态分析enclave是有挑战性的，因为enclave是不可反射的。此外，它们期望的输入是一个已分配的多指针结构，而不是简单的缓冲区。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了一种名为SGXFUZZ的选路引导模糊测试器，引入了一种新颖的二进制输入结构合成方法，即使没有源代码访问权限也能暴露enclave的漏洞。为了从enclave中获取代码覆盖反馈，我们展示了如何从分发格式中提取enclave代码。我们还提供了一个enclave运行器，可以以本地速度执行提取的enclave代码作为用户空间应用程序，同时模拟enclave的所有相关环境交互。我们使用这个设置来对enclave进行模糊测试，使用最先进的快照模糊引擎部署我们的新颖结构合成阶段。该阶段根据故障信号在运行时逐步增量地合成多层指针结构和大小字段。此外，它能够匹配enclave的预期输入格式，而不需要任何先前的知识。我们对30个开源和闭源enclave进行了评估，并发现了共计79个新的错误和漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cloosters](https://www.usenix.org/conference/usenixsecurity22/presentation/cloosters)
- **PDF:** [https://www.usenix.org/system/files/sec22-cloosters.pdf](https://www.usenix.org/system/files/sec22-cloosters.pdf)
## SecSMT: Securing SMT Processors against Contention-Based Covert Channels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#secsmt-securing-smt-processors-against-contention-based-covert-channels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#secsmt-securing-smt-processors-against-contention-based-covert-channels)**
### 作者
* Mohammadkazem Taram, University of California San Diego
* Xida Ren, University of Virginia
* Ashish Venkat, University of Virginia
* Dean Tullsen, University of California San Diego
### 摘要
> 本文首次对高性能同时多线程（SMT）处理器中基于争用的安全漏洞进行了综合分析。它对共享流水线中的争用进行了表征，并针对每个资源提出了可能导致泄漏的渠道。此外，本文提出了一套统一的缓解/隔离策略，可以极大地减少泄漏风险，同时保留了大部分不安全的SMT实现的性能。这些结果为将SMT执行与其性能优势考虑为安全敏感应用的合理选择奠定了基础。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/taram](https://www.usenix.org/conference/usenixsecurity22/presentation/taram)
- **PDF:** [https://www.usenix.org/system/files/sec22-taram.pdf](https://www.usenix.org/system/files/sec22-taram.pdf)
## Rendering Contention Channel Made Practical in Web Browsers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rendering-contention-channel-made-practical-in-web-browsers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rendering-contention-channel-made-practical-in-web-browsers)**
### 作者
* Shujiang Wu, Johns Hopkins University
* Jianjia Yu, Johns Hopkins University
* Min Yang, Fudan University
* Yinzhi Cao, Johns Hopkins University
### 摘要
> 浏览器渲染利用浏览器内部和跨浏览器共享的硬件资源来显示网页内容，因此不可避免地容易受到侧信道攻击的影响。以往的研究已经探讨了由于渲染时间差异而导致的渲染侧信道，例如URL颜色变化。然而，渲染竞争在侧信道攻击和隐蔽通信中所起的作用仍不清楚。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们设计了一种新颖的渲染竞争信道。具体而言，我们通过稳定的、自适应的压力来测试浏览器的渲染资源，并测量渲染一系列帧所需的时间。测得的时间序列进一步用于推断浏览器的任何共同渲染事件。
> 
> 
> 
> 
> 
> 
> 
> 为了更好地理解该信道，我们通过一种称为单变量测试的方法研究了其原因。也就是说，我们保持所有变量不变，只改变一个变量来测试改变的变量是否会导致竞争。我们的结果表明，CPU、GPU和屏幕缓冲区都是竞争的一部分。
> 
> 
> 
> 
> 
> 
> 
> 为了证明该信道的可行性，我们设计并实现了一个原型开源框架，名为SIDER，用于利用渲染竞争信道发起四种攻击，包括（i）跨浏览器、跨模式的Cookie同步，（ii）历史记录嗅探，（iii）网站指纹识别和（iv）按键记录。我们的评估结果显示了这四种攻击的有效性和可行性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wu-shujiang](https://www.usenix.org/conference/usenixsecurity22/presentation/wu-shujiang)
- **PDF:** [https://www.usenix.org/system/files/sec22-wu-shujiang.pdf](https://www.usenix.org/system/files/sec22-wu-shujiang.pdf)
## SyzScope: Revealing High-Risk Security Impacts of Fuzzer-Exposed Bugs in Linux kernel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#syzscope-revealing-high-risk-security-impacts-of-fuzzer-exposed-bugs-in-linux-kernel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#syzscope-revealing-high-risk-security-impacts-of-fuzzer-exposed-bugs-in-linux-kernel)**
### 作者
* Xiaochen Zou, UC Riverside
* Guoren Li, UC Riverside
* Weiteng Chen, UC Riverside
* Hang Zhang, UC Riverside
* Zhiyun Qian, UC Riverside
### 摘要
> 模糊测试已成为软件中最有效的错误发现方法之一。近年来，出现了24*7持续模糊测试平台，用于测试关键的软件部件，例如Linux内核。虽然这些平台能够发现许多错误并提供再现性（例如，概念证明），但主要问题是它们忽视了一个应该内置的关键功能，即对错误安全影响的评估。众所周知，对安全影响的不了解可能导致延迟的错误修复和补丁传播。在本文中，我们开发了SyzScope，一个可以自动发现给定具有表面上“低风险”安全影响的错误的新“高风险”影响的系统。通过分析在syzbot上的一千多个低风险错误，SyzScope成功确定了183个低风险错误（超过15%）实际上包含高风险影响，例如控制流劫持和任意内存写入，其中一些仍然没有可用的补丁。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zou](https://www.usenix.org/conference/usenixsecurity22/presentation/zou)
- **PDF:** [https://www.usenix.org/system/files/sec22-zou.pdf](https://www.usenix.org/system/files/sec22-zou.pdf)
## TheHuzz: Instruction Fuzzing of Processors Using Golden-Reference Models for Finding Software-Exploitable Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#thehuzz-instruction-fuzzing-of-processors-using-golden-reference-models-for-finding-software-exploitable-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#thehuzz-instruction-fuzzing-of-processors-using-golden-reference-models-for-finding-software-exploitable-vulnerabilities)**
### 作者
* Rahul K, Texas A&M University
* e, Texas A&M University
* Addison Crump, Texas A&M University
* Garrett Persyn, Texas A&M University
* Patrick Jauernig, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Aakash Tyagi, Texas A&M University
* Jeyavijayan Rajendran, Texas A&M University
### 摘要
> 现代处理器日益复杂给现有的硬件验证工具和检测安全关键漏洞的方法带来了许多挑战。对处理器的最新攻击已经显示了发现和利用硬件漏洞的致命后果。
> 
> 
> 
> 
> 
> 
> 
> 模糊测试已经成为一种检测软件漏洞的一种有前途的技术。最近，一些硬件模糊测试技术被提出。然而，它们存在一些限制，包括无法适用于常用的硬件描述语言（HDL）如Verilog和VHDL，需要大量人工干预以及无法捕获许多固有的硬件行为，如信号转换和浮动线路。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一个新颖的硬件模糊器TheHuzz的设计和实现，该模糊器克服了上述限制并显著提高了现有技术水平。我们分析了HDL中硬件设计的固有行为，然后测量了模拟这些行为的覆盖度指标。TheHuzz生成了汇编级别的指令来增加期望的覆盖度值，从而发现许多从软件中可利用的硬件漏洞。我们在四个流行的开源处理器上评估了TheHuzz，在速度上相比行业标准的随机回归方法和最先进的硬件模糊器DifuzzRTL分别实现了1.98倍和3.33倍的提速。使用TheHuzz，我们在这些处理器中检测到了11个漏洞，包括8个新漏洞，并且我们使用这些检测到的漏洞展示了攻击方法。我们还通过将其发现与Cadence JasperGold工具发现的结果进行比较，展示了TheHuzz克服了半导体行业的形式验证工具的限制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kande](https://www.usenix.org/conference/usenixsecurity22/presentation/kande)
- **PDF:** [https://www.usenix.org/system/files/sec22-kande.pdf](https://www.usenix.org/system/files/sec22-kande.pdf)
## Fuzzing Hardware Like Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzing-hardware-like-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fuzzing-hardware-like-software)**
### 作者
* Timothy Trippel, University of Michigan
* Kang G. Shin, University of Michigan
* Alex Chernyakhovsky, Google, LLC
* Garret Kelly, Google, LLC
* Dominic Rizzo, Google, LLC
* Matthew Hicks, Virginia Tech
### 摘要
> 硬件缺陷是永久且强大的：一旦制造完成，硬件无法进行修补，任何缺陷都可能破坏甚至在其上执行的已经形式化验证的软件。因此，验证时间主导着实施时间。硬件设计验证（DV）中的黄金标准是动态随机测试，因为它可以扩展到大型设计。然而，由于其无定向性，这种技术是低效的。
> 
> 
> 
> 
> 
> 
> 
> 我们不是对现有的动态硬件验证方法进行增量改进，而是利用观察到现有的软件模糊测试器已经提供了这样的解决方案，因此将其调整为硬件验证的工具。具体而言，我们将 RTL 硬件转换为软件模型，并对该模型进行模糊测试。我们要解决的核心挑战是如何缓解硬件和软件执行模型之间的差异。其中包括：1）如何表示测试用例，2）崩溃的硬件等效是什么，3）何种适当的覆盖度量指标，以及4）如何为硬件创建通用模糊测试工具。
> 
> 
> 
> 
> 
> 
> 
> 为了评估我们的方法，我们设计、实现并开源了一个硬件模糊测试管线，只使用开源工具就能规模化地进行硬件模糊测试。利用我们的管线，我们对 Google 的 OpenTitan Root-of-Trust 芯片进行了五个 IP 块的模糊测试，四个 SiFive TileLink 外设，三个 RISC-V CPU 和一个 FFT 加速器。我们的实验结果显示，相对传统的动态验证方案，我们的方法在相似的有限状态机覆盖范围上运行时间减少了两个数量级，并且在 HDL 代码行覆盖率方面优于之前的工作 26.70%。此外，使用我们的总线中心化工具，我们在研究的五个 OpenTitan IP 块中的四个 IP 块中可以达到超过 83% 的 HDL 代码行覆盖率，并且在不使用任何初始种子的情况下，在不到 10 小时的模糊测试时间内能够检测到所有错误（来自 Hack@DAC 的四个合成错误和一个真实错误），该方法适用于这五个 OpenTitan IP 块。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/trippel](https://www.usenix.org/conference/usenixsecurity22/presentation/trippel)
- **PDF:** [https://www.usenix.org/system/files/sec22-trippel.pdf](https://www.usenix.org/system/files/sec22-trippel.pdf)
## Stateful Greybox Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stateful-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stateful-greybox-fuzzing)**
### 作者
* Jinsheng Ba, National University of Singapore
* Marcel Böhme, Monash University and MPI-SP
* Zahra Mirzamomen, Monash University
* Abhik Roychoudhury, National University of Singapore
### 摘要
> 许多协议实现是反应性系统，协议过程在不断与其他进程和环境进行交互。如果一个bug只能在特定状态下暴露出来，模糊测试器需要提供一系列特定事件作为输入，该事件将在bug显现之前将协议推入此状态。我们将这些bug称为“有状态”的bug。通常，在测试协议实现时，我们没有详细的正式协议规范可以依赖。在没有协议知识的情况下，模糊测试器很难发现这种有状态的bug。因此，一个关键的挑战是在没有明确协议规范的情况下覆盖状态空间。发现协议实现中的有状态bug，因此需要部分揭示协议的状态空间。对于有状态软件系统的模糊测试需要融入状态识别策略。此类状态识别可能来自手动指导或自动分析。
> 
> 
> 
> 
> 
> 
> 
> 在本研究中，我们认为可以避免使用手动注释来进行有状态协议模糊测试的状态识别。具体而言，我们依赖于这样一个程序性直觉，即协议实现中使用的状态变量通常出现在枚举类型变量中，其值（状态名称）来自命名常量。在我们对使用最广泛的前50个开源协议实现进行的分析中，我们发现每个实现都使用被赋予命名常量（例如INIT，READY等易于理解的名称）的状态变量来表示当前状态。在本研究中，我们提出自动识别此类状态变量，并跟踪在模糊测试期间分配给它们的值序列，以生成被探索状态空间的“地图”。
> 
> 
> 
> 
> 
> 
> 
> 我们的实验证实，我们的有状态模糊测试工具发现有状态bug的速度是我们扩展的基准灰盒模糊测试工具的两倍。从初始状态开始，我们的模糊测试器执行一倍数量的状态/转换序列，并且比基准模糊测试工具快两倍的覆盖代码。我们的模糊测试器在著名协议实现中发现了几个零日漏洞，并分配了8个CVE（通用漏洞披露编号）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ba](https://www.usenix.org/conference/usenixsecurity22/presentation/ba)
- **PDF:** [https://www.usenix.org/system/files/sec22-ba.pdf](https://www.usenix.org/system/files/sec22-ba.pdf)
## StateFuzz: System Call-Based State-Aware Linux Driver Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#statefuzz-system-call-based-state-aware-linux-driver-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#statefuzz-system-call-based-state-aware-linux-driver-fuzzing)**
### 作者
* Bodong Zhao, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Zheming Li, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Shisong Qin, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Zheyu Ma, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Ming Yuan, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
* Wenyu Zhu, Department of Electronic Engineering, Tsinghua University
* Zhihong Tian, Guangzhou University
* Chao Zhang, Institute for Network Science and Cyberspace / BNRist, Tsinghua University and Zhongguancun Lab
### 摘要
> 覆盖率引导模糊测试在发现软件漏洞方面取得了巨大的成功。现有的覆盖率引导模糊测试器通常偏好命中新代码的测试用例，并丢弃那些执行相同代码的用例。然而，这种策略并不是最优的。一个执行相同代码的新测试用例可能比之前的测试用例更好，因为它可能会触发有助于代码探索和漏洞发现的新程序状态。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们评估了覆盖率引导模糊测试解决方案的局限性，并提出了一种考虑状态的模糊测试解决方案StateFuzz来解决这个问题。首先，我们利用静态分析来识别具有状态变量值的程序状态。然后，我们对目标程序进行插装，以跟踪这些变量的值，并在运行时推断程序状态转换。最后，我们利用状态信息来优先考虑能够触发新状态的测试用例，并应用三维反馈机制来微调覆盖率引导模糊测试器的演化方向。我们已经实现了StateFuzz的原型，并在Linux上游驱动程序和Android驱动程序上进行了评估。评估结果表明，StateFuzz在发现新代码和漏洞方面非常有效。它找到了18个未知漏洞和2个已知但未修复的漏洞，并实现了比最先进的模糊测试工具Syzkaller更高的19%代码覆盖率和32%状态覆盖率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-bodong](https://www.usenix.org/conference/usenixsecurity22/presentation/zhao-bodong)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhao-bodong.pdf](https://www.usenix.org/system/files/sec22-zhao-bodong.pdf)
## How to Abuse and Fix Authenticated Encryption Without Key Commitment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-to-abuse-and-fix-authenticated-encryption-without-key-commitment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-to-abuse-and-fix-authenticated-encryption-without-key-commitment)**
### 作者
* Ange Albertini, Google Research
* Thai Duong, Google Research
* Shay Gueron, University of Haifa and Amazon
* Stefan Kölbl, Google Research
* Atul Luykx, Google Research
* Sophie Schmieg, Google Research
### 摘要
> 身份验证加密（AE）被广泛应用于各种应用中，可能用于其最初设计的设置之外。最近的研究试图理解当AE不按照设计者的要求使用时会发生什么。一个关注较少的问题是AE方案是否保证了“密钥承诺”：密文只能在生成密文时使用的密钥下解密为有效的明文。一般来说，AE方案不能保证密钥承诺，因为这不是AE的设计目标的一部分。然而，人们不会期望这个看似晦涩的属性对实际产品的安全性产生太大的影响。然而，在现实中，产品确实依赖于密钥承诺。我们讨论了三个最近的应用，其中缺少密钥承诺是可以被利用的。我们通过一个构造AES-GCM密文的工具提供了概念验证攻击，该工具可以解密为多种文件格式（如PDF、Windows可执行文件和DICOM）下的两个有效明文。最后，我们讨论了两种将密钥承诺添加到AE方案中的解决方案，这些解决方案在文献中尚未进行分析：一种通用方法是向AE方案添加显式密钥承诺方案，另一种简单修复方法适用于AES-GCM和ChaCha20Poly1305等AE方案，但需要针对每个方案进行单独分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albertini](https://www.usenix.org/conference/usenixsecurity22/presentation/albertini)
- **PDF:** [https://www.usenix.org/system/files/sec22-albertini.pdf](https://www.usenix.org/system/files/sec22-albertini.pdf)
## Private Signaling.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#private-signaling) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#private-signaling)**
### 作者
* Varun Madathil, North Carolina State University
* Aless, North Carolina State University
* ra Scafuro, North Carolina State University
* István András Seres, Eötvös Loránd University
* Omer Shlomovits, ZenGo X
* Denis Varlakov, ZenGo X
### 摘要
> 我们介绍了私密信号传递的问题。在这个问题中，发送方在公共布告栏的特定位置发布一条信息，然后发布一个信号，只允许预期的接收方（而不是其他人）了解该位置上发布的信息是给自己的。除了隐私外，还必须满足两个效率要求。首先，发送方和接收方不参与任何带外通信。其次，接收方的开销必须（远远）优于扫描整个布告栏。
> 
> 
> 
> 
> 
> 
> 
> 现有技术（例如，服务器辅助的模糊消息检测）可以用来解决私密信号传递的问题。然而，这种解决方案在隐私和效率之间存在一个权衡，接收方的复杂度与所需的隐私成正比。具体而言，这将需要扫描整个布告栏以获得接收方的完全隐私。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一种服务器辅助的解决方案，用于私密信号传递问题，它可以保证所有接收方的完全隐私，同时对接收方和发送方只需要恒定的工作量。
> 
> 
> 
> 
> 
> 
> 
> 具体而言，我们提供了三个贡献：首先，我们在“通用可组合性”（UC）框架中提供了私密信号传递的正式定义，并展示了它涵盖了几个现实世界中需要接收方匿名性的设置。其次，我们提出了两个服务器辅助的协议，实现了我们的定义：一个使用单个配备可信执行环境的服务器，另一个基于使用混淆电路的两个服务器。第三，我们提供了我们协议的开源实现，评估了它们的性能，并确定了哪些参数集可以实用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/madathil](https://www.usenix.org/conference/usenixsecurity22/presentation/madathil)
- **PDF:** [https://www.usenix.org/system/files/sec22-madathil.pdf](https://www.usenix.org/system/files/sec22-madathil.pdf)
## Batched Differentially Private Information Retrieval.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#batched-differentially-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#batched-differentially-private-information-retrieval)**
### 作者
* Kinan Dak Albab, Brown University
* Rawane Issa, Boston University
* Mayank Varia, Boston University
* Kalman Graffi, Honda Research Institute Europe
### 摘要
> 私人信息检索（PIR）允许多个客户端查询由一个或多个服务器保存的数据库，使得查询的内容保持私密。以前的PIR方案通过利用计算假设、将信任分散到多个服务器之间、放宽安全要求以允许微分隐私泄露、将工作重分配到离线阶段以减少在线成本，或在大批量查询上分摊成本等方式实现了亚线性通信和计算。在这项工作中，我们提出了一种高效的PIR协议，结合了上述所有技术，以实现在数据库大小和客户端工作量方面的恒定分摊通信和计算复杂度。我们利用微分私密泄露来提供更好地在隐私和效率之间进行权衡。与现有PIR协议相比，我们的协议在实际环境中实现了超过10倍的加速，并且可以在廉价的AWS机器上扩展到数亿次查询的批处理。我们的协议建立在一种同时具有增量和非可塑性的新秘密共享方案之上，这可能对更广泛的受众具有兴趣。我们的协议能够提供对抗恶意对手攻击下的安全性，即使对手可以破坏所有方（除一方）也能维持安全。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/albab](https://www.usenix.org/conference/usenixsecurity22/presentation/albab)
- **PDF:** [https://www.usenix.org/system/files/sec22-albab.pdf](https://www.usenix.org/system/files/sec22-albab.pdf)
## Practical Privacy-Preserving Authentication for SSH.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#practical-privacy-preserving-authentication-for-ssh) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#practical-privacy-preserving-authentication-for-ssh)**
### 作者
* Lawrence Roy, Oregon State University
* Stanislav Lyakhov, Oregon State University
* Yeongjin Jang, Oregon State University
* Mike Rosulek, Oregon State University
### 摘要
> SSH中的公钥认证揭示了比必要信息更多的密钥参与者信息。(1) 服务器可以了解客户端的全部公钥，甚至可以了解为其他服务器生成的密钥。(2) 服务器了解客户端用于认证的具体密钥，并可以向第三方证明这一事实。(3) 客户端可以了解服务器是否识别属于其他用户的公钥。这些问题都导致了SSH用户的个人隐私侵犯。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们介绍了一种新的SSH公钥认证方法，它基本上只揭示了最少量的信息。使用我们的新方法，服务器只能了解客户端是否知道某个授权公钥的私钥。如果有多个密钥被授权，服务器将无法知道客户端使用的是哪一个。客户端无法得知服务器是否识别属于其他用户的公钥。与传统的SSH认证不同，我们的方法是完全可否认的。
> 
> 
> 
> 
> 
> 
> 
> 我们的方法支持所有标准类型的SSH密钥对——RSA、ECDSA、EdDSA。它不需要用户生成新的密钥材料。和传统的SSH认证一样，客户端和服务器可以在单个认证会话中使用不同类型的密钥组合。
> 
> 
> 
> 
> 
> 
> 
> 我们将我们的新认证方法集成到OpenSSH中，并发现它是实用且可扩展的。对于最多拥有10个ECDSA/EdDSA密钥的典型客户端和服务器，我们的协议只需9 kB的通信和12.4毫秒的延迟。即使对于拥有20个密钥的客户端和拥有100个密钥的服务器，我们的协议也只需要12 kB的通信和26.7毫秒的延迟。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/roy](https://www.usenix.org/conference/usenixsecurity22/presentation/roy)
- **PDF:** [https://www.usenix.org/system/files/sec22-roy.pdf](https://www.usenix.org/system/files/sec22-roy.pdf)
## One-off Disclosure Control by Heterogeneous Generalization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#one-off-disclosure-control-by-heterogeneous-generalization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#one-off-disclosure-control-by-heterogeneous-generalization)**
### 作者
* Olga Gkountouna, University of Liverpool
* Katerina Doka, National Technical University of Athens
* Mingqiang Xue, Tower Research
* Jianneng Cao, Bank Jago
* Panagiotis Karras, Aarhus University
### 摘要
> 我们如何在个体之间进行一次性的信息数据共享，同时限制向全球分布此类信息和个人识别符号的对手泄露敏感信息的风险？尽管进行了大量努力，但当前的隐私保护技术仍无法达到这个目标。差分隐私为参与数据的个体提供了关于隐私风险的强大保证，但信息损失较高，并容易受到利用数据相关性的基于学习的攻击的影响。语法化匿名化对数据发布所引起的特定敏感信息的风险进行限制，但通常会将个体无意义地聚类成组，从而丧失数据的实用性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们开发了符合以敏感信息为导向的语法隐私保证的披露控制算法，并相较于当前方法在实用性上获得了高达77%的提升。我们通过使用二部图匹配而不是聚类，以异质的方式重新构造数据，从而实现了这一壮举。我们证明了我们的方法可以抵抗那些了解所采用算法及其参数的对手。我们的实验研究包括了合成数据和真实数据，以及真实的学习和数据分析任务，结果表明这些方法在小的运行时开销，并可通过数据分割减少，同时具有异质泛化中的β-likeness保证，能够坚决抵御基于机器学习的攻击，因而具有实际价值。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/gkountouna](https://www.usenix.org/conference/usenixsecurity22/presentation/gkountouna)
- **PDF:** [https://www.usenix.org/system/files/sec22-gkountouna.pdf](https://www.usenix.org/system/files/sec22-gkountouna.pdf)
## Understanding and Improving Usability of Data Dashboards for Simplified Privacy Control of Voice Assistant Data.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#understanding-and-improving-usability-of-data-dashboards-for-simplified-privacy-control-of-voice-assistant-data) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#understanding-and-improving-usability-of-data-dashboards-for-simplified-privacy-control-of-voice-assistant-data)**
### 作者
* V, Indian Institute of Technology Kharagpur
* it Sharma, Indian Institute of Technology Kharagpur
* Mainack Mondal, Indian Institute of Technology Kharagpur
### 摘要
> 今天，像亚马逊的Alexa、谷歌的语音助手(GVA)和苹果的Siri这样的智能语音助手软件已经有数百万用户。这些语音助手经常收集和分析大量用户数据以改进其功能。然而，这些收集的数据可能包含敏感信息（例如个人语音录音），用户可能不愿意与他人分享，并可能引起重大的隐私问题。为了应对这些问题，谷歌等服务提供商为用户提供了个人数据仪表板（称为“我的活动仪表板”），允许他们管理所有语音助手收集的数据。然而，在先前的研究中，关于这些数据（以及数据仪表板）的用户感知和偏好的真实世界GVA数据驱动的了解相对较少。
> 
> 
> 
> 
> 
> 
> 
> 因此，我们的工作重点放在谷歌语音助手（GVA）用户上，并在真实的GVA收集用户数据的基础上调查了GVA用户对数据和仪表板的感知和偏好。具体而言，我们进行了一个基于调查的80名参与者的用户研究，旨在收集关于GVA使用的通用感知以及对其GVA数据的分层样本的期望隐私偏好。我们发现大多数参与者对GVA收集的数据类型只有肤浅的了解。令人担忧的是，我们发现参与者对17.7%的GVA收集数据元素感到不舒服，不愿与谷歌分享。当前的“我的活动”仪表板虽然有用，但对长期使用GVA的用户来说并没有有效地管理数据隐私。我们的真实数据驱动研究发现，显示给用户一个敏感数据元素可以显著改善数据仪表板的可用性。为此，我们建立了一个分类器，可以检测敏感数据并提供数据仪表板建议，其F1得分达到95%，相比基线模型提高了76%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-vandit](https://www.usenix.org/conference/usenixsecurity22/presentation/sharma-vandit)
- **PDF:** [https://www.usenix.org/system/files/sec22-sharma-vandit.pdf](https://www.usenix.org/system/files/sec22-sharma-vandit.pdf)
## Security and Privacy Perceptions of Third-Party Application Access for Google Accounts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-and-privacy-perceptions-of-third-party-application-access-for-google-accounts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-and-privacy-perceptions-of-third-party-application-access-for-google-accounts)**
### 作者
* David G. Balash, The George Washington University
* Xiaoyuan Wu, The George Washington University
* Miles Grant, The George Washington University
* Irwin Reyes, Two Six Technologies
* Adam J. Aviv, The George Washington University
### 摘要
> 在线服务（如Google）提供了各种应用程序接口（API）。这些在线API使经过身份验证的第三方服务和应用程序（应用）能够访问用户的账户数据，以执行诸如单一登录（SSO）、日历整合和代表用户发送电子邮件等任务。尽管这些API广泛存在，但其访问权可能带来显著的隐私和安全风险，第三方可能对用户账户拥有意外的特权。为了评估用户对与在线API集成的第三方应用程序的感知和关注，我们对Google用户进行了多部分在线调查。首先，我们请n = 432名参与者回忆是否以及何时允许第三方访问他们的Google账户：89%的参与者回忆使用过至少一个SSO，52%的参与者记得至少有一个第三方应用程序。在第二次调查中，我们重新招募了n = 214名参与者，询问他们在自己的Google账户上授权的特定应用程序和SSO。我们收集了关于用户实际使用的SSO和授权应用程序的现场数据：86%的用户在至少一个服务上使用了Google SSO，67%的用户授权了至少一个第三方应用程序。在检查他们的应用程序和SSO后，参与者对访问个人信息（如电子邮件地址和其他公开共享信息）表示了最关注。然而，参与者对于更广泛、也许更具侵入性的访问日历、电子邮件或云存储等内容（第三方应用程序所需）的关注较少。这种差异可能部分原因是对与Google集成的应用程序的信任传递，形成了一种默契的合作关系。我们的结果表明了Google目前提供的第三方管理工具的设计改进机会，例如跟踪最近的访问、自动撤销应用程序不使用的访问权限和提供权限控制。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/balash](https://www.usenix.org/conference/usenixsecurity22/presentation/balash)
- **PDF:** [https://www.usenix.org/system/files/sec22-balash.pdf](https://www.usenix.org/system/files/sec22-balash.pdf)
## Empirical Understanding of Deletion Privacy: Experiences, Expectations, and Measures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#empirical-understanding-of-deletion-privacy-experiences-expectations-and-measures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#empirical-understanding-of-deletion-privacy-experiences-expectations-and-measures)**
### 作者
* Mohsen Minaei, Purdue University
* Mainack Mondal, IIT Kharagpur
* Aniket Kate, Purdue University
### 摘要
> 近年来，社交平台被个人广泛使用以分享他们的思想和个人信息。然而，由于后悔发布不适当的社交内容、尴尬甚至生活或关系变化，一些过去的帖子对他们来说可能也构成严重的隐私问题。为了应对这些隐私问题，社交平台提供了删除机制，允许用户删除他们的内容。显然，这些删除机制对于随时删除过去的帖子非常有用。然而，这些相同的机制也使用户极易受到攻击者的攻击，这些攻击者专门寻找用户的有害内容，并利用删除行为作为识别此类内容的强烈信号。不幸的是，关于这种删除隐私攻击和删除隐私的用户体验和背景期望目前还不为人所了解。
> 
> 
> 
> 
> 
> 
> 
> 为此，在本文中，我们通过一个基于用户调查的探索研究，涉及191名参与者，来解析他们之前的删除经验、他们对删除隐私的期望以及他们对当前删除机制的有效性如何评价。我们发现超过80%的用户至少删除过一篇社交媒体帖子，用户自报，平均约有35%的删除发生在发布后一周之内。虽然参与者认为内容的无关性（由于时间过去）是删除的主要原因，但他们中的大多数人认为删除意味着被删除的内容包含一些对所有者有害的信息。重要的是，与来自社交圈的个人相比，参与者对他们的删除被大规模数据收集者（例如第三方数据收集公司或政府）注意到更为关注。最后，参与者认为，虽然流行的删除机制在多种情况下帮助删除内容非常有用，但对于保护删除隐私来说并不是很有效。因此，他们提出了改进未来删除机制的设计指南。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/minaei](https://www.usenix.org/conference/usenixsecurity22/presentation/minaei)
- **PDF:** [https://www.usenix.org/system/files/sec22-minaei.pdf](https://www.usenix.org/system/files/sec22-minaei.pdf)
## Security at the End of the Tunnel: The Anatomy of VPN Mental Models Among Experts and Non-Experts in a Corporate Context.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-at-the-end-of-the-tunnel-the-anatomy-of-vpn-mental-models-among-experts-and-non-experts-in-a-corporate-context) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#security-at-the-end-of-the-tunnel-the-anatomy-of-vpn-mental-models-among-experts-and-non-experts-in-a-corporate-context)**
### 作者
* Veroniek Binkhorst, Technical University of Delft
* Tobias Fiebig, Max-Planck-Institut für Informatik and Technical University of Delft
* Katharina Krombholz, CISPA Helmholtz Center for Information Security
* Wolter Pieters, Radboud University
* Katsiaryna Labunets, Utrecht University
### 摘要
> 随着2020年和2021年全球范围内的COVID-19大流行病需要在家工作，企业虚拟专用网络（VPN）已成为确保全球公司持续运营的重要工具。然而，由于其不同的使用方式，企业VPN和用户与之交互的方式与现在常用的公共VPN有所不同。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们对十一位专家和七位非专家在企业VPN环境下的心智模型进行了第一次探索性研究。我们发现在高级技术理解方面，这些模型存在部分一致，但在VPN的使用方式、时间和原因等重要参数上存在差异。虽然专家在VPN技术方面通常具有更深入的技术理解，但我们还观察到即使是他们有时也持有关于VPN安全方面的错误观念。总结起来，我们展示了企业VPN的心智模型与相关的安全技术（如HTTPS）有所不同。
> 
> 
> 
> 
> 
> 
> 
> 我们的研究结果为实践者们制定了推动VPN技术安全使用的建议（通过培训干预、更好的沟通以及设备管理方面的系统设计改变）。此外，我们还确定了未来研究的方向，例如专家的知识和系统运营商与用户之间的隐私和安全平衡。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/binkhorst](https://www.usenix.org/conference/usenixsecurity22/presentation/binkhorst)
- **PDF:** [https://www.usenix.org/system/files/sec22-binkhorst.pdf](https://www.usenix.org/system/files/sec22-binkhorst.pdf)
## How and Why People Use Virtual Private Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-and-why-people-use-virtual-private-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#how-and-why-people-use-virtual-private-networks)**
### 作者
* Agnieszka Dutkowska-Zuk, Lancaster University
* Austin Hounsel, Princeton University
* Amy Morrill, University of Chicago
* Andre Xiong, Princeton University
* Marshini Chetty, University of Chicago
* Nick Feamster, University of Chicago
### 摘要
> 虚拟私人网络（VPN）通常被用来保护网络用户的隐私，但许多VPN并不保证隐私，并且可能通过泄露流量、数据收集和共享等方式危及用户的隐私。本文旨在了解人们在使用VPN时对隐私和安全风险的认识程度，以及他们首次使用和采用VPN的方式。为此，我们对美国的729名VPN用户进行了一项研究，调查了他们对VPN使用习惯和偏好的情况。我们的研究包括对32名大学生进行的面对面访谈、对349名大学生的调查以及对348名普罗利菲克（Prolific）上的一般VPN用户进行的调查。我们得出了三个主要发现。首先，虽然VPN的一般用户主要使用VPN来提高隐私和安全性，但学生们还特别关注内容访问（例如，绕过地理限制）。其次，两个群体都得出了VPN会收集关于他们的数据的结论，暴露出他们对VPN工作方式的心理模型以及对数据收集风险的意识的差距。最后，大多数用户在高中或大学时了解了VPN，并使用免费的VPN，但使用由他们的机构提供的VPN时感觉更安全。这些结果可能成为未来研究、宣传活动和监管行动的基础。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/dutkowska-zuk](https://www.usenix.org/conference/usenixsecurity22/presentation/dutkowska-zuk)
- **PDF:** [https://www.usenix.org/system/files/sec22-dutkowska-zuk.pdf](https://www.usenix.org/system/files/sec22-dutkowska-zuk.pdf)
## CamShield: Securing Smart Cameras through Physical Replication and Isolation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#camshield-securing-smart-cameras-through-physical-replication-and-isolation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#camshield-securing-smart-cameras-through-physical-replication-and-isolation)**
### 作者
* Zhiwei Wang, ShanghaiTech University
* Yihui Yan, ShanghaiTech University
* Yueli Yan, ShanghaiTech University
* Huangxun Chen, Huawei Theory Lab
* Zhice Yang, ShanghaiTech University
### 摘要
> 智能家居设备，如安全摄像头，配备了视觉传感器，用于监控或改进用户体验。由于家庭环境的敏感性，它们的视觉感知能力引起了隐私和安全方面的担忧。本文中，我们设计并实现了CamShield，这是一个陪伴设备，用于确保智能安全摄像头的隐私，即使整个摄像头系统完全被侵犯。在高层次上，CamShield是一个屏蔽盒，通过将其附加到安全摄像头的正面来使其失明。然后，它使用自己的摄像头进行视觉记录。视频首先根据用户指定的策略进行保护，然后通过可见光通信（VLC）通道传输到安全摄像头，进而传输到互联网上。它确保只有授权的实体可以完全访问受保护的视频。由于CamShield与屏蔽的安全摄像头和互联网物理隔离，因此自然可以抵御许多已知攻击，并能按预期运行。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-zhiwei](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-zhiwei)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-zhiwei.pdf](https://www.usenix.org/system/files/sec22-wang-zhiwei.pdf)
## SCRAPS: Scalable Collective Remote Attestation for Pub-Sub IoT Networks with Untrusted Proxy Verifier.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#scraps-scalable-collective-remote-attestation-for-pub-sub-iot-networks-with-untrusted-proxy-verifier) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#scraps-scalable-collective-remote-attestation-for-pub-sub-iot-networks-with-untrusted-proxy-verifier)**
### 作者
* Lukas Petzi, University of Würzburg
* Ala Eddine Ben Yahya, University of Würzburg
* Alex, University of Würzburg
* ra Dmitrienko, University of Würzburg
* Gene Tsudik, UC Irvine
* Thomas Prantl, University of Würzburg
* Samuel Kounev, University of Würzburg
### 摘要
> 远程认证（RA）是一种基本的安全机制，用于检测各种类型的计算组件（例如物联网设备）中的恶意存在。在典型的物联网环境中，RA涉及一个可信的验证者向一个不可信的远程证明者发送一个挑战，证明者必须以新鲜和真实可信的状态回复。然而，大多数当前的RA方案都假设存在一个中心验证者，这在相互怀疑的利益相关者参与时是有问题的，而且随着物联网设备（证明者）数量的增加，会出现可扩展性问题。
> 
> 
> 
> 
> 
> 
> 
> 虽然一些RA方案允许对等的证明者充当验证者，但它们涉及到对物联网设备来说不切实际的要求，例如时间同步和同步通信。此外，它们会产生沉重的内存、计算和通信负担，并且不考虑处于睡眠或其他断开状态的设备。受到解决这些限制的需求的推动，我们构建了一种可扩展的集体发布-订阅远程认证（SCRAPS）方案，它将验证者职责外包给智能合约，并缓解了对证明者和验证者的拒绝服务攻击。它还消除了同步通信的需求。此外，SCRAPS中的RA证据是公开可验证的，这显著减少了认证证据计算的数量，从而降低了证明者的负担。我们使用专为物联网用例设计的Hyperledger Sawtooth（一个区块链平台）构建了SCRAPS的原型，并评估了其性能、可扩展性和安全性方面的表现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/petzi](https://www.usenix.org/conference/usenixsecurity22/presentation/petzi)
- **PDF:** [https://www.usenix.org/system/files/sec22-petzi.pdf](https://www.usenix.org/system/files/sec22-petzi.pdf)
## An Experimental Study of GPS Spoofing and Takeover Attacks on UAVs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#an-experimental-study-of-gps-spoofing-and-takeover-attacks-on-uavs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#an-experimental-study-of-gps-spoofing-and-takeover-attacks-on-uavs)**
### 作者
* Harshad Sathaye, Northeastern University
* Martin Strohmeier, armasuisse
* Vincent Lenders, armasuisse
* Aanjhan Ranganathan, Northeastern University
### 摘要
> 今天，在现实世界环境下，关于无人机在GPS欺骗攻击下的行为，特别是考虑到无人机的软件、其他配备的导航工具和视觉传感器之间的相互作用，我们对此的认识非常有限。本研究旨在了解仅通过欺骗GPS信号就完全控制无人机的移动的可行性和要求。我们列举了通过GPS欺骗实现完全控制无人机接管并避免崩溃的挑战。我们设计并实现了一个实时GPS信号生成器(RtGSG)，可以配置为生成任意轨迹，并能够通过用户输入实时更改GPS信号，例如使用键盘或摇杆。我们通过在受控的舱室中进行无线欺骗实验，评估了RtGSG在DJI和Autel等流行商用无人机上的效果。我们探索了通用和无人机特定的GPS欺骗策略，以实现完全操纵控制（例如速度和方向）。这项研究强调，尽管成品无人机仍然容易受到GPS欺骗攻击，但要完全接管和控制无人机，需要实时精确地操作欺骗信号。最后，我们将我们的实施方案发布给科学界以进行进一步研究。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/sathaye](https://www.usenix.org/conference/usenixsecurity22/presentation/sathaye)
- **PDF:** [https://www.usenix.org/system/files/sec22-sathaye.pdf](https://www.usenix.org/system/files/sec22-sathaye.pdf)
## Smart Home Privacy Policies Demystified: A Study of Availability, Content, and Coverage.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#smart-home-privacy-policies-demystified-a-study-of-availability-content-and-coverage) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#smart-home-privacy-policies-demystified-a-study-of-availability-content-and-coverage)**
### 作者
* Sunil Man, William & Mary
* har, William & Mary
* Kaushal Kafle, William & Mary
* Benjamin Andow, Google LLC
* Kapil Singh, IBM T.J. Watson Research Center
* Adwait Nadkarni, William & Mary
### 摘要
> 智能家居设备在其核心功能中向供应商或第三方服务器传输高度敏感的使用信息。因此，有必要向用户提供收集和共享设备数据的背景信息，以便让他们权衡部署智能家居技术带来的利益和隐私损失。由于隐私政策通常被期望准确传达这些信息，我们对当前智能家居隐私政策的现状进行了系统和数据驱动的分析，特别关注以下三个关键问题：（1）消费者获取隐私政策的难度有多大，（2）现有政策如何描述设备数据的收集和共享，以及（3）相对于其他信息来源，这些描述的准确性如何。我们对596个智能家居供应商的2,442个智能家居设备进行了分析，得出了17个研究结果，这些结果影响着数百万用户，展示了现有智能家居隐私政策中的差距，以及自动化分析所面临的挑战和机遇。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/manandhar](https://www.usenix.org/conference/usenixsecurity22/presentation/manandhar)
- **PDF:** [https://www.usenix.org/system/files/sec22-manandhar.pdf](https://www.usenix.org/system/files/sec22-manandhar.pdf)
## MaDIoT 2.0: Modern High-Wattage IoT Botnet Attacks and Defenses.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#madiot-2-0-modern-high-wattage-iot-botnet-attacks-and-defenses) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#madiot-2-0-modern-high-wattage-iot-botnet-attacks-and-defenses)**
### 作者
* Tohid Shekari, Georgia Institute of Technology
* Alvaro A. Cardenas, University of California, Santa Cruz
* Raheem Beyah, Georgia Institute of Technology
### 摘要
> 广泛存在易受攻击的物联网设备导致了物联网僵尸网络的形成。特别是那些功率较高的物联网设备，例如电动车充电器，会对电力网络的用电情况造成突然改变，因此对此类设备形成的僵尸网络更为担心。这种攻击被称为物联网需求操控攻击（MaDIoT）。之前的研究表明，现有的电力网保护机制可以防止MaDIoT攻击对电网造成大规模负面影响。本文对这一假设进行了分析，并展示了一个拥有关于电网及其状态额外知识的智能攻击者可以发动更复杂的攻击。我们的对手并非随机攻击所有地点的任意时间，而是利用一种不稳定度指标来确定攻击高功率僵尸设备的特定时间和地理位置。我们称这些新形式的攻击为MaDIoT 2.0。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shekari](https://www.usenix.org/conference/usenixsecurity22/presentation/shekari)
- **PDF:** [https://www.usenix.org/system/files/sec22-shekari.pdf](https://www.usenix.org/system/files/sec22-shekari.pdf)
## AutoDA: Automated Decision-based Iterative Adversarial Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#autoda-automated-decision-based-iterative-adversarial-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#autoda-automated-decision-based-iterative-adversarial-attacks)**
### 作者
* Qi-An Fu, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China
* Yinpeng Dong, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; RealAI
* Hang Su, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; Peng Cheng Laboratory; Tsinghua University-China Mobile Communications Group Co., Ltd. Joint Institute
* Jun Zhu, Dept. of Comp. Sci. and Tech., Institute for AI, Tsinghua-Bosch Joint ML Center, THBI Lab, BNRist Center, Tsinghua University, Beijing, China; RealAI; Peng Cheng Laboratory; Tsinghua University-China Mobile Communications Group Co., Ltd. Joint Institute
* Chao Zhang, Institute for Network Science and Cyberspace / BNRist, Tsinghua University
### 摘要
> 敌对攻击可以通过对自然样本施加微不可见的扰动来欺骗深度学习模型，这在各种安全敏感的应用中引起了关注。其中，基于决策的黑盒攻击是实用但更具挑战性的，攻击者只能通过查询目标模型获得最终分类标签，无法访问模型的细节。在这种情况下，现有的方法通常依赖启发式方法，并在查询效率和攻击成功率方面表现不佳。为了更好地理解这些启发式方法的合理性并进一步改进现有方法，我们提出了AutoDA，以自动发现基于决策的迭代敌对攻击算法。在我们的方法中，我们构建了一个攻击算法的通用搜索空间，并开发了一种高效的搜索算法来探索该空间。尽管我们采用了一个小型快速模型来在搜索中高效评估和发现合格的攻击算法，但广泛的实验证明，这些发现的算法在攻击CIFAR-10和ImageNet数据集上的大型模型时既简单又具有高查询效率。它们与人类设计的最先进的基于决策的迭代攻击方法保持了相当的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/fu-qi](https://www.usenix.org/conference/usenixsecurity22/presentation/fu-qi)
- **PDF:** [https://www.usenix.org/system/files/sec22-fu-qi.pdf](https://www.usenix.org/system/files/sec22-fu-qi.pdf)
## Poison Forensics: Traceback of Data Poisoning Attacks in Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poison-forensics-traceback-of-data-poisoning-attacks-in-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poison-forensics-traceback-of-data-poisoning-attacks-in-neural-networks)**
### 作者
* Shawn Shan, University of Chicago
* Arjun Nitin Bhagoji, University of Chicago
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 在对抗性机器学习中，对深度学习系统的攻击的防御措施往往很快被更强大的攻击所突破。在这种情况下，取证工具可以为现有的防御措施提供有价值的补充，通过追踪成功攻击的根本原因，并提供解决办法以防止类似攻击在未来的发生。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们描述了我们在开发针对深度神经网络中毒攻击的取证袭击追溯工具方面的努力。我们提出了一种新颖的迭代聚类和修剪解决方案，该方案修剪了“无辜”的训练样本，直到只剩下对攻击负责的被污染数据集。我们的方法根据训练样本对模型参数的影响进行聚类，然后使用高效的数据消除方法修剪无辜的聚类。我们通过在计算机视觉和恶意软件分类领域的三种类型的脏标签（后门）攻击和三种类型的干净标签攻击上进行实证论证，证明了我们系统的有效性。我们的系统在所有攻击中实现了超过98.4%的准确率和96.8%的召回率。我们还展示了我们的系统对四种专门设计用于攻击它的反取证措施的鲁棒性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/shan](https://www.usenix.org/conference/usenixsecurity22/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/sec22-shan.pdf](https://www.usenix.org/system/files/sec22-shan.pdf)
## Teacher Model Fingerprinting Attacks Against Transfer Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#teacher-model-fingerprinting-attacks-against-transfer-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#teacher-model-fingerprinting-attacks-against-transfer-learning)**
### 作者
* Yufei Chen, Xi'an Jiaotong University & City University of Hong Kong
* Chao Shen, Xi'an Jiaotong University
* Cong Wang, City University of Hong Kong
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 迁移学习已经成为解决实践中训练数据稀缺问题的常见解决方案。它通过重用或微调通常公开可用的经过良好训练的教师模型的早期层，来训练指定的学生模型。然而，除了改进效用之外，转移的公共知识还会对模型的机密性带来潜在威胁，并进一步引发其他安全和隐私问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首次对迁移学习环境中的教师模型暴露威胁进行了全面的研究，旨在深入了解公共知识与模型机密性之间的紧张关系。为此，我们提出了一种教师模型指纹攻击方法，以推断学生模型的来源，即它所转移自的教师模型。具体而言，我们提出了一种新颖的基于优化的方法，精心生成查询以探测学生模型，实现我们的攻击。与现有的模型逆向工程方法不同，我们提出的指纹方法既不依赖于细粒度的模型输出（如后验概率），也不依赖于模型架构或训练数据集的辅助信息。我们系统地评估了我们提出的攻击的有效性。实证结果表明，我们的攻击能够准确地识别模型来源，并只需少量探测查询。此外，我们还展示了所提出的攻击可以作为促进其他针对机器学习模型的攻击（如模型盗取）的垫脚石。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yufei](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yufei)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yufei.pdf](https://www.usenix.org/system/files/sec22-chen-yufei.pdf)
## Hidden Trigger Backdoor Attack on NLP Models via Linguistic Style Manipulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hidden-trigger-backdoor-attack-on-nlp-models-via-linguistic-style-manipulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#hidden-trigger-backdoor-attack-on-nlp-models-via-linguistic-style-manipulation)**
### 作者
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Beina Sheng, Fudan University
* Jiaming Zhu, Fudan University
* Min Yang, Fudan University
### 摘要
> 深度神经网络（DNN）对后门（木马）攻击的脆弱性在图像领域已得到广泛研究。在后门攻击中，DNN被修改以在攻击者指定的输入（即触发器）下表现出预期的行为。然而，在自然语言处理（NLP）中探索DNN的后门脆弱性方面，最近的研究仅限于使用特别添加的单词/短语作为触发模式（即基于词语的触发器），这扭曲了基础句子的语义，导致了语言特征上的可察觉的异常，并且可以被潜在的防御技术所消除。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种基于语言风格的后门攻击LiMnguistic Style-Motivated（LISM），这是第一个利用隐式语言风格对NLP模型进行后门攻击的方法。除了对攻击成功率和正常模型性能的基本要求外，与以前基于词语的后门攻击相比，LISM实现了以下高级设计目标：(a) LISM利用文本风格转换模型来学习生成具有攻击者指定的语言风格（即触发器风格）的句子，从而在很大程度上保留了基础句子的恶意语义，并几乎不会暴露出可以被检测算法利用的异常情况。(b) 每个基础句子都会动态地改写为保持触发器风格，这几乎不依赖于常见单词或短语，因此可以避开现有的利用触发词和误分类之间强相关性的防御措施。对5种流行的模型架构、3个现实世界的安全关键任务、3种触发器风格和3种潜在对策的广泛评估，强烈验证了LISM的有效性和隐蔽性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pan-hidden](https://www.usenix.org/conference/usenixsecurity22/presentation/pan-hidden)
- **PDF:** [https://www.usenix.org/system/files/sec22-pan-hidden.pdf](https://www.usenix.org/system/files/sec22-pan-hidden.pdf)
## PoisonedEncoder: Poisoning the Unlabeled Pre-training Data in Contrastive Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poisonedencoder-poisoning-the-unlabeled-pre-training-data-in-contrastive-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#poisonedencoder-poisoning-the-unlabeled-pre-training-data-in-contrastive-learning)**
### 作者
* Hongbin Liu, Duke University
* Jinyuan Jia, Duke University
* Neil Zhenqiang Gong, Duke University
### 摘要
> 对比学习是一种使用大量未标记数据预训练图像编码器的方法，使得图像编码器可以作为通用特征提取器用于多个下游任务。在本研究中，我们提出了一种名为PoisonedEncoder的数据中毒攻击方法，针对对比学习进行攻击。具体而言，攻击者将精心设计的中毒输入注入未标记的预训练数据中，这样基于中毒编码器构建的多个目标下游任务的下游分类器将同时将攻击者选择的任意干净输入分类为攻击者选择的任意类别。我们将数据中毒攻击定义为一个双层优化问题，并提出一种适用于对比学习的方法来近似解决该问题。我们在多个数据集上进行评估，结果显示PoisonedEncoder实现了较高的攻击成功率，同时保持了基于中毒编码器构建的非攻击者选择输入的下游分类器的测试准确性。此外，我们还评估了针对PoisonedEncoder的五种防御方法，包括一种预处理方法、三种处理中方法和一种后处理方法。我们的结果表明，这些防御方法可以降低PoisonedEncoder的攻击成功率，但也会牺牲编码器的效用或需要大量的干净预训练数据集。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-hongbin](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-hongbin)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-hongbin.pdf](https://www.usenix.org/system/files/sec22-liu-hongbin.pdf)
## Double Trouble: Combined Heterogeneous Attacks on Non-Inclusive Cache Hierarchies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#double-trouble-combined-heterogeneous-attacks-on-non-inclusive-cache-hierarchies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#double-trouble-combined-heterogeneous-attacks-on-non-inclusive-cache-hierarchies)**
### 作者
* Antoon Purnal, imec-COSIC, KU Leuven
* Furkan Turan, imec-COSIC, KU Leuven
* Ingrid Verbauwhede, imec-COSIC, KU Leuven
### 摘要
> 随着通用处理器性能的不断提升减弱，计算系统越来越多地配备有领域专用加速器。今天的高端服务器将这些加速器与CPU紧密集成，例如直接访问CPU的最后一级缓存（LLC）。
> 
> 
> 
> 
> 
> 
> 
> 缓存是安全领域跨域信息泄漏的重要来源。本研究探讨了结合缓存攻击，以控制一个或多个加速器来补充传统的共同租住。最初被视为限制的这些加速器所施加的约束，实际上对攻击者有利。我们开发了一种新颖的加速器方法来查找逐出集，并利用对缓存行的精确双向控制来揭示Intel非包容缓存层次结构中的未记录行为。
> 
> 
> 
> 
> 
> 
> 
> 我们开发了一个紧凑且可扩展的FPGA硬件加速器来证明我们的发现。它以前所未有的速度构建逐出集（<200 µs），比现有技术快上一到三个数量级。即使在高噪声压力下，它仍保持出色的性能。我们还利用该加速器建立了具有细粒度空间的隐蔽通道，每个缓存集编码超过3位数。此外，它可以高效地逐出微小逐出集中的共享目标，推翻了逐出集必须与缓存关联度一样大的常见假设。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/purnal](https://www.usenix.org/conference/usenixsecurity22/presentation/purnal)
- **PDF:** [https://www.usenix.org/system/files/sec22-purnal.pdf](https://www.usenix.org/system/files/sec22-purnal.pdf)
## QuORAM: A Quorum-Replicated Fault Tolerant ORAM Datastore.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#quoram-a-quorum-replicated-fault-tolerant-oram-datastore) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#quoram-a-quorum-replicated-fault-tolerant-oram-datastore)**
### 作者
* Sujaya Maiyya, UC Santa Barbara
* Seif Ibrahim, UC Santa Barbara
* Caitlin Scarberry, UC Santa Barbara
* Divyakant Agrawal, UC Santa Barbara
* Amr El Abbadi, UC Santa Barbara
* Huijia Lin, University of Washington
* Stefano Tessaro, University of Washington
* Victor Zakhary, Oracle
### 摘要
> 由于将数据存储和处理外包给第三方云提供商而导致的隐私和安全挑战是众所周知的。关于数据隐私问题，忘记性RAM（ORAM）方案通过不仅通过加密隐藏数据的内容，而且混淆外包数据的访问模式，提供了强大的隐私保证。但是，大多数现有的ORAM数据存储均不具备容错性，即如果外部存储服务器（存储加密数据）或受信任的代理（存储加密密钥和其他元数据）崩溃，应用程序将丢失所有数据。为了实现容错性，我们提出了QuORAM，第一个使用基于议决的复制协议来复制数据的ORAM数据存储。QuORAM的贡献有三个方面：（i）它混淆访问模式以提供忘记性保证，（ii）采用一种新颖的无锁分散式复制协议来复制数据以实现容错性，（iii）它保证线性语义。对QuORAM进行实验评估显示了出乎意料的结果：与不安全的容错复制系统相比，QuORAM在实现忘记性方面的成本微不足道；QuORAM的峰值吞吐量是非复制基线的2.4倍；在吞吐量方面，QuORAM相比于依赖CockroachDB的ORAM数据存储系统（一种开源地理复制数据库），性能提升了33.2倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/maiyya](https://www.usenix.org/conference/usenixsecurity22/presentation/maiyya)
- **PDF:** [https://www.usenix.org/system/files/sec22-maiyya.pdf](https://www.usenix.org/system/files/sec22-maiyya.pdf)
## Post-Quantum Cryptography with Contemporary Co-Processors: Beyond Kronecker, Schönhage-Strassen & Nussbaumer.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#post-quantum-cryptography-with-contemporary-co-processors-beyond-kronecker-sch-nhage-strassen-nussbaumer) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#post-quantum-cryptography-with-contemporary-co-processors-beyond-kronecker-sch-nhage-strassen-nussbaumer)**
### 作者
* Joppe W. Bos, NXP Semiconductors
* Joost Renes, NXP Semiconductors
* Christine van Vredendaal, NXP Semiconductors
### 摘要
> 目前全球安装了超过300亿个物联网（物联网）设备。为了保护这些设备免受各种威胁，人们常常依赖于公钥密码学原语，但是在资源受限的物联网设备上进行计算的代价很高。为了支持这些操作，这些设备通常包括一个专用的协处理器用于加密程序，一般为大整数算术单元。现有的算术协处理器并没有提供下一代量子后密码学原语所期望的功能。不过，现代系统可能在未来很多年内仍将存在。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了Kronecker+算法，用于多项式在环Z[X]/(X^n +1)中的乘法运算，该算法是基于格的密码方案的算术基础。我们讨论了Kronecker+如何支持对已有协处理器进行重用，以用于后量子时代密码学，并且特别适用于由NIST领导的后量子标准化计划中的各种候选方案。我们通过将Kronecker+集成到Saber中来实践证明了我们算法的有效性，Saber是正在进行中的NIST标准化计划中的一个候选方案之一。在我们的目标平台上，即具有RSA和ECC加速专用算术协处理器的RV32IMC，Kronecker+矩阵乘法的性能比常规Kronecker替代方法快2.8倍，比Harvey的取反评估点方法快1.7倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/bos](https://www.usenix.org/conference/usenixsecurity22/presentation/bos)
- **PDF:** [https://www.usenix.org/system/files/sec22-bos.pdf](https://www.usenix.org/system/files/sec22-bos.pdf)
## FIXREVERTER: A Realistic Bug Injection Methodology for Benchmarking Fuzz Testing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fixreverter-a-realistic-bug-injection-methodology-for-benchmarking-fuzz-testing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#fixreverter-a-realistic-bug-injection-methodology-for-benchmarking-fuzz-testing)**
### 作者
* Zenong Zhang, University of Texas at Dallas
* Zach Patterson, University of Texas at Dallas
* Michael Hicks, University of Maryland and Amazon
* Shiyi Wei, University of Texas at Dallas
### 摘要
> 模糊测试是一个研究领域，提出的改进措施以快速的速度发表。这些提议在经验证明其能否比现状表现更好时进行评估，这需要使用具有明确定义的、真实的错误的目标程序作为基准。为了简化构建这样一个基准的过程，本文介绍了一种名为FIXREVERTER的工具，该工具可以自动向程序中注入真实的错误。FIXREVERTER以包含代码语法和语义条件的错误修复模式作为输入。如果通过静态分析检查，匹配指定语法的代码会在满足语义条件的情况下被撤销，从而重新引入一个可能的错误。本文重点研究了三种错误修复模式，分别是条件中止、条件执行和条件赋值，这是基于对一份Common Vulnerabilities and Exposures（CVEs）语料库中修复的研究。使用FIXREVERTER，我们已经构建了REVBUGBENCH，这包含了10个程序，我们已经向其中注入了近8000个错误。这些程序来自FuzzBench和Binutils，代表了模糊测试评估中常见的目标。我们已经将REVBUGBENCH集成到FuzzBench服务中，并用它来评估了五种模糊测试工具。模糊测试性能因模糊测试工具和程序而异，这是期望的。总体而言，报告了219个独特的错误，其中19%的错误仅被一个模糊测试工具检测到。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zenong](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zenong)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-zenong.pdf](https://www.usenix.org/system/files/sec22-zhang-zenong.pdf)
## Tightly Seal Your Sensitive Pointers with PACTight.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tightly-seal-your-sensitive-pointers-with-pactight) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#tightly-seal-your-sensitive-pointers-with-pactight)**
### 作者
* Mohannad Ismail, Virginia Tech
* Andrew Quach, Oregon State University
* Christopher Jelesnianski, Virginia Tech
* Yeongjin Jang, Oregon State University
* Changwoo Min, Virginia Tech
### 摘要
> ARM在台式机和数据中心中越来越受欢迎，这在安全攻击方面为ARM开辟了一个新的领域。ARM推出了指针认证(Pointer Authentication)，这是一个旨在通过密码学原语确保指针完整性的新的硬件安全特性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们利用指针认证(PA)构建了一个全新的方案，完全防止对安全敏感指针的任何误用。我们提出了PACTIGHT来严密封存这些指针。PACTIGHT利用了一个强大且独特的修饰符，解决了目前最先进的PA防御机制中存在的问题。我们实施了基于PACTIGHT机制的四种防御措施。我们的安全性和性能评估结果表明，PACTIGHT防御措施更加高效和安全。使用真实的PA指令，我们在包括NGINX Web服务器在内的30个不同应用程序上评估了PACTIGHT，即使在执行我们最强的防御时，平均性能开销也只有4.07%。PACTIGHT在真实硬件上使用真实的PA指令展示了其有效性和高效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ismail](https://www.usenix.org/conference/usenixsecurity22/presentation/ismail)
- **PDF:** [https://www.usenix.org/system/files/sec22-ismail.pdf](https://www.usenix.org/system/files/sec22-ismail.pdf)
## Total Eclipse of the Heart - Disrupting the InterPlanetary File System.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#total-eclipse-of-the-heart-disrupting-the-interplanetary-file-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#total-eclipse-of-the-heart-disrupting-the-interplanetary-file-system)**
### 作者
* Bernd Prünster, Institute of Applied Information Processing and Communications (IAIK), Graz University of Technology
* Alex, A-SIT Secure Information Technology Center Austria
* er Marsalek, A-SIT Secure Information Technology Center Austria
* Thomas Zefferer, A-SIT Plus GmbH
### 摘要
> 点对点网络是传统的客户端-服务器架构在语音IP电话和文件共享等多个应用领域的有吸引力的替代方案。最近，一种名为星际文件系统（IPFS）的新型点对点解决方案引起了人们的关注，它承诺重新去中心化网络。IPFS作为一个独立应用程序的使用越来越多，还作为各种其他去中心化解决方案的技术支柱而出现，并且甚至被用于规避审查。数百万用户使用去中心化应用程序依赖IPFS作为其中重要的构建模块。这种受欢迎程度也使得IPFS在大规模攻击中具有吸引力。我们在IPFS核心库中发现了一个概念性问题，并通过成功的端到端攻击展示了其利用方法。我们对公共IPFS网络上的IPFS参考实现进行了此攻击的评估，平均用户使用该网络共享和获取IPFS内容。通过对实时IPFS节点进行此攻击所得到的结果表明，可以通过适度的努力和有限的资源使任意IPFS节点被隔离于网络之外。与类似的研究相比，我们展示了我们的攻击即使在当前网络规模之外也能很好地扩展，并能够以惊人的低成本破坏整个公共IPFS网络。本文中描述的漏洞集已被命名为CVE-2020-10937。负责任的披露程序导致了部署了缓解措施。本文中提出的问题于2020年10月与协议实验室一起公开披露，该公司负责协调IPFS的开发。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/prunster](https://www.usenix.org/conference/usenixsecurity22/presentation/prunster)
- **PDF:** [https://www.usenix.org/system/files/sec22-prunster.pdf](https://www.usenix.org/system/files/sec22-prunster.pdf)
## PrivGuard: Privacy Regulation Compliance Made Easier.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#privguard-privacy-regulation-compliance-made-easier) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#privguard-privacy-regulation-compliance-made-easier)**
### 作者
* Lun Wang, UC Berkeley
* Usmann Khan, Georgia Tech
* Joseph Near, University of Vermont
* Qi Pang, Zhejiang University
* Jithendaraa Subramanian, NIT Tiruchirappalli
* Neel Somani, UC Berkeley
* Peng Gao, Virginia Tech
* Andrew Low, UC Berkeley
* Dawn Song, UC Berkeley
### 摘要
> 随着像GDPR和CCPA这样的隐私法规的不断推行，对于从小型初创企业到商业巨头的公司来说，持续遵守这些法规已成为一项昂贵的负担。问题的根源在于当今合规流程过于依赖人工审计，这种方式既昂贵又缓慢且容易出错。为了解决这个问题，我们提出了PrivGuard，这是一种新颖的系统设计，它减少了对人工参与的需求，并提高了合规流程的生产力。PrivGuard主要包括两个组成部分：(1) PrivAnalyzer，一种基于抽象解释的静态分析器，用于部分执行隐私法规；以及(2)一组组件，通过整个数据生命周期为数据提供强大的安全保护。为了验证这种方法的有效性，我们为PrivGuard开发了原型，并将其集成到一个工业级的数据治理平台中。我们的案例研究和评估结果表明，PrivGuard能够在对真实世界程序执行的过程中正确执行编码的隐私策略，并且具有合理的性能开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-lun](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-lun)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-lun.pdf](https://www.usenix.org/system/files/sec22-wang-lun.pdf)
## Stick It to The Man: Correcting for Non-Cooperative Behavior of Subjects in Experiments on Social Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stick-it-to-the-man-correcting-for-non-cooperative-behavior-of-subjects-in-experiments-on-social-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stick-it-to-the-man-correcting-for-non-cooperative-behavior-of-subjects-in-experiments-on-social-networks)**
### 作者
* Kaleigh Clary, University of Massachusetts Amherst
* Emma Tosch, University of Vermont
* Jeremiah Onaolapo, University of Vermont
* David D. Jensen, University of Massachusetts Amherst
### 摘要
> 大量关于网络和社会科学研究的研究探讨了干预网络系统的效果。几乎所有这些研究都假设网络参与者会以类似的方式对干预作出反应。然而，在现实世界的系统中，一部分参与者可能会以有意不同于其真实结果的方式作出反应。我们对非合作节点的影响以及这些节点在平均处理效应（ATE）估计中引入的偏差进行了描述。除了理论界限之外，我们还通过对生成的合成图和真实网络进行实验证明了估计偏差。我们证明了网络中的因果估计可能对非合作成员的行为敏感，并且我们确定了特别容易受到非合作反应影响的网络结构。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/clary](https://www.usenix.org/conference/usenixsecurity22/presentation/clary)
- **PDF:** [https://www.usenix.org/system/files/sec22-clary.pdf](https://www.usenix.org/system/files/sec22-clary.pdf)
## OVRseen: Auditing Network Traffic and Privacy Policies in Oculus VR.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ovrseen-auditing-network-traffic-and-privacy-policies-in-oculus-vr) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ovrseen-auditing-network-traffic-and-privacy-policies-in-oculus-vr)**
### 作者
* Rahmadi Triman, University of California, Irvine
* a, University of California, Irvine
* Hieu Le, University of California, Irvine
* Hao Cui, University of California, Irvine
* Janice Tran Ho, University of California, Irvine
* Anastasia Shuba, Independent Researcher
* Athina Markopoulou, University of California, Irvine
### 摘要
> 虚拟现实（VR）是一种新兴技术，既能开启新的应用，同时也带来隐私风险。本文着重研究Oculus VR（OVR），这是VR领域的主要平台，并从网络和隐私政策角度首次全面分析OVR应用程序及平台自身所暴露的个人数据。我们使用Quest 2头戴式设备进行实验，并测试了官方Oculus和SideQuest应用商店上最受欢迎的VR应用。我们开发了一种名为OVRseen的方法和系统，用于收集、分析和比对OVR上的网络流量和隐私政策。在网络方面，我们捕获并解密了VR应用的网络流量，这在OVR上以前是不可能的，并提取了数据流，定义为〈应用程序、数据类型、目的地〉。与移动和其他应用生态系统相比，我们发现OVR更加集中化且主要由跟踪和分析驱动，而不是第三方广告。我们展示了VR应用程序所暴露的数据类型包括可识别个人身份的信息（PII）、可用于指纹识别的设备信息以及特定于VR的数据类型。通过将网络流量中的数据流与应用程序隐私政策中的声明进行比较，我们发现约70％的OVR数据流没有得到适当披露。此外，我们从隐私政策中提取了附加上下文，并观察到69％的数据流用于与应用程序核心功能无关的目的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/trimananda](https://www.usenix.org/conference/usenixsecurity22/presentation/trimananda)
- **PDF:** [https://www.usenix.org/system/files/sec22-trimananda.pdf](https://www.usenix.org/system/files/sec22-trimananda.pdf)
## Half-Double: Hammering From the Next Row Over.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#half-double-hammering-from-the-next-row-over) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#half-double-hammering-from-the-next-row-over)**
### 作者
* Andreas Kogler, Graz University of Technology
* Jonas Juffinger, Graz University of Technology and Lamarr Security Research
* Salman Qazi, Google
* Yoongu Kim, Google
* Moritz Lipp, Amazon Web Services
* Nicolas Boichat, Google
* Eric Shiu, Rivos
* Mattias Nissler, Google
* Daniel Gruss, Graz University of Technology
### 摘要
> Rowhammer是现代DRAM中的一种漏洞，重复访问一个行（侵略者）会产生电干扰，其累积效果会导致相邻行（受害者）中的位翻转。因此，Rowhammer防御措施假设侵略者-受害者对是相邻的，包括LPDDR4和DDR4中的那些对，尤其是TRR。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了Half-Double，一种将Rowhammer扩展到超出直接相邻行的方法。使用Half-Double，我们通过将多次访问到距离为2的行与少量次访问到距离为1的行相结合，来对受害者引发错误。我们的实验证明，这些累积效果会在受害者行中引发足够的电干扰，从而导致位翻转。我们在一个完全更新的系统上进行了Half-Double攻击的概念验证，以展示Half-Double的实际相关性。我们在我们的端到端Half-Double攻击中使用了副通道、一种名为BlindHammering的新技术、一种新的喷洒技术，以及Spectre攻击。在配备ECC和TRR保护的LPDDR4x内存的最新款Chromebook上，攻击平均时间不到45分钟。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-half-double](https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-half-double)
- **PDF:** [https://www.usenix.org/system/files/sec22-kogler-half-double.pdf](https://www.usenix.org/system/files/sec22-kogler-half-double.pdf)
## RETBLEED: Arbitrary Speculative Code Execution with Return Instructions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#retbleed-arbitrary-speculative-code-execution-with-return-instructions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#retbleed-arbitrary-speculative-code-execution-with-return-instructions)**
### 作者
* Johannes Wikner, ETH Zurich
* Kaveh Razavi, ETH Zurich
### 摘要
> 现代操作系统依赖于针对硬件攻击的软件防御。然而，这些防御措施的效果取决于其对底层硬件的假设。在本文中，我们对retpoline背后的一些关键假设进行了验证，retpoline是一种被广泛使用的对抗Spectre分支目标注入（BTI）的缓解措施，可以将易受攻击的间接分支转换为受保护的返回。我们提出了一种名为RETBLEED的新的Spectre-BTI攻击，在完全打补丁的Intel和AMD系统上泄漏任意内核内存。两个关键点使得RETBLEED成为可能：首先，我们展示了返回指令在某些微架构相关条件下的行为类似于间接分支，而这些条件是我们通过逆向工程得出的。我们的动态分析框架发现了许多在Linux内核中可以通过非特权系统调用访问的可利用的返回指令。其次，我们展示了一个非特权攻击者如何通过分支进入内核内存，从而任意控制这些返回指令的预测目标。RETBLEED在英特尔Coffee Lake上以每秒219字节的速度泄漏特权内存，在AMD Zen 2上以每秒3.9 KB的速度泄漏特权内存。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wikner](https://www.usenix.org/conference/usenixsecurity22/presentation/wikner)
- **PDF:** [https://www.usenix.org/system/files/sec22-wikner.pdf](https://www.usenix.org/system/files/sec22-wikner.pdf)
## PISTIS: Trusted Computing Architecture for Low-end Embedded Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pistis-trusted-computing-architecture-for-low-end-embedded-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pistis-trusted-computing-architecture-for-low-end-embedded-systems)**
### 作者
* Michele Grisafi, University of Trento
* Mahmoud Ammar, Huawei Technologies
* Marco Roveri, University of Trento
* Bruno Crispo, University of Trento
### 摘要
> 最近，已经提出了几种硬件辅助安全架构，以缓解与互联网设备的不断增长的网络攻击。然而，这些提议与已经部署的资源有限的嵌入式设备的大部分不兼容，原因是硬件限制。为了填补这个空白，我们提出了PISTIS，这是一种适用于裸机低端嵌入式设备的纯软件可信计算架构。PISTIS可以实现多种安全服务，如内存隔离、远程证明和安全代码更新，同时完全支持直接内存访问（DMA）和中断等关键功能。PISTIS的目标是广泛范围的嵌入式设备，包括那些缺乏任何硬件保护机制的设备，只需要几千字节的闪存来存储其根信任（RoT）软件。PISTIS的整个架构是通过利用诸如汇编级代码验证和选择性软件虚拟化等内存保护技术从头开始构建的。最重要的是，PISTIS通过经过正式验证的设计实现了强大的安全保证。我们在MSP430架构上实施和评估了PISTIS，显示了在运行时、内存占用和功耗方面合理的开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/grisafi](https://www.usenix.org/conference/usenixsecurity22/presentation/grisafi)
- **PDF:** [https://www.usenix.org/system/files/sec22-grisafi.pdf](https://www.usenix.org/system/files/sec22-grisafi.pdf)
## Rapid Prototyping for Microarchitectural Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rapid-prototyping-for-microarchitectural-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#rapid-prototyping-for-microarchitectural-attacks)**
### 作者
* Catherine Easdon, Dynatrace Research and Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Martin Schwarzl, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 近年来，微架构攻击已被证明是一种强大的攻击方式。然而，我们的经验分析表明，存在许多实施挑战，阻碍了对这些漏洞的发现和随后的缓解。在本文中，我们研究了攻击开发过程、现有工具的特性和可用性，以及从业人员面临的现实挑战。我们提出了一种基于快速原型开发的微架构攻击新方法，并提出了两个开源软件框架——libtea和SCFirefox，改进了最先进的工具，以促进攻击的快速原型开发。
> 
> 
> 
> 
> 
> 
> 
> libtea证明了原生代码攻击可以足够抽象化，以允许跨平台实施，同时仍然具有对微架构行为的细粒度控制。我们通过开发Foreshadow和LVI攻击的概念验证来评估其有效性。我们的LVI原型在x86-64和ARMv8-A上运行，并是在ARM上首次公开展示LVI。SCFirefox是第一个用于基于浏览器的微架构攻击开发的工具，提供了libtea在JavaScript中的功能。这个功能可以用来迭代地将原型移植到未修改的浏览器。我们通过原型化第一个基于浏览器的ZombieLoad攻击，并得到一个在最新版本的Firefox上运行的原始JavaScript和WebAssembly技术验证的示例。我们讨论了libtea和SCFirefox如何通过为攻击研究人员和防御者提供原型攻击和评估可行性的框架，为安全领域做出贡献。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/easdon](https://www.usenix.org/conference/usenixsecurity22/presentation/easdon)
- **PDF:** [https://www.usenix.org/system/files/sec22-easdon.pdf](https://www.usenix.org/system/files/sec22-easdon.pdf)
## ProFactory: Improving IoT Security via Formalized Protocol Customization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#profactory-improving-iot-security-via-formalized-protocol-customization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#profactory-improving-iot-security-via-formalized-protocol-customization)**
### 作者
* Fei Wang, Purdue University
* Jianliang Wu, Purdue University
* Yuhong Nan, Purdue University
* Yousra Aafer, University of Waterloo
* Xiangyu Zhang, Purdue University
* Dongyan Xu, Purdue University
* Mathias Payer, EPFL
### 摘要
> 随着物联网应用的广泛采用，设计和实施安全的物联网协议变得非常重要。协议安全的现有研究表明，大多数被披露的协议漏洞是由于错误实现的消息解析和网络状态机造成的。我们希望在开发之前避免测试和修复这些错误，因为这样做非常昂贵。为此，我们提出了ProFactory，它以形式化和明确的方式建模协议，检查模型的正确性，并生成安全的协议实现。我们利用ProFactory生成了一组蓝牙和Zigbee系列的物联网协议，并评估结果表明，已避免了82个已知的漏洞。ProFactory将对公众开放。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/wang-fei](https://www.usenix.org/conference/usenixsecurity22/presentation/wang-fei)
- **PDF:** [https://www.usenix.org/system/files/sec22-wang-fei.pdf](https://www.usenix.org/system/files/sec22-wang-fei.pdf)
## Using Trātṛ to tame Adversarial Synchronization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#using-tr-t-to-tame-adversarial-synchronization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#using-tr-t-to-tame-adversarial-synchronization)**
### 作者
* Yuvraj Patel, University of Wisconsin–Madison
* Chenhao Ye, University of Wisconsin–Madison
* Akshat Sinha, University of Wisconsin–Madison
* Abigail Matthews, University of Wisconsin–Madison
* Andrea C. Arpaci-Dusseau, University of Wisconsin–Madison
* Remzi H. Arpaci-Dusseau, University of Wisconsin–Madison
* Michael M. Swift, University of Wisconsin–Madison
### 摘要
> 我们展示了Linux容器对一类新的攻击——同步攻击——是脆弱的，这些攻击利用内核同步来损害应用程序的性能，在同一个操作系统上运行的其他容器中，一个非特权攻击者可以控制内核关键部分的持续时间来使受害者停滞。此外，这些攻击中的一个子集——框架攻击——会在攻击者静止之后持续损害性能，通过扩展数据结构。我们演示了Linux内核上涉及inode缓存、目录缓存和futex表的三种这样的攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们设计了Trātṛ，一个Linux内核扩展，用于检测和减轻同步和框架攻击的低开销，防止攻击恶化，并通过修复数据结构将其恢复到攻击之前的状态。使用微基准测试和真实工作负载，我们展示了Trātṛ可以在几秒内检测到攻击并立即恢复，保证与基准相似的性能。我们的实验表明，Trātṛ可以检测到同时进行的攻击并以最小的开销进行减轻。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/patel](https://www.usenix.org/conference/usenixsecurity22/presentation/patel)
- **PDF:** [https://www.usenix.org/system/files/sec22-patel.pdf](https://www.usenix.org/system/files/sec22-patel.pdf)
## ÆPIC Leak: Architecturally Leaking Uninitialized Data from the Microarchitecture.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pic-leak-architecturally-leaking-uninitialized-data-from-the-microarchitecture) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#pic-leak-architecturally-leaking-uninitialized-data-from-the-microarchitecture)**
### 作者
* Pietro Borrello, Sapienza University of Rome
* Andreas Kogler, Graz University of Technology
* Martin Schwarzl, Graz University of Technology
* Moritz Lipp, Amazon Web Services
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> CPU漏洞削弱了软件和硬件安全改进所提供的安全保障。虽然短暂执行攻击的发现增加了对微架构级别CPU漏洞的关注，但是架构级的CPU漏洞还没有得到充分研究。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们系统地分析现有的CPU漏洞，表明CPU受到漏洞的影响，其根本原因与复杂软件中的根本原因相匹配。我们展示了短暂执行攻击和架构漏洞经常源于相同类型的bug，并确定了空白点。通过调查空白点，我们将重点放在架构上不正确初始化的数据位置上。
> 
> 
> 
> 
> 
> 
> 
> 我们发现了ÆPIC Leak，这是第一个能够在不使用侧信道的情况下从微架构泄露过时数据的架构级CPU漏洞。ÆPIC Leak适用于所有最新的基于Sunny Cove的英特尔CPU（即Ice Lake和Alder Lake）。它通过读取未定义APIC寄存器范围而在架构上泄露了错误返回的过时数据。ÆPIC Leak会从超级队列中采样在L2缓存和最后一级缓存之间传输的数据，包括SGX enclave数据。我们的攻击目标包括正在使用的数据，如寄存器值和内存加载，以及静止时的数据，如SGX enclave数据页。我们的端到端攻击能够在几秒钟内提取出AES-NI、RSA甚至Intel SGX的认证密钥。我们讨论了缓解措施，并得出结论，ÆPIC Leak的唯一短期缓解措施是禁用APIC MMIO或者不依赖于SGX。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/borrello](https://www.usenix.org/conference/usenixsecurity22/presentation/borrello)
- **PDF:** [https://www.usenix.org/system/files/sec22-borrello.pdf](https://www.usenix.org/system/files/sec22-borrello.pdf)
## SAPIC+: protocol verifiers of the world, unite!
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sapic-protocol-verifiers-of-the-world-unite) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sapic-protocol-verifiers-of-the-world-unite)**
### 作者
* Vincent Cheval, Inria Paris
* Charlie Jacomme, CISPA Helmholtz Center for Information Security
* Steve Kremer, Université de Lorraine LORIA & Inria Nancy
* Robert Künnemann, CISPA Helmholtz Center for Information Security
### 摘要
> 符号安全协议验证器已经达到了高度自动化和成熟度的程度。今天，专家们能够对真实世界的协议进行建模，但通常需要模型特定的编码和对每个工具的优缺点有深入的了解。借助SAPIC+，我们引入了一个协议验证平台，免除了这种负担，并允许在任何开发阶段选择合适的工具。我们基于SAPIC到TAMARIN的现有编译器，并通过自动转换将SAPIC+扩展到PROVERIF和DEEPSEC，同时对现有的转换进行了功能强大且协议无关的优化。我们证明了这些转换的每个部分都是正确的。因此，用户可以使用单个SAPIC+文件来验证指定协议的可达性和等价性属性，无论是使用PROVERIF、TAMARIN还是DEEPSEC。此外，翻译的正确性允许直接假设由另一个工具证明的结果，从而利用每个工具的各自优势。我们通过分析各种现有模型来展示我们的方法。这包括对5G认证协议的大型案例研究，在TAMARIN中进行了先前分析。通过在SAPIC+中对该模型进行编码，我们展示了我们方法的有效性。此外，我们还研究了四个新的案例研究：LAKE-EDHOC和Privacy-Pass协议（都在标准化过程中），具有代理转发功能的SSH协议，以及最近的KEMTLS协议，这是主要TLS密钥交换的后量子版本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/cheval](https://www.usenix.org/conference/usenixsecurity22/presentation/cheval)
- **PDF:** [https://www.usenix.org/system/files/sec22-cheval.pdf](https://www.usenix.org/system/files/sec22-cheval.pdf)
## On the Security Risks of AutoML.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#on-the-security-risks-of-automl) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#on-the-security-risks-of-automl)**
### 作者
* Ren Pang, Pennsylvania State University
* Zhaohan Xi, Pennsylvania State University
* Shouling Ji, Zhejiang University
* Xiapu Luo, Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
### 摘要
> 神经架构搜索（NAS）代表着一种新兴的机器学习（ML）范式，可以自动搜索适合给定任务的模型架构，极大地简化了ML系统的开发，并推动了ML民主化的趋势。然而，到目前为止，人们对NAS可能带来的安全风险知之甚少，考虑到NAS生成的模型在关键领域的使用日益增多，这是令人担忧的。
> 
> 
> 
> 
> 
> 
> 
> 本研究是弥合这一差距的一个坚实的初始步骤。首先，通过对10种流行的NAS方法的广泛实证研究，我们展示了与手动设计的对应模型相比，NAS生成的模型往往更容易受到各种恶意篡改（例如，对抗性逃逸、模型中毒、功能窃取）的攻击。进一步，通过实证和分析证据，我们为这种现象提供了可能的解释：鉴于庞大的搜索空间和训练成本，大多数NAS方法更偏好在早期训练阶段快速收敛的模型；这种偏好导致了与攻击漏洞相关的架构特性（例如，高损失平滑度，低梯度方差）。我们的发现不仅揭示了模型特性和攻击漏洞之间的关系，还暗示了不同攻击之间的内在联系。最后，我们讨论了减轻这些缺点的潜在方法，包括增加单元深度和抑制跳跃连接，这为几个有前途的研究方向提供了指导。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pang-ren](https://www.usenix.org/conference/usenixsecurity22/presentation/pang-ren)
- **PDF:** [https://www.usenix.org/system/files/sec22-pang-ren.pdf](https://www.usenix.org/system/files/sec22-pang-ren.pdf)
## Dos and Don'ts of Machine Learning in Computer Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dos-and-donts-of-machine-learning-in-computer-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#dos-and-donts-of-machine-learning-in-computer-security)**
### 作者
* Daniel Arp, Technische Universität Berlin
* Erwin Quiring, Technische Universität Braunschweig
* Feargus Pendlebury, King's College London and Royal Holloway, University of London and The Alan Turing Institute
* Alex, Technische Universität Braunschweig
* er Warnecke, Technische Universität Braunschweig
* Fabio Pierazzi, King's College London
* Christian Wressnegger, KASTEL Security Research Labs and Karlsruhe Institute of Technology
* Lorenzo Cavallaro, University College London
* Konrad Rieck, Technische Universität Braunschweig
### 摘要
> 随着计算系统处理能力的增强和大规模数据集的可用性不断增加，机器学习算法在许多不同领域取得了重大突破。这一发展对计算机安全产生了影响，催生了一系列基于学习的安全系统的研究工作，如恶意软件检测、漏洞发现和二进制代码分析。尽管具有巨大潜力，但机器学习在安全领域存在微妙的陷阱，这些陷阱削弱了其性能，并使学习型系统在安全任务和实际部署中具有潜在的不适用性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们以批判的眼光审视这个问题。首先，我们识别了学习型安全系统设计、实现和评估中的常见陷阱。我们对过去10年的顶级安全会议上的30篇论文进行了研究，并确认了这些陷阱在当前安全领域的文献中普遍存在。通过实证分析，我们进一步演示了个别陷阱如何导致不切实际的性能和解释，阻碍对所面临安全问题的理解。作为解决办法，我们提出了可行的建议，以帮助研究人员尽可能避免或减轻这些陷阱。此外，我们还确定了在安全领域应用机器学习时的未解决问题，并提供了进一步研究方向的指引。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/arp](https://www.usenix.org/conference/usenixsecurity22/presentation/arp)
- **PDF:** [https://www.usenix.org/system/files/sec22-arp.pdf](https://www.usenix.org/system/files/sec22-arp.pdf)
## Exploring the Security Boundary of Data Reconstruction via Neuron Exclusivity Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#exploring-the-security-boundary-of-data-reconstruction-via-neuron-exclusivity-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#exploring-the-security-boundary-of-data-reconstruction-via-neuron-exclusivity-analysis)**
### 作者
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Yifan Yan, Fudan University
* Jiaming Zhu, Fudan University
* Min Yang, Fudan University
### 摘要
> 在现有的神经网络梯度隐私攻击中，数据重构攻击是一种严重威胁私密训练数据的攻击方式，该攻击通过从梯度中逆向工程训练批次数据。尽管这种攻击在大型架构和小型训练批次上取得了实证成功，但在较小的架构或较大的批次遭受攻击时，重构准确性也存在不稳定性。由于现有基于学习的攻击方法的弱解释能力，对于数据重构攻击的可行性、何时以及如何进行攻击了解甚少。
> 
> 
> 
> 
> 
> 
> 
> 在我们的工作中，我们首次以微观视角对具有修正线性单元（ReLU）的神经网络进行了数据重构的安全边界的分析研究，ReLU是实践中最流行的激活函数。我们首次以神经元的独占状态（通过每批次训练样本中仅激活一个样本的ReLU数量来索引）来表征数据重构攻击的不安全/安全边界。直观地说，我们证明具有更多独占激活神经元（ExANs）的训练批次更容易受到数据重构攻击，反之亦然。一方面，我们构建了一种新颖的确定性攻击算法，其在重构神经网络不安全边界上的训练批次上明显优于先前的攻击方法。与此同时，对于位于安全边界上的训练批次，我们证明了无法进行唯一重构的不可能性，并基于此设计了一种独占性减少策略，以扩大安全边界以用于缓解目的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/pan-exploring](https://www.usenix.org/conference/usenixsecurity22/presentation/pan-exploring)
- **PDF:** [https://www.usenix.org/system/files/sec22-pan-exploring.pdf](https://www.usenix.org/system/files/sec22-pan-exploring.pdf)
## On the Necessity of Auditable Algorithmic Definitions for Machine Unlearning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#on-the-necessity-of-auditable-algorithmic-definitions-for-machine-unlearning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#on-the-necessity-of-auditable-algorithmic-definitions-for-machine-unlearning)**
### 作者
* Anvith Thudi, University of Toronto and Vector Institute
* Hengrui Jia, University of Toronto and Vector Institute
* Ilia Shumailov, University of Toronto and Vector Institute
* Nicolas Papernot, University of Toronto and Vector Institute
### 摘要
> 机器遗忘，即让模型忘记部分训练数据，随着隐私法规促进有关被遗忘权的各种变体越来越重要。在深度学习的背景下，机器遗忘的方法可以广泛分为两类：精确遗忘方法和近似遗忘方法。其中，精确遗忘方法通过重新从头训练模型来正式消除数据点对模型的影响，而近似遗忘方法则通过近似模型参数以节约计算成本。在本文中，我们首先展示了近似遗忘的定义是错误的，因为可以使用不同的数据集得到相同的模型，从而在不修改模型的情况下进行遗忘。然后，我们转向精确遗忘方法，并询问如何验证它们的遗忘声明。我们的研究结果表明，即使对于给定的训练轨迹，也无法正式证明在训练过程中某些数据点的缺失。因此，我们得出结论，只有在算法级别上，遗忘才能明确定义，即一个实体的唯一可以接受审查的遗忘声明是他们使用了一种特定的算法，旨在允许在审计过程中进行外部审查。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/thudi](https://www.usenix.org/conference/usenixsecurity22/presentation/thudi)
- **PDF:** [https://www.usenix.org/system/files/sec22fall_thudi.pdf](https://www.usenix.org/system/files/sec22fall_thudi.pdf)
## "The Same PIN, Just Longer": On the (In)Security of Upgrading PINs from 4 to 6 Digits.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-same-pin-just-longer-on-the-in-security-of-upgrading-pins-from-4-to-6-digits) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#the-same-pin-just-longer-on-the-in-security-of-upgrading-pins-from-4-to-6-digits)**
### 作者
* Collins W. Munyendo, The George Washington University
* Philipp Markert, Ruhr University Bochum
* Alex, University of Chicago
* ra Nisenoff, University of Chicago
* Miles Grant, The George Washington University
* Elena Korkes, The George Washington University
* Blase Ur, University of Chicago
* Adam J. Aviv, The George Washington University
### 摘要
> 为了提高安全性，诸如苹果公司等公司已经从要求4位数字密码升级到6位数字密码，例如在智能手机解锁等环境中。因此，使用4位数字密码的用户必须为同一设备或账户“升级”为6位数字密码。在一项在线用户研究中（n = 1010），我们探讨了这种升级的安全性。参与者使用自己的智能手机首先选择一个4位数字密码。然后，他们被要求选择一个使用五种随机分配的理由之一来设定6位数字密码。在一次猜测一小部分常见密码（10-30个）的在线攻击中，我们观察到6位数字密码比4位数字密码的安全性仅有微小改善。为了了解4位和6位数字密码之间的关系，我们对PIN密码升级进行了针对性攻击的建模。我们发现，了解用户先前4位数字密码的攻击者在猜测他们的6位数字密码时表现明显优于那些不了解的攻击者，只需使用基本启发式方法（例如将数字添加到4位数字密码）进行少数几次猜测。当以“设备升级”为理由时，选择6位数字密码的参与者选择的密码在针对性攻击中最容易被猜测，攻击者仅在10次尝试中成功猜测超过25％的密码，在30次尝试中超过30％。我们的结果表明，强制用户升级到6位数字密码虽然增加了易用性负担，但提供的安全性改进有限。因此，系统设计者在要求升级之前应仔细考虑这种权衡。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/munyendo](https://www.usenix.org/conference/usenixsecurity22/presentation/munyendo)
- **PDF:** [https://www.usenix.org/system/files/sec22-munyendo.pdf](https://www.usenix.org/system/files/sec22-munyendo.pdf)
## Where to Recruit for Security Development Studies: Comparing Six Software Developer Samples.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#where-to-recruit-for-security-development-studies-comparing-six-software-developer-samples) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#where-to-recruit-for-security-development-studies-comparing-six-software-developer-samples)**
### 作者
* Harjot Kaur, Leibniz University Hannover
* Sabrina Amft, CISPA Helmholtz Center for Information Security
* Daniel Votipka, Tufts University
* Yasemin Acar, Max Planck Institute for Security and Privacy and George Washington University
* Sascha Fahl, CISPA Helmholtz Center for Information Security and Leibniz University Hannover
### 摘要
> 研究开发人员是可用安全性和隐私研究的重要方面。特别是，近年来对安全性API的可用性、开发过程中信息源的安全使用以及IDE安全插件的有效性等安全开发挑战的研究引起了人们的关注。然而，招募具有软件开发经验的熟练参与者特别具有挑战性，通常不清楚安全研究人员可以从某些参与者样本中期望什么，这可能使研究结果难以比较和解释。因此，在这项工作中，我们首次研究了不同平台在招募具有软件开发经验的参与者进行安全开发研究方面的机会和挑战。首先，我们在59篇论文中确定了流行的招募平台。然后，我们在六个招募平台上进行了基于自报告的软件开发经验的在线比较研究，共有706名参与者。通过在线问卷调查，我们调查了参与者的编程和安全经验、技能和知识。我们发现，在所有样本中，参与者都报告了丰富的一般软件开发和安全经验、技能和知识。根据我们的结果，我们推荐从Upwork招募开发人员进行实际编码研究，同时在Amazon MTurk上进行预筛查调查以减少更多的干扰。这两个平台以及Freelancer也被推荐用于安全研究。我们通过讨论我们的研究结果对未来安全开发研究的影响来结束本文。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kaur](https://www.usenix.org/conference/usenixsecurity22/presentation/kaur)
- **PDF:** [https://www.usenix.org/system/files/sec22-kaur.pdf](https://www.usenix.org/system/files/sec22-kaur.pdf)
## Investigating State-of-the-Art Practices for Fostering Subjective Trust in Online Voting through Interviews.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#investigating-state-of-the-art-practices-for-fostering-subjective-trust-in-online-voting-through-interviews) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#investigating-state-of-the-art-practices-for-fostering-subjective-trust-in-online-voting-through-interviews)**
### 作者
* Karola Marky, Leibniz University Hannover and University of Glasgow
* Paul Gerber, Technical University of Darmstadt
* Sebastian Günther, Technical University of Darmstadt
* Mohamed Khamis, University of Glasgow
* Maximilian Fries, Technical University of Darmstadt
* Max Mühlhäuser, Technical University of Darmstadt
### 摘要
> 确保选民的主观信任是采用任何投票系统的关键。因此，研究人员、专家和政策制定者已经提出并实施了促进选民对在线投票的信任的做法。最先进的做法包括安全特征、公共信息或评估。然而，目前尚不清楚这些做法如何影响选民的主观信任。通过对26名参与者进行采访，本研究首次对选民在评估帮助他们确定对互联网投票的信任的最先进做法时的感知进行了分析。在我们的研究结果中，我们展示了我们认为是强制性的一些做法，例如专家评估。此外，我们发现了一些能够促进信任的做法，如个人可验证性。而其他一些做法，如投票更新，由于不熟悉产生了负面影响。我们还报告了误解，并讨论了通过不同的信息界面或作为选举软件的一部分来解决这些误解的方法。最后，我们列出了有关具体实现及时做法的建议，以供开发人员和政策制定者参考。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/marky](https://www.usenix.org/conference/usenixsecurity22/presentation/marky)
- **PDF:** [https://www.usenix.org/system/files/sec22-marky.pdf](https://www.usenix.org/system/files/sec22-marky.pdf)
## Electronic Monitoring Smartphone Apps: An Analysis of Risks from Technical, Human-Centered, and Legal Perspectives.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#electronic-monitoring-smartphone-apps-an-analysis-of-risks-from-technical-human-centered-and-legal-perspectives) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#electronic-monitoring-smartphone-apps-an-analysis-of-risks-from-technical-human-centered-and-legal-perspectives)**
### 作者
* Kentrell Owens, University of Washington
* Anita Alem, Harvard Law School
* Franziska Roesner, University of Washington
* Tadayoshi Kohno, University of Washington
### 摘要
> 电子监控是利用技术追踪被指控或已定罪的犯罪者（或违反民事规定者）的一种“替代监禁”的方式。传统上，这种技术是以脚踝监控器的形式存在的，但最近美国的联邦、州和地方机构正转向使用智能手机应用进行电子监控。这些应用旨在使监控对社区监管人员和被监控者更简单、更方便。然而，由于智能手机在人们生活中具有多功能性以及智能手机可提供的大量敏感信息（如传感器数据），这给被迫使用这些应用的人们带来了新的风险。
> 
> 
> 
> 
> 
> 
> 
> 为了了解使用这些应用的人们可能面临的与隐私相关以及其他风险的类型，我们对16个用于电子监控的安卓应用进行了以隐私为导向的分析。我们首先从技术角度对这些应用进行了静态和（有限的）动态分析。我们还分析了在Google Play商店中的用户评论以了解使用这些应用的人们的体验，以及隐私政策。我们发现这些应用包含大量追踪器，它们请求的权限差异很大（最常见的是位置权限），而用户评论表明人们认为这些应用具有侵犯性且经常出现功能故障。我们鼓励移动应用市场在电子监控应用的未来中重新考虑他们的角色，并鼓励计算机安全和隐私研究人员考虑他们在审计刑罚技术中的潜在角色。我们希望这项工作能够在这个隐晦的生态系统中带来更多的透明度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/owens](https://www.usenix.org/conference/usenixsecurity22/presentation/owens)
- **PDF:** [https://www.usenix.org/system/files/sec22-owens.pdf](https://www.usenix.org/system/files/sec22-owens.pdf)
## MAGE: Mutual Attestation for a Group of Enclaves without Trusted Third Parties.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mage-mutual-attestation-for-a-group-of-enclaves-without-trusted-third-parties) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#mage-mutual-attestation-for-a-group-of-enclaves-without-trusted-third-parties)**
### 作者
* Guoxing Chen, Shanghai Jiao Tong University
* Yinqian Zhang, Southern University of Science and Technology
### 摘要
> 远程认证机制使得一个飞地能够向另一个飞地证明其身份（通常由飞地的初始代码和数据表示）。为了验证被认证的身份是否可信，一个飞地通常会预先将其信任的飞地的身份包含在其自身的初始数据中，假设在运行时没有可信的第三方来提供这一信息。然而，当这两个飞地之间需要相互信任时，同时将对方的身份分别包含在自己的初始数据中是不可行的，因为对初始数据的任何更改都将改变它们的身份，使之前包含的身份无效。在本文中，我们提出了一种名为MAGE的框架，使一组飞地能够在没有可信的第三方的情况下相互认证。特别地，我们引入了一种技术来为这些飞地进行仪器化，以便它们每个都能够仅使用自己的初始数据来推导出其他飞地的身份。我们还提供了一个基于Intel SGX SDK的开源原型实现，以便促进飞地开发人员采用这种技术。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-guoxing](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-guoxing)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-guoxing.pdf](https://www.usenix.org/system/files/sec22-chen-guoxing.pdf)
## Elasticlave: An Efficient Memory Model for Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#elasticlave-an-efficient-memory-model-for-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#elasticlave-an-efficient-memory-model-for-enclaves)**
### 作者
* Jason Zhijingcheng Yu, National University of Singapore
* Shweta Shinde, ETH Zurich
* Trevor E. Carlson, National University of Singapore
* Prateek Saxena, National University of Singapore
### 摘要
> 可信执行环境（TEE）将用户空间应用程序隔离到安全的隔离区，无需信任操作系统。现有的TEE内存模型过于死板，不允许隔离区与其他隔离区共享内存。这种缺乏必要功能破坏了与共享内存、管道和快速互斥体等多种结构的兼容性，而这些结构在数据密集型应用中经常需要。在这项工作中，我们提出了一种新的TEE内存模型，名为Elasticlave，可以实现共享。Elasticlave在管理访问权限方面取得了安全和灵活性之间的平衡。我们在RISC-V上实现了Elasticlave，与原生（非TEE）执行相比，数据共享工作负载的性能开销约为10%。相比之下，在死板的TEE设计上进行类似安全实现的工作负载需要1-2个数量级的性能开销。因此，Elasticlave实现了更好的性能的跨隔离区数据共享。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yu-jason](https://www.usenix.org/conference/usenixsecurity22/presentation/yu-jason)
- **PDF:** [https://www.usenix.org/system/files/sec22-yu-jason.pdf](https://www.usenix.org/system/files/sec22-yu-jason.pdf)
## SGXLock: Towards Efficiently Establishing Mutual Distrust Between Host Application and Enclave for SGX.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sgxlock-towards-efficiently-establishing-mutual-distrust-between-host-application-and-enclave-for-sgx) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#sgxlock-towards-efficiently-establishing-mutual-distrust-between-host-application-and-enclave-for-sgx)**
### 作者
* Yuan Chen, Zhejiang University
* Jiaqi Li, Zhejiang University
* Guorui Xu, Zhejiang University
* Yajin Zhou, Zhejiang University
* Zhi Wang, Florida State University
* Cong Wang, City University of Hong Kong
* Kui Ren, Zhejiang University
### 摘要
> 自从推出以来，SGX已被用于保护各种类型的应用程序。然而，现有系统通常假设存在可信托的飞地，忽视了不可信飞地引起的安全问题。例如，一个易受攻击（甚至是恶意的）第三方飞地可以被利用来攻击主机应用和系统的其余部分。在本文中，我们提出了一种有效的机制来限制不可信飞地的行为。特别是，不可信飞地的威胁来自于飞地-主机的不对称性，这可以被滥用来访问其主机应用程序的任意内存区域，在离开飞地后跳转到任意代码位置，并伪造堆栈寄存器以操纵保存的上下文。我们的解决方案打破了这种不对称性，建立了主机应用程序和飞地之间的相互不信任关系。具体而言，它利用Intel MPK实现了高效的内存隔离，并使用x86单步调试机制捕获飞地退出事件。然后对跳转目标和堆栈指针进行完整性检查。我们已经实现了一个原型系统，并解决了两个实际挑战。通过多个微基准测试和代表性的真实应用程序的评估证明了我们系统的有效性和效率，在性能方面的开销不到4%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yuan](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-yuan)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-yuan.pdf](https://www.usenix.org/system/files/sec22-chen-yuan.pdf)
## Minefield: A Software-only Protection for SGX Enclaves against DVFS Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#minefield-a-software-only-protection-for-sgx-enclaves-against-dvfs-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#minefield-a-software-only-protection-for-sgx-enclaves-against-dvfs-attacks)**
### 作者
* Andreas Kogler, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> 现代CPU根据工作负载调整时钟频率和电压水平以减少能量消耗和热量散发。这种机制称为动态电压频率缩放（DVFS），由特权软件控制，但影响包括SGX在内的所有执行模式。先前的研究表明，操纵电压或频率可能导致指令错误，并从而破坏SGX enclave的安全。因此，英特尔禁用了软件降低电压所需的超频邮箱（OCM），也阻止了对节能的良性使用。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了Minefield，这是对DVFS攻击的第一个软件级防御。Minefield的想法不是防止DVFS错误，而是将错误导向陷阱指令并在它们导致有害行为之前处理它们。作为Minefield的基础，我们系统地分析了DVFS攻击，并观察到每个OCM转换之间至少有57.8微秒的时间间隔，导致至少57000个周期的随机错误。在编译过程中，Minefield在受害者代码中放置高度容易出错的陷阱指令。像冗余对策一样，Minefield是可扩展的，并允许enclave开发人员在0%到接近100%之间选择安全参数，从而实现安全性和性能之间的细粒度权衡。我们的评估结果显示，密度为0.75，即每1-2条指令后放置一个陷阱，可以在Intel SGX上99%地减轻所有已知的DVFS攻击，并产生148.4%的额外开销。但是，Minefield对其余系统没有性能影响。因此，Minefield是比禁用OCM接口的硬件或微码补丁更好的解决方案。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-minefield](https://www.usenix.org/conference/usenixsecurity22/presentation/kogler-minefield)
- **PDF:** [https://www.usenix.org/system/files/sec22-kogler-minefield.pdf](https://www.usenix.org/system/files/sec22-kogler-minefield.pdf)
## Counting in Regexes Considered Harmful: Exposing ReDoS Vulnerability of Nonbacktracking Matchers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#counting-in-regexes-considered-harmful-exposing-redos-vulnerability-of-nonbacktracking-matchers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#counting-in-regexes-considered-harmful-exposing-redos-vulnerability-of-nonbacktracking-matchers)**
### 作者
* Lenka Turoňová, Faculty of Information Technology, Brno University of Technology
* Lukáš Holík, Faculty of Information Technology, Brno University of Technology
* Ivan Homoliak, Faculty of Information Technology, Brno University of Technology
* Ondřej Lengál, Faculty of Information Technology, Brno University of Technology
* Margus Veanes, Microsoft Research Redmond
* Tomáš Vojnar, Faculty of Information Technology, Brno University of Technology
### 摘要
> 本文研究非回溯正则表达式匹配器的性能特征以及它们对ReDoS（正则表达式拒绝服务）攻击的易受攻击性。我们重点研究了它们已知的弱点，即使用有界量词的扩展正则表达式（例如，'(ab){100}'）。我们提出了一种生成能够对这些匹配器进行ReDoS攻击的输入文本的方法。该方法利用有界重复并将其用于强制执行正则表达式的确定性有限状态自动机的昂贵模拟。我们对大量实用正则表达式进行了广泛的实验评估，包括回溯和非回溯匹配器的全面集合的ReDoS生成器，以及展示了对包含Hyperscan和NVIDIA BlueField-2卡上的HW加速的正则表达式匹配引擎的最先进实际安全应用程序（如SNORT）的ReDoS攻击的实验。我们的实验表明，有界重复确实是非回溯匹配器的一种明显弱点，而我们的生成器是唯一能够显著增加其运行时间的生成器。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/turonova](https://www.usenix.org/conference/usenixsecurity22/presentation/turonova)
- **PDF:** [https://www.usenix.org/system/files/sec22-turonova.pdf](https://www.usenix.org/system/files/sec22-turonova.pdf)
## RegexScalpel: Regular Expression Denial of Service (ReDoS) Defense by Localize-and-Fix.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#regexscalpel-regular-expression-denial-of-service-redos-defense-by-localize-and-fix) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#regexscalpel-regular-expression-denial-of-service-redos-defense-by-localize-and-fix)**
### 作者
* Yeting Li, CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences; University of Chinese Academy of Sciences; SKLCS, Institute of Software, Chinese Academy of Sciences
* Yecheng Sun, SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Zhiwu Xu, College of Computer Science and Software Engineering, Shenzhen University
* Jialun Cao, The Hong Kong University of Science and Technology
* Yuekang Li, School of Computer Science and Engineering, Nanyang Technological University
* Rongchen Li, SKLCS, Institute of Software, Chinese Academy of Sciences; University of Chinese Academy of Sciences
* Haiming Chen, SKLCS, Institute of Software, Chinese Academy of Sciences; CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences
* Shing-Chi Cheung, The Hong Kong University of Science and Technology
* Yang Liu, School of Computer Science and Engineering, Nanyang Technological University
* Yang Xiao, CAS-KLONAT, Institute of Information Engineering, Chinese Academy of Sciences; University of Chinese Academy of Sciences
### 摘要
> 正则表达式拒绝服务（ReDoS）是一种利用易受攻击的正则表达式（regexes）来实现执行时间与输入大小呈超线性关系的拒绝服务攻击的类别。防御ReDoS攻击的常见方法是修复易受攻击的正则表达式。最近提出了使用基于示例的程序合成（PBE）技术来合成修复的正则表达式的技术。然而，这些现有技术可能生成与原始正则表达式在语义上不等价或相似，或者仍然容易受到ReDoS攻击。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这些挑战，我们提出了RegexScalpel，这是一个自动正则表达式修复框架，采用定位修复策略。RegexScalpel首先利用我们提出的细粒度漏洞模式来定位漏洞，分析其易受攻击的模式，源代码（即病态子正则表达式）以及根本原因（例如，重叠的子正则表达式）。然后，RegexScalpel旨在根据我们预定义的修复模式和定位的漏洞信息修复病态子正则表达式。此外，我们的修复模式确保修复的正则表达式在语义上与原始正则表达式等价或相似。我们的迭代修复方法还消除了修复的正则表达式的漏洞。通过对448个易受攻击的正则表达式进行实验，我们证明RegexScalpel可以比现有的全部自动正则表达式修复技术修复更多的348个正则表达式。此外，我们采用RegexScalpel检测了包括Python和NLTK在内的十个流行项目，并发现了16个易受攻击的正则表达式。然后，我们成功地使用RegexScalpel修复了所有这些正则表达式，并由维护者合并到后续版本中，导致了8个已确认的CVE。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/li-yeting](https://www.usenix.org/conference/usenixsecurity22/presentation/li-yeting)
- **PDF:** [https://www.usenix.org/system/files/sec22-li-yeting.pdf](https://www.usenix.org/system/files/sec22-li-yeting.pdf)
## Anycast Agility: Network Playbooks to Fight DDoS.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#anycast-agility-network-playbooks-to-fight-ddos) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#anycast-agility-network-playbooks-to-fight-ddos)**
### 作者
* A S M Rizvi, USC/ISI
* Le, University of Twente
* ro Bertholdo, University of Twente
* João Ceron, SIDN Labs
* John Heidemann, USC/ISI
### 摘要
> IP任播用于DNS和内容分发网络（CDN）等服务，为处理分布式拒绝服务（DDoS）攻击提供容量。在DDoS攻击期间，服务运营商将流量在任播站点之间重新分配，以利用未使用或更大容量的站点。根据站点流量和攻击规模，运营商可能会选择将攻击者集中在少数站点以保持其他站点的正常运行。运营商在攻击期间使用这些操作，但如何系统地或公开地进行操作尚未得到描述。本文描述了使用BGP在DDoS攻击下进行流量转移的几种方法，并显示响应手册可以提供在攻击期间的备选方案。为了从该备选方案中选择适当的响应，我们还描述了一种新方法来估计真实的攻击规模，即使运营商在攻击期间的视图是不完整的。最后，运营商的选择受到分布式路由策略的限制，并非所有选择都有帮助。我们探讨了特定任播部署如何限制此备选方案的选择，并且是第一个测量它们在多个任播网络中的普适性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/rizvi](https://www.usenix.org/conference/usenixsecurity22/presentation/rizvi)
- **PDF:** [https://www.usenix.org/system/files/sec22-rizvi.pdf](https://www.usenix.org/system/files/sec22-rizvi.pdf)
## Regulator: Dynamic Analysis to Detect ReDoS.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#regulator-dynamic-analysis-to-detect-redos) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#regulator-dynamic-analysis-to-detect-redos)**
### 作者
* Robert McLaughlin, University of California, Santa Barbara
* Fabio Pagani, University of California, Santa Barbara
* Noah Spahn, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
### 摘要
> 正则表达式（regexps）是程序员表达复杂字符串搜索逻辑的一种方便的方法。几种流行的编程语言都提供了与正则表达式匹配子系统的接口，无论是通过语言级原语还是标准库。这些匹配系统的实现在能力和运行时间特征上差异很大。特别是，回溯匹配器的最坏情况运行时间可能是字符串长度的线性、多项式或指数级。当输入可以被对手攻击者控制时，这样的超线性最坏情况正则表达式会使应用程序暴露于正则表达式拒绝服务（ReDoS）的风险中。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们研究了回溯引擎中ReDoS的影响，这是大多数编程语言使用的一种流行类型的引擎。我们对多个现有工具进行了评估，使用了广泛收集的正则表达式数据集，并发现尽管在这个领域进行了广泛的理论工作，但没有一种工具能够同时实现高精确度和高召回率。为了填补现有工作中的这一空白，我们开发了Regulator，一个基于模糊测试的动态分析系统，用于识别容易受到ReDoS攻击的正则表达式。我们通过直接对流行的回溯正则表达式引擎进行仪表化，实现了这个系统，从而增加了对先前工作中支持的正则表达式语法和功能的范围。最后，我们对三个常见的正则表达式数据集对此系统进行评估，并且在与现有工具进行比较时，发现真正的阳性发现增加了七倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mclaughlin](https://www.usenix.org/conference/usenixsecurity22/presentation/mclaughlin)
- **PDF:** [https://www.usenix.org/system/files/sec22-mclaughlin.pdf](https://www.usenix.org/system/files/sec22-mclaughlin.pdf)
## Aardvark: An Asynchronous Authenticated Dictionary with Applications to Account-based Cryptocurrencies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#aardvark-an-asynchronous-authenticated-dictionary-with-applications-to-account-based-cryptocurrencies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#aardvark-an-asynchronous-authenticated-dictionary-with-applications-to-account-based-cryptocurrencies)**
### 作者
* Derek Leung, MIT CSAIL
* Yossi Gilad, Hebrew University of Jerusalem
* Sergey Gorbunov, University of Waterloo
* Leonid Reyzin, Boston University
* Nickolai Zeldovich, MIT CSAIL
### 摘要
> 我们设计了一种新颖的经过身份验证的字典Aardvark，可以提供查找和修改的简短正确性证明。我们的设计通过将验证者的数据外包给不受信任的服务器来减少加密货币交易验证的存储要求，这些服务器会根据需要提供这些数据的正确性证明。在这种情况下，简短的证明尤为重要，因为证明会分发给多个验证者，并且长证明的传输很容易支配成本。
> 
> 
> 
> 
> 
> 
> 
> 在经过身份验证的字典中，任何数据（即使是不相关的数据）的更改都可能导致该数据的证明发生变化。这给并发发行加密货币交易带来了问题，因为证明会过时。为了解决这个问题，Aardvark采用了一个版本机制，可以安全地接受有限时间内的过时证明。
> 
> 
> 
> 
> 
> 
> 
> 在一个拥有1亿个键的字典上，Merkle树中的操作证明大小约为1KB，而Aardvark中只有100-200B。我们的评估结果显示，一个32核的验证者每秒可以处理1492-2941个操作，在存储成本方面相对于维护完整状态可以节省约800倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/leung](https://www.usenix.org/conference/usenixsecurity22/presentation/leung)
- **PDF:** [https://www.usenix.org/system/files/sec22-leung.pdf](https://www.usenix.org/system/files/sec22-leung.pdf)
## Zero-Knowledge Middleboxes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#zero-knowledge-middleboxes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#zero-knowledge-middleboxes)**
### 作者
* Paul Grubbs, NYU
* Arasu Arun, NYU
* Ye Zhang, NYU
* Joseph Bonneau, NYU
* Michael Walfish, NYU
### 摘要
> 本文对零知识中间盒（ZKMBs）进行了研究。ZKMB是一种网络中间盒，它在加密流量上执行网络使用策略。客户端向中间盒发送零知识证明，证明其流量符合策略。这些证明除了表明其符合策略外，并不透露客户端的通信内容。我们展示了如何使ZKMB与未修改的加密通信协议（具体为TLS 1.3）配合使用，从而使ZKMB对服务器而言是不可见的。作为一个独立有趣的贡献，我们设计了针对TLS 1.3会话密钥的优化的零知识证明。
> 
> 
> 
> 
> 
> 
> 
> 我们将ZKMB范式应用于几个案例研究。实验结果表明，在某些设置下，性能接近实用性，比如当客户端与DNS解析器之间存在持久的TLS连接时，中间盒过滤域查询（每个查询都需要单独的证明）。在这种配置下，中间盒的开销为每个证明的运行时间2-5毫秒，客户端创建证明的延迟为几秒。另一方面，根据底层的零知识证明机制，客户端可能需要存储数百兆字节的数据，并且对于某些应用程序，延迟可能达到几十秒。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/grubbs](https://www.usenix.org/conference/usenixsecurity22/presentation/grubbs)
- **PDF:** [https://www.usenix.org/system/files/sec22-grubbs.pdf](https://www.usenix.org/system/files/sec22-grubbs.pdf)
## Efficient Representation of Numerical Optimization Problems for SNARKs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#efficient-representation-of-numerical-optimization-problems-for-snarks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#efficient-representation-of-numerical-optimization-problems-for-snarks)**
### 作者
* Sebastian Angel, University of Pennsylvania and Microsoft Research
* Andrew J. Blumberg, Columbia University
* Eleftherios Ioannidis, University of Pennsylvania
* Jess Woods, University of Pennsylvania
### 摘要
> 本文介绍了Otti，一种通用编译器，用于(zk)SNARKs，为数值优化问题提供支持。Otti生成包含线性规划（LP）、半定规划（SDP）和广泛的随机梯度下降（SGD）实例等优化问题的程序的高效算术表征。数值优化是基本的算法构建块：应用包括调度和资源分配任务、NP难问题的近似解以及神经网络的训练。Otti以C的子集中编写的任意程序作为输入，该子集包含通过易于使用的API指定的优化问题。然后，Otti自动生成表示这些程序的简洁转换的rank-1约束可满足性（R1CS）实例。变换程序的正确执行意味着原始优化问题的解的最佳性。我们在真实基准测试上的评估结果显示，实例化了Spartan证明系统的Otti可以在仅100毫秒内以零知识方式证明解的最佳性，比现有方法快了4个数量级。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/angel](https://www.usenix.org/conference/usenixsecurity22/presentation/angel)
- **PDF:** [https://www.usenix.org/system/files/sec22-angel.pdf](https://www.usenix.org/system/files/sec22-angel.pdf)
## Experimenting with Collaborative zk-SNARKs: Zero-Knowledge Proofs for Distributed Secrets.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#experimenting-with-collaborative-zk-snarks-zero-knowledge-proofs-for-distributed-secrets) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#experimenting-with-collaborative-zk-snarks-zero-knowledge-proofs-for-distributed-secrets)**
### 作者
* Alex Ozdemir, Stanford University
* Dan Boneh, Stanford University
### 摘要
> zk-SNARK 是一个强大的密码学原语，提供了一个简洁而高效地可验证的证明，证明者拥有对一个公共的 NP 陈述的目击者证据，同时不泄露这个证据。然而，在其原始形式中，zk-SNARK 只适用于单方持有的秘密证人。在实践中，通常需要一个集合方来证明一个关于秘密证人分散或共享的陈述。
> 
> 
> 
> 
> 
> 
> 
> 我们实现并实验了合作式 zkSNARKs：对多个互相不信任的方的秘密进行证明。我们通过将传统 zk-SNARKs 提升为 N 个证明者之间的安全协议，共同生成一个分布式证人的单个证明。我们优化了基于配对的 zkSNARKs 的证明生成算法，以便代数技术用于多方计算 (MPC)，从而产生高效的证明生成协议。对于某些 zk-SNARKs，优化更具挑战性。这表明，MPC 的“友好性”是评估 zk-SNARKs 的一个附加标准。
> 
> 
> 
> 
> 
> 
> 
> 我们实现了三种合作式证明，并评估了证明生成的具体成本。我们发现，在一个 3Gb/s 的连接上，针对恶意证明者的安全性可以在与单个证明者相同的运行时间内实现。而针对 N-1 个恶意证明者的安全性只需要 2 倍的减速。这种效率是不寻常的，因为大多数计算在进行安全分布时会减速几个数量级。这种效率意味着大多数可以容忍单个证明成本的应用程序也应该能够容忍合作式证明的成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/ozdemir](https://www.usenix.org/conference/usenixsecurity22/presentation/ozdemir)
- **PDF:** [https://www.usenix.org/system/files/sec22-ozdemir.pdf](https://www.usenix.org/system/files/sec22-ozdemir.pdf)
## Detecting Logical Bugs of DBMS with Coverage-based Guidance.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#detecting-logical-bugs-of-dbms-with-coverage-based-guidance) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#detecting-logical-bugs-of-dbms-with-coverage-based-guidance)**
### 作者
* Yu Liang, Pennsylvania State University
* Song Liu, Pennsylvania State University and Qi-AnXin Tech. Research Institute
* Hong Hu, Pennsylvania State University
### 摘要
> 数据库管理系统（DBMS）是现代数据密集型应用程序的关键组成部分。开发人员已经采用许多测试技术来检测DBMS的错误，如崩溃和断言失败。然而，大多数以前的努力无法检测到使DBMS返回错误结果的逻辑错误。最近的工作提出了几个预言来识别错误结果，但它们依赖于基于规则的表达式生成来合成查询，没有任何指导。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出结合基于覆盖率的引导、以及针对有效性的突变和预言来检测DBMS系统中的逻辑错误。具体来说，我们首先设计了一组通用的API来解耦模糊器和预言的逻辑，这样开发人员可以轻松地将模糊测试工具移植到测试DBMS，并为现有的模糊器编写新的预言。然后，我们提供采用了有效性导向的突变来生成高质量的查询语句，以便发现更多的逻辑错误。我们的原型系统SQLRight在性能上超过了仅依赖于预言或代码覆盖的现有工具。总共，SQLRight从两个经过充分测试的DBMS（SQLite和MySQL）中检测到18个逻辑错误。所有错误都已确认，并且其中14个已经修复。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liang](https://www.usenix.org/conference/usenixsecurity22/presentation/liang)
- **PDF:** [https://www.usenix.org/system/files/sec22-liang.pdf](https://www.usenix.org/system/files/sec22-liang.pdf)
## Augmenting Decompiler Output with Learned Variable Names and Types.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#augmenting-decompiler-output-with-learned-variable-names-and-types) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#augmenting-decompiler-output-with-learned-variable-names-and-types)**
### 作者
* Qibin Chen, Carnegie Mellon University
* Jeremy Lacomis, Carnegie Mellon University
* Edward J. Schwartz, Carnegie Mellon University Software Engineering Institute
* Claire Le Goues, Carnegie Mellon University
* Graham Neubig, Carnegie Mellon University
* Bogdan Vasilescu, Carnegie Mellon University
### 摘要
> 安全专业人士在逆向工程发现的二进制文件中常常使用的一种工具称为反编译器。反编译器试图将二进制代码转换为更高级的语言，如C语言，从而实现反向编译。高级语言通过提供循环、类型化变量和注释等有用的抽象帮助理解程序，但这些抽象在编译过程中会丢失。反编译器能够确定性地重构代码的结构属性，但注释、变量名和自定义变量类型在技术上是不可能恢复的。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了DIRTY（DecompIled variable ReTYper），一种改进反编译器输出质量的新技术，它能自动生成有意义的变量名和类型。DIRTY基于基于Transformer的神经网络模型构建，并通过从GitHub上的代码库自动抓取的代码进行训练。DIRTY使用该模型对反编译文件进行后处理，根据上下文推荐变量类型和名称。在从GitHub中挖掘出的C代码的新型数据集上进行实证评估表明，DIRTY在恢复开发人员原始变量名称的情况下的准确率达到了66.4％，原始类型的准确率达到了75.8％，明显优于以往的方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/chen-qibin](https://www.usenix.org/conference/usenixsecurity22/presentation/chen-qibin)
- **PDF:** [https://www.usenix.org/system/files/sec22-chen-qibin.pdf](https://www.usenix.org/system/files/sec22-chen-qibin.pdf)
## Debloating Address Sanitizer.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#debloating-address-sanitizer) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#debloating-address-sanitizer)**
### 作者
* Yuchen Zhang, Stevens Institute of Technology
* Chengbin Pang, Nanjing University
* Georgios Portokalidis, Stevens Institute of Technology
* Nikos Tri, Stevens Institute of Technology
* opoulos, Stevens Institute of Technology
* Jun Xu, Stevens Institute of Technology
### 摘要
> Address Sanitizer (ASan) 是一种强大的内存错误检测器。它可以检测各种错误，从空间问题如超出边界访问到时间问题如使用后释放。然而，ASan 的主要缺点是运行时开销较高。在每个功能启用的情况下，ASan 的开销超过 1 倍。
> 
> 
> 
> 
> 
> 
> 
> 本文首先对 ASan 的操作进行了解剖，并检查了其运行时开销的主要原因。研究揭示（或确认）高开销主要是由于对内存访问进行的详尽的检查所致。在研究的启发下，本文提出了 ASan--，这是一种组合了一组优化策略的工具，以减少（或"瘦身"）检查，并提高 ASan 的效率。与现有的工具不同，这些工具在减少检查的同时会损害 ASan 的能力、可扩展性或可用性，ASan-- 完全保持了 ASan 的这些良好特性。
> 
> 
> 
> 
> 
> 
> 
> 我们的评估结果显示，ASan-- 有很大潜力。它在 SPEC CPU2006 上减少了 41.7% 的开销，在 Chromium 上减少了 35.7% 的开销。如果仅考虑由于检查器检查而产生的开销，减少率在 SPEC CPU2006 上提高到 51.6%，在 Chromium 上提高到 69.6%。在模糊测试的环境下，ASan-- 将 AFL 的执行速度提高了超过 40%，分支覆盖率提高了 5%。结合正交的、针对模糊测试的优化，ASan-- 可以将 AFL 的速度提高 60%，分支覆盖率提高 9%。在 Chromium 上进行为期四周的日常工作支持中，ASan-- 没有表现出重大的可用性问题或显著的减速，并且能够检测出我们从先前报告中重现的所有错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-yuchen](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-yuchen)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-yuchen.pdf](https://www.usenix.org/system/files/sec22-zhang-yuchen.pdf)
## Ferry: State-Aware Symbolic Execution for Exploring State-Dependent Program Paths.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ferry-state-aware-symbolic-execution-for-exploring-state-dependent-program-paths) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ferry-state-aware-symbolic-execution-for-exploring-state-dependent-program-paths)**
### 作者
* Shunfan Zhou, Fudan University
* Zhemin Yang, Fudan University
* Dan Qiao, Fudan University
* Peng Liu, The Pennsylvania State University
* Min Yang, Fudan University
* Zhe Wang, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
* Chenggang Wu, State Key Laboratory of Computer Architecture, Institute of Computing Technology, Chinese Academy of Sciences
### 摘要
> 符号执行和模糊测试是程序分析的有效方法，得益于它们不断演进的路径探索方法。现代符号执行和模糊测试技术能够生成有效的程序输入以满足条件语句。然而，它们在探索依赖于先前程序执行而不是当前程序输入的状态相关分支（本文中的状态相关分支）方面能力非常有限。
> 
> 
> 
> 
> 
> 
> 
> 本文是第一次尝试对现实世界中的程序进行全面探索，以了解其中的状态相关分支。我们引入了程序状态感知的符号执行，这是一种新颖的技术，可以指导符号执行引擎有效地探索状态相关分支。正如本文展示的，状态相关分支在许多重要的程序中普遍存在，因为它们实现了状态机来满足应用逻辑。对带有状态相关分支的任意程序进行符号执行是困难的，因为它们的状态机实现缺乏统一的规范。面对这个具有挑战性的问题，本文在一类重要程序中识别了当前程序状态和先前输入之间的广泛存在的数据依赖关系。我们对这些程序的深入洞察帮助我们在这个任务中迈出了成功的第一步。我们设计并实现了一个名为Ferry的工具，通过自动识别程序状态和探索状态相关分支，有效地指导符号执行引擎。将Ferry应用于13个不同的现实世界程序和全面的数据集Google FuzzBench，Ferry实现了比两个现代符号执行引擎和三个流行的模糊测试工具更高的块覆盖率和分支覆盖率，因为它能够探索深层次的程序逻辑，并成功地找到了jhead中的三个0-day漏洞。此外，我们还展示了Ferry能够发现更多程序状态相关漏洞，比现有的符号执行器和模糊测试方法多收集了15个状态相关漏洞，并提供了一个由六个知名程序组成的测试套件。最后，我们在LAVA-M数据集上对Ferry进行了测试，以了解其优势和局限性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-shunfan](https://www.usenix.org/conference/usenixsecurity22/presentation/zhou-shunfan)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhou-shunfan.pdf](https://www.usenix.org/system/files/sec22-zhou-shunfan.pdf)
## Can one hear the shape of a neural network?: Snooping the GPU via Magnetic Side Channel.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#can-one-hear-the-shape-of-a-neural-network-snooping-the-gpu-via-magnetic-side-channel) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#can-one-hear-the-shape-of-a-neural-network-snooping-the-gpu-via-magnetic-side-channel)**
### 作者
* Henrique Teles Maia, Columbia University
* Chang Xiao, Columbia University
* Dingzeyu Li, Adobe Research
* Eitan Grinspun, Columbia University & University of Toronto
* Changxi Zheng, Columbia University
### 摘要
> 神经网络应用在企业和个人设置中变得流行。网络解决方案经过精心调整，可以稳健地解决查询，并且设计也因此变得非常抢手。随着精确且高性能机器学习模型的商业价值增加，保护神经网络作为机密投资的需求也在增加。我们通过电磁侧信道研究了作为黑盒部署在加速硬件上的神经网络的脆弱性。
> 
> 
> 
> 
> 
> 
> 
> 我们检查了通过一个廉价的3美元感应传感器获取的来自图形处理单元电源线的磁通量，并发现这个信号泄露了黑盒神经网络模型的详细拓扑结构和超参数。此攻击获取了一个具有未知输入值但已知输入维度和批量大小的查询的磁信号。由于深度神经网络的模块化层序列评估，网路重构成为可能。我们发现每个层组件的评估产生一个可识别的磁信号特征，通过适当训练的分类器和基于整数规划的联合一致性优化，可以推断出层拓扑、宽度、函数类型和序列顺序。
> 
> 
> 
> 
> 
> 
> 
> 我们研究了网络规范能够被恢复的程度，并考虑用于比较网络相似性的度量标准。我们展示了这种侧信道攻击在恢复各种网络架构的细节上的潜在准确性，包括随机设计。我们考虑了可能利用这种新颖侧信道暴露的应用，如对抗性转移攻击。为此，我们讨论了用于防范我们的方法和其他类似窥探技术的对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/maia](https://www.usenix.org/conference/usenixsecurity22/presentation/maia)
- **PDF:** [https://www.usenix.org/system/files/sec22-maia.pdf](https://www.usenix.org/system/files/sec22-maia.pdf)
## Lamphone: Passive Sound Recovery from a Desk Lamp's Light Bulb Vibrations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lamphone-passive-sound-recovery-from-a-desk-lamps-light-bulb-vibrations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lamphone-passive-sound-recovery-from-a-desk-lamps-light-bulb-vibrations)**
### 作者
* Ben Nassi, Ben-Gurion University of the Negev
* Yaron Pirutin, Ben-Gurion University of the Negev
* Raz Swisa, Ben-Gurion University of the Negev
* Adi Shamir, Weizmann Institute of Science
* Yuval Elovici, Ben-Gurion University of the Negev
* Boris Zadov, Ben-Gurion University of the Negev
### 摘要
> 在本文中，我们介绍了一种名为“Lamphone”的光学侧信道攻击，用于从台灯灯泡中恢复声音；这些台灯通常在COVID-19大流行期间成为了家庭办公的主要工作环境。我们展示了光泡表面的空气压力波动会对声音产生响应，并导致灯泡产生微小振动（千分度的振动），这种振动可以被窃听者被动地、外部地利用，并使用不显示应用程序的设备来恢复语音。我们通过电光传感器分析了灯泡对声音的响应，并学习了如何从光学信号中分离出音频信号。我们将Lamphone与其他研究中提出的相关方法进行了比较，并显示Lamphone可以以更高的质量和更低的音量水平恢复声音。最后，我们展示了窃听者可以使用Lamphone在距离35米处应用，从带有台灯和灯泡的桌子上坐/工作的受害者的虚拟会议声音水平中恢复具有相当可理解性的语音。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/nassi](https://www.usenix.org/conference/usenixsecurity22/presentation/nassi)
- **PDF:** [https://www.usenix.org/system/files/sec22-nassi.pdf](https://www.usenix.org/system/files/sec22-nassi.pdf)
## Automated Side Channel Analysis of Media Software with Manifold Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automated-side-channel-analysis-of-media-software-with-manifold-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#automated-side-channel-analysis-of-media-software-with-manifold-learning)**
### 作者
* Yuanyuan Yuan, The Hong Kong University of Science and Technology
* Qi Pang, The Hong Kong University of Science and Technology
* Shuai Wang, The Hong Kong University of Science and Technology
### 摘要
> 云计算和机器学习作为服务的繁荣发展导致了媒体软件处理机密媒体数据的广泛应用。本论文探讨了对媒体软件发起副信道分析（SCA）的对手能力，以重建机密媒体输入。表示学习和感知学习的最新进展启发我们考虑将从副信道轨迹中重建媒体输入视为一种跨模态流形学习任务，可以通过训练自动编码器框架来学习媒体输入与副信道观察之间的映射来解决。我们进一步增强自动编码器，利用注意力定位对SCA做出主要贡献的程序点，从而自动定位媒体软件中的信息泄露点。我们还提出了一种名为感知加盲的新颖且高效的防御技术，可以通过感知掩码扰乱媒体输入，并减轻基于流形学习的SCA。
> 
> 
> 
> 
> 
> 
> 
> 我们的评估利用了三种流行的媒体软件来重新构建图像、音频和文本格式的输入。我们分析了三个常见的副信道-缓存 bank、缓存行和页表-以及由标准的Prime+Probe记录的仅用户空间缓存集访问。我们的框架成功地从评估的媒体软件中重新构建了高质量的机密输入，并自动定位了它们的易受攻击的程序点，其中许多对公众是未知的。我们进一步证明，感知加盲可以减轻基于流形学习的SCA，并且几乎没有额外成本。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yuan-yuanyuan](https://www.usenix.org/conference/usenixsecurity22/presentation/yuan-yuanyuan)
- **PDF:** [https://www.usenix.org/system/files/sec22-yuan-yuanyuan.pdf](https://www.usenix.org/system/files/sec22-yuan-yuanyuan.pdf)
## Lend Me Your Ear: Passive Remote Physical Side Channels on PCs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lend-me-your-ear-passive-remote-physical-side-channels-on-pcs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#lend-me-your-ear-passive-remote-physical-side-channels-on-pcs)**
### 作者
* Daniel Genkin, Georgia Tech
* Noam Nissan, Tel Aviv University
* Roei Schuster, Tel Aviv University and Cornell Tech
* Eran Tromer, Tel Aviv University and Columbia University
### 摘要
> 我们展示了普通PC中的内置传感器（如麦克风）不经意间捕获了正在运行的计算的电磁侧信道泄露。此外，这些信息经常通过看似良性的渠道（如音频录制和常见的VoIP应用）传递，即使在有损压缩之后仍然如此。
> 
> 
> 
> 
> 
> 
> 
> 因此，我们展示了通过对常见共享信道进行远程和纯被动分析，可以对计算进行物理侧信道攻击。这些攻击既不需要物理接近（可以通过距离和屏蔽来缓解），也不需要在目标上运行代码或配置其硬件的能力。因此，我们认为对PC的物理侧信道威胁模型不再可以排除。
> 
> 
> 
> 
> 
> 
> 
> 我们分析了内部麦克风捕获的与计算相关的泄漏，并通过实证证明了其攻击效果。在一个场景中，攻击者窃取了语音通话中对方的秘密ECDSA签名密钥。在另一个场景中，攻击者检测到对方正在加载哪个网页。在第三个场景中，Counter-Strike在线多人游戏中的一名玩家可以通过分析对手电脑的3D渲染如何导致微弱但可检测的信号进入对手的音频输入来发现对手的伏击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/genkin](https://www.usenix.org/conference/usenixsecurity22/presentation/genkin)
- **PDF:** [https://www.usenix.org/system/files/sec22-genkin.pdf](https://www.usenix.org/system/files/sec22-genkin.pdf)
## Stalloris: RPKI Downgrade Attack.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stalloris-rpki-downgrade-attack) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#stalloris-rpki-downgrade-attack)**
### 作者
* Tomas Hlavacek, Fraunhofer Institute for Secure Information Technology SIT and National Research Center for Applied Cybersecurity ATHENE
* Philipp Jeitner, Fraunhofer Institute for Secure Information Technology SIT and National Research Center for Applied Cybersecurity ATHENE
* Donika Mirdita, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Technische Universität Darmstadt
* Haya Shulman, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Michael Waidner, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Technische Universität Darmstadt
### 摘要
> 我们展示了对RPKI的首次降级攻击。在RPKI中，允许我们进行攻击的关键设计属性是连接性和安全性之间的权衡：当网络无法从发布点获取RPKI信息时，它们在BGP中进行路由决策时不会验证RPKI。我们利用这种权衡来开发攻击，阻止从公共存储库检索RPKI对象，从而禁用RPKI验证并使RPKI受保护的网络暴露于前缀劫持攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们通过实验证明，至少有47%的公共存储库对我们某个特定版本的限速离线降级攻击是容易受攻击的。我们还展示了所有当前的RPKI依赖方实现都容易受到恶意发布点的攻击。这相当于IPv4地址空间的20.4%。
> 
> 
> 
> 
> 
> 
> 
> 我们提供了预防我们降级攻击的建议。然而，解决这个根本问题并不简单：如果依赖方优先选择安全性而坚持在无法检索到ROAs时进行RPKI验证，受害自治系统可能会与更多网络断开连接，而不仅仅是对手希望劫持的那个网络。我们的工作表明，发布点是互联网连接性和安全性的关键基础设施。因此，我们的主要建议是发布点应该托管在保证高度连接性的强大平台上。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/hlavacek](https://www.usenix.org/conference/usenixsecurity22/presentation/hlavacek)
- **PDF:** [https://www.usenix.org/system/files/sec22-hlavacek.pdf](https://www.usenix.org/system/files/sec22-hlavacek.pdf)
## XDRI Attacks - and - How to Enhance Resilience of Residential Routers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#xdri-attacks-and-how-to-enhance-resilience-of-residential-routers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#xdri-attacks-and-how-to-enhance-resilience-of-residential-routers)**
### 作者
* Philipp Jeitner, Fraunhofer Institute for Secure Information Technology SIT and National Research Center for Applied Cybersecurity ATHENE
* Haya Shulman, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Goethe-Universität Frankfurt
* Lucas Teichmann, Fraunhofer Institute for Secure Information Technology SIT
* Michael Waidner, Fraunhofer Institute for Secure Information Technology SIT, National Research Center for Applied Cybersecurity ATHENE, and Technische Universität Darmstadt
### 摘要
> 我们探索了住宅路由器的安全性，发现了各种关键漏洞。我们的评估显示，在36款热门路由器中，有10款容易受到假记录注入攻击，原因是对特殊字符的误解。我们还发现，在36款路由器中的15款即使设置了防止缓存污染攻击的机制，也能够被绕过。
> 
> 
> 
> 
> 
> 
> 
> 通过与广告网络进行的全面研究，我们发现并分析了976个由网络客户端使用的住宅路由器，其中超过95%的路由器都存在我们攻击的漏洞。总体而言，易受攻击的路由器普遍存在，并分布在177个国家和4830个网络中。
> 
> 
> 
> 
> 
> 
> 
> 为了了解导致这些漏洞的核心因素，我们对路由器进行了黑盒和白盒分析。我们发现，许多问题可以归因于对协议行为和互联网的错误假设，对标准建议的误解，软件错误和简化的DNS软件实现。
> 
> 
> 
> 
> 
> 
> 
> 我们提供了减轻我们攻击的建议。我们还建立了一个工具，供大家在https://xdi-attack.net/上评估其路由器的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/jeitner](https://www.usenix.org/conference/usenixsecurity22/presentation/jeitner)
- **PDF:** [https://www.usenix.org/system/files/sec22-jeitner.pdf](https://www.usenix.org/system/files/sec22-jeitner.pdf)
## V'CER: Efficient Certificate Validation in Constrained Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#vcer-efficient-certificate-validation-in-constrained-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#vcer-efficient-certificate-validation-in-constrained-networks)**
### 作者
* David Koisser, Technical University Darmstadt
* Patrick Jauernig, Technical University Darmstadt
* Gene Tsudik, University of California, Irvine
* Ahmad-Reza Sadeghi, Technical University Darmstadt
### 摘要
> 我们解决了在受限网络中进行高效信任建立的具有挑战性问题，即由大量和动态的（可能是异构的）设备组成，这些设备具有有限的带宽、连接性、存储和计算能力。受限网络是许多新兴应用领域的重要组成部分，包括物联网网状网络和卫星网络。一个特别困难的挑战是如何及时吊销被损坏或有故障的设备。不幸的是，当前的解决方案和技术无法处理受限网络的特殊性，因为它们需要与集中实体频繁进行实时通信，存储和维护大量吊销信息，并且会产生相当大的带宽开销。
> 
> 
> 
> 
> 
> 
> 
> 为了解决现有解决方案的缺点，我们设计了V'CER，这是一种安全高效的证书验证方案，为受限网络的PKI增加了功能和好处。V'CER利用了稀疏Merkle树（SMT）的独特特性来进行轻量级吊销检查，同时使设备之间可以进行协作操作，以在连接到外部机构时保持数据更新。V'CER可以补充任何PKI方案，提高其灵活性和适用性，同时确保验证信息的快速传播，不受网络路由或拓扑的限制。V'CER每个节点只需要不到3KB的存储空间，可以覆盖106个证书。我们在一颗在轨卫星上开发和部署了V'CER的原型，并进行了大规模模拟，结果显示当节点间断连接时，V'CER可以将从外部机构请求更新的次数减少93%以上。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/koisser](https://www.usenix.org/conference/usenixsecurity22/presentation/koisser)
- **PDF:** [https://www.usenix.org/system/files/sec22-koisser.pdf](https://www.usenix.org/system/files/sec22-koisser.pdf)
## Themis: Accelerating the Detection of Route Origin Hijacking by Distinguishing Legitimate and Illegitimate MOAS.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#themis-accelerating-the-detection-of-route-origin-hijacking-by-distinguishing-legitimate-and-illegitimate-moas) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#themis-accelerating-the-detection-of-route-origin-hijacking-by-distinguishing-legitimate-and-illegitimate-moas)**
### 作者
* Lancheng Qin, Tsinghua University
* Dan Li, Tsinghua University and Zhongguancun Laboratory
* Ruifeng Li, Tsinghua Shenzhen International Graduate School
* Kang Wang, Tsinghua University
### 摘要
> 路由劫持是当今互联网中最严重的安全问题之一，路由起源劫持是最常见的一种。虽然已经有起源劫持检测系统可用，但它们面临着频繁发生的合法多起源自治系统（MOAS）冲突所带来的巨大压力。它们在控制平面上检测MOAS冲突，然后通过数据平面探测或甚至手动验证来识别起源劫持。然而，前缀所有权的合法变更也可能引发MOAS冲突，而合法的MOAS冲突在日常中占据了大部分。大规模的合法MOAS冲突消耗了许多探测和识别资源，导致实践中的高验证成本和高验证延迟。在本文中，我们提出了一种新的起源劫持系统Themis来加速起源劫持的检测。基于我们构建的真实数据集，我们分析了不同MOAS冲突的特征，并训练了一个分类器来过滤掉控制平面上的合法MOAS冲突。MOAS分类器的准确率和召回率分别为95.49％和99.20％。通过使用MOAS分类器，Themis比现有最先进的Argus系统减少了56.69％的验证成本，并在发生多个并发的MOAS冲突时显著加速了检测。Themis的整体准确率几乎与Argus相同。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/qin](https://www.usenix.org/conference/usenixsecurity22/presentation/qin)
- **PDF:** [https://www.usenix.org/system/files/sec22-qin.pdf](https://www.usenix.org/system/files/sec22-qin.pdf)
## ML-Doctor: Holistic Risk Assessment of Inference Attacks Against Machine Learning Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ml-doctor-holistic-risk-assessment-of-inference-attacks-against-machine-learning-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#ml-doctor-holistic-risk-assessment-of-inference-attacks-against-machine-learning-models)**
### 作者
* Yugeng Liu, CISPA Helmholtz Center for Information Security
* Rui Wen, CISPA Helmholtz Center for Information Security
* Xinlei He, CISPA Helmholtz Center for Information Security
* Ahmed Salem, CISPA Helmholtz Center for Information Security
* Zhikun Zhang, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Emiliano De Cristofaro, UCL and Alan Turing Institute
* Mario Fritz, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 攻击机器学习（ML）模型的推理攻击允许对手获取有关训练数据、模型参数等敏感信息。虽然研究人员已经对多种攻击进行了深入研究，但他们是孤立研究的。因此，我们缺乏关于这些攻击所带来风险的全面了解，例如可以应用这些攻击的不同场景、影响其性能的共同因素、它们之间的关系以及可能的防御效果。在本文中，我们通过对多种推理攻击进行首次全面风险评估来填补这个空白。我们专注于四种攻击，即成员推理、模型逆推、属性推理和模型窃取，并建立了威胁模型分类法。
> 
> 
> 
> 
> 
> 
> 
> 我们进行了广泛的实验评估，使用了五种模型架构和四个图像数据集。实验结果表明，训练数据集的复杂性对攻击性能起着重要作用，而模型窃取和成员推理攻击的有效性呈负相关。我们还表明，DP-SGD和知识蒸馏等防御方法只能缓解部分推理攻击。我们的分析依赖于一个模块化可重用的软件ML-Doctor，使得ML模型所有者能够评估部署模型的风险，并同时为研究人员和实践者提供基准工具。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yugeng](https://www.usenix.org/conference/usenixsecurity22/presentation/liu-yugeng)
- **PDF:** [https://www.usenix.org/system/files/sec22-liu-yugeng.pdf](https://www.usenix.org/system/files/sec22-liu-yugeng.pdf)
## Inference Attacks Against Graph Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#inference-attacks-against-graph-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#inference-attacks-against-graph-neural-networks)**
### 作者
* Zhikun Zhang, CISPA Helmholtz Center for Information Security
* Min Chen, CISPA Helmholtz Center for Information Security
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yun Shen, Norton Research Group
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 图是重要的数据表示，广泛存在于现实世界中。然而，由于图的非欧几里德性质，分析图数据在计算上是困难的。图嵌入是一种强大的工具，通过将图数据转换为低维向量来解决图分析问题。这些向量也可以与第三方共享，以获取有关数据背后的额外见解。虽然共享图嵌入很有吸引力，但相关的隐私风险尚未得到探索。在本文中，我们系统地调查了通过进行三种推理攻击来透露图嵌入信息的情况。首先，我们可以成功推断目标图的基本属性，如节点数、边数和图密度，准确率高达0.89。其次，给定一个感兴趣的子图和图嵌入，我们可以以很高的置信度确定子图是否包含在目标图中。例如，在DD数据集上达到了0.98的攻击AUC。第三，我们提出了一种新颖的图重构攻击，可以重构具有与目标图相似的图结构统计的图。我们进一步提出了一种有效的防御机制，基于图嵌入扰动，以减轻推理攻击对图分类任务的性能影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zhikun](https://www.usenix.org/conference/usenixsecurity22/presentation/zhang-zhikun)
- **PDF:** [https://www.usenix.org/system/files/sec22-zhang-zhikun.pdf](https://www.usenix.org/system/files/sec22-zhang-zhikun.pdf)
## Membership Inference Attacks and Defenses in Neural Network Pruning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#membership-inference-attacks-and-defenses-in-neural-network-pruning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#membership-inference-attacks-and-defenses-in-neural-network-pruning)**
### 作者
* Xiaoyong Yuan, Michigan Technological Unviersity
* Lan Zhang, Michigan Technological Unviersity
### 摘要
> 神经网络剪枝是一种降低使用深度神经网络的计算和内存需求的重要技术，适用于资源受限设备。目前的研究主要集中在通过策略性地删除无关参数和重新训练剪枝模型，以平衡剪枝神经网络的稀疏性和准确性。然而，这种重复使用训练样本的努力会增加记忆量，从而带来严重的隐私风险，但目前还没有进行相关研究。
> 
> 
> 
> 
> 
> 
> 
> 本文对神经网络剪枝中的隐私风险进行了首次分析。具体而言，我们研究了神经网络剪枝对训练数据隐私的影响，即成员推断攻击。首先，我们探究了神经网络剪枝对预测差异的影响，剪枝过程在成员和非成员之间不均匀地影响了剪枝模型的行为。同时，这种差异在不同类别之间甚至以细粒度的方式存在着影响。受到这种差异的启发，我们提出了一种针对剪枝神经网络的自注意成员推断攻击。我们进行了大量实验，严格评估了不同剪枝方法、稀疏程度和对手知识对隐私的影响。所提出的攻击在与现有的八种成员推断攻击相比时显示出更高的攻击性能。此外，我们还提出了一种新的防御机制，通过基于KL散度距离减小预测差异，有效地降低了剪枝过程中的隐私风险，同时保持了剪枝模型的稀疏性和准确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/yuan-xiaoyong](https://www.usenix.org/conference/usenixsecurity22/presentation/yuan-xiaoyong)
- **PDF:** [https://www.usenix.org/system/files/sec22-yuan-xiaoyong.pdf](https://www.usenix.org/system/files/sec22-yuan-xiaoyong.pdf)
## Are Your Sensitive Attributes Private? Novel Model Inversion Attribute Inference Attacks on Classification Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#are-your-sensitive-attributes-private-novel-model-inversion-attribute-inference-attacks-on-classification-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium%202022.md#are-your-sensitive-attributes-private-novel-model-inversion-attribute-inference-attacks-on-classification-models)**
### 作者
* Shagufta Mehnaz;, The Pennsylvania State University
* Sayanton V. Dibbo, Dartmouth College
* Ehsanul Kabir, Dartmouth College
* Ninghui Li, Purdue University
* Elisa Bertino, Purdue University
### 摘要
> 在隐私敏感的领域，如医学诊断、生活方式预测和商业决策中，机器学习（ML）技术的增加使用凸显了对于更好地了解这些ML技术是否引入了敏感和专有训练数据泄漏的需求。本文主要关注模型逆推攻击，即对手知道训练数据中有关记录的非敏感属性，并旨在通过仅使用对目标分类模型的黑盒访问来推断对手不知道的敏感属性的值。我们首先设计了一种基于置信度分数的模型逆推属性推断攻击，其明显优于现有技术水平。然后，我们引入了一种仅依赖于模型预测标签的标签逆推攻击，但在攻击效果方面仍与我们的基于置信度分数的攻击相匹配。我们还将攻击扩展到目标记录的其他（非敏感）属性对于对手是未知的情况。我们在三个真实数据集上使用两种类型的机器学习模型（决策树和深度神经网络）对我们的攻击进行了评估。此外，我们从经验上证明了模型逆推攻击的差异性漏洞，即在训练数据集中的特定组（按性别、种族等分组）可能更容易受到模型逆推攻击的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity22/presentation/mehnaz](https://www.usenix.org/conference/usenixsecurity22/presentation/mehnaz)
- **PDF:** [https://www.usenix.org/system/files/sec22-mehnaz.pdf](https://www.usenix.org/system/files/sec22-mehnaz.pdf)
