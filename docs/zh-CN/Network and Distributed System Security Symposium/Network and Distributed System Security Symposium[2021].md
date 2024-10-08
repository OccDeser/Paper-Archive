# Network and Distributed System Security Symposium[2021]
## Flexsealing BGP Against Route Leaks: Peerlock Active Measurement and Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#flexsealing-bgp-against-route-leaks-peerlock-active-measurement-and-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#flexsealing-bgp-against-route-leaks-peerlock-active-measurement-and-analysis)**
### 作者
* Tyler McDaniel, University of Tennessee
### 摘要
> BGP路由泄漏经常导致跨域路由的严重中断。多年来，这些事故一直困扰着互联网，而部署和可用性问题则阻碍了解决这个问题的努力。2016年提出的Peerlock以一种新的方法解决了路由泄漏问题。Peerlock使中转提供商之间能够达成过滤协议，以保护自身网络，而无需广泛合作或建立信任基础设施。我们概述了Peerlock系统及其一个变体Peerlock-lite，并进行了控制平面上的实时互联网实验来测量它们的部署情况。我们的测量结果显示，在对等选择中的Tier 1网络之间存在着显著的Peerlock保护，其中48%的潜在Peerlock过滤器已经部署，并且许多其他网络也部署了针对Tier 1泄漏的过滤器。为了指导进一步的部署，我们还通过BGP模拟量化了Peerlock对当前观察水平和假设的未来部署场景中的路由泄漏的影响。这些实验结果显示，目前的Peerlock部署将模拟泄漏的Tier 1路由导出限制在10%或更少的网络中。通过在所有大型ISP（所有网络的<1%）上扩展部署Peerlock-lite，并与现有的对等选择内的Peerlock一起使用，可以完全消除约80%的模拟Tier 1路由泄漏。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/flexsealing-bgp-against-route-leaks-peerlock-active-measurement-and-analysis/](https://www.ndss-symposium.org/ndss-paper/flexsealing-bgp-against-route-leaks-peerlock-active-measurement-and-analysis/)
## A Devil of a Time: How Vulnerable is NTP to Malicious Timeservers?
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#a-devil-of-a-time-how-vulnerable-is-ntp-to-malicious-timeservers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#a-devil-of-a-time-how-vulnerable-is-ntp-to-malicious-timeservers)**
### 作者
* Yarin Perry, The Hebrew University of Jerusalem
* Neta Rozen-Schiff, The Hebrew University of Jerusalem
* Michael Schapira, The Hebrew University of Jerusalem
### 摘要
> 网络时间协议（NTP）通过互联网同步计算机系统的时间，在保证许多互联网应用的正确性和安全性方面起着至关重要的作用。不幸的是，NTP容易受到所谓的时间偏移攻击的威胁。这促使人们提出了认证NTP通信和保护NTP客户端的建议和标准化工作。然而，我们观察到，即使有这些解决方案，NTP仍然容易受到恶意时间服务器的攻击。我们探讨了两种攻击策略对时间计算的影响：（1）破坏现有NTP时间服务器，（2）向NTP时间服务器池中注入新的时间服务器。我们首先证明，通过控制相当少数量的现有时间服务器，一名机会主义的攻击者可以在国家级或甚至大陆级范围内改变时间。然后我们证明，向NTP时间服务器池中注入具有不成比例影响力的新时间服务器非常简单，这可以用来发动大规模机会主义攻击和有针对性的战略攻击。我们讨论了一种有希望的方法来减轻这些攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-devil-of-a-time-how-vulnerable-is-ntp-to-malicious-timeservers/](https://www.ndss-symposium.org/ndss-paper/a-devil-of-a-time-how-vulnerable-is-ntp-to-malicious-timeservers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-2_24302_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-2_24302_paper.pdf)
## OblivSketch: Oblivious Network Measurement as a Cloud Service.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#oblivsketch-oblivious-network-measurement-as-a-cloud-service) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#oblivsketch-oblivious-network-measurement-as-a-cloud-service)**
### 作者
* Shangqi Lai, Monash University
* Xingliang Yuan, Monash University
* Joseph K. Liu, Monash University
* Xun Yi, RMIT University
* Qi Li, Tsinghua University
* Dongxi Liu, Data61
### 摘要
> 网络功能虚拟化能够以降低成本的方式将多种网络功能实现为云服务。特别是对于企业网络性能和安全的改善，网络测量任务（如重要访问者检测和流分布估计）起到了许多核心网络功能的作用。然而，将网络测量服务部署在第三方多租户云服务提供商中会带来重要的隐私和安全问题。最近的研究表明，泄露和滥用流量统计数据可能导致严重的网络攻击，如分布式拒绝服务攻击（DDoS）、网络拓扑操纵和中毒等。
> 
> 本文提出一种使用 Intel SGX 的遗忘式网络测量服务 OblivSketch。它采用硬件隔离区域（enclave）来生成和查询安全的网络统计数据。这些统计数据是在新设计的遗忘式数据结构中维护的，位于 SGX 隔离区域内，并通过数据遗忘算法查询，以防止因对 SGX 内存访问模式的泄露而导致数据泄露。为了证明其实用性，我们将 OblivSketch作为一个完整的服务与现成的 SDN 框架集成。评估结果表明，OblivSketch仅消耗恒定且较小的内存空间（6MB）即可跟踪大量流量（从30k到1.45m），并且对于具有70k流量的5s跟踪，对于六个广泛使用的测量查询，响应时间不超过15ms。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/oblivsketch-oblivious-network-measurement-as-a-cloud-service/](https://www.ndss-symposium.org/ndss-paper/oblivsketch-oblivious-network-measurement-as-a-cloud-service/)
## ROV++: Improved Deployable Defense against BGP Hijacking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#rov-improved-deployable-defense-against-bgp-hijacking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#rov-improved-deployable-defense-against-bgp-hijacking)**
### 作者
* Reynaldo Morillo, University of Connecticut
* Justin Furuness, University of Connecticut
* Cameron Morris, University of Connecticut
* James Breslin, University of Connecticut
* Amir Herzberg, University of Connecticut
* Bing Wang, University of Connecticut
### 摘要
> 我们研究并拓展了路由源验证（ROV），这是IETF对跨域路由的防御的基础。我们专注于两种重要的劫持攻击：子前缀劫持和非路由前缀劫持。针对这两种攻击，我们发现，在部分应用的情况下，ROV提供的安全性效益令人失望。我们还提出了超前缀劫持，在非路由前缀劫持的情况下，它完全规避了ROV的防御，并在（宣布的）前缀劫持方面显著规避了ROV的防御。
> 
> 然后，我们提出了ROV++，这是ROV的一种新扩展，即使部分采用也具有显著改进的安全性效益。例如，如果边缘AS（没有客户或对等体的AS）的统一采用率为5％，ROV仅能防止不到5％的子前缀劫持，而ROV ++ 可以防止超过90％的子前缀劫持。ROV++在防御非路由前缀攻击和新型超前缀攻击方面也具有良好的效果。
> 
> 我们评估了几种ROV++的变体，它们都共享了防御方面的改进；这包括“Lite”，即基于现有路由器部署的“仅软件”变体。我们的评估基于对互联网拓扑的广泛模拟。
> 
> 我们还揭示了BGP的一个模糊但重要的方面，ROV对此放大了：可观察的BGP路径（控制平面）与实际流量流向（数据平面）之间的“不一致性”。这些不一致性对于安全性非常相关，并且经常引发我们所称的“隐藏劫持”的挑战。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rov-improved-deployable-defense-against-bgp-hijacking/](https://www.ndss-symposium.org/ndss-paper/rov-improved-deployable-defense-against-bgp-hijacking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-4_24438_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-4_24438_paper.pdf)
## Trust the Crowd: Wireless Witnessing to Detect Attacks on ADS-B-Based Air-Traffic Surveillance.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#trust-the-crowd-wireless-witnessing-to-detect-attacks-on-ads-b-based-air-traffic-surveillance) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#trust-the-crowd-wireless-witnessing-to-detect-attacks-on-ads-b-based-air-traffic-surveillance)**
### 作者
* Kai Jansen, Ruhr University Bochum
* Liang Niu, New York University
* Nian Xue, New York University
* Ivan Martinovic, University of Oxford
* Christina Pöpper, New York University Abu Dhabi
### 摘要
> 自动相关监视广播（ADS-B）已被广泛采用作为航空交通监视的事实标准。航空法规要求所有飞机主动广播包含身份、位置和移动信息的状态报告。然而，缺乏安全措施使得ADS-B容易受到技术能力强的对手的网络攻击，从而干扰航空安全。在本文中，我们开发了一种非侵入式的信任评估系统，通过基于地面传感器基础设施收集的真实飞行数据来检测基于ADS-B的航空交通监视系统的攻击。利用地理分布传感器的冗余性和众包方式的优势，我们实施验证测试以通过无线见证追求安全。我们提案的核心是验证检查和机器学习（ML）辅助的接收模式分类的组合，以用户收集的数据相互验证其他用户提供的数据。我们的系统是非侵入式的，即既不需要对部署的硬件进行修改，也不需要对软件协议进行修改，只利用已经可用的数据。我们证明了我们的系统可以成功检测GPS欺骗、ADS-B欺骗，甚至Sybil攻击，只要至少有三个良性传感器观测到领空。我们还能够区分攻击类型，识别受影响的传感器，并调整我们的系统以适应不断变化的航空交通条件。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/trust-the-crowd-wireless-witnessing-to-detect-attacks-on-ads-b-based-air-traffic-surveillance/](https://www.ndss-symposium.org/ndss-paper/trust-the-crowd-wireless-witnessing-to-detect-attacks-on-ads-b-based-air-traffic-surveillance/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-5_24552_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1A-5_24552_paper.pdf)
## Towards Measuring Supply Chain Attacks on Package Managers for Interpreted Languages.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#towards-measuring-supply-chain-attacks-on-package-managers-for-interpreted-languages) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#towards-measuring-supply-chain-attacks-on-package-managers-for-interpreted-languages)**
### 作者
* Ruian Duan, Georgia Institute of Technology
* Omar Alrawi, Georgia Institute of Technology
* Ranjita Pai Kasturi, Georgia Institute of Technology
* Ryan Elder, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 软件包管理器已经成为现代软件开发过程中至关重要的一部分。它们允许开发者重复使用第三方代码，共享自己的代码，减少代码库，并简化构建过程。然而，最近的报告显示，攻击者滥用软件包管理器来分发恶意软件，给开发者和最终用户带来了重大的安全风险。例如，eslint-scope是一个在Npm上每周下载量达到数百万次的软件包，被攻击者篡改以窃取开发者的凭据。为了了解导致最近供应链攻击可能性的安全漏洞和错误信任，我们提出了一个比较框架，以定性评估解释性语言的软件包管理器的功能和安全特性。基于定性评估，我们采用了元数据、静态和动态分析等众所周知的程序分析技术来研究注册表滥用情况。我们的初步努力发现了339个新的恶意软件包，并将其报告给注册表进行删除。软件包管理器的维护者确认了其中的278个（占报告软件包总数的82%），其中有三个的下载量超过10万次。针对这些软件包，我们收到了官方的CVE编号，以加快从受感染受害者中删除这些软件包的过程。我们概述了将程序分析工具针对解释性语言进行定制时的挑战，并发布我们的流程作为社区的参考点，以便在软件供应链安全方面建立并提供帮助。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-measuring-supply-chain-attacks-on-package-managers-for-interpreted-languages/](https://www.ndss-symposium.org/ndss-paper/towards-measuring-supply-chain-attacks-on-package-managers-for-interpreted-languages/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-1_23055_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-1_23055_paper.pdf)
## Processing Dangerous Paths - On Security and Privacy of the Portable Document Format.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#processing-dangerous-paths-on-security-and-privacy-of-the-portable-document-format) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#processing-dangerous-paths-on-security-and-privacy-of-the-portable-document-format)**
### 作者
* Jens Müller, Ruhr University Bochum
* Dominik Noss, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> PDF是文档交换的事实标准。通常会打开来自潜在不受信任的来源（例如电子邮件附件或从互联网下载的文件）的PDF文件。在本研究中，我们对恶意PDF文件的功能进行了深入分析。我们没有重点关注实施错误，而是通过系统地识别PDF文件结构中的危险路径滥用PDF标准本身的合法功能。这些危险路径导致了我们将攻击分为四个通用类别：（1）影响处理文档的主机的拒绝服务攻击。（2）泄露受害者计算机中的个人数据的信息披露攻击。（3）对受害者系统的数据操纵。（4）对受害者计算机进行代码执行。对28个常用PDF处理应用程序的评估表明，其中26个至少存在一种攻击漏洞。最后，我们提出了一种系统性地保护免受基于PDF功能的攻击的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/processing-dangerous-paths-on-security-and-privacy-of-the-portable-document-format/](https://www.ndss-symposium.org/ndss-paper/processing-dangerous-paths-on-security-and-privacy-of-the-portable-document-format/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-2_23109_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-2_23109_paper.pdf)
## XDA: Accurate, Robust Disassembly with Transfer Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#xda-accurate-robust-disassembly-with-transfer-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#xda-accurate-robust-disassembly-with-transfer-learning)**
### 作者
* Kexin Pei, Columbia University
* Jonas Guan, University of Toronto
* David Williams-King, Columbia University
* Junfeng Yang, Columbia University
* Suman Jana, Columbia University
### 摘要
> 准确而健壮地对剥离二进制文件进行反汇编是具有挑战性的。困难的根源在于剥离二进制文件中缺乏高级结构，例如指令和函数边界，并且必须基于不完整的信息进行恢复。当前的反汇编方法依赖于启发式方法或简单的模式匹配来近似恢复，但这些方法通常不准确且脆弱，特别是在不同编译器优化之间。
> 
> 我们提出了一种基于迁移学习的反汇编框架XDA，它学习了机器码中存在的不同上下文依赖，并将这个知识转移到准确而健壮的反汇编中。我们设计了一个自我监督学习任务，受到掩码语言建模的启发，以学习二进制文件中字节序列之间的交互。这个任务的输出是字节嵌入，它们编码了输入二进制文件的字节标记之间复杂的上下文依赖关系，然后可以对下游的反汇编任务进行微调。
> 
> 我们在来自SPEC CPU2017、SPEC CPU2006和BAP语料库的3,121个二进制文件上评估XDA在两个反汇编任务（恢复函数边界和汇编指令）上的性能。这些二进制文件是由GCC、ICC和MSVC在x86/x64的Windows和Linux平台上通过4个优化级别进行编译的。XDA在恢复函数边界和指令方面分别达到了99.0%和99.7%的F1得分，超过了先前两个任务的最先进技术。它还保持了与最快的基于机器学习的方法相当的速度，并且比IDA Pro等手写反汇编器快高达38倍。我们在https://github.com/CUMLSec/XDA上发布了XDA的代码。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/xda-accurate-robust-disassembly-with-transfer-learning/](https://www.ndss-symposium.org/ndss-paper/xda-accurate-robust-disassembly-with-transfer-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-3_23112_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-3_23112_paper.pdf)
## Shadow Attacks: Hiding and Replacing Content in Signed PDFs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#shadow-attacks-hiding-and-replacing-content-in-signed-pdfs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#shadow-attacks-hiding-and-replacing-content-in-signed-pdfs)**
### 作者
* Christian Mainka, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Simon Rohlmann, Ruhr University Bochum
### 摘要
> 数字签名的PDF文件被用于合同和发票中，以确保其内容的真实性和完整性。用户在打开经过签名的PDF文件时，希望在任何修改情况下都能看到警告。2019年，Mladenov等人揭示了PDF查看器实现中的各种解析漏洞。他们展示了能够修改PDF文档而不使签名无效的攻击。因此，受影响的PDF查看器供应商实施了防止所有攻击的对策。
> 
> 本文介绍了一种新的攻击类型，我们称之为“影子”攻击。这些“影子”攻击绕过了所有现有的对策，并破坏了数字签名的PDF文件的完整性保护。与之前的攻击相比，“影子”攻击不滥用PDF查看器中的实现问题。相反，影子攻击利用PDF规范提供的巨大灵活性，使得影子文档保持符合标准。由于“影子”攻击只滥用合法功能，因此很难遏制。
> 
> 我们的研究结果显示，在29个PDF查看器中，有16个（包括Adobe Acrobat和Foxit Reader）容易受到“影子”攻击的影响。我们推出了我们的工具“PDF-Attacker”，可以自动生成“影子”攻击。此外，我们还实现了“PDF-Detector”，用于防止对影子文档进行签名或进行取证检测，以防止应用到经过签名的PDF文件后利用漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/shadow-attacks-hiding-and-replacing-content-in-signed-pdfs/](https://www.ndss-symposium.org/ndss-paper/shadow-attacks-hiding-and-replacing-content-in-signed-pdfs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-4_24117_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-4_24117_paper.pdf)
## KUBO: Precise and Scalable Detection of User-triggerable Undefined Behavior Bugs in OS Kernel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#kubo-precise-and-scalable-detection-of-user-triggerable-undefined-behavior-bugs-in-os-kernel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#kubo-precise-and-scalable-detection-of-user-triggerable-undefined-behavior-bugs-in-os-kernel)**
### 作者
* Changming Liu, Northeastern University
* Yaohui Chen, Facebook Inc.
* Long Lu, Northeastern University
### 摘要
> 未定义行为错误（UB）通常指的是主要存在于使用较低级编程语言（如C/C++）实现的软件中的各种编程错误。由于操作系统内核与硬件之间的密切交互，UB特别常见于操作系统内核。引发的UB往往会导致来自非特权用户空间程序的攻击，并在操作系统内部引发严重的安全和可靠性问题。之前关于检测内核中UB的研究不得不在精确性方面做出牺牲以追求可扩展性，结果产生了极高的误报率，严重影响了其可用性。
> 
> 我们提出了一种新颖的Linux内核静态UB检测工具，称为KUBO，它同时实现了高精度和整个内核的可扩展性。KUBO专注于检测由用户空间输入触发的关键UB。高精度是通过KUBO对UB触发路径和条件的可满足性进行验证实现的。整个内核的可扩展性是通过一种高效的跨过程分析实现的，该分析以按需的方式沿着调用链向后递增地进行。我们对多个版本的整个Linux内核（包括驱动程序）进行了KUBO的评估。KUBO在最新的Linux内核中发现了23个之前未知的关键UB。KUBO的错误检测率仅为27.5%，远低于最先进的内核UB检测工具（91%）。我们的评估还显示，KUBO生成的Bug报告易于整理。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/kubo-precise-and-scalable-detection-of-user-triggerable-undefined-behavior-bugs-in-os-kernel/](https://www.ndss-symposium.org/ndss-paper/kubo-precise-and-scalable-detection-of-user-triggerable-undefined-behavior-bugs-in-os-kernel/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-5_24461_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1B-5_24461_paper.pdf)
## Awakening the Web's Sleeper Agents: Misusing Service Workers for Privacy Leakage.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#awakening-the-webs-sleeper-agents-misusing-service-workers-for-privacy-leakage) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#awakening-the-webs-sleeper-agents-misusing-service-workers-for-privacy-leakage)**
### 作者
* Soroush Karami, University of Illinois at Chicago
* Panagiotis Ilia, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 服务工作者是由所有主要现代浏览器支持的强大技术，可以通过提供类似原生应用程序的功能来改善用户的浏览体验。尽管它们在开发者社区中越来越受欢迎，但它们并未受到安全研究人员的太多关注。在本论文中，我们探索了服务工作者的功能和内部工作原理，并进行了对其在广泛应用中的API使用的首个全面大规模研究。随后，我们展示了攻击者如何利用服务工作者的战略性安置来实现在包括Chrome和Firefox在内的大多数主要浏览器中进行历史探测的攻击。我们展示了两种新型的历史探测攻击，利用了这些浏览器中适当隔离的缺乏，其中包括一种非破坏性缓存版本。接下来，我们提出了一系列使用案例，说明了我们的技术如何实现侵犯隐私的攻击，可以推断出敏感的应用级信息，如用户的社交图谱。我们已将我们的技术公开披露给所有受影响的供应商，促使Chromium团队探索重新设计其站点隔离机制以抵御我们的攻击。我们还提出了一个对抗措施，可以由网站采用来保护其用户，并开发了一个简化部署的工具，从而促进了大规模的采用。总的来说，我们的工作对浏览器在没有对其安全性和隐私影响进行深入评估的情况下部署新功能的严重风险提出了警示。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/awakening-the-webs-sleeper-agents-misusing-service-workers-for-privacy-leakage/](https://www.ndss-symposium.org/ndss-paper/awakening-the-webs-sleeper-agents-misusing-service-workers-for-privacy-leakage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-2_23104_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-2_23104_paper.pdf)
## All the Numbers are US: Large-scale Abuse of Contact Discovery in Mobile Messengers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#all-the-numbers-are-us-large-scale-abuse-of-contact-discovery-in-mobile-messengers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#all-the-numbers-are-us-large-scale-abuse-of-contact-discovery-in-mobile-messengers)**
### 作者
* Christoph Hagen, University of Würzburg
* Christian Weinert, TU Darmstadt
* Christoph Sendner, University of Würzburg
* Alexandra Dmitrienko, University of Würzburg
* Thomas Schneider, TU Darmstadt
### 摘要
> 联系人发现功能可让移动通信软件用户方便地与他们手机通讯录中的人建立联系。本研究中，我们证明了当前部署的联系人发现方法存在严重的隐私问题。
> 
> 我们对三个热门移动通信软件（WhatsApp、Signal和Telegram）进行了研究，结果显示与预期相反，大规模爬取攻击仍然有可能发生。利用准确的手机号码前缀数据库和极少的资源，我们查询了WhatsApp的10%美国手机号码和Signal的100%美国手机号码。对于Telegram，我们发现其API暴露了大量敏感信息，甚至包括未在该服务中注册的号码。我们呈现了一些有趣的（跨通信软件的）使用统计数据，还揭示了极少数用户更改了默认的隐私设置。关于缓解措施，我们提出了新的技术方法，可以显著限制我们的爬取攻击的可行性，特别是一种新的增量联系人发现方案，严格改进了Signal当前的方法。
> 
> 此外，我们通过比较三种有效的手机号码哈希反转方法，展示了当前部署的基于哈希的联系人发现协议存在严重破坏。为此，我们还提出了一种显著改进的彩虹表构建方法，适用于非均匀分布的输入数据，该方法具有独立的研究价值。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/all-the-numbers-are-us-large-scale-abuse-of-contact-discovery-in-mobile-messengers/](https://www.ndss-symposium.org/ndss-paper/all-the-numbers-are-us-large-scale-abuse-of-contact-discovery-in-mobile-messengers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-3_23159_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-3_23159_paper.pdf)
## Improving Signal's Sealed Sender.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#improving-signals-sealed-sender) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#improving-signals-sealed-sender)**
### 作者
* Ian Martiny, University of Colorado Boulder
* Gabriel Kaptchuk, Boston University
* Adam Aviv, The George Washington University
* Dan Roche, U.S. Naval Avademy
* Eric Wustrow, University of Colorado Boulder
### 摘要
> Signal消息服务最近部署了一个名为“密封发件人”的功能，通过在加密上隐藏消息发件人，为发件人提供匿名性。我们从理论和经验上都证明了，当两方来回发送多个消息时，这种单向匿名性会被破坏；也就是说，“密封发件人”的承诺无法应用于对话消息。我们的攻击属于统计泄露攻击（SDAs）家族，得益于默认启用的“传递回执”功能，该功能通知发件人消息已成功送达，从而增加了攻击的效果。我们使用理论和基于仿真的模型证明，Signal可能仅需5条消息就能将密封发件人用户进行关联。
> 
> 我们的攻击超越了通过网络级别识别符追踪用户，而是针对Signal应用层进行的。这使得我们的攻击对于使用Tor或VPN作为匿名保护的用户尤为有效，这些用户在网络追踪方面本应是安全的。我们提供了一系列实际应对策略，可以用来防止此类攻击，并利用一种新的基于仿真的安全定义证明了我们的协议安全，该定义适用于任何消息序列的单向匿名性。最简单的可证明安全解决方案使用了与Signal使用的（有缺陷的）密封发件人协议相同的机制，这意味着可以在相对较小的开销下部署；我们估计，在拥有数百万用户的系统中运行我们最复杂解决方案的额外加密成本每月不到40美元。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/improving-signals-sealed-sender/](https://www.ndss-symposium.org/ndss-paper/improving-signals-sealed-sender/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-4_24180_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-4_24180_paper.pdf)
## Tales of Favicons and Caches: Persistent Tracking in Modern Browsers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#tales-of-favicons-and-caches-persistent-tracking-in-modern-browsers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#tales-of-favicons-and-caches-persistent-tracking-in-modern-browsers)**
### 作者
* Konstantinos Solomos, University of Illinois at Chicago
* John Kristoff, University of Illinois at Chicago
* Chris Kanich, University of Illinois at Chicago
* Jason Polakis, University of Illinois at Chicago
### 摘要
> 近年来，网络追踪的隐私威胁引起了研究人员和实践者的广泛关注。这导致用户变得更加注重隐私，并且浏览器供应商逐渐采用各种对策来减轻特定形式的基于Cookie和无Cookie的追踪。然而，现代浏览器的复杂性和功能丰富往往导致部署看似无害的功能，可以被对手轻易滥用。在本文中，我们介绍了一种新型的追踪机制，该机制滥用了一种简单且普遍存在的浏览器功能：网站图标。具体来说，一个网站可以通过将追踪标识符存储为浏览器专用的网站图标缓存中的一组条目来跟踪用户的浏览会话，其中每个条目对应于特定的子域。在后续的用户访问中，通过观察用户自动快速地通过一系列子域进行重定向时浏览器请求的网站图标，该网站可以重构标识符。更重要的是，现代浏览器中网站图标的缓存具有几个独特的特点，使得这种追踪方式特别强大，因为它是持久的（不受用户清除浏览器数据的影响），非破坏性的（在后续的访问中重构标识符不会改变已缓存条目的组合），甚至跨越隐身模式的隔离。我们实验评估了攻击的几个方面，并提出了一系列优化技术，使我们的攻击变得实用。我们发现，将我们的网站图标追踪技术与浏览器指纹属性相结合，这些属性随时间不变，可以使网站在2秒内重构出一个32位的追踪标识符。此外，我们的攻击适用于使用网站图标缓存的所有主要浏览器，包括Chrome和Safari。由于我们攻击的严重性，我们提议更改浏览器的网站图标缓存行为，以防止这种形式的追踪，并已将我们的发现公开给了浏览器供应商，他们目前正在探索适当的缓解策略。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tales-of-favicons-and-caches-persistent-tracking-in-modern-browsers/](https://www.ndss-symposium.org/ndss-paper/tales-of-favicons-and-caches-persistent-tracking-in-modern-browsers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-5_24202_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_1C-5_24202_paper.pdf)
## Reining in the Web's Inconsistencies with Site Policy.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#reining-in-the-webs-inconsistencies-with-site-policy) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#reining-in-the-webs-inconsistencies-with-site-policy)**
### 作者
* Stefano Calzavara, Università Ca' Foscari Venezia
* Tobias Urban, Institute for Internet Security and Ruhr University Bochum
* Dennis Tatang, Ruhr University Bochum
* Marius Steffens, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 多年来，浏览器通过HTTP头部采用了越来越多由客户端强制执行的安全策略。这些机制对于网络应用安全来说至关重要，通常以每个页面为基础进行部署。然而，这导致了不一致性，因为在相同的安全边界（以源或站点形式存在）内的不同页面可能存在冲突的安全需求。在本文中，我们将不一致性形式化应用于Cookie安全属性、CSP和HSTS，并通过爬取15,000个热门站点量化不一致性的程度和影响。我们展示了许多站点通过遗漏或错误配置上述机制来危及自身的安全性，从而造成了不必要的XSS攻击、Cookie盗取和HSTS禁用。然后，我们使用我们的数据分析最近的“Origin Policy”提案在多大程度上可以解决不一致性问题。不幸的是，我们得出结论认为当前的“Origin Policy”设计存在重大缺陷，限制了它在实际应用中解决安全不一致性的可行性，同时也不能满足实际的站点需求。基于这些见解，我们提出了“Site Policy”，这是“Origin Policy”的扩展，旨在克服“Origin Policy”的缺点并明确任何不安全的情况。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/reining-in-the-webs-inconsistencies-with-site-policy/](https://www.ndss-symposium.org/ndss-paper/reining-in-the-webs-inconsistencies-with-site-policy/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-1_23091_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-1_23091_paper.pdf)
## From WHOIS to WHOWAS: A Large-Scale Measurement Study of Domain Registration Privacy under the GDPR.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#from-whois-to-whowas-a-large-scale-measurement-study-of-domain-registration-privacy-under-the-gdpr) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#from-whois-to-whowas-a-large-scale-measurement-study-of-domain-registration-privacy-under-the-gdpr)**
### 作者
* Chaoyi Lu, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Baojun Liu, Tsinghua University; Beijing National Research Center for Information Science and Technology; Qi An Xin Group
* Yiming Zhang, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Zhou Li, University of California
### 摘要
> 当一个域名被注册时，有关注册人和其他相关人员的信息被注册商或注册处拥有的WHOIS数据库记录下来（称为WHOIS提供商），这些数据是可以公开查询的。然而，由于欧洲联盟的一般数据保护条例（GDPR）的执行，某些与欧洲经济区（EEA）注册人有关的WHOIS数据需要在发布给公众之前进行删除。有传言称，一些WHOIS提供商已经采取了行动。然而，到目前为止还没有系统性的研究来量化WHOIS提供商对GDPR的响应所做的更改，以及他们进行数据删除的策略以及对依赖于WHOIS数据的其他应用程序的影响。
> 
> 在这项研究中，我们报告了第一次大规模的测量研究，以回答这些问题，希望指导GDPR的执行，并识别在遵从过程中的陷阱。通过分析跨越两年的12亿个WHOIS记录集合，我们实现了这项研究。为了自动化分析任务，我们构建了一个基于无监督学习的新系统GCChecker，该系统为提供商分配一个符合性评分。我们的研究结果表明，WHOIS对GDPR的合规性具有多重影响。其中一些亮点包括，我们发现GDPR对WHOIS产生了深远影响，超过85%的大型WHOIS提供商在大规模上删除了EEA记录。令人惊讶的是，超过60%的大型WHOIS数据提供商还删除了非EEA记录。还发现了一些合规性缺陷，如不完全删除。对安全应用的影响显著，可能需要重新设计。我们相信不同的社区（安全、域名和法律）应该共同努力解决这些问题，以实现更好的WHOIS隐私和效用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-whois-to-whowas-a-large-scale-measurement-study-of-domain-registration-privacy-under-the-gdpr/](https://www.ndss-symposium.org/ndss-paper/from-whois-to-whowas-a-large-scale-measurement-study-of-domain-registration-privacy-under-the-gdpr/)
## Understanding the Growth and Security Considerations of ECS.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-the-growth-and-security-considerations-of-ecs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-the-growth-and-security-considerations-of-ecs)**
### 作者
* Athanasios Kountouras, Georgia Institute of Technology
* Panagiotis Kintis, Georgia Institute of Technology
* Athanasios Avgetidis, Georgia Institute of Technology
* Thomas Papastergiou, Georgia Institute of Technology
* Charles Lever, Georgia Institute of Technology
* Michalis Polychronakis, Stony Brook University
* Manos Antonakakis, Georgia Institute of Technology
### 摘要
> 域名系统（DNS）对于互联网的通信至关重要。因此，对DNS的任何提议的更改或扩展都可能对网络通信产生深远影响。在本文中，我们探讨了最近对DNS的一个扩展称为EDNS客户子网（ECS）的影响。该扩展通过向递归域名服务器上方的DNS名称服务器提供客户端IP地址的前缀，将客户端信息的可见性扩展给更多的域名操作者。这引发了关于此类变化对依赖DNS的网络通信的影响的许多问题。
> 
> 在本文中，我们通过使用多个DNS观测点测量ECS的部署情况，展示了一项纵向研究的结果。我们发现，尽管ECS是一个可选的扩展，但它在时间上的采用率仍然稳定增长，即使对不从中受益的网站也是如此。此外，我们观察到由ECS提供的客户子网可能比最初预期的隐私性更差，大多数子网对应于/24 CIDR或更小的子网。最后，我们观察到DNS的引入导致了一些积极和消极的后果。例如，DNS可以在分析递归之上的DNS数据时帮助安全工作，因为增加了客户端网络信息。然而，同样的客户端信息可能加剧现有的DNS泄漏等安全问题。最终，本文讨论了对基础协议进行小的改动如何导致意想不到的积极和消极的后果。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-the-growth-and-security-considerations-of-ecs/](https://www.ndss-symposium.org/ndss-paper/understanding-the-growth-and-security-considerations-of-ecs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-3_24343_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-3_24343_paper.pdf)
## Mondrian: Comprehensive Inter-domain Network Zoning Architecture.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#mondrian-comprehensive-inter-domain-network-zoning-architecture) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#mondrian-comprehensive-inter-domain-network-zoning-architecture)**
### 作者
* Jonghoon Kwon, ETH Zürich
* Claude Hähni, ETH Zürich
* Patrick Bamert, Zürcher Kantonalbank
* Adrian Perrig, ETH Zürich
### 摘要
> 设计IT安全基础设施的一个核心要素是将信息资产逻辑性地分割成具有相同安全要求和政策的群组，称为网络区域。随着越来越多的商业生态系统迁移到云端，对网络区域在大型企业网络中的操作和管理提出了额外的网络安全要求，这使得这些任务变得具有挑战性。在本文中，我们介绍了一个新的概念，即跨域中转区，它可以安全地桥接在物理上和逻辑上不相邻的区域，简化了复杂的网络区域结构。通过跨区域翻译点，我们还可以确保通信的完整性和保密性，并提供轻量级的安全策略执行。一个逻辑上集中的网络协调器实现了可扩展和灵活的网络管理。我们的实施证明，新体系结构仅在转发过程中引入了几微秒的额外处理延迟。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mondrian-comprehensive-inter-domain-network-zoning-architecture/](https://www.ndss-symposium.org/ndss-paper/mondrian-comprehensive-inter-domain-network-zoning-architecture/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-4_24378_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2A-4_24378_paper.pdf)
## Bringing Balance to the Force: Dynamic Analysis of the Android Application Framework.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#bringing-balance-to-the-force-dynamic-analysis-of-the-android-application-framework) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#bringing-balance-to-the-force-dynamic-analysis-of-the-android-application-framework)**
### 作者
* Abdallah Dawoud, CISPA Helmholtz Center for Information Security
* Sven Bugiel, CISPA Helmholtz Center for Information Security
### 摘要
> Android的应用程序框架在保护用户的私人数据和系统完整性方面发挥着关键作用。因此，它成为了各种先前研究的目标，这些研究分析了其安全策略和执行情况。这些研究揭示了不同的安全问题，包括不完整的文档、框架内的权限再委派以及访问控制的不一致性。然而，除了一个之外，所有这些先前的研究都基于静态代码分析。因此，它们的结果只提供了一面之词，继承了将静态分析应用于广泛而复杂的代码库时的限制和缺点。更重要的是，不同安全应用程序的性能（包括恶意软件分类和最低权限应用）都依赖于这些分析结果，但由于这种不平衡的分析方法，这些应用程序目前受到不准确和不完整结果的影响。为了补充和完善这种方法，并因此改进依赖于它的应用程序，我们将应用程序框架的动态分析添加到当前的研究领域，并展示了这种方式对改进先前结果和推动领域发展的必要性。通过将我们称之为Dynamo的解决方案应用于文献中的四个重要用例，并对结果进行总览，我们验证了先前静态分析解决方案的现有结果，同时也进行了反驳和拓展。通过手动调查结果之间差异的根本原因，我们获得了宝贵的洞察和专业知识，可用于改进应用程序框架的静态和动态测试。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bringing-balance-to-the-force-dynamic-analysis-of-the-android-application-framework/](https://www.ndss-symposium.org/ndss-paper/bringing-balance-to-the-force-dynamic-analysis-of-the-android-application-framework/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-1_23106_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-1_23106_paper.pdf)
## SymQEMU: Compilation-based symbolic execution for binaries.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#symqemu-compilation-based-symbolic-execution-for-binaries) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#symqemu-compilation-based-symbolic-execution-for-binaries)**
### 作者
* Sebastian Poeplau, EURECOM and Code Intelligence
* Aurélien Francillon, EURECOM
### 摘要
> 符号执行是一种强大的软件分析和错误检测技术。最近提出的基于编译的符号执行是一种改进符号执行性能的方法，前提是有源代码可用。我们演示了一种新颖的技术，可以实现无需源代码的二进制文件的编译式符号执行。我们的系统SymQEMU建立在QEMU之上，修改目标程序的中间表示形式，然后将其转换为主机体系结构。这使得SymQEMU能够将符号执行能力编译到二进制文件中，并获得相关的性能优势，同时保持体系结构的独立性。
> 
> 我们介绍了我们的方法和实现，并展示了它在统计上优于现有的二进制符号执行器S2E和 QSYM；在某些基准测试中，甚至比基于源代码的SymCC表现更好。此外，我们的工具在经过充分测试的libarchive库中发现了一个以前未知的漏洞，展示了它在测试实际软件中的实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/symqemu-compilation-based-symbolic-execution-for-binaries/](https://www.ndss-symposium.org/ndss-paper/symqemu-compilation-based-symbolic-execution-for-binaries/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-2_24118_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-2_24118_paper.pdf)
## TASE: Reducing Latency of Symbolic Execution with Transactional Memory.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#tase-reducing-latency-of-symbolic-execution-with-transactional-memory) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#tase-reducing-latency-of-symbolic-execution-with-transactional-memory)**
### 作者
* Adam Humphries, University of North Carolina
* Kartik Cating-Subramanian, University of Colorado
* Michael K. Reiter, Duke University
### 摘要
> 我们提出了一种名为TASE的工具的设计和实现，该工具使用事务内存来减少具有少量符号状态的符号执行应用程序的延迟。执行路径在操作具体值时以本地方式执行，只有在执行遇到符号值（或建模函数）时才会暂停本地执行并开始解释执行。当不再遇到符号值时，执行将恢复到本地模式。TASE设计的关键创新是一种分摊检查值是否为符号的成本的技术，以及使用硬件支持的事务内存（TSX）来实现本地执行，在检测到使用符号值时回滚且不产生影响（可能是延迟）。我们展示了TASE具有显著改善一些对延迟敏感的符号执行应用程序的潜力，例如验证客户端在客户端-服务器应用程序中的行为的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tase-reducing-latency-of-symbolic-execution-with-transactional-memory/](https://www.ndss-symposium.org/ndss-paper/tase-reducing-latency-of-symbolic-execution-with-transactional-memory/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-3_24327_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-3_24327_paper.pdf)
## Refining Indirect Call Targets at the Binary Level.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#refining-indirect-call-targets-at-the-binary-level) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#refining-indirect-call-targets-at-the-binary-level)**
### 作者
* Sun Hyoung Kim, Penn State
* Cong Sun, Xidian University
* Dongrui Zeng, Penn State
* Gang Tan, Penn State
### 摘要
> 强制细粒度的控制流完整性（CFI）对提高软件安全性至关重要。然而，对于商业现成（COTS）的二进制文件，构建高精度的控制流图（CFG）是具有挑战性的，因为没有源代码级别的信息，如符号和类型，来协助间接分支目标的推断。缺乏源代码级别的信息相比其他类型的间接分支，对于推断间接调用目标带来了额外的挑战。指向分析可能是解决这个问题的一个有前途的方法，但在二进制级别推断间接调用目标方面，目前没有可行的指向分析框架。值集分析（VSA）是最先进的二进制级别指向分析方法，但不适用于大型程序。它的设计非常保守，因此导致了低精度的CFG构建。在本文中，我们提出了一个名为BPA的二进制级别指向分析框架，用于构建精确且高精度的CFG。它是在二进制级别上进行指向分析的一种新方法，重点解决间接调用目标的问题。BPA采用了几种主要技术，包括假设一个块内存模型和一个用于将内存分区为块的内存访问分析，以在可伸缩性和精度之间取得更好的平衡。在评估中，我们证明BPA相比当前最先进的技术提高了34.5％的精度，而没有引入错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/refining-indirect-call-targets-at-the-binary-level/](https://www.ndss-symposium.org/ndss-paper/refining-indirect-call-targets-at-the-binary-level/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-4_24386_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2B-4_24386_paper.pdf)
## Obfuscated Access and Search Patterns in Searchable Encryption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#obfuscated-access-and-search-patterns-in-searchable-encryption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#obfuscated-access-and-search-patterns-in-searchable-encryption)**
### 作者
* Zhiwei Shang, University of Waterloo
* Simon Oya, University of Waterloo
* Andreas Peter, University of Twente
* Florian Kerschbaum, University of Waterloo
### 摘要
> 可搜索的对称加密（SSE）允许数据所有者将其加密数据安全地外包给云服务器，同时保持对数据进行搜索和检索匹配文档的能力。大多数现有的SSE方案泄露每个查询访问了哪些文档，即所谓的访问模式，从而容易受到可能恢复数据库或查询关键字的攻击。当前完全隐藏访问模式的技术，如ORAM或PIR，通信或计算成本较高，并且没有考虑搜索功能。最近，Chen等人（INFOCOM'18）提出了一种模糊框架用于SSE，以合理的效用成本以差分隐私的方式保护访问模式。然而，该方案在查询相同关键字时总是产生相同的模糊访问模式，从而泄漏了所谓的搜索模式，即执行某个查询的次数。此泄露使该提案容易受到某些数据库和查询恢复攻击。
> 
> 在本文中，我们提出了OSSE（模糊SSE），这是一种对每个查询执行的访问模式进行单独混淆的SSE方案。这反过来隐藏了搜索模式，并使我们的方案能够抵御依赖此泄漏的攻击。在对数据库和查询分布作出一定合理假设的情况下，我们的方案的通信开销较ORAM-based SSE更小。此外，我们的方案在单一通信轮中工作，并且需要非常小的客户端存储空间。我们的实证评估显示，OSSE在保护不同查询恢复攻击方面非常有效，并保持了合理的效用水平。我们的协议相对于Chen等人的提案提供了更大程度的保护，这证明了在设计有效的隐私保护SSE方案时隐藏搜索模式的重要性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/obfuscated-access-and-search-patterns-in-searchable-encryption/](https://www.ndss-symposium.org/ndss-paper/obfuscated-access-and-search-patterns-in-searchable-encryption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-1_23041_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-1_23041_paper.pdf)
## More than a Fair Share: Network Data Remanence Attacks against Secret Sharing-based Schemes.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#more-than-a-fair-share-network-data-remanence-attacks-against-secret-sharing-based-schemes) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#more-than-a-fair-share-network-data-remanence-attacks-against-secret-sharing-based-schemes)**
### 作者
* Leila Rashidi, University of Calgary
* Daniel Kostecki, Northeastern University
* Alexander James, University of Calgary
* Anthony Peterson, Northeastern University
* Majid Ghaderi, University of Calgary
* Samuel Jero, MIT Lincoln Laboratory
* Cristina Nita-Rotaru, Northeastern University
* Hamed Okhravi, MIT Lincoln Laboratory
* Reihaneh Safavi-Naini, University of Calgary
### 摘要
> 随着实现实用量子计算机的进展，对不依赖离散对数或因子分解问题的量子安全、安全通信方案的搜索越来越迅猛。一种称为多路径切换与秘密共享（MSSS）的加密方案，将秘密共享与多路径切换相结合，只要敌对方没有对所有路径进行全局可观察，并且无法获取足够的共享信息来重建消息，就可以实现安全性。MSSS假设在路径上发送共享是一项原子操作，并且所有路径具有相同的延迟。
> 
> 我们发现MSSS存在一个边信道漏洞，这是由于在真实网络中，发送共享不是一个原子操作，因为路径具有多个跳和不同的延迟。这个信道，称为网络数据残留（NDR），存在于所有像MSSS这样的方案中，其安全性依赖于路径的原子性和所有路径具有相同的延迟。我们在一个物理实验平台上证明了NDR的存在。然后我们确定了两种利用边信道的新攻击，称为NDR Blind和NDR Planned，并提出了一个分析模型来分析这些攻击，并使用基于ONOS SDN控制器的MSSS实现进行演示。最后，我们提出了一种用于抵御这些攻击的对策，并展示了在模拟和Mininet实验中的有效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/more-than-a-fair-share-network-data-remanence-attacks-against-secret-sharing-based-schemes/](https://www.ndss-symposium.org/ndss-paper/more-than-a-fair-share-network-data-remanence-attacks-against-secret-sharing-based-schemes/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-2_23062_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-2_23062_paper.pdf)
## Forward and Backward Private Conjunctive Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#forward-and-backward-private-conjunctive-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#forward-and-backward-private-conjunctive-searchable-symmetric-encryption)**
### 作者
* Sikhar Patranabis, ETH Zurich
* Debdeep Mukhopadhyay, IIT Kharagpur
### 摘要
> 动态可搜索对称加密（SSE）在外包的对称加密数据上支持更新和关键词搜索，并旨在最小化（不可信）主机服务器所暴露的信息。动态SSE的文献在这方面已经确定了两个关键的安全性质 - 前向隐私和后向隐私。前向隐私使得服务器很难将更新操作与先前执行的搜索操作关联起来。后向隐私限制了服务器对已从数据库中删除的文档所了解的信息量。
> 
> 迄今为止，前向和后向私有SSE的研究主要集中在单个关键字搜索上。然而，为了使任何SSE方案真正实用，它至少应支持并发关键字搜索。在这种情况下，大多数先前具有次线性搜索复杂性的SSE构造不支持动态数据库。唯一的例外是Kamara和Moataz的方案（EUROCRYPT'17）;然而，它只实现了前向隐私。在并发关键字搜索的设置中，实现既有前向隐私又有后向隐私，这是任何动态SSE方案最理想的安全概念，仍然未解决。
> 
> 在这项工作中，我们开发了第一个支持并发关键字搜索的前向和后向私有SSE方案。我们提出的方案称为遗忘动态交叉标签（ODXT），可扩展到包括属性值和自由文本数据库在内的非常大的任意结构化数据库。ODXT通过高效支持快速更新和并发关键字搜索而在性能和安全性之间提供了一个现实的权衡，同时对服务器只造成了适应现有前向和后向隐私概念的中度访问模式泄露。我们精确定义了ODXT的泄露配置文件，并对其安全性进行了详细的形式分析。然后，我们通过开发原型实现并评估其在包含数百万文档的现实世界数据库上的性能，展示了ODXT的实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/forward-and-backward-private-conjunctive-searchable-symmetric-encryption/](https://www.ndss-symposium.org/ndss-paper/forward-and-backward-private-conjunctive-searchable-symmetric-encryption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-3_23116_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_2C-3_23116_paper.pdf)
## Practical Non-Interactive Searchable Encryption with Forward and Backward Privacy.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#practical-non-interactive-searchable-encryption-with-forward-and-backward-privacy) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#practical-non-interactive-searchable-encryption-with-forward-and-backward-privacy)**
### 作者
* Shi-Feng Sun, Monash University
### 摘要
> 在动态对称可搜索加密（DSSE）中，前向隐私确保以前的搜索查询不能与未来的更新关联，而后向隐私则确保后续的搜索查询不能与过去的已删除文档关联。在本文中，我们提出了一种通用的前向和后向隐私DSSE方案，据我们所知，这是第一个实用且非交互式的第二类后向隐私DSSE方案，而不依赖于可信执行环境。为此，我们首先引入了一种名为对称可撤销加密（SRE）的新密码原语，并提出了一种基于一些简洁密码原语的模块化构建。然后我们基于提出的SRE提出了我们的DSSE方案，并使用轻量级对称密码原语进行实例化。最后，我们实施了我们的方案，并将其与迄今为止效率最高的第二类后向隐私方案（Demertzis等人，NDSS 2020）进行了比较。在典型的网络环境中，我们的结果显示，在相同的安全概念下，我们的方案中的搜索性能比它高出2-11倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/practical-non-interactive-searchable-encryption-with-forward-and-backward-privacy/](https://www.ndss-symposium.org/ndss-paper/practical-non-interactive-searchable-encryption-with-forward-and-backward-privacy/)
## Zoom on the Keystrokes: Exploiting Video Calls for Keystroke Inference Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#zoom-on-the-keystrokes-exploiting-video-calls-for-keystroke-inference-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#zoom-on-the-keystrokes-exploiting-video-calls-for-keystroke-inference-attacks)**
### 作者
* Mohd Sabra, University of Texas at San Antonio
* Anindya Maiti, University of Oklahoma
* Murtuza Jadliwala, University of Texas at San Antonio
### 摘要
> 由于近期的世界事件，视频通话已经成为个人和职业远程沟通的新常态。然而，如果视频通话的参与者不小心，他/她可能会向其他参与者泄露个人信息。本文中，我们设计并评估了一种攻击框架，以从视频通话的视频流中推断出一种私人信息，即在通话过程中键入的文本信息。我们在不同的实验设置下评估了基于视频的键入推断框架，包括不同的网络摄像头，视频分辨率，键盘，衣物和背景等。我们在常见实验设置下高准确率的键入推断结果突显了对此类攻击的警惕性和对策的必要性。因此，我们还提出并评估了一种有效的缓解技术，可以在用户在视频通话中键入时自动保护用户。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/zoom-on-the-keystrokes-exploiting-video-calls-for-keystroke-inference-attacks/](https://www.ndss-symposium.org/ndss-paper/zoom-on-the-keystrokes-exploiting-video-calls-for-keystroke-inference-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-1_23063_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-1_23063_paper.pdf)
## Deceptive Deletions for Protecting Withdrawn Posts on Social Media Platforms.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#deceptive-deletions-for-protecting-withdrawn-posts-on-social-media-platforms) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#deceptive-deletions-for-protecting-withdrawn-posts-on-social-media-platforms)**
### 作者
* Mohsen Minaei, Visa Research
* S Chandra Mouli, Purdue University
* Mainack Mondal, IIT Kharagpur
* Bruno Ribeiro, Purdue University
* Aniket Kate, Purdue University
### 摘要
> 在线社交平台上分享言辞不当的想法和个人信息过度共享现象普遍存在。在很多情况下，用户后悔分享这样的内容。为了回顾性地矫正用户分享决策中的这些错误，大多数平台提供了（删除）机制来撤回内容，社交媒体用户通常会利用这些机制。讽刺的是，这些删除操作使用户更容易受到恶意行为者的侵犯，后者特意在大范围内寻找已删除的帖子。这种行为的原因很简单：删除一个帖子就像是一个强有力的信号，表明这个帖子可能对其所有者造成损害。如今，多个存档服务已经开始扫描社交媒体上这些已删除的帖子。此外，正如我们在这项工作中所展示的，强大的机器学习模型可以大规模检测到有害的删除操作。
> 
> 为了遏制这种全球对用户被遗忘权利的敌对行为，我们引入了“欺骗性删除”机制，该机制最大程度地减小了敌对方的优势。我们的机制注入了欺骗性删除，从而在已删除的帖子中创建了一个双方博弈，其中一方是寻找在已删除的帖子中分类有害内容的敌对方，另一方是利用欺骗性删除来伪装真正有害的删除的挑战者。我们对这两个参与者之间的“欺骗性游戏”进行了形式化描述，确定了敌对方或挑战者在游戏中可证明获胜的条件，并讨论了这两个极端之间的场景。我们将“欺骗性删除”机制应用于Twitter上的一个真实任务：隐藏有害推文的删除操作。我们展示了一个强大的全球敌对者可以被一个强大的挑战者击败，从而显著提高了在社交平台上真正被遗忘的可能性，并带来了一线希望。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/deceptive-deletions-for-protecting-withdrawn-posts-on-social-media-platforms/](https://www.ndss-symposium.org/ndss-paper/deceptive-deletions-for-protecting-withdrawn-posts-on-social-media-platforms/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-2_23139_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-2_23139_paper.pdf)
## Who's Hosting the Block Party? Studying Third-Party Blockage of CSP and SRI.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#whos-hosting-the-block-party-studying-third-party-blockage-of-csp-and-sri) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#whos-hosting-the-block-party-studying-third-party-blockage-of-csp-and-sri)**
### 作者
* Marius Steffens, CISPA Helmholtz Center for Information Security
* Marius Musch, TU Braunschweig
* Martin Johns, TU Braunschweig
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> Web已经发展成为我们日常生活中使用最广泛的应用平台。第一方Web应用程序的兴盛要归功于许多不同的第三方，它们为其网站提供辅助功能，如地图或广告。在本文中，我们旨在通过对10,000个顶级网站进行为期12周的纵向研究，了解这种外包对两个关键安全机制（内容安全策略（CSP；用于减轻跨站脚本攻击（XSS））和子资源完整性（SRI；用于减轻第三方妥协））的不良影响程度。
> 
> 在假设第一方希望部署CSP和SRI，并且能够使其代码库符合这些机制的情况下，我们评估了有多少网站可以在没有其第三方的合作下完全部署这些机制。对于那些无法在没有合作的情况下做到这一点的网站，我们还测量了多少第三方必须联合使其代码符合要求，以实现第一方对CSP和SRI的使用。
> 
> 为了更准确地描述信任关系，我们依赖于对所调查网站的所有页面中包含链的整体视图。此外，基于启发式方法和手动验证的组合，我们确定了属于同一业务实体的不同eTLD+1，使我们能够更准确地区分各方。通过这样做，我们展示了绝大多数网站包含了第三方代码，这需要使用unsafe-inline（75%）或unsafe-eval（61%），或者在不破坏功能的情况下无法部署strict-dynamic（76%）。对于SRI，基于单个快照的分析（不到12小时内），我们还展示了超过一半的网站无法完全依赖SRI来保护其免受第三方妥协的影响，这是由于第三方内容的随机性所致。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/whos-hosting-the-block-party-studying-third-party-blockage-of-csp-and-sri/](https://www.ndss-symposium.org/ndss-paper/whos-hosting-the-block-party-studying-third-party-blockage-of-csp-and-sri/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-3_24028_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-3_24028_paper.pdf)
## To Err.Is Human: Characterizing the Threat of Unintended URLs in Social Media.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#to-err-is-human-characterizing-the-threat-of-unintended-urls-in-social-media) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#to-err-is-human-characterizing-the-threat-of-unintended-urls-in-social-media)**
### 作者
* Beliz Kaleli, Boston University
* Brian Kondracki, Stony Brook University
* Manuel Egele, Boston University
* Nick Nikiforakis, Stony Brook University
* Gianluca Stringhini, Boston University
### 摘要
> 为了使其服务更加用户友好，在线社交媒体平台会自动识别与URL相对应的文本，并将其渲染为可点击的链接。
> 
> 在这篇论文中，我们展示了此类服务用于识别URL的技术通常过于宽松，可能导致社交网络消息中显示意外的URL。我们发现，流行的平台（如Twitter）如果用户在句子的结尾忘记加上空格，并且下一个句子的第一个单词恰好是有效的顶级域名，它们将会将文本渲染为可点击的URL。攻击者可以利用这些意外的URL注册相应的域名，将数百万Twitter用户暴露在任意恶意内容之中。为了评估意外URL对社交媒体用户的威胁，我们在7个月的时间里对推文中的意外URL进行了大规模研究。通过设计一个能够区分推文中有意和意外URL的分类器，我们发现由拥有数千万关注者的账户发表了超过26,000个意外URL。作为研究的一部分，我们还注册了45个意外域名，并量化了攻击者仅通过在正确的时间注册正确的域名可以获得的流量。最后，由于我们发现的严重性，我们提出了一个轻量级的浏览器扩展，可以动态分析用户撰写的推文，并在推文发布之前警示他们可能存在的意外URL并发出警告，使用户有机会修正错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/to-err-is-human-characterizing-the-threat-of-unintended-urls-in-social-media/](https://www.ndss-symposium.org/ndss-paper/to-err-is-human-characterizing-the-threat-of-unintended-urls-in-social-media/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-4_24322_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-4_24322_paper.pdf)
## SerialDetector: Principled and Practical Exploration of Object Injection Vulnerabilities for the Web.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#serialdetector-principled-and-practical-exploration-of-object-injection-vulnerabilities-for-the-web) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#serialdetector-principled-and-practical-exploration-of-object-injection-vulnerabilities-for-the-web)**
### 作者
* Mikhail Shcherbakov, KTH Royal Institute of Technology
* Musard Balliu, KTH Royal Institute of Technology
### 摘要
> 过去十年来，网络应用领域中的代码重用攻击数量激增。这些攻击源自于对象注入漏洞（OIV），使得攻击者控制的数据可以滥用网络应用程序代码库中的合法代码片段来执行恶意计算，例如攻击者代表其执行远程代码执行等。OIV通常发生在不受信任的数据被用来实例化一个由攻击者控制类型的对象，并在其中触发应用程序可能并未使用但可用的代码的执行时。在网络应用领域中，OIV可能在客户端数据反序列化的过程中出现，例如HTTP请求，该过程会重建对象图形，并在后端应用程序上进行处理。
> 
> 本文提出了第一个系统化的方法来检测和利用.NET应用程序中的OIV，包括框架和库。我们的关键观点是：OIV的根本原因是应用程序的公共入口点（例如HTTP请求处理程序）到创建任意类型对象的敏感方法（例如反射API）之间的不受信任的信息流，用以调用触发gadget执行的方法（例如本地/虚拟方法）。基于这个观点，我们开发并实现了SerialDetector，一种基于污点的数据流分析工具，可以自动发现.NET程序集中的OIV模式。然后我们使用这些模式来匹配公开可用的gadget，并自动验证OIV攻击的可行性。我们通过对Azure DevOps Server等复杂生产软件进行深入评估，展示了我们方法的有效性。我们描述了关键的威胁模型，并报告了SerialDetector发现的几个远程代码执行漏洞，其中包括Azure DevOps Server的三个CVE漏洞。我们还对最近公开的CVE漏洞进行了全面的安全分析。我们的结果表明，SerialDetector可以有效且高效地检测OIV。我们公开发布了我们的工具，以支持开放科学，并鼓励研究人员和实践者进一步探索这一主题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/serialdetector-principled-and-practical-exploration-of-object-injection-vulnerabilities-for-the-web/](https://www.ndss-symposium.org/ndss-paper/serialdetector-principled-and-practical-exploration-of-object-injection-vulnerabilities-for-the-web/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-5_24550_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3A-5_24550_paper.pdf)
## The Abuser Inside Apps: Finding the Culprit Committing Mobile Ad Fraud.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#the-abuser-inside-apps-finding-the-culprit-committing-mobile-ad-fraud) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#the-abuser-inside-apps-finding-the-culprit-committing-mobile-ad-fraud)**
### 作者
* Joongyum Kim, KAIST
* Jung-hwan Park, KAIST
* Sooel Son, KAIST
### 摘要
> 移动广告欺诈是一个重要威胁，它会损害应用程序发布者和其用户，从而破坏应用市场的生态系统。以往关于检测移动广告欺诈的研究主要集中在构建预定义的测试场景上，这些场景排除了用户参与识别广告欺诈的可能性。然而，由于它们依赖于上下文测试环境，这些研究忽略了追踪导致观察到的广告欺诈的应用程序模块和用户交互的重要性。
> 
> 为了解决这些缺点，本文介绍了一个名为FraudDetective的动态测试框架，用于识别广告欺诈行为。FraudDetective专注于识别无任何用户交互的欺诈行为。FraudDetective通过连接多个碎片化的堆栈跟踪，计算从观察到的广告欺诈行为到用户事件的完整堆栈跟踪，从而生成用户输入和观察到的欺诈行为之间的因果关系。我们修改了Android开源项目(AOSP)，使其能够发出检测到的广告欺诈行为及其完整堆栈跟踪，这有助于确定观察到的欺诈行为的应用程序模块。我们在Google Play商店的48,172个应用程序上评估了FraudDetective。FraudDetective报告称，有74个应用程序负责34,453个广告欺诈行为，并发现98.6%的欺诈行为来自嵌入式第三方广告库。我们的评估表明，FraudDetective能够基于观察到的可疑行为进行准确地识别广告欺诈，而无需用户交互。实验结果还揭示了一个新的洞察，即滥用广告服务提供商利用他们的广告库积极从事广告欺诈行为。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-abuser-inside-apps-finding-the-culprit-committing-mobile-ad-fraud/](https://www.ndss-symposium.org/ndss-paper/the-abuser-inside-apps-finding-the-culprit-committing-mobile-ad-fraud/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-1_23161_paper-1.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-1_23161_paper-1.pdf)
## Your Phone is My Proxy: Detecting and Understanding Mobile Proxy Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#your-phone-is-my-proxy-detecting-and-understanding-mobile-proxy-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#your-phone-is-my-proxy-detecting-and-understanding-mobile-proxy-networks)**
### 作者
* Xianghang Mi, University at Buffalo
* Siyuan Tang, Indiana University Bloomington
* Zhengyi Li, Indiana University Bloomington
* Xiaojing Liao, Indiana University Bloomington
* Feng Qian, University of Minnesota Twin Cities
* XiaoFeng Wang, Indiana University Bloomington
### 摘要
> 住宅代理最近成为一项受欢迎的服务，代理提供商通过他们控制的数百万代理节点中转客户的网络流量。我们发现，许多这些代理节点是移动设备，在代理网络中的角色可能具有重要的安全影响，因为移动设备往往对隐私和资源非常敏感。然而，迄今为止，人们对其参与程度几乎没有做出努力，更不用说这些设备如何被代理网络招募以及它们可能带来的安全和隐私风险了。
> 
> 在本论文中，我们报告了对移动代理生态系统的首次测量研究。我们的研究得以实现，得益于一种新颖的测量基础设施，使我们能够辨别代理提供商，发现代理软件开发工具包（SDK），检测基于这些SDK构建的Android代理应用程序，收集代理IP地址，并了解代理流量。通过这个基础设施收集到的信息，使我们对这个生态系统有了新的理解，并进行了重要的安全发现。具体而言，我们发现有4家代理提供商将移动代理SDK提供给应用开发者作为竞争的应用程序变现渠道，每100万月活跃用户（MAU）的价格为5万美元。共检测到1,701个Android APK（属于963个Android应用程序）集成了这些代理SDK，其中大多数可在Google Play上找到，总安装量至少为3亿。此外，48.43%的这些APK被至少5个反病毒引擎标记为恶意，这可能解释了为什么86.60%的963个Android应用程序在2019年10月被从Google Play中移除。此外，尽管这些应用程序在流量中继时显示了用户同意对话框，但我们的用户研究表明，用户同意文本非常令人困惑。我们甚至发现了一种秘密进行流量中继而不显示任何通知的代理SDK。我们还捕获了625,000个移动代理IP地址，以及在代理流量中观察到的一些可疑活动，如广告欺诈。我们已向受影响的方面报告了我们的发现，并提供了建议，并提出了检测代理应用程序和代理流量的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/your-phone-is-my-proxy-detecting-and-understanding-mobile-proxy-networks/](https://www.ndss-symposium.org/ndss-paper/your-phone-is-my-proxy-detecting-and-understanding-mobile-proxy-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-2_24008_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-2_24008_paper.pdf)
## Understanding Worldwide Private Information Collection on Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-worldwide-private-information-collection-on-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-worldwide-private-information-collection-on-android)**
### 作者
* Yun Shen, NortonLifeLock Research Group
* Pierre-Antoine Vervier, NortonLifeLock Research Group
* Gianluca Stringhini, Boston University
### 摘要
> 手机使得大量个人信息的收集成为可能，包括唯一标识符（如电子邮件地址）、用户位置和短信内容。这些信息可以被应用程序收集并发送给第三方，用于各种目的。本文是迄今对安卓手机上私人信息收集（PIC）进行的最大规模研究。我们利用从一款热门移动安全产品的用户收集到的匿名化数据集，分析了2018年至2019年之间21个月内由1730万用户安装的210万个独特应用程序生成的敏感信息流量。我们发现，87.2%的设备向至少五个不同的域名发送私人信息，并且在不同地区活动的各方（例如亚洲与欧洲）对不同类型的信息感兴趣。美国（占总数的62%）和中国（占总流量的7%）是收集私人信息最多的国家。我们的发现引发了有关数据监管的问题，并呼吁政策制定者进一步规范公司使用和共享私人信息的方式，并确保真正的问责机制。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-worldwide-private-information-collection-on-android/](https://www.ndss-symposium.org/ndss-paper/understanding-worldwide-private-information-collection-on-android/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-3_24076_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-3_24076_paper.pdf)
## On the Insecurity of SMS One-Time Password Messages against Local Attackers in Modern Mobile Devices.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#on-the-insecurity-of-sms-one-time-password-messages-against-local-attackers-in-modern-mobile-devices) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#on-the-insecurity-of-sms-one-time-password-messages-against-local-attackers-in-modern-mobile-devices)**
### 作者
* Zeyu Lei, Purdue University
* Yuhong Nan, Purdue University
* Yanick Fratantonio, Eurecom & Cisco Talos
* Antonio Bianchi, Purdue University
### 摘要
> 短信验证码（One-Time Passwords，简称 OTP）是移动应用中广泛使用的一种身份验证机制。事实上，许多热门应用使用通过短信收到的 OTP 作为唯一的身份验证因素，完全替代基于密码的身份验证方案。尽管短信 OTP 身份验证机制大大方便了终端用户，但也带来了重大的安全隐患。本文研究了基于短信 OTP 的移动应用的身份验证方案，并着重系统研究了“本地攻击”所带来的威胁，即攻击者在受害者设备上控制一个非特权第三方应用的情景。
> 
> 本研究采用了逆向工程、形式验证、用户研究和大规模自动分析相结合的方法进行。我们的工作不仅发现了第三方应用中的漏洞，还揭示了移动操作系统本身的核心 API 中存在的设计和实现缺陷。例如，我们发现两个官方的 Android API 在设计上存在漏洞，即使按照其文档使用，也不可避免地导致了不安全的身份验证方案的实施。此外，我们还发现其他 API 可能被应用程序开发者不安全地使用。
> 
> 我们的大规模研究发现了36个应用，共享数亿次安装量，这些应用滥用了这些 API，允许恶意的本地攻击者完全劫持其帐户。这些易受攻击的应用包括 Telegram 和 KakaoTalk，它们是全球最受欢迎的通讯应用之一。最后，我们提出了一种新的、更安全的短信身份验证机制，并用形式验证证明了其安全性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-the-insecurity-of-sms-one-time-password-messages-against-local-attackers-in-modern-mobile-devices/](https://www.ndss-symposium.org/ndss-paper/on-the-insecurity-of-sms-one-time-password-messages-against-local-attackers-in-modern-mobile-devices/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-4_24212_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-4_24212_paper.pdf)
## Preventing and Detecting State Inference Attacks on Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#preventing-and-detecting-state-inference-attacks-on-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#preventing-and-detecting-state-inference-attacks-on-android)**
### 作者
* Andrea Possemato, IDEMIA and EURECOM
* Dario Nisi, EURECOM
* Yanick Fratantonio, EURECOM and Cisco Talos
### 摘要
> 在Android生态系统中，一个相关的威胁是网络钓鱼攻击。网络钓鱼攻击对移动平台尤为棘手，因为它们无法为用户提供足够的信息，以可靠地区分合法应用程序和冒充合法应用程序用户界面的恶意应用程序。决定网络钓鱼攻击成功率的一个关键因素是正确的定时：如果恶意冒充界面出现在受害者期望与目标应用程序交互的时间，用户更容易提供敏感数据（如密码）。在Android上，恶意软件通过进行所谓的状态推断攻击来确定合适的定时，例如可以被用来推断用户何时启动目标应用程序并期望与之交互的精确时刻。尽管Android应用程序沙盒的设计是为了防止这些攻击，但仍有可能通过滥用泄漏此类敏感信息的易受攻击的API来实现：通常的情况是恶意应用程序“轮询”这些易受攻击的API，推断用户何时将使用目标应用程序，并在正确的时间将冒充的界面显示在屏幕顶部。这类问题在最新版本的Android中已经被修复。
> 
> 本论文提出了与防止和检测状态推断攻击相关的两个主要研究贡献。首先，我们讨论了一个新的漏洞检测系统的设计和实现，该系统旨在特别识别可用于进行状态推断攻击的新漏洞。我们的方法依赖于静态和动态分析技术，它在最新版本的Android中发现了18个以前未知的漏洞（导致6个CVE）。
> 
> 其次，我们提出了一种新的设备上分析系统，能够检测对易受攻击的资源和API的利用尝试。该系统基于一个关键假设，即仅仅的“轮询行为”可以作为潜在攻击的强烈信号，不依赖于其他因素（以前的研究依赖于其他因素）。我们对一组良性和恶意应用程序进行了实证分析，发现这个假设确实是正确的。这种方法的优势在于即使在事先不知道被滥用的API易受攻击的情况下也能够检测到利用尝试。我们将该系统作为Android框架的修改实现，并展示它所带来的开销是可忽略的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/preventing-and-detecting-state-inference-attacks-on-android/](https://www.ndss-symposium.org/ndss-paper/preventing-and-detecting-state-inference-attacks-on-android/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-5_24479_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3B-5_24479_paper.pdf)
## As Strong As Its Weakest Link: How to Break Blockchain DApps at RPC Service.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#as-strong-as-its-weakest-link-how-to-break-blockchain-dapps-at-rpc-service) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#as-strong-as-its-weakest-link-how-to-break-blockchain-dapps-at-rpc-service)**
### 作者
* Kai Li, Syracuse University
* Jiaqi Chen, Syracuse University
* Xianghong Liu, Syracuse University
* Yuzhe Tang, Syracuse University
* XiaoFeng Wang, Indiana University Bloomington
* Xiapu Luo, Hong Kong Polytechnic University
### 摘要
> 现代区块链已从加密货币底层发展成为支持更多去中心化应用程序（DApps）的信任分散平台。区块链远程过程调用（RPC）服务作为一个中介，连接DApps与区块链网络。在这项工作中，我们确定了存在于区块链RPC中的自由合约执行能力，作为一种拒绝服务（DoS）的漏洞，并提出了DoERS攻击，即一种对以太坊RPC服务的拒绝攻击，使攻击者不需要支付以太币的成本。
> 
> 为了了解DoERS在实际中的可利用性，我们对控制大多数DApp客户端与以太坊主网连接的9个真实RPC服务进行了系统计量研究。特别是，我们提出了一种基于孤立交易的新型测量技术，以发现黑盒RPC服务中以前未知的行为，包括负载均衡和燃气限制。我们还提出了进一步的DoERS策略，以规避这些行为所预期的保护措施。
> 
> 我们评估了DoERS攻击对已部署的RPC服务的有效性，并最小程度地中断了服务。结果显示，所有经过测试的9个服务（截至2020年4月）都容易受到DoERS攻击，导致服务延迟增加2.1倍至50倍。其中一些攻击只需要一个请求。此外，在受到非常严格的0.65个区块燃气限制保护的本地以太坊节点上，每秒发送150个DoERS请求可以将受害节点的区块同步速度减慢91%。
> 
> 我们提出了对抗DoERS攻击的缓解技术，而不会降低服务的可用性，包括不可预测的负载均衡、性能异常检测等。这些技术可以透明地集成到RPC服务中，对其客户端进行操作。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/as-strong-as-its-weakest-link-how-to-break-blockchain-dapps-at-rpc-service/](https://www.ndss-symposium.org/ndss-paper/as-strong-as-its-weakest-link-how-to-break-blockchain-dapps-at-rpc-service/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-1_23108_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-1_23108_paper.pdf)
## RandRunner: Distributed Randomness from Trapdoor VDFs with Strong Uniqueness.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#randrunner-distributed-randomness-from-trapdoor-vdfs-with-strong-uniqueness) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#randrunner-distributed-randomness-from-trapdoor-vdfs-with-strong-uniqueness)**
### 作者
* Philipp Schindler, SBA Research
* Aljosha Judmayer, SBA Research
* Markus Hittmeir, SBA Research
* Nicholas Stifter, SBA Research
### 摘要
> 在分布式计算中，共同生成随机性一直是一个长期存在的问题。它不仅在最先进的拜占庭容错（BFT）和区块链协议的设计中起着至关重要的作用，而且还在远远超出这个领域的一系列应用中都扮演着重要角色。我们提出了RandRunner，一个具有一套独特保证的随机信标协议，目标是一个现实系统模型。我们的设计避免了使用（BFT）共识协议及其伴随的高复杂性和通信开销的必要性。我们通过在RSA设置中引入对可验证延迟函数（VDF）的新扩展来实现这一目标，该扩展不需要可信的经销商或分布式密钥生成（DKG），并且仅依赖于广为研究的密码学假设。这种设计使RandRunner能够容忍对手或失败的领导者，同时在可能的异步期间保证协议的安全性和活性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/randrunner-distributed-randomness-from-trapdoor-vdfs-with-strong-uniqueness/](https://www.ndss-symposium.org/ndss-paper/randrunner-distributed-randomness-from-trapdoor-vdfs-with-strong-uniqueness/)
## LaKSA: A Probabilistic Proof-of-Stake Protocol.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#laksa-a-probabilistic-proof-of-stake-protocol) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#laksa-a-probabilistic-proof-of-stake-protocol)**
### 作者
* Daniel Reijsbergen, Singapore University of Technology and Design
* Pawel Szalachowski, Singapore University of Technology and Design
* Junming Ke, University of Tartu
* Zengpeng Li, Singapore University of Technology and Design
* Jianying Zhou, Singapore University of Technology and Design
### 摘要
> 我们介绍大规模已知委员会基于权益的一致性协议（LaKSA），这是一种基于链的权益证明协议，专门用于但不限于加密货币。LaKSA通过轻量级委员会投票来减少节点之间的交互，从而提供比竞争系统更简单、更强大和更可扩展的方案。它还减轻了以前系统的其他缺点，如高奖励差异和长确认时间。LaKSA可以通过设计支持大量节点，并提供概率安全保证，客户端可以通过计算基于其区块链视图的事务被回滚的概率来进行提交决策。我们对LaKSA进行了彻底的分析，并对其实施和评估进行了报告。此外，我们的新的安全证明技术可以更广泛地应用于其他权益证明协议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/laksa-a-probabilistic-proof-of-stake-protocol/](https://www.ndss-symposium.org/ndss-paper/laksa-a-probabilistic-proof-of-stake-protocol/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-3_24164_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-3_24164_paper.pdf)
## SquirRL: Automating Attack Analysis on Blockchain Incentive Mechanisms with Deep Reinforcement Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#squirrl-automating-attack-analysis-on-blockchain-incentive-mechanisms-with-deep-reinforcement-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#squirrl-automating-attack-analysis-on-blockchain-incentive-mechanisms-with-deep-reinforcement-learning)**
### 作者
* Charlie Hou, CMU
### 摘要
> 激励机制对于无许可区块链的功能至关重要：它们激励参与者运行和保护底层的共识协议。然而，设计符合激励兼容性的激励机制极具挑战性。因此，大多数公共区块链今天使用的激励机制的安全性质鲜为人知且未经充分测试。在这项研究中，我们提出了SquirRL，这是一个使用深度强化学习分析区块链激励机制攻击的框架。我们通过首先重新发现已知攻击：（1）比特币（Bitcoin）中的最佳自私挖矿攻击[52]和（2）区块隐藏攻击中的Nash均衡[16]，展示了SquirRL的强大功能。我们还使用SquirRL获得了一些新的经验结果。首先，我们发现了一个令人意想不到的缺陷，即在应用于具有不完全信息的多智能体马尔可夫博弈时，被广泛使用的突击对手模型。其次，我们证明了在多智能体自私挖矿环境中，[52]中识别的最佳自私挖矿策略实际上不是Nash均衡。事实上，我们的结果表明（但未证明），当超过两个竞争智能体从事自私挖矿时，不会出现有利可图的Nash均衡。这与野生环境中观察到的自私挖矿的缺乏一致。第三，我们发现了一种针对以太坊最终化机制Caspar the Friendly Finality Gadget (FFG)简化版本的新型攻击，使战略智能体可以将奖励增加多达30%。值得注意的是，[10]表明诚实投票是Casper FFG的Nash均衡；我们的攻击表明，在Casper FFG与自私挖矿相结合时，情况就不再如此。总之，我们的实验表明SquirRL作为一个研究迄今为止尚未理论和经验理解的攻击环境的框架，具有灵活性和可行性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/squirrl-automating-attack-analysis-on-blockchain-incentive-mechanisms-with-deep-reinforcement-learning/](https://www.ndss-symposium.org/ndss-paper/squirrl-automating-attack-analysis-on-blockchain-incentive-mechanisms-with-deep-reinforcement-learning/)
## Bitcontracts: Supporting Smart Contracts in Legacy Blockchains.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#bitcontracts-supporting-smart-contracts-in-legacy-blockchains) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#bitcontracts-supporting-smart-contracts-in-legacy-blockchains)**
### 作者
* Karl Wüst, ETH Zurich
* Loris Diana, ETH Zurich
* Kari Kostiainen, ETH Zurich
* Ghassan Karame, NEC Labs
* Sinisa Matetic, ETH Zurich
* Srdjan Capkun, ETH Zurich
### 摘要
> 在这篇论文中，我们提出了一种名为Bitcontracts的新型解决方案，它能够在未经修改的传统加密货币（如比特币）上安全高效地执行智能合约，即使这些加密货币本身不原生地支持合约。我们解决方案的出发点是基于链外执行模型，即合约的发行者指定一组服务提供者来执行合约的代码。只有当多数服务提供者报告相同的执行结果时，我们才接受合约的执行结果，并且用户可以自由选择信任和使用哪些这样的合约。本文的主要技术贡献是如何在不修改底层区块链的情况下，安全高效地实现这种信任模型。
> 
> 我们还识别出了一组通用属性，一个区块链系统必须支持这些属性，以便能够安全地添加具有表达能力的智能合约，并根据这些标准分析了目前流行的现有区块链。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/bitcontracts-supporting-smart-contracts-in-legacy-blockchains/](https://www.ndss-symposium.org/ndss-paper/bitcontracts-supporting-smart-contracts-in-legacy-blockchains/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-5_24294_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_3C-5_24294_paper.pdf)
## QPEP: An Actionable Approach to Secure and Performant Broadband From Geostationary Orbit.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#qpep-an-actionable-approach-to-secure-and-performant-broadband-from-geostationary-orbit) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#qpep-an-actionable-approach-to-secure-and-performant-broadband-from-geostationary-orbit)**
### 作者
* James Pavur, Oxford University
* Martin Strohmeier, armasuisse
* Vincent Lenders, armasuisse
* Ivan Martinovic, Oxford University
### 摘要
> 卫星宽带服务是关键基础设施，为全球最偏远地区提供连接。然而，由于性能问题，许多地球同步卫星宽带服务默认情况下未经加密，容易受到远程监听攻击。结果是，高度敏感的互联网流量常常以明文形式广播在广阔覆盖区域上。
> 
> 本文深入探讨了这种不安全的网络设计的根本原因，提出了物理特性对TCP性能的影响以及性能增强代理（PEPs）的广泛使用导致这些网络中存在安全/性能权衡的观点。对以往的缓解尝试进行回顾发现，由于从商业激励不匹配到未经验证的“黑盒”加密产品的普遍存在，实际采用有限。
> 
> 为了解决这些缺点，我们设计并实施了一个完全开源且默认加密的PEP/VPN混合解决方案，称为QPEP。基于QUIC标准构建的QPEP使个人能够在不涉及ISP的情况下加密卫星流量。此外，我们还提出了一个开放且可复制的基于Docker的测试平台，用于通过模拟对卫星PEP（如QPEP）进行基准测试。这些实验显示，与传统的VPN加密相比，QPEP能够使卫星用户的TCP流量加载页面的时间（PLT）缩短高达65%。即使与未加密的PEPs相比，QPEP提供了高达45%的更快PLTs，并增加了无线安全性。我们还简要评估了QUIC的其他微调，以进一步优化QPEP的性能。综合这些评估结果表明，QPEP代表了一种有希望的新技术，可在不改变现有网络实现的情况下为高延迟卫星宽带带来安全性和性能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/qpep-an-actionable-approach-to-secure-and-performant-broadband-from-geostationary-orbit/](https://www.ndss-symposium.org/ndss-paper/qpep-an-actionable-approach-to-secure-and-performant-broadband-from-geostationary-orbit/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-1_24074_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-1_24074_paper.pdf)
## A Formal Analysis of the FIDO UAF Protocol.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#a-formal-analysis-of-the-fido-uaf-protocol) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#a-formal-analysis-of-the-fido-uaf-protocol)**
### 作者
* Haonan Feng, Beijing University of Posts and Telecommunications
* Hui Li, Beijing University of Posts and Telecommunications
* Xuesong Pan, Beijing University of Posts and Telecommunications
* Ziming Zhao, University at Buffalo
### 摘要
> FIDO协议套件旨在允许用户使用本地和可信的验证器登录远程服务。借助FIDO，依赖的服务无需存储用户选择的密钥或其哈希，从而消除了电子商务领域的主要攻击面。鉴于其日益受到的欢迎，有必要正式分析FIDO的安全承诺是否有效。在本文中，我们通过对FIDO UAF协议的安全假设和目标进行形式化，并在ProVerif中对协议在不同场景下进行建模，提出了全面的形式验证。我们的分析确定了FIDO UAF每个安全目标所需的最小安全假设。我们还以自动化方式确认了以前手动发现的漏洞，并公开了几个新攻击。在形式验证结果的指导下，我们还发现了两个流行的安卓FIDO应用程序的实际攻击，并将其负责地向供应商披露。此外，我们提供了修复协议中已识别的问题和弱点的几个具体建议。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-formal-analysis-of-the-fido-uaf-protocol/](https://www.ndss-symposium.org/ndss-paper/a-formal-analysis-of-the-fido-uaf-protocol/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-2_24363_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-2_24363_paper.pdf)
## PHOENIX: Device-Centric Cellular Network Protocol Monitoring using Runtime Verification.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#phoenix-device-centric-cellular-network-protocol-monitoring-using-runtime-verification) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#phoenix-device-centric-cellular-network-protocol-monitoring-using-runtime-verification)**
### 作者
* Mitziu Echeverria, The University of Iowa
* Zeeshan Ahmed, The University of Iowa
* Bincheng Wang, The University of Iowa
* M. Fareed Arif, The University of Iowa
* Syed Rafiul Hussain, Pennsylvania State University
* Omar Chowdhury, The University of Iowa
### 摘要
> 当前的蜂窝生态系统中，最终用户设备在不同的世代和协议层面上容易出现许多不同的漏洞。事后修复这些漏洞可能会非常昂贵、具有挑战性，或者根本不可行。因此，处理这种多样性漏洞集合的实用方法是在设备端运行时识别攻击尝试，并采取缓解和纠正措施来阻止它们。为了实现这个目标，在本文中我们提出了一种通用且可扩展的方法，称为PHOENIX，用于从设备的视角识别n天蜂窝网络控制平面漏洞及网络运营商的危险做法。PHOENIX通过轻量级运行时验证技术，监控设备端蜂窝网络流量，进行基于签名的意外行为检测。在PHOENIX中，签名可以由蜂窝网络安全专家手动创建，也可以使用PHOENIX的可选组件自动合成，从而将签名合成问题简化为从信息源学习语言。根据PHOENIX在检测到不良行为时可用的纠正措施，可以实现不同的PHOENIX实例：当部署在基带处理器内部时，可以实现完整的防御；当作为移动应用程序部署时，可以实现用户警告系统；当用于鉴别野外攻击时，可以实现探针功能。我们的评估中，PHOENIX的一个实例能够使用高速数据包处理速度（约68000个数据包/秒）识别出所考虑的15个代表性n天漏洞和不安全做法，同时只引发适度的能源开销（约4mW）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/phoenix-device-centric-cellular-network-protocol-monitoring-using-runtime-verification/](https://www.ndss-symposium.org/ndss-paper/phoenix-device-centric-cellular-network-protocol-monitoring-using-runtime-verification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-3_24390_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-3_24390_paper.pdf)
## The Bluetooth CYBORG: Analysis of the Full Human-Machine Passkey Entry AKE Protocol.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#the-bluetooth-cyborg-analysis-of-the-full-human-machine-passkey-entry-ake-protocol) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#the-bluetooth-cyborg-analysis-of-the-full-human-machine-passkey-entry-ake-protocol)**
### 作者
* Michael Troncoso, Naval Postgraduate School
* Britta Hale, Naval Postgraduate School
### 摘要
> 在本文中，我们将以计算方法分析Passkey Entry作为一个加密身份验证密钥交换（AKE）的整体——包括通常被忽略的用户-协议交互，因为其属于带外通信。为了实现这一目标，我们建模了用户到设备通道以及典型的设备到设备通道，以及这两种情况下的对抗控制场景。特别地，我们通过所谓的CYBORG模型分别捕捉了发起设备和响应设备上的对抗性控制，以及对用户输入机制的对抗性控制。CYBORG模型使得我们能够在已发表的针对依赖恶意软件和设备显示的用户协议（如蓝牙）的攻击的背景下进行逼真的实际安全性分析。 在这种情况下，我们展示了在我们的模型中，所有版本的Passkey Entry都无法提供安全性。最后，我们展示了如何对协议进行轻微修改，使其能够为所有当前的Passkey生成变体以及我们所提出的一种新的二重Passkey生成模式（称为Dual Passkey Entry）提供更强的安全性保证。这些概念验证修改指向了用户协议改进设计方法的思路。最后，本研究指出了可以在Bluetooth Passkey Entry中利用的基于妥协类型的漏洞类别。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-bluetooth-cyborg-analysis-of-the-full-human-machine-passkey-entry-ake-protocol/](https://www.ndss-symposium.org/ndss-paper/the-bluetooth-cyborg-analysis-of-the-full-human-machine-passkey-entry-ake-protocol/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-4_24401_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-4_24401_paper.pdf)
## NetPlier: Probabilistic Network Protocol Reverse Engineering from Message Traces.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#netplier-probabilistic-network-protocol-reverse-engineering-from-message-traces) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#netplier-probabilistic-network-protocol-reverse-engineering-from-message-traces)**
### 作者
* Yapeng Ye, Purdue University
* Zhuo Zhang, Purdue University
* Fei Wang, Purdue University
* Xiangyu Zhang, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 网络协议逆向工程是一个具有许多安全应用的重要挑战。一种常用的方法利用网络消息跟踪。这些方法依赖于成对地序列对齐和/或标记化。它们存在诸如处理大量消息和处理固有不确定性等各种限制。在本文中，我们提出了一种基于网络跟踪的协议逆向工程的新颖概率方法。它首先利用多序列对齐来对齐所有消息，然后将问题简化为从对齐字段集合中识别关键字字段。关键字字段确定了消息的类型。识别过程是基于概率的，使用随机变量来指示每个字段（作为真实关键字的可能性）。在随机变量和消息的观测之间构建了联合分布。然后进行概率推断，确定最可能的关键字字段，从而使得消息可以根据其真实类型正确聚类，并实现消息格式和状态机的恢复。我们对10种协议进行的评估表明，我们的技术在性能上远远超过了最先进的技术，我们的案例研究显示了我们的技术在物联网协议逆向工程和恶意软件分析方面的独特优势。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/netplier-probabilistic-network-protocol-reverse-engineering-from-message-traces/](https://www.ndss-symposium.org/ndss-paper/netplier-probabilistic-network-protocol-reverse-engineering-from-message-traces/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-5_24531_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4A-5_24531_paper.pdf)
## Screen Gleaning: A Screen Reading TEMPEST Attack on Mobile Devices Exploiting an Electromagnetic Side Channel.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#screen-gleaning-a-screen-reading-tempest-attack-on-mobile-devices-exploiting-an-electromagnetic-side-channel) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#screen-gleaning-a-screen-reading-tempest-attack-on-mobile-devices-exploiting-an-electromagnetic-side-channel)**
### 作者
* Zhuoran Liu, Radboud university
* Niels Samwel, Radboud University
* Léo Weissbart, Radboud University
* Zhengyu Zhao, Radboud University
* Dirk Lauret, Radboud University
* Lejla Batina, Radboud University
* Martha Larson, Radboud University
### 摘要
> 我们引入一种名为“屏幕窥视”的TEMPEST攻击，通过无视觉的线路，读取移动设备的屏幕，揭示手机屏幕上显示的敏感信息。屏幕窥视攻击利用天线和软件定义无线电（SDR）接收设备发送到屏幕上显示的电磁信号，例如具有安全代码的消息。这种特殊的设备可以将信号重建为灰度图像，我们称之为“emage”。在这里，我们展示了它可以用来读取安全代码。屏幕窥视攻击具有挑战性，因为通常人类观察者无法直接解释emage。我们证明了这个挑战可以通过机器学习来解决，具体来说是通过深度学习分类器。随着SDR和深度学习的快速发展，屏幕窥视将变得越来越严重。在本文中，我们演示了安全代码攻击，并提出了一个测试平台，提供了一个标准设置，在其中可以使用不同的攻击模型来测试屏幕窥视。最后，我们分析了屏幕窥视攻击模型的尺寸，并讨论了潜在的应对措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/screen-gleaning-a-screen-reading-tempest-attack-on-mobile-devices-exploiting-an-electromagnetic-side-channel/](https://www.ndss-symposium.org/ndss-paper/screen-gleaning-a-screen-reading-tempest-attack-on-mobile-devices-exploiting-an-electromagnetic-side-channel/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-2_23021_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-2_23021_paper.pdf)
## Rosita: Towards Automatic Elimination of Power-Analysis Leakage in Ciphers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#rosita-towards-automatic-elimination-of-power-analysis-leakage-in-ciphers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#rosita-towards-automatic-elimination-of-power-analysis-leakage-in-ciphers)**
### 作者
* Madura A. Shelton, University of Adelaide
* Niels Samwel, Radboud University
* Lejla Batina, Radboud University
* Francesco Regazzoni, University of Amsterdam and ALaRI – USI
* Markus Wagner, University of Adelaide
* Yuval Yarom, University of Adelaide and Data61
### 摘要
> 自从二十多年前引入，侧信道攻击一直是一个严重的安全威胁。虽然许多密码的实现采用遮蔽技术来防止此类攻击，但由于硬件中的意外交互，它们经常泄漏秘密信息。我们提出了一个代码重写引擎Rosita，它使用一个泄漏仿真器，我们修改该仿真器以正确仿真目标系统的微架构。我们使用Rosita自动保护了AES、ChaCha和Xoodoo的遮蔽实现。对于AES和Xoodoo，我们证明了在1000000个跟踪中观察不到泄漏，并且性能仅降低不到21%。对于ChaCha，泄漏显著更多，Rosita消除了超过99%的泄漏，性能降低了64%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rosita-towards-automatic-elimination-of-power-analysis-leakage-in-ciphers/](https://www.ndss-symposium.org/ndss-paper/rosita-towards-automatic-elimination-of-power-analysis-leakage-in-ciphers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-3_23137_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-3_23137_paper.pdf)
## Hunting the Haunter - Efficient Relational Symbolic Execution for Spectre with Haunted RelSE.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hunting-the-haunter-efficient-relational-symbolic-execution-for-spectre-with-haunted-relse) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hunting-the-haunter-efficient-relational-symbolic-execution-for-spectre-with-haunted-relse)**
### 作者
* Lesly-Ann Daniel, CEA
### 摘要
> 幽灵(Spectre)是一种微架构攻击，于2018年1月公之于众。它们利用推测来窃取机密信息。对于密码库而言，检测幽灵攻击尤为重要，目前已提出了软件层面的防御方法。然而，防御方法和幽灵检测都存在挑战，一方面是推测路径引起的勘探空间的扩大，另一方面是不同编译阶段引入新的幽灵漏洞。我们提出了一种优化方案，名为Haunted RelSE，可以在二进制级别上扩展幽灵漏洞的检测。我们证明了该优化方案在语义上与目前工具中更为朴素的显式推测勘探方法相一致。我们将Haunted RelSE实现在一种符号分析工具中，并在针对Spectre-PHT的著名测试集和我们提出的针对Spectre-STL的新测试集上进行了广泛测试。我们的技术能够发现更多的违规情况，并比先进技术和工具更具扩展性，可以分析现实世界中的密码库并找到新的违规情况。通过我们的工具，我们发现了用于Spectre-PHT的标准防御方法，即索引掩码，以及编译位置无关可执行文件的众所周知的gcc选项引入了Spectre-STL违规情况。我们提出并验证了一个校正方法以避免该问题。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hunting-the-haunter-efficient-relational-symbolic-execution-for-spectre-with-haunted-relse/](https://www.ndss-symposium.org/ndss-paper/hunting-the-haunter-efficient-relational-symbolic-execution-for-spectre-with-haunted-relse/)
## SpecTaint: Speculative Taint Analysis for Discovering Spectre Gadgets.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#spectaint-speculative-taint-analysis-for-discovering-spectre-gadgets) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#spectaint-speculative-taint-analysis-for-discovering-spectre-gadgets)**
### 作者
* Zhenxiao Qi, UC Riverside
* Qian Feng, Baidu USA
* Yueqiang Cheng, NIO Security Research
* Mengjia Yan, MIT
* Peng Li, ByteDance
* Heng Yin, UC Riverside
* Tao Wei, Ant Group
### 摘要
> 软件补丁是针对Spectre类型攻击的一种重要缓解方法。它利用序列化指令来禁用程序中潜在的Spectre漏洞的推测执行。然而，目前没有有效的解决方案来检测Spectre类型攻击的漏洞。在本文中，我们提出了一种新的Spectre漏洞检测技术，通过在推测执行路径上启用动态污点分析。为此，我们在系统级别（在CPU模拟器内部）模拟和探索推测执行。我们实现了一个名为SpecTaint的原型来证明我们提出的方法的有效性。我们在Spectre样本数据集上评估了SpecTaint，并将其与现有的最先进的Spectre漏洞检测方法在实际应用程序上进行了比较。我们的实验结果表明，SpecTaint在检测精度和召回率方面相对于现有方法有较大的优势，并且它还可以在实际应用程序（如Caffe和Brotli）中检测到新的Spectre漏洞。此外，与其他方法相比，在修补检测到的漏洞后，SpecTaint显着降低了性能开销。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/spectaint-speculative-taint-analysis-for-discovering-spectre-gadgets/](https://www.ndss-symposium.org/ndss-paper/spectaint-speculative-taint-analysis-for-discovering-spectre-gadgets/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-5_24466_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4B-5_24466_paper.pdf)
## Understanding and Detecting International Revenue Share Fraud.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-and-detecting-international-revenue-share-fraud) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#understanding-and-detecting-international-revenue-share-fraud)**
### 作者
* Merve Sahin, SAP Security Research
* Aurélien Francillon, EURECOM
### 摘要
> 高价电话号码经常被恶意方滥用（例如，通过各种电话诈骗、移动恶意软件等方式）以获取经济利益。这种利益来自于“分成”机制，使高价电话号码的所有者能够收到每分钟呼叫流量所产生的一部分呼叫收入。本研究着重研究国际分成欺诈（IRSF），该欺诈滥用常规国际电话号码作为所谓的国际高价电话号码（IPRN）。IRSF通常涉及多个参与方（例如，与高价电话服务提供商合作的欺诈电信运营商），他们收集并共享呼叫收入，并通常与其他欺诈计划结合起来，以实现呼叫流量无需付款。尽管这种欺诈计划已存在多年，但据报道，它仍然是最常见的欺诈计划之一，每年导致数十亿美元的损失。在本文中，我们从多个角度探索IRSF生态系统，包括：（i）一个电话诱饵系统，观察针对未使用电话号码范围（即电话号码灰色空间）的IRSF尝试，（ii）来自多个在线IPRN服务提供商收集的超过300万个测试IPRN和超过206,000个测试呼叫日志的数据集，最后，（iii）来自欧洲一家小型运营商的真实呼叫数据集，包括689,000条呼叫记录，我们分析该数据集以找出IRSF案例。通过利用我们在（ii）中的观察结果，我们提出了几个可用于IRSF检测的机器学习特征。我们对（iii）中的数据集进行验证，实现在检测欺诈呼叫方面的98%准确率和0.28%误报率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-and-detecting-international-revenue-share-fraud/](https://www.ndss-symposium.org/ndss-paper/understanding-and-detecting-international-revenue-share-fraud/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-2_24051_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-2_24051_paper.pdf)
## Differential Training: A Generic Framework to Reduce Label Noises for Android Malware Detection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#differential-training-a-generic-framework-to-reduce-label-noises-for-android-malware-detection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#differential-training-a-generic-framework-to-reduce-label-noises-for-android-malware-detection)**
### 作者
* Jiayun Xu, Singapore Management University
* Yingjiu Li, University of Oregon
* Robert H. Deng, Singapore Management University
### 摘要
> 机器学习基于恶意软件检测中的一个常见问题是训练数据可能包含噪声标签，并且很难在大规模上使训练数据免噪。为了解决这个问题，我们提出了一个通用框架，用于降低训练数据的噪声水平，以进行任何基于机器学习的安卓恶意软件检测的训练。我们的框架利用给定噪声训练数据集训练两个相同的深度学习分类模型的所有中间状态，并为每个输入样本生成一个噪声检测特征向量。然后，我们的框架对所有噪声检测特征向量应用一组异常检测算法，以在将其提供给任何基于机器学习的安卓恶意软件检测方法之前降低给定训练数据的噪声水平。在我们对三种不同安卓恶意软件检测方法的实验中，我们的框架可以在不同噪声比率的不同训练数据集中检测到大量错误标签，并提高安卓恶意软件检测方法的性能。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/differential-training-a-generic-framework-to-reduce-label-noises-for-android-malware-detection/](https://www.ndss-symposium.org/ndss-paper/differential-training-a-generic-framework-to-reduce-label-noises-for-android-malware-detection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-3_24126_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-3_24126_paper.pdf)
## MINOS: A Lightweight Real-Time Cryptojacking Detection System.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#minos-a-lightweight-real-time-cryptojacking-detection-system) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#minos-a-lightweight-real-time-cryptojacking-detection-system)**
### 作者
* Faraz Naseem, Florida International University
* Ahmet Aris, Florida International University
* Leonardo Babun, Florida International University
* Ege Tekiner, Florida International University
* A. Selcuk Uluagac, Florida International University
### 摘要
> 新兴的基于WebAssembly（Wasm）的加密货币挖矿恶意软件在未经用户同意或知情的情况下悄悄使用其计算资源。实际上，大多数受这种恶意软件感染的受害者都不知道他们的计算能力被非法使用，这是由于加密货币挖矿恶意软件作者采用了CPU降频和混淆等技术。存在一些基于动态分析的检测机制，旨在规避这些技术。然而，由于这些机制使用动态特征，收集这些特征以及实际检测恶意软件需要使加密货币挖矿恶意软件运行一定时间，实际上在该期间进行挖矿，从而引起了显著的开销。为了解决这些限制，在本文中，我们提出了MINOS，一种新颖的、极轻量级的加密货币挖矿检测系统，它使用深度学习技术在实时中准确检测到未经授权的基于Wasm的挖矿活动。MINOS使用基于图像的分类技术来区分良性网页和使用Wasm实现非法挖矿的网页。具体而言，分类器采用经过训练的卷积神经网络（CNN）模型，使用了包括当前恶意和良性Wasm二进制文件的综合数据集。MINOS以较低的TNR和FPR实现了异常的准确性。此外，我们对MINOS的广泛性能分析显示，所提出的检测技术可以在最新的野外加密货币挖矿恶意软件中即时检测到挖矿活动，准确率达到98.97%，平均耗时为25.9毫秒，占用CPU的最大比例为4%，占用RAM的比例为6.5%，证明MINOS具有高效、轻量、快速和计算成本低廉的特点。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/minos-a-lightweight-real-time-cryptojacking-detection-system/](https://www.ndss-symposium.org/ndss-paper/minos-a-lightweight-real-time-cryptojacking-detection-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-4_24444_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-4_24444_paper.pdf)
## Does Every Second Count? Time-based Evolution of Malware Behavior in Sandboxes.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#does-every-second-count-time-based-evolution-of-malware-behavior-in-sandboxes) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#does-every-second-count-time-based-evolution-of-malware-behavior-in-sandboxes)**
### 作者
* Alexander Küchler, Fraunhofer AISEC
* Alessandro Mantovani, EURECOM
* Yufei Han, NortonLifeLock Research Group
* Leyla Bilge, NortonLifeLock Research Group
* Davide Balzarotti, EURECOM
### 摘要
> 样本的执行时间是恶意软件分析沙箱的关键参数之一。如果将阈值设置得过高，将会妨碍可扩展性并降低每天可以分析的样本数量；如果设置得太低，样本可能没有足够的时间展示它们的恶意行为，从而减少所收集数据的数量和质量。因此，分析员需要找到一个“最佳选择”，只收集到对于正确分类每个样本所需的最小信息量。过多会浪费资源，过少会危及实验。
> 
> 尽管其重要性，目前还没有明确的指导方针来选择此参数，也没有能帮助企业评估一种选择相对于另一种选择的利弊的实验。为了填补这个空白，本文提供了关于执行时间对收集事件数量和质量影响的首次大规模研究。我们测量了系统调用和代码覆盖率的演变，以获得我们在沙箱中预期观察到的运行时行为的准确图景。最后，我们实现了一个基于机器学习的恶意软件检测方法，并将其应用于在不同时间窗口收集的数据，以报告不同时间点观察到的事件的相关性。
> 
> 我们的结果表明，大多数样本运行时间要么小于两分钟，要么大于十分钟。然而，在执行的前两分钟内观察到了大部分行为（以及98%的执行基本块），这也是导致我们机器学习分类器准确性较高的时间窗口。我们相信这些信息可以帮助未来的研究人员和工业沙箱更好地调整其分析系统。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/does-every-second-count-time-based-evolution-of-malware-behavior-in-sandboxes/](https://www.ndss-symposium.org/ndss-paper/does-every-second-count-time-based-evolution-of-malware-behavior-in-sandboxes/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-5_24475_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_4C-5_24475_paper.pdf)
## Hey Alexa, is this Skill Safe?: Taking a Closer Look at the Alexa Skill Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hey-alexa-is-this-skill-safe-taking-a-closer-look-at-the-alexa-skill-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hey-alexa-is-this-skill-safe-taking-a-closer-look-at-the-alexa-skill-ecosystem)**
### 作者
* Christopher Lentzsch, Ruhr-Universität Bochum
* Sheel Jayesh Shah, North Carolina State University
* Benjamin Andow, Google
* Martin Degeling, Ruhr-Universität Bochum
* Anupam Das, North Carolina State University
* William Enck, North Carolina State University
### 摘要
> 亚马逊基于语音的助手Alexa通过自然语言对话，使用户能够直接与各种网络服务进行互动。它为开发者提供了创建第三方应用程序（称为技能）在Alexa上运行的选项。虽然这些应用程序简化了用户与智能设备的互动，并增强了一些附加服务，但它们也引发了安全和隐私方面的担忧，因为它们是在个人设置中运行的。本文旨在对Alexa技能生态系统进行系统分析。我们进行了第一次大规模的对Alexa技能进行分析，其中涉及来自七个不同技能商店的90,194个独特技能。我们的分析揭示了当前技能审查过程存在的一些限制。我们展示了恶意用户不仅可以在任意开发者/公司名下发布技能，而且还可以在获得批准后更改后端代码，以诱使用户透露不需要的信息。接下来，我们对不同的技能霸占技术进行了形式化，评估了这些技术的有效性。我们发现，虽然某些方法比其他方法更受青睐，但在现实世界中没有实质性的技能霸占滥用。最后，我们研究了不同类别技能中隐私政策的普遍性，更重要的是研究了使用Alexa权限模型来访问敏感用户数据的技能的政策内容。我们发现约23.3%的此类技能未完全披露与请求权限相关的数据类型。我们通过提供一些建议来加强整体生态系统，从而增强终端用户的透明度，做出总结。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hey-alexa-is-this-skill-safe-taking-a-closer-look-at-the-alexa-skill-ecosystem/](https://www.ndss-symposium.org/ndss-paper/hey-alexa-is-this-skill-safe-taking-a-closer-look-at-the-alexa-skill-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-1_23111_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-1_23111_paper.pdf)
## IoTSafe: Enforcing Safety and Security Policy with Real IoT Physical Interaction Discovery.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#iotsafe-enforcing-safety-and-security-policy-with-real-iot-physical-interaction-discovery) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#iotsafe-enforcing-safety-and-security-policy-with-real-iot-physical-interaction-discovery)**
### 作者
* Wenbo Ding, Clemson University
* Hongxin Hu, University at Buffalo
* Long Cheng, Clemson University
### 摘要
> 物联网（IoT）平台为增加家庭自动化带来了显著便利。尤其是这些平台为管理多个物联网设备提供了许多新功能，以控制它们的物理环境。然而，这些功能也带来了新的安全挑战。例如，攻击者可以通过意外的物理交互操纵物联网设备发动攻击。不幸的是，目前几乎没有研究调查物联网设备之间的物理交互及其对物联网安全的影响。在本文中，我们提出了一种名为IoTSafe的新型动态安全策略执行系统，该系统可以考虑智能家居平台上的上下文特征来捕获和管理真实的物理交互。为了识别物联网设备的真实物理交互，我们提出了一种运行时物理交互发现方法，利用静态分析和动态测试技术来识别物联网设备之间的运行时物理交互。此外，IoTSafe生成多应用环境中的物理和非物理交互路径及其上下文数据。基于路径和上下文数据，IoTSafe构建了临时物理交互的物理模型，可以预测即将发生的风险情况，并相应地阻止不安全的设备状态。我们在SmartThings平台上实现了IoTSafe的原型。我们广泛的评估结果表明，IoTSafe在我们的实验环境中有效地识别出了130个潜在交互中的39个真实物理交互。IoTSafe还成功预测了与临时物理交互相关的风险情况，准确率接近96%，并防止了高风险条件的发生。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/iotsafe-enforcing-safety-and-security-policy-with-real-iot-physical-interaction-discovery/](https://www.ndss-symposium.org/ndss-paper/iotsafe-enforcing-safety-and-security-policy-with-real-iot-physical-interaction-discovery/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-2_24368_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-2_24368_paper.pdf)
## PFirewall: Semantics-Aware Customizable Data Flow Control for Smart Home Privacy Protection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pfirewall-semantics-aware-customizable-data-flow-control-for-smart-home-privacy-protection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pfirewall-semantics-aware-customizable-data-flow-control-for-smart-home-privacy-protection)**
### 作者
* Haotian Chi, Temple University
* Qiang Zeng, University of South Carolina
* Xiaojiang Du, Temple University
* Lannan Luo, University of South Carolina
### 摘要
> 物联网（IoT）平台使用户能够部署家庭自动化应用。与此同时，由于大量敏感设备数据流向物联网平台，隐私问题也随之出现。实际上，流向平台的大部分数据并不会触发自动化操作，而一旦设备与平台绑定后，居住者目前没有任何控制权。我们提出了一个可自定义的数据流控制系统PFirewall，以增强物联网平台用户的隐私保护。PFirewall会自动生成数据最小化策略，仅披露实现自动化所需的最少数据量。此外，PFirewall提供了接口，使居住者可以根据定义的用户指定策略来自定义个人隐私偏好。为了执行这些策略，PFirewall会在不修改平台、物联网设备或中央控制器的情况下，透明地介入和协调物联网设备与平台之间的通信。在四个真实测试平台上的评估结果显示，PFirewall能够在不影响家庭自动化的情况下，将流向物联网平台的数据减少97％，有效减轻用户活动推断/跟踪攻击和其他隐私风险。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pfirewall-semantics-aware-customizable-data-flow-control-for-smart-home-privacy-protection/](https://www.ndss-symposium.org/ndss-paper/pfirewall-semantics-aware-customizable-data-flow-control-for-smart-home-privacy-protection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-3_24464_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-3_24464_paper.pdf)
## EarArray: Defending against DolphinAttack via Acoustic Attenuation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#eararray-defending-against-dolphinattack-via-acoustic-attenuation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#eararray-defending-against-dolphinattack-via-acoustic-attenuation)**
### 作者
* Guoming Zhang, Zhejiang University
* Xiaoyu Ji, Zhejiang University
* Xinfeng Li, Zhejiang University
* Gang Qu, University of Maryland
* Wenyuan Xu, Zhejing University
### 摘要
> DolphinAttacks（即无声语音命令）在超声波上调制可听声音，静默地将恶意命令注入语音助手并操控受控系统（如门或智能音箱）。要消除DolphinAttacks是非常具有挑战性的，因为它需要修改麦克风硬件。在本文中，我们设计了EarArray，这是一种轻量级方法，不仅可以检测此类攻击，还可以识别攻击者的方向，而无需额外的硬件或硬件修改。本质上，无声语音命令是调制至本身衰减速度比可听声音更快的超声波上的。通过检查智能设备上内置的多个麦克风接收到的命令声音信号，EarArray能够估计衰减速度并从而检测攻击。我们提出了从声源到语音助手（如智能音箱）的可听声音和超声波传播模型，并阐明了底层原理及可行性。我们使用两个特设计的麦克风阵列实现了EarArray，并通过实验表明，EarArray可以以99％的准确率检测无声语音命令，并以97.89％的准确率识别攻击者的方向。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/eararray-defending-against-dolphinattack-via-acoustic-attenuation/](https://www.ndss-symposium.org/ndss-paper/eararray-defending-against-dolphinattack-via-acoustic-attenuation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-4_24551_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5A-4_24551_paper.pdf)
## POP and PUSH: Demystifying and Defending against (Mach) Port-oriented Programming.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pop-and-push-demystifying-and-defending-against-mach-port-oriented-programming) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pop-and-push-demystifying-and-defending-against-mach-port-oriented-programming)**
### 作者
* Min Zheng, Orion Security Lab
### 摘要
> 苹果设备（如iPhone、MacBook、iPad和Apple Watch）是攻击者的高价值目标。尽管这些设备使用不同的操作系统（如iOS、macOS、iPadOS、watchOS和tvOS），但它们都基于一个名为XNU的混合内核。现有的攻击表明，在XNU中存在的漏洞可能被利用以提升权限和越狱设备。为了减轻这些威胁，最新的系统中部署了多种安全机制。
> 
> 在本文中，我们首先对苹果部署的缓解措施进行系统评估，并证明大多数措施都可以通过破坏一种特殊类型的内核对象（即Mach端口对象）来绕过。我们将这种类型的攻击总结为（Mach）端口对象导向编程（POP）。因此，我们定义了多个攻击原语来发动攻击，并演示了在最近发布的系统（即iOS 13和macOS 10.15）上实现完全内存操作的逼真场景。为了防范POP，我们提出了Port Ultra-SHield（PUSH）系统，以减少未受保护的Mach端口对象的数量。具体而言，PUSH自动定位潜在的POP原语，并对相关的系统调用进行检测，以强制执行Mach端口内核对象的完整性。它不需要系统修改，并且只引入2%的运行时开销。PUSH框架已在一家领先公司的40,000多台macOS设备上部署。我们的系统检测到的18个公开利用和一个零日利用的评估证明了PUSH的有效性。我们相信，所提出的框架将有助于设计和实现更安全的XNU内核。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pop-and-push-demystifying-and-defending-against-mach-port-oriented-programming/](https://www.ndss-symposium.org/ndss-paper/pop-and-push-demystifying-and-defending-against-mach-port-oriented-programming/)
## Доверя'й, но проверя'й: SFI safety for native-compiled Wasm.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#sfi-safety-for-native-compiled-wasm) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#sfi-safety-for-native-compiled-wasm)**
### 作者
* Evan Johnson, University of California San Diego
* David Thien, University of California San Diego
* Yousef Alhessi, University of California San Diego
* Shravan Narayan, University Of California San Diego
* Fraser Brown, Stanford University
* Sorin Lerner, University of California San Diego
* Tyler McMullen, Fastly Labs
* Stefan Savage, University of California San Diego
* Deian Stefan, University of California San Diego
### 摘要
> WebAssembly（Wasm）是一种独立于平台的字节码，既能提供良好的性能，又能实现运行时隔离。为了实现隔离，编译器在将Wasm编译为本机机器码时插入了安全检查。尽管这种方法成本低廉，但也要求对编译器的正确性进行信任---即相信编译器已经在适当的位置插入了每个必要的检查，并且检查的形式正确。不幸的是，Wasm编译器中的微妙错误可能会破坏---并且已经破坏了---隔离保证。为了解决这个问题，我们提出了在编译后验证Wasm二进制文件的内存隔离性的方法。我们在VeriWasm中实现了这种方法，VeriWasm是一个用于在Wasm编译的本机x86-64二进制文件中进行静态离线验证的工具；我们证明了验证器的合理性，并发现它可以检测到没有伪阳性的错误。最后，我们描述了在Fastly部署VeriWasm的情况。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/%d0%b4%d0%be%d0%b2%d0%b5%d1%80%d1%8f%d0%b9-%d0%bd%d0%be-%d0%bf%d1%80%d0%be%d0%b2%d0%b5%d1%80%d1%8f%d0%b9-sfi-safety-for-native-compiled-wasm/](https://www.ndss-symposium.org/ndss-paper/%d0%b4%d0%be%d0%b2%d0%b5%d1%80%d1%8f%d0%b9-%d0%bd%d0%be-%d0%bf%d1%80%d0%be%d0%b2%d0%b5%d1%80%d1%8f%d0%b9-sfi-safety-for-native-compiled-wasm/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5B-3_24078_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5B-3_24078_paper.pdf)
## Detecting Kernel Memory Leaks in Specialized Modules with Ownership Reasoning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#detecting-kernel-memory-leaks-in-specialized-modules-with-ownership-reasoning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#detecting-kernel-memory-leaks-in-specialized-modules-with-ownership-reasoning)**
### 作者
* Navid Emamdoost, University of Minnesota
* Qiushi Wu, University of Minnesota
* Kangjie Lu, University of Minnesota
* Stephen McCamant, University of Minnesota
### 摘要
> 内核空间由硬件和所有进程共享，因此其内存使用较受限制，而且内存释放较困难，与用户空间内存相比，内核中的内存泄漏很容易导致严重的拒绝服务。这个问题在长时间运行的服务器中尤为严重。内核代码大量使用动态(堆)分配，并且内核中的许多代码模块提供了自己的内存管理抽象。另一方面，内核代码涉及高度复杂的数据流，因此很难确定一个对象在哪里应该被释放。鉴于操作系统内核的复杂性和关键性质，以及其高度专业化，现有方法在有效和彻底检测内核内存泄漏方面大多失败。
> 
> 在本文中，我们介绍了一种用于内核内存泄漏的静态检测系统K-MELD。K-MELD采用多种新技术，能够自动识别专门的分配/释放函数，并确定预期的内存释放位置。具体而言，我们首先开发了一种使用和结构感知的方法，有效识别专门的分配函数，并采用一种新的规则挖掘方法识别相应的释放函数。然后，我们开发了一种新的所有权推理机制，利用增强的逃逸分析和消费者函数分析推断预期的释放位置。通过将K-MELD应用于Linux内核，我们确认了其效果：它发现了218个新的错误，其中有41个CVE编号。在这218个错误中，有115个位于专门的模块中。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/detecting-kernel-memory-leaks-in-specialized-modules-with-ownership-reasoning/](https://www.ndss-symposium.org/ndss-paper/detecting-kernel-memory-leaks-in-specialized-modules-with-ownership-reasoning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5B-4_24416_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5B-4_24416_paper.pdf)
## Let's Stride Blindfolded in a Forest: Sublinear Multi-Client Decision Trees Evaluation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#lets-stride-blindfolded-in-a-forest-sublinear-multi-client-decision-trees-evaluation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#lets-stride-blindfolded-in-a-forest-sublinear-multi-client-decision-trees-evaluation)**
### 作者
* Jack P. K. Ma, The Chinese University of Hong Kong
* Raymond K. H. Tai, The Chinese University of Hong Kong
* Yongjun Zhao, Nanyang Technological University
* Sherman S.M. Chow, The Chinese University of Hong Kong
### 摘要
> 决策树是流行的机器学习分类模型，因其简单和高效而受欢迎。Tai等人（ESORICS '17）提出了一种基于加法同态加密的隐私保护决策树评估协议，没有引入虚拟节点来隐藏树结构，但每个决策节点都需要进行安全比较，导致线性复杂度。后续协议（DBSEC '18, PETS '19）实现了次线性（客户端）复杂度，但服务器端路径评估对于深度为$d$的稀疏树而言，仍需要在$2^d$个真实节点和虚拟节点之间进行遗忘传输以隐藏树结构。
> 
> 本文旨在兼顾两种最佳选择，因此是迄今为止最轻量级的协议。我们的完整树协议可以轻松扩展到稀疏树和可重复外包的设置：模型所有者（或客户端）可以将决策树（或属性）外包给两个不串通的服务器进行分类。外包扩展支持多客户联合评估，这是首次不使用多密钥完全同态加密实现的（TDSC '19）。我们还扩展了我们的协议，以实现对恶意对手的隐私保护。
> 
> 我们的实验比较了各种网络环境下我们的离线和在线通信成本以及在线计算时间，与Tueno等人（PETS '19）的次线性协议和Kiss等人（PETS '19）的$O(1)$回合线性协议进行比较，可以看作是Tai等人的编码电路变种。我们的协议在弱客户端的物联网场景和高维特征向量的大数据场景中被证明是理想的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/lets-stride-blindfolded-in-a-forest-sublinear-multi-client-decision-trees-evaluation/](https://www.ndss-symposium.org/ndss-paper/lets-stride-blindfolded-in-a-forest-sublinear-multi-client-decision-trees-evaluation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-1_23166_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-1_23166_paper.pdf)
## Practical Blind Membership Inference Attack via Differential Comparisons.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#practical-blind-membership-inference-attack-via-differential-comparisons) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#practical-blind-membership-inference-attack-via-differential-comparisons)**
### 作者
* Bo Hui, The Johns Hopkins University
* Yuchen Yang, The Johns Hopkins University
* Haolin Yuan, The Johns Hopkins University
* Philippe Burlina, The Johns Hopkins University Applied Physics Laboratory
* Neil Zhenqiang Gong, Duke University
* Yinzhi Cao, The Johns Hopkins University
### 摘要
> 会员推理（MI）攻击通过推断给定的数据样本是否被用于训练目标学习模型（如深度神经网络），影响用户的隐私。文献中存在两种类型的MI攻击，一种是使用阴影模型的攻击，一种是不使用阴影模型的攻击。前者的成功程度在很大程度上取决于阴影模型的质量，即阴影模型与目标模型之间的可传递性；后者只能通过对目标模型进行黑盒探测来进行有效的未知推理，与使用阴影模型的MI攻击相比，由于标记有地面真实成员信息的合格样本数量不足，无法进行有效的推理。
> 
> 本文提出了一种名为BLINDMI的MI攻击方法，通过一种称为差异比较的新方法，对目标模型进行探测并提取成员身份语义。其高层次思想是，BLINDMI首先通过将现有样本转化为新样本，生成一个非成员数据集，然后以迭代的方式将目标数据集中的样本差异性地移动到生成的非成员集中。如果样本的差异移动增加了集合间的距离，BLINDMI将认为该样本不是成员，反之亦然。
> 
> 通过与最先进的MI攻击算法进行比较，对BLINDMI进行了评估。评估结果表明，在部分数据集（如Purchase-50和Birds-200）的盲目设置中，BLINDMI相对于最先进的算法在F1得分上提高了近20%，其中对手不知道目标模型的架构和目标数据集的地面真实标签。我们还展示了BLINDMI能够击败最先进的防御手段。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/practical-blind-membership-inference-attack-via-differential-comparisons/](https://www.ndss-symposium.org/ndss-paper/practical-blind-membership-inference-attack-via-differential-comparisons/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-2_24293_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-2_24293_paper.pdf)
## GALA: Greedy ComputAtion for Linear Algebra in Privacy-Preserved Neural Networks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#gala-greedy-computation-for-linear-algebra-in-privacy-preserved-neural-networks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#gala-greedy-computation-for-linear-algebra-in-privacy-preserved-neural-networks)**
### 作者
* Qiao Zhang, Old Dominion University
* Chunsheng Xin, Old Dominion University
* Hongyi Wu, Old Dominion University
### 摘要
> 机器学习即服务（MLaaS）使得各种智能应用能够在终端设备上运行。然而，隐私仍然是一个根本性的挑战。基于同态加密（HE）的线性计算方案和基于混淆电路（GC）的非线性计算方案表现出优越性能，以实现隐私保护的MLaaS。然而，在计算速度方面仍存在显著差距。我们的调查发现，基于HE的线性计算在现代深度神经网络中占据了整个计算时间的主导地位。此外，基于HE的线性计算中耗时最长的组件是一系列对于隐私保护的MLaaS中的点积和卷积来说至关重要的置换（Perm）运算。本研究重点优化了基于HE的线性计算，以最小化Perm运算，从而大大减少总体计算时间。为此，我们提出了GALA: 隐私保护神经网络中的贪婪线性代数计算，该方法将基于HE的线性计算视为一系列同态加、乘和Perm运算，并选择每个线性计算步骤中成本最低的运算，以降低总体成本。GALA取得了以下贡献：（1）引入了逐行权重矩阵编码，并结合了GC非线性计算所需的分享生成，以减少点积的Perm运算；（2）设计了一个第一加第二Perm的方法（称为核组合），以减少卷积的Perm运算。因此，GALA有效降低了基于HE的线性计算的成本，这是近期几乎所有隐私保护神经网络框架的关键组成部分，包括GAZELLE（USENIX Security Symposium'18）、DELPHI（USENIX Security Symposium'20）和CrypTFlow2（CCS'20）。通过对HE的线性计算的深度优化，GALA可以成为这些系统中的即插即用模块，进一步提高其效率。我们的实验结果显示，在不同数据维度下，GALA在点积计算方面可实现高达700倍的加速，卷积计算方面可实现14倍的加速。同时，相对于GAZELLE，GALA在AlexNet、VGG、ResNet-18、ResNet-50、ResNet-101和ResNet-152上分别表现出2.5倍、2.7倍、3.2倍、8.3倍、7.7倍和7.5倍的运行时间提升；相对于CrypTFlow2，GALA在这些网络上分别表现出6.5倍、6倍、5.7倍、4.5倍、4.2倍和4.1倍的运行时间提升。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/gala-greedy-computation-for-linear-algebra-in-privacy-preserved-neural-networks/](https://www.ndss-symposium.org/ndss-paper/gala-greedy-computation-for-linear-algebra-in-privacy-preserved-neural-networks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-3_24351_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-3_24351_paper.pdf)
## FARE: Enabling Fine-grained Attack Categorization under Low-quality Labeled Data.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#fare-enabling-fine-grained-attack-categorization-under-low-quality-labeled-data) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#fare-enabling-fine-grained-attack-categorization-under-low-quality-labeled-data)**
### 作者
* Junjie Liang, The Pennsylvania State University
* Wenbo Guo, The Pennsylvania State University
* Tongbo Luo, Robinhood
* Vasant Honavar, The Pennsylvania State University
* Gang Wang, University of Illinois at Urbana-Champaign
* Xinyu Xing, The Pennsylvania State University
### 摘要
> 监督式机器学习分类器已被广泛应用于攻击检测，但它们的训练需要大量高质量的标签。不幸的是，在实际应用中很难获得高质量的标签，这是由于数据标注的高成本和攻击者的不断演变所导致的。没有这样的标签，训练和部署有针对性的对策就变得具有挑战性。
> 
> 在本文中，我们提出了一种聚类方法FARE，用于在低质量标签下实现细粒度攻击分类。我们关注数据标签中的两个常见问题：1）某些攻击类别或家族的标签丢失；2）不同攻击类型只有粗粒度标签可用。FARE的核心思想是充分利用有限的标签，并利用底层数据分布来整合低质量标签。我们设计了一个集成模型，将多个无监督学习算法的结果与给定的标签融合，以减轻缺失类别和粗粒度标签的负面影响。然后，我们训练一个输入转换网络，将输入数据映射到一个低维潜空间进行细粒度聚类。通过使用两个安全数据集（Android恶意软件和网络入侵追踪），我们展示了FARE在聚类质量/正确性方面明显优于现有的（半）监督学习方法。此外，我们通过与一个大型电子商务服务合作，对FARE进行了初步部署以检测欺诈账户。通过实际的A/B测试和手动调查，我们证明了FARE捕捉以前未见的欺诈行为的有效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fare-enabling-fine-grained-attack-categorization-under-low-quality-labeled-data/](https://www.ndss-symposium.org/ndss-paper/fare-enabling-fine-grained-attack-categorization-under-low-quality-labeled-data/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-4_24403_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_5C-4_24403_paper.pdf)
## PGFUZZ: Policy-Guided Fuzzing for Robotic Vehicles.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pgfuzz-policy-guided-fuzzing-for-robotic-vehicles) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#pgfuzz-policy-guided-fuzzing-for-robotic-vehicles)**
### 作者
* Hyungsub Kim, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Antonio Bianchi, Purdue University
* Z. Berkay Celik, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 机器人车辆（RVs）正在成为现代系统中必不可少的工具，包括自主交付服务、公共交通和环境监测。尽管它们被广泛应用，但是RVs的安全和安全问题限制了它们的广泛采用。到目前为止，在RV安全方面的多数尝试旨在提出针对语法错误、输入验证错误和外部传感器欺骗攻击等问题的防御措施。在本文中，我们介绍了PGFUZZ，一个策略引导的模糊测试框架，用于验证RV是否遵守覆盖用户命令、配置参数和物理状态的安全和功能策略。PGFUZZ通过时间逻辑公式和时间约束来表达所需的策略，作为分析系统的指南来进行模糊测试。具体而言，它生成最小化距离度量的模糊输入，衡量RV当前状态与策略违规之间的“接近程度”。此外，它利用静态和动态分析，仅关注那些影响任何已行使策略的命令、参数和环境因素。这两种技术的组合使得PGFUZZ能够显著提高模糊测试的效率。我们在三个RV控制程序（ArduPilot、PX4和Paparazzi）上验证了PGFUZZ，涵盖了56个独特的策略。PGFUZZ发现了156个之前未知的错误，其中106个已被开发人员确认。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/pgfuzz-policy-guided-fuzzing-for-robotic-vehicles/](https://www.ndss-symposium.org/ndss-paper/pgfuzz-policy-guided-fuzzing-for-robotic-vehicles/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6A-1_24096_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6A-1_24096_paper.pdf)
## Favocado: Fuzzing the Binding Code of JavaScript Engines Using Semantically Correct Test Cases.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#favocado-fuzzing-the-binding-code-of-javascript-engines-using-semantically-correct-test-cases) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#favocado-fuzzing-the-binding-code-of-javascript-engines-using-semantically-correct-test-cases)**
### 作者
* Sung Ta Dinh, Arizona State University
* Haehyun Cho, Arizona State University
* Kyle Martin, North Carolina State University
* Adam Oest, PayPal
### 摘要
> JavaScript运行时系统包括一些特殊的编程接口，被称为绑定层。绑定层通过在不同类型之间转换数据，将数据表示在JavaScript和不安全的底层语言（如C和C++）之间进行转换。由于JavaScript（和JavaScript引擎）在整个计算生态系统中得到了广泛采用，发现JavaScript绑定层中的漏洞至关重要。然而，现有的JavaScript模糊测试工具无法充分模糊绑定层，原因有两个主要挑战：生成语法和语义正确的测试用例，以及减小模糊测试的输入空间大小。
> 
> 在本文中，我们提出了一种新的模糊测试方法Favocado，重点针对JavaScript运行时系统的绑定层进行模糊测试。Favocado可以通过提取语义信息和精心维护执行状态来生成语法和语义正确的JavaScript测试用例。这样，Favocado生成的测试用例不会引发意外的运行时异常，大大增加了触发绑定代码的机会。此外，利用绑定层的一种独特特性（相对隔离），Favocado通过将DOM对象分割成等价类，并将模糊测试集中在每个等价类中，显著减小了模糊测试输入空间的大小。
> 
> 我们通过实验证明了Favocado的有效性，并展示了Favocado胜过另一个最先进的DOM模糊测试工具，发现了多出六倍的漏洞。最后，在评估过程中，我们在四个JavaScript运行时系统（Adobe Acrobat Reader，Foxit PDF Reader，Chromium和WebKit）中发现了61个以前未知的漏洞，其中33个是安全漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/favocado-fuzzing-the-binding-code-of-javascript-engines-using-semantically-correct-test-cases/](https://www.ndss-symposium.org/ndss-paper/favocado-fuzzing-the-binding-code-of-javascript-engines-using-semantically-correct-test-cases/)
## WINNIE : Fuzzing Windows Applications with Harness Synthesis and Fast Cloning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#winnie-fuzzing-windows-applications-with-harness-synthesis-and-fast-cloning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#winnie-fuzzing-windows-applications-with-harness-synthesis-and-fast-cloning)**
### 作者
* Jinho Jung, Georgia Institute of Technology
* Stephen Tong, Georgia Institute of Technology
* Hong Hu, Pennsylvania State University
* Jungwon Lim, Georgia Institute of Technology
* Yonghwi Jin, Georgia Institute of Technology
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 模糊测试是一种新兴技术，可以自动验证程序并发现错误。它已被广泛用于测试许多程序，并发现了数千个安全漏洞。然而，现有的模糊测试方法主要集中在类Unix系统上，因为Windows对模糊测试提出了独特的挑战：封闭式生态系统、大量使用图形界面以及缺乏快速的进程克隆机制。
> 
> 在本文中，我们提出了两种解决Windows模糊测试面临挑战的方法。我们的系统WINNIE首先尝试根据样本执行来合成一个应用程序的测试驱动程序，这是一个直接调用目标函数的简单程序。然后，使用Windows上高效的fork实现，对测试驱动程序进行测试，而不是对原始复杂程序进行测试。使用这些技术，WINNIE可以绕过无关的GUI代码，测试应用程序深层逻辑。我们使用WINNIE对闭源的59个Windows二进制文件进行了模糊测试，它成功为所有文件生成了有效的模糊测试驱动程序。在我们的评估中，WINNIE支持的程序数量比现有的Windows模糊测试工具多2.2倍，发现的程序状态数量增加了3.9倍，执行速度提高了26.6倍。总共，WINNIE在32个Windows二进制文件中找到了61个独特的错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/winnie-fuzzing-windows-applications-with-harness-synthesis-and-fast-cloning/](https://www.ndss-symposium.org/ndss-paper/winnie-fuzzing-windows-applications-with-harness-synthesis-and-fast-cloning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6A-3_24334_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6A-3_24334_paper.pdf)
## Reinforcement Learning-based Hierarchical Seed Scheduling for Greybox Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#reinforcement-learning-based-hierarchical-seed-scheduling-for-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#reinforcement-learning-based-hierarchical-seed-scheduling-for-greybox-fuzzing)**
### 作者
* Jinghan Wang, University of California
### 摘要
> 覆盖度度量在灰盒模糊测试中起着重要作用。最近的研究表明，细粒度的覆盖度度量能够使模糊测试工具检测到传统边界覆盖度无法覆盖的漏洞。然而，细粒度的覆盖度度量也会选择更多无法由现有算法高效调度的种子。本研究通过引入一个新的多级覆盖度度量概念和相应的基于强化学习的层次调度器来解决这个问题。我们在DARPA CGC上测试了我们的原型系统，结果显示与AFL和AFLFast相比，我们的方法表现出色：它可以检测到更多的漏洞，覆盖度在180个挑战中有83个提高，而在其他60个挑战中保持相同的覆盖度。更重要的是，它能更快地检测到相同数量的漏洞并达到相同的覆盖度。在FuzzBench上，我们的方法在20个项目中的10个上比AFL++（Qemu版本）达到了更高的覆盖度。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/reinforcement-learning-based-hierarchical-seed-scheduling-for-greybox-fuzzing/](https://www.ndss-symposium.org/ndss-paper/reinforcement-learning-based-hierarchical-seed-scheduling-for-greybox-fuzzing/)
## Evading Voltage-Based Intrusion Detection on Automotive CAN.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#evading-voltage-based-intrusion-detection-on-automotive-can) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#evading-voltage-based-intrusion-detection-on-automotive-can)**
### 作者
* Rohit Bhatia, Purdue University
* Vireshwar Kumar, Indian Institute of Technology Delhi
* Khaled Serag, Purdue University
* Z. Berkay Celik, Purdue University
* Mathias Payer, EPFL
* Dongyan Xu, Purdue University
### 摘要
> 控制器局域网（Controller Area Network，CAN）被广泛应用于现代汽车，以实现车内电子控制单元（ECU）之间的通信。由于资源限制，CAN缺乏主流网络安全能力，容易受到ECU冒名攻击的威胁。在冒名攻击中，被攻击的ECU被破坏，而攻击者的ECU冒充其正常运行的ECU并伪造其CAN消息。针对此类攻击的一种经济有效的最新防御方法是CAN总线电压基础的入侵检测系统（Voltage-based Intrusion Detection System，VIDS），它通过识别每个消息的电压指纹来确定其来源。由于电压指纹来源于ECU的硬件特征，攻击者的ECU本身无法可控性地修改它。因此，VIDS已被证明对于检测涉及单一攻击者的冒名攻击非常有效。
> 
> 在本文中，我们发现一种新颖的电压损坏策略，利用两个被破坏的ECU的能力（即攻击者ECU与帮凶ECU共同作用），来破坏VIDS记录的总线电压。通过利用这种策略以及CAN协议的基本缺陷，我们提出了一种新颖的冒名攻击方法称为DUET，无论使用的特征和分类算法是什么，DUET都可以回避所有现有的VIDS。DUET采用两阶段的攻击策略，首先在VIDS重新训练模式中操纵受害ECU的电压指纹，然后在VIDS运行模式中冒充被操纵的电压指纹。我们在真实的CAN总线上测试了DUET（包括两辆真实汽车上的三个总线），结果显示DUET至少有90%的成功冒充率，可以逃避两个最先进的VIDS。
> 
> 最后，为了减轻ECU冒名攻击的影响，我们倡导开发经济有效的防御措施，摆脱“攻击与入侵检测系统（Intrusion Detection System，IDS）”之间的对抗。我们提出了一种轻型防御方法称为RAID，使每个ECU能够在其帧格式中进行与协议兼容的修改，从而在VIDS重新训练模式中生成一种独特的语言（由ECU使用）。RAID可以防止ECU的电压指纹遭到破坏，并使VIDS能够检测到包括DUET在内的所有ECU冒名攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/evading-voltage-based-intrusion-detection-on-automotive-can/](https://www.ndss-symposium.org/ndss-paper/evading-voltage-based-intrusion-detection-on-automotive-can/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-1_23013_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-1_23013_paper.pdf)
## HERA: Hotpatching of Embedded Real-time Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hera-hotpatching-of-embedded-real-time-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#hera-hotpatching-of-embedded-real-time-applications)**
### 作者
* Christian Niesler, University of Duisburg-Essen
* Sebastian Surminski, University of Duisburg-Essen
* Lucas Davi, University of Duisburg-Essen
### 摘要
> 内存损坏攻击是针对物联网设备的主要攻击手段。由于无法接受的停机时间和必须重新启动，仅仅更新有漏洞的物联网软件并不总是可能的。对于高可用的嵌入式系统（如医疗设备）以及一般嵌入式系统中具有实时约束的情况，必须避免这些副作用。为了避免系统的停机和重新启动，以前的研究引入了热补丁的概念。然而，现有的方法无法应用于资源受限的物联网设备。此外，可能存在硬件相关的问题，即由于只读内存的限制，无法直接修改固件映像。
> 
> 在本论文中，我们介绍了HERA（嵌入式实时应用的热补丁）的设计和实现，该系统利用商品化的Cortex-M微控制器的硬件内建功能来执行嵌入式系统的热补丁。HERA在保持硬实时约束的同时，将额外资源使用量最小化。在一个案例研究中，我们将HERA应用于两个有漏洞的医疗设备上。此外，我们利用HERA修补了FreeRTOS操作系统中的一个现有漏洞。这些应用展示了我们方法的高实用性和高效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/hera-hotpatching-of-embedded-real-time-applications/](https://www.ndss-symposium.org/ndss-paper/hera-hotpatching-of-embedded-real-time-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-2_24159_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-2_24159_paper.pdf)
## From Library Portability to Para-rehosting: Natively Executing Microcontroller Software on Commodity Hardware.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#from-library-portability-to-para-rehosting-natively-executing-microcontroller-software-on-commodity-hardware) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#from-library-portability-to-para-rehosting-natively-executing-microcontroller-software-on-commodity-hardware)**
### 作者
* Wenqiang Li, State Key Laboratory of Information Security
### 摘要
> 在微控制器（MCU）固件中发现漏洞是具有挑战性的，即使对于拥有源代码的设备制造商也是如此。MCU运行的指令集与x86不同，并且提供了一个非常不同的开发环境。这使得许多现有的高级软件测试工具在x86上变得无效。为了保持统一的开发和测试环境，一种直接的方法是将源代码重新编译为通用计算机的本机可执行文件（称为rehosting）。然而，临时重托管是一项艰巨而繁琐的任务，并且面临许多问题（库依赖、内核依赖和硬件依赖）。在这项工作中，我们系统地探索了MCU软件的可移植性问题，并提出了para-rehosting来简化移植过程。具体而言，我们使用POSIX接口对可移植的MCU（PMCU）进行了抽象和实现。它模拟了MCU核心的常见功能。对于特定于外设的逻辑，我们提出了基于HAL的外设功能替换，其中高级硬件功能被主机上的等效后端驱动程序替换。这些后端驱动程序由经过良好设计的para-API调用，并可以在许多MCU操作系统中重复使用。我们将常见的HAL函数分为四类，并为快速后端开发实现了模板。使用所提出的方法，我们成功地重新托管了包括广泛部署的Amazon FreeRTOS、ARM Mbed OS、Zephyr和LiteOS在内的九个MCU操作系统。为了证明我们的方法在安全测试方面的优越性，我们使用现成的动态分析工具（AFL和ASAN）对重新托管的程序进行了测试，并发现了28个以前未知的漏洞，其中5个得到了CVE的确认，其余19个在撰写本文时已被供应商确认。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/from-library-portability-to-para-rehosting-natively-executing-microcontroller-software-on-commodity-hardware/](https://www.ndss-symposium.org/ndss-paper/from-library-portability-to-para-rehosting-natively-executing-microcontroller-software-on-commodity-hardware/)
## BaseSpec: Comparative Analysis of Baseband Software and Cellular Specifications for L3 Protocols.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#basespec-comparative-analysis-of-baseband-software-and-cellular-specifications-for-l3-protocols) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#basespec-comparative-analysis-of-baseband-software-and-cellular-specifications-for-l3-protocols)**
### 作者
* Eunsoo Kim, KAIST
* Dongkwan Kim, KAIST
* CheolJun Park, KAIST
* Insu Yun, KAIST
* Yongdae Kim, KAIST
### 摘要
> 手机基带在移动通信中起着关键作用。然而，由于多种原因，评估其安全性具有很大挑战性。基带固件的复杂性和晦涩性使得手动分析不可避免，但是这种分析需要反复努力来覆盖不同的型号或版本。自动化分析也非常困难，因为固件体积巨大，并包含与复杂的移动通信协议相关的众多功能。因此，现有的基带分析方法仅限于单个供应商的几个型号或版本。在本文中，我们提出了一种名为BaseSpec的新方法，它对基带软件和移动通信规范进行比较分析。通过利用规范中的标准化消息结构，BaseSpec系统地检查基带软件中实现的消息结构。它需要进行一次手动分析来确定消息结构如何嵌入在目标固件中。然后，BaseSpec在语法和语义上与规范中提取的消息结构进行比较，最后报告不匹配之处。这些不匹配表示开发人员的错误，在基带与规范的合规性上存在问题，或者暗示着潜在的漏洞。我们使用来自三大供应商之一的9个型号的18个基带固件映像来评估BaseSpec，并发现了数百个不匹配之处。通过分析这些不匹配，我们发现了9个错误案例：5个功能错误和4个与内存相关的漏洞。值得注意的是，其中两个是严重的远程代码执行漏洞。此外，我们还将BaseSpec应用于另一家供应商的3个型号，BaseSpec发现了多个不匹配，其中两个引导我们发现了一个缓冲区溢出漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/basespec-comparative-analysis-of-baseband-software-and-cellular-specifications-for-l3-protocols/](https://www.ndss-symposium.org/ndss-paper/basespec-comparative-analysis-of-baseband-software-and-cellular-specifications-for-l3-protocols/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-4_24365_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6B-4_24365_paper.pdf)
## POSEIDON: Privacy-Preserving Federated Neural Network Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#poseidon-privacy-preserving-federated-neural-network-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#poseidon-privacy-preserving-federated-neural-network-learning)**
### 作者
* Sinem Sav, EPFL
* Apostolos Pyrgelis, EPFL
* Juan Ramón Troncoso-Pastoriza, EPFL
* David Froelicher, EPFL
* Jean-Philippe Bossuat, EPFL
* Joao Sa Sousa, EPFL
* Jean-Pierre Hubaux, EPFL
### 摘要
> 在本文中，我们解决了在一个$N$方参与、联邦学习环境中进行隐私保护的神经网络训练和评估的问题。我们提出了一种新颖的系统POSEIDON，在隐私保护神经网络训练领域是首个提出的。该系统采用多方基于格的加密技术，以保护训练数据、模型和评估数据的机密性，在被动攻击者模型和多达$N-1$方的勾结下。为了有效执行安全的反向传播算法来训练神经网络，我们提供了一种通用的打包方法，可以在加密数据上进行单指令、多数据（SIMD）操作。我们还在加密引导操作中引入了任意线性变换，优化各方之间的昂贵加密计算，并定义了一个用于选择加密参数的约束优化问题。我们的实验结果表明，POSEIDON的准确度与集中式或分散式非隐私方法相似，计算和通信开销与参与方数量呈线性缩放关系。POSEIDON在MNIST数据集上训练了一个包含784个特征和10个参与方中分布的60K个样本的3层神经网络，所用时间不到2小时。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/poseidon-privacy-preserving-federated-neural-network-learning/](https://www.ndss-symposium.org/ndss-paper/poseidon-privacy-preserving-federated-neural-network-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-1_24119_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-1_24119_paper.pdf)
## FLTrust: Byzantine-robust Federated Learning via Trust Bootstrapping.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#fltrust-byzantine-robust-federated-learning-via-trust-bootstrapping) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#fltrust-byzantine-robust-federated-learning-via-trust-bootstrapping)**
### 作者
* Xiaoyu Cao, Duke University
* Minghong Fang, The Ohio State University
* Jia Liu, The Ohio State University
* Neil Zhenqiang Gong, Duke University
### 摘要
> 拜占庭鲁棒的联邦学习旨在在有限数量的恶意客户端的情况下，使服务提供商能够学习准确的全局模型。现有拜占庭鲁棒的联邦学习方法的关键思想是，在对客户端的本地模型更新进行统计分析并在聚合之前删除可疑的更新之前，服务提供商对其进行统计分析，并将可疑的更新从中删除，以更新全局模型。然而，恶意客户端仍然可以通过向服务提供商发送精心制作的本地模型更新来破坏这些方法中的全局模型。根本原因是现有的联邦学习方法中没有可信根，即从服务提供商的角度来看，每个客户都可能是恶意的。
> 
> 在这项工作中，我们通过提出一种新的联邦学习方法FLTrust来弥合这一差距，其中服务提供商本身建立了信任。特别地，服务提供商本身针对学习任务收集一个干净的小型训练数据集（称为根数据集），并基于此维护一个模型（称为服务器模型）来建立信任。在每次迭代中，服务提供商首先给来自客户端的每个本地模型更新分配一个信任分数，如果本地模型更新的方向与服务器模型更新的方向偏离更大，则其信任分数较低。然后，服务提供商对本地模型更新的幅度进行归一化处理，使其处于与服务器模型更新在向量空间中相同的超球面上。我们的归一化限制了具有较大幅度的恶意本地模型更新的影响。最后，服务提供商通过计算信任分数加权的归一化本地模型更新的平均值作为全局模型更新，用于更新全局模型。我们在来自不同领域的六个数据集上进行了广泛的评估，结果表明我们的FLTrust对现有攻击和强适应攻击都是安全的。例如，使用少于100个示例的根数据集，在40％-60％的恶意客户端环境下，FLTrust仍然可以训练出与非攻击环境下FedAvg训练的全局模型一样准确的全局模型，其中FedAvg是一种在非对抗环境中流行的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fltrust-byzantine-robust-federated-learning-via-trust-bootstrapping/](https://www.ndss-symposium.org/ndss-paper/fltrust-byzantine-robust-federated-learning-via-trust-bootstrapping/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-2_24434_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-2_24434_paper.pdf)
## Manipulating the Byzantine: Optimizing Model Poisoning Attacks and Defenses for Federated Learning.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#manipulating-the-byzantine-optimizing-model-poisoning-attacks-and-defenses-for-federated-learning) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#manipulating-the-byzantine-optimizing-model-poisoning-attacks-and-defenses-for-federated-learning)**
### 作者
* Virat Shejwalkar, UMass Amherst
* Amir Houmansadr, UMass Amherst
### 摘要
> 联邦学习（FL）使得许多数据所有者（例如移动设备）能够在不共享私有训练数据的情况下训练联合机器学习模型（例如下一个单词预测分类器）。
> 
> 然而，已知FL容易受到恶意参与者（例如拥有恶意意图的移动设备）的污染攻击，这些攻击旨在通过在联邦训练过程中发送恶意输入来破坏联合训练模型的准确性。
> 
> 在本文中，我们提出了一个关于FL模型污染攻击的通用框架。我们展示了我们的框架通过较大幅度的优势在污染攻击方面表现出色，超过了当前最先进的模型污染攻击。例如，与先前发现的污染攻击相比，我们的攻击导致FL模型准确性降低1.5倍至60倍不等。
> 
> 我们的研究表明，现有的拜占庭鲁棒FL算法对模型污染的敏感性远远超出了以前的估计。受此启发，我们设计了一种抵御FL模型污染的防御方法，称为“分而治之”（DnC）。我们证明DnC在击败模型污染攻击方面优于所有现有的拜占庭鲁棒FL算法，在不同数据集和模型的实验中，DnC的恢复能力比他们高出2.5倍至12倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/manipulating-the-byzantine-optimizing-model-poisoning-attacks-and-defenses-for-federated-learning/](https://www.ndss-symposium.org/ndss-paper/manipulating-the-byzantine-optimizing-model-poisoning-attacks-and-defenses-for-federated-learning/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-3_24498_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-3_24498_paper.pdf)
## Data Poisoning Attacks to Deep Learning Based Recommender Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#data-poisoning-attacks-to-deep-learning-based-recommender-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#data-poisoning-attacks-to-deep-learning-based-recommender-systems)**
### 作者
* Hai Huang, Tsinghua University
* Jiaming Mu, Tsinghua University
* Neil Zhenqiang Gong, Duke University
* Qi Li, Tsinghua University
* Bin Liu, West Virginia University
* Mingwei Xu, Tsinghua University
### 摘要
> 推荐系统在帮助用户在亚马逊、YouTube和谷歌新闻等各种网络服务中找到他们感兴趣的信息方面起着至关重要的作用。不同类型的推荐系统已经在行业中得到开发和部署，包括基于邻域、关联规则、矩阵分解和深度学习等。其中，基于深度学习的推荐系统因其卓越的性能而日益受到欢迎。
> 
> 在这项工作中，我们首次对基于深度学习的推荐系统进行了数据投毒攻击的系统研究。攻击者的目标是操纵一个推荐系统，使得攻击者选择的目标物品被推荐给许多用户。为了实现这个目标，我们的攻击会向一个推荐系统注入具有精心设计的评分的虚假用户。具体而言，我们将我们的攻击定义为一个优化问题，使得注入的评分最大化目标物品被推荐给普通用户的数量。然而，由于这是一个非凸整数规划问题，解决这个优化问题具有挑战性。为了应对这个挑战，我们开发了多种技术来近似解决这个优化问题。我们在三个真实数据集上进行的实验结果，包括小规模和大规模数据集，表明我们的攻击是有效的，并且优于现有的攻击方法。此外，我们尝试通过对正常用户和虚假用户的评分模式进行统计分析来检测虚假用户。我们的结果表明，即使部署了这样的检测器，我们的攻击仍然是有效的，并且优于现有的攻击方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/data-poisoning-attacks-to-deep-learning-based-recommender-systems/](https://www.ndss-symposium.org/ndss-paper/data-poisoning-attacks-to-deep-learning-based-recommender-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-4_24525_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_6C-4_24525_paper.pdf)
## C^2SR: Cybercrime Scene Reconstruction for Post-mortem Forensic Analysis.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#c-2sr-cybercrime-scene-reconstruction-for-post-mortem-forensic-analysis) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#c-2sr-cybercrime-scene-reconstruction-for-post-mortem-forensic-analysis)**
### 作者
* Yonghwi Kwon, University of Virginia
* Weihang Wang, University at Buffalo
### 摘要
> 网络犯罪现场重构旨在重建先前的网络攻击传递过程的执行，是网络取证（例如，网络攻击执行的事后分析）的重要能力。不幸的是，现有的技术如基于日志的取证或记录与回放技术并不适合处理复杂且长时间运行的现代网络应用程序进行网络犯罪现场重构和事后取证分析。具体来说，基于日志的网络取证技术常常面临着检查能力不足的问题，并且不提供攻击过程展开的细节。记录与回放技术会增加显著的运行时开销，通常需要对终端用户系统进行大量修改，并且需要从头开始重新播放完整的记录执行过程。在本文中，我们提出了一种名为C^2SR的新技术，用于重建攻击传递链（即网络犯罪现场）进行事后取证分析。它提供了一个非常理想的能力：可交互的部分执行重建。具体而言，它可以从长时间运行的程序的大型执行跟踪中重现感兴趣的部分执行。重建后的执行也是可交互的，允许取证分析人员利用在记录机器上不存在的调试和分析工具。C^2SR的关键灵感是通过资源对执行跟踪进行分区，并重现与原始执行一致的资源访问。它容忍不导致不一致资源访问的检查所需的用户交互。我们在26个真实世界的程序上进行的评估结果显示，C^2SR的运行时开销低（低于5.47%），并且具有可接受的空间开销。我们还通过四种现实的攻击场景演示了C^2SR成功重构了长时间运行的应用程序（如Web浏览器）的部分执行，并且能够显著减少用户理解事件所需的工作。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/c2sr-cybercrime-scene-reconstruction-for-post-mortem-forensic-analysis/](https://www.ndss-symposium.org/ndss-paper/c2sr-cybercrime-scene-reconstruction-for-post-mortem-forensic-analysis/)
## ALchemist: Fusing Application and Audit Logs for Precise Attack Provenance without Instrumentation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#alchemist-fusing-application-and-audit-logs-for-precise-attack-provenance-without-instrumentation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#alchemist-fusing-application-and-audit-logs-for-precise-attack-provenance-without-instrumentation)**
### 作者
* Le Yu, Purdue University
* Shiqing Ma, Rutgers University
* Zhuo Zhang, Purdue University
* Guanhong Tao, Purdue University
* Xiangyu Zhang, Purdue University
* Dongyan Xu, Purdue University
* Vincent E. Urias, Sandia National Laboratories
* Han Wei Lin, Sandia National Laboratories
* Gabriela Ciocarlie, SRI International
* Vinod Yegneswaran, SRI International
* Ashish Gehani, SRI International
### 摘要
> 网络攻击变得越来越持久和复杂。大多数先进的攻击取证技术要么需要注释和仪器化软件应用程序，要么依赖于高质量的执行配置文件作为异常检测的基础。我们提出了一种新颖的攻击取证技术ALchemist。它基于以下观察结果：内置应用程序日志提供关键的高级语义，审计日志提供低级的细粒度信息；而这两者有许多共同的元素。因此，ALchemist是一种日志融合技术，将应用程序日志和审计日志结合起来，从两种日志中提取在单独的日志中无法看到的关键攻击信息。它基于关系推理引擎Datalog，并具有推断新关系的能力，例如执行的任务结构（例如火狐浏览器中的标签），特别是在复杂的异步执行模型和日志事件之间的高级依赖存在的情况下。我们对包括火狐浏览器、Chromium和OpenOffice在内的15个热门应用程序以及来自文献中的14个高级持久性威胁攻击进行了评估，结果表明，尽管ALchemist不需要仪器化，但在将执行分割为独立任务（以避免虚假依赖）和推导精确的攻击来源图方面非常有效，并且开销非常小。它也胜过了不需要仪器化的两种先进技术NoDoze和OmegaLog。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/alchemist-fusing-application-and-audit-logs-for-precise-attack-provenance-without-instrumentation/](https://www.ndss-symposium.org/ndss-paper/alchemist-fusing-application-and-audit-logs-for-precise-attack-provenance-without-instrumentation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7A-2_24445_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7A-2_24445_paper.pdf)
## WATSON: Abstracting Behaviors from Audit Logs via Aggregation of Contextual Semantics.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#watson-abstracting-behaviors-from-audit-logs-via-aggregation-of-contextual-semantics) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#watson-abstracting-behaviors-from-audit-logs-via-aggregation-of-contextual-semantics)**
### 作者
* Jun Zeng, National University of Singapore
* Zheng Leong Chua, Independent Researcher
* Yinfang Chen, National University of Singapore
* Kaihang Ji, National University of Singapore
* Zhenkai Liang, National University of Singapore
* Jian Mao, Beihang University
### 摘要
> 终端监控解决方案广泛部署在当今的企业环境中，以支持高级攻击检测和调查。这些监视器持续记录系统级活动作为审计日志，并提供对安全事件的深入可见性。不幸的是，为了识别感兴趣的行为并检测潜在威胁，网络分析师面临着低级审计事件和高级系统行为之间的语义鸿沟。为了填补这一鸿沟，现有的工作主要依靠描述行为的规则的知识库对审计日志流进行匹配。然而，指定这样的规则在很大程度上依赖于专业知识。在本文中，我们提出了Watson，一种通过推断和聚合审计事件的语义来抽象行为的自动化方法。Watson通过审计日志中的使用上下文揭示事件的语义。通过将行为提取为连接的系统操作，Watson将事件语义结合起来作为行为的表示。为了减少分析工作量，Watson进一步将语义相似的行为聚类，并区分代表用于分析师调查。在我们针对良性行为和恶意行为进行的评估中，Watson在行为抽象方面表现出高准确度。此外，Watson可以将攻击调查的分析工作量降低两个数量级。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/watson-abstracting-behaviors-from-audit-logs-via-aggregation-of-contextual-semantics/](https://www.ndss-symposium.org/ndss-paper/watson-abstracting-behaviors-from-audit-logs-via-aggregation-of-contextual-semantics/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7A-3_24549_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7A-3_24549_paper.pdf)
## DOVE: A Data-Oblivious Virtual Environment.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#dove-a-data-oblivious-virtual-environment) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#dove-a-data-oblivious-virtual-environment)**
### 作者
* Hyun Bin Lee, University of Illinois at Urbana-Champaign
* Tushar M. Jois, Johns Hopkins University
* Christopher W. Fletcher, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
### 摘要
> 用户可以通过使用可信执行环境（TEE）来提高远程通信的安全性，以保护敏感数据免受直接审查和篡改。即使是使用高级语言（如R、Python和Ruby）编写的应用程序也可以实现这一目标。然而，这会在编程便利性与使用微体系结构侧信道进行攻击的风险之间产生权衡。
> 
> 本文认为，可以通过对复杂的编程环境（如R语言）进行仪器化处理，生成一份专门用于支持排除侧信道计算的数据混淆记录（DOT）来解决这个问题。然后，使用一个名为数据混淆虚拟环境（DOVE）的小型可信计算基础，在包含敏感数据的TEE上对此记录进行评估。
> 
> 为了证明这个问题的重要性，我们展示了R语言中存在的一些微妙的侧信道漏洞。然后，我们提供了一个针对R语言的DOVE的示例设计和实现，创建了第一个能够抵御侧信道攻击的R编程堆栈。我们证明了由DOT生成和DOVE评估所提供的两阶段架构可以为复杂的编程语言提供实用性能和高安全保证，可以抵御侧信道攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dove-a-data-oblivious-virtual-environment/](https://www.ndss-symposium.org/ndss-paper/dove-a-data-oblivious-virtual-environment/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-1_23056_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-1_23056_paper.pdf)
## CHANCEL: Efficient Multi-client Isolation Under Adversarial Programs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#chancel-efficient-multi-client-isolation-under-adversarial-programs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#chancel-efficient-multi-client-isolation-under-adversarial-programs)**
### 作者
* Adil Ahmad, Purdue University
* Juhee Kim, Seoul National University
* Jaebaek Seo, Google
* Insik Shin, KAIST
* Pedro Fonseca, Purdue University
* Byoungyoung Lee, Seoul National University
### 摘要
> Intel SGX旨在为不受信任的云计算机上的用户数据提供机密性。然而，处理机密用户数据的应用程序可能存在泄漏信息的错误或被恶意编程以收集用户数据。现有的旨在解决此问题的研究没有考虑单个飞地中的多客户隔离。我们表明，由于SGX的限制，它们不支持此类隔离，导致同时处理不同进程中的多个客户时出现显着的减速。
> 
> 本文提出了CHANCEL，这是一个专为单个SGX飞地内的多客户隔离而设计的沙箱。特别地，CHANCEL允许程序的线程在处理请求时同时访问每个线程内存区域和共享的只读内存区域。每个线程一次处理来自单个客户的请求，并且与其他线程隔离，使用多客户软件故障隔离（MCSFI）方案。此外，CHANCEL支持各种飞地内服务，如内存文件系统和受保护的客户通信，以确保程序与外部世界的交互完全经过调解。我们实现了CHANCEL，并在SGX硬件上使用微基准测试和现实目标场景对其进行了评估，包括私人信息检索和产品推荐服务。我们的结果表明，CHANCEL在微基准测试中比基线的多进程沙箱提高了4.06-53.70倍，在现实工作负载中提高了0.02-21.18倍，同时提供了强大的安全保证。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/chancel-efficient-multi-client-isolation-under-adversarial-programs/](https://www.ndss-symposium.org/ndss-paper/chancel-efficient-multi-client-isolation-under-adversarial-programs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-2_24057_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-2_24057_paper.pdf)
## Emilia: Catching Iago in Legacy Code.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#emilia-catching-iago-in-legacy-code) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#emilia-catching-iago-in-legacy-code)**
### 作者
* Rongzhen Cui, University of Toronto
* Lianying Zhao, Carleton University
* David Lie, University of Toronto
### 摘要
> 对于在受信任的执行环境（如Intel SGX）中实现可信代码，使用旧代码的安全使用机制引起了人们的兴趣。然而，由于旧代码通常假设操作系统的存在，这自然地引发了旧代码遭受Iago攻击的问题。我们观察到，并非所有旧代码都容易受到Iago攻击，而且只有在旧代码以不安全的方式使用系统调用返回值时才存在Iago漏洞。
> 
> 基于此观察，我们开发了Emilia，通过对应用程序使用系统调用返回值进行模糊测试，自动检测遗留应用程序中的Iago漏洞。我们使用Emilia在17个应用程序中发现了51个Iago漏洞，并发现Iago漏洞是普遍且常见的。我们对我们发现的漏洞进行了深入分析，并得出结论，虽然常见，但大部分（82.4%）可以通过在系统调用转发层进行简单的状态检查来减轻风险，而其他漏洞最好通过找到并修补旧代码来解决。
> 
> 最后，我们研究并评估了Emilia设计中的不同权衡。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/emilia-catching-iago-in-legacy-code/](https://www.ndss-symposium.org/ndss-paper/emilia-catching-iago-in-legacy-code/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-3_24328_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7B-3_24328_paper.pdf)
## CV-Inspector: Towards Automating Detection of Adblock Circumvention.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#cv-inspector-towards-automating-detection-of-adblock-circumvention) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#cv-inspector-towards-automating-detection-of-adblock-circumvention)**
### 作者
* Hieu Le, University of California
### 摘要
> 近年来，广告拦截战争不断升级。最近出现了一个全新的绕过拦截（CV）服务生态系统，旨在通过模糊化网站内容，使广告拦截过滤列表难以区分广告和功能性内容，从而绕过广告拦截。在本文中，我们调查了广告拦截社区最近采用的反绕过措施，这些措施利用了定制的过滤列表。我们特别分析了反绕过过滤列表（ACVL），该列表支持使用丰富的语法和功能的高级过滤规则，专门用于对抗绕过行为。我们发现，要保持ACVL规则的最新，需要专家级的列表管理员不断监控已知使用CV服务的网站，并发现野外中的新网站，这两项任务都需要大量的人工努力。为了帮助自动化和扩展ACVL的维护工作，我们开发了CV-INSPECTOR，一种利用差分执行分析自动检测广告拦截绕过行为的机器学习方法。我们展示了CV-INSPECTOR在检测成功绕过广告拦截的网站方面达到了93%的准确率。我们在排名前20,000的网站上部署了CV-INSPECTOR，以发现野外中使用绕过措施的网站。我们进一步将CV-INSPECTOR应用于一份已知利用绕过行为并由ACVL作者密切监控的网站列表。我们证明了CV-INSPECTOR将人工标注工作减少了98%，从而消除了ACVL作者的主要瓶颈。我们的工作是首次对广告拦截绕过战斗状况进行的大规模研究，是向自动化反绕过努力迈出的重要一步。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cv-inspector-towards-automating-detection-of-adblock-circumvention/](https://www.ndss-symposium.org/ndss-paper/cv-inspector-towards-automating-detection-of-adblock-circumvention/)
## FlowLens: Enabling Efficient Flow Classification for ML-based Network Security Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#flowlens-enabling-efficient-flow-classification-for-ml-based-network-security-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#flowlens-enabling-efficient-flow-classification-for-ml-based-network-security-applications)**
### 作者
* Diogo Barradas, INESC-ID
### 摘要
> 网络安全中的一个新趋势是在大规模、高速网络中采用可编程交换机执行各种安全任务。然而，由于现有解决方案是针对特定任务定制的，它们无法适应日益增长的基于机器学习的安全应用的多样性，即基于分组大小或分组间隔频率分布的有针对性流分类的安全任务，这些任务借助于监督式机器学习算法。我们提出了FlowLens，一种利用可编程交换机高效支持多用途基于机器学习的安全应用的系统。FlowLens以线速进行流分布特征收集，并直接在交换机上对流进行分类，使网络操作员可以在运行时重新利用此测量原语来执行不同的流分类任务。为了应对可编程交换机资源约束，FlowLens为每个流计算一个内存高效的相关特征表示，称为"流标记"。尽管流标记很小，但它包含了足够的信息来进行准确的流分类。由于流标记高度可定制且应用相关，FlowLens可以通过多目标优化过程自动参数化流标记的生成，以平衡其大小和准确性。我们在三种使用场景下评估了我们的系统：隐蔽信道检测、网站指纹识别和僵尸网络聊天检测。我们发现，非常小的标记使FlowLens在隐蔽信道检测的监测能力上提高了150倍，并且准确度仅下降了3%，相比于收集完整的分组分布。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/flowlens-enabling-efficient-flow-classification-for-ml-based-network-security-applications/](https://www.ndss-symposium.org/ndss-paper/flowlens-enabling-efficient-flow-classification-for-ml-based-network-security-applications/)
## PrivacyFlash Pro: Automating Privacy Policy Generation for Mobile Apps.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#privacyflash-pro-automating-privacy-policy-generation-for-mobile-apps) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#privacyflash-pro-automating-privacy-policy-generation-for-mobile-apps)**
### 作者
* Sebastian Zimmeck, Wesleyan University
* Rafael Goldstein, Wesleyan University
* David Baraka, Wesleyan University
### 摘要
> 各种隐私法律要求移动应用程序具有隐私政策。以问卷为基础的政策生成器旨在帮助开发人员创建政策。然而，生成的政策取决于生成器的设计以及开发人员能否正确回答其应用程序上的隐私问题。在本研究中，我们表明使用流行的政策生成器生成的政策通常不能反映应用程序的隐私实践。我们认为通过补充问卷调查方法与代码分析相结合可以改进政策生成。我们设计并实现了PrivacyFlash Pro，这是一款用于iOS应用程序的隐私政策生成器，利用静态分析。PrivacyFlash Pro识别出代码签名，由Plist权限字符串、框架导入、类实例化、授权方法和其他证据组成，并将其映射到隐私政策中表达的隐私实践。通过使用包管理器提供的资源来识别库文件。
> 
> 我们在一项可用性研究中对40名iOS应用程序开发人员进行了PrivacyFlash Pro的测试，并取得了令人满意的结果，无论是在可靠地识别应用程序的隐私实践方面还是在可用性方面。我们测得的F-1分数为0.95，用于识别权限使用。40名开发人员中有24名对PrivacyFlash Pro给予9分或更高的评分，在0到10的评分表上，净推荐人得分为42.5。平均系统可用性得分为83.4，接近卓越。我们将PrivacyFlash Pro作为开源项目提供给iOS开发者社区。原则上，我们的方法不依赖于特定平台，可以适用于Android和Web平台。为了增加隐私透明度并减少合规问题，我们提出隐私政策作为软件开发工件的论点。隐私政策创建应成为软件开发过程的本地扩展，并符合软件开发人员的心理模型。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/privacyflash-pro-automating-privacy-policy-generation-for-mobile-apps/](https://www.ndss-symposium.org/ndss-paper/privacyflash-pro-automating-privacy-policy-generation-for-mobile-apps/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7C-3_24100_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7C-3_24100_paper.pdf)
## Towards Understanding and Detecting Cyberbullying in Real-world Images.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#towards-understanding-and-detecting-cyberbullying-in-real-world-images) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium[2021].md#towards-understanding-and-detecting-cyberbullying-in-real-world-images)**
### 作者
* Nishant Vishwamitra, University at Buffalo
* Hongxin Hu, University at Buffalo
* Feng Luo, Clemson University
* Long Cheng, Clemson University
### 摘要
> 网络欺凌已经被广泛认识为困扰当今互联网用户的一个严重社会问题。这个问题涉及到施行者利用基于互联网的技术来欺负受害者，通过分享与网络欺凌相关的内容。为了应对这个问题，研究人员已经研究了与这些内容相关的因素，并提出了基于这些因素的自动检测技术。然而，这些研究大多主要关注文本内容的因素，比如评论和文本消息，而很大程度上忽视了利用视觉内容进行网络欺凌的滥用。近年来，用户访问互联网的技术进步引发了一种新的网络欺凌模式。施行者可以使用视觉媒体通过发送和发布带有网络欺凌内容的图片来欺负受害者。作为了解网络欺凌中图片威胁的第一步，我们在本文中报告了关于网络欺凌中图片性质的全面研究。我们首先收集了一份包含19,300张有效图片的真实世界网络欺凌图片数据集。然后我们分析了数据集中的图片，并确定了与网络欺凌图片相关的因素，这些因素可以用来构建用于检测网络欺凌图片的系统。我们对网络欺凌图片的因素分析显示，与传统的冒犯性图像内容（比如暴力和裸露）不同，网络欺凌图片的因素往往具有高度的语境性。我们进一步通过测量基于确定的因素的几个分类器模型的效果来证明这些因素的有效性。关于在我们的工作中确定的网络欺凌因素，基于多模态分类的最佳分类器模型在我们的网络欺凌图片数据集上实现了平均93.36%的检测准确率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/towards-understanding-and-detecting-cyberbullying-in-real-world-images/](https://www.ndss-symposium.org/ndss-paper/towards-understanding-and-detecting-cyberbullying-in-real-world-images/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7C-4_24260_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/ndss2021_7C-4_24260_paper.pdf)
