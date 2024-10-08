# IEEE Symposium on Security and Privacy[2023]
## Scaphy: Detecting Modern ICS Attacks by Correlating Behaviors in SCADA and PHYsical.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scaphy-detecting-modern-ics-attacks-by-correlating-behaviors-in-scada-and-physical) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scaphy-detecting-modern-ics-attacks-by-correlating-behaviors-in-scada-and-physical)**
### 作者
* Moses Ike, Georgia Institute of Technology; Sandia National Laboratories
* Kandy Phan, Sandia National Laboratories
* Keaton Sadoski, Sandia National Laboratories
* Romuald Valme, Sandia National Laboratories
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 现代工业控制系统（ICS）攻击通过利用对ICS过程的了解，将其活动与良性的监控控制和数据采集（SCADA）操作相融合，从而造成了实际世界的损害，这使得现有工具无法检测。我们提出了Scaphy来通过利用SCADA的独特执行阶段来检测SCADA中的ICS攻击，以识别在不同阶段控制物理世界的有限一组合法行为，与攻击者的活动有所区别。例如，在初始化期间，SCADA通常会设置ICS设备对象，但在过程控制期间是异常的。为了提取SCADA执行阶段的独特行为，Scaphy首先利用开放的ICS约定生成一种新颖的物理过程依赖和影响图（PDIG），以识别具有破坏性的物理状态。然后，Scaphy使用PDIG来进行物理过程感知动态分析，通过诱导SCADA过程控制执行的代码路径来揭示独特于合法过程控制阶段的API调用行为。利用这种确立的行为，Scaphy有选择地监视违反合法过程控制行为的攻击者针对物理世界的活动。我们在一个美国国家实验室的ICS测试环境中对Scaphy进行了评估。与现有工作相比，在4个ICS行业的不同部署场景和攻击中，Scaphy的准确率达到了95%并且假阳性（FP）为3.5%，而现有工作的准确率为47.5%并且假阳性为25%。我们分析了Scaphy对于攻击者了解我们方法的未来攻击的抵抗能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179411/](https://ieeexplore.ieee.org/document/10179411/)
## Shedding Light on Inconsistencies in Grid Cybersecurity: Disconnects and Recommendations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#shedding-light-on-inconsistencies-in-grid-cybersecurity-disconnects-and-recommendations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#shedding-light-on-inconsistencies-in-grid-cybersecurity-disconnects-and-recommendations)**
### 作者
* Brian Singer, Carnegie Mellon University
* Amritanshu Pandey, Carnegie Mellon University
* Shimiao Li, Carnegie Mellon University
* Lujo Bauer, Carnegie Mellon University
* Craig Miller, Carnegie Mellon University
* Lawrence Pileggi, Carnegie Mellon University
* Vyas Sekar, Carnegie Mellon University
### 摘要
> 运行、学术和政策界对电力网络的威胁及可能引发的损害存在争议。例如，对MadIoT风格攻击的可行性和影响正在积极讨论之中。通过对电网专家进行调查（N=18），我们发现这种分歧不仅存在于MadIoT攻击中，还存在于多个经过充分研究的电网威胁中。根据以往的工作和我们的调查，我们假设这种分歧源于电网威胁建模中的不一致性。我们确定了建模不一致性的五个可能原因：1）使用不切实际的电网拓扑，2）假设攻击者具有不切实际的能力，3）探索电网方案过少，4）使用不完整的模拟器，忽略了相关的电网过程，以及5）使用错误的模拟器对关键电网过程进行了错误建模。为了验证这些假设，我们创建了一个建模框架，并研究这些因素如何改变我们对电网威胁的可行性和影响的理解。我们以MadIoT、虚假数据注入攻击、变电站断路器接管和发电厂接管四种不同的电网威胁作为案例研究。我们发现，我们所假设的建模不一致性的每一个原因都对攻击结果的建模产生了显著影响。例如，我们发现在实际拓扑上进行MadIoT攻击的可行性要小得多，需要远多于以前用来建模的拓扑上的高功率物联网设备。相反，我们发现在紧急情况下，变电站断路器接管攻击的可行性要大得多，并且可能比以前的建模所暗示的需要较少的变电站发生故障。我们最后提出了准确评估对电网的威胁影响的可操作建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179343/](https://ieeexplore.ieee.org/document/10179343/)
## Red Team vs. Blue Team: A Real-World Hardware Trojan Detection Case Study Across Four Modern CMOS Technology Generations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#red-team-vs-blue-team-a-real-world-hardware-trojan-detection-case-study-across-four-modern-cmos-technology-generations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#red-team-vs-blue-team-a-real-world-hardware-trojan-detection-case-study-across-four-modern-cmos-technology-generations)**
### 作者
* Endres Puschner, Max Planck Institute for Security and Privacy, Germany
* Thorben Moos, Université Catholique de Louvain, Belgium
* Steffen Becker, Max Planck Institute for Security and Privacy, Germany; Ruhr University Bochum, Germany
* Christian Kison, Bundeskriminalamt, Germany
* Amir Moradi, Université Catholique de Louvain, Belgium
* Christof Paar, Max Planck Institute for Security and Privacy, Germany
### 摘要
> 验证集成电路（ICs）中是否存在被恶意插入的木马是一项至关重要的任务，特别是对于具备安全功能的产品而言。根据具体的威胁模型，可以采用不同的技术来实现此目的。假设原始IC布局是良性且没有后门，主要的安全威胁通常被确定为外包制造和运输过程中的问题。为了确保委托芯片中不存在木马，一种直接的解决方案是将接收到的半导体器件与最初提交给晶圆厂的设计文件进行比较。显然，进行这样的比较需要先进的实验室设备和合格的专家。然而，目前人们已经很好地理解了需要对硅布局进行明显更改以检测木马的基本技术。尽管如此，目前公开描述整个过程并公开提供基础数据集的案例研究仍然非常缺乏。在这项工作中，我们旨在通过提供一个基于四种不同数字IC的公开的开放式硬件木马检测案例研究，改进当前的技术水平。在这里，红队在90纳米、65纳米、40纳米和28纳米IC的布局中创建了作为插入木马代理的小改动。蓝队的任务是通过GDSII与SEM图像进行比较，检测数字布局与制造设备之间的所有差异。蓝队能够高效地完成这个任务吗？我们的研究结果给木马搜索者带来了乐观，并回答了关于这些技术在相关IC尺寸上效率的常见问题。此外，它们还可以得出关于技术缩放对检测性能的影响的结论。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179341/](https://ieeexplore.ieee.org/document/10179341/)
## SoK: Distributed Randomness Beacons.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-distributed-randomness-beacons) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-distributed-randomness-beacons)**
### 作者
* Kevin Choi, New York University
* Aathira Manoj, New York University
* Joseph Bonneau, New York University; a16z Crypto Research
### 摘要
> 受到区块链的出现所激发和启发，最近提出了许多新的协议，用于以分布式而安全的方式生成公开可验证的随机性。这些协议在不同的设置和假设下工作，使用各种密码工具，并具有独特的权衡和特征。在本论文中，我们对分布式随机性信标（DRB）的设计以及它们所依赖的密码构件进行系统化阐述。我们评估协议的两个关键安全属性，即无偏和不可预测性，并讨论了用于预测或偏置信标输出的常见攻击向量以及协议采用的对策。我们还通过通信和计算效率对协议进行了比较。最后，我们提供了不同协议在各种部署场景中的适用性见解，并突出了进一步研究的可能方向。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179419/](https://ieeexplore.ieee.org/document/10179419/)
## WeRLman: To Tackle Whale (Transactions), Go Deep (RL).
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#werlman-to-tackle-whale-transactions-go-deep-rl) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#werlman-to-tackle-whale-transactions-go-deep-rl)**
### 作者
* Roi Bar-Zur, Technion, IC3
* Ameer Abu-Hanna, Technion
* Ittay Eyal, Technion, IC3
* Aviv Tamar, Technion
### 摘要
> 基于工作量证明的区块链协议的安全性关键依赖于激励机制。其操作者，称为矿工，通过创建包含用户生成交易的区块来获得奖励。每个区块奖励其创建者新铸造的代币以及用户支付的交易费用。如果任何一个矿工超过了计算能力的阈值比例，就会违反协议的稳定性；此时，他会受到私自挖矿的激励，从而增加自己的奖励。以往对私自挖矿策略的分析假设奖励是恒定的。但是根据运行中的系统数据统计，我们表明偶尔会出现收益异常的区块。对这种行为进行建模意味着状态空间的指数增长，这对于现有的分析工具来说是难以处理的。我们提出了WeRLman框架来分析这种模型。WeRLman使用深度强化学习（RL），受到当前最先进的AlphaGo Zero算法的启发。将AlphaGo Zero直接扩展到随机模型会导致高采样噪声，这对学习过程有害。因此，WeRLman利用系统的周期性和转换概率的先验知识，采用了新颖的方差缩减技术。通过与我们能够准确解决的模型进行评估，WeRLman在区块链的深度强化学习中实现了前所未有的准确性。我们使用WeRLman在不同情境下分析了理性矿工的激励，并提出了类似比特币的区块链的安全阈值的上限。我们首次展示了费用的变化和安全阈值之间的负相关关系。以往已知的阈值，在奖励恒定的情况下为0.25。我们表明考虑到收益异常的交易将大幅降低此阈值。特别是，对于比特币历史费用和其未来的铸币政策，其偏离阈值将分别在10年内降至0.2，20年内降至0.17，30年内降至0.12。考虑到以太坊智能合约平台最近的费用，该阈值降至0.17。这些都低于常见的大型矿工的规模。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179444/](https://ieeexplore.ieee.org/document/10179444/)
## Three Birds with One Stone: Efficient Partitioning Attacks on Interdependent Cryptocurrency Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#three-birds-with-one-stone-efficient-partitioning-attacks-on-interdependent-cryptocurrency-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#three-birds-with-one-stone-efficient-partitioning-attacks-on-interdependent-cryptocurrency-networks)**
### 作者
* Muhammad Saad, PayPal
* David Mohaisen, PayPal
### 摘要
> 加密货币节点在自治系统（ASes）间的偏向性分布增加了空间分区攻击的风险，使攻击者能够通过劫持AS前缀来隔离节点。已有的关于空间分区攻击的研究主要集中在比特币网络上，表明通过BGP劫持可以瘫痪这个重要的加密货币网络的物理拓扑。尽管BGP劫持的威胁仍然存在，但比特币和其他加密货币很少成为攻击目标，可能是由于它们的受保护的覆盖拓扑限制了物理网络异常的暴露。在本文中，我们通过考虑共享网络资源（网络相互依赖性）来研究加密货币网络的安全性，提出了一个新的视角。我们进行了超过比特币网络的测量，并分析了比特币、以太坊和瑞波节点托管模式之间的共同之处。我们观察到这三个网络都高度集中，主要共享相同的自治系统。我们还注意到，在这三种加密货币中，瑞波并没有保护其覆盖拓扑，这可以被利用来了解物理网络异常。观察到的网络异常呈现出可以同时攻击这三种加密货币的实际攻击策略。<sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">1</sup>我们通过调查最近针对知名自治系统的BGP攻击来补充我们的分析，并认识到需要应用级别的对策。我们提出了降低空间分区风险的攻击对策，尽管节点集中和网络相互依赖性不断增加。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179456/](https://ieeexplore.ieee.org/document/10179456/)
## Bitcoin-Enhanced Proof-of-Stake Security: Possibilities and Impossibilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#bitcoin-enhanced-proof-of-stake-security-possibilities-and-impossibilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#bitcoin-enhanced-proof-of-stake-security-possibilities-and-impossibilities)**
### 作者
* Ertem Nusret Tas, Stanford University
* David Tse, Stanford University
* Fangyu Gai, BabylonChain
* Sreeram Kannan, University of Washington, Seattle
* Mohammad Ali Maddah-Ali, University of Minnesota
* Fisher Yu, BabylonChain
### 摘要
> 比特币是世界上最安全的区块链，得益于其工作量证明矿工的巨大哈希算力支持。权益证明链具有高能效、快速确定性，但面临几个安全问题：易受非可削减长程安全攻击、低活跃弹性和难以从低代币估值中引导启动。我们表明，这些安全问题在没有外部可信源的任何权益证明链中都是固有的，并提出了一种新的协议Babylon，在比特币上进行现成的权益证明协议检查点，以解决这些问题。不可能性结果证明了Babylon的最优性。Babylon的一个应用案例是减少权益提取延迟：我们的实验结果显示，使用Babylon，这种延迟可以从现有的权益证明链上几周减少到不到5小时，每年仅需不到10,000美元的交易成本用于提交检查点到比特币网络上。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179426/](https://ieeexplore.ieee.org/document/10179426/)
## MEGA: Malleable Encryption Goes Awry.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mega-malleable-encryption-goes-awry) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mega-malleable-encryption-goes-awry)**
### 作者
* Matilda Backendal, ETH Zurich, Zurich, Switzerland
* Miro Haller, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, ETH Zurich, Zurich, Switzerland
### 摘要
> MEGA是一个拥有超过2.5亿用户和1000PB存储数据的领先云存储平台。MEGA声称提供用户可控的端到端安全。这通过将所有数据加密和解密操作在MEGA客户端上进行，并由仅供这些客户端访问的密钥控制，来实现。这旨在保护MEGA用户免受MEGA本身或接管了MEGA基础架构的对手的攻击。我们对MEGA在恶意服务器环境中使用密码学的情况进行了详细分析。我们提出了五种不同的对MEGA的攻击方式，这些攻击相互结合可以完全破坏用户文件的保密性。此外，用户数据的完整性受损到一定程度，攻击者可以插入他们选择的恶意文件，这些文件能够通过客户端的全部真实性检查。我们建立了所有攻击的概念验证版本。其中四种攻击非常实用。我们已经负责地向MEGA披露了所有这些攻击，并正在进行补救。综合起来，我们的攻击突显了MEGA的密码学架构存在重大缺陷。我们提出了可立即部署的对策措施，以及长期的建议。我们还对在强威胁模型下大规模部署密码学所面临的挑战进行了更广泛的讨论。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179290/](https://ieeexplore.ieee.org/document/10179290/)
## DBREACH: Stealing from Databases Using Compression Side Channels.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dbreach-stealing-from-databases-using-compression-side-channels) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dbreach-stealing-from-databases-using-compression-side-channels)**
### 作者
* Mathew Hogan, Stanford University
* Yan Michalevsky, Anjuna Security, Inc. and Cryptosat, Inc.
* Saba Eskandarian, UNC Chapel Hill
### 摘要
> 我们介绍了一种新的压缩侧信道攻击，针对同时支持数据库页面压缩和静态加密的数据库存储引擎。在只有有限间接访问加密和压缩的数据库表的情况下，我们的攻击可以高准确性地提取任意明文。我们对MariaDB和MySQL中的InnoDB存储引擎变体以及MongoDB的WiredTiger存储引擎进行了准确和高效的攻击演示。我们的攻击克服了数据库环境中独特的障碍，使得之前用于攻击TLS的技术变得无效。与网络环境不同，在网络环境中，可以观察到压缩和加密消息的准确长度，而我们只利用从磁盘文件大小中获得的近似密文大小信息。我们放大这个嘈杂的信号，并将其与针对数据库环境的新攻击启发式相结合，以提取秘密明文。我们的攻击可以以90%以上的准确率检测出一个随机字符串是否出现在表中，并以95%以上的成功率从加密表中提取出10个字符的随机字符串。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179359/](https://ieeexplore.ieee.org/document/10179359/)
## Weak Fiat-Shamir Attacks on Modern Proof Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#weak-fiat-shamir-attacks-on-modern-proof-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#weak-fiat-shamir-attacks-on-modern-proof-systems)**
### 作者
* Quang Dao, Carnegie Mellon University
* Jim Miller, Trail of Bits
* Opal Wright, Trail of Bits
* Paul Grubbs, University of Michigan
### 摘要
> 研究人员和实践者中产生了一系列激动人心的事情，他们使用了一些新颖的技术理念建立了现代证明系统，并在加密货币领域得到了快速应用。这些现代证明系统中，大部分都使用了菲亚特-沙米尔（F-S）转换，这是一种去除协议中与公共币验证器的互动的基础方法。先前的研究表明，错误地应用F-S（即使用所谓的“弱”F-S转换）可能会导致对Schnorr的离散对数证明等经典协议的破解，然而，目前对于错误地应用F-S对于现代证明系统的风险了解甚少。本文通过广泛的理论和实践研究来填补这一知识空白，研究了F-S在现代证明系统的实现中的应用。我们对开源实现进行了调查，并发现了30个弱F-S实现，涉及12个不同的证明系统。对于其中的四个系统（Bulletproofs、Plonk、Spartan和Wesolowski的VDF），我们开发了新颖的知识完备性攻击，并给出了其有效性的严谨证明。我们进行了应用案例研究，展示了使用易受攻击实现的应用可能导致私有智能合约平台上无限货币的创建。最后，我们讨论了学术界和实践者可能的缓解措施和收获。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179408/](https://ieeexplore.ieee.org/document/10179408/)
## Attitudes towards Client-Side Scanning for CSAM, Terrorism, Drug Trafficking, Drug Use and Tax Evasion in Germany.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#attitudes-towards-client-side-scanning-for-csam-terrorism-drug-trafficking-drug-use-and-tax-evasion-in-germany) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#attitudes-towards-client-side-scanning-for-csam-terrorism-drug-trafficking-drug-use-and-tax-evasion-in-germany)**
### 作者
* Lisa Geierhaas, University of Bonn
* Fabian Otto, OmniQuest
* Maximilian Häring, University of Bonn
* Matthew Smith, Fraunhofer FKIE, University of Bonn
### 摘要
> 近年来，各地法规制定机构和技术措施建议出现了越来越多的数量来削弱保护隐私的技术，以应对诸如儿童虐待等严重犯罪。其中一项提议措施是客户端扫描（CSS）。关于CSS，苹果公司表示将在2021年部署它，同时欧盟于2022年提出了相应的立法，这引发了激烈的争议。双方都声称自己是在为人民的最大利益而努力。为了阐明这个问题，我们对德国公民进行了一项调查。我们调查了德国人民对于客户端扫描和基于云的扫描在不同类型犯罪中的普遍接受程度，并分析了对德国政府、谷歌和苹果等公司的信任如何影响参与者的观点。我们发现，总体上来说，大多数参与者愿意接受客户端扫描措施来打击儿童虐待或恐怖主义等严重犯罪，但对于其他非法活动，支持率显著下降。然而，支持客户端扫描的多数参与者也对潜在滥用表示担忧，只有20%表示他们不担心。这些结果表明，我们的许多参与者愿意让他们的设备进行扫描，并在希望帮助执法部门的同时接受一些风险。在我们的分析中，我们认为这并不是无限制引入客户端扫描的理由，而是对安全与隐私社区的呼吁。需要进行更多的研究，以了解如何在减轻对隐私和社会的风险的同时，实现人们对于在线严重犯罪预防的愿望。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179417/](https://ieeexplore.ieee.org/document/10179417/)
## Deep perceptual hashing algorithms with hidden dual purpose: when client-side scanning does facial recognition.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#deep-perceptual-hashing-algorithms-with-hidden-dual-purpose-when-client-side-scanning-does-facial-recognition) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#deep-perceptual-hashing-algorithms-with-hidden-dual-purpose-when-client-side-scanning-does-facial-recognition)**
### 作者
* Shubham Jain, Imperial College London
* Ana-Maria Creţu, Imperial College London
* Antoine Cully, Imperial College London
* Yves-Alexandre de Montjoye, Imperial College London
### 摘要
> 端到端加密（E2EE）为个人提供了强大的技术保护，防止了对个人的干扰。然而，世界各国的政府和执法机构也提出担忧，认为E2EE也可能让非法内容在不被察觉的情况下进行分享。客户端扫描（CSS）使用感知哈希（PH）来检测已知的非法内容，被视为一种有前途的解决方案，可以在保留加密的同时防止非法内容的传播。虽然这些提议引发了强烈的隐私关切，但解决方案的支持者提出风险有限，因为该技术的范围有限，只能检测已知的非法内容。在本文中，我们展示了现代感知哈希算法实际上是相当灵活的技术，并且这种灵活性可以被对手利用，向客户端扫描系统添加一个次要的隐藏特性。具体而言，我们展示了对手提供的PH算法可以“隐藏”目标个体的副要素，即面部识别，同时保持其主要目的，即图像复制检测。首先，我们提出了一个过程，通过联合优化图像复制检测和目标面部识别任务，训练一个双重用途的深感知哈希模型。其次，我们对双重用途模型进行了广泛评估，并证明它能够可靠地识别目标个体，成功率达到67%，同时不影响其检测非法内容的性能。我们还证明了我们的模型既不是一般的人脸检测模型，也不是人脸识别模型，从而隐藏了其次要目的。最后，我们展示了通过向数据库添加一张非法外观的图片可以启用次要目的。综上所述，我们的研究结果引发了担忧，即基于深感知哈希的CSS系统可能会将数十亿用户设备变成定位目标个体的工具。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179310/](https://ieeexplore.ieee.org/document/10179310/)
## Public Verification for Private Hash Matching.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#public-verification-for-private-hash-matching) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#public-verification-for-private-hash-matching)**
### 作者
* Sarah Scheffler, Princeton University
* Anunay Kulshrestha, Princeton University
* Jonathan Mayer, Princeton University
### 摘要
> 端到端加密（E2EE）阻止在线服务访问用户内容。这种重要的安全属性也是涉及内容分析的内容审核方法的障碍。E2EE与打击儿童色情滥用材料（CSAM）的努力之间的紧张关系已经成为加密政策的全球焦点，因为检测有害内容的主要方法 - 在明文图像上进行服务器端感知哈希匹配 - 不可用。最近应用密码学的进展实现了私密哈希匹配（PHM），其中一个服务可以将用户内容与已知的CSAM图像集进行匹配，而不会向用户透露哈希集，也不会将不匹配的内容透露给服务。这些设计，特别是针对苹果iCloud照片服务中识别CSAM的的2021年提案，因为存在安全、隐私和自由表达方面的风险而受到广泛批评。
> 
> 在这项工作中，我们旨在通过为公众贡献新的密码学方法来推动关于PHM的学术研究和对话。我们从动机开始，描述了利用PHM来检测CSAM的理由，以及其部署所面临的严重社会和技术问题。验证可以在一定程度上解决PHM的缺点，并将批评系统化为两个方面的审计：哈希集的信任和实现的信任。我们解释了，虽然这两个问题无法完全通过技术解决，但可能存在加密信任的改进。
> 
> 本文的核心贡献是新的密码学协议，实现了三种PHM系统的公众验证：（1）外部组织批准哈希集的认证，（2）证明特定合法内容不在哈希集中，以及（3）最终向用户通知误报匹配。我们描述的协议是实用、高效且与现有的PHM结构兼容的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179349/](https://ieeexplore.ieee.org/document/10179349/)
## Is Cryptographic Deniability Sufficientƒ Non-Expert Perceptions of Deniability in Secure Messaging.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#is-cryptographic-deniability-sufficient-non-expert-perceptions-of-deniability-in-secure-messaging) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#is-cryptographic-deniability-sufficient-non-expert-perceptions-of-deniability-in-secure-messaging)**
### 作者
* Nathan Reitinger, University of Maryland
* Nathan Malkin, University of Maryland
* Omer Akgul, University of Maryland
* Michelle L. Mazurek, University of Maryland
* Ian Miers, University of Maryland
### 摘要
> 加密学家长期以来一直关注威胁否认性的安全通信协议。许多通信协议（包括令人惊讶的现代电子邮件）都包含可以明确将作者与消息联系起来的数字签名。如果被窃取或泄露，这些签名会使否认作者的可能性变为不可能。正如希拉里·克林顿2016年美国总统竞选期间泄露事件所展示的那样，这种关注是有充分根据的。否认性协议旨在避免这种结果发生，让政治家和持不同政见者都能够安全地否认自己的作者身份。尽管否认性协议已在数十亿台设备上部署了Signal和WhatsApp，但此类协议在说服人们方面的有效性仍未经研究。虽然在有效的否认中明显缺乏加密证据是必要的，但它是否足够呢？我们进行了一项调查研究（n = 1,200），以了解人们对与加密通信协议相关的可否认性证据的看法。令人惊讶的是，在一个充斥着“假新闻”和Photoshop的世界中，我们发现单纯的消息作者身份否认，在法庭环境中呈现且没有支持证据的情况下，是不起作用的。相反，那些可以访问屏幕截图伪造工具或者被告知该工具存在的参与者更有可能相信这种否认。同样，尽管效果较弱，但我们发现专家加密学家断言没有证据也是有效的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179361/](https://ieeexplore.ieee.org/document/10179361/)
## On the Evolution of (Hateful) Memes by Means of Multimodal Contrastive Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-evolution-of-hateful-memes-by-means-of-multimodal-contrastive-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-evolution-of-hateful-memes-by-means-of-multimodal-contrastive-learning)**
### 作者
* Yiting Qu, CISPA Helmholtz Center for Information Security
* Xinlei He, CISPA Helmholtz Center for Information Security
* Shannon Pierson, London School of Economics and Political Science
* Michael Backes, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Savvas Zannettou, Delft University of Technology
### 摘要
> 在社交媒体平台和现实世界中，恶意互联网迷因的传播产生了不利影响。检测恶意互联网迷因具有挑战性，原因之一是迷因的进化性质；新的恶意互联网迷因可以通过将恶意内涵与其他文化观念或符号融合而产生。本文提出了一个框架，利用多模态对比学习模型（尤其是OpenAI的CLIP）来识别恶意内容的目标，并系统地调查恶意互联网迷因的演变。我们发现CLIP生成的嵌入向量中存在着语义规律，这些规律描述了同一模态（图片）内或跨模态（图片和文本）内的语义关系。利用这一特性，我们研究了如何通过组合多张图片的视觉元素或将文本信息与恶意图片融合来创建恶意互联网迷因。通过重点研究反犹太主义互联网迷因，特别是“快乐商人”迷因，我们展示了我们的框架分析恶意互联网迷因演变的能力。在从4chan提取的数据集上使用我们的框架，我们发现了3.3K个“快乐商人”迷因的变种，并与特定国家、人物或组织联系在一起。我们设想我们的框架可以用于帮助人类审查员标记新的恶意迷因变种，以便审查员能够手动验证它们，并减轻网络恶意内容的问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179315/](https://ieeexplore.ieee.org/document/10179315/)
## Lambretta: Learning to Rank for Twitter Soft Moderation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#lambretta-learning-to-rank-for-twitter-soft-moderation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#lambretta-learning-to-rank-for-twitter-soft-moderation)**
### 作者
* Pujan Paudel, Boston University
* Jeremy Blackburn, Binghamton University
* Emiliano De Cristofaro, University College London
* Savvas Zannettou, Delft University of Technology
* Gianluca Stringhini, Boston University
### 摘要
> 为了解决虚假信息的问题，Twitter等社交媒体平台开始给谈论已经辟谣的故事的内容添加警示标签，目的是为受众提供更多背景信息。不幸的是，这些标签没有得到统一应用，导致大量虚假内容未经审核。本文介绍了LAMBRETTA，这是一个利用学习排序（LTR）自动识别软审查候选推文的系统。我们在Twitter数据上运行Lambretta来审查与2020年美国选举有关的虚假声明，并发现它标记的推文比Twitter多20多倍，仅有3.93%的错误阳性和18.81%的错误阴性，优于基于关键词提取和语义搜索的其他最先进方法。总体而言，LAMBRETTA有助于社交媒体上的人工审核员识别和标记虚假信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179392/](https://ieeexplore.ieee.org/document/10179392/)
## SoK: Let the Privacy Games Begin! A Unified Treatment of Data Inference Privacy in Machine Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-let-the-privacy-games-begin-a-unified-treatment-of-data-inference-privacy-in-machine-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-let-the-privacy-games-begin-a-unified-treatment-of-data-inference-privacy-in-machine-learning)**
### 作者
* Ahmed Salem, Microsoft
* Giovanni Cherubin, Microsoft
* David Evans, University of Virginia
* Boris Köpf, Microsoft
* Andrew Paverd, Microsoft
* Anshuman Suri, University of Virginia
* Shruti Tople, Microsoft
* Santiago Zanella-Béguelin, Microsoft
### 摘要
> 在生产中部署机器学习模型可能会使敌对方推断出有关训练数据的敏感信息。有丰富的文献分析了不同类型的推断风险，从成员推断到重构攻击不一而足。受到使用游戏（即概率实验）研究密码学安全属性的成功启发，一些作者用类似的基于游戏的风格描述机器学习中的隐私推断风险。然而，敌对能力和目标的表述方式往往在不同的演示中略有不同，这使得难以相关和组成结果。在本文中，我们提出了一个基于游戏的框架，以系统化机器学习中有关隐私推断风险的知识体系。我们利用这个框架来（1）为推断风险的定义提供统一的结构，（2）正式建立已知定义之间的关系，以及（3）揭示迄今为止可能难以发现的未知关系。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179281/](https://ieeexplore.ieee.org/document/10179281/)
## Analyzing Leakage of Personally Identifiable Information in Language Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#analyzing-leakage-of-personally-identifiable-information-in-language-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#analyzing-leakage-of-personally-identifiable-information-in-language-models)**
### 作者
* Nils Lukas, University of Waterloo
* Ahmed Salem, Microsoft Research
* Robert Sim, Microsoft Research
* Shruti Tople, Microsoft Research
* Lukas Wutschitz, Microsoft Research
* Santiago Zanella-Béguelin, Microsoft Research
### 摘要
> 语言模型（LMs）已被证明能通过句子级成员推断和重构攻击泄露训练数据信息。对LMs泄露个人身份信息（PII）的风险的理解较少，这可以归因于错误的假设，即数据集处理技术，如清洗，足以防止PII泄露。清洗技术可以减少PII泄露的风险，但无法完全防止：在实践中，清洗是不完美的，必须在最小化泄露和保持数据集效用之间权衡。另一方面，尚不清楚旨在保证句子级或用户级隐私的差分隐私等算法防御措施是否能防止PII泄露。在这项工作中，我们引入了三种类型的PII泄露的严格基于博弈的定义，通过黑盒提取，推断和重构攻击仅使用LM的API访问。我们通过对三个领域的GPT-2模型进行实证评估，这些领域分别是案例法、医疗保健和电子邮件。我们的主要贡献是（i）能够提取比现有攻击多多达10倍的PII序列的新型攻击，（ii）显示句子级差分隐私减少PII泄露的风险，但仍泄露约3％的PII序列，以及（iii）详细解释了记录级成员推断与PII重构之间的微妙联系。可在https://github.com/microsoft/analysing_pii_leakage获取复制所有实验的代码。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179300/](https://ieeexplore.ieee.org/document/10179300/)
## Accuracy-Privacy Trade-off in Deep Ensemble: A Membership Inference Perspective.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#accuracy-privacy-trade-off-in-deep-ensemble-a-membership-inference-perspective) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#accuracy-privacy-trade-off-in-deep-ensemble-a-membership-inference-perspective)**
### 作者
* Shahbaz Rezaei, University of California, Davis, CA, USA
* Zubair Shafiq, University of California, Davis, CA, USA
* Xin Liu, University of California, Davis, CA, USA
### 摘要
> 深度集成学习已经被证明通过训练多个神经网络并平均它们的输出来提高准确性。集成学习也被认为可以抵御破坏隐私的成员推断攻击。在本文中，我们通过实证方法展示了这两个目标之间的权衡，即准确性和隐私（以成员推断攻击为标准）在深度集成中的关系。我们使用了各种数据集和模型架构，展示了集成提高准确性时，成员推断攻击的有效性也增加的情况。我们分析了深度集成中各种因素的影响，并展示了权衡的根本原因。然后，我们评估了基于正则化和差分隐私的常见成员推断攻击防御方法。我们发现，虽然这些防御方法可以减轻成员推断攻击的有效性，但同时也降低了集成的准确性。我们还展示了更先进、最新的集成技术（如快照集成和多样化集成网络）中存在类似的权衡。最后，我们提出了一种简单而有效的深度集成防御方法，打破了这种权衡，从而同时提高了准确性和隐私。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179463/](https://ieeexplore.ieee.org/document/10179463/)
## D-DAE: Defense-Penetrating Model Extraction Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#d-dae-defense-penetrating-model-extraction-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#d-dae-defense-penetrating-model-extraction-attacks)**
### 作者
* Yanjiao Chen, School of Computer Science, Wuhan University, China
* Rui Guan, School of Mathematics and Statistics, Wuhan University, China
* Xueluan Gong, School of Computer Science, Wuhan University, China
* Jianshuo Dong, School of Cyber Science and Engineering, Wuhan University, China
* Meng Xue, School of Computer Science, Wuhan University, China
### 摘要
> 最近的研究显示，机器学习模型容易受到模型提取攻击的影响，其中对手通过查询受害模型仅仅构建一个相似性能的替代模型。为了抵御此类攻击，提出了一系列方法，在返回结果给潜在攻击者之前破坏查询结果，显著降低现有模型提取攻击的性能。在本文中，我们首次尝试开发一种名为D-DAE的穿透式防御模型提取攻击框架，旨在突破基于破坏的防御机制。D-DAE的关键所在是设计两个模块，即破坏检测和破坏恢复，它们可以与通用模型提取攻击相结合。具体而言，通过从受害模型获取查询结果后，破坏检测模块推断出防御者采用的防御机制。我们设计了一种基于元学习的破坏检测算法，用于学习破坏和未破坏查询结果分布之间的根本差异。即使我们无法访问受害模型的原始训练数据集，该算法也具有良好的泛化性能。在检测到防御机制后，破坏恢复模块尝试利用设计精良的生成模型从破坏的查询结果中恢复出干净的查询结果。我们在MNIST、FashionMNIST、CIFAR-10、GTSRB和ImageNette数据集上进行了大量评估，结果表明，在面对4种最先进的防御机制和多种组合防御时，D-DAE可以将现有模型提取攻击的替代模型准确率提高多达82.24%。我们还验证了D-DAE在穿透微软Azure和Face++等托管的真实API未知防御方面的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179406/](https://ieeexplore.ieee.org/document/10179406/)
## SNAP: Efficient Extraction of Private Properties with Poisoning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#snap-efficient-extraction-of-private-properties-with-poisoning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#snap-efficient-extraction-of-private-properties-with-poisoning)**
### 作者
* Harsh Chaudhari, Northeastern University
* John Abascal, Northeastern University
* Alina Oprea, Northeastern University
* Matthew Jagielski, Google Research
* Florian Tramèr, ETH Zurich
* Jonathan Ullman, Northeastern University
### 摘要
> 属性推断攻击允许对手从机器学习模型中提取训练数据集的全局属性。这些攻击对于共享数据集来训练机器学习模型的数据所有者具有隐私影响。已经提出了几种针对深度神经网络的属性推断攻击的现有方法[1] - [3]，但它们都依赖于攻击者训练大量的影子模型，这会引起大量的计算开销。在本文中，我们考虑了属性推断攻击的设置，其中攻击者可以污染训练数据集的子集并查询训练后的目标模型。在针对中毒的模型置信度的理论分析的基础上，我们设计了一种高效的属性推断攻击SNAP，它比Mahloujifar等人 [3] 的目前最先进的基于中毒的属性推断攻击获得更高的攻击成功率，并且需要更少的中毒数量。例如，在Census数据集上，SNAP的成功率比[3]高34%，同时速度快56.5倍。我们还扩展了我们的攻击，以推断在训练期间某个属性是否存在，并高效地估计感兴趣属性的准确比例。我们在四个数据集中评估了我们的攻击，并展示了SNAP的普遍性和有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179334/](https://ieeexplore.ieee.org/document/10179334/)
## On the (In)security of Peer-to-Peer Decentralized Machine Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-in-security-of-peer-to-peer-decentralized-machine-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-in-security-of-peer-to-peer-decentralized-machine-learning)**
### 作者
* Dario Pasquini, SPRING Lab, EPFL, Switzerland
* Mathilde Raynal, SPRING Lab, EPFL, Switzerland
* Carmela Troncoso, SPRING Lab, EPFL, Switzerland
### 摘要
> 在这项工作中，我们进行了第一次深度隐私分析，研究了去中心化学习（Decentralized Learning）——一种集体机器学习框架，旨在解决联邦学习的主要局限性。我们提出了一套新颖的攻击方法，可以对去中心化对手进行被动和主动攻击。我们证明，与去中心化学习提案者所声称的相反，去中心化学习并不比联邦学习提供任何安全优势。相反，它增加了攻击表面，使系统中的任何用户能够进行隐私攻击，如梯度反演，甚至完全控制诚实用户的本地模型。我们还表明，鉴于现有的保护技术水平，隐私保护配置的去中心化学习需要全连接网络，失去了与联邦设置相比的任何实际优势，完全违背了去中心化方法的目标。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179291/](https://ieeexplore.ieee.org/document/10179291/)
## Vectorized Batch Private Information Retrieval.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#vectorized-batch-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#vectorized-batch-private-information-retrieval)**
### 作者
* Muhammad Haris Mughees, University of Illinois at Urbana-Champaign
* Ling Ren, University of Illinois at Urbana-Champaign
### 摘要
> 本文研究批量私密信息检索（Batch Private Information Retrieval，BatchPIR），这是私密信息检索（Private Information Retrieval，PIR）的一种变体，客户端希望一次性从服务器中检索多个条目。BatchPIR适用于许多实际应用场景，并且在每次查询的平摊成本方面具有显著的效率改进潜力。现有的BatchPIR方案已经实现了不错的计算效率，但在沟通效率方面一直无法提高。通过使用向量化同态加密，我们提出了第一个既在计算效率又在沟通效率上都高效的BatchPIR协议，适用于各种数据库配置。具体而言，对于从一个包含一百万个条目，每个条目256字节的数据库中检索256个条目的批处理，我们的方案的沟通成本比现有的最先进解决方案提高了7.5倍至98.5倍。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179329/](https://ieeexplore.ieee.org/document/10179329/)
## RoFL: Robustness of Secure Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rofl-robustness-of-secure-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rofl-robustness-of-secure-federated-learning)**
### 作者
* Hidde Lycklama, ETH Zurich
* Lukas Burkhalter, ETH Zurich
* Alexander Viand, ETH Zurich
* Nicolas Küchler, ETH Zurich
* Anwar Hithnawi, ETH Zurich
### 摘要
> 近年来，许多攻击揭示了联邦学习（FL）中存在的严重漏洞，但对于这些攻击的成因以及如何有效应对仍缺乏整体的理解。本文揭示了现有（有针对性）攻击的内在机制，提供了关于为何存在这些攻击以及为何对FL的稳健性没有明确解决方案的新见解。我们展示了机器学习算法需要记忆尾数据的需求对FL的完整性产生重要影响。此现象在隐私背景下已经得到了广泛研究，我们的分析为其对机器学习完整性的影响提供了新的启示。我们展示了一些严重攻击可以通过强制实施诸如对客户端更新的范数约束等限制来有效缓解。我们研究了如何在单服务器设置中高效地将这些约束纳入安全FL协议之中。基于此，我们提出了RoFL，一个新的安全FL系统，通过保护隐私的输入验证来扩展安全聚合。具体而言，RoFL可以对高维加密模型更新施加诸如L<inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</inf>和L<inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">∞</inf>边界的约束。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179400/](https://ieeexplore.ieee.org/document/10179400/)
## Flamingo: Multi-Round Single-Server Secure Aggregation with Applications to Private Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#flamingo-multi-round-single-server-secure-aggregation-with-applications-to-private-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#flamingo-multi-round-single-server-secure-aggregation-with-applications-to-private-federated-learning)**
### 作者
* Yiping Ma, University of Pennsylvania
* Jess Woods, University of Pennsylvania
* Sebastian Angel, University of Pennsylvania; Microsoft Research
* Antigoni Polychroniadou, J.P. Morgan AI Research & AlgoCRYPT CoE
* Tal Rabin, University of Pennsylvania
### 摘要
> 本文介绍了Flamingo，这是一个用于安全聚合大量客户端数据的系统。在安全聚合中，服务器对客户端的私有输入进行求和，并在获得最终求和结果时不会知道关于个别输入的任何信息，除非这些信息可以通过最终求和结果推导出来。Flamingo专注于联邦学习中的多轮设置，其中需要多次连续求和（平均），以得到一个好的模型。以往的协议（如Bell等人的CCS '20论文）设计用于单轮，通过多次重复协议来适应联邦学习环境。Flamingo消除了以往协议每轮设置的需求，并引入了一种新的轻量级失效容忍协议，以确保在客户端在求和过程中离开时，服务器仍然能够得到有意义的结果。此外，Flamingo还引入了一种新的方式来本地选择由Bell等人引入的客户端邻域。这些技术有助于Flamingo减少客户端与服务器之间的交互次数，从而显著减少完整训练会话的端到端运行时间。我们实现和评估了Flamingo，并展示它可以安全地在（扩展的）MNIST和CIFAR-100数据集上训练神经网络，并且与非隐私联邦学习系统相比，模型的收敛性没有损失。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179434/](https://ieeexplore.ieee.org/document/10179434/)
## SoK: Cryptographic Neural-Network Computation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-cryptographic-neural-network-computation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-cryptographic-neural-network-computation)**
### 作者
* Lucien K. L. Ng, Georgia Institute of Technology
* Sherman S. M. Chow, The Chinese University of Hong Kong
### 摘要
> 我们在2016年至2022年研究了53篇基于密码学的隐私保护神经网络论文（不涉及可信处理器或差分隐私），其中16篇仅使用同态加密技术，19篇在推理中使用安全计算，而18篇使用不合谋的服务器（其中有12篇支持训练），解决了各种各样的研究问题。我们对它们的密码学技术进行了剖析，并深入研究了它们与机器学习的“爱恨关系”，同时突出了一些值得关注的发展历程。我们还重新评估了广域网环境下的最新技术水平。我们希望这篇论文能够成为一个指南，连接相关领域的不同专家。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179483/](https://ieeexplore.ieee.org/document/10179483/)
## FLUTE: Fast and Secure Lookup Table Evaluations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#flute-fast-and-secure-lookup-table-evaluations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#flute-fast-and-secure-lookup-table-evaluations)**
### 作者
* Andreas Brüggemann, Technical University of Darmstadt, Germany
* Robin Hundt, Technical University of Darmstadt, Germany
* Thomas Schneider, Technical University of Darmstadt, Germany
* Ajith Suresh, Technical University of Darmstadt, Germany
* Hossein Yalame, Technical University of Darmstadt, Germany
### 摘要
> 查找表（Lookup Tables，LUTs）代替布尔电路的概念已经广为人知，并已在各种应用中得到广泛应用，包括FPGAs、图像处理和数据库管理系统。在密码学中，使用这种LUT而不是传统的AND和XOR门可以得到更紧凑的电路，并且已经证明在进行安全多方计算时可以显著提高在线性能。最近几项关于安全浮点计算和保护隐私的机器学习推断的研究工作严重依赖于现有的LUT技术。然而，它们要么在设置阶段有很大的开销，要么在线性能不佳。我们提出了一种名为FLUTE的新型安全LUT评估协议，具有良好的设置和在线性能。在双方设置下，我们展示了FLUTE在在线性能上与所有先前方法相匹配甚至超越，并且在整体性能上与最好的先前LUT协议相竞争。此外，我们提供了一个用Rust编程语言编写的FLUTE的开源实现，以及ABY2.0和silent OT的布尔安全双方计算协议的实现。我们发现，在在线阶段，FLUTE相比现有技术在性能方面提高了两个数量级，同时保持类似的总通信。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179345/](https://ieeexplore.ieee.org/document/10179345/)
## Bicoptor: Two-round Secure Three-party Non-linear Computation without Preprocessing for Privacy-preserving Machine Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#bicoptor-two-round-secure-three-party-non-linear-computation-without-preprocessing-for-privacy-preserving-machine-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#bicoptor-two-round-secure-three-party-non-linear-computation-without-preprocessing-for-privacy-preserving-machine-learning)**
### 作者
* Lijing Zhou, Huawei Technology, Shanghai, China
* Ziyu Wang, Huawei Technology, Shanghai, China
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Qingrui Song, Huawei Technology, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 非线性函数的开销主导了基于安全多方计算（MPC）的隐私保护机器学习（PPML）的性能。本研究介绍了一种新的安全三方计算（3PC）协议族Bicoptor，其提高了评估非线性函数的效率。Bicoptor的基础是一种新的符号确定协议，该协议利用SecureML（S&P 2017）中提出的截断协议进行巧妙处理。我们的3PC符号确定协议仅需要两轮通信，并且不涉及任何预处理。这种符号确定协议非常适合在PPML中计算非线性函数，例如激活函数ReLU、Maxpool及其变体。我们为这些非线性函数开发了适当的协议，形成了一族适用于GPU的协议Bicoptor。所有的Bicoptor协议仅需要两轮通信，无需预处理。我们在公共云上的3方局域网网络下评估了Bicoptor，并实现了每秒370,000个DReLU/ReLU或41,000个Maxpool（找到九个输入中的最大值）操作。在相同的设置和环境下，我们的ReLU协议相比最先进的作品Falcon（PETS 2021）或Edabits（CRYPTO 2020），无需批处理，改进了一个甚至两个数量级。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179449/](https://ieeexplore.ieee.org/document/10179449/)
## Investigating the Password Policy Practices of Website Administrators.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#investigating-the-password-policy-practices-of-website-administrators) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#investigating-the-password-policy-practices-of-website-administrators)**
### 作者
* Sena Sahin, Georgia Institute of Technology
* Suood Al Roomi, Georgia Institute of Technology; Kuwait University
* Tara Poteat, Georgia Institute of Technology
* Frank Li, Georgia Institute of Technology
### 摘要
> 密码是当前在线身份验证的事实标准，很可能在可预见的未来仍然如此。因此，安全界一直在广泛探讨用户对密码的使用行为，提出了促进用户密码安全性和可用性的密码策略建议。然而，网站管理员必须采纳这些建议，以实际改善在线身份验证。迄今为止，对网站管理员如何管理其网站的密码策略的调查有限。为了在大规模上改进在线身份验证，我们必须了解这一特定人群行为和决策背后的因素，以及如何帮助管理员部署更安全的密码策略。本文中，我们探讨了网站管理员确定其采用的密码策略的方式，影响策略演变的考虑因素，以及管理员在管理网站策略时遇到的挑战。为此，我们通过在线调查和深入半结构化访谈与有管理网站密码策略直接经验的美国11位网站管理员进行了研究。通过我们的定性研究，我们确定了一小部分关键因素，这些因素驱动了大部分密码策略决策，并阻碍管理员实施与现代指南更一致的策略。展望未来，我们提出了未来研究和社区行动的方向，这可能有助于管理员更有效地管理密码策略。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179288/](https://ieeexplore.ieee.org/document/10179288/)
## "In Eighty Percent of the Cases, I Select the Password for Them": Security and Privacy Challenges, Advice, and Opportunities at Cybercafes in Kenya.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#in-eighty-percent-of-the-cases-i-select-the-password-for-them-security-and-privacy-challenges-advice-and-opportunities-at-cybercafes-in-kenya) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#in-eighty-percent-of-the-cases-i-select-the-password-for-them-security-and-privacy-challenges-advice-and-opportunities-at-cybercafes-in-kenya)**
### 作者
* Collins W. Munyendo, The George Washington University
* Yasemin Acar, The George Washington University; Paderborn University
* Adam J. Aviv, The George Washington University
### 摘要
> 在发展中国家，网络咖啡馆仍然是访问互联网的一种流行方式，因为许多用户仍然无法拥有个人电脑。伴随着最近政府服务的数字化，例如在肯尼亚，许多用户已经转向网络咖啡馆以获得必需的服务。许多这些用户可能从未使用过电脑，并在网络咖啡馆面临着重大的安全和隐私问题。然而，这些挑战以及提供的建议在很大程度上尚未得到探索。本研究通过对肯尼亚的36个半结构化访谈（包括与网络咖啡馆经理进行的14个访谈和与顾客进行的22个访谈）来调查网络咖啡馆经营者在网络咖啡馆中提供的安全建议和支持，以解决这些挑战。我们发现，网络咖啡馆通过提供打印和政府服务的方式在肯尼亚发挥着重要的作用。然而，大多数顾客在使用电脑以及创建账户和管理密码时面临挑战。为了解决这个问题，顾客经常依靠网络咖啡馆经理的支持和建议，他们大多数时候指导顾客使用容易记住的密码，例如使用他们的国民身份证号码或姓名。一些经理甚至直接管理他们顾客的密码，其中一个甚至为他们所有的顾客使用相同的密码。这些结果表明需要加强对基于手机的密码管理器的认知，同时需要为这些用户提供计算机培训和安全意识。还有一个需要探索的问题是，在支持更广泛人群的同时，需要超越西方边缘，探索安全和隐私建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179410/](https://ieeexplore.ieee.org/document/10179410/)
## Towards a Rigorous Statistical Analysis of Empirical Password Datasets.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#towards-a-rigorous-statistical-analysis-of-empirical-password-datasets) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#towards-a-rigorous-statistical-analysis-of-empirical-password-datasets)**
### 作者
* Jeremiah Blocki, Purdue University
* Peiyuan Liu, Purdue University
### 摘要
> 密码安全领域的一个核心挑战是确定攻击者的猜测曲线，即攻击者在前G次猜测内能够破解一个随机用户密码的概率。关键问题在于，猜测曲线取决于攻击者的猜测策略和用户密码的分布，这两者对我们来说都是未知的。本研究旨在遵循凯克霍夫原则，分析一个理想攻击者在了解密码分布的情况下的性能。设λ <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">G</inf>表示这样一个攻击者在G次猜测内能够破解一个随机用户密码的概率。我们开发了多种统计学上严格的技术，用于上界和下界估计给定从未知密码分布${\mathcal{P}}$中独立取样得到的N个样本的λ <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">G</inf>。我们证明了我们对λ <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">G</inf>的上界/下界具有很高的置信度，并将我们的技术应用于分析八个大型密码数据集。我们的实证分析表明，即使是最先进的密码破解模型在猜测效率上通常也远远低于一个能够根据对密码分布（部分）了解进行优化攻击的攻击者。我们还将我们的统计工具应用于重新审视密码分布的不同模型，包括经验密码分布和齐普夫分布。我们发现，当猜测次数G不是太大（即G ≪ N）时，经验分布与我们对λ <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">G</inf>的上界/下界非常相近。然而，对于较大的G值，我们的实证分析严格证明了经验分布（或齐普夫分布）高估了攻击者的成功率。我们应用我们的统计技术来上界/下界估计用于减少攻击者猜测次数G的密码节流机制（密钥延展）的有效性。最后，如果我们愿意对用户对密码限制的响应方式做出额外的假设，我们可以利用我们的统计技术评估各种限制用户选择的密码组成策略的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179431/](https://ieeexplore.ieee.org/document/10179431/)
## Confident Monte Carlo: Rigorous Analysis of Guessing Curves for Probabilistic Password Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#confident-monte-carlo-rigorous-analysis-of-guessing-curves-for-probabilistic-password-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#confident-monte-carlo-rigorous-analysis-of-guessing-curves-for-probabilistic-password-models)**
### 作者
* Peiyuan Liu, Computer Science Department, Purdue University, West Lafayette, IN, USA
* Jeremiah Blocki, Computer Science Department, Purdue University, West Lafayette, IN, USA
* Wenjie Bai, Computer Science Department, Purdue University, West Lafayette, IN, USA
### 摘要
> 在密码安全中，防御者希望识别并警告使用弱密码的用户。同样，防御者可能还想预测在攻击者的猜测预算B从小（在线攻击者）变大（离线攻击者）的情况下，会有多少密码会在B次猜测中被破解。为了实现这些目标，防御者希望能够快速估计每个用户密码pwd的猜测次数，假设攻击者使用密码破解模型M，即攻击者在破解每个用户密码pwd之前会检查多少个密码猜测。由于朴素的暴力枚举在猜测次数非常大时可能代价过高，Dell'Amico和Filippone [1]开发了一种高效的蒙特卡罗算法来估计给定密码pwd的猜测次数。虽然Dell'Amico和Filippone证明了他们的估计值是无偏的，但并不能保证蒙特卡罗估计的准确性，也不能提供估计的猜测次数的置信区间，甚至不能指示是否存在更高程度的不确定性。我们的贡献如下：首先，我们确定了一些理论例子，在这些例子中，蒙特卡罗强度估计以极高的概率产生高度不准确的个体猜测次数估计以及整个猜测曲线的估计。其次，我们介绍了"确信的蒙特卡罗强度估计"作为Dell'Amico和Filippone [1]的扩展。给定一个密码，我们的估计器生成一个上界和一个下界，并且保证除非以概率δ，真实的猜测次数位于给定的置信范围内。我们的技术也可以用于表征攻击者的猜测曲线。特别是，给定一个概率性的密码破解模型M，我们可以在猜测预算B变化时生成对攻击者将破解的密码比例的高置信上界和下界。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179365/](https://ieeexplore.ieee.org/document/10179365/)
## Not Yet Another Digital ID: Privacy-Preserving Humanitarian Aid Distribution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#not-yet-another-digital-id-privacy-preserving-humanitarian-aid-distribution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#not-yet-another-digital-id-privacy-preserving-humanitarian-aid-distribution)**
### 作者
* Boya Wang, SPRING Lab, EPFL, Lausanne, Switzerland
* Wouter Lueks, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Justinas Sukaitis, International Committee of the Red Cross, Geneva, Switzerland
* Vincent Graf Narbel, International Committee of the Red Cross, Geneva, Switzerland
* Carmela Troncoso, SPRING Lab, EPFL, Lausanne, Switzerland
### 摘要
> 人道援助分发计划有助于为有需要的人提供物资援助。传统的纸质支持方案无法适应大规模人口需求，并且很难确保安全。现有的数字解决方案解决了这些问题，但却需要收集大量个人信息。这种缺乏隐私可能危及受助人的安全并伤害其尊严。我们与国际红十字会合作，构建了一个安全的数字援助分发系统。我们首先系统化了该系统应满足的要求。然后，我们提出了一个基于令牌的去中心化解决方案，以满足人道组织的需求。它具有可扩展性和强大的问责性，并且通过设计保证了受助人的隐私。我们提供了我们设计的两个实例，一个是智能卡，一个是智能手机。我们在形式上证明了这些解决方案的安全性和隐私属性，并通过实证展示它们可以在大规模操作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179306/](https://ieeexplore.ieee.org/document/10179306/)
## Disguising Attacks with Explanation-Aware Backdoors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#disguising-attacks-with-explanation-aware-backdoors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#disguising-attacks-with-explanation-aware-backdoors)**
### 作者
* Maximilian Noppel, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Germany
* Lukas Peter, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Germany
* Christian Wressnegger, KASTEL Security Research Labs, Karlsruhe Institute of Technology, Germany
### 摘要
> 可解释的机器学习具有分析和理解基于学习的系统的巨大潜力。然而，这些方法可以被操纵以提供不忠实的解释，从而产生强大而隐蔽的对手。在本文中，我们展示了如何完全掩盖机器学习模型的对抗操作。类似于神经后门，我们在触发器存在时改变模型的预测，同时欺骗一种后期应用于分析的解释方法。这使得对手可以隐藏触发器的存在，或者将解释指向输入的完全不同部分，从而引入一个假蛇红鲤鱼。我们分析了图像领域中基于梯度和传播的解释方法对这些解释感知后门的不同表现形式，然后我们继续对恶意软件分类进行一个假蛇红鲤鱼攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179308/](https://ieeexplore.ieee.org/document/10179308/)
## AI-Guardian: Defeating Adversarial Attacks using Backdoors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ai-guardian-defeating-adversarial-attacks-using-backdoors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ai-guardian-defeating-adversarial-attacks-using-backdoors)**
### 作者
* Hong Zhu, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Shengzhi Zhang, Metropolitan College, Boston University, USA
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 深度神经网络（DNNs）因其日益提高的准确性而被广泛应用于许多领域。然而，它们也容易受到对抗性攻击的影响，对自动驾驶、远程诊断等安全关键应用构成了严重威胁。现有解决方案在检测/防止此类攻击方面存在限制，同时也会影响原始任务的性能。在本文中，我们提出了AI-Guardian，一种新的方法，通过故意嵌入后门来防御对抗性攻击，以失败对抗干扰并保持原始主任务的性能。我们广泛评估了AI-Guardian，包括五种常用对抗性示例生成方法，并实验结果证明其在抵抗对抗性攻击方面的有效性。具体而言，AI-Guardian将攻击成功率从97.3%降低到3.2%，较最先进的方法提高了30.9%，而在处理干净数据时仅降低了0.9%的准确性。此外，在大多数情况下，AI-Guardian对模型预测时间仅引入了0.36%的开销，几乎可以忽略不计。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179473/](https://ieeexplore.ieee.org/document/10179473/)
## Jigsaw Puzzle: Selective Backdoor Attack to Subvert Malware Classifiers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#jigsaw-puzzle-selective-backdoor-attack-to-subvert-malware-classifiers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#jigsaw-puzzle-selective-backdoor-attack-to-subvert-malware-classifiers)**
### 作者
* Limin Yang, University of Illinois at Urbana-Champaign
* Zhi Chen, University of Illinois at Urbana-Champaign
* Jacopo Cortellazzi, King’s College London; University College London
* Feargus Pendlebury, University College London
* Kevin Tu, University of Illinois at Urbana-Champaign
* Fabio Pierazzi, King’s College London
* Lorenzo Cavallaro, University College London
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 恶意软件分类器在训练时容易受到攻击，因为需要定期使用从野外收集的样本进行重新训练。最近的研究表明，针对恶意软件分类器的后门攻击是可行的，但此类攻击的隐秘性尚不清楚。本文针对Android恶意软件分类器，研究了在干净标签设置下的后门攻击（即攻击者对训练过程或污染数据的标记没有完全控制）。经验上，我们证明现有的针对恶意软件分类器的后门攻击仍然可以被最近的防御机制（如MNTD）检测出来。为了提高隐秘性，我们提出了一种新的攻击方法，拼图（Jigsaw Puzzle，JP），其基于这样一个关键观察结果：恶意软件作者几乎没有动机去保护其他作者的恶意软件，只关心自己的。因此，拼图学习了一个触发器来补充恶意软件作者样本的潜在模式，并且仅在触发器和潜在模式在样本中拼合在一起时激活后门。我们进一步关注在问题空间（如软件代码）中可实现的触发器，使用广泛从良性软件中收集的字节码工具。我们的评估证实，拼图作为后门是有效的，对最先进的防御机制仍然具有隐匿性，并且在解决特征空间攻击之外的现实环境中构成威胁。最后，我们探讨了改进后门防御的有希望的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179347/](https://ieeexplore.ieee.org/document/10179347/)
## BayBFed: Bayesian Backdoor Defense for Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#baybfed-bayesian-backdoor-defense-for-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#baybfed-bayesian-backdoor-defense-for-federated-learning)**
### 作者
* Kavita Kumari, Technical University of Darmstadt; The University of Texas at San Antonio
* Phillip Rieger, Technical University of Darmstadt
* Hossein Fereidooni, Technical University of Darmstadt
* Murtuza Jadliwala, The University of Texas at San Antonio
* Ahmad-Reza Sadeghi, Technical University of Darmstadt
### 摘要
> 联邦学习（FL）是一种新兴技术，允许参与者合作训练机器学习模型，而无需与他人共享其私人数据。然而，FL容易受到诸如后门攻击之类的污染攻击。因此，最近提出了各种防御方法，主要利用全局模型的中间状态（即逻辑）或局部模型相对于全局模型的距离（即L2范数）来检测FL中的恶意后门。然而，这些方法直接操作客户端更新（或权重），其有效性取决于客户端数据分布或对手的攻击策略等因素。在本文中，我们引入了一个新颖且更通用的后门防御框架，称为BayBFed，该框架建议利用客户端更新上的概率分布来检测FL中的恶意更新：BayBFed计算客户端更新上的概率度量，以跟踪更新中的任何调整，并使用新颖的检测算法，可以利用这个概率度量高效地检测和过滤掉恶意更新。因此，它克服了以前方法的缺点，这些缺点由于直接使用客户端更新而产生；然而，我们的概率度量将包括本地客户端训练策略的所有方面。BayBFed利用了两种贝叶斯非参数（BNP）扩展：（i）分层贝塔伯努利过程，用于基于客户端更新生成概率度量；（ii）著名的中国餐馆过程（CRP）的适应版本，我们称之为CRP-Jensen，它利用这个概率度量来检测和过滤掉恶意更新。我们在五个基准数据集上对我们的防御方法进行了广泛评估，包括CIFAR10、Reddit、物联网入侵检测、MNIST和FMNIST，并展示了它可以在不降低全局模型良好性能的情况下有效检测和消除FL中的恶意更新。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179362/](https://ieeexplore.ieee.org/document/10179362/)
## Redeem Myself: Purifying Backdoors in Deep Learning Models using Self Attention Distillation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#redeem-myself-purifying-backdoors-in-deep-learning-models-using-self-attention-distillation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#redeem-myself-purifying-backdoors-in-deep-learning-models-using-self-attention-distillation)**
### 作者
* Xueluan Gong, School of Computer Science, Wuhan University, China
* Yanjiao Chen, College of Electrical Engineering, Zhejiang University, China
* Wang Yang, School of Cyber Science and Engineering, Wuhan University, China
* Qian Wang, School of Cyber Science and Engineering, Wuhan University, China
* Yuzhe Gu, School of Cyber Science and Engineering, Wuhan University, China
* Huayang Huang, School of Cyber Science and Engineering, Wuhan University, China
* Chao Shen, School of Cyber Science and Engineering, Xi’an Jiaotong University, China
### 摘要
> 最近的研究表明，深度神经网络对于后门攻击的容易受到攻击，当触发器激活时，后门模型会进行有目标或无目标的误分类。已经提出一系列净化方法（如精细修剪、神经注意力转移、MCR [69]）来移除模型中的后门。然而，它们要么无法降低更高级后门攻击的攻击成功率，要么大幅降低模型对于干净样本的预测能力。本文提出了一种新的净化防御框架，名为SAGE，它利用自注意力蒸馏来清除模型中的后门。与传统的注意力转移机制不同，传统方法需要一个教师模型来监督蒸馏过程，而SAGE可以通过少量干净样本实现自净化。为了增强防御性能，我们进一步提出了一种动态学习率调整策略，该策略能够精确跟踪干净样本的预测准确性，以指导学习率的调整。我们将SAGE与6种最先进的防御方法在4个数据集上对抗8种后门攻击进行了比较。结果显示，SAGE能够将攻击成功率降低高达90%，而对于干净样本的预测准确率减少不到3%。我们将在发表后公开源代码。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179375/](https://ieeexplore.ieee.org/document/10179375/)
## Threshold BBS+ Signatures for Distributed Anonymous Credential Issuance.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#threshold-bbs-signatures-for-distributed-anonymous-credential-issuance) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#threshold-bbs-signatures-for-distributed-anonymous-credential-issuance)**
### 作者
* Jack Doerner, Technion
* Yashvanth Kondi, Aarhus University
* Eysa Lee, Northeastern University
* Abhi Shelat, Northeastern University
* LaKyah Tyner, Northeastern University
### 摘要
> 我们提出了一种安全多方签名协议，适用于BBS+签名方案；换言之，这是一个具有阈值发行的匿名凭证方案。我们证明，由于BBS+签名的结构，简单地验证由某个半诚实协议产生的签名就足以实现对恶意对手的可组合安全性。因此，我们的协议非常简单和高效：它包括客户端（需要签名）向签名方发出的单个请求、签名方之间的两次消息交换，最后向客户端的回应；在一些部署场景中，具体成本的瓶颈可能是客户端对接收到的签名的本地验证。此外，我们的协议可以扩展到支持最强形式的盲签名，并作为Dodis-Yampolskiy Oblivious VRF的分布式评估协议。我们通过实施和基准测试我们的协议来验证我们的效率声明。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179470/](https://ieeexplore.ieee.org/document/10179470/)
## zk-creds: Flexible Anonymous Credentials from zkSNARKs and Existing Identity Infrastructure.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#zk-creds-flexible-anonymous-credentials-from-zksnarks-and-existing-identity-infrastructure) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#zk-creds-flexible-anonymous-credentials-from-zksnarks-and-existing-identity-infrastructure)**
### 作者
* Michael Rosenberg, University of Maryland
* Jacob White, Purdue University
* Christina Garman, Purdue University
* Ian Miers, University of Maryland
### 摘要
> 频繁地，网络用户需要展示自己的身份，以证明自己不是机器人，年龄已到达限制观看视频的标准，或者有资格从当地公共图书馆下载电子书而不被跟踪。匿名凭证被开发出来以解决这些问题。然而，现有方案无法处理部署现实或者真实世界身份的复杂性。相反，它们隐含地假设了匿名凭证存在颁发机构，并且对于真实应用，需要当地交通部门颁发复杂的加密令牌来证明用户年满18岁。实际上，对于给定身份属性，存在多个信任来源，他们的凭证格式明显不同，并且许多发行机构，如果不是全部，都不愿采用新的协议。我们提出并构建了zk-creds，这是一种使用通用零知识证明的协议，以实现以下目标：1）无需凭证颁发机构持有签名密钥：凭证可以被发行到作为透明日志、拜占庭系统或者甚至区块链的公告板；2）将现有身份证件转换为匿名凭证，而无需修改文档或与颁发机构协调；3）允许灵活、可组合和复杂的身份陈述跨越多个凭证。在具体实现上，使用zk-creds的身份声明在一个真实场景中使用护照匿名访问限制年龄的视频中只需不到150毫秒的时间。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179430/](https://ieeexplore.ieee.org/document/10179430/)
## Private Access Control for Function Secret Sharing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-access-control-for-function-secret-sharing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-access-control-for-function-secret-sharing)**
### 作者
* Sacha Servan-Schreiber, MIT CSAIL
* Simon Beyzerov, MIT PRIMES
* Eli Yablon, MIT PRIMES
* Hyojae Park, MIT PRIMES
### 摘要
> 功能秘密共享（FSS; Eurocrypt 2015）允许交易者与两个或更多的评估者共享函数f。给定函数f的秘密分享，评估者可以在本地计算f（x）的秘密分享，而不会在过程中学习有关f的信息。在本文中，我们开始研究FSS的访问控制。给定f的分享，评估者可以确保交易者被授权共享所提供的函数。对于函数族$\mathcal{F}$和在该族上定义的访问控制列表，接收到$f \in \mathcal{F}$的分享的评估者可以高效地检查交易者是否知道f的访问密钥。这一模型使得FSS可以应用于新的领域，例如：（1）多方设置下的匿名身份验证，（2）私有数据库中的访问控制，以及（3）匿名通信系统中的身份验证和垃圾邮件预防。我们的定义和构建提供了对实现FSS访问控制的几个最近系统的具体效率的抽象和改进。我们效率改进的主要构建块是离散对数零知识证明，适用于秘密共享元素，这可能是独立的兴趣点。我们评估了我们的构建和显示与在匿名通信中使用的现有访问控制技术相比，计算开销减少了50-70倍。在其他应用中，例如私有数据库，引入访问控制的处理成本只有1.5-3倍，当在具有500,000个或更多项的数据库上分摊时。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179295/](https://ieeexplore.ieee.org/document/10179295/)
## MPCAuth: Multi-factor Authentication for Distributed-trust Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mpcauth-multi-factor-authentication-for-distributed-trust-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mpcauth-multi-factor-authentication-for-distributed-trust-systems)**
### 作者
* Sijun Tan, University of California, Berkeley
* Weikeng Chen, University of California, Berkeley
* Ryan Deng, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### 摘要
> 具有分布式信任的系统正在引起越来越多的研究关注，并得到日益增多的行业采纳。在这些系统中，关键机密分布在N个服务器上，并使用安全的多方计算（SMPC）进行私密计算。这些分布式信任系统的认证面临两个挑战。第一个挑战是易用性。也就是说，如何在不牺牲安全性的情况下保持认证协议的用户体验？为了避免中心攻击点，客户端需要分别对每个服务器进行身份验证。然而，这将需要客户端为每个身份验证因素进行N次身份验证，这大大降低了可用性。第二个挑战是隐私性，因为客户端的敏感概要现在暴露在所有不同信任域的N个服务器下，这为概要数据创建了N倍的攻击表面。我们提出了MPCAuth，一个针对分布式信任应用的多因素认证系统，解决了这两个挑战。我们的系统使客户端能够通过一次认证独立地对N个服务器进行身份验证。此外，我们的系统是概要隐藏的，这意味着客户端的身份验证概要（如电子邮件用户名、电话号码、密码和生物特征）不会被揭示，除非所有服务器都被攻击。我们提出了针对广泛采用的各种身份验证因素的安全和实用协议，包括电子邮件验证码、短信、U2F、安全问题/密码和生物特征。我们的系统在加密货币保管和协作机器学习领域具有实际应用价值，并有助于未来分布式信任应用的采用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179481/](https://ieeexplore.ieee.org/document/10179481/)
## Silph: A Framework for Scalable and Accurate Generation of Hybrid MPC Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#silph-a-framework-for-scalable-and-accurate-generation-of-hybrid-mpc-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#silph-a-framework-for-scalable-and-accurate-generation-of-hybrid-mpc-protocols)**
### 作者
* Edward Chen, Carnegie Mellon University
* Jinhao Zhu, Carnegie Mellon University
* Alex Ozdemir, Stanford University
* Riad S. Wahby, Carnegie Mellon University
* Fraser Brown, Carnegie Mellon University
* Wenting Zheng, Carnegie Mellon University
### 摘要
> 金融和医疗领域的许多应用程序需要访问多个组织的数据。尽管这些组织可以从对其联合数据集进行计算中受益，但由于法规限制和商业竞争，它们通常无法彼此共享数据。相互不信任的各方在不明文共享数据的情况下进行合作的一种方法是使用安全多方计算（MPC）。然而，MPC的性能对于缺乏高级密码学专业知识的用户来说是一个严重的障碍。本文介绍了Silph，这是一个框架，可以将用高级语言编写的程序自动编译成优化的混合MPC协议，安全高效地混合多个MPC原语。相比之前的研究，我们的编译速度提高了多达30000倍。在各种数据库分析和机器学习工作负载中，由Silph生成的MPC协议与之前的研究相匹配或超过了其性能，提高了多达3.6倍。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179397/](https://ieeexplore.ieee.org/document/10179397/)
## SoK: Anti-Facial Recognition Technology.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-anti-facial-recognition-technology) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-anti-facial-recognition-technology)**
### 作者
* Emily Wenger, University of Chicago
* Shawn Shan, University of Chicago
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 近年来，政府和商业机构普遍采用面部识别技术，这引发了对公民自由和隐私的关切。为应对这一情况，人们开发了一系列所谓的“反面部识别”（AFR）工具，旨在帮助用户避免不必要的面部识别。近年来提出的AFR工具范围广泛且不断发展，因此需要回顾整体AFR系统的设计空间和长期挑战。本文旨在填补这一空白，首次对AFR研究领域进行了全面分析。我们以面部识别系统的操作阶段为出发点，创建了一个系统的框架，用于分析不同AFR方法的益处和权衡。然后，我们考虑了AFR工具面临的技术和社会挑战，并提出了该领域未来研究的方向。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179445/](https://ieeexplore.ieee.org/document/10179445/)
## Spoofing Real-world Face Authentication Systems through Optical Synthesis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spoofing-real-world-face-authentication-systems-through-optical-synthesis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spoofing-real-world-face-authentication-systems-through-optical-synthesis)**
### 作者
* Yueli Yan, School of Information Science and Technology, ShanghaiTech University, China
* Zhice Yang, School of Information Science and Technology, ShanghaiTech University, China
### 摘要
> 面部信息已被用于身份验证目的。最近的面部认证系统利用多模式摄像头来抵御欺骗攻击。多模式摄像头能够同时观察目标人员的多个物理方面，如可见光、红外线和深度域。已知的欺骗攻击在回避检测方面并不有效，因为它们无法同时模拟多个模式。本文提出了一种针对多模式面部认证系统的新型欺骗攻击。其主要思想是伪造每种模式，然后将它们组合在一起呈现给摄像头。该攻击是通过一种名为华皮显示器的特殊显示设备实现的。它的成本不到500美元，内置了专用场景生成器，能够光学地重现授权用户的多模式场景，并通过光学合并器将场景合成在摄像头的视点上，以欺骗面部认证系统。我们通过系统地对主要供应商在该领域的最新商业面部认证产品进行测试，评估了该攻击的风险。结果不仅展示了80%的成功绕过率，还揭示了影响因素及其可行区域，从而揭示了这个领域中的新的、现实的威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179351/](https://ieeexplore.ieee.org/document/10179351/)
## ImU: Physical Impersonating Attack for Face Recognition System with Natural Style Changes.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#imu-physical-impersonating-attack-for-face-recognition-system-with-natural-style-changes) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#imu-physical-impersonating-attack-for-face-recognition-system-with-natural-style-changes)**
### 作者
* Shengwei An, Purdue University
* Yuan Yao, Nanjing University
* Qiuling Xu, Purdue University
* Shiqing Ma, Rutgers University
* Guanhong Tao, Purdue University
* Siyuan Cheng, Purdue University
* Kaiyuan Zhang, Purdue University
* Yingqi Liu, Purdue University
* Guangyu Shen, Purdue University
* Ian Kelk, Clarifai Inc
* Xiangyu Zhang, Purdue University
### 摘要
> 本文提出了一种新颖的物理冒充攻击方法，针对人脸识别系统。该攻击旨在在不同条件和姿势下，生成攻击者多张图片之间具有一致风格变化的效果。此外，这些风格变化需要能够通过化妆在现实中实现，并能够引起预期的错误分类。为了实现这一目标，我们开发了新技术，将同一实际人物的多张图片嵌入到StyleGAN的潜在空间向量中。嵌入的潜在向量具有一定的内在相关性，使得搜索一致风格变化成为可能。我们的数字和物理评估结果表明，我们的方法可以使外部攻击者成功冒充内部人员，并实现一致而自然的变化。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179360/](https://ieeexplore.ieee.org/document/10179360/)
## DepthFake: Spoofing 3D Face Authentication with a 2D Photo.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#depthfake-spoofing-3d-face-authentication-with-a-2d-photo) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#depthfake-spoofing-3d-face-authentication-with-a-2d-photo)**
### 作者
* Zhihao Wu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yushi Cheng, Beijing National Research Center for Information Science and Technology (BNRist), Tsinghua University
* Jiahui Yang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### 摘要
> 面部识别已经广泛应用于门禁控制，最新的三维面部识别系统采用三维活体检测技术来应对照片回放攻击，即攻击者使用二维照片来绕过认证。本文分析了利用结构光深度相机的三维活体检测系统的安全性，并发现了一种针对三维面部识别系统的新攻击方式。我们提出了DepthFake攻击，可以仅使用一张二维照片欺骗三维面部识别。为了实现这个目标，DepthFake首先从目标受害者的二维照片估计出面部的三维深度信息。然后，DepthFake将嵌入了面部深度信息的精心设计的散射图案投射出来，以赋予二维照片三维认证属性。我们克服了一系列实际挑战，例如从二维照片中估计深度信息的误差、基于结构光的深度图像伪造、面部的RGB图像和深度图像的对齐，并在实验室环境中实现了DepthFake。我们在三个商业面部认证系统（腾讯云、百度云和3DiVi）和一个商业门禁设备上验证了DepthFake。在50个用户的测试结果中，DepthFake在现实世界中的深度攻击成功率达到79.4%，RGB-D攻击成功率达到59.4%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179429/](https://ieeexplore.ieee.org/document/10179429/)
## Understanding the (In)Security of Cross-side Face Verification Systems in Mobile Apps: A System Perspective.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#understanding-the-in-security-of-cross-side-face-verification-systems-in-mobile-apps-a-system-perspective) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#understanding-the-in-security-of-cross-side-face-verification-systems-in-mobile-apps-a-system-perspective)**
### 作者
* Xiaohan Zhang, Fudan University, Shanghai, China
* Haoqi Ye, Fudan University, Shanghai, China
* Ziqi Huang, Fudan University, Shanghai, China
* Xiao Ye, Fudan University, Shanghai, China
* Yinzhi Cao, Johns Hopkins University, Baltimore, USA
* Yuan Zhang, Fudan University, Shanghai, China
* Min Yang, Fudan University, Shanghai, China
### 摘要
> 人脸验证系统（FVS）越来越多地被真实世界的移动应用程序（应用）用于验证人类所声称的身份。其中一种流行的FVS类型称为跨边界FVS（XFVS），它将FVS功能分为两个方面：一个在手机上拍照或录制视频，另一个在受信任的服务器上进行验证。之前的研究从机器学习的角度研究了XFVS的安全性，即XFVS使用的学习模型是否能够抵御对抗攻击。然而，对XFVS的其他部分的安全性，特别是XFVS使用的验证程序的设计和实施，尚未得到很好的理解。在本文中，我们从系统的角度对流行移动应用程序中使用的真实XFVS进行了首次测量研究安全性。更具体地说，我们设计实现了一个半自动化系统，称为XFVSChecker，用于检测移动应用程序中的XFVS，并检查其对四个安全属性的合规性。我们的评估揭示了大多数现有的XFVS应用程序，包括那些被下载数十亿次的应用程序，都容易受到至少四种类型攻击之一的攻击。这些攻击只需要受害者的一张照片等容易获得的攻击先决条件，就能对安全性造成重大风险，包括完全接管账户、身份欺诈和财务损失。我们的研究结果导致了14个中国国家漏洞数据库（CNVD）标识，其中一个特别是CNVD-2021-86899，在所有报告给CNVD的漏洞中被评为2021年最有价值的漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179474/](https://ieeexplore.ieee.org/document/10179474/)
## Breaking Security-Critical Voice Authentication.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#breaking-security-critical-voice-authentication) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#breaking-security-critical-voice-authentication)**
### 作者
* Andre Kassis, Cheriton School of Computer Science, University of Waterloo, Waterloo, Canada
* Urs Hengartner, Cheriton School of Computer Science, University of Waterloo, Waterloo, Canada
### 摘要
> 声音认证（VA）最近已成为许多安全关键操作的重要组成部分，例如银行交易和呼叫中心对话。自动演讲者验证系统（ASVs）对冒名攻击的脆弱性触发了对抗措施（CMs）的发展，其任务是区分真实和冒充的语音。ASVs和CMs一起构成了现今的VA系统，并被宣传为不可攻破的访问控制机制。我们开发了第一个实际攻击伪造对策的方法，并演示了恶意行为者如何有效地欺骗这些防御措施。以前针对VA的对抗攻击主要是针对白盒场景而设计的，即假定了对系统内部的了解，或者需要大量查询和时间预算来发动面向特定目标的攻击。在攻击安全关键系统时，这些假设是不成立的。相反，我们的攻击针对所有伪造对策共享的常见失效点，使其实时、模型无关，并且完全黑盒化，无需与目标交互来构造攻击样本。我们工作的关键信息是，CM错误地学习了以易于识别和伪造的线索来区分伪造和真实音频。我们的攻击效果微妙到足以确保这些对抗性样本仍然可以绕过ASV，并保留其原始文本内容。这些属性的结合使得我们可以对安全关键的VA进行强大的攻击，成功率高达99%，仅需6次尝试。最后，我们进行了针对CM的首次面向电话网络的有针对性攻击，绕过了几个已知的挑战，同时也可能导致多种潜在威胁，鉴于声音生物识别在呼叫中心的增加使用。我们的结果对现代VA系统的安全性提出了质疑，并敦促用户重新思考对其的信任，考虑到攻击者绕过这些措施获取其最有价值资源的真实威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179374/](https://ieeexplore.ieee.org/document/10179374/)
## SoK: A Critical Evaluation of Efficient Website Fingerprinting Defenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-a-critical-evaluation-of-efficient-website-fingerprinting-defenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-a-critical-evaluation-of-efficient-website-fingerprinting-defenses)**
### 作者
* Nate Mathews, Rochester Institute of Technology
* James K Holland, University of Minnesota
* Se Eun Oh, Ewha Womans University
* Mohammad Saidur Rahman, Rochester Institute of Technology
* Nicholas Hopper, University of Minnesota
* Matthew Wright, Rochester Institute of Technology
### 摘要
> 最近的网站指纹攻击已经显示出对Tor上的流量达到非常高的性能。这些攻击允许对手通过简单地窃听加密通信来推断出Tor用户访问的网站。因此，这引发了许多用于通过添加虚假数据包和/或延迟来混淆流量的防御策略的开发。对于这些最近的提议的有效性和实用性尚未进行详细审查。在本研究中，我们重新评估了九个最近的防御提议，它们声称使用最新的基于深度学习的攻击提供了适当的安全性和低开销。此外，我们评估了在Tor的当前限制条件下实施这些防御的可行性。为此，我们还首次在网络上实现了DynaFlow防御，以更好地评估其在实际世界中的实用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179289/](https://ieeexplore.ieee.org/document/10179289/)
## Fashion Faux Pas: Implicit Stylistic Fingerprints for Bypassing Browsers' Anti-Fingerprinting Defenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fashion-faux-pas-implicit-stylistic-fingerprints-for-bypassing-browsers-anti-fingerprinting-defenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fashion-faux-pas-implicit-stylistic-fingerprints-for-bypassing-browsers-anti-fingerprinting-defenses)**
### 作者
* Xu Lin, University of Illinois, Chicago
* Frederico Araujo, IBM Research
* Teryl Taylor, IBM Research
* Jiyong Jang, IBM Research
* Jason Polakis, University of Illinois, Chicago
### 摘要
> 浏览器指纹识别一直是研究界和浏览器生态系统关注的热点话题，先前的研究或浏览器已经提出了各种反指纹识别的对策。虽然防止指纹识别是一项具有挑战性的任务，但现代指纹识别技术主要依赖于JavaScript API，这为对抗措施提供了一个可被针对的瓶颈。在本文中，我们探讨了如何在没有使用任何JavaScript API的情况下生成浏览器指纹。为此，我们开发了一种新型指纹识别系统StylisticFP，该系统仅依赖于CSS特性，并通过精心构建和排列的HTML元素隐含地推断系统特征，包括支持的字体列表等高级指纹识别属性。我们经验性地证明了我们的系统对于注重隐私的浏览器（例如Safari，Firefox，Brave，Tor）和流行的隐私保护扩展的有效性。我们还在一个研究机构进行了一项试点研究，发现我们的系统在区分设备方面与最先进的基于JavaScript的指纹识别库相当，同时在对抗反指纹识别防御浏览器方面表现更好。我们的工作突显了浏览器指纹识别所带来的重大挑战，并重申了对更健壮的检测系统和对策的需求。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179437/](https://ieeexplore.ieee.org/document/10179437/)
## Robust Multi-tab Website Fingerprinting Attacks in the Wild.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#robust-multi-tab-website-fingerprinting-attacks-in-the-wild) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#robust-multi-tab-website-fingerprinting-attacks-in-the-wild)**
### 作者
* Xinhao Deng, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Qilei Yin, Zhongguancun Laboratory, Beijing, China
* Zhuotao Liu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China; Zhongguancun Laboratory, Beijing, China
* Xiyuan Zhao, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Qi Li, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China; Zhongguancun Laboratory, Beijing, China
* Mingwei Xu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China; Zhongguancun Laboratory, Beijing, China
* Ke Xu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China; Zhongguancun Laboratory, Beijing, China
* Jianping Wu, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China; Zhongguancun Laboratory, Beijing, China
### 摘要
> 网站指纹识别使得监听者能够在加密连接上确定用户正在访问哪些网站。最先进的网站指纹识别（WF）攻击在Tor保护的网络流量中甚至展示了有效性。然而，现有的WF攻击对准确识别多标签浏览会话中的网站存在重要限制，在这种情况下，无法保留单个网站的整体模式，并且无法事先确定客户端打开的标签数量。在本文中，我们提出了一种新颖的多标签WF攻击框架ARES，专为多标签WF攻击而原生设计。ARES将多标签攻击转化为一个多标签分类问题，并使用一个多分类器框架来解决。每个分类器基于一种新颖的转换器模型设计，通过从多个流量段提取的本地模式来识别特定的网站。我们实现了ARES的一个原型，并使用我们在多个月内收集的大规模数据集进行了广泛的有效性评估（这是迄今为止在学术论文中研究的最大的多标签WF数据集）。实验结果表明，ARES有效地实现了多标签WF攻击，F1得分达到0.907。此外，ARES甚至能够抵御各种WF防御手段。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179464/](https://ieeexplore.ieee.org/document/10179464/)
## Only Pay for What You Leak: Leveraging Sandboxes for a Minimally Invasive Browser Fingerprinting Defense.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#only-pay-for-what-you-leak-leveraging-sandboxes-for-a-minimally-invasive-browser-fingerprinting-defense) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#only-pay-for-what-you-leak-leveraging-sandboxes-for-a-minimally-invasive-browser-fingerprinting-defense)**
### 作者
* Ryan Torok, Department of Computer Science, Princeton University, Princeton, New Jersey, USA
* Amit Levy, Department of Computer Science, Princeton University, Princeton, New Jersey, USA
### 摘要
> 我们提出了Sandcastle，这是一种基于熵的浏览器指纹保护方法，旨在最大程度减少对合法网络应用的干扰。Sandcastle允许开发人员将操作可识别信息的代码划分为沙箱，以向浏览器证明该信息无法通过任何网络请求发送。同时，沙箱可以充分利用客户端上的可识别信息，包括写入文档对象模型的专用区域。对于该策略过于严格的应用，Sandcastle提供了一个灵活的收银台，可以精确控制向网络泄露的数据粒度。这些特点使得Sandcastle能够消除Chrome隐私预算框架所增加的大部分或全部与可识别API输出相关的噪声，而该框架是目前熵-based指纹保护的最先进技术。允许在客户端无限使用可识别信息使得更多种类的网络应用程序能够在指纹保护下运行，例如3D游戏和视频流媒体，并为引入到网络生态系统的API扩展提供了一种既能满足隐私要求又不会损害隐私的机制。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179385/](https://ieeexplore.ieee.org/document/10179385/)
## It's (DOM) Clobbering Time: Attack Techniques, Prevalence, and Defenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-dom-clobbering-time-attack-techniques-prevalence-and-defenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-dom-clobbering-time-attack-techniques-prevalence-and-defenses)**
### 作者
* Soheil Khodayari, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> DOM劫持是一种无代码注入攻击类型，攻击者将一个非脚本、看似无害的HTML标记插入网页，并通过利用JavaScript代码与运行时环境之间的意外交互将其转化为可执行代码。目前尚未对使DOM劫持成为可能的攻击技术、浏览器行为和易受攻击的代码模式进行研究。本文通过对现有文献的全面调研和19种不同移动和桌面浏览器的动态分析，对Web平台上DOM劫持的现状进行了其中之一的评估。然后，我们利用这一系统化的方法识别和描述可以被DOM劫持覆写的程序指令，并利用它来介绍TheThing，这是一个自动检测对安全敏感指令产生clobberable数据流的系统。我们将TheThing应用于Tranco前5000个网站，量化了DOM劫持在野外的普遍性和影响。我们的评估揭示了DOM劫持漏洞的普遍存在，共计491个受影响的网站上存在9467个易受攻击的数据流，使得可以针对Fandom、Trello、Vimeo、TripAdvisor、WikiBooks和GitHub等热门网站进行任意代码执行、开放式重定向或客户端请求伪造等攻击，而这些网站在传统攻击向量下是不可利用的。最后，在本文中，我们还评估了现有的防御措施（如HTML过滤器和内容安全策略）对抗DOM劫持的稳健性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179403/](https://ieeexplore.ieee.org/document/10179403/)
## Scaling JavaScript Abstract Interpretation to Detect and Exploit Node.js Taint-style Vulnerability.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scaling-javascript-abstract-interpretation-to-detect-and-exploit-node-js-taint-style-vulnerability) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scaling-javascript-abstract-interpretation-to-detect-and-exploit-node-js-taint-style-vulnerability)**
### 作者
* Mingqing Kang, Johns Hopkins University
* Yichao Xu, Johns Hopkins University
* Song Li, Zhejiang University
* Rigel Gjomemo, University of Illinois Chicago
* Jianwei Hou, Remain University of China
* V. N. Venkatakrishnan, University of Illinois Chicago
* Yinzhi Cao, Johns Hopkins University
### 摘要
> 污点式漏洞，例如操作系统命令注入和路径遍历，是常见且严重的软件弱点。在发现此类漏洞时，在分析可伸缩性和准确性之间存在固有的权衡。一方面，现有的语法导向方法在动态特性（如括号语法）的分析准确性上往往做出妥协。另一方面，现有的抽象解释往往在抽象域中面临状态膨胀问题，从而导致可伸缩性问题。
> 
> 在本文中，我们提出了一种名为FAST的新方法，通过一种新的抽象解释方法来扩展JavaScript包的漏洞发现，该方法依赖于两种新技术，称为自底向上和自顶向下的抽象解释。前者基于作用域而不是调用序列来抽象解释函数，以构建动态调用边。然后，后者遵循特定的控制流路径，并修剪程序以跳过与漏洞源无关的语句。如果找到了一条端到端的数据流路径，FAST将查询沿路径的约束的可满足性，并验证可利用性以减少人力工作量。
> 
> 我们实现了FAST的原型，并对真实的Node.js包进行评估。我们展示了FAST能够在NPM中发现242个零日漏洞，其中21个CVE标识符已被分配。我们的评估还表明，FAST可以适用于像NodeBB和流行的框架（如total.js和strapi）这样的真实应用程序，在发现以前无法发现的旧版漏洞方面具有可伸缩性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179352/](https://ieeexplore.ieee.org/document/10179352/)
## Sound Verification of Security Protocols: From Design to Interoperable Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sound-verification-of-security-protocols-from-design-to-interoperable-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sound-verification-of-security-protocols-from-design-to-interoperable-implementations)**
### 作者
* Linard Arquint, Department of Computer Science, ETH, Zurich, Switzerland
* Felix A. Wolf, Department of Computer Science, ETH, Zurich, Switzerland
* Joseph Lallemand, Univ Rennes, CNRS, IRISA, France
* Ralf Sasse, Department of Computer Science, ETH, Zurich, Switzerland
* Christoph Sprenger, Department of Computer Science, ETH, Zurich, Switzerland
* Sven N. Wiesner, Department of Computer Science, ETH, Zurich, Switzerland
* David Basin, Department of Computer Science, ETH, Zurich, Switzerland
* Peter Müller, Department of Computer Science, ETH, Zurich, Switzerland
### 摘要
> 我们提供了一个框架，包括工具和元定理，用于端到端验证安全协议，以弥合自动化协议验证和代码级证明之间的差距。我们将Tamarin协议模型自动转换为一组用隔离逻辑表示的I/O规范。每个规范描述了一个协议角色的预期I/O行为，对该角色的实现进行验证。我们的正确性结果保证了为Tamarin模型证明的所有安全（跟踪）属性都会被验证实现继承。因此，我们的框架使我们能够利用Tamarin中大量的先前验证工作来验证新的和现有的实现。任何隔离逻辑代码验证器的使用可能提供了对目标语言的灵活性。为了验证我们的方法并展示它在实际协议中的可扩展性，我们验证了WireGuard VPN密钥交换协议的官方Go实现的很大一部分。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179325/](https://ieeexplore.ieee.org/document/10179325/)
## Typing High-Speed Cryptography against Spectre v1.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#typing-high-speed-cryptography-against-spectre-v1) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#typing-high-speed-cryptography-against-spectre-v1)**
### 作者
* Basavesh Ammanaghatta Shivakumar, MPI-SP, Bochum, Germany
* Gilles Barthe, MPI-SP, Bochum, Germany; IMDEA Software Institute, Madrid, Spain
* Benjamin Gregoire, Inria, Sophia Antipolis, France
* Vincent Laporte, CNRS, Inria, LORIA, Université de Lorraine, Nancy, France
* Tiago Oliveira, MPI-SP, Bochum, Germany
* Swarn Priya, Inria, Sophia Antipolis, France
* Peter Schwabe, MPI-SP, Bochum, Germany; Radboud University, Nijmegen, The Netherlands
* Lucas Tabary-Maujean, ENS Paris-Saclay, Gif-sur-Yvette, France
### 摘要
> 当前密码软件的黄金标准是编写高效的库，并具有针对时间攻击的系统保护。为了达到这个目标，密码工程师越来越多地使用高保证密码工具。这些工具指导程序员，并提供可以由库用户独立验证的严格保证。然而，高保证工具对于忽略瞬态执行泄漏的过于简单的执行模型进行推理。因此，由高保证密码工具验证的实现仍然可能容易受到诸如Spectre或Meltdown之类的瞬态执行攻击。此外，由于性能开销的原因，所提出的对策在实践中并未被使用。我们提出、分析、实现和评估了一种针对Spectre v1攻击进行高效密码实现的方法。我们的方法确保了推测常量时间，这是一种信息流属性，可保证程序受到Spectre v1攻击的保护。推测常量时间通过（值相关的）信息流类型系统来实施。该类型系统根据执行是否错误地推测来跟踪安全级别。我们在高保证密码框架Jasmin中实现了我们的方法，并将其用于保护包含对称原语、椭圆曲线密码和Kyber的高度优化实现的实验性密码库的所有实现。Kyber是一种基于格的密钥交换机制，最近被NIST选为标准化方法。我们的保护性能影响非常低；例如，Kyber的影响小于1%，X25519的影响几乎为零。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179418/](https://ieeexplore.ieee.org/document/10179418/)
## Less is more: refinement proofs for probabilistic proofs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#less-is-more-refinement-proofs-for-probabilistic-proofs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#less-is-more-refinement-proofs-for-probabilistic-proofs)**
### 作者
* Kunming Jiang, NYU Department of Computer Science, Courant Institute
* Devora Chait-Roth, NYU Department of Computer Science, Courant Institute
* Zachary DeStefano, NYU Department of Computer Science, Courant Institute
* Michael Walfish, NYU Department of Computer Science, Courant Institute
* Thomas Wies, NYU Department of Computer Science, Courant Institute
### 摘要
> 在过去的十年中，对概率证明（IPs、SNARKs、PCPs等）的实施引起了极大的兴趣：这些协议可以使一个不受信任的方向验证者证明给出的计算被正确执行，可能以零知识的方式。然而，这些实施仍无法扩展到大型计算。一个主要的开销来源是前端：从抽象计算转换为一组等价的算术约束。本文介绍了一个通用的框架，称为Distiller，用户可以将抽象化的计算规范转化为约束而不是原始计算。Distiller是这个领域第一个以可以证明安全的方式进行这种转换的工具。此外，通过将"在约束中编码检查"的思想推向极致，Distiller为约束减少提供了许多新的机会，从而使基准计算的成本降低了1.3到50倍，并在某些情况下具有更好的渐近复杂度。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179393/](https://ieeexplore.ieee.org/document/10179393/)
## Owl: Compositional Verification of Security Protocols via an Information-Flow Type System.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#owl-compositional-verification-of-security-protocols-via-an-information-flow-type-system) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#owl-compositional-verification-of-security-protocols-via-an-information-flow-type-system)**
### 作者
* Joshua Gancher, Carnegie Mellon University
* Sydney Gibson, Carnegie Mellon University
* Pratap Singh, Carnegie Mellon University
* Samvid Dharanikota, Carnegie Mellon University
* Bryan Parno, Carnegie Mellon University
### 摘要
> 计算机完备的协议验证工具承诺为安全协议提供全面的密码学证明。然而，目前的工具要么缺乏模块化，要么缺乏自动化。我们提出了一种新的方法，基于信息流和精炼类型的创新应用，用于进行安全密码学证明。我们的框架Owl允许基于类型的模块化安全协议描述，其中可以对不同的子协议进行编程并分别自动证明其安全性。我们通过一种支持对称和非对称原语、Diffie-Hellman操作和通过随机预言进行哈希的核心语言为Owl提供了一个形式化的安全证明。我们还为Owl实现了一个类型检查器和一个将原型提取到Rust的机制，并对包括（简化形式的）SSH密钥交换和Kerberos在内的14个案例研究进行了评估。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179477/](https://ieeexplore.ieee.org/document/10179477/)
## AUC: Accountable Universal Composability.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#auc-accountable-universal-composability) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#auc-accountable-universal-composability)**
### 作者
* Mike Graf, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
### 摘要
> 问责制是一个既有成效又广泛应用的安全概念，它允许获取无可争议的密码学证据以证明不端行为，从而激励诚实行为。目前已经存在几种用于正式基于游戏的安全分析的通用账户能力框架。然而，这种基于游戏的框架并不支持模块化安全分析，而这是处理现代协议复杂性的重要工具。
> 
> 通用可组合性（UC）模型为模块化分析提供了本地支持，包括安全结果的重用和组合。到目前为止，对于MPC协议的问责制主要在UC模型中进行建模和分析，但UC仍缺乏一个通用的问责制框架。也就是说，还缺乏一个框架，它除了支持任意协议、广泛的问责制属性、可处理和混合账户和非账户安全属性，还能对问责制协议进行模块化分析。
> 
> 为了弥补这一空白，我们提出了AUC，这是第一个基于UC模型的通用问责制框架，它基于几个新概念支持上述所有功能。我们通过三个之前的作品未涵盖的案例研究来展示AUC。特别地，AUC将现有的UC问责制方法统一到一个框架中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179384/](https://ieeexplore.ieee.org/document/10179384/)
## High-Order Masking of Lattice Signatures in Quasilinear Time.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#high-order-masking-of-lattice-signatures-in-quasilinear-time) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#high-order-masking-of-lattice-signatures-in-quasilinear-time)**
### 作者
* Rafaël del Pino, PQShield SAS, France
* Thomas Prest, PQShield SAS, France
* Mélissa Rossi, ANSSI, France
* Markku-Juhani O. Saarinen, PQShield LTD, UK
### 摘要
> 近年来，基于格的签名方案作为最主要的后量子解决方案出现，NIST选择Falcon和Dilithium进行标准化的事实证明了这一点。这两个方案都具有良好的性能特征。然而，在存在侧信道保护的情况下，它们的效率会下降，特别是掩蔽 - 也许是最强的通用侧信道对策。d-1阶的掩蔽要求将所有敏感中间变量随机化为d份。根据现有的方案，签名生成复杂度与份额数量呈二次增长，使得高阶掩蔽的计算速度过慢。在本文中，我们将问题颠倒过来：我们设计了一种专门用于抵抗侧信道的基于格的签名方案，并将掩蔽效率优化为份额数量的函数。我们的设计避免了昂贵的操作，如算术和布尔编码（A2B/B2A）之间的转换，掩蔽拒绝取样，并且不需要掩蔽的SHAKE实现或其他对称原语。最终得到的方案被称为Raccoon，属于Fiat-Shamir与中止的基于格的签名系列。Raccoon是第一个基于格的签名方案，其密钥生成和签名运行时间仅有O(d log(d))的开销，其中d是份额数量。我们的 C 参考实现证实了Raccoon的性能与其他最先进的签名方案相当，只是增加份额数量对延迟产生几乎线性的影响。我们还提供了FPGA实现，并进行物理泄漏评估以验证其基本安全性质。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179342/](https://ieeexplore.ieee.org/document/10179342/)
## Practical Timing Side-Channel Attacks on Memory Compression.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#practical-timing-side-channel-attacks-on-memory-compression) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#practical-timing-side-channel-attacks-on-memory-compression)**
### 作者
* Martin Schwarzl, Graz University of Technology
* Pietro Borrello, Sapienza University of Rome
* Gururaj Saileshwar, NVIDIA Research
* Hanna Müller, Graz University of Technology
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Daniel Gruss, Graz University of Technology
### 摘要
> 压缩算法由于其数据相关操作存在副信道。迄今为止，只有压缩比副信道（如压缩数据大小）被利用。本文介绍了Decomp+Time，它是第一个利用压缩算法中的时间副信道进行内存压缩攻击的方法。尽管Decomp+Time比之前的研究涵盖了更广泛的应用领域，但关键挑战是准确地构造由攻击者控制的压缩有效载荷，以实现具有足够分辨率的攻击。我们的进化模糊测试工具Comprezzor能够找到有效的Decomp+Time有效载荷，以优化解压缩时延差异，甚至可以在远程攻击中利用解压缩时间。Decomp+Time在本地具有9.73 kB/s的容量，在互联网上（经过14个跳数）具有10.72 bit/min的容量。利用Comprezzor，我们开发了四个不同案例研究中逐字节泄露数据的攻击：首先，在远程PHP脚本中从Memcached泄露1.50 bit/min。其次，在互联网上，从Python-Flask应用程序中的PostgreSQL泄露2.69 bit/min的数据库记录。第三，在Linux上从ZRAM压缩页面本地泄露49.14 bit/min的秘密信息。第四，在使用ZRAM的系统上，从Google Chrome浏览器内部的V8引擎中泄露内部堆指针。因此，即使应用程序仅通过远程接口可访问，重新评估对敏感数据使用压缩的重要性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179297/](https://ieeexplore.ieee.org/document/10179297/)
## TEEzz: Fuzzing Trusted Applications on COTS Android Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#teezz-fuzzing-trusted-applications-on-cots-android-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#teezz-fuzzing-trusted-applications-on-cots-android-devices)**
### 作者
* Marcel Busch, EPFL
* Aravind Machiry, Purdue University
* Chad Spensky, Allthenticate
* Giovanni Vigna, UC Santa Barbara
* Christopher Kruegel, UC Santa Barbara
* Mathias Payer, EPFL
### 摘要
> 安全和隐私敏感的智能手机应用程序使用可信执行环境（TEE）来保护敏感操作免受恶意代码的侵害。按设计，TEE具有对整个系统的特权访问，但对其内部运作几乎没有透露。此外，真实环境中的TEE，在与可信应用程序（TA）通信时强制执行严格的格式和协议交互，这禁止了有效的自动化测试。TEEzz是第一个具备运行在生产智能手机上的TEE感知模糊测试框架，即TA在加密和受保护的TEE中运行，模糊器只能观察与TA的交互，但无权控制TA的代码或数据。与传统的模糊测试技术不同，传统技术监视模糊程序的执行并在崩溃后查看其内存，TEEzz只需要对目标有限的视图。TEEzz通过自动尝试推断TA API的字段类型和消息依赖关系，设计状态和类型感知的模糊变异器，并创建一个在设备上运行的原地模糊器来克服TEE模糊测试的关键限制（例如，对执行的TA缺乏可见性，专有的交换格式以及交互的值依赖性）。由于市面上的商用Android设备上关于TA的系统模糊测试研究有限，我们广泛检查现有解决方案，探讨它们的局限性，并展示TEEzz如何改善现有技术水平。首先，我们证明了通用内核驱动程序模糊测试工具对于模糊测试TA的无效性。然后，我们通过一个真实实验建立了模糊测试TA的基准。我们证明了TEEzz优于其他黑盒模糊测试工具，可以改进灰盒测试方法（如果TA源代码可用），甚至对于有状态目标也优于灰盒测试方法。我们在最新版本的OPTEE TA中共发现了13个之前未知的漏洞，其中TEEzz是唯一能触发三个漏洞的模糊器。我们还在热门手机上运行TEEzz，并发现了40个独特的漏洞，其中已经分配了一个CVE编号。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179302/](https://ieeexplore.ieee.org/document/10179302/)
## Half&Half: Demystifying Intel's Directional Branch Predictors for Fast, Secure Partitioned Execution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#half-half-demystifying-intels-directional-branch-predictors-for-fast-secure-partitioned-execution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#half-half-demystifying-intels-directional-branch-predictors-for-fast-secure-partitioned-execution)**
### 作者
* Hosein Yavarzadeh, University of California San Diego
* Mohammadkazem Taram, Purdue University
* Shravan Narayan, University of California San Diego; University of Texas at Austin
* Deian Stefan, University of California San Diego
* Dean Tullsen, University of California San Diego
### 摘要
> 本文介绍了Half&Half，一种新颖的软件防御技术，可防范基于分支的侧信道攻击。Half&Half通过隔离不同保护领域对现代英特尔处理器中的条件分支预测器(CBPs)的影响。本研究首次对现代条件分支预测结构进行了全面分析，并首次揭示了使用共享预测器在两个领域之间进行物理分区，并完全防止泄漏的未知机会。Half&Half是一种仅需软件解决的分支预测器隔离方案，无需对硬件或ISA进行任何更改，只需要对现有编译器进行轻微修改即可提供支持。我们在LLVM和WebAssembly编译器中实现了Half&Half，并展示其与当前最先进的基于分支的侧信道防御措施相比，其开销降低了一个数量级。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179415/](https://ieeexplore.ieee.org/document/10179415/)
## Half&Half: Demystifying Intel's Directional Branch Predictors for Fast, Secure Partitioned Execution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#half-half-demystifying-intels-directional-branch-predictors-for-fast-secure-partitioned-execution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#half-half-demystifying-intels-directional-branch-predictors-for-fast-secure-partitioned-execution)**
### 作者
* Hosein Yavarzadeh, University of California San Diego
* Mohammadkazem Taram, Purdue University
* Shravan Narayan, University of California San Diego; University of Texas at Austin
* Deian Stefan, University of California San Diego
* Dean Tullsen, University of California San Diego
### 摘要
> 本文介绍了Half&Half，一种新颖的软件防御技术，可防范基于分支的侧信道攻击。Half&Half通过隔离不同保护领域对现代英特尔处理器中的条件分支预测器(CBPs)的影响。本研究首次对现代条件分支预测结构进行了全面分析，并首次揭示了使用共享预测器在两个领域之间进行物理分区，并完全防止泄漏的未知机会。Half&Half是一种仅需软件解决的分支预测器隔离方案，无需对硬件或ISA进行任何更改，只需要对现有编译器进行轻微修改即可提供支持。我们在LLVM和WebAssembly编译器中实现了Half&Half，并展示其与当前最先进的基于分支的侧信道防御措施相比，其开销降低了一个数量级。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179309/](https://ieeexplore.ieee.org/document/10179309/)
## Improving Developers' Understanding of Regex Denial of Service Tools through Anti-Patterns and Fix Strategies.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#improving-developers-understanding-of-regex-denial-of-service-tools-through-anti-patterns-and-fix-strategies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#improving-developers-understanding-of-regex-denial-of-service-tools-through-anti-patterns-and-fix-strategies)**
### 作者
* Sk Adnan Hassan, Virginia Tech, Blacksburg, VA, USA
* Zainab Aamir, Stony Brook University, Stony Brook, NY, USA
* Dongyoon Lee, Stony Brook University, Stony Brook, NY, USA
* James C. Davis, Purdue University, West Lafayette, IN, USA
* Francisco Servant, University of Málaga, Málaga, Spain
### 摘要
> 正则表达式常被用于各种用途，包括输入验证和防火墙。不幸的是，它们还可能导致一种安全漏洞，称为ReDoS（正则表达式拒绝服务），这是由于在正则表达式匹配期间的超线性最坏情况执行时间而引起的。鉴于ReDoS的严重性和普遍性，过去的研究提出了自动工具来检测和修复正则表达式。尽管这些工具在自动实验中进行了评估，但它们的可用性尚未得到研究，可用性也不是以往工作的重点。我们的观点是，如果我们将现有的检测和修复正则表达式的工具与反模式和修复策略相结合，那么这些工具的可用性将得到改善。我们为易受攻击的正则表达式开发了新颖的反模式，并提供了一系列修复策略来修复它们。我们从一种新颖的正则表达式无限模糊性理论中推导出我们的反模式和修复策略，这是一种ReDoS易受攻击的正则表达式的必要条件。我们证明了我们理论的准确性和完备性。我们评估了我们的反模式的有效性，既在自动实验中，也在手动应用中。然后，我们评估了我们的反模式和修复策略对开发人员理解检测和修复工具结果的改进程度。我们的评估发现，在大规模正则表达式数据集（N=209,188）上，我们的反模式效果显著：100%的精确度和99%的召回率，相对于现有技术的50%精确度和87%召回率有所改进。当手动应用时，我们的反模式也比现有技术更有效（N=20）：100%的开发人员有效地应用了它们，而现有技术仅有50%。最后，我们的反模式和修复策略提高了使用自动工具的开发人员的理解程度（N=9）：在检测漏洞时，从中位数的“非常薄弱”提高到中位数的“强烈”，在修复漏洞时，从中位数的“非常薄弱”提高到中位数的“非常强烈”。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179442/](https://ieeexplore.ieee.org/document/10179442/)
## Practical Program Modularization with Type-Based Dependence Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#practical-program-modularization-with-type-based-dependence-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#practical-program-modularization-with-type-based-dependence-analysis)**
### 作者
* Kangjie Lu, University of Minnesota
### 摘要
> 当今的软件程序越来越臃肿且变得异常复杂。由于程序中通常没有内部模块之间的隔离，一个漏洞可以被利用来破坏内存并接管整个程序。因此，程序模块化是一种有前途的安全机制，可以将复杂的程序分解为较小的模块，从而限制内存访问指令破坏无关模块的能力。实现程序模块化的一般方法是依赖分析，其确定一个指令是否与特定代码或数据无关；如果是的话，就可以进行模块化。不幸的是，由于数据流分析中存在的问题，如未知的间接调用目标、指针别名和路径爆炸，依赖分析在复杂程序中通常被认为是不可行的。因此，我们还没有看到基于依赖分析的实用自动化程序模块化。本文提出了一种突破性的基于类型的程序模块化依赖分析方法（TyPM）。它的目标是确定程序中的哪些模块永远不会向内存访问指令传递某种对象类型（包括引用）；因此，由这些模块创建的此类型的对象永远不会成为指令的有效目标。其思想是首先采用基于类型的分析来确定两个模块之间可能发生的数据流类型，然后在特定类型的条件下，迭代地解析所有依赖于内存访问指令的模块。这种方法避免了数据流分析，因此可以实际应用。我们基于TyPM开发了两个重要的安全应用程序：优化间接调用目标和保护关键数据结构。我们对TyPM进行了广泛的评估，包括操作系统内核、虚拟机监视器、UEFI固件和浏览器等各种系统软件。结果表明，TyPM在平均水平上可以将现有技术产生的间接调用目标优化提高31%至91%。TyPM还可以防止99.9%的内存写指令模块破坏Linux内核中的关键数据结构。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179412/](https://ieeexplore.ieee.org/document/10179412/)
## WarpAttack: Bypassing CFI through Compiler-Introduced Double-Fetches.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#warpattack-bypassing-cfi-through-compiler-introduced-double-fetches) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#warpattack-bypassing-cfi-through-compiler-introduced-double-fetches)**
### 作者
* Jianhao Xu, State Key Laboratory for Novel Software Technology, Nanjing University; EPFL
* Luca Di Bartolomeo, EPFL
* Flavio Toffalini, EPFL
* Bing Mao, State Key Laboratory for Novel Software Technology, Nanjing University
* Mathias Payer, EPFL
### 摘要
> 代码重用攻击是一种具有危险威胁的攻击方式，已经引起安全社区多年的关注。这些攻击旨在通过破坏重要的控制流转移，以在不注入代码的情况下控制进程。如今，多个缓解措施（例如ASLR、DEP和CFI）的组合大大减少了这种攻击的可能性，使得运行代码重用攻击更具挑战性。不幸的是，安全缓解措施与编译器优化结合在一起，无法区分安全相关代码和应用程序代码。盲目地在代码重用缓解措施上部署代码优化可能会损害其安全保证。例如，编译器可能引入双重获取漏洞，导致并发问题，如时间检查到使用（TOCTTOU）攻击。在这项工作中，我们提出了一种新的攻击向量，称为WarpAttack，利用编译器引入的双重获取优化来发动TOCTTOU攻击并绕过代码重用缓解措施。我们研究了该攻击的机制，并针对最新版本的Firefox提出了一个实际的概念证明性攻击。此外，我们提出了一种轻量级分析方法，用于定位易受攻击的双重获取代码（具有3%的误报率），并对六个流行应用程序、五个操作系统和四种架构（32位和64位）进行研究以研究这种威胁的扩散。此外，我们还研究了我们的攻击对六种CFI实现的影响。最后，我们调查了解决这一威胁的可能研究方向，并提出了在现有项目中部署的实际解决方案。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179433/](https://ieeexplore.ieee.org/document/10179433/)
## SoK: Certified Robustness for Deep Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-certified-robustness-for-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-certified-robustness-for-deep-neural-networks)**
### 作者
* Linyi Li, University of Illinois Urbana-Champaign
* Tao Xie, Key Laboratory of High Confidence Software Technologies, MoE (Peking University)
* Bo Li, University of Illinois Urbana-Champaign
### 摘要
> 深度神经网络（DNN）的巨大进展使其在各种任务上实现了最先进的性能。然而，最近的研究表明DNN对敌对攻击是脆弱的，在将这些模型部署到安全关键的应用（如自动驾驶）时引起了极大的关注。针对敌对攻击提出了不同的防御方法，包括：a）经验性防御，通常可以被适应性地再次攻击，而不提供鲁棒性认证；和b）可证明鲁棒方法，包括在特定条件下提供对任何攻击的鲁棒准确性下界和相应的鲁棒训练方法的鲁棒性验证。在本文中，我们系统化了可证明鲁棒方法及其相关的实际和理论问题和发现。我们还在不同数据集上提供了现有鲁棒性验证和训练方法的首个综合基准。具体而言，我们1）为鲁棒性验证和训练方法提供了分类法，并总结了代表性算法的方法论，2）揭示了这些方法之间的特点、优势、限制和基本联系，3）讨论了当前的研究进展、理论障碍、主要挑战和可证明鲁棒方法在DNN中的未来方向，4）提供了一个开源统一平台，用于评估20多种代表性的可证明鲁棒方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179303/](https://ieeexplore.ieee.org/document/10179303/)
## RAB: Provable Robustness Against Backdoor Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rab-provable-robustness-against-backdoor-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rab-provable-robustness-against-backdoor-attacks)**
### 作者
* Maurice Weber, ETH Zurich, Switzerland
* Xiaojun Xu, University of Illinois at Urbana-Champaign, USA
* Bojan Karlaš, ETH Zurich, Switzerland
* Ce Zhang, ETH Zurich, Switzerland
* Bo Li, University of Illinois at Urbana-Champaign, USA
### 摘要
> 近期的研究表明，深度神经网络（DNN）容易受到逃避和后门（污染）攻击等对抗性攻击的影响。在防御方面，人们一直在大力提高对逃避攻击的经验性和可证实鲁棒性，然而对抗后门攻击的可证实鲁棒性仍然鲜有探索。本文旨在研究机器学习模型在面对一般威胁模型，尤其是后门攻击时的鲁棒性认证。我们首先通过随机平滑技术提供一个统一的框架，并展示了如何在逃避和后门攻击上进行鲁棒性认证。然后，我们提出了第一个鲁棒训练过程RAB，用于平滑训练的模型并对其在面对后门攻击时的鲁棒性进行认证。我们从理论上证明了使用RAB进行机器学习模型训练的鲁棒性界限，并证明了我们的鲁棒性界限是紧致的。此外，我们也理论上展示了对于简单模型（比如K最近邻分类器）可以高效地训练鲁棒性平滑模型，并且我们提出了一种精确的平滑训练算法，从而避免了对这类模型进行噪声分布采样的需要。从实验上来看，我们对各种机器学习模型（例如DNN、支持向量机和K-NN模型）在MNIST、CIFAR-10和ImageNette数据集上进行了全面的实验，并首次为对抗后门攻击的认证鲁棒性提供了基准。此外，我们还在一个垃圾邮件数据集上评估了K-NN模型，以展示所提出的精确算法的优势。理论分析和对不同机器学习模型和数据集的全面评估为进一步针对一般训练时攻击开展鲁棒学习策略提供了指导。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179451/](https://ieeexplore.ieee.org/document/10179451/)
## ObjectSeeker: Certifiably Robust Object Detection against Patch Hiding Attacks via Patch-agnostic Masking.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#objectseeker-certifiably-robust-object-detection-against-patch-hiding-attacks-via-patch-agnostic-masking) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#objectseeker-certifiably-robust-object-detection-against-patch-hiding-attacks-via-patch-agnostic-masking)**
### 作者
* Chong Xiang, Princeton University
* Alexander Valtchanov, Princeton University
* Saeed Mahloujifar, Princeton University
* Prateek Mittal, Princeton University
### 摘要
> 物体检测器广泛应用于自动驾驶等安全关键系统中，但已发现其容易受到补丁隐藏攻击的威胁。攻击者可以使用一个可实现的对抗性补丁来使物体检测器错过对受害物体的检测，并破坏物体检测应用的功能。在本文中，我们提出了一种针对补丁隐藏攻击具有可证明鲁棒性的物体检测器——ObjectSeeker。ObjectSeeker的关键洞见是补丁无关的遮罩：我们旨在遮罩整个对抗性补丁，而无需了解补丁的形状、大小和位置。这种遮罩操作能够中和对抗效果，并使得任何标准物体检测器能够安全地在遮罩图像上检测物体。值得注意的是，我们可以以可证明的方式评估ObjectSeeker的鲁棒性：我们开发了一个认证过程，正式确定ObjectSeeker是否能够对某些物体进行检测，并抵御威胁模型内的任何白盒自适应攻击，实现可证明的鲁棒性。我们的实验证明，相比之前的工作，ObjectSeeker的可证明鲁棒性有显著提升（绝对值约为10%-40%，相对值约为2-6倍），同时具有较高的干净性能（与未进行防御的模型相比，下降约为1%）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179319/](https://ieeexplore.ieee.org/document/10179319/)
## PublicCheck: Public Integrity Verification for Services of Run-time Deep Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#publiccheck-public-integrity-verification-for-services-of-run-time-deep-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#publiccheck-public-integrity-verification-for-services-of-run-time-deep-models)**
### 作者
* Shuo Wang, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Sharif Abuadbba, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Sidharth Agarwal, Indian Institute of Technology, Delhi, India
* Kristen Moore, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Ruoxi Sun, CSIRO’s Data61, Australia
* Minhui Xue, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Surya Nepal, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Seyit Camtepe, CSIRO’s Data61, Australia; Cybersecurity CRC, Australia
* Salil Kanhere, University of New South Wales, Australia
### 摘要
> 现有的深度模型完整性验证方法都是设计为私有验证（即假设服务提供商是诚实的，具有模型参数的白盒访问权限）。然而，私有验证方法不允许模型用户在运行时验证模型。相反，他们必须相信服务提供商，而服务提供商可能会篡改验证结果。相比之下，考虑到可能存在不诚实的服务提供商的公共验证方法可以惠及更广泛的用户。在本文中，我们提出了PublicCheck，一种实用的针对运行时深度模型的公共完整性验证解决方案。PublicCheck考虑到了不诚实的服务提供商，并克服了公共验证在轻量级、提供防伪保护以及具有看起来平滑的指纹样本方面的挑战。为了捕捉和提取运行时模型的内在预测行为，PublicCheck生成了平滑变换和增强的包围样本，这些样本围绕着模型的决策边界，并且确保验证查询在外观上和正常查询不可区分。在目标模型的知识有限的情况下（例如，没有梯度或模型参数的知识），PublicCheck也适用。PublicCheck的彻底评估表明了其对各种模型完整性攻击和模型压缩攻击具有强大的完整性违规检测能力（对于少于10个黑盒API查询，检测准确率达到100%）。PublicCheck还展示了生成大量用于指纹识别的包囊样本的平滑外观、可行性和高效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179380/](https://ieeexplore.ieee.org/document/10179380/)
## FedRecover: Recovering from Poisoning Attacks in Federated Learning using Historical Information.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fedrecover-recovering-from-poisoning-attacks-in-federated-learning-using-historical-information) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fedrecover-recovering-from-poisoning-attacks-in-federated-learning-using-historical-information)**
### 作者
* Xiaoyu Cao, Duke University
* Jinyuan Jia, Duke University
* Zaixi Zhang, University of Science and Technology of China
* Neil Zhenqiang Gong, Duke University
### 摘要
> 联邦学习易受恶意客户的毒化攻击影响，这些攻击者会通过向服务器发送恶意模型更新来毒化全局模型。现有的防御方法主要集中在通过强化联邦学习方法来防止少数恶意客户毒化全局模型，并在存在大量恶意客户时检测出它们。然而，在检测到恶意客户之后，如何从毒化攻击中恢复全局模型仍然是一个开放性挑战。一种简单的解决方案是移除检测到的恶意客户，并使用剩余的客户从头开始训练一个新的全局模型。然而，这种从头训练的恢复方法会产生大量的计算和通信成本，这对于资源受限的客户端（如智能手机和物联网设备）可能是难以承受的。
> 
> 在本研究中，我们提出了FedRecover，一种可以在客户端承受较小计算和通信成本的情况下从毒化攻击中恢复准确的全局模型的方法。我们关键的思想是，在恢复过程中，服务器通过估计客户端的模型更新来代替要求客户端进行计算和通信。具体而言，当训练被毒化的全局模型之前，服务器存储历史信息，包括每轮的全局模型和客户端的模型更新。在恢复过程中，服务器使用存储的历史信息估计每轮客户端的模型更新。此外，我们进一步优化了FedRecover，通过热身、定期修正、异常修复和最终调整策略来恢复一个更准确的全局模型，其中服务器要求客户端计算和通信确切的模型更新。从理论上讲，我们证明了FedRecover恢复的全局模型在某些假设下与从头训练恢复的模型接近或相同。经验上，我们在四个数据集、三种联邦学习方法以及非定向和定向的毒化攻击（如后门攻击）上进行了评估，结果表明FedRecover既准确又高效。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179336/](https://ieeexplore.ieee.org/document/10179336/)
## On The Empirical Effectiveness of Unrealistic Adversarial Hardening Against Realistic Adversarial Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-empirical-effectiveness-of-unrealistic-adversarial-hardening-against-realistic-adversarial-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#on-the-empirical-effectiveness-of-unrealistic-adversarial-hardening-against-realistic-adversarial-attacks)**
### 作者
* Salijona Dyrmishi, University of Luxembourg
* Salah Ghamizi, University of Luxembourg
* Thibault Simonetto, University of Luxembourg
* Yves Le Traon, University of Luxembourg
* Maxime Cordy, University of Luxembourg
### 摘要
> 虽然针对机器学习（ML）系统的安全攻击和防御的文献主要关注不切实际的对抗性示例，但最近的研究引发了对切实可行的对抗攻击领域及其对实际系统鲁棒性的影响的关注。本文为更好地理解对抗性鲁棒性所做实际攻击的贡献提供了铺垫，并做出两个重要贡献。首先，我们通过研究三个实际应用案例（文本分类、僵尸网络检测、恶意软件检测）和七个数据集来评估不切实际的对抗示例是否可用于保护模型免受实际示例的攻击。我们的结果显示在不同应用案例中存在差异，不切实际的示例可能与实际示例具有相同的效果，也可能只能提供有限的改进。其次，为了解释这些结果，我们分析了使用实际和不切实际攻击生成的对抗性示例的潜在表示。我们阐明了区分哪些不切实际的示例可以用于有效强化的模式。我们公开我们的代码、数据集和模型，以支持未来研究探索如何缩小不切实际和实际对抗攻击之间的差距。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179316/](https://ieeexplore.ieee.org/document/10179316/)
## Rethinking Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rethinking-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rethinking-searchable-symmetric-encryption)**
### 作者
* Zichen Gui, ETH Zürich
* Kenneth G. Paterson, ETH Zürich
* Sikhar Patranabis, IBM Research India
### 摘要
> 对称可搜索加密（SSE）方案能够在加密的文档中进行关键字搜索。为了提高效率，SSE方案会产生一定量的信息泄漏。关于SSE的大部分文献只考虑总体SSE系统的一个组件，即加密搜索索引的信息泄漏。该组件用于识别要返回作为关键字查询响应的文档。实际文档的提取留给另一个组件，通常在文献中没有明确说明，但一般被看作是一个简单的存储系统，将文档标识符与加密文档进行匹配。这引出了一个问题：当考虑到系统整体时，SSE方案是否能够真正保护数据和查询的安全性？我们的回答是否定的。我们通过引入一种新的推理攻击来做到这一点，该攻击实现了高效、高可扩展性和准确的查询重构，针对端到端SSE系统。特别地，即使使用自然方式构建SSE方案（即采用先进技术，如容量隐藏的加密多映射），以抑制信息泄漏并防止上一代攻击，我们的攻击仍然有效。第二个问题是最先进的信息泄漏抑制技术是否可以在系统整体上应用，以保护加密搜索索引和加密文档存储，从而产生高效的SSE系统。我们也是否定地回答了这个问题。为此，我们使用这些最先进的信息泄漏抑制方法实现SSE系统，并评估它们的性能。我们展示了与天真的基准系统相比，存储开销从100倍到800倍，带宽开销从20倍到100倍不等。我们的结果促使设计一个从一开始就考虑系统整体安全性的新的SSE系统。在这方面，我们展示了一种由Chen等人提出的SSE系统（IEEE INFOCOM 2018），它具有基于差分隐私的可证明安全性，并且也容易受到我们的新攻击。总的来说，我们的结果迫使重新评估如何构建既安全又高效的端到端SSE系统。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179460/](https://ieeexplore.ieee.org/document/10179460/)
## Private Collaborative Data Cleaning via Non-Equi PSI.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-collaborative-data-cleaning-via-non-equi-psi) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-collaborative-data-cleaning-via-non-equi-psi)**
### 作者
* Erik-Oliver Blass, Airbus Munich, Germany
* Florian Kerschbaum, University of Waterloo Waterloo, Canada
### 摘要
> 我们介绍并研究了隐私保护版本的协同数据清洗。在协同数据清洗中，两个参与方希望协调他们的数据集，过滤掉错误分类、误分类的数据项。在隐私保护（私有）数据清洗中，额外的安全目标是各方仅应了解其误分类的数据项，而不了解其他参与方的数据集的任何其他信息。私有数据清洗问题本质上是私有集合交集（PSI）的一个变体，可以使用最近的电路-PSI技术计算具有隐私的误分类。然而，我们设计、分析和实施了三个根据私有数据清洗的特定情况优于电路-PSI方法的新协议。在第一个协议中，我们利用一个小的额外泄露（数据项交集的差分隐私大小）的思想，可以降低电路-PSI的复杂性。另外两个协议将在数据分类中找到不匹配的问题转化为找到匹配，并采用标准技术使用随机伪随机函数（OPRF）来计算PSI。根据数据类的数量，这导致了比电路-PSI更具体的运行时间改进。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179396/](https://ieeexplore.ieee.org/document/10179396/)
## Private Collaborative Data Cleaning via Non-Equi PSI.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-collaborative-data-cleaning-via-non-equi-psi) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-collaborative-data-cleaning-via-non-equi-psi)**
### 作者
* Erik-Oliver Blass, Airbus Munich, Germany
* Florian Kerschbaum, University of Waterloo Waterloo, Canada
### 摘要
> 我们介绍并研究了隐私保护版本的协同数据清洗。在协同数据清洗中，两个参与方希望协调他们的数据集，过滤掉错误分类、误分类的数据项。在隐私保护（私有）数据清洗中，额外的安全目标是各方仅应了解其误分类的数据项，而不了解其他参与方的数据集的任何其他信息。私有数据清洗问题本质上是私有集合交集（PSI）的一个变体，可以使用最近的电路-PSI技术计算具有隐私的误分类。然而，我们设计、分析和实施了三个根据私有数据清洗的特定情况优于电路-PSI方法的新协议。在第一个协议中，我们利用一个小的额外泄露（数据项交集的差分隐私大小）的思想，可以降低电路-PSI的复杂性。另外两个协议将在数据分类中找到不匹配的问题转化为找到匹配，并采用标准技术使用随机伪随机函数（OPRF）来计算PSI。根据数据类的数量，这导致了比电路-PSI更具体的运行时间改进。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179337/](https://ieeexplore.ieee.org/document/10179337/)
## SPHINCS+C: Compressing SPHINCS+ With (Almost) No Cost.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sphincs-c-compressing-sphincs-with-almost-no-cost) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sphincs-c-compressing-sphincs-with-almost-no-cost)**
### 作者
* Andreas Hülsing, TU Eindhoven
* Mikhail Kudinov, TU Eindhoven
* Eyal Ronen, Tel Aviv University
* Eylon Yogev, Bar-Ilan University
### 摘要
> SPHINCS+ [CCS'19] 是NIST后量子标准化过程中选择的后量子数字签名方案之一。该方案是基于哈希的签名方案，被认为是最安全和最健壮的方案之一。该提案包括一个快速（但较大）的变体和一个小型（但较慢）的变体，适用于每个安全级别。可能会阻碍其采用的主要问题是其签名大小较大。虽然SPHINCS+支持在签名大小和签名计算成本之间进行权衡，但进一步减小签名大小（低于小型变体）会导致签名方请愿人的计算成本过高。本文介绍了几种新方法，可以进一步压缩签名大小，而对签名方请愿人而言增加的计算成本可以忽略不计，并进一步减小验证时间。此外，我们的方法使得签名大小与签名方请愿人的计算成本之间的权衡曲线更加高效。在许多参数设置中，我们同时实现了小型签名和更快的运行时间。例如，对于128位（经典）安全性，SPHINCS+的小型签名变体长度为7856字节，而我们的变体仅为6304字节：约20％的压缩，同时仍然减少签名方请愿人的运行时间。然而，也可以进行关注验证速度等其他权衡。我们方案的主要洞察力在于，存在预定义的特定消息子集，对于这些子集，SPHINCS+使用的WOTS+和FORS签名可以进行压缩，并且可以在保持相同安全性保证的同时实现更快的生成。虽然大多数消息不会来自这些子集，但我们可以搜索适合签名的哈希值。我们对消息和一个选择的计数器进行哈希，使得哈希值在子集中。生成的签名既较小又较快速进行签名和验证。我们的方案易于描述和实现。我们提供了一个实现，速度和安全性的理论分析，以及基准结果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179381/](https://ieeexplore.ieee.org/document/10179381/)
## Threshold Signatures in the Multiverse.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#threshold-signatures-in-the-multiverse) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#threshold-signatures-in-the-multiverse)**
### 作者
* Leemon Baird, Swirlds Labs
* Sanjam Garg, UC Berkeley; NTT Research
* Abhishek Jain, Johns Hopkins University
* Pratyay Mukherjee, Supra Oracles
* Rohit Sinha, Meta
* Mingyuan Wang, UC Berkeley
* Yinuo Zhang, UC Berkeley
### 摘要
> 我们介绍了一种新的多宇宙门限签名（MTS）的概念。在MTS方案中，多个宇宙可以共存，每个宇宙由一组（可能重叠的）签名者、他们的权重和特定安全门限定义。通过非交互异步设置，可以（自适应地）创建宇宙。关键是，多宇宙中的每个参与方持有常量大小的密钥，并发布大小和计算时间与宇宙数量无关的紧凑签名。在具有足够来自特定宇宙成员的消息的部分签名的情况下，聚合器可以生成与该宇宙相关的简短聚合签名。我们构建了一个基于BLS签名的MTS方案。我们的方案实用，并可用于降低分散式预言机网络中的带宽复杂性和计算成本。作为一个数据点的示例，考虑一个包含2000个节点和100个宇宙（参数受Chainlink在实际中的使用启发）的多宇宙，每个宇宙包含任意大的节点子集和任意门限。每个节点计算和输出一个群元素作为其部分签名；聚合器对每个聚合签名执行少于0.7秒的工作，并且192字节大小的最终签名需要6.4毫秒（或198K EVM gas单位）进行验证。对于这种设置，先前的方法在构建MTS时具有以下缺点之一：（i）部分签名的大小增加了48倍，（ii）聚合时间恶化了311倍，或者（iii）签名大小增加了39倍，验证燃气成本增加了3.38倍。我们还提供了开源实现和详细评估。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179436/](https://ieeexplore.ieee.org/document/10179436/)
## FIDO2, CTAP 2.1, and WebAuthn 2: Provable Security and Post-Quantum Instantiation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fido2-ctap-2-1-and-webauthn-2-provable-security-and-post-quantum-instantiation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#fido2-ctap-2-1-and-webauthn-2-provable-security-and-post-quantum-instantiation)**
### 作者
* Nina Bindel, SandboxAQ, Palo Alto, USA
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mang Zhao, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> FIDO2协议是一种全球通用的无密码认证标准，建立在在线认证领域的主要参与者联盟之间的基础上。虽然已广泛部署，但该标准仍在积极开发中。自其CTAP子协议2.1版本以来，FIDO2有可能与后量子安全原语实例化。我们提供了对FIDO2与CTAP 2.1和WebAuthn 2子协议的首个正式安全分析。我们的安全模型基于Barbosa等人对FIDO2与CTAP 2.0和WebAuthn 1的分析工作，我们在几个方面进行了扩展。首先，我们提供了一个更细粒度的安全模型，使我们能够证明更相关的协议属性，比如令牌绑定协议的保证、无证明模式和用户验证。其次，在某些条件和小型协议扩展下，我们能够证明FIDO2的后量子安全性。最后，我们展示了对于某些威胁模型，FIDO2的降级韧性可以得到改善，并展示了如何通过简单修改来实现这一点。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179454/](https://ieeexplore.ieee.org/document/10179454/)
## Token meets Wallet: Formalizing Privacy and Revocation for FIDO2.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#token-meets-wallet-formalizing-privacy-and-revocation-for-fido2) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#token-meets-wallet-formalizing-privacy-and-revocation-for-fido2)**
### 作者
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security
* Julian Loss, CISPA Helmholtz Center for Information Security
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarland University
### 摘要
> FIDO2标准是一种广泛使用的挑战-响应类型协议，允许使用硬件令牌对在线服务进行身份验证。Barbosa等人（CRYPTO ‘21）为FIDO2标准提供了第一个形式化的安全模型和分析。然而，他们的模型有两个缺点：（1）它不包括隐私，这是FIDO2声称的关键特性之一。（2）它只涵盖了本地存储所有秘密密钥的令牌。相反，由于内存有限，大多数现有的FIDO2令牌要么从一个公共种子派生所有秘密密钥，要么在服务器上存储密钥（后一种方法也称为密钥封装）。在本文中，我们重新审视了实践中实现的FIDO2的WebAuthn组件的安全性。我们的贡献如下：（1）我们调整了Barbosa等人的模型，以捕捉使用密钥派生或密钥封装的认证令牌。（2）我们首次对FIDO2的WebAuthn组件提供了隐私的正式定义。然后，我们证明了在常见的FIDO2令牌实现中，如果选择了适当的基本构建块，该组件具有隐私性。（3）我们解决了FIDO2中全局密钥吊销的未解决问题。为此，我们引入并分析了一个简单的吊销过程，该过程建立在加密货币钱包中使用的流行BIP32标准之上，并且可以通过现有的FIDO2服务器高效实现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179373/](https://ieeexplore.ieee.org/document/10179373/)
## SoK: Taxonomy of Attacks on Open-Source Software Supply Chains.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-taxonomy-of-attacks-on-open-source-software-supply-chains) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-taxonomy-of-attacks-on-open-source-software-supply-chains)**
### 作者
* Piergiorgio Ladisa, SAP Security Research; Université de Rennes 1, Inria, IRISA
* Henrik Plate, SAP Security Research
* Matias Martinez, Université Polytechnique Hauts-de-France
* Olivier Barais, Université de Rennes 1, Inria, IRISA
### 摘要
> 广泛依赖开源软件使其成为恶意行为者的丰富目标，反复出现攻击案例证明了这一点。如今开源供应链的复杂性导致了一个重大攻击面，给攻击者提供了许多机会，使其能够注入恶意代码到开源构件中，并被受害者下载和执行。本研究提出了一个针对开源供应链攻击的通用分类方法，与特定编程语言或生态系统无关，涵盖了从代码贡献到包分发的所有供应链阶段。这个攻击树包括了107个独特的向量，与94个真实世界事件相关联，并映射到33个缓解措施。通过与17位领域专家和134位软件开发人员进行的用户调查，证实了这个分类方法的正确性、全面性和易读性，以及其适用于各种用例的合适性。调查参与者还评估了已识别的缓解措施的实用性和成本，以及它们是否被使用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179304/](https://ieeexplore.ieee.org/document/10179304/)
## It's like flossing your teeth: On the Importance and Challenges of Reproducible Builds for Software Supply Chain Security.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-like-flossing-your-teeth-on-the-importance-and-challenges-of-reproducible-builds-for-software-supply-chain-security) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-like-flossing-your-teeth-on-the-importance-and-challenges-of-reproducible-builds-for-software-supply-chain-security)**
### 作者
* Marcel Fourné, Max Planck Institute for Security and Privacy, Bochum, Germany
* Dominik Wermke, CISPA Helmholtz Center for Information Security, Germany
* William Enck, North Carolina State University, Raleigh, North Carolina, USA
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Germany
* Yasemin Acar, Paderborn University, Germany; George Washington University, USA
### 摘要
> 2020年的Solarwinds攻击成为一个临界点，引发了对软件供应链安全的高度关注，特别是对构建系统所寄予的大量信任。可复现构建（R-Bs）为构建系统对任意攻击提供了坚实的基础，它通过确保相同的源代码、构建环境和构建指令创建出完全相同的产品。不幸的是，许多软件行业相信R-Bs对大多数项目来说过于遥不可及。本文的目标是帮助确定R-Bs成为普遍性属性的途径。为此，我们对Reproducible-Builds.org项目的参与者进行了一系列24个半结构化专家访谈，发现高度自我有效的开发人员和与上游项目的协作沟通是R-Bs的关键因素。我们发现一系列能够鼓励开源开发人员努力实现R-Bs的动力，包括质量指标、安全优势和更高效的产品缓存。我们还确定了有助于和阻碍采用R-Bs的经验，其中通常涉及与上游项目的沟通。最后，我们提出了如何更好地将R-Bs与开源和自由软件社区的努力整合的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179320/](https://ieeexplore.ieee.org/document/10179320/)
## "Always Contribute Back": A Qualitative Study on Security Challenges of the Open Source Supply Chain.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#always-contribute-back-a-qualitative-study-on-security-challenges-of-the-open-source-supply-chain) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#always-contribute-back-a-qualitative-study-on-security-challenges-of-the-open-source-supply-chain)**
### 作者
* Dominik Wermke, CISPA Helmholtz Center for Information Security, Germany
* Jan H. Klemmer, Leibniz University Hannover, Germany
* Noah Wöhler, CISPA Helmholtz Center for Information Security, Germany
* Juliane Schmüser, CISPA Helmholtz Center for Information Security, Germany
* Harshini Sri Ramulu, Paderborn University, Germany
* Yasemin Acar, Paderborn University, Germany; George Washington University, United States
* Sascha Fahl, CISPA Helmholtz Center for Information Security, Germany; Leibniz University Hannover, Germany
### 摘要
> 开源组件在公司的设置、流程和软件中无处不在。利用这些外部组件作为构建模块使公司能够利用开源软件的好处，从而将精力集中在功能和更快的交付上，而不是编写自己的组件。但是，通过将这些组件引入他们的软件堆栈中，公司继承了独特的安全挑战和攻击面：包括来自潜在未经审核的贡献者的代码和评估和减轻外部组件漏洞影响的义务。在与行业项目的软件开发人员、架构师和工程师进行的25次深入半结构化采访中，我们研究了他们的项目在外部开源代码背景下的流程、决策和考虑。我们发现开源组件在我们参与者的许多项目中起着重要作用，大多数项目都有一定形式的公司政策或至少包括外部代码的最佳实践，并且许多开发人员希望有更多的开发人员时间、专门团队或工具来更好地审查包含的组件。根据我们的发现，我们讨论了对公司利益相关者和开源软件生态系统的影响。总的来说，我们呼吁公司不要将开源生态系统视为一个免费（软件）供应链，而是要为他们从中受益并成为其一部分的整个软件生态系统的健康和安全作出贡献。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179378/](https://ieeexplore.ieee.org/document/10179378/)
## Continuous Intrusion: Characterizing the Security of Continuous Integration Services.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#continuous-intrusion-characterizing-the-security-of-continuous-integration-services) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#continuous-intrusion-characterizing-the-security-of-continuous-integration-services)**
### 作者
* Yacong Gu, QI-ANXIN Technology Research Institute
* Lingyun Ying, QI-ANXIN Technology Research Institute
* Huajun Chai, QI-ANXIN Technology Research Institute
* Chu Qiao, University of Delaware
* Haixin Duan, Tsinghua University; Tsinghua University-QI-ANXIN Group JCNS
* Xing Gao, University of Delaware
### 摘要
> 持续集成（CI）是一种广泛采用的自动化代码集成的软件开发实践。典型的CI工作流涉及多个独立的利益相关者，包括代码托管平台（CHPs），CI平台（CPs）和第三方服务。虽然CI可以显著提高开发效率，但不幸的是，它也暴露了新的攻击面。由于CI任务执行的代码可能来自于不太可信的用户，配置不当的CI和弱隔离机制可能使攻击者通过触发CI任务向受害者软件注入恶意代码。此外，一个不安全的利益相关者可能影响整个过程。在本文中，我们系统地研究了涉及多个利益相关者和主要CP组件的CI工作流中的潜在安全威胁。我们设计和开发了一个分析工具，CInspector，以研究当与三个主流的CHPs集成时，七个流行的CPs可能存在的漏洞。我们发现所有的CPs都存在由于不当的资源共享和隔离导致的令牌泄露的风险，并且其中许多CPs使用权限过高的令牌和不当的有效期。我们进一步揭示了四种新的攻击向量，允许攻击者通过在CI任务中执行一段代码来提升其特权并悄悄注入恶意代码。为了了解其潜在影响，我们在三个主流的CHPs上进行了大规模测量，审查了超过169万个代码库。我们的定量分析证明，一些非常流行的代码库和大型组织都受到了这些攻击的影响。我们已经将发现的漏洞报告给了CPs，并收到了积极的响应。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179471/](https://ieeexplore.ieee.org/document/10179471/)
## Investigating Package Related Security Threats in Software Registries.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#investigating-package-related-security-threats-in-software-registries) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#investigating-package-related-security-threats-in-software-registries)**
### 作者
* Yacong Gu, QI-ANXIN Technology Research Institute
* Lingyun Ying, QI-ANXIN Technology Research Institute
* Yingyuan Pu, QI-ANXIN Technology Research Institute; Ocean University of China
* Xiao Hu, QI-ANXIN Technology Research Institute
* Huajun Chai, QI-ANXIN Technology Research Institute
* Ruimin Wang, QI-ANXIN Technology Research Institute; Southeast University
* Xing Gao, University of Delaware
* Haixin Duan, Tsinghua University; Tsinghua University-QI-ANXIN Group JCNS
### 摘要
> 软件包注册表可以托管可重用的代码资源，使开发人员能够轻松共享和重用软件包，从而加快软件开发过程。目前的软件注册表生态系统涉及多个独立的利益相关者进行软件包管理。不幸的是，异常行为和信息不一致无可避免地存在，使得对手可以在最小的努力下秘密进行恶意活动。在本文中，我们调查了六个流行的软件注册表生态系统中存在的潜在安全漏洞。通过对官方注册表、相应的注册表镜像和注册表客户端进行系统分析，我们发现了12个潜在的攻击向量，其中有6个是第一次被揭示出来的，可以用于隐蔽地分发恶意代码。基于这些安全问题，我们构建了一个分析框架RScouter，用于持续监测和发现注册表生态系统中的漏洞。然后，我们利用RScouter在六个注册表和17个流行的镜像上进行了为期一年的测量研究，详细审查了5300万个软件包版本中的400万个软件包。我们的定量分析表明，每个生态系统中都存在多种威胁，并且一些威胁已被攻击者利用。我们已经将发现的漏洞及时报告给相关利益相关者，并获得了积极的回应。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179332/](https://ieeexplore.ieee.org/document/10179332/)
## ShadowNet: A Secure and Efficient On-device Model Inference System for Convolutional Neural Networks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#shadownet-a-secure-and-efficient-on-device-model-inference-system-for-convolutional-neural-networks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#shadownet-a-secure-and-efficient-on-device-model-inference-system-for-convolutional-neural-networks)**
### 作者
* Zhichuang Sun, Google
* Ruimin Sun, Florida International University
* Changming Liu, Northeastern University
* Amrita Roy Chowdhury, University of California, San Diego
* Long Lu, Northeastern University
* Somesh Jha, University of Wisconsin-Madison
### 摘要
> 随着在移动和边缘设备上使用人工智能加速器的增加，设备上的机器学习（ML）正变得越来越受欢迎。数以千计的专有ML模型今天被部署在数十亿台不受信任的设备上。这引发了有关模型隐私的严重安全担忧。然而，要保护模型隐私而又不失去对不受信任的人工智能加速器的访问是一个具有挑战性的问题。在本文中，我们提出了一种新颖的设备上模型推理系统ShadowNet。ShadowNet通过在外包之前转换线性层的权重并在TEE内部恢复结果来保护模型隐私，同时安全地将模型的重型线性层外包给不受信任的硬件加速器。非线性层也在TEE内保持安全。ShadowNet的设计确保了权重的高效转换和结果的后续恢复。我们基于TensorFlow Lite构建了一个ShadowNet原型，并在五个流行的卷积神经网络上进行了评估，分别是MobileNet、ResNet-44、MiniVGG、ResNet-404和YOLOv4-tiny。我们的评估结果表明，ShadowNet在合理的性能下获得了较强的安全保证，为安全的设备上模型推理提供了实用的解决方案。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179382/](https://ieeexplore.ieee.org/document/10179382/)
## Deepfake Text Detection: Limitations and Opportunities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#deepfake-text-detection-limitations-and-opportunities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#deepfake-text-detection-limitations-and-opportunities)**
### 作者
* Jiameng Pu, Virginia Tech
* Zain Sarwar, University of Chicago
* Sifat Muhammad Abdullah, Virginia Tech
* Abdullah Rehman, Virginia Tech
* Yoonjin Kim, Virginia Tech
* Parantapa Bhattacharya, University of Virginia
* Mobin Javed, LUMS Pakistan
* Bimal Viswanath, Virginia Tech
### 摘要
> 近年来，生成式语言模型的进展使得创造具有说服力的合成文本或“深度伪造”文本成为可能。先前的研究已经证明了深度伪造文本被滥用以误导内容消费者的潜力。因此，深度伪造文本检测，即区分人类和机器生成文本的任务，变得越来越关键。已经提出了几种用于深度伪造文本检测的防御方法。然而，我们缺乏对它们在真实世界中可应用性的全面了解。在本文中，我们收集了通过基于Transformer的工具驱动的4个在线服务生成的深度伪造文本，以评估这些防御措施对野外内容的泛化能力。我们开发了几种低成本的对抗攻击，并调查了现有防御措施对于自适应攻击者的鲁棒性。我们发现，与它们原有声称的性能相比，在我们的评估场景下，许多防御措施的性能显著下降。我们的评估表明，利用文本内容中的语义信息是提高深度伪造文本检测方案的鲁棒性和泛化性能的一种有前途的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179387/](https://ieeexplore.ieee.org/document/10179387/)
## StyleFool: Fooling Video Classification Systems via Style Transfer.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#stylefool-fooling-video-classification-systems-via-style-transfer) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#stylefool-fooling-video-classification-systems-via-style-transfer)**
### 作者
* Yuxin Cao, Shenzhen International Graduate School, Tsinghua University, China
* Xi Xiao, Shenzhen International Graduate School, Tsinghua University, China
* Ruoxi Sun, CSIRO’s Data61, Australia
* Derui Wang, CSIRO’s Data61, Australia
* Minhui Xue, CSIRO’s Data61, Australia
* Sheng Wen, Swinburne University of Technology, Australia
### 摘要
> 视频分类系统容易受到对抗性攻击，这可能在视频验证中造成严重的安全问题。当前的黑盒攻击需要大量的查询才能成功，在攻击过程中导致高计算开销。另一方面，带有受限扰动的攻击对于去噪或对抗学习等防御手段是无效的。在本文中，我们着重研究无限制扰动，并提出了StyleFool，一种通过风格迁移的黑盒视频对抗攻击方法，用于欺骗视频分类系统。StyleFool首先利用颜色主题接近性选择最佳风格图像，这有助于避免风格化视频中的不自然细节。同时，在有目标攻击中还考虑目标类别的置信度，通过将风格化视频接近或甚至穿过决策边界来影响分类器的输出分布。然后，我们采用无梯度法进一步优化对抗性扰动。我们在两个常见数据集，UCF-101和HMDB-51上进行了大量实验评估StyleFool。实验结果表明，在查询数量和对抗性防御的鲁棒性方面，StyleFool优于现有的最先进对抗性攻击方法。此外，50%的非有目标攻击样本不需要任何查询，因为它们已经可以欺骗视频分类模型。此外，我们通过用户研究评估了样本的无法分辨性，结果表明，StyleFool的对抗样本在人眼中是无法察觉的，尽管存在无限制扰动。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179383/](https://ieeexplore.ieee.org/document/10179383/)
## GeeSolver: A Generic, Efficient, and Effortless Solver with Self-Supervised Learning for Breaking Text Captchas.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#geesolver-a-generic-efficient-and-effortless-solver-with-self-supervised-learning-for-breaking-text-captchas) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#geesolver-a-generic-efficient-and-effortless-solver-with-self-supervised-learning-for-breaking-text-captchas)**
### 作者
* Ruijie Zhao, Shanghai Jiao Tong University
* Xianwen Deng, Shanghai Jiao Tong University
* Yanhao Wang, QI-ANXIN
* Zhicong Yan, Shanghai Jiao Tong University
* Zhengguang Han, QI-AN Pangu (Shanghai) InfoTech Co., Ltd.
* Libo Chen, Shanghai Jiao Tong University
* Zhi Xue, Shanghai Jiao Tong University
* Yijun Wang, Shanghai Jiao Tong University
### 摘要
> 尽管用于区分人类用户和机器人的基于文本的验证码已面临许多攻击方法，但它仍然是广泛使用的安全机制，并得到一些网站的采用。一些基于深度学习的文本验证码解决方案显示出优秀的结果，但费时费力的标注过程严重限制了它们的可行性。先前的工作尝试使用有限的标记数据集创建易于使用的解决方案。然而，它们受到了低效的预处理流程和无法识别具有复杂安全特征的验证码的阻碍。本文中，我们提出了GeeSolver，一个基于自监督学习的通用、高效、简便的文本验证码破解器。我们的想法是，许多破坏标准字符字体的难以攻击的验证码方案与图像蒙版相似。我们可以利用蒙版自编码器（MAE）来改进验证码解决方案，从而从验证码图像的“未蒙版”部分学习潜在表示。具体而言，我们的模型包括一个ViT编码器作为潜在表示提取器，以及一个为验证码识别而设计的精心设计的解码器。我们应用MAE范式来训练我们的编码器，使编码器能够从本地信息（即不包含蒙版部分）中提取潜在表示，可以推断出相应的字符。此外，我们冻结编码器的参数，并利用少量标记的验证码和许多未标记的验证码使用半监督学习来训练我们的验证码解码器。我们对真实的验证码方案进行的实验表明，GeeSolver在使用少量标记的验证码时比现有方法有很大的优势。我们还展示了GeeSolver的高效性，它可以在桌面CPU上在25毫秒内解决一个验证码，在桌面GPU上在9毫秒内解决一个验证码。此外，由于潜在表示的提取，我们成功破解了难以攻击的验证码方案，证明了我们解决方案的通用性。我们希望我们的工作能够帮助安全专家重新审视基于文本的验证码的设计和可用性。代码可在https://github.com/NSSL-SJTU/GeeSolver上找到。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179379/](https://ieeexplore.ieee.org/document/10179379/)
## TrojanModel: A Practical Trojan Attack against Automatic Speech Recognition Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#trojanmodel-a-practical-trojan-attack-against-automatic-speech-recognition-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#trojanmodel-a-practical-trojan-attack-against-automatic-speech-recognition-systems)**
### 作者
* Wei Zong, Institute of Cybersecurity and Cryptology (iC²), University of Wollongong, Australia
* Yang-Wai Chow, Institute of Cybersecurity and Cryptology (iC²), University of Wollongong, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology (iC²), University of Wollongong, Australia
* Kien Do, Applied Artificial Intelligence Institute (A²I²), Deakin University, Australia
* Svetha Venkatesh, Applied Artificial Intelligence Institute (A²I²), Deakin University, Australia
### 摘要
> 深度学习技术在现代数字产品中取得了巨大的成功，但研究人员已经证明深度学习模型容易受到特洛伊攻击。在特洛伊攻击中，对手悄无声息地修改了深度学习模型，使得模型在输入中存在特定触发器时输出预定义的标签。在本文中，我们提出了TrojanModel，一种针对自动语音识别（ASR）系统的实用特洛伊攻击。ASR系统的目标是将语音输入转录为文本，以便后续下游应用更容易处理。我们考虑了一种实际的攻击场景，即对手将特洛伊插入目标ASR系统的声学模型中。与现有工作使用易引起用户怀疑的类似噪声的触发器不同，本文的工作侧重于使用不引起怀疑的声音作为触发器，例如背景音乐。此外，TrojanModel不需要对目标模型进行重新训练。实验结果表明，TrojanModel能够实现高攻击成功率，对目标模型的性能几乎没有影响。我们还证明了该攻击在空中攻击场景中的有效性，其中音频通过物理扬声器播放并由麦克风接收。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179331/](https://ieeexplore.ieee.org/document/10179331/)
## REGA: Scalable Rowhammer Mitigation with Refresh-Generating Activations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rega-scalable-rowhammer-mitigation-with-refresh-generating-activations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rega-scalable-rowhammer-mitigation-with-refresh-generating-activations)**
### 作者
* Michele Marazzi, Computer Security Group, ETH Zürich
* Flavien Solt, Computer Security Group, ETH Zürich
* Patrick Jattke, Computer Security Group, ETH Zürich
* Kubo Takashi, Zentel Japan
* Kaveh Razavi, Computer Security Group, ETH Zürich
### 摘要
> 缓解Rowhammer需要在位翻转开始之前执行额外的刷新操作来给DRAM行充电。这些刷新操作是稀缺的，只能周期性地发生，妨碍了设计有效的缓解方法，因为新一代DRAM基板越来越容易受到Rowhammer攻击，并且更多的"受害"行受到单个"侵略者"行的影响。我们引入了REGA，这是首个可以在每次激活行时生成额外刷新操作的DRAM内机制。由于行激活是导致Rowhammer的唯一原因，这些额外刷新操作会在DRAM设备面临引发Rowhammer的行激活时立即可用。传统上，刷新操作使用感应放大器进行。然而，感应放大器也负责处理读写操作。因此，在数据传输期间不能使用感应放大器来刷新行。为了实现在数据传输期间进行刷新操作，REGA使用额外的低开销缓冲感应放大器仅用于数据传输。然后，REGA可以使用原始感应放大器在行激活期间对其他行进行并行刷新操作.REGA生成的刷新操作使得设计简单可扩展的DRAM内缓解方法具有较强的安全性保证。例如，我们构建了REGA<M>，这是第一个确定性的DRAM内缓解方法，能够适用于小的Rowhammer阈值，同时不受受害者数量与侵略者数量的影响。REGA<M>的面积开销恒定为2.1%，可以保护DDR5设备，其Rowhammer阈值最小为261、517和1029，额外功耗分别为23.9%、11.5%和4.7%，性能开销分别为3.7%、0.8%和0%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179327/](https://ieeexplore.ieee.org/document/10179327/)
## CSI:Rowhammer - Cryptographic Security and Integrity against Rowhammer.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#csi-rowhammer-cryptographic-security-and-integrity-against-rowhammer) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#csi-rowhammer-cryptographic-security-and-integrity-against-rowhammer)**
### 作者
* Jonas Juffinger, Lamarr Security Research; Graz University of Technology
* Lukas Lamster, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* Maria Eichlseder, Graz University of Technology
* Moritz Lipp, Amazon Web Services
* Daniel Gruss, Lamarr Security Research; Graz University of Technology
### 摘要
> 在本篇论文中，我们提出了CSI：Rowhammer，这是一种基于原则的硬件和软件共同设计的Rowhammer缓解方案，具有密码安全和完整性保证，并且不专注于Rowhammer的任何特定属性。我们设计了一种基于低延迟的加密MAC和异常机制的新型内存错误检测机制，该异常机制会触发一个软件级别的纠正例程。异常处理程序使用一种新颖的指令集扩展进行错误修正，并在之后恢复执行。与常规的ECC-DRAM在翻转超过2个位时仍然可被利用相比，CSI:Rowhammer保持了加密MAC的安全级别。我们在gem5概念验证实现中评估了CSI:Rowhammer。在正常条件下，我们看到延迟开销低于0.75％，与现成的ECC-DRAM相比没有内存开销。虽然纠正单个位翻转的平均延迟低于20纳秒（而现代ECC内存的延迟范围从几纳秒到几毫秒不等），CSI:Rowhammer可以以压倒性的概率检测到任意数量的位翻转，并在实际时间限制内纠正至少8个位翻转。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179390/](https://ieeexplore.ieee.org/document/10179390/)
## Jolt: Recovering TLS Signing Keys via Rowhammer Faults.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#jolt-recovering-tls-signing-keys-via-rowhammer-faults) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#jolt-recovering-tls-signing-keys-via-rowhammer-faults)**
### 作者
* Koksal Mus, Worcester Polytechnic Institute, Worcester, MA, USA
* Yarkın Doröz, Worcester Polytechnic Institute, Worcester, MA, USA
* M. Caner Tol, Worcester Polytechnic Institute, Worcester, MA, USA
* Kristi Rahman, Worcester Polytechnic Institute, Worcester, MA, USA
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
### 摘要
> 数字签名方案，如DSA、ECDSA和RSA广泛部署以保护诸如TLS、SSH和IPSec等安全协议的完整性。在TLS中，例如，在握手阶段使用RSA和(EC)DSA对约定参数的状态进行签名。很自然地，RSA和(EC)DSA的实现成为了众多攻击的目标，包括强大的侧信道攻击。因此，加密库多次被修补。在这里，我们介绍一种名为Jolt的新型攻击，针对签名方案的实现。我们的攻击利用在签名生成过程中注入错误来获取错误的签名。通过使用签名验证原语，我们纠正错误的签名，并在此过程中推断出密钥的一部分位。与利用需2<sup>45</sup>个签名的非斑点偏差的最新攻击相比，我们的攻击只需要不到1000个错误签名即可针对256位(EC)DSA。性能的提高是由于我们的攻击目标是密钥签名，它在签名会话之间不会改变。我们证明了该攻击方案也可以对Schnorr和RSA签名进行稍微修改后的攻击。我们通过在WolfSSL、OpenSSL、Microsoft SymCrypt、LibreSSL和Amazon s2n等常见加密库上运行实验，展示了Jolt的可行性。在我们的目标平台上，在线阶段只需要不到2小时即可恢复256位ECDSA密钥的192位，这足以完全恢复密钥。我们注意到，虽然流行的加密库中保护了RSA签名，但OpenSSL仍然容易受到双重故障注入的攻击。我们还评估了它们的Federal Information Processing Standard (FIPS)强化版本，虽然效率略有降低，但仍然容易受到我们的攻击。我们发现(EC)DSA签名仍然在软件故障方面存在较大的漏洞，对于TLS等实际部署，以及SSH和IPSec等其他安全协议可能构成威胁。这凸显了对安全协议实现中故障检测的彻底审查和实施的需求。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179450/](https://ieeexplore.ieee.org/document/10179450/)
## Hide and Seek with Spectres: Efficient discovery of speculative information leaks with random testing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#hide-and-seek-with-spectres-efficient-discovery-of-speculative-information-leaks-with-random-testing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#hide-and-seek-with-spectres-efficient-discovery-of-speculative-information-leaks-with-random-testing)**
### 作者
* Oleksii Oleksenko, Microsoft Research
* Marco Guarnieri, IMDEA Software Institute
* Boris Köpf, Microsoft Research
* Mark Silberstein, Technion
### 摘要
> 攻击如Spectre滥用了现代CPU的一项关键性能优化技术——预测执行。最近，出现了几种测试工具，用于自动检测商用（黑盒）CPU中的预测泄漏。然而，测试过程仍然很慢，这阻碍了深入的测试活动，并且迄今为止阻止了对于新的泄漏类型的发现。在本文中，我们确定了现有方法性能限制的根本原因，并提出了克服这些限制的技术。通过这些技术，我们提高了测试速度达到了现有技术的百倍。这些改进使我们能够在Intel和AMD CPU上进行前所未有的深入测试活动。作为亮点，我们发现了两种以前未知的预测泄漏类型（影响字符串比较和除法），这些泄漏在以前的手动和自动分析中没有被发现过。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179391/](https://ieeexplore.ieee.org/document/10179391/)
## Spectre Declassified: Reading from the Right Place at the Wrong Time.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spectre-declassified-reading-from-the-right-place-at-the-wrong-time) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spectre-declassified-reading-from-the-right-place-at-the-wrong-time)**
### 作者
* Basavesh Ammanaghatta Shivakumar, MPI-SP, Bochum, Germany
* Jack Barnes, The University of Adelaide, Adelaide, Australia
* Gilles Barthe, IMDEA Software Institute, Madrid, Spain; MPI-SP, Bochum, Germany
* Sunjay Cauligi, MPI-SP, Bochum, Germany
* Chitchanok Chuengsatiansup, The University of Adelaide, Adelaide, Australia
* Daniel Genkin, Georgia Institute of Technology, Atlanta, United States
* Sioli O’Connell, The University of Adelaide, Adelaide, Australia
* Peter Schwabe, MPI-SP, Bochum, Germany; Radboud University, Nijmegen, The Netherlands
* Rui Qi Sim, The University of Adelaide, Adelaide, Australia
* Yuval Yarom, The University of Adelaide, Adelaide, Australia
### 摘要
> 实用的信息流编程语言通常通过解密构造允许受控泄露 - 程序员可以使用此构造声明有意的泄露。例如，从私钥计算得出的加密签名和密文被信息流分析视为机密。加密库可以使用解密来使此数据公开，因为它不再敏感。在本文中，我们研究了推测执行和解密之间的相互作用。我们展示了推测执行导致解密站点的意外泄露。具体而言，我们提出了一个恢复AES实现中的密钥的PoC。我们的PoC是Spectre攻击的一个实例，即使程序经过推测加载强化（SLH）的编译，仍然有效，SLH是针对Spectre的一种广泛使用的基于编译器的对策措施。我们开发了一些对抗这些攻击的正式对策，包括对SLH的深度改进，我们称之为选择性推测加载强化（selSLH）。这些对抗措施可可声音地执行相对非干扰（RNI）：非正式地说，受保护程序的推测泄漏仅限于原始程序的现有顺序泄漏。我们在FaCT语言和编译器中实现了最简单的对策，并且性能开销最多为10％。最后，虽然我们未直接实现selSLH，但我们的初步评估表明，与传统的SLH相比，密码功能的性能成本显著降低。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179355/](https://ieeexplore.ieee.org/document/10179355/)
## Volttack: Control IoT Devices by Manipulating Power Supply Voltage.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#volttack-control-iot-devices-by-manipulating-power-supply-voltage) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#volttack-control-iot-devices-by-manipulating-power-supply-voltage)**
### 作者
* Kai Wang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Shilin Xiao, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chaohao Li, Hangzhou Hikvision Digital Technology Co., Ltd
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### 摘要
> 本论文从感知和执行的角度分析了物联网设备（IoT）的安全性。特别地，我们发现了电源模块中的一个漏洞，并提出了电压攻击（Volttack attacks）。为了发起电压攻击，攻击者可能会妥协电源，并通过电源模块注入恶意信号，该模块在大多数设备中都是必不可少的。最终，电压攻击可能导致传感器测量与实际情况无关，或者操纵执行器而无视期望的指令。为了理解电压攻击，我们系统地分析了电源信号对电子元件的影响原理，这些元件是构成传感器或执行器模块的基石。基于这些发现，我们在现成产品上实施和验证了电压攻击：6个传感器和3个执行器，这些传感器和执行器广泛应用于汽车制动系统、工业过程控制和机械臂等领域。操纵传感器测量或执行活动的后果包括汽车制动距离增加一倍和天然气泄漏。这种漏洞的根本原因在于人们普遍认为电力线上的噪声是无意的，而我们的工作旨在呼吁加强电源模块的安全性，并添加应对措施以减轻攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179340/](https://ieeexplore.ieee.org/document/10179340/)
## Inducing Wireless Chargers to Voice Out for Inaudible Command Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#inducing-wireless-chargers-to-voice-out-for-inaudible-command-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#inducing-wireless-chargers-to-voice-out-for-inaudible-command-attacks)**
### 作者
* Donghui Dai, Department of Computing, The Hong Kong Polytechnic University
* Zhenlin An, Department of Computing, The Hong Kong Polytechnic University
* Lei Yang, Department of Computing, The Hong Kong Polytechnic University
### 摘要
> 最近的研究表明，语音识别系统或语音助手可以被恶意语音命令操控，这些命令通过各种不可听见的媒介，如超声波、激光和电磁干扰（EMI）注入。在这项工作中，我们通过无线充电产生的磁干扰，探索了一种新的不可听见的声音攻击。实质上，我们展示了智能设备的麦克风组件在享受无线充电时遭受到严重的磁干扰，这是由于低频率（100 kHz或以下）的EMI缺乏有效的保护造成的。利用这个漏洞，我们设计了两种不可听见的声音攻击，分别被称为HeartwormAttack和ParasiteAttack，它们旨在将恶意语音命令注入到正在进行无线充电的智能设备中。它们分别利用被感染的无线充电器或附件设备（称为寄生虫）注入语音。我们对17种受害设备（iPhone、华为、三星等）和6种类型的语音助手（Siri、Google STT、Bixby等）进行了广泛的实验证明，这两种攻击在商业充电设置下是可行的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179363/](https://ieeexplore.ieee.org/document/10179363/)
## mmSpoof: Resilient Spoofing of Automotive Millimeter-wave Radars using Reflect Array.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mmspoof-resilient-spoofing-of-automotive-millimeter-wave-radars-using-reflect-array) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mmspoof-resilient-spoofing-of-automotive-millimeter-wave-radars-using-reflect-array)**
### 作者
* Rohith Reddy Vennam, University of California San Diego, La Jolla, CA
* Ish Kumar Jain, University of California San Diego, La Jolla, CA
* Kshitiz Bansal, University of California San Diego, La Jolla, CA
* Joshua Orozco, University of California San Diego, La Jolla, CA
* Puja Shukla, University of California San Diego, La Jolla, CA
* Aanjhan Ranganathan, Northeastern University, Boston, MA
* Dinesh Bharadia, University of California San Diego, La Jolla, CA
### 摘要
> FMCW雷达对于稳健和抗恶劣天气条件下的周围物体感测在汽车驾驶中至关重要。然而，这些雷达容易受到欺骗攻击，可能导致传感器故障并潜在地引发事故。以往尝试使用攻击者设备对FMCW雷达进行欺骗并不十分有效，原因在于攻击者与受害者之间需要进行同步。我们提出了一种新颖的欺骗机制，称为mmSpoof，它不需要同步并且对受害雷达的各种安全特性和对策具有抗攻击能力。我们的欺骗机制使用基于“反射阵列”的攻击者设备，通过适当的调制反射雷达信号以欺骗受害者雷达。我们提供了灵活欺骗受害者雷达上任意距离和速度的洞察和机制，其中通过mmSpoof的反射阵列实现了独特的频率偏移。我们设计了一种新颖的算法，用于估算这种频率偏移，而不需要对受害者雷达的先前信息做出假设。我们使用商用雷达在真实的汽车驾驶场景中，采用商用现成组件搭建了一个紧凑且便携的设置，展示了我们的欺骗的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179371/](https://ieeexplore.ieee.org/document/10179371/)
## PLA-LiDAR: Physical Laser Attacks against LiDAR-based 3D Object Detection in Autonomous Vehicle.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pla-lidar-physical-laser-attacks-against-lidar-based-3d-object-detection-in-autonomous-vehicle) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pla-lidar-physical-laser-attacks-against-lidar-based-3d-object-detection-in-autonomous-vehicle)**
### 作者
* Zizhi Jin, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yushi Cheng, Beijing National Research Center for Information Science and Technology (BNRist), Tsinghua University
* Bo Yang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### 摘要
> 自动驾驶车辆和机器人越来越多地利用基于激光雷达的3D物体检测系统来检测环境中的障碍物。正确的检测和分类对于确保安全驾驶非常重要。尽管现有的研究工作已经证明了通过操纵点云来欺骗3D物体检测器的可行性，但大多数尝试都是在数字环境中进行的。在本文中，我们研究了使用激光注入对基于激光雷达的3D物体检测进行物理欺骗的可能性。首先，我们开发了一个激光收发器，可以注入高达4200个点，比之前的工作多20倍，并且可以测量受攻击激光雷达的扫描周期以调度欺骗性激光信号。通过设计一种控制信号方法，将点云的坐标转换为控制信号，并使用激光雷达的物理约束和攻击能力进行对抗性点云优化方法，我们成功地将欺骗性点云的形状注入到受攻击激光雷达中。我们可以发动四种类型的攻击，即简单隐藏、基于记录的创建、基于优化的隐藏和基于优化的创建。大量实验证明了我们的攻击对两种商用激光雷达和三种检测器的有效性。我们还讨论了传感器和自动驾驶系统层面的防御策略。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179458/](https://ieeexplore.ieee.org/document/10179458/)
## mmEcho: A mmWave-based Acoustic Eavesdropping Method.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mmecho-a-mmwave-based-acoustic-eavesdropping-method) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mmecho-a-mmwave-based-acoustic-eavesdropping-method)**
### 作者
* Pengfei Hu, School of Computer Science and Technology, Shandong University, Qingdao, China
* Wenhao Li, School of Computer Science and Technology, Shandong University, Qingdao, China
* Riccardo Spolaor, School of Computer Science and Technology, Shandong University, Qingdao, China
* Xiuzhen Cheng, School of Computer Science and Technology, Shandong University, Qingdao, China
### 摘要
> 声学偷听针对私人或机密空间是最严重的隐私威胁之一。隔音房间可以减少此类风险，但无法阻止复杂的偷听，这是近年来的一个新兴研究趋势。研究人员通过传感器启用的侧信道调查了这种声学偷听攻击。然而，这种攻击要么是基于不现实的假设，要么有相当大的约束条件。本文介绍了mmEcho，一种采用毫米波无线电信号来准确测量声波引起的物体微米级振动的声学偷听系统。与以前的工作相比，我们的偷听方法非常准确，不需要对受害者有任何先前了解。我们在广泛的实际环境和场景下评估了mmEcho的性能。我们的结果表明，mmEcho可以准确重构各种距离、方向、回声物体、隔音材料、语言和声音级别的移动源的声音。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179484/](https://ieeexplore.ieee.org/document/10179484/)
## Side Eye: Characterizing the Limits of POV Acoustic Eavesdropping from Smartphone Cameras with Rolling Shutters and Movable Lenses.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#side-eye-characterizing-the-limits-of-pov-acoustic-eavesdropping-from-smartphone-cameras-with-rolling-shutters-and-movable-lenses) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#side-eye-characterizing-the-limits-of-pov-acoustic-eavesdropping-from-smartphone-cameras-with-rolling-shutters-and-movable-lenses)**
### 作者
* Yan Long, Electrical Engineering and Computer Science, University of Michigan
* Pirouz Naghavi, Computer and Information Science and Engineering, University of Florida
* Blas Kojusner, Computer and Information Science and Engineering, University of Florida
* Kevin Butler, Computer and Information Science and Engineering, University of Florida
* Sara Rampazzi, Computer and Information Science and Engineering, University of Florida
* Kevin Fu, Electrical Engineering and Computer Science, University of Michigan
### 摘要
> 我们的研究发现了智能手机摄像头中广泛存在的卷帘快门和可移动镜头结构如何将结构声传递到相机图像上，从而为声音窃听创建了一个视角（POV）光学-声学侧通道。智能手机摄像头硬件的运动会泄漏声音信息，因为图像不知不觉地将环境声音调制为无法察觉的失真。我们的实验发现，互补金属氧化物半导体（CMOS）卷帘快门和可移动镜头（如光学图像稳定器和自动对焦）的内在行为进一步放大了这种侧通道。我们的论文表征了由结构声引起的声音信息泄漏的极限，这扰乱了智能手机摄像头的视角。与传统的对振动物体进行光学-声学窃听相比，这种侧通道不需要视线和相机视野内的物体（天花板的图像就足够了）。我们的实验使用一种新颖的信号处理流程测试了这种侧通道的极限，该流程提取和识别泄漏的声音信息。我们在一个口语数字数据集上使用10部智能手机进行评估，结果显示对于识别10个口语数字、20个说话者和2个性别，准确率分别为80.66％、91.28％和99.67％。我们进一步系统地讨论了可能的防御策略和实施方法。通过对智能手机摄像头图像流进行建模、测量和演示声音窃听的极限，我们的研究结果解释了基于物理原理的因果关系，并提出了降低当前和未来设备威胁的可能途径。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179313/](https://ieeexplore.ieee.org/document/10179313/)
## 3DFed: Adaptive and Extensible Framework for Covert Backdoor Attack in Federated Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#3dfed-adaptive-and-extensible-framework-for-covert-backdoor-attack-in-federated-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#3dfed-adaptive-and-extensible-framework-for-covert-backdoor-attack-in-federated-learning)**
### 作者
* Haoyang Li, The Hong Kong Polytechnic University
* Qingqing Ye, The Hong Kong Polytechnic University
* Haibo Hu, The Hong Kong Polytechnic University
* Jin Li, Guangzhou University
* Leixia Wang, Renmin University of China
* Chengfang Fang, Huawei International, Singapore
* Jie Shi, Huawei International, Singapore
### 摘要
> 联邦学习（FL）是一种分布式机器学习范式，它在个体设备上本地训练数据集，但容易受到后门模型污染攻击。通过破坏或冒充这些设备，攻击者可以上传精心设计的恶意模型更新，以在攻击者指定的触发条件下操纵全局模型产生后门行为。然而，现有的后门攻击需要了解受害FL系统的更多信息，超出了实际的黑盒设置。此外，它们通常专门针对单一目标进行优化，在现代FL系统普遍采用多层次的防御措施检测后门模型时效果不佳。出于这些考虑，本文提出了3DFed，一个适应性、可扩展和多层次的框架，在黑盒设置中发动隐蔽的FL后门攻击。3DFed提供了三个回避模块来伪装后门模型：带约束损失的后门训练、噪声掩码和诱饵模型。通过将指示器插入后门模型，3DFed可以从全局模型中获取上一轮的攻击反馈，并动态调整这些后门回避模块的超参数。通过大量的实验结果，我们展示了当所有组件一起工作时，3DFed可以规避所有最先进的FL后门防御，包括Deepsight、Foolsgold、FLAME、FL-Detector和RFLBAT。未来还可以将新的回避模块纳入3DFed，因为它是一个可扩展的框架。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179401/](https://ieeexplore.ieee.org/document/10179401/)
## Scalable and Privacy-Preserving Federated Principal Component Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scalable-and-privacy-preserving-federated-principal-component-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scalable-and-privacy-preserving-federated-principal-component-analysis)**
### 作者
* David Froelicher, EPFL; Tune Insight SA
* Hyunghoon Cho, Tune Insight SA
* Manaswitha Edupalli, Tune Insight SA
* Joao Sa Sousa, MIT
* Jean-Philippe Bossuat, Broad Institute of MIT and Harvard
* Apostolos Pyrgelis, MIT
* Juan R. Troncoso-Pastoriza, Broad Institute of MIT and Harvard
* Bonnie Berger, EPFL
* Jean-Pierre Hubaux, MIT; Broad Institute of MIT and Harvard
### 摘要
> 主成分分析（PCA）是许多数据科学领域中的一种重要算法，用于降低维度。我们解决了在多个数据提供者之间分布的私有数据上执行联合主成分分析的问题，同时确保数据的保密性。我们的解决方案SF-PCA是一个端到端安全系统，可以在任意多个串通的参与方之间保护原始数据和所有中间结果的机密性。SF-PCA通过联合使用多方同态加密、交互式协议和边缘计算，以高效地在本地明文数据上进行计算，并对集体加密数据进行操作。SF-PCA获得的结果与非安全的集中式解决方案一样准确，与各方之间的数据分布无关。它在数据集维度和数据提供者数量方面呈线性或更好的扩展性。SF-PCA比现有的通过组合局部分析结果来近似解决方案的方法更精确，并且比仅基于安全多方计算或同态加密的保护隐私的替代方案更快3倍到250倍。我们的工作证明了安全和联合主成分分析在私有分布数据集上的实际适用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179350/](https://ieeexplore.ieee.org/document/10179350/)
## Private, Efficient, and Accurate: Protecting Models Trained by Multi-party Learning with Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-efficient-and-accurate-protecting-models-trained-by-multi-party-learning-with-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-efficient-and-accurate-protecting-models-trained-by-multi-party-learning-with-differential-privacy)**
### 作者
* Wenqiang Ruan, Laboratory of Data Analytics and Security, Fudan University
* Mingxin Xu, Laboratory of Data Analytics and Security, Fudan University
* Wenjing Fang, Ant Group
* Li Wang, Ant Group
* Lei Wang, Ant Group
* Weili Han, Laboratory of Data Analytics and Security, Fudan University
### 摘要
> 基于安全多方计算的机器学习，简称为多方学习（MPL），已成为一项重要技术，可利用多个参与方的数据并保护隐私。虽然MPL为计算过程提供了严格的安全保证，但由MPL训练的模型仍然容易受到仅依赖于对模型访问的攻击。差分隐私可以帮助抵御此类攻击。然而，差分隐私带来的准确性损失以及安全多方计算协议中的巨大通信开销使在隐私、效率和准确性之间平衡成为极具挑战性的任务。
> 
> 本文旨在通过提出一种名为PEA（Private, Efficient, Accurate）的解决方案来解决上述问题，该方案由一个安全差分隐私随机梯度下降（DPSGD）协议和两种优化方法组成。首先，我们提出了一种安全的DPSGD协议来实施差分隐私机器学习算法DPSGD，该协议基于秘密共享的MPL框架。其次，为了减少差分隐私噪声引起的准确性损失和MPL中的巨大通信开销，我们提出了两种优化方法用于MPL的训练过程：（1）数据独立特征提取方法，旨在简化训练模型结构；（2）基于本地数据的全局模型初始化方法，旨在加快模型训练的收敛速度。
> 
> 我们在两个开源的MPL框架TF-Encrypted和Queqiao中实现了PEA。对各种数据集的实验结果证明了PEA的效率和有效性。例如，当ϵ = 2时，在局域网环境下，我们可以在7分钟内训练一个准确率为88%的差分隐私分类模型用于CIFAR-10。这一结果明显优于CryptGPU的结果，CryptGPU是一种先进的MPL框架：在CIFAR-10上，训练一个非隐私深度神经网络模型需要超过16小时才能达到相同的准确性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179422/](https://ieeexplore.ieee.org/document/10179422/)
## Spectral-DP: Differentially Private Deep Learning through Spectral Perturbation and Filtering.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spectral-dp-differentially-private-deep-learning-through-spectral-perturbation-and-filtering) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#spectral-dp-differentially-private-deep-learning-through-spectral-perturbation-and-filtering)**
### 作者
* Ce Feng, Lehigh University
* Nuo Xu, Lehigh University
* Wujie Wen, Lehigh University
* Parv Venkitasubramaniam, Lehigh University
* Caiwen Ding, University of Connecticut
### 摘要
> 差分隐私是深度学习算法中广泛接受的隐私度量标准，实现差分隐私依赖于一种被称为差分隐私随机梯度下降（DP-SGD）的噪声训练方法。DP-SGD要求对密集神经网络中的每个梯度进行直接添加噪声，这样可以在实现隐私的同时付出较大的效用成本。在这项工作中，我们提出了一种新的差分隐私学习方法——谱差分隐私（Spectral-DP），它将谱域中的梯度扰动与谱滤波相结合，以更低的噪声比例和更好的效用实现所需的隐私保证。我们基于Spectral-DP开发了含有卷积层和全连接层的差分隐私深度学习方法。特别是对于全连接层，我们将基于块循环的空间重构与Spectral-DP相结合，以实现更好的效用。通过全面的实验，我们研究和提供了在基准数据集上实现Spectral-DP深度学习的指导方针。与基于最先进的DP-SGD方法相比，Spectral-DP在从头开始训练和迁移学习设置中均表现出统一更好的效用性能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179457/](https://ieeexplore.ieee.org/document/10179457/)
## ELSA: Secure Aggregation for Federated Learning with Malicious Actors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#elsa-secure-aggregation-for-federated-learning-with-malicious-actors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#elsa-secure-aggregation-for-federated-learning-with-malicious-actors)**
### 作者
* Mayank Rathee, University of California, Berkeley
* Conghao Shen, University of California, Berkeley; Stanford University
* Sameer Wagh, University of California, Berkeley; Devron Corporation
* Raluca Ada Popa, University of California, Berkeley
### 摘要
> 联邦学习（FL）是一种在训练数据集高度分布的情况下用于机器学习（ML）的越来越流行的方法。客户端在其数据集上进行本地训练，然后将更新聚合到全局模型中。现有的聚合协议要么效率低下，要么不考虑系统中恶意行为者的情况。这是使FL成为隐私敏感的ML应用的理想解决方案的主要障碍。我们提出了Elsa，这是一种安全的FL聚合协议，突破了这个障碍——它既高效又能够在设计的核心考虑到恶意行为者的存在。与之前关于Prio和Prio+的研究类似，Elsa提供了一个新颖的安全聚合协议，建立在两个服务器之间的分布式信任基础上，只要有一个服务器是诚实的，就可以保持单个客户端的更新私密性，抵御恶意客户端，并且具有高效的端到端性能。与之前的工作相比，Elsa的独特之处在于，服务器不是交互地生成加密相关性，而是客户端作为这些相关性的不可信任的发放者而不会损害协议的安全性。这样可以实现更快的协议，并在效率方面实现更强的安全性，比以前的工作要好。我们引入了新的技术，即使服务器是恶意的，也可以保持隐私，并且仅在运行时间上增加了7-25%的成本，而通信量增加可以忽略不计，与半诚实服务器的情况相比。我们的工作通过显著的边际改善了具有类似安全保证的现有工作的端到端运行时间——对于我们考虑的模型来说，单个聚合者RoFL提高了305倍，分布式信任Prio提高了8倍。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179468/](https://ieeexplore.ieee.org/document/10179468/)
## No One Drinks From the Firehose: How Organizations Filter and Prioritize Vulnerability Information.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#no-one-drinks-from-the-firehose-how-organizations-filter-and-prioritize-vulnerability-information) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#no-one-drinks-from-the-firehose-how-organizations-filter-and-prioritize-vulnerability-information)**
### 作者
* Stephanie de Smale, National Cyber Security Centre, The Netherlands; Delft University of Technology
* Rik van Dijk, National Cyber Security Centre, The Netherlands
* Xander Bouwman, Delft University of Technology
* Jeroen van der Ham, National Cyber Security Centre, The Netherlands; University of Twente
* Michel van Eeten, Delft University of Technology
### 摘要
> 每年发布的软件漏洞数量都在增加。在有限的人员资源下，组织如何在攻击面上保持控制？以往的研究分析了整体的软件漏洞生态系统和组织内的修补流程，但没有研究这两者之间的联系。为了填补这个空白，我们通过对关键基础设施和政府服务领域的22个组织进行半结构化访谈进行了调查。我们分析了在这些组织中，哪些部门负责收集和分类有关软件漏洞的信息，并发现没有一个受访者全面地获取这样的信息，即使是像国家漏洞数据库（NVD）这样的简化和聚合形式。这意味着即使在关键基础设施组织中，关于已知漏洞的信息也会被忽视。我们观察到组织采用隐性和显性应对机制来降低脆弱性信息的接收，并识别出这些策略中的三个权衡：独立性、主动性和规范化。尽管我们的受访者的行为与广泛接受的安全建议相矛盾，即收集关于活动系统的全面脆弱性信息，但没有受访者回忆起曾经发生过与已知软件漏洞缺失相关的安全事件。这表明，在资源有限的情况下，将脆弱性信息的接收量减少95%可以被视为一种理性策略。我们的研究结果提出了关于发现脆弱系统的责任和问责分配的问题，并建议改变对于收集脆弱性信息的期望。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179447/](https://ieeexplore.ieee.org/document/10179447/)
## Vulnerability Discovery for All: Experiences of Marginalization in Vulnerability Discovery.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#vulnerability-discovery-for-all-experiences-of-marginalization-in-vulnerability-discovery) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#vulnerability-discovery-for-all-experiences-of-marginalization-in-vulnerability-discovery)**
### 作者
* Kelsey R. Fulton, University of Maryland
* Samantha Katcher, Tufts University
* Kevin Song, University of Chicago
* Marshini Chetty, University of Chicago
* Michelle L. Mazurek, University of Maryland
* Chloé Messdaghi, Impactive Consulting
* Daniel Votipka, Tufts University
### 摘要
> 漏洞发现是软件安全的一个重要方面。目前，对安全专家的需求显著超过了可用的漏洞发现人才。此外，现有的漏洞发现人员高度同质化，主要由白人和亚洲男性主导。因此，扩大漏洞发现社区的能力的一个有希望的途径是从更广泛的人群中进行招募和留任。尽管以前的研究已经广泛探讨了计算领域中的公平和包容性挑战，但是漏洞发现工作的竞争性和经常是自学的性质可能在这些挑战上产生新的变化。本文报告了一项半结构化访谈研究（N = 16），调查了来自边缘化人群如何参与漏洞发现，他们是否感到受到漏洞发现社区的欢迎，以及他们在加入漏洞发现社区时面临的挑战。我们发现，边缘化人群的成员面临一些独特的挑战，同时，漏洞发现中常见的其他挑战在边缘化的情况下变得更加严峻。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179478/](https://ieeexplore.ieee.org/document/10179478/)
## "We are a startup to the core": A qualitative interview study on the security and privacy development practices in Turkish software startups.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#we-are-a-startup-to-the-core-a-qualitative-interview-study-on-the-security-and-privacy-development-practices-in-turkish-software-startups) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#we-are-a-startup-to-the-core-a-qualitative-interview-study-on-the-security-and-privacy-development-practices-in-turkish-software-startups)**
### 作者
* Dilara Keküllüoğlu, University of Edinburgh, UK
* Yasemin Acar, The George Washington University, USA; Paderborn University, Germany
### 摘要
> 安全和隐私往往在软件开发中被忽视，很少是开发者的优先考虑。这一观点通常基于研究人员进行的研究以及生活和工作在美国、欧洲和英国的开发者人口。然而，软件的生产是全球性的，重要技术中心的关键人口并未得到足够的研究。土耳其的软件创业场景具有影响力，与软件安全和隐私相关的理解、知识和缓解措施仍未得到充分研究。为了弥补这一研究空白，我们对土耳其软件创业公司中的16名开发人员进行了半结构化访谈研究。访谈研究的目标是分析开发者是否以及如何确保他们的软件安全并保护用户隐私。我们的主要发现是，由于缺乏认识、技能和资源，开发者很少将安全和隐私作为优先考虑。我们发现法规对安全和隐私能产生积极影响。基于这项研究，我们向行业、个体开发者、研究、教育者和监管机构提出建议。我们的建议可以为软件开发中的安全和隐私问题提供更全球化的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179339/](https://ieeexplore.ieee.org/document/10179339/)
## "How technical do you get? I'm an English teacher": Teaching and Learning Cybersecurity and AI Ethics in High School.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#how-technical-do-you-get-im-an-english-teacher-teaching-and-learning-cybersecurity-and-ai-ethics-in-high-school) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#how-technical-do-you-get-im-an-english-teacher-teaching-and-learning-cybersecurity-and-ai-ethics-in-high-school)**
### 作者
* Zachary Kilhoffer, University of Illinois at Urbana-Champaign
* Zhixuan Zhou, University of Illinois at Urbana-Champaign
* Firmiana Wang, University of Illinois Laboratory High School
* Fahad Tamton, University of Illinois at Urbana-Champaign
* Yun Huang, University of Illinois at Urbana-Champaign
* Pilyoung Kim, University of Denver
* Tom Yeh, University of Colorado Boulder
* Yang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 当今的网络安全和人工智能技术常常带来伦理挑战。一种有前途的方向是向当今的青年教授网络安全和人工智能伦理学。然而，我们对在大学之前如何教授这些课程知之甚少。通过对美国高中教师（n=16）和学生（n=11）的采访，我们发现网络安全和人工智能伦理学通常是在非技术类课程，例如社会研究和语言艺术中教授的。我们还确定了相关主题，其中认识规范、隐私和数字公民权最常出现。尽管教师利用传统和新颖的教学策略，包括讨论（将当前事件作为案例研究）、游戏化活动和内容创作，但仍面临许多挑战。例如，教师因担心显得有偏见和惹怒家长而犹豫讨论当前事件；网络卫生教育对于教育青年人和促进安全的在线行为似乎非常无效；而世代差异使得教师与学生建立联系变得困难。根据研究结果，我们为教育工作者、学校管理者和网络安全从业者提供实际建议，以改善青年在网络安全和人工智能伦理学方面的教育。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179333/](https://ieeexplore.ieee.org/document/10179333/)
## Skilled or Gullibleƒ Gender Stereotypes Related to Computer Security and Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#skilled-or-gullible-gender-stereotypes-related-to-computer-security-and-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#skilled-or-gullible-gender-stereotypes-related-to-computer-security-and-privacy)**
### 作者
* Miranda Wei, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Pardis Emami-Naeini, Department of Computer Science, Duke University
* Franziska Roesner, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Tadayoshi Kohno, Paul G. Allen School of Computer Science & Engineering, University of Washington
### 摘要
> 性别刻板印象在美国社会仍然普遍存在，并且对所有性别的人都造成伤害。本研究以二元性别（女性和男性）为首次调查对象，从实证角度研究与计算机安全和隐私相关的性别刻板印象。我们利用Prolific平台进行两次针对美国参与者的调查，旨在：（1）揭示与安全和隐私相关的潜在性别刻板印象（N = 202），以及（2）评估对于性别刻板印象在安全和隐私参与、个人特征和行为方面的信仰（N = 190）。我们发现刻板印象信仰与参与者的性别以及性别歧视程度显著相关，并深入探讨了参与者对于自己信仰的理由。除了科学研究此类刻板印象的存在和普遍性外，我们还描述了潜在的影响，包括对众包工作者进行倾向性用户研究的偏见。此外，我们的工作为深入研究刻板印象在计算机安全和隐私，以及整个性别和身份光谱上的影响奠定了基础。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179469/](https://ieeexplore.ieee.org/document/10179469/)
## Everybody's Got ML, Tell Me What Else You Have: Practitioners' Perception of ML-Based Security Tools and Explanations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#everybodys-got-ml-tell-me-what-else-you-have-practitioners-perception-of-ml-based-security-tools-and-explanations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#everybodys-got-ml-tell-me-what-else-you-have-practitioners-perception-of-ml-based-security-tools-and-explanations)**
### 作者
* Jaron Mink, University of Illinois at Urbana-Champaign
* Hadjer Benkraouda, University of Illinois at Urbana-Champaign
* Limin Yang, University of Illinois at Urbana-Champaign
* Arridhana Ciptadi, Truera
* Ali Ahmadzadeh, Blue Hexagon
* Daniel Votipka, Tufts University
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 已经进行了大量努力来开发基于机器学习（ML）的工具来支持安全运营。然而，在实践中仍然面临关键挑战。机器学习普遍被认为存在解释不足的问题，这促使研究人员开发机器学习解释技术。然而，目前还不太清楚安全实践者在安全运营背景下如何看待机器学习及其相应解释方法的好处和问题。为了填补这个空白，了解“所需”，我们与18名具有不同角色、职责和专业知识的安全实践者进行了半结构化访谈。我们发现实践者普遍认为应该将ML工具与传统基于规则的方法一起使用，而不是替代。虽然被认为ML的输出很难推理，但令人惊讶的是，基于规则的方法并不一定更容易解释。我们还发现，只有少数实践者考虑到安全性（对抗攻击的稳健性）是选择工具的关键因素。关于ML的解释，虽然认识到它们在模型验证和理解安全事件方面的价值，但实践者也发现现有的解释方法与他们下游任务的需求之间存在差距。我们收集和综合了实践者关于解释方案设计的建议，并讨论未来的工作如何帮助解决这些需求。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179321/](https://ieeexplore.ieee.org/document/10179321/)
## Precise Detection of Kernel Data Races with Probabilistic Lockset Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#precise-detection-of-kernel-data-races-with-probabilistic-lockset-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#precise-detection-of-kernel-data-races-with-probabilistic-lockset-analysis)**
### 作者
* Gabriel Ryan, Columbia University
* Abhishek Shah, Columbia University
* Dongdong She, Columbia University
* Suman Jana, Columbia University
### 摘要
> 找到数据竞争对于确保现代内核开发的安全至关重要。然而，在内核中找到数据竞争是具有挑战性的，因为它需要在可能的系统调用组合和并发执行计划之间进行联合搜索。内核竞争测试系统通常通过执行语料库中的一组模糊器种子并在跟踪中应用调度模糊和动态竞争预测的组合来执行此搜索。然而，预测哪些种子组合可以在内核中暴露竞争是困难的，因为模糊器种子通常在并发执行时会遵循不同的执行路径，这是由于线程间通信和同步造成的。为了解决这个挑战，我们引入了一种新的内核竞争预测分析方法，概率锁定集分析（PLA），它解决了内核竞争预测所带来的挑战。PLA利用观察到系统调用几乎总是执行某些访问共享内存的内存访问来执行它们的功能。PLA使用随机并发跟踪取样来识别一致执行的内存访问，并估计其之间的竞争概率，同时考虑内核锁同步。通过优先处理高概率的竞争，PLA能够进行准确的预测。我们将PLA与可比较的内核竞争测试方法进行了评估，并展示了PLA在24小时内以3倍的速率找到竞争。我们使用PLA在Linux内核v5.18-rc5中找到了183个竞争，其中包括102个有害的竞争。PLA能够找到在经过大量测试的核心内核模块中具有严重安全影响的竞争，包括内存管理中的use-after-free、网络加密中的OOB写入以及泄露内核堆内存信息。其中一些漏洞已被现有系统忽视多年：PLA发现的一个涉及OOB写入的竞争自2013年以来一直存在于内核中（版本v3.14-rc1），并且被指定为高安全性CVE。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179366/](https://ieeexplore.ieee.org/document/10179366/)
## SegFuzz: Segmentizing Thread Interleaving to Discover Kernel Concurrency Bugs through Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#segfuzz-segmentizing-thread-interleaving-to-discover-kernel-concurrency-bugs-through-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#segfuzz-segmentizing-thread-interleaving-to-discover-kernel-concurrency-bugs-through-fuzzing)**
### 作者
* Dae R. Jeong, School of Computing, KAIST
* Byoungyoung Lee, Department of Electrical and Computer Engineering, Seoul National University
* Insik Shin, School of Computing, KAIST
* Youngjin Kwon, School of Computing, KAIST
### 摘要
> 通过模糊测试发现内核并发错误是具有挑战性的。识别内核并发错误与非并发错误不同，需要分析两个或更多线程之间的可能交错情况。然而，由于线程交错的搜索空间很大，因此不可能对所有可能的线程交错进行调查是不切实际的。为了探索广阔的搜索空间，大多数以前的方法执行随机或简单的启发式搜索，而没有涉及线程交错或涉及规模不足的覆盖。结果，它们要么进行了冗余执行的无用搜索，要么忽视了其覆盖范围无法解决的并发错误。为了克服这些限制，我们提出了SegFuzz，一种用于内核并发错误的模糊测试框架。在探索线程交错的搜索空间时，SegFuzz将整个线程交错分解为一组片段，每个片段表示少量指令的交错，并使用单个片段作为交错覆盖，称为交错段覆盖。当搜索线程交错时，SegFuzz变异已探索的交错段中的交错，以构建尚未探索的新线程交错。通过SegFuzz，我们在Linux内核中发现了21个新的并发错误，并通过展示SegFuzz较之最先进方法平均快4.1倍来证明其效率。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179398/](https://ieeexplore.ieee.org/document/10179398/)
## AEM: Facilitating Cross-Version Exploitability Assessment of Linux Kernel Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#aem-facilitating-cross-version-exploitability-assessment-of-linux-kernel-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#aem-facilitating-cross-version-exploitability-assessment-of-linux-kernel-vulnerabilities)**
### 作者
* Zheyue Jiang, Fudan University
* Yuan Zhang, Fudan University
* Jun Xu, University of Utah
* Xinqian Sun, Fudan University
* Zhuang Liu, Fudan University
* Min Yang, Fudan University
### 摘要
> 本文研究Linux内核的跨版本漏洞利用评估问题。具体而言，给定一个在特定内核版本上展示了漏洞可利用性的利用程序，我们的目标是了解同一漏洞在其他内核版本上的可利用性。为了解决跨版本漏洞利用评估问题，自动化利用生成（AEG）是目前唯一现有且可行的解决方案。然而，由于AEG采用了模板驱动的方式，并忽视了现有利用所提供的能力，所以它并不适用。在这项工作中，我们引入了一种新的方法，自动化漏洞迁移（AEM），以促进Linux内核的跨版本漏洞利用评估。AEM的关键洞察力是观察到利用程序采用的策略通常适用于其他可利用的内核版本。从技术上讲，我们将利用程序可工作的内核版本视为参考，并调整利用程序以使其他内核版本与参考版本一致。通过这种方式，我们可以在其他版本上复现利用行为。为了降低成本并提高可行性，我们有针对性地确定真正影响利用的执行点，只对那些点进行一致性调整。我们设计并实现了AEM的原型。在67个需要漏洞迁移的案例评估中，我们的原型成功迁移了56个案例的利用程序，成功率达到83.5%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179305/](https://ieeexplore.ieee.org/document/10179305/)
## AEM: Facilitating Cross-Version Exploitability Assessment of Linux Kernel Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#aem-facilitating-cross-version-exploitability-assessment-of-linux-kernel-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#aem-facilitating-cross-version-exploitability-assessment-of-linux-kernel-vulnerabilities)**
### 作者
* Zheyue Jiang, Fudan University
* Yuan Zhang, Fudan University
* Jun Xu, University of Utah
* Xinqian Sun, Fudan University
* Zhuang Liu, Fudan University
* Min Yang, Fudan University
### 摘要
> 本文研究Linux内核的跨版本漏洞利用评估问题。具体而言，给定一个在特定内核版本上展示了漏洞可利用性的利用程序，我们的目标是了解同一漏洞在其他内核版本上的可利用性。为了解决跨版本漏洞利用评估问题，自动化利用生成（AEG）是目前唯一现有且可行的解决方案。然而，由于AEG采用了模板驱动的方式，并忽视了现有利用所提供的能力，所以它并不适用。在这项工作中，我们引入了一种新的方法，自动化漏洞迁移（AEM），以促进Linux内核的跨版本漏洞利用评估。AEM的关键洞察力是观察到利用程序采用的策略通常适用于其他可利用的内核版本。从技术上讲，我们将利用程序可工作的内核版本视为参考，并调整利用程序以使其他内核版本与参考版本一致。通过这种方式，我们可以在其他版本上复现利用行为。为了降低成本并提高可行性，我们有针对性地确定真正影响利用的执行点，只对那些点进行一致性调整。我们设计并实现了AEM的原型。在67个需要漏洞迁移的案例评估中，我们的原型成功迁移了56个案例的利用程序，成功率达到83.5%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179286/](https://ieeexplore.ieee.org/document/10179286/)
## When Top-down Meets Bottom-up: Detecting and Exploiting Use-After-Cleanup Bugs in Linux Kernel.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#when-top-down-meets-bottom-up-detecting-and-exploiting-use-after-cleanup-bugs-in-linux-kernel) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#when-top-down-meets-bottom-up-detecting-and-exploiting-use-after-cleanup-bugs-in-linux-kernel)**
### 作者
* Lin Ma, Zhejiang University
* Duoming Zhou, Zhejiang University
* Hanjie Wu, Carnegie Mellon University
* Yajin Zhou, Zhejiang University
* Rui Chang, Zhejiang University
* Hao Xiong, Zhejiang University
* Lei Wu, Zhejiang University
* Kui Ren, Zhejiang University
### 摘要
> 当设备从系统中分离时，会发生使用后清理（Use-After-Cleanup，UAC）错误，因为一个正在运行的内核线程可能不知道设备被分离并尝试使用已被清理线程释放的对象。我们的调查表明，攻击者可以利用UAC错误获取任意代码执行和权限提升的能力，而这在社区中受到很少关注。虽然现有工具主要关注已知的并发错误，如数据竞争，但几乎没有针对UAC错误的工具。在本文中，我们提出了一种名为UACatcher的工具，以系统地检测UAC错误。UACatcher由三个主要阶段组成。首先，它扫描整个内核以找到目标层。接下来，它采用上下文和流敏感的函数间分析和指向分析，以定位可能在自下而上的清理线程中引起UAC错误的释放（解配）位置和在自上而下的内核线程中引起UAC错误的使用（解引用）位置。然后，UACatcher使用基于例程切换点的算法，依赖于同步和路径约束，来检测这些位置中的UAC错误并估计可利用的错误。对于可利用的错误，我们利用基于伪终端的设备仿真技术开发了实用的利用工具。我们实现了UACatcher的原型，并在5.11 Linux内核上进行了评估。结果，我们的工具成功检测到346个UAC错误，并向社区报告了这些错误（已确认并修复了277个，并分配了15个CVE）。此外，还有13个错误是可利用的，可以用于开发在内核空间中获得任意代码执行的工作利用工具，并实现权限提升。最后，我们讨论了UACatcher的局限性，并提出了修复和预防UAC错误的可能解决方案。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179356/](https://ieeexplore.ieee.org/document/10179356/)
## RSFuzzer: Discovering Deep SMI Handler Vulnerabilities in UEFI Firmware with Hybrid Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rsfuzzer-discovering-deep-smi-handler-vulnerabilities-in-uefi-firmware-with-hybrid-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rsfuzzer-discovering-deep-smi-handler-vulnerabilities-in-uefi-firmware-with-hybrid-fuzzing)**
### 作者
* Jiawei Yin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Menghao Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Yuekang Li, Nanyang Technological University
* Yong Yu, Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Boru Lin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Yanyan Zou, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Yang Liu, Nanyang Technological University
* Wei Huo, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing; Key Laboratory of Network Assessment Technology, Chinese Academy of Sciences; Beijing Key Laboratory of Network Security and Protection Technology
* Jingling Xue, UNSW, Sydney
### 摘要
> 系统管理模式（SMM）是由统一可扩展固件接口（UEFI）固件支持的x86处理器的安全操作模式。SMM旨在为访问高度特权数据或控制低级硬件（如电源管理）提供安全执行环境。在SMM中运行的程序称为SMM驱动程序，而系统管理中断（SMI）处理程序是SMM驱动程序的最重要组件，因为它们是唯一能够接收和处理来自SMM执行环境外部数据的组件。尽管SMM在操作系统受到损害时可以作为额外的保护层，但SMM驱动程序，特别是SMI处理程序的漏洞可能会使这种保护失效，并对设备造成严重损害。因此，对于UEFI固件的安全来说，及早发现SMI处理程序的漏洞非常重要。为此，研究人员提出了使用混合模糊测试技术来检测SMI处理程序漏洞。特别是，英特尔开发了一个名为Excite的混合模糊测试工具，用于保护英特尔产品。尽管现有的混合模糊测试技术可以检测到SMI处理程序的漏洞，但其效果有限，因为存在两个主要的问题：1）它们只能通过最常用的输入接口提供输入给SMI处理程序，缺乏利用其他输入接口的能力。2）它们对多个SMI处理程序共享的变量没有意识，缺乏探索与这些变量相关的代码段的能力。通过解决现有工作所面临的挑战，我们提出了RSFuzzer，一种混合灰盒模糊测试技术，它能够学习输入接口和格式信息，并检测通过调用多个SMI处理程序触发的深层隐藏的漏洞。我们实现了RSFuzzer，并在六个供应商提供的16个UEFI固件映像上进行了评估。实验结果表明，RSFuzzer平均可以覆盖617%更多的基本块，并检测到828%更多的漏洞，比最先进的混合模糊测试技术要好。此外，我们在评估的UEFI固件映像中发现并报告了65个0-day漏洞，并分配了14个CVE编号。值得注意的是，其中6个0-day漏洞是在英特尔的现成产品中发现的，这些产品在发布之前可能已经经过了Excite的测试。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179421/](https://ieeexplore.ieee.org/document/10179421/)
## A Theory to Instruct Differentially-Private Learning via Clipping Bias Reduction.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#a-theory-to-instruct-differentially-private-learning-via-clipping-bias-reduction) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#a-theory-to-instruct-differentially-private-learning-via-clipping-bias-reduction)**
### 作者
* Hanshen Xiao, MIT
* Zihang Xiang, KAUST
* Di Wang, KAUST
* Srinivas Devadas, MIT
### 摘要
> 我们研究了差分隐私随机梯度下降（DP-SGD）中使用剪辑或标准化每个样本梯度引入的偏差。作为确保有界敏感性的最常用但又人为的操作之一，梯度剪辑使得许多迭代优化方法能够进行复合隐私分析，而无需对学习模型或输入数据进行额外假设。尽管梯度剪辑具有广泛的适用性，但它在系统地指导隐私或效用改进方面也存在着理论挑战。一般来说，在没有对全局有界梯度的假设下，经典的收敛分析不适用于剪辑梯度下降。此外，由于对效用损失的理解有限，对于DP-SGD的许多现有改进方法都是启发式的，尤其是在私有深度学习的应用中。在本文中，我们提供了经过全面实证结果验证的有意义的理论分析。我们指出，梯度剪辑引起的偏差在先前的工作中被低估了。对于通过DP-SGD进行的通用非凸优化问题，我们展示了导致偏差的一个关键因素是待剪裁的随机梯度的采样噪声。因此，我们使用所开发的理论从各个角度提出了一系列减少采样噪声的改进方法。从优化的角度来看，我们研究了方差减少技术，并提出了内外动量。在学习模型（神经网络）层面上，我们提出了几种增强网络内部标准化和批量剪辑的技巧。对于数据预处理，我们提供了最近提出的通过数据标准化和（自我）增强来改进的理论证明。将这些系统的改进方法结合起来，通过DP-SGD进行的私有深度学习在许多任务中可以得到显着增强。例如，在计算机视觉应用中，通过具有（ϵ = 8, δ = 10 <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">−5</sup> ）DP保证的训练，我们成功地在CIFAR10和SVHN上训练了ResNet20，并分别获得76.0%和90.1%的测试准确率；对于自然语言处理，通过具有（ϵ = 4, δ = 10 <sup xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">−5</sup> ）的训练，我们成功地对IMDb数据上的循环神经网络进行了训练，并获得了77.5%的测试准确率。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179409/](https://ieeexplore.ieee.org/document/10179409/)
## Continual Observation under User-level Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#continual-observation-under-user-level-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#continual-observation-under-user-level-differential-privacy)**
### 作者
* Wei Dong, Hong Kong University of Science and Technology, Hong Kong SAR, China
* Qiyao Luo, Hong Kong University of Science and Technology, Hong Kong SAR, China
* Ke Yi, Hong Kong University of Science and Technology, Hong Kong SAR, China
### 摘要
> 在Dwork等人的基础工作中[15]，关于差分隐私(DP)下的持续观测，提出了两种隐私模型：事件级别DP和用户级别DP。后者提供了更强的隐私保护概念，因为它允许用户贡献任意数量的项目。在事件级别的DP下，他们的机制与静态设置中所有保持并集的函数的最佳效用界限相匹配，除去对数因子。不幸的是，与事件级别DP的这一强结果相比，他们的用户级别DP机制在数据上具有较弱的效用保证和许多限制。本文采用特定实例的方法，设计了一些在用户级别DP下的基本函数的持续观测机制。我们的机制不需要任何对数据的先验限制，同时在数据的难度增加时提供了逐渐降低的效用保证。对于计数和求和函数，我们的机制是下邻域最优的，在除去对数因子的情况下与静态设置相匹配。对于其他函数，它们与静态情况不匹配，但我们证明了这是不可避免的，这是差分隐私下持续观测的首个分离结果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179466/](https://ieeexplore.ieee.org/document/10179466/)
## Locally Differentially Private Frequency Estimation Based on Convolution Framework.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#locally-differentially-private-frequency-estimation-based-on-convolution-framework) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#locally-differentially-private-frequency-estimation-based-on-convolution-framework)**
### 作者
* Huiyu Fang, School of Cyber Science and Engineering, Southeast University, Nanjing, China
* Liquan Chen, School of Cyber Science and Engineering, Southeast University, Nanjing, China
* Yali Liu, School of Computer Science and Technology, Jiangsu Normal University, Xuzhou, China
* Yuan Gao, School of Cyber Science and Engineering, Southeast University, Nanjing, China
### 摘要
> 本文介绍了一种局部差分隐私（Local Differential Privacy，LDP）的方法，该方法在保护用户隐私的同时收集用户数据，并消除了对可信数据收集器的需求。已经提出并在实际应用中部署了几种LDP协议。在LDP协议中，频率估计是一项基本任务，它可以使数据分析更加高级化。然而，现有的LDP协议放大了频率估计中的噪声，因此在准确性方面无法达到最佳性能。本文引入了一个卷积框架来分析和优化LDP协议的频率估计。这个卷积框架可以等价地将原始的频率估计问题转化为一个带有噪声的反卷积问题。因此，我们在LDP协议中添加了基于Wiener滤波器的反卷积算法，以估计频率并抑制增加的噪声。在不同的真实数据集上进行的实验证明，我们提出的算法对于最先进的LDP协议在光滑数据集上的准确性可以提高数个数量级。这些算法也适用于非光滑数据集，但仅有一定程度的效果。我们的代码可以在https://github.com/SEUNICK/LDP上找到。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179389/](https://ieeexplore.ieee.org/document/10179389/)
## Telepath: A Minecraft-based Covert Communication System.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#telepath-a-minecraft-based-covert-communication-system) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#telepath-a-minecraft-based-covert-communication-system)**
### 作者
* Zhen Sun, Cornell Tech
* Vitaly Shmatikov, Cornell Tech
### 摘要
> 存在国家级对手的情况下，隐蔽、抗审查的通信需要有难以通过网络流量分析检测的不可观察通道。流量替代，即用隐蔽内容替换由“掩护”应用程序传输的数据，利用已存在的加密通道产生与掩护应用程序流量在统计上无法区别的流量，因此很难被审查。在线游戏是建立绕过机制通道的有希望的平台，因为在线游戏在许多受审查地区非常受欢迎。然而，我们展示了先前提出的流量替代方法不能直接应用于游戏。它们的痕迹，即使在统计上与游戏痕迹相似，可能违反了游戏特定的不变量，因此容易被检测出来，因为它们无法由实际游戏生成。我们解释了如何识别非干扰内容，其替代不会导致客户端服务器不一致，并利用这些思想设计和实现了Telepath，一种使用Minecraft作为平台的隐蔽通信系统。Telepath利用了（1）Minecraft的加密客户端服务器通道，（2）分散的体系结构，使得每个用户都可以运行自己的服务器，以及（3）“mods”的流行度，这些mods为Minecraft客户端和服务器添加功能。Telepath运行一个Minecraft游戏，但将非干扰的游戏内消息替换为隐蔽内容，而不改变游戏与网络管理器的交互。我们测量了Telepath在Web浏览和音频流媒体方面的性能，并展示了Telepath生成的网络流量抵抗统计流量分析，旨在将其与流行的Minecraft bot区分开来。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179335/](https://ieeexplore.ieee.org/document/10179335/)
## Discop: Provably Secure Steganography in Practice Based on "Distribution Copies".
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#discop-provably-secure-steganography-in-practice-based-on-distribution-copies) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#discop-provably-secure-steganography-in-practice-based-on-distribution-copies)**
### 作者
* Jinyang Ding, University of Science and Technology of China
* Kejiang Chen, University of Science and Technology of China
* Yaofei Wang, Hefei University of Technology
* Na Zhao, University of Science and Technology of China
* Weiming Zhang, University of Science and Technology of China
* Nenghai Yu, University of Science and Technology of China
### 摘要
> 隐写术是将秘密信息的传输伪装成看似无害的行为。虽然几十年来，已经提出了可以证实安全的隐写术，但由于其严格的要求（如完美取样器和明确的数据分布），在传统数据环境中很难满足，所以它在这一领域并不主流。深度生成模型的流行度正在逐渐增加，可以为解决这一问题提供绝佳机会。近年来，已提出了一些试图基于深度生成模型实现可以证实安全的隐写术的方法。然而，由于不切实际的条件，比如离散元素的平衡分组和信息与通道分布之间的完美匹配，它们在实践中无法实现预期的安全性。在本文中，我们提出了一个新的实践中可以证实安全的隐写术方法，名为Discop，它在生成过程中构建了几个“分布副本”。在生成的每个时间步骤中，通过消息确定从哪个“分布副本”中进行采样。只要接收者与发送者就某些共享信息达成一致，他就可以无误地提取出消息。为了进一步提高嵌入速率，我们通过创建哈夫曼树递归地构建更多的“分布副本”。我们证明Discop可以严格维持原始分布，使对手无法比随机猜测更好地进行操作。此外，我们对多种数字媒体的多个生成任务进行了实验证明，结果显示Discop的安全性和效率优于以前的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179287/](https://ieeexplore.ieee.org/document/10179287/)
## SQUIP: Exploiting the Scheduler Queue Contention Side Channel.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#squip-exploiting-the-scheduler-queue-contention-side-channel) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#squip-exploiting-the-scheduler-queue-contention-side-channel)**
### 作者
* Stefan Gast, Lamarr Security Research; Graz University of Technology
* Jonas Juffinger, Lamarr Security Research; Graz University of Technology
* Martin Schwarzl, Graz University of Technology
* Gururaj Saileshwar, Georgia Institute of Technology
* Andreas Kogler, Graz University of Technology
* Simone Franza, Graz University of Technology
* Markus Köstl, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 现代超标量CPU具有多个执行单元，独立执行指令流中的操作。先前的研究表明，在SMT核心上运行的攻击者会对这些乱序执行流水线周围存在许多侧信道。在本文中，我们提出了SQUIP攻击，这是对调度器队列的首个侧信道攻击，对于决定要在超标量CPU中执行的指令的调度而言至关重要。迄今为止，调度器队列并没有作为侧信道进行研究，因为Intel CPU只有一个调度器队列，该队列的争用基本上与重排序缓冲区的争用相同。然而，Apple M1、AMD Zen 2和Zen 3微架构每个执行单元都有单独的调度器队列。我们首先通过逆向工程分析这些CPU上调度器队列的行为，并证明它们可以被引导和探测。SQUIP攻击观察了来自同一硬件核心和跨SMT线程的占用水平。我们在隐蔽信道中评估了SQUIP攻击的性能，从共存虚拟机中以低于0.8%的错误率外泄了0.89 Mbit/s，并从共存进程中以低于0.8%的错误率外泄了2.70 Mbit/s。然后，我们在共存进程和共存虚拟机中演示了在mbedTLS RSA签名过程中的侧信道。我们的攻击仅使用50,500条迹线以及平均不到5到18个位错误，就能完全恢复RSA-4096密钥。最后，我们讨论了必要的缓解措施，特别是针对Zen 2和Zen 3系统，以防止我们的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179368/](https://ieeexplore.ieee.org/document/10179368/)
## Scatter and Split Securely: Defeating Cache Contention and Occupancy Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scatter-and-split-securely-defeating-cache-contention-and-occupancy-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#scatter-and-split-securely-defeating-cache-contention-and-occupancy-attacks)**
### 作者
* Lukas Giner, Graz University of Technology
* Stefan Steinegger, Graz University of Technology
* Antoon Purnal, Imec-COSIC, KU Leuven
* Maria Eichlseder, Graz University of Technology
* Thomas Unterluggauer, Intel Corporation
* Stefan Mangard, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 在本文中，我们提出了一种名为SassCache的安全的倾斜联想缓存以及索引映射的方法。为此，我们设计了一个新的两层、低延迟的可配置输出范围的加密结构，其中采用了最先进的加密原语。基于这种结构，SassCache是第一个具有安全间隔的安全随机化缓存。受害者缓存行在平均不到1个访问之后自动隐藏在攻击者无法接触到的位置。因此，无论攻击者执行哪种或多少次内存访问，都无法将缓存行驱逐。我们的安全分析表明，所有现有的驱逐集构造技术都失败了，并且最先进的攻击只适用于300万个地址中的1个，而SassCache仍然与ScatterCache一样安全。与标准缓存相比，在SPEC2017基准测试中，Sass Cache在最后一级缓存命中率上的单线程性能损失为1.75%，在MiBench、GAP和Scimark等高安全性设置下，平均命中率下降11.7个百分点。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179440/](https://ieeexplore.ieee.org/document/10179440/)
## DevIOus: Device-Driven Side-Channel Attacks on the IOMMU.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#devious-device-driven-side-channel-attacks-on-the-iommu) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#devious-device-driven-side-channel-attacks-on-the-iommu)**
### 作者
* Taehun Kim, Korea University
* Hyeongjin Park, Korea University
* Seokmin Lee, Korea University
* Seunghee Shin, The State University of New York at Binghamton
* Junbeom Hur, Korea University
* Youngjoo Shin, Korea University
### 摘要
> 现代计算机系统利用输入/输出内存管理单元(IOMMU)来保护内存免受DMA攻击，或在虚拟化中实现强隔离。尽管IOMMU有很多潜在好处，但它也可能成为新的安全威胁源。与内存管理单元(MMU)类似，IOMMU也有一个名为IOTLB的转换后援缓冲器，它是一个保存最近转换的地址转换缓存。因此，IOTLB可能成为一个时序侧信道攻击的目标，泄露所攻击对象的秘密信息。本文提出了一种称为DevIOus的新型设备驱动侧信道攻击，利用了IOTLB。DevIOus利用了支持DMA的PCIe设备(如GPU和RDMA-启用的NIC)来进行攻击。因此，我们的攻击不会对受害者的机器中的CPU缓存或TLB产生影响。实施DevIOus并不容易，因为英特尔处理器的IOTLB的微体系结构内部是隐藏的。为了克服这一难题，我们进行了IOTLB的逆向工程，并揭示了其隐藏的结构特性。基于此，我们使用GPU和RNIC构建了两种基于IOTLB的时序攻击原语。然后，我们演示了针对硬件辅助隔离的共存虚拟机和通过RDMA网络连接的远程机器的实际攻击。我们还讨论了可能的对抗该侧信道攻击的措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179283/](https://ieeexplore.ieee.org/document/10179283/)
## DVFS Frequently Leaks Secrets: Hertzbleed Attacks Beyond SIKE, Cryptography, and CPU-Only Data.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dvfs-frequently-leaks-secrets-hertzbleed-attacks-beyond-sike-cryptography-and-cpu-only-data) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dvfs-frequently-leaks-secrets-hertzbleed-attacks-beyond-sike-cryptography-and-cpu-only-data)**
### 作者
* Yingchen Wang, University of Texas at Austin
* Riccardo Paccagnella, University of Illinois Urbana-Champaign
* Alan Wandke, University of Illinois Urbana-Champaign
* Zhao Gang, University of Texas at Austin
* Grant Garrett-Grossman, University of Illinois Urbana-Champaign
* Christopher W. Fletcher, University of Illinois Urbana-Champaign
* David Kohlbrenner, University of Washington
* Hovav Shacham, University of Texas at Austin
### 摘要
> 最近的赫兹流出漏洞揭示了远程时间分析如何揭示之前只能被本地电力分析访问的秘密信息。最糟糕的是，这构成了对常时编程原则以及依赖于常时编程的许多已部署程序的根本性破坏。但并非一切希望都破灭了。赫兹流出漏洞依赖于一个粗粒度、噪声信道，很难利用。事实上，赫兹流出漏洞论文需要一种定制的密码分析方法来攻击一个特定的加密系统（SIKE）。因此，目前尚不清楚赫兹流出漏洞是否对更广泛的安全生态系统构成威胁。在本文中，我们展示了赫兹流出漏洞的影响广泛，不仅影响SIKE之外的加密系统，还影响密码学以外的程序，甚至影响发生在CPU核心之外的计算。首先，我们展示了如何将其他加密系统实现中的潜在小工具（特别是“常时”ECDSA和Classic McEliece）与现有密码分析方法结合起来，以在那些加密系统上启动赫兹流出攻击。其次，我们展示了GPU集成芯片上的功耗如何影响CPU频率，以及如何利用这一点来执行第一个基于跨源像素窃取攻击，利用Google Chrome上的“常时”SVG滤镜。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179326/](https://ieeexplore.ieee.org/document/10179326/)
## A Security RISC: Microarchitectural Attacks on Hardware RISC-V CPUs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#a-security-risc-microarchitectural-attacks-on-hardware-risc-v-cpus) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#a-security-risc-microarchitectural-attacks-on-hardware-risc-v-cpus)**
### 作者
* Lukas Gerlach, CISPA Helmholtz Center for Information Security
* Daniel Weber, CISPA Helmholtz Center for Information Security
* Ruiyi Zhang, CISPA Helmholtz Center for Information Security
* Michael Schwarz, CISPA Helmholtz Center for Information Security
### 摘要
> 微体系结构攻击威胁着计算机系统的安全，即使在没有软件漏洞的情况下也是如此。这种攻击已在x86和ARM CPU上得到了广泛研究，并提出了各种硬件对策，但尚未部署。随着RISC-V指令集架构的标准化和主要处理器供应商对该架构的支持宣告，RISC-V CPU即将成为无处不在的。然而，第一批商用的RISC-V硬件CPU的微体系结构攻击面仍需探索。本文分析了两个商用的现成64位RISC-V（硬件）CPU，这些CPU在大多数运行完整的商品化Linux系统的RISC-V系统中使用。我们评估了微体系结构的攻击面，并介绍了3种新的微体系结构攻击技术：Cache+Time，一种无共享内存的新型以缓存行为单位的缓存攻击；Flush+Fault，利用哈佛缓存体系结构实现Flush+Reload；和CycleDrift，利用非特权访问指令退休信息。我们还展示了许多已知攻击适用于这些RISC-V CPU，主要是由于不存在硬件对策和指令集细微差别未考虑微体系结构攻击面。我们在6个案例研究中演示了我们的攻击，包括第一个专门针对RISC-V的微体系结构KASLR破解和基于CycleDrift的内核活动检测方法。根据我们的分析，我们强调在CPU设计的每个步骤中都需要考虑微体系结构攻击面，包括自定义ISA扩展。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179399/](https://ieeexplore.ieee.org/document/10179399/)
## Examining Zero-Shot Vulnerability Repair with Large Language Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#examining-zero-shot-vulnerability-repair-with-large-language-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#examining-zero-shot-vulnerability-repair-with-large-language-models)**
### 作者
* Hammond Pearce, New York University
* Benjamin Tan, University of Calgary
* Baleegh Ahmad, New York University
* Ramesh Karri, New York University
* Brendan Dolan-Gavitt, New York University
### 摘要
> 人类开发人员可能在编写代码时造成网络安全漏洞。新兴的“智能”代码完成工具能否帮助修复这些漏洞？在本研究中，我们研究了使用大型语言模型（LLMs）进行代码修复（如OpenAI的Codex和AI21的Jurassic J-1）的可能性。我们探讨了设计提示的挑战，以引导LLMs生成修复后的不安全代码。由于自然语言在语义和句法上有许多表达关键信息的方式，这一过程具有一定难度。我们对五个商业可用的黑盒子"即插即用"LLMs进行了大规模研究，同时使用了一个开源模型和我们自己的本地训练模型，对一系列合成的、手工制作的和真实世界的安全漏洞场景进行了测试。我们的实验表明，虽然这种方法有潜力（LLMs能够集体修复我们合成生成和手工制作场景中的100%漏洞），但对历史真实世界示例语料库上模型性能的定性评估突显出在生成功能正确的代码方面存在挑战。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179420/](https://ieeexplore.ieee.org/document/10179420/)
## Examining Zero-Shot Vulnerability Repair with Large Language Models.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#examining-zero-shot-vulnerability-repair-with-large-language-models) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#examining-zero-shot-vulnerability-repair-with-large-language-models)**
### 作者
* Hammond Pearce, New York University
* Benjamin Tan, University of Calgary
* Baleegh Ahmad, New York University
* Ramesh Karri, New York University
* Brendan Dolan-Gavitt, New York University
### 摘要
> 人类开发人员可能在编写代码时造成网络安全漏洞。新兴的“智能”代码完成工具能否帮助修复这些漏洞？在本研究中，我们研究了使用大型语言模型（LLMs）进行代码修复（如OpenAI的Codex和AI21的Jurassic J-1）的可能性。我们探讨了设计提示的挑战，以引导LLMs生成修复后的不安全代码。由于自然语言在语义和句法上有许多表达关键信息的方式，这一过程具有一定难度。我们对五个商业可用的黑盒子"即插即用"LLMs进行了大规模研究，同时使用了一个开源模型和我们自己的本地训练模型，对一系列合成的、手工制作的和真实世界的安全漏洞场景进行了测试。我们的实验表明，虽然这种方法有潜力（LLMs能够集体修复我们合成生成和手工制作场景中的100%漏洞），但对历史真实世界示例语料库上模型性能的定性评估突显出在生成功能正确的代码方面存在挑战。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179324/](https://ieeexplore.ieee.org/document/10179324/)
## Callee: Recovering Call Graphs for Binaries with Transfer and Contrastive Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#callee-recovering-call-graphs-for-binaries-with-transfer-and-contrastive-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#callee-recovering-call-graphs-for-binaries-with-transfer-and-contrastive-learning)**
### 作者
* Wenyu Zhu, Tsinghua University, Beijing, China; BNRist
* Zhiyao Feng, Tsinghua University, Beijing, China; BNRist
* Zihan Zhang, Tsinghua University, Beijing, China; BNRist
* Jianjun Chen, Tsinghua University, Beijing, China; Zhongguancun Laboratory
* Zhijian Ou, Tsinghua University, Beijing, China
* Min Yang, Fudan University, Shanghai, China
* Chao Zhang, Tsinghua University, Beijing, China; BNRist; Zhongguancun Laboratory
### 摘要
> 恢复二进制程序的调用图对于基于它们的跨过程分析任务和应用非常关键。其中一个核心挑战是识别间接调用的目标（即，间接被调用者）。现有的解决方案都存在高误报和漏报问题，导致调用图不准确。在本文中，我们提出了一个新的解决方案 Callee，它结合了迁移学习和对比学习。关键的洞察是深度神经网络（DNN）可以自动识别与间接调用相关的模式。在问题回答应用方面取得的进展启发我们利用对比学习来回答调用点-被调用者的问题。然而，一个最大的挑战是DNN需要大规模的数据集才能达到高性能，而收集大规模间接调用的真实情况可能会消耗大量计算资源。因此，我们利用迁移学习对DNN进行预训练，使用易于收集的直接调用，并进一步微调DNN以处理间接调用。我们在几组目标上评估了 Callee 的性能，结果显示我们的解决方案可以将调用点匹配到被调用者，F1-Measure 为94.6%，远远超过最先进的解决方案。此外，我们将 Callee 应用于两个应用领域 - 二进制代码相似性检测和混合模糊测试，并发现它可以极大地提高它们的性能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179482/](https://ieeexplore.ieee.org/document/10179482/)
## XFL: Naming Functions in Binaries with Extreme Multi-label Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#xfl-naming-functions-in-binaries-with-extreme-multi-label-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#xfl-naming-functions-in-binaries-with-extreme-multi-label-learning)**
### 作者
* James Patrick-Evans, Research Institute CODE, Bundeswehr University, Munich, Germany; Information Security Group, Royal Holloway, University of London, United Kingdom
* Moritz Dannehl, Research Institute CODE, Bundeswehr University, Munich, Germany
* Johannes Kinder, Research Institute CODE, Bundeswehr University, Munich, Germany
### 摘要
> 逆向工程师受益于二进制文件中的标识符，例如函数名称，但通常在发布时会删除。训练机器学习模型自动预测函数名称是有前景的，但在本质上很困难：与自然语言中的单词不同，大多数函数名称仅出现一次。在本文中，我们通过引入极端多标签学习方法（XFL）来解决这个问题，用于选择二进制函数的适当标签。XFL将函数名称拆分为标记，将每个标记视为与自然语言中的文本标记问题类似的信息性标签。我们通过Dexter将二进制代码的语义与标签相关联，Dexter是一种新颖的函数嵌入方法，它将基于静态分析的特征与来自调用图的局部上下文以及整个二进制文件的全局上下文相结合。我们证明了XFL/Dexter在Debian项目的10,047个二进制文件数据集上的函数标记中优于现有技术，达到83.5%的精度。我们还研究了XFL与文献中的其他二进制嵌入方法的组合，并展示Dexter在这个任务中始终表现最好。因此，我们证明了二进制函数标记可以有效地用多标签学习的术语来表达，并且二进制函数嵌入受益于包含显式语义特征。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179439/](https://ieeexplore.ieee.org/document/10179439/)
## D-ARM: Disassembling ARM Binaries by Lightweight Superset Instruction Interpretation and Graph Modeling.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#d-arm-disassembling-arm-binaries-by-lightweight-superset-instruction-interpretation-and-graph-modeling) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#d-arm-disassembling-arm-binaries-by-lightweight-superset-instruction-interpretation-and-graph-modeling)**
### 作者
* Yapeng Ye, Purdue University
* Zhuo Zhang, Purdue University
* Qingkai Shi, Purdue University
* Yousra Aafer, University of Waterloo
* Xiangyu Zhang, Purdue University
### 摘要
> ARM二进制分析在ARM系统安全中具有广泛的应用。其中一个基本挑战是ARM反汇编。ARM，特别是AArch32，具有许多独特的特性，使得反汇编与x86反汇编有所不同，例如ARM和Thumb指令模式的混合，应用程序内的隐式模式切换以及内联数据的更普遍使用。现有的技术在二进制代码变得复杂并经过混淆时，无法实现高精度。我们提出了一种新颖的ARM二进制反汇编技术，特别设计用于解决32位ARM二进制遗留代码中的挑战。它采用轻量级超级指令解释方法来获取丰富的语义信息，并采用基于图论的方法将这些信息汇总以生成最终结果。我们与Ghidra、IDA、P-Disasm、XDA、D-Disasm和Spedi等多种最先进的反汇编器进行了比较评估，使用SPEC2000和SPEC2006生成的数千个二进制文件，以及在线收集的真实应用程序，并表明我们的技术D-ARM明显优于基准线水平。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179307/](https://ieeexplore.ieee.org/document/10179307/)
## GraphSPD: Graph-Based Security Patch Detection with Enriched Code Semantics.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#graphspd-graph-based-security-patch-detection-with-enriched-code-semantics) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#graphspd-graph-based-security-patch-detection-with-enriched-code-semantics)**
### 作者
* Shu Wang, George Mason University
* Xinda Wang, George Mason University
* Kun Sun, George Mason University
* Sushil Jajodia, George Mason University
* Haining Wang, Virginia Tech
* Qi Li, Tsinghua University
### 摘要
> 随着开源软件的日益普及，嵌入式漏洞广泛传播至下游软件。由于不同的维护政策，软件供应商可能会默默发布安全补丁而未提供足够的警告（例如CVE）。这使得用户不知道安全补丁，并为攻击者提供了利用未修补漏洞的机会。因此，检测这些默默发布的安全补丁对于确保软件维护的安全至关重要。在本文中，我们提出了一种基于图神经网络的安全补丁检测系统，命名为GraphSPD，它将补丁表示为具有丰富语义的图，并利用面向补丁的图模型进行检测。我们首先开发了一种称为PatchCPG的新型图结构，通过合并源代码的修补前和修补后的代码属性图（CPGs），以及保留修补的上下文、删除和添加组件来表示软件补丁。通过应用切片技术，我们保留最相关的上下文并减小PatchCPG的大小。然后，我们开发了第一个端到端的深度学习模型，称为PatchGNN，直接从其以图结构表示的PatchCPG中确定补丁是否与安全相关。PatchGNN包括一个新的嵌入过程，将PatchCPG转换为数值格式，以及一个新的多属性图卷积机制，以适应PatchCPG中的不同关系。实验结果表明，GraphSPD在安全补丁检测方面明显优于现有的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179479/](https://ieeexplore.ieee.org/document/10179479/)
## Effective ReDoS Detection by Principled Vulnerability Modeling and Exploit Generation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#effective-redos-detection-by-principled-vulnerability-modeling-and-exploit-generation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#effective-redos-detection-by-principled-vulnerability-modeling-and-exploit-generation)**
### 作者
* Xinyi Wang, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Cen Zhang, Nanyang Technological University
* Yeting Li, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Zhiwu Xu, Shenzhen University
* Shuailin Huang, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Yi Liu, Nanyang Technological University
* Yican Yao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Yang Xiao, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Yanyan Zou, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Yang Liu, Nanyang Technological University
* Wei Huo, {CAS-KLONAT, BKLONSPT}, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 正则表达式拒绝服务（ReDoS）是一种算法复杂性攻击。对于易受攻击的正则表达式，攻击者可以构造某些字符串以触发超线性最坏匹配时间，从而导致正则表达式引擎拒绝服务。最近提出了各种ReDoS检测方法。其中，吸收了静态和动态方法优势的混合方法表现出了性能优势。然而，两个关键挑战仍然限制了检测的有效性：1）现有的建模方法基于易受攻击的正则表达式的部分特征总结了局部化的漏洞模式；2）现有的攻击字符串生成策略是无效的，因为它们忽略了正则表达式中非易受攻击部分可能会意外使攻击字符串无效（我们将此类使攻击字符串无效的情况称为干扰）。Rengar是我们的混合ReDoS检测器，具有新的漏洞建模和无干扰攻击字符串生成器。它具有以下关键特点：1）通过总结易受攻击的正则表达式的全特征模式，它的建模是对ReDoS漏洞的根本原因更精准的解释。该建模比现有建模的并集更加描述性和精确，同时保持简洁；2）对于每个易受攻击的正则表达式，其生成器自动检查所有潜在的干扰，并组成生成约束以避免可能的干扰。与九种最先进的工具相比，Rengar不仅检测到了它们发现的所有易受攻击的正则表达式，还发现了3-197倍更多的易受攻击的正则表达式。此外，与包含动态验证过程的工具相比，它平均节省了57.41％-99.83％的检测时间。使用Rengar，我们已经发现了69个影响流行项目的零日漏洞（21个CVE），这些项目每周下载量超过数百万。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179328/](https://ieeexplore.ieee.org/document/10179328/)
## SoK: Decentralized Finance (DeFi) Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-decentralized-finance-defi-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-decentralized-finance-defi-attacks)**
### 作者
* Liyi Zhou, Imperial College London; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Xihan Xiong, Imperial College London
* Jens Ernstberger, Technical University of Munich; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Stefanos Chaliasos, Imperial College London
* Zhipeng Wang, Imperial College London
* Ye Wang, University of Macau
* Kaihua Qin, Imperial College London; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Roger Wattenhofer, ETH Zurich
* Dawn Song, University of California, Berkeley; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
* Arthur Gervais, University College London; Berkeley Center for Responsible, Decentralized Intelligence (RDI)
### 摘要
> 在仅仅四年的时间里，基于区块链的去中心化金融（DeFi）生态系统累积了超过2530亿美元的峰值锁定总价值（TVL）。不幸的是，DeFi的流行也伴随着许多有重大影响的事件。根据我们的数据，从2018年4月30日至2022年4月30日，用户、流动性提供者、投机者和协议操作者总共损失了至少32.4亿美元。鉴于区块链的透明度和事件频率的增加，我们提出了两个问题：我们如何系统地测量、评估和比较DeFi事件？我们如何从过去的攻击中吸取教训以加强DeFi的安全性？
> 
> 在本文中，我们引入了一个共同的参考框架，以系统地评估和比较DeFi事件，包括攻击和事故。我们调查了77篇学术论文、30份审计报告和181个真实世界的事件。我们的数据揭示了学术界和从业者社区之间的几个差距。例如，很少有学术论文涉及"价格预言机攻击"和"无需许可的互动"，而我们的数据表明它们分别是最常见的两种事件类型（分别为15%和10.5%）。我们还调查了潜在的防御措施，并发现：（i）103次（56%）攻击未原子地执行，为防御者提供了一个时间窗口；（ii）字节码相似性分析至少可以检测到31个易受攻击的/23个敌对合约；（iii）33个（15.3%）对手通过与中心化交易所进行互动泄露了潜在可辨识信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179435/](https://ieeexplore.ieee.org/document/10179435/)
## BlindHub: Bitcoin-Compatible Privacy-Preserving Payment Channel Hubs Supporting Variable Amounts.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blindhub-bitcoin-compatible-privacy-preserving-payment-channel-hubs-supporting-variable-amounts) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blindhub-bitcoin-compatible-privacy-preserving-payment-channel-hubs-supporting-variable-amounts)**
### 作者
* Xianrui Qin, The University of Hong Kong
* Shimin Pan, The University of Hong Kong
* Arash Mirzaei, Monash University
* Zhimei Sui, Monash University
* Oğuzhan Ersoy, Radboud University, Delft University of Technology
* Amin Sakzad, Monash University
* Muhammed F. Esgin, Monash University; CSIRO’s Data61
* Joseph K. Liu, Monash University
* Jiangshan Yu, Monash University
* Tsz Hon Yuen, The University of Hong Kong
### 摘要
> 支付通道中枢（PCH）是解决第一代区块链或加密货币（如比特币）可伸缩性问题的有希望的解决方案。它通过中介（称为混币器）支持发送方和接收方之间的离线支付。隐私保护的PCH具有关系匿名性和价值隐私性这两个可取的特点，可以防止混币器识别发送方和接收方对以及支付金额。据我们所知，所有现有的保证关系匿名性的比特币兼容PCH构建只允许固定的支付金额。因此，为了实现不同数量的打款，它们要么需要多个PCH系统，要么运行一个PCH系统多次。这些解决方案都被认为不实际。在本文中，我们提出了第一个能够实现关系匿名性并支持可变金额支付的比特币兼容PCH。为了实现这一目标，我们有几层技术构建，每一层都可能引起社区的独立兴趣。首先，我们提出了BlindChannel，一种新颖的用于隐私保护支付的双向支付通道协议，其中一个通道参与方无法看到通道余额。然后，我们进一步提出了BlindHub，一种用于私密条件支付的三方（发送方、混币器、接收方）协议，在发送方支付给混币器的情况下，混币器才向接收方付款。BlindHub的一个吸引人的附加功能是混币器无法将发送方和接收方联系起来，同时支持可变的支付金额。为了构建BlindHub，我们还引入了两种新的加密原语作为构建模块，分别是盲适配器签名（BAS）和灵活盲条件签名（FBCS）。BAS是建立在盲签名方案之上的适配器签名协议。FBCS是一种新的加密概念，使我们能够提供具有原子性和隐私保护的PCH。最后，我们实例化了BlindChannel和BlindHub协议，并提供实现结果以展示它们的实用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179427/](https://ieeexplore.ieee.org/document/10179427/)
## Optimistic Fast Confirmation While Tolerating Malicious Majority in Blockchains.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#optimistic-fast-confirmation-while-tolerating-malicious-majority-in-blockchains) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#optimistic-fast-confirmation-while-tolerating-malicious-majority-in-blockchains)**
### 作者
* Ruomu Hou, National University of Singapore
* Haifeng Yu, National University of Singapore
### 摘要
> 区块链系统对抗者的强韧性通常由其能够容忍的最大敌对能力分数(f <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">max</inf>)来表征。尽管大多数现有的区块链只能容忍${f_{\max }} < \frac{1}{2}$ 或更低的敌对能力分数，但也有一些区块链系统能够容忍恶意多数，即${f_{\max }} \geq \frac{1}{2}$。然而，付出了这样的代价，这些区块链系统通常具有较长的确认延迟。本研究旨在显著缩短在这类区块链系统中的确认延迟，特别是在实际的敌对能力分数f相对较小的情况下。为此，我们提出了一种新型区块链系统，称为Flint。Flint能够容忍${f_{\max }} \geq \frac{1}{2}$，并且在敌对能力分数f相对较小的情况下能够进行乐观执行（即快速确认）。我们的实验证明，Flint的快速确认只需要几分钟，而之前的工作中需要数小时的确认延迟。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179323/](https://ieeexplore.ieee.org/document/10179323/)
## Clockwork Finance: Automated Analysis of Economic Security in Smart Contracts.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#clockwork-finance-automated-analysis-of-economic-security-in-smart-contracts) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#clockwork-finance-automated-analysis-of-economic-security-in-smart-contracts)**
### 作者
* Kushal Babel, Cornell Tech
* Philip Daian, Cornell Tech
* Mahimna Kelkar, Cornell Tech
* Ari Juels, Cornell Tech
### 摘要
> 我们介绍了Clockwork Finance Framework（CFF），这是一个通用的形式验证框架，用于机械化地推理复合去中心化金融（DeFi）智能合约的经济安全属性。CFF具有三个关键属性。它是合约完备的，意味着它可以模拟任何智能合约平台及其所有合约——无论是图灵完备还是其他类型的。它以渐进恒定的模型开销实现这一目标。它是由结构决定的攻击穷尽的，意味着它可以自动且机械化地提取对用户加密货币可能的所有经济攻击，跨模型的合约。由于这些属性，CFF可以支持多个目标：开发人员对合约的经济安全性分析，用户对DeFi交易风险的分析，费用用户体验以及机器人或矿工的套利机会优化。由于CFF具有可组合性，它可以通过对任何所需的潜在交互的智能合约模型进行推理来支持这些目标。
> 
> 我们将CFF实例化为以太坊合约的可执行模型，并结合最新的演绎验证器。在前期工作的基础上，我们引入了可提取的价值（EV），这是关于组合DeFi合约的经济安全的新形式概念，既是CFF的基础，也具备普遍的兴趣。
> 
> 我们在以太坊上构建了四个受欢迎的、已部署的DeFi协议的模块化、人类可读、可组合的CFF模型：Uniswap、Uniswap V2、Sushiswap和MakerDAO，这些协议在2022年3月份总价值达到了240亿美元。我们使用这些模型以及其他一些常见模型，如闪电贷、空投和投票，通过实验证明CFF是实用的，并可以从真实世界的交易活动中获得有用的、基于数据的EV-based的洞见。在没有明确编程的攻击策略的情况下，CFF在最近的过去平均揭示了预期的每月5600万美元的EV。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179346/](https://ieeexplore.ieee.org/document/10179346/)
## Tyr: Finding Consensus Failure Bugs in Blockchain System with Behaviour Divergent Model.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#tyr-finding-consensus-failure-bugs-in-blockchain-system-with-behaviour-divergent-model) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#tyr-finding-consensus-failure-bugs-in-blockchain-system-with-behaviour-divergent-model)**
### 作者
* Yuanliang Chen, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Fuchen Ma, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Yuanhang Zhou, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Yu Jiang, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
* Ting Chen, University of Electronic Science and Technology of China, Chengdu, China
* Jiaguang Sun, School of Software, Tsinghua University, KLISS, BNRist, Beijing, China
### 摘要
> 区块链是一个分散化分布式系统，已经部署了大量的金融应用。其中的共识过程起着重要的作用，保证了链上的合法交易能够公正和一致地执行和记录。然而，由于共识失败漏洞（CFBs），许多区块链系统甚至无法提供这种基本保证。区块链系统的有效性和一致性依赖于复杂共识逻辑实现的正确性。任何导致区块链共识失败的漏洞都可能具有重大影响。在这项工作中，我们介绍了Tyr，一个用于检测具有大量异常分歧共识行为的区块链系统中CFBs的开源工具。首先，我们设计了四个预言机检测器来监视节点的行为并分析共识性质的违反。为了有效触发这些预言机，Tyr利用行为分歧模型不断生成共识消息，并使节点的行为尽可能不同。我们在六个广泛使用的商业区块链共识系统上实施并评估了Tyr，包括IBM Fabric，WeBank FISCO-BCOS，ConsenSys Quorum，Facebook Diem，Go-Ethereum和EOS。与现有的工具Peach、Fluffy和Twins相比，Tyr分别增加了27.3%、228.2%和297.1%的分支覆盖率。此外，Tyr已经发现了20个严重的以前未知的漏洞，所有这些漏洞都已经得到了相应维护者的修复。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179386/](https://ieeexplore.ieee.org/document/10179386/)
## Leaking Arbitrarily Many Secrets: Any-out-of-Many Proofs and Applications to RingCT Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#leaking-arbitrarily-many-secrets-any-out-of-many-proofs-and-applications-to-ringct-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#leaking-arbitrarily-many-secrets-any-out-of-many-proofs-and-applications-to-ringct-protocols)**
### 作者
* Tianyu Zheng, Department of Computing, The Hong Kong Polytechnic University
* Shang Gao, Department of Computing, The Hong Kong Polytechnic University
* Yubo Song, School of Cyber Science and Engineering, Southeast University
* Bin Xiao, Department of Computing, The Hong Kong Polytechnic University
### 摘要
> 环路保密交易（RingCT）协议是保护加密货币隐私的有效加密组件。然而，现有的RingCT协议只能从具有一个秘密的one-out-of-many证明中实例化，导致在处理多输入交易时效率低下且隐私性较弱。此外，当前具有多个秘密的部分知识证明既不安全也不高效，无法应用于RingCT协议。本文提出了一种新颖的任意多个证明方案，即一个对数大小的零知识证明方案，用于展示对于公共列表中任意多个秘密的了解。与其他必须透露秘密数量的部分知识证明不同，我们的方法证明了多个秘密的知识，而不泄露其确切数量。此外，我们使用通用内积转换改进了方法的效率，采用Bulletproofs压缩[BBB+18]，将证明大小减小为2⌈log <inf xmlns:mml="http://www.w3.org/1998/Math/MathML" xmlns:xlink="http://www.w3.org/1999/xlink">2</inf> (N)⌉+9.基于我们提出的证明方案，我们进一步构建了一种紧凑的用于隐私加密货币的RingCT协议，可以为具有多个输入的交易提供对数大小的通信复杂度。更重要的是，作为唯一从部分知识证明实例化的已知RingCT协议，与Omniring [LRR+19]等其他方法相比，我们的协议可以实现更高的匿名级别。对于其他应用，例如多个环签名，我们的协议也可以在进行一些修改后应用。我们相信我们的技术也适用于其他隐私保护场景，如区块链中的多个环签名和币混合。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179292/](https://ieeexplore.ieee.org/document/10179292/)
## Could you clean up the Internet with a Pit of Tar? Investigating tarpit feasibility on Internet worms.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#could-you-clean-up-the-internet-with-a-pit-of-tar-investigating-tarpit-feasibility-on-internet-worms) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#could-you-clean-up-the-internet-with-a-pit-of-tar-investigating-tarpit-feasibility-on-internet-worms)**
### 作者
* Harm Griffioen, Hasso Plattner Institute, University of Potsdam, Germany
* Christian Doerr, Hasso Plattner Institute, University of Potsdam, Germany
### 摘要
> 僵尸网络往往通过广泛的互联网扫描来传播，识别和感染易受攻击的面向互联网的设备以扩大它们的网络。摧毁这些网络对执法机构来说往往很困难，一些人提出了“陷阱”作为一种防御方法，因为它不需要夺取基础设施或依赖设备所有者确保其设备配置良好和受保护。这些“陷阱”是网络服务，旨在让恶意软件感染的设备繁忙，减慢或消除其恶意行为。本文发现了无状态扫描恶意软件中的基于网络的“陷阱”漏洞，并开发了一个“陷阱”攻击。我们将这种技术应用于基于Mirai扫描例程的恶意软件，以确定大规模“陷阱”对遏制自我传播恶意软件的传播是否有效。我们证明了即使在单一“陷阱”中，我们也能有效地困住数千个设备，并且这显著减慢了僵尸网络在互联网上的传播，并提供了一个框架来模拟不同网络条件下恶意软件的传播以先验评估“陷阱”对特定恶意软件的影响。我们表明，借助几千个“陷阱”，可以遏制自我传播的恶意软件，而且对受损路由器或互联网服务提供商没有可衡量的不利影响，并将我们的“陷阱”解决方案作为开放平台发布给社区。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179467/](https://ieeexplore.ieee.org/document/10179467/)
## Beyond Phish: Toward Detecting Fraudulent e-Commerce Websites at Scale.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#beyond-phish-toward-detecting-fraudulent-e-commerce-websites-at-scale) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#beyond-phish-toward-detecting-fraudulent-e-commerce-websites-at-scale)**
### 作者
* Marzieh Bitaab, Arizona State University
* Haehyun Cho, Soongsil University
* Adam Oest, PayPal, Inc.
* Zhuoer Lyu, Arizona State University
* Wei Wang, Palo Alto Networks
* Jorij Abraham, Scam Adviser
* Ruoyu Wang, Arizona State University
* Tiffany Bao, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
### 摘要
> 尽管恶意网站检测和钓鱼网站防御近年取得了一些进展，但安全生态系统在欺诈电子商务网站（FCWs）如欺诈购物网站、假慈善机构和加密货币骗局网站方面却鲜有关注。更糟糕的是，目前没有积极防御该类网站的大规模系统，也没有公开可用的FCWs数据集。本文首先提出了一种高效自动的众包方法来收集FCWs。我们确定了八种不同类型的非钓鱼FCWs，并提取了关键定义特征。随后，我们发现反钓鱼防御系统，如Google安全浏览，对我们的数据集的检测率仅为0.46%。我们创建了一个名为BEYOND PHISH的分类器，基于我们的分析手动定义了特征，用于识别FCWs。通过用户研究验证BEYOND PHISH在先前未见过的（未经训练和测试的）数据上，表明我们的系统具有很高的检测率和低误报率，分别为98.34%和1.34%。最后，我们与一家重要的互联网安全公司Palo Alto Networks以及一家主要金融服务提供商合作，评估我们的分类器在手动标记的真实世界数据上的表现。该模型实现了2.46%的误报率和94.88%的检测率，表明在真实世界中对抗FCWs具有潜力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179461/](https://ieeexplore.ieee.org/document/10179461/)
## Limits of I/O Based Ransomware Detection: An Imitation Based Attack.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#limits-of-i-o-based-ransomware-detection-an-imitation-based-attack) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#limits-of-i-o-based-ransomware-detection-an-imitation-based-attack)**
### 作者
* Chijin Zhou, BNRist, School of Software, Tsinghua University, Beijing, China
* Lihua Guo, BNRist, School of Software, Tsinghua University, Beijing, China
* Yiwei Hou, BNRist, School of Software, Tsinghua University, Beijing, China
* Zhenya Ma, BNRist, School of Software, Tsinghua University, Beijing, China
* Quan Zhang, BNRist, School of Software, Tsinghua University, Beijing, China
* Mingzhe Wang, BNRist, School of Software, Tsinghua University, Beijing, China
* Zhe Liu, NUAA, Computer Science and Technology, Nanjing, China
* Yu Jiang, BNRist, School of Software, Tsinghua University, Beijing, China
### 摘要
> 通过加密被感染主机的数据，加密勒索软件给各种受害者造成了数十亿美元的财务损失。过去十年中，许多检测技术已被提出来应对勒索软件的威胁。它们的常见方法是监控用户空间的I/O行为，并应用自定义启发式方法来区分勒索软件。这些技术隐含地假设在启发式方面，勒索软件与良性程序之间的行为差异非常大。然而，当我们调查良性和勒索软件程序的行为时，发现它们之间的行为边界变得模糊。勒索软件程序可以在遵循良性程序的行为模式的情况下仍然达到其目标。本文旨在探索基于I/O行为的勒索软件检测技术的限制。为此，我们介绍了Animagus，一种基于模仿的勒索软件攻击，它模仿良性程序的行为来掩盖其加密任务。它首先从一个良性程序中学习行为模式，然后产生并协调子进程执行与良性程序相同的加密任务。我们对六种最先进的检测技术进行了评估，结果显示它能成功地躲避这些防御措施。我们详细研究了为什么它们无效以及Animagus与现有勒索软件样本的区别。最后，我们讨论了潜在的对策和检测工具从我们的工作中获得的好处。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179372/](https://ieeexplore.ieee.org/document/10179372/)
## From Grim Reality to Practical Solution: Malware Classification in Real-World Noise.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#from-grim-reality-to-practical-solution-malware-classification-in-real-world-noise) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#from-grim-reality-to-practical-solution-malware-classification-in-real-world-noise)**
### 作者
* Xian Wu, Northwestern University
* Wenbo Guo, UC Berkeley
* Jia Yan, Penn State
* Baris Coskun, AWS
* Xinyu Xing, Northwestern University
### 摘要
> 恶意软件数据集中不可避免地会包含错误的标签，这是因为样本标注需要的专业知识和经验短缺。先前的研究表明，带有错误标签样本的训练数据集将导致模型学习不准确。为了解决这个问题，研究人员提出了各种噪声学习方法来抵消错误标签样本的影响，在图像识别和文本挖掘应用中，这些方法取得了巨大成功。在这项工作中，我们将代表性和最新的噪声学习方法应用于现实世界的恶意软件分类任务中。令人惊讶的是，我们观察到现有方法都无法最小化错误标签的影响。通过精心设计的实验，我们发现这种无效主要是由于极端的数据不平衡和错误标记数据样本的高比例造成的。因此，我们进一步提出了一种新的噪声学习方法，并将其命名为MORSE。与现有方法不同，MORSE定制并扩展了一种最先进的半监督学习技术。它将可能错误标记的数据视为未标记的数据，从而避免了它们对模型学习的潜在负面影响。在MORSE中，我们还融合了一种样本重新加权方法，以平衡模型学习中的训练数据使用，从而解决了数据不平衡的挑战。我们在自己合成的数据集和现实世界的数据集上评估了MORSE。我们展示了MORSE能够显著优于现有的噪声学习方法，并最小化了错误标记数据的影响。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179453/](https://ieeexplore.ieee.org/document/10179453/)
## SoK: History is a Vast Early Warning System: Auditing the Provenance of System Intrusions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-history-is-a-vast-early-warning-system-auditing-the-provenance-of-system-intrusions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#sok-history-is-a-vast-early-warning-system-auditing-the-provenance-of-system-intrusions)**
### 作者
* Muhammad Adil Inam, University of Illinois at Urbana-Champaign
* Yinfang Chen, University of Illinois at Urbana-Champaign
* Akul Goyal, University of Illinois at Urbana-Champaign
* Jason Liu, University of Illinois at Urbana-Champaign
* Jaron Mink, University of Illinois at Urbana-Champaign
* Noor Michael, University of Illinois at Urbana-Champaign
* Sneha Gaur, University of Illinois at Urbana-Champaign
* Adam Bates, University of Illinois at Urbana-Champaign
* Wajih Ul Hassan, University of Virginia
### 摘要
> 稽核是操作系统安全的核心支柱，最近才成为公共研究领域的一个活跃领域。这种兴趣的复兴主要归功于数据溯源的概念，这是一种将审计日志条目迭代地解析为依赖图的技术，用于解释系统执行的历史。溯源通过对复杂入侵行为的因果分析，有助于精确的威胁检测和调查。然而，基础审计文献的缺失，以及最近研究成果的快速发布，使人们难以全面了解该领域的进展和挑战。
> 
> 在这项研究中，我们对基于溯源的系统审计文献进行了调查和分类，并基于审计日志捕获和分析流程，将贡献分为不同层次的分类。鉴于减少层仍然是进一步推广因果分析技术的关键障碍，我们进一步深入研究了这个问题，通过对最近发布的DARPA透明计算数据集进行了8种代表性减少技术的雄心勃勃的独立评估。我们的实验发现，以往的方法经常从审计日志中修剪出一组重叠的活动，从而减少了将它们串联应用的协同效益；此外，我们观察到存储效率与异常检测性能之间存在反比关系。然而，我们还观察到日志减少技术能够有效地与数据压缩协同工作，潜在地将日志保留成本降低多个数量级。最后，我们讨论了该领域有希望的未来方向。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179405/](https://ieeexplore.ieee.org/document/10179405/)
## Collaborative Ad Transparency: Promises and Limitations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#collaborative-ad-transparency-promises-and-limitations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#collaborative-ad-transparency-promises-and-limitations)**
### 作者
* Eleni Gkiouzepi, Technical University of Berlin
* Athanasios Andreou, Algorithmic Transparency Institute
* Oana Goga, CNRS, Inria, Institut Polytechnique de Paris
* Patrick Loiseau, Inria, FairPlay Team
### 摘要
> 若干目标广告平台提供透明机制，但研究人员和公民社会反复表明这些机制存在重大局限性。在本文中，我们提出了一种协作广告透明方法，通过推断广告发布者用于定向广告的定向参数，而无需广告平台的合作。我们的想法是请求用户捐赠有关其属性和收到广告的数据，并利用这些数据来推断广告活动的定向属性。我们基于简化的伯努利广告投送模型提出了一种基于最大似然估计器的推断方法。我们首先通过在Facebook上进行控制广告实验来测试我们的推断方法。然后，为了进一步研究协作广告透明的潜力和局限性，我们提出了一个允许变化关键参数的模拟框架。我们验证了我们的框架产生的准确性与现实观察一致，从而保证了模拟结果的可转化性。随后，我们进行了广泛的模拟研究，以研究定向两种属性的广告活动。我们的结果表明，只要至少有十个被监测用户接收到广告，我们就可以获得良好的准确性。这通常需要几千个被监测用户，无论人口规模如何。我们的模拟框架基于一种生成具有类似实际人口统计属性的合成人口的新方法，可能具有独立的研究价值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179448/](https://ieeexplore.ieee.org/document/10179448/)
## Toss a Fault to Your Witcher: Applying Grey-box Coverage-Guided Mutational Fuzzing to Detect SQL and Command Injection Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#toss-a-fault-to-your-witcher-applying-grey-box-coverage-guided-mutational-fuzzing-to-detect-sql-and-command-injection-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#toss-a-fault-to-your-witcher-applying-grey-box-coverage-guided-mutational-fuzzing-to-detect-sql-and-command-injection-vulnerabilities)**
### 作者
* Erik Trickel, Arizona State University
* Fabio Pagani, University of California, Santa Barbara
* Chang Zhu, Arizona State University
* Lukas Dresel, University of California, Santa Barbara
* Giovanni Vigna, University of California, Santa Barbara
* Christopher Kruegel, University of California, Santa Barbara
* Ruoyu Wang, Arizona State University
* Tiffany Bao, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
### 摘要
> 黑盒网络应用程序漏洞扫描器试图在没有访问源代码的情况下自动识别Web应用程序中的漏洞。然而，它们通过使用一份手动筛选的漏洞诱因输入列表来实现，这显着降低了黑盒扫描器探索Web应用程序的输入空间的能力，可能导致误报。此外，黑盒扫描器必须尝试推断漏洞是否被触发，这会导致误报。
> 
> 为了克服这些限制，我们提出了Witcher，一种新颖的基于灰盒覆盖引导模糊测试的Web漏洞发现框架。Witcher实现了故障升级的概念，以便检测SQL和命令注入漏洞。此外，Witcher捕获覆盖信息并创建基于输出的输入指导，以便集中输入生成，并因此增加Web应用程序的状态空间探索。在一个包含PHP、Python、Node.js、Java、Ruby和C编写的18个Web应用程序数据集上，其中13个已知存在漏洞，Witcher能够找到36个已知漏洞中的23个(64%)，并发现了67个以前未知的漏洞，其中4个已获得CVE编号。在我们的实验中，Witcher在发现漏洞数量和Web应用程序覆盖范围方面均优于现有技术的扫描器。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179317/](https://ieeexplore.ieee.org/document/10179317/)
## UTopia: Automatic Generation of Fuzz Driver using Unit Tests.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#utopia-automatic-generation-of-fuzz-driver-using-unit-tests) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#utopia-automatic-generation-of-fuzz-driver-using-unit-tests)**
### 作者
* Bokdeuk Jeong, Samsung Research, Republic of Korea
* Joonun Jang, Samsung Research, Republic of Korea
* Hayoon Yi, Samsung Research, Republic of Korea
* Jiin Moon, Samsung Research, Republic of Korea
* Junsik Kim, Samsung Research, Republic of Korea
* Intae Jeon, Samsung Research, Republic of Korea
* Taesoo Kim, Samsung Research, Republic of Korea; Georgia Institute of Technology, USA
* WooChul Shim, Samsung Research, Republic of Korea
* Yong Ho Hwang, Samsung Research, Republic of Korea
### 摘要
> 模糊测试被认为是在软件中检测安全漏洞最实用的方法之一，但采用该方法需要相当大的努力才能达到效果。为了有效，高质量的模糊驱动程序应首先使用适当的API序列进行制定，以便能够彻底地探索程序的状态。为了减轻这种负担，现有的解决方案尝试通过从消费者代码（即API的实际使用）中推断有效的API序列，或者直接从示例执行中提取它们来生成模糊驱动程序。不幸的是，所有现有方法都面临一个共同的问题：观察到的API序列，无论是静态推断还是动态监测，都与自定义应用逻辑混合在一起。然而，我们注意到单元测试是由API的实际设计者精心设计的，以验证其正确使用的方式，而且撰写单元测试在开发过程中是常见的做法（例如，超过70％的热门GitHub项目）。在本文中，我们提出了一种名为UTopia的开源工具和分析算法，可以从现有的单元测试中自动合成出有效的模糊驱动程序，几乎不需要人工参与。为了展示其有效性，我们将UTopia应用于55个开源项目库，包括Tizen和Node.js，并自动生成了8K个符合条件的单元测试的5K个模糊驱动程序。此外，我们对生成的模糊器进行了约500万核心小时的执行，并发现了123个漏洞。更重要的是，Tizen项目将生成的2.4K个模糊驱动程序纳入了持续集成过程中，这表明了合成模糊驱动程序的质量。所提出的工具和结果是公开可用的，并得到了广大研究人员和从业人员的广泛采用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179394/](https://ieeexplore.ieee.org/document/10179394/)
## SelectFuzz: Efficient Directed Fuzzing with Selective Path Exploration.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#selectfuzz-efficient-directed-fuzzing-with-selective-path-exploration) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#selectfuzz-efficient-directed-fuzzing-with-selective-path-exploration)**
### 作者
* Changhua Luo, Chinese University of Hong Kong, Hong Kong SAR, China
* Wei Meng, Chinese University of Hong Kong, Hong Kong SAR, China
* Penghui Li, Chinese University of Hong Kong, Hong Kong SAR, China
### 摘要
> 定向灰盒模糊测试器专注于测试特定目标代码。它们已被应用于许多安全应用程序，如重现已知崩溃和检测由于不完整的补丁引起的漏洞。然而，现有的定向模糊测试器偏好于发现与目标代码无关的新代码输入，无论这些新发现的代码是否与目标代码相关。结果是，模糊测试器会广泛探索无关代码，并且效率低下。本文中，我们区分了目标程序中相关代码和与之无关的代码，后者不会触发目标代码中的漏洞。我们提出了SelectFuzz，一种新的定向模糊测试器，用于选择性地探索相关程序路径，以实现高效的崩溃重现和漏洞检测。它识别了两种类型的相关代码——路径分歧代码和数据相关代码，分别捕获了与目标代码的控制和数据依赖关系。然后，它有选择地对相关代码块进行工具化和探索。我们还提出了一种新的距离度量方法，准确地衡量不同程序路径和输入的达到概率。我们使用真实世界程序集中的漏洞对SelectFuzz进行了评估。SelectFuzz在基准定向模糊测试器上的性能提高了多达46.31倍，并在Google模糊测试套件中表现最佳。我们的实验还证明了SelectFuzz和现有的路径修剪等技术是互补的。最后，通过SelectFuzz，我们发现了14个以前未知的漏洞，在经过充分测试的真实世界软件中发现了6个新的CVE编号。我们的报告促使修复了11个漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179296/](https://ieeexplore.ieee.org/document/10179296/)
## Finding Specification Blind Spots via Fuzz Testing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#finding-specification-blind-spots-via-fuzz-testing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#finding-specification-blind-spots-via-fuzz-testing)**
### 作者
* Ru Ji, University of Waterloo
* Meng Xu, University of Waterloo
### 摘要
> 一个经过正式验证的程序只有在规范（SPEC）完整且没有漏洞时才是正确的。但是如何确保SPEC是完整且没有漏洞的呢？本文介绍了一个潜在答案，即Fuzzing辅助规范测试（简称Fast）。关键的见解是利用和协同使用经过正式验证程序中的“冗余”和“多样性”进行交叉验证。具体来说，在同一个代码库中，SPEC、实现（CODE）和测试套件都是从同一组商业需求派生出来的。因此，如果某个意图在CODE和测试用例中被捕捉到，但在SPEC中没有被捕捉到，这就是SPEC存在盲点的强烈迹象。Fast以自动化的方式检查SPEC的不完整问题：首先通过突变测试来定位SPEC的缺口，即通过检查CODE变体是否符合原始的SPEC来进行。如果是这样，Fast进一步利用测试套件来推断该缺口是由意图引入还是错误引入的。根据代码库的大小，Fast可以选择以枚举或进化的方式生成CODE变体。Fast被应用于两个具有形式验证特征的开源代码库，并有助于分别确认它们的SPEC中的13个和21个盲点。这突显了SPEC不完整在现实世界应用中的普遍性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179438/](https://ieeexplore.ieee.org/document/10179438/)
## ODDFuzz: Discovering Java Deserialization Vulnerabilities via Structure-Aware Directed Greybox Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#oddfuzz-discovering-java-deserialization-vulnerabilities-via-structure-aware-directed-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#oddfuzz-discovering-java-deserialization-vulnerabilities-via-structure-aware-directed-greybox-fuzzing)**
### 作者
* Sicong Cao, Yangzhou University
* Biao He, Ant Group
* Xiaobing Sun, Yangzhou University
* Yu Ouyang, Ant Group
* Chao Zhang, Tsinghua University
* Xiaoxue Wu, Yangzhou University
* Ting Su, East China Normal University
* Lili Bo, Yangzhou University
* Bin Li, Yangzhou University
* Chuanlei Ma, Ant Group
* Jiajia Li, Ant Group
* Tao Wei, Ant Group
### 摘要
> Java反序列化漏洞在实践中是一个严重的威胁。研究人员提出了静态分析解决方案来定位候选漏洞，以及模糊解决方案来生成触发它们的概念验证（PoC）序列化对象。然而，现有的解决方案的有效性和效率受到了限制。在本文中，我们提出了一种新颖的混合解决方案ODDFuzz，以高效地发现Java反序列化漏洞。首先，ODDFuzz执行轻量级静态污点分析，以识别可能导致反序列化漏洞的候选小工具链。在这一步中，ODDFuzz尝试定位所有候选对象并避免错误阴性。然后，ODDFuzz执行定向灰盒模糊（DGF）来探索这些候选者，并生成PoC测试用例以减少错误阳性。具体而言，ODDFuzz采用了一种结构感知的种子生成方法来保证测试用例的有效性，并采用了一种新颖的混合反馈和步进策略来指导定向模糊测试。我们实现了ODDFuzz的原型，并在流行的Java反序列化存储库ysoserial上进行了评估。结果显示，ODDFuzz可以发现34个已知小工具链中的16个，而两个最先进的基准测试仅识别其中三个。此外，我们在包括Oracle WebLogic Server、Apache Dubbo、Sonatype Nexus和protostuff在内的现实世界应用程序上评估了ODDFuzz，并发现了六个以前未报告的可利用性小工具链，其中有五个分配了CVE编号。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179377/](https://ieeexplore.ieee.org/document/10179377/)
## The Leaky Web: Automated Discovery of Cross-Site Information Leaks in Browsers and the Web.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#the-leaky-web-automated-discovery-of-cross-site-information-leaks-in-browsers-and-the-web) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#the-leaky-web-automated-discovery-of-cross-site-information-leaks-in-browsers-and-the-web)**
### 作者
* Jannis Rautenstrauch, CISPA Helmholtz Center for Information Security
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 浏览网络时，我们都不希望网站推断我们之前访问过哪些其他网站或者我们是否已登录。然而，攻击者控制的网站可能会通过所谓的跨站信息泄露（XS-Leaks）的浏览器侧信道来推断这种状态。尽管这些问题自2000年代以来就已经被发现，但以前的报告大多只是发现个别问题，而不是系统地研究整个问题空间。此外，实际影响在实际环境中通常是模糊不清的。为了解决这些未解决的问题，我们开发了第一个自动化框架，以系统地发现浏览器中的观察信道。在这样做时，我们检测并描述了在Chromium、Firefox和Safari引擎中跨站泄露信息的280个观察信道，其中包括许多据称被修复的泄露变种。在这个框架之上，我们创建了一个自动化流水线，以在现实世界的网站中发现XS-Leaks。通过这个流水线，我们对Tranco Top10K进行了关于XS-Leak在野外普遍性的迄今为止最大规模的研究，包括进行了访问推理和一个新提出的变种Cookie接受推理攻击。此外，我们测试了100个网站以检测传统的XS-Leak登陆检测攻击向量。我们的结果显示，XS-Leaks对网络生态系统构成了重大威胁，因为至少15％、34％和77％的所有测试网站对这三种攻击都存在漏洞。此外，我们展示了浏览器之间的实现差异，这导致野外环境中存在不同的攻击面。为了确保浏览器供应商和网页开发人员都可以检查他们的应用程序是否存在XS-Leaks，我们开源了我们的框架，并包含了对消除XS-Leaks的对策的广泛讨论，以确保浏览器中的新功能不会引入新的XS-Leaks。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179311/](https://ieeexplore.ieee.org/document/10179311/)
## WebSpec: Towards Machine-Checked Analysis of Browser Security Mechanisms.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#webspec-towards-machine-checked-analysis-of-browser-security-mechanisms) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#webspec-towards-machine-checked-analysis-of-browser-security-mechanisms)**
### 作者
* Lorenzo Veronese, TU Wien
* Benjamin Farinier, Univ Rennes, Inria, CNRS, IRISA
* Pedro Bernardo, TU Wien
* Mauro Tempesta, TU Wien
* Marco Squarcina, TU Wien
* Matteo Maffei, TU Wien
### 摘要
> 多年来，浏览器的复杂性不断增加，这要归功于不断介绍和更新Web平台组件，如新型Web API和安全机制。这些规范需要由专家手动审核，以识别潜在的安全问题。然而，由于现代浏览器规范的广泛性以及新旧Web平台组件之间的相互作用，该过程被证明容易出错。为解决这个问题，我们开发了WebSpec，这是一种用于分析浏览器安全机制的第一个形式化安全框架，既可以自动发现逻辑缺陷，又可以开发机器验证的安全证明。WebSpec特别包括一个全面的浏览器语义模型，使用Coq证明助手，通过在该模型中形式化十个Web安全不变量，以及一个工具链，将Coq模型和Web不变量转化为SMT-lib公式，以便使用Z3定理证明器进行模型检验。如果发现违规行为，工具链将自动生成与发现的攻击轨迹对应的可执行测试，并在各个主要浏览器中验证。我们通过发现由不同浏览器机制相互作用引起的两个新的逻辑缺陷，并确定当前Web平台中三个之前发现的逻辑缺陷，以及旧版本中的五个逻辑缺陷，展示了WebSpec的有效性。最后，我们展示了WebSpec如何帮助验证我们提出的修改来修复当前Web平台中报告的不一致性问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179465/](https://ieeexplore.ieee.org/document/10179465/)
## Detection of Inconsistencies in Privacy Practices of Browser Extensions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#detection-of-inconsistencies-in-privacy-practices-of-browser-extensions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#detection-of-inconsistencies-in-privacy-practices-of-browser-extensions)**
### 作者
* Duc Bui, The University of Michigan, Ann Arbor, MI, U.S.A.
* Brian Tang, The University of Michigan, Ann Arbor, MI, U.S.A.
* Kang G. Shin, The University of Michigan, Ann Arbor, MI, U.S.A.
### 摘要
> 所有主要的网络浏览器都支持扩展，以提供额外的功能并增强用户的浏览体验，而这些扩展在用户的网络浏览过程中可以访问和收集用户的数据。虽然Web扩展通过多种形式的通知告知用户其数据处理方式，但先前的研究忽视了实际数据处理与浏览器扩展所发布的隐私通知之间的重要差距。为了填补这一差距，我们提出了ExtPrivA，它可以自动检测浏览器扩展的数据收集与其隐私披露之间的不一致性。通过隐私政策和仪表盘披露，ExtPrivA提取隐私声明以清晰地解释扩展的隐私实践。它模拟用户互动以触发扩展的功能，并分析网络请求的发起者，以准确提取用户从浏览器到外部服务器的扩展传输的数据。我们进行了端到端评估，结果显示ExtPrivA以85%的准确性检测出隐私披露与数据收集行为之间的不一致性。在Chrome Web商店对47.2k个扩展进行的大规模研究中，我们发现了820个扩展与其隐私声明不一致的1,290个流程。更糟糕的是，在360个扩展的仪表盘披露和隐私政策中，我们发现了525对相互矛盾的隐私声明。这些隐私披露与实际数据收集行为之间的差异被视为商店政策的严重违规行为。我们的发现凸显了浏览器扩展隐私披露中的关键问题，这可能会误导甚至对最终用户造成高风险的隐私问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179338/](https://ieeexplore.ieee.org/document/10179338/)
## TeSec: Accurate Server-side Attack Investigation for Web Applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#tesec-accurate-server-side-attack-investigation-for-web-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#tesec-accurate-server-side-attack-investigation-for-web-applications)**
### 作者
* Ruihua Wang, KLISS, TNList, School of Software, Tsinghua University
* Yihao Peng, KLISS, TNList, School of Software, Tsinghua University
* Yilun Sun, KLISS, TNList, School of Software, Tsinghua University
* Xuancheng Zhang, KLISS, TNList, School of Software, Tsinghua University
* Hai Wan, KLISS, TNList, School of Software, Tsinghua University
* Xibin Zhao, KLISS, TNList, School of Software, Tsinghua University
### 摘要
> 网络应用的用户界面（UI）通常是企业和组织遭受网络攻击的入口点。找到入侵者使用的UI元素对于攻击拦截和修复网络应用程序都非常重要。目前针对Web UI的攻击调查方法要么提供粗略的分析结果，要么在高并发场景中性能差，这导致了繁重的手动分析工作。在本文中，我们提出了TeSec，一种用于Web UI应用程序的准确攻击调查方法。TeSec利用了两种类型的相关性。第一种相关性是通过PID/TID和分隔符日志进行分区的注释审计日志构建的，它捕获了审计日志条目和Web请求之间的对应关系。第二种相关性是在系统测试期间建立的Aho-Corasick自动机所建模的，它捕获了请求和UI元素/事件之间的对应关系。利用这两种相关性，TeSec可以准确且自动地从告警中定位UI元素/事件（即告警的根本原因），即使在高并发情况下也能实现。此外，TeSec只需要部署在服务器上，不需要从客户端浏览器收集日志。我们在12个Web应用程序上评估了TeSec。实验结果显示，UI事件/元素与告警之间的匹配准确率高达99.6%以上。每个个体取证分析中，安全分析人员只需要检查不超过2个UI元素。平均响应时间的最大额外开销和审计日志空间开销都很低（分别为4.3%和4.6%）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179402/](https://ieeexplore.ieee.org/document/10179402/)
## RuleKeeper: GDPR-Aware Personal Data Compliance for Web Frameworks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rulekeeper-gdpr-aware-personal-data-compliance-for-web-frameworks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#rulekeeper-gdpr-aware-personal-data-compliance-for-web-frameworks)**
### 作者
* Mafalda Ferreira, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* Tiago Brito, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* José Fragoso Santos, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
* Nuno Santos, INESC-ID / Instituto Superior Técnico, Universidade de Lisboa
### 摘要
> 受到现有法规（如欧盟《通用数据保护条例》）的压力，在线服务必须广告个人数据保护政策，声明收集的个人数据类型和目的，并且必须严格按照用户的同意决策来执行。然而，由于缺乏系统级支持，获得强大的政策执行保证是困难的，这给软件漏洞和漏洞带来了合规性违规的可能性。我们提出了RuleKeeper，一个面向网络开发框架的意识到《通用数据保护条例》（GDPR）的个人数据政策合规系统。目前为MERN框架移植，RuleKeeper允许Web开发人员从中指定GDPR清单来自动生成Web应用的数据保护政策，并通过静态代码分析和运行时访问控制机制透明地强制执行。以横切方式检查GDPR合规性，对应用程序代码的更改很少。我们使用原型实施评估了RuleKeeper与四个真实应用程序。我们的系统可以模拟逼真的GDPR数据保护要求，对Web应用程序带来适度的性能开销，并能检测到GDPR违规漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179395/](https://ieeexplore.ieee.org/document/10179395/)
## Characterizing Everyday Misuse of Smart Home Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#characterizing-everyday-misuse-of-smart-home-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#characterizing-everyday-misuse-of-smart-home-devices)**
### 作者
* Phoebe Moh, University of Maryland
* Pubali Datta, University of Illinois Urbana-Champaign
* Noel Warford, University of Maryland
* Adam Bates, University of Illinois Urbana-Champaign
* Nathan Malkin, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 对物联网（IoT）安全的研究常常侧重于外部和技术娴熟的攻击者所造成的威胁。虽然理解这些最极端情况很重要，但同样重要的是理解智能设备所有者的日常关联对象（如朋友、家人和恋人）对他们造成的最可能的危害风险。在本论文中，我们探讨了智能设备如何被滥用，即未经许可以损害行为使用，这些滥用行为来自设备所有者的日常关联对象。通过初步的特征调查（n = 100），我们广泛了解了参与者所经历或参与的未经许可使用和滥用事件的种类。然后，在一项普遍性调查中（n = 483），我们评估了这些事件在具有代表性的人口中的普遍发生率。我们的研究结果显示，未经许可使用智能设备是普遍存在的（43%的参与者经历过），而滥用行为也很常见（至少有19%的参与者经历过）。然而，高度个体的因素决定了这些未经许可使用事件是否构成滥用行为。通过关注日常滥用行为，本研究揭示了当今智能家居机主面临的最普遍的安全和隐私威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179476/](https://ieeexplore.ieee.org/document/10179476/)
## "It's up to the Consumer to be Smart": Understanding the Security and Privacy Attitudes of Smart Home Users on Reddit.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-up-to-the-consumer-to-be-smart-understanding-the-security-and-privacy-attitudes-of-smart-home-users-on-reddit) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#its-up-to-the-consumer-to-be-smart-understanding-the-security-and-privacy-attitudes-of-smart-home-users-on-reddit)**
### 作者
* Jingjie Li, University of Wisconsin–Madison
* Kaiwen Sun, University of Michigan
* Brittany Skye Huff, University of Wisconsin–Madison
* Anna Marie Bierley, University of Wisconsin–Madison
* Younghyun Kim, University of Wisconsin–Madison
* Florian Schaub, University of Michigan
* Kassem Fawaz, University of Wisconsin–Madison
### 摘要
> 智能家居技术为用户提供了许多好处。然而，它们也带来了复杂的安全和隐私问题，用户在采用过程中往往难以评估和考虑这些问题。为了更好地了解用户关于智能家居安全和隐私的考虑和态度，特别是他们如何逐步形成这些态度，我们对/r/homeautomation网站上的180个与安全和隐私相关的讨论主题中的4,957个评论进行了定性内容分析。我们的分析揭示出用户的安全和隐私态度，表现为关注程度和他们采用保护策略的程度，是由多维考虑因素塑造的。用户的态度会根据采用阶段以及他们对这些因素的认识而发展演变。此外，我们描述了关于安全和隐私风险以及保护措施的在线讨论如何对个人和集体态度发展做出贡献。根据我们的研究结果，我们提出了改进智能家居设计、支持用户态度发展、促进信息交流以及指导未来关于智能家居安全和隐私的研究的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179344/](https://ieeexplore.ieee.org/document/10179344/)
## User Perceptions and Experiences with Smart Home Updates.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#user-perceptions-and-experiences-with-smart-home-updates) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#user-perceptions-and-experiences-with-smart-home-updates)**
### 作者
* Julie M. Haney, National Institute of Standards and Technology, Gaithersburg, MD, USA
* Susanne M. Furman, National Institute of Standards and Technology, Gaithersburg, MD, USA
### 摘要
> 更新可能是消费者在智能家居设备中减轻安全和隐私漏洞的几个工具之一。然而，对智能家居更新用户感知和体验的研究很少。为了填补这一空白，我们对美国412名智能家居用户进行了在线调查，样本在人口多样性方面呈现出一定的代表性。我们发现，用户普遍认为智能家居更新很重要且迫切。然而，更新感知与安全和隐私感知之间的关系不太明确。我们还确定了更新中的问题方面和当前和首选更新模式之间的差距。随后，我们提出了更新机制和界面设计成更易用和理解的方法建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179459/](https://ieeexplore.ieee.org/document/10179459/)
## Design and Evaluation of Inclusive Email Security Indicators for People with Visual Impairments.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#design-and-evaluation-of-inclusive-email-security-indicators-for-people-with-visual-impairments) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#design-and-evaluation-of-inclusive-email-security-indicators-for-people-with-visual-impairments)**
### 作者
* Yaman Yu, University of Illinois at Urbana-Champaign
* Saidivya Ashok, University of Illinois at Urbana-Champaign
* Smirity Kaushik, University of Illinois at Urbana-Champaign
* Yang Wang, University of Illinois at Urbana-Champaign
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> 由于检测和过滤钓鱼邮件的挑战，一些钓鱼邮件仍然不可避免地会进入用户的收件箱。因此，Gmail等电子邮件提供商已经实施了钓鱼警告功能，以帮助用户更好地识别钓鱼企图。现有研究主要关注有视力的用户的钓鱼警告，但人们对有视觉障碍者如何与钓鱼邮件和警告交互的认识仍不够充分。在本文中，我们与41名有视觉障碍的用户进行合作，研究现有警告的有效性，并探索更具包容性的设计（以Gmail警告设计作为比较基准）。我们采取了多管齐下的方法，包括探索性研究（了解用户面临的挑战），用户参与设计和原型制作，以及主要研究（评估设计选择的影响）。我们的结果表明，有视觉障碍的用户经常忽略现有的Gmail警告，因为当前的设计（例如警告位置、使用的HTML标记）与屏幕阅读器用户的阅读习惯不太匹配。警告的不一致性（例如在标准视图和HTML视图之间）也给用户带来了障碍。我们展示了一种包容性设计（结合音频警告、快捷键和警告页面叠加）可以有效增加警告的可通知性。根据我们的结果，我们向电子邮件提供商提出了一些建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179407/](https://ieeexplore.ieee.org/document/10179407/)
## When and Why Do People Want Ad Targeting Explanations? Evidence from a Four-Week, Mixed-Methods Field Study.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#when-and-why-do-people-want-ad-targeting-explanations-evidence-from-a-four-week-mixed-methods-field-study) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#when-and-why-do-people-want-ad-targeting-explanations-evidence-from-a-four-week-mixed-methods-field-study)**
### 作者
* Hao-Ping Hank Lee, Carnegie Mellon University
* Jacob Logas, Georgia Institute of Technology
* Stephanie Yang, Georgia Institute of Technology
* Zhouyu Li, North Carolina State University
* Natã Barbosa, University of Illinois Urbana-Champaign
* Yang Wang, University of Illinois Urbana-Champaign
* Sauvik Das, Carnegie Mellon University
### 摘要
> 很多人对个人数据在在线行为广告（OBA）中的使用表示担忧。提出了广告定向解释作为一种提高透明度以减轻这种担忧的方式。然而，人们何时以及为什么可能需要广告定向解释尚不清楚。缺乏这种洞察力，我们面临着设计无法解决真正问题的解释的风险。为了填补这个差距，我们进行了一项为期四周的综合方法田野研究，参与者为60名，以了解人们何时以及为什么需要针对他们在浏览网页时实际遇到的广告的定向解释。我们发现，在研究期间我们询问参与者关于4,251个广告的问题时，用户希望得到解释的广告约占30％，主观感知他们的个人数据如何收集和共享与用户希望获得广告解释的时间高度相关。通常，用户希望这些解释来确认或否认他们对自己的数据如何收集或广告商的动机的先入之见。我们工作的一个关键结果是，一刀切的广告解释方法很可能无法解决人们对广告定向的生活问题; 反而，需要更个性化的解释。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179452/](https://ieeexplore.ieee.org/document/10179452/)
## SecureCells: A Secure Compartmentalized Architecture.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#securecells-a-secure-compartmentalized-architecture) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#securecells-a-secure-compartmentalized-architecture)**
### 作者
* Atri Bhattacharyya, EcoCloud, EPFL
* Florian Hofhammer, EcoCloud, EPFL
* Yuanlong Li, EcoCloud, EPFL
* Siddharth Gupta, EcoCloud, EPFL
* Andres Sanchez, EcoCloud, EPFL
* Babak Falsafi, EcoCloud, EPFL
* Mathias Payer, EcoCloud, EPFL
### 摘要
> 现代程序是单体的，将来源各异的代码组合在一起，没有隔离，并在网络连接的设备上运行。任何组件中的漏洞可能会危及所有其他组件的代码和数据。隔离将程序分为具有有限策略定义权限的故障域，遵循最小权限原则，防止组件之间发生任意交互。不幸的是，现有的隔离机制面向弱威胁模型，产生高额开销，或者过度适应特定的用例，从而阻碍了它们的普遍采用。当下所需的是一个安全、高性能和灵活的机制，开发人员可以可靠地实现一系列隔离软件。我们提出了SecureCells，一种用于地址空间内隔离的新型架构。SecureCells强制执行每个虚拟内存区域（VMA）的权限，以实现安全且可扩展的访问控制，并引入新的用户空间指令，以硬件强制执行的调用门和零拷贝权限转移，实现安全且快速的隔离切换。SecureCells为调用栈维护和寄存器环境隔离提供了新颖的软件机制。在微基准测试中，SecureCells在5级顺序处理器上只需8个周期切换隔离区，与最先进的技术相比，成本降低一个数量级。因此，SecureCells有助于保护高性能软件，如内存中的键值存储，其开销几乎可以忽略不计，低于3%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179472/](https://ieeexplore.ieee.org/document/10179472/)
## WaVe: a verifiably secure WebAssembly sandboxing runtime.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#wave-a-verifiably-secure-webassembly-sandboxing-runtime) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#wave-a-verifiably-secure-webassembly-sandboxing-runtime)**
### 作者
* Evan Johnson, UC San Diego
* Evan Laufer, Stanford
* Zijie Zhao, UIUC
* Dan Gohman, Fastly Labs
* Shravan Narayan, UC San Diego
* Stefan Savage, UC San Diego
* Deian Stefan, UC San Diego
* Fraser Brown, CMU
### 摘要
> 软件沙箱的优势在于灵活、快速和可移植的隔离；它通过捕捉基于硬件的内存保护的好处，而不需要操作系统的参与。这个优势在WebAssembly（Wasm）中得到了实现，它是一种流行的可移植字节码，其编译器会自动插入运行时检查，以确保数据和控制流受限于单个内存段。实际上，现代编译的Wasm实现已经发展到了这样一个地步：这些检查本身可以被验证，从而将编译器从受信任的计算基础中剔除出去。然而，由此产生的完整性属性仅对严格在Wasm沙箱内执行的代码有效。与管理沙箱并公开用于访问操作系统资源的WebAssembly系统接口（WASI）的运行时系统的任何交互操作都属于此契约之外。由此导致的困境是如何在保持Wasm强大隔离性的同时，允许这些程序与外部世界（即文件系统、网络等）进行交互。本文介绍了一个解决方案，即WaVe，一个验证过的安全运行时系统，实现了WASI。我们机械地验证了与WaVe的交互操作（包括操作系统的副作用），不仅保持了Wasm的内存安全保证，还保持了对主机操作系统存储和网络资源的访问隔离。最后，尽管完全将运行时系统从受信任的计算基础中移除，我们展示了WaVe在性能上与现有的工业（但不安全）Wasm运行时系统相媲美的竞争力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179357/](https://ieeexplore.ieee.org/document/10179357/)
## μSwitch: Fast Kernel Context Isolation with Implicit Context Switches.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#switch-fast-kernel-context-isolation-with-implicit-context-switches) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#switch-fast-kernel-context-isolation-with-implicit-context-switches)**
### 作者
* Dinglan Peng, Purdue University
* Congyu Liu, Purdue University
* Tapti Palit, Purdue University
* Pedro Fonseca, Purdue University
* Anjo Vahldiek-Oberwagner, Intel Labs
* Mona Vij, Intel Labs
### 摘要
> 隔离应用程序组件对于限制敏感数据和代码暴露给不受信任的组件中的漏洞至关重要。基于进程的隔离是实践中使用的事实标准，例如网络浏览器。然而，它会带来显着的性能开销，并且在预期频繁切换隔离域时通常不可行。为解决这个问题，许多基于进程内存隔离技术已经提出，使用了新颖的内核抽象、最新的CPU扩展（例如Intel® MPK）和基于软件的故障隔离（例如WebAssembly）。然而，这些技术对内核资源（例如文件描述符）的隔离不足，或者在访问资源时产生高开销。其他工作在受特权用户空间域中虚拟化内核上下文，但这是临时的、容易出错的，并且只提供有限的内核功能。我们提出了μSwitch，一种高效的内核上下文隔离机制，具有内存保护，可以解决这些限制。我们使用一个受保护的结构，由内核和用户空间共享，用于上下文切换，并提出了隐式上下文切换以通过延迟内核资源切换到下一个系统调用来提高性能。我们将μSWITCH应用于隔离Firefox网络浏览器和HTTP服务器中的库，并将隔离的开销与其他隔离技术相比降低了32.7%至98.4%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179284/](https://ieeexplore.ieee.org/document/10179284/)
## Control Flow and Pointer Integrity Enforcement in a Secure Tagged Architecture.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#control-flow-and-pointer-integrity-enforcement-in-a-secure-tagged-architecture) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#control-flow-and-pointer-integrity-enforcement-in-a-secure-tagged-architecture)**
### 作者
* Ravi Theja Gollapudi, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Gokturk Yuksek, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* David Demicco, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Matthew Cole, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Gaurav Kothari, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Rohit Kulkarni, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Xin Zhang, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Kanad Ghose, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Aravind Prakash, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
* Zerksis Umrigar, Department of Computer Science, State University of New York at Binghamton, Binghamton, New York, USA
### 摘要
> 控制流攻击利用软件漏洞将控制流引导到意外路径，以最终执行攻击代码。本文探讨了使用指令和数据标记作为防止此类控制流攻击手段的一般方法，包括依赖于违反指针完整性的攻击。使用特定类型的窄宽数据标记以及嵌入二进制中的窄宽指令标记，有助于实现所需的安全策略，以防范此类攻击，从而实现了实用的解决方案。将指令标记与其对应的指令近距离放置在缓存行内，消除了对指令标记访问的单独机制的需求。从编译器的分析阶段获得的信息被增强并用于生成指令和数据标记。演示了一个完整的实现，包括修改后的LLVM编译器、修改后的Linux操作系统支持标记以及用于执行CFI、数据指针和代码指针完整性的FPGA实现的CPU硬件原型。通过适度的硬件增强，演示系统上基准应用程序的执行时间显示为基准系统不使用标记的低个位数百分比。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179416/](https://ieeexplore.ieee.org/document/10179416/)
## EC: Embedded Systems Compartmentalization via Intra-Kernel Isolation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ec-embedded-systems-compartmentalization-via-intra-kernel-isolation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ec-embedded-systems-compartmentalization-via-intra-kernel-isolation)**
### 作者
* Arslan Khan, Purdue University
* Dongyan Xu, Purdue University
* Dave Jing Tian, Purdue University
### 摘要
> 嵌入式系统由低功耗微控制器组成，构成了从物联网节点到超级计算机的计算系统。不幸的是，由于低功耗的限制，这些系统的安全性经常被忽视，留下了巨大的攻击面。例如，攻击者入侵用户任务可以访问任何内核数据结构。现有的研究已经应用隔离技术来减少攻击面，但这些系统要么产生很高的运行时开销，要么需要对现有固件进行重大修改。在本文中，我们介绍了一种嵌入式隔离器（EC），这是一个全面且自动化的隔离工具链，用于实时操作系统（RTOSs）和裸机固件。EC提供了嵌入式隔离器编译器（ECC），可以自动将固件划分为不同的隔离区，并使用嵌入式隔离器内核（ECK）强制执行它们之间的内存保护，它是一个经过形式验证的微内核，实现了一种用于隔离固件的新型架构，通过内核内隔离。我们的评估结果显示，EC的速度比目前最先进的系统快1.2倍，并且可以在固件中实现高达96.2％的ROP（返回导向编程）垃圾代码减少。EC为嵌入式系统提供了一种低成本、实用且有效的隔离解决方案，具备内存保护和调试硬件扩展功能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179285/](https://ieeexplore.ieee.org/document/10179285/)
## Low-Cost Privilege Separation with Compile Time Compartmentalization for Embedded Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#low-cost-privilege-separation-with-compile-time-compartmentalization-for-embedded-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#low-cost-privilege-separation-with-compile-time-compartmentalization-for-embedded-systems)**
### 作者
* Arslan Khan, Purdue University
* Dongyan Xu, Purdue University
* Dave Jing Tian, Purdue University
### 摘要
> 嵌入式系统是无处不在的，并在我们周围的各个方面得到应用。这些系统在低功耗微控制器上运行，具有实时约束。为了满足这些约束，开发人员通常会牺牲安全性，通过以相同权限运行整个软件堆栈来达到约束条件。现有的工作利用分隔化来缓解这种情况，但由于需要进行大量的运行时检查以实现系统中不同组件之间的隔离，导致性能开销很高，因此很少被采纳。在本文中，我们提出了一种称为Compartmentalized Real-Time C (CRT-C) 的低成本编译时分隔机制，用于嵌入式系统，在线性地址空间中使用专门的编程语言方言实现特权分离。每种编程方言限制了程序的一部分的编程能力，为程序中的不同组件形式化不同的隔室。CRT-C使用静态分析来识别固件中的各个隔间，并通过执行特定于隔间的策略来实现系统中的最低特权。我们设计并实现了一个新的编译器，将CRT-C编译成可在常见嵌入式系统上运行的分隔化固件。我们使用两个实时操作系统（RTOS）：FreeRTOS和Zephyr对CRT-C进行了评估。我们的评估表明，CRT-C可以为嵌入式系统提供分隔化，以阻止各种攻击，同时产生平均运行时开销为2.63％和内存开销为1.75％。CRT-C为嵌入式系统提供了一种实用的解决方案，既可以对传统应用进行翻新，也可以为新的应用提供安全性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179388/](https://ieeexplore.ieee.org/document/10179388/)
## One Key to Rule Them All: Secure Group Pairing for Heterogeneous IoT Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#one-key-to-rule-them-all-secure-group-pairing-for-heterogeneous-iot-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#one-key-to-rule-them-all-secure-group-pairing-for-heterogeneous-iot-devices)**
### 作者
* Habiba Farrukh, Purdue University
* Muslum Ozgur Ozmen, Purdue University
* Faik Kerem Ors, Purdue University
* Z. Berkay Celik, Purdue University
### 摘要
> 配对方案建立了用于保护物联网设备之间通信的加密密钥。现有的依赖于可信中心实体、人类交互或共享同质化上下文的配对方法容易出现单点故障，可用性有限并需要额外的传感器。最近的研究探索了由具有异构感知模式的设备观察到的事件时间作为去中心化配对的存在证明。然而，这种方法导致了很高的配对时间，并且无法对感知连续物理量的传感器进行配对，并且不支持组配对，使其在许多物联网部署中不可行。在本文中，我们设计和开发了一种名为IoTCupid的安全组配对系统，用于具有异构感知模式的物联网设备，而无需活动用户参与。IoTCupid分为三个阶段运行：(a) 利用一种新的基于窗口的推导技术检测即时和连续传感器感知到的事件，(b) 通过模糊聚类算法对事件进行分组，提取事件之间的时间差，(c) 通过一个分区的组密码身份认证密钥协商方案在具有相同事件时间差的设备之间建立组密钥。我们在智能家居和办公环境中使用11个异构设备评估了IoTCupid，并且证明它可以以最小的配对开销有效地配对所有设备，只需2个组密钥。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179369/](https://ieeexplore.ieee.org/document/10179369/)
## Optimistic Access Control for the Smart Home.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#optimistic-access-control-for-the-smart-home) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#optimistic-access-control-for-the-smart-home)**
### 作者
* Nathan Malkin, University of Maryland
* Alan F. Luo, University of Maryland
* Julio Poveda, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 智能家居用户最担心的隐私问题之一是对家庭成员对设备和彼此数据访问的限制。尽管人们普遍表达了对复杂访问控制政策的偏好，但在实践中，他们往往会选择较不安全的默认设置。作为一种替代方案，本文研究了"乐观访问控制"政策，即允许用户在得到其他家庭成员监督的前提下，无需预先批准即可获取访问和数据。这种解决方案允许用户利用他们已经依赖的人际信任来建立与更复杂的访问控制方法相当的隐私界限，同时保留较不安全策略的便利性。为了评估这个概念，我们进行了一系列的调查，总共有604名参与者，研究了这种方法的可接受性和认知。我们发现一些受访者更喜欢乐观模式相比现有的访问控制方法，并且对乐观访问的兴趣因设备类型和家庭特点而异。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179475/](https://ieeexplore.ieee.org/document/10179475/)
## Protected or Porous: A Comparative Analysis of Threat Detection Capability of IoT Safeguards.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#protected-or-porous-a-comparative-analysis-of-threat-detection-capability-of-iot-safeguards) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#protected-or-porous-a-comparative-analysis-of-threat-detection-capability-of-iot-safeguards)**
### 作者
* Anna Maria Mandalari, University College London
* Hamed Haddadi, Imperial College London
* Daniel J. Dubois, Northeastern University
* David Choffnes, Northeastern University
### 摘要
> 消费者物联网（IoT）设备在家庭中越来越常见，从智能音箱到安全摄像头应有尽有。随着它们的好处而来的是潜在的隐私和安全威胁。为了限制这些威胁，现已出现了许多商业服务（IoT保护措施）。这些保护措施声称可以提供对抗IoT隐私风险和安全威胁的保护。然而，这些保护措施的有效性和相关的隐私风险仍然是一个关键的未解问题。在本文中，我们首次调查了IoT保护措施的威胁检测能力。我们开发并发布了一种自动化保护措施实验方法，以揭示它们对常见安全威胁和隐私风险的反应。我们在一个大型物联网测试平台上进行了数千次自动化实验，使用了流行的商业IoT保护措施。我们的结果表明，这些设备不仅可能无效地防止风险，而且它们的云交互和数据收集操作可能给采用它们的家庭带来隐私风险。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179282/](https://ieeexplore.ieee.org/document/10179282/)
## LazyTAP: On-Demand Data Minimization for Trigger-Action Applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#lazytap-on-demand-data-minimization-for-trigger-action-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#lazytap-on-demand-data-minimization-for-trigger-action-applications)**
### 作者
* Mohammad M. Ahmadpanah, Chalmers University of Technology
* Daniel Hedin, Chalmers University of Technology; Mälardalen University
* Andrei Sabelfeld, Chalmers University of Technology
### 摘要
> 触发-动作平台（TAP）赋予应用程序（应用）连接其他无法连接的设备和服务的能力。目前的TAP，如IFTTT，要求触发服务将大量敏感数据推送到TAP，无论这些数据是否在应用程序中使用，与数据最小化原则相悖。此外，现代TAP的丰富功能，包括支持多个触发服务的IFTTT查询和应用程序的非确定性，已超出以前minTAP等数据最小化方法的范围。本文提出了LazyTAP，一种新的精细粒度按需数据最小化范例。LazyTAP摆脱了粗粒度数据过估计的传统全推送方法。相反，LazyTAP在应用程序执行访问输入数据后按需拉取数据。由于精细粒度，LazyTAP能够自然地推广以支持通过查询的多个触发服务，并且对于应用程序的非确定性行为具有鲁棒性。我们通过利用惰性延迟计算和代理对象，在后台加载必要的远程数据，实现了对第三方应用程序开发人员的无缝支持。我们从正式角度确立了LazyTAP的正确性和最小化性质，涵盖了对IFTTT和minTAP的考量。我们在应用程序基准上实施和评估了LazyTAP，结果显示，LazyTAP平均比IFTTT改善了95%的最小化，比minTAP改善了38%，同时承担可容忍的性能开销。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179425/](https://ieeexplore.ieee.org/document/10179425/)
## Blue's Clues: Practical Discovery of Non-Discoverable Bluetooth Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blues-clues-practical-discovery-of-non-discoverable-bluetooth-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blues-clues-practical-discovery-of-non-discoverable-bluetooth-devices)**
### 作者
* Tyler Tucker, Florida Institute for Cybersecurity Research (FICS)
* Hunter Searle, Florida Institute for Cybersecurity Research (FICS)
* Kevin Butler, Florida Institute for Cybersecurity Research (FICS)
* Patrick Traynor, Florida Institute for Cybersecurity Research (FICS)
### 摘要
> 蓝牙是个人区域网络的首选协议，蓝牙经典标准已经连续使用了20多年。蓝牙设备使自己可被发现以进行通信，但为保护隐私最佳实践是确保设备保持在不可发现模式中。本文演示了通过使设备不可发现来保护设备的无效性。我们介绍了“蓝色线索”攻击，这是第一个直接、非干扰性的方法，可从不可发现模式的目标设备中完全提取永久的、唯一的蓝牙 MAC 标识符。我们还证明了我们可以完全揭示设备功能并检索标识符，其中一些标识符通常包含有关设备所有者的识别信息。我们使用软件定义无线电进行“蓝色线索”攻击，并在自己的设备以及经过机构批准的公共建筑中进行攻击。我们发现，在平均不到10秒的时间内可以唯一识别各种蓝牙设备，受影响的设备范围从智能手机和耳机到汽油泵和保姆摄像头，涵盖了所有版本的蓝牙经典标准。虽然我们提供了一些针对攻击的潜在缓解方法，但“蓝色线索”迫使重新评估过去20多年用于保护设备免受发现的最佳实践。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179358/](https://ieeexplore.ieee.org/document/10179358/)
## DeHiREC: Detecting Hidden Voice Recorders via ADC Electromagnetic Radiation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dehirec-detecting-hidden-voice-recorders-via-adc-electromagnetic-radiation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#dehirec-detecting-hidden-voice-recorders-via-adc-electromagnetic-radiation)**
### 作者
* Ruochen Zhou, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yi-Chao Chen, Shanghai Jiao Tong University; Microsoft Research Asia
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chaohao Li, Ubiquitous System Security Lab (USSLAB), Zhejiang University
### 摘要
> 未经授权的秘密录音对于注重隐私的场景，如机密会议和私人对话，带来了显著的威胁。由于微型化和伪装特性，隐藏式录音机在周围环境中很难被察觉到。本文介绍了DeHiREC，这是第一个可以通过电磁辐射（EMR）检测探测隐藏式离线录音设备的概念验证系统。我们首先对发出的EMR信号的独特模式进行表征，然后定位EMR信号源，即嵌入在混合信号系统芯片（MSoCs）中的模拟到数字转换器（ADC）模块。由于这些非故意的EMR信号可能非常嘈杂和微弱，精确地检测它们可能具有挑战性。为了解决这个挑战，我们首先设计了一种EMR催化方法，以主动激发EMR信号，然后采用自适应折叠算法来提高感测到的EMR的信噪比（SNR）。一旦感测到的EMR变化与我们的主动激发相对应，我们就可以确定存在隐藏式录音设备。我们在13个商用录音机上评估了DeHiREC的性能，包括与其他设备的干扰等各种影响。实验结果表明，在0.2米的距离下，DeHiREC能有效检测到所有13个录音机，并且在总体成功率上达到92.17%，召回率为86.14%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179480/](https://ieeexplore.ieee.org/document/10179480/)
## IPvSeeYou: Exploiting Leaked Identifiers in IPv6 for Street-Level Geolocation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ipvseeyou-exploiting-leaked-identifiers-in-ipv6-for-street-level-geolocation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#ipvseeyou-exploiting-leaked-identifiers-in-ipv6-for-street-level-geolocation)**
### 作者
* Erik C. Rye, University of Maryland
* Robert Beverly, CMAND
### 摘要
> 我们展示了IPvSeeYou这一隐私攻击方法，使得远程和非特权攻击者能够以街道级别的精度对许多住宅IPv6主机和网络进行物理地理定位。我们方法的核心包括：1）远程发现家庭路由器的广域网（WAN）硬件MAC地址；2）将这些MAC地址与已知位置的WiFi BSSID对应起来；3）通过将连接到共同倒数第二主要提供者路由器的设备关联起来，扩大覆盖范围。我们首先通过高速网络探测获得嵌入在IPv6地址中的大量MAC地址。这些MAC地址通过协议栈被泄露，主要代表了住宅路由器的WAN接口，其中很多都是提供WiFi的一体化设备。我们开发了一种技术来统计推断路由器的WAN和WiFi MAC地址之间的映射关系，跨制造商和设备进行数据融合攻击，将WAN MAC地址与在wardriving（地理定位）数据库中可用的WiFi BSSID进行相关联。利用这些关联，我们能够在146个国家和地区的野外中定位超过12百万台路由器的IPv6前缀。选择性验证证实中位数地理定位误差为39米。然后我们利用技术和部署限制，通过对具有共同倒数第二主要提供者路由器的设备进行聚类和关联，将攻击扩展到更大范围的IPv6住宅路由器。尽管我们已将研究结果负责任地通报给了几家制造商和供应商，但部署住宅电缆和DSL路由器的僵化生态系统表明我们的攻击在可预见的未来仍将构成隐私威胁。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179376/](https://ieeexplore.ieee.org/document/10179376/)
## From 5G Sniffing to Harvesting Leakages of Privacy-Preserving Messengers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#from-5g-sniffing-to-harvesting-leakages-of-privacy-preserving-messengers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#from-5g-sniffing-to-harvesting-leakages-of-privacy-preserving-messengers)**
### 作者
* Norbert Ludant, Northeastern University, Boston, USA
* Pieter Robyns, Hasselt University - tUL - EDM Belgian Cyber Command, Hasselt, Belgium
* Guevara Noubir, Northeastern University, Boston, USA
### 摘要
> 我们推出了第一个能够高效嗅探5G控制信道的开源工具5GSniffer，并展示了其对用户隐私进行攻击的潜力。5GSniffer基于我们对5G RAN控制信道的分析，揭示了侧信道泄漏。我们注意到，与LTE相比，解码5G控制信道明显更具挑战性，因为解码所需的部分信息是通过加密通道提供给用户设备的。我们设计了一系列技术，实现了实时控制信道嗅探（比暴力破解快三个数量级）。这使得我们能够获取小区中所有用户的无线网络临时标识符（RNTI），并进行流量分析等操作。为了说明我们嗅探器的潜力，我们对两个以隐私为重点的通讯应用Signal和Telegram进行了分析。我们发现了可以利用隐私泄漏来向目标用户生成隐秘流量的漏洞。当与5GSniffer结合使用时，它能够通过将手机号码与RNTI关联，仅基于手机号码就能隐秘地暴露目标用户在特定位置的存在。它还可以进行目标用户的流量分析。我们评估了这些攻击和我们的嗅探器，并展示了在攻击启动后的30秒内几乎100％的准确性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179353/](https://ieeexplore.ieee.org/document/10179353/)
## Man-in-the-Middle Attacks without Rogue AP: When WPAs Meet ICMP Redirects.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#man-in-the-middle-attacks-without-rogue-ap-when-wpas-meet-icmp-redirects) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#man-in-the-middle-attacks-without-rogue-ap-when-wpas-meet-icmp-redirects)**
### 作者
* Xuewei Feng, Department of Computer Science and Technology & BNRist, Tsinghua University
* Qi Li, Institute for Network Sciences and Cyberspace & BNRist, Tsinghua University; Zhongguancun Lab
* Kun Sun, Department of Information Sciences and Technology & CSIS, George Mason University
* Yuxiang Yang, Department of Computer Science and Technology & BNRist, Tsinghua University
* Ke Xu, Department of Computer Science and Technology & BNRist, Tsinghua University; Zhongguancun Lab
### 摘要
> 现代Wi-Fi网络通常通过安全机制（如WPA、WPA2或WPA3）进行保护，因此攻击者（恶意接入者）很难作为中间人（MITM）劫持其他接入者的流量。在传统的恶意双子星攻击中，攻击者可以部署一个虚假的无线接入点（AP）来劫持受害者接入者的流量（如窃取凭据）。在本文中，我们揭示了一种新的MITM攻击方式，可以通过伪造合法AP向受害者接入者发送伪造的ICMP重定向消息，从而允许攻击者悄悄地劫持受害者接入者的流量，而无需部署任何虚假的AP。核心思想是利用WPAs和ICMP协议之间的跨层交互漏洞，完全规避了WPAs强制执行的链路层安全机制。我们解决了成功发动攻击的两个条件。首先，当攻击者伪造合法AP来制作ICMP重定向消息时，合法AP无法识别和过滤掉这些伪造的ICMP重定向消息。我们揭示了AP路由器中网络处理单元（NPU）的一个新漏洞（CVE-2022-25667），该漏洞限制了AP路由器阻止虚假ICMP错误消息通过路由器的能力。我们测试了来自10个知名AP供应商的55个热门无线路由器，由于这个漏洞，这些路由器中没有一个能够阻止伪造的ICMP重定向消息。其次，我们开发了一个新的方法来确保伪造的ICMP重定向消息可以避开受害者接入者的合法性检查，并污染其路由表。我们对122个真实世界的Wi-Fi网络进行了广泛的测量研究，涵盖了所有普遍的Wi-Fi安全模式。实验结果显示，122个中有109个（89%）评估的Wi-Fi网络容易受到我们的攻击。除了向NPU制造商和AP供应商通报漏洞外，我们还开发了两种对抗措施来限制已经发现的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179441/](https://ieeexplore.ieee.org/document/10179441/)
## Mew: Enabling Large-Scale and Dynamic Link-Flooding Defenses on Programmable Switches.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mew-enabling-large-scale-and-dynamic-link-flooding-defenses-on-programmable-switches) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#mew-enabling-large-scale-and-dynamic-link-flooding-defenses-on-programmable-switches)**
### 作者
* Huancheng Zhou, SUCCESS Lab, Texas A&M University
* Sungmin Hong, SUCCESS Lab, Texas A&M University
* Yangyang Liu, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Weichao Li, Peng Cheng Laboratory
* Guofei Gu, SUCCESS Lab, Texas A&M University
### 摘要
> 链路淹没攻击（Link-flooding attacks，LFAs）可以切断对特定服务器目标的互联网连接，并且很难进行缓解，因为攻击者使用看起来正常且低速的流量，并且可以动态调整攻击策略。传统的集中式防御系统无法本地和高效地抑制恶意流量。尽管新兴的可编程交换机为将防御系统靠近目标链路提供了机会，但由于其有限的资源和不支持运行时重新配置，其在链路淹没防御方面的使用受到了限制。我们提出了Mew <sup>1</sup>，一种资源高效且能够运行时适应的链路淹没防御系统。Mew能够在大量流量集中于一条链路上或者攻击策略迅速变化的情况下对各种链路淹没攻击进行反击。我们设计了分布式存储机制和无损状态迁移机制，以减少可编程网络存储瓶颈。我们开发了合作防御API，支持多粒度共同检测和共同缓解，避免了过多的开销。Mew的动态防御机制可以不断分析网络状况并激活相应的防御，而无需重新启动设备或中断其他运行功能。我们使用真实世界的可编程交换机在五个城市开发了Mew的原型。我们的实验证明，这个真实世界的原型能够有效抵御大规模和动态的链路淹没攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179404/](https://ieeexplore.ieee.org/document/10179404/)
## PCSPOOF: Compromising the Safety of Time-Triggered Ethernet.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pcspoof-compromising-the-safety-of-time-triggered-ethernet) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pcspoof-compromising-the-safety-of-time-triggered-ethernet)**
### 作者
* Andrew Loveless, University of Michigan; NASA Johnson Space Center
* Linh Thi Xuan Phan, University of Pennsylvania
* Ronald Dreslinski, University of Michigan
* Baris Kasikci, University of Michigan
### 摘要
> 设计师们越来越多地在嵌入式系统中使用混合关键性网络以减小尺寸、重量、功耗和成本。这些技术中可能最成功的是时间触发以太网（TTE），它允许关键时间触发（TT）流量和非关键尽力而为（BE）流量共享相同的交换机和布线。TTE的一个关键方面是系统的TT部分与BE部分相隔离，因此BE设备无法干扰TTE设备的运行。这种隔离允许设计师们：（1）使用不被信任但成本较低的BE硬件，（2）降低BE的安全要求，（3）在安全审查和认证过程中忽略BE设备。我们提出了PCSPOOF，这是第一个打破TTE隔离保证的攻击。PCSPOOF基于两个关键观察。首先，BE设备有可能推断出关于网络的TT部分的私密信息，这些信息可以用于制造恶意的同步消息。其次，通过在以太网电缆上向TTE交换机注入电噪声，BE设备可以欺骗交换机将这些恶意同步消息发送给其他TTE设备。我们的评估显示，成功攻击可能仅需几秒钟的时间，并且每次成功攻击可以导致TTE设备失去同步长达一秒并丢失数十个TT消息，这两者都可能导致关键系统如飞机或汽车发生故障。我们还展示了在模拟的太空飞行任务中，PCSPOOF导致了威胁安全和任务成功的失控操作。我们向使用TTE的航空航天公司披露了PCSPOOF，并且一些公司正在根据本文实施对策措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179318/](https://ieeexplore.ieee.org/document/10179318/)
## BLEDiff: Scalable and Property-Agnostic Noncompliance Checking for BLE Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blediff-scalable-and-property-agnostic-noncompliance-checking-for-ble-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blediff-scalable-and-property-agnostic-noncompliance-checking-for-ble-implementations)**
### 作者
* Imtiaz Karim, Purdue University
* Abdullah Al Ishtiaq, Pennsylvania State University
* Syed Rafiul Hussain, Pennsylvania State University
* Elisa Bertino, Purdue University
### 摘要
> 在这项工作中，我们开发了一种自动化、可扩展的、属性不相关的、黑盒子的协议不合规检查框架BLEDiff，可以分析和揭示蓝牙低功耗（BLE）协议实现中的不合规行为。为了克服从庞大而复杂的BLE规范中提取BLE协议参考行为抽象和安全属性所需的巨大手动工作量，BLEDiff利用了访问多个BLE设备的便利，并利用差分测试的概念自动识别异常的不合规行为。在这方面，BLEDiff首先使用主动自动机学习方法自动提取BLE实现的协议FSM。为了改进针对大型复杂BLE协议的主动自动机学习的可扩展性，BLEDiff探索了使用分而治之方法的想法。BLEDiff将BLE协议基本上分为多个子协议，识别它们之间的依赖关系并分别提取每个子协议的FSM，最后将它们组合起来创建大型协议的FSM。然后这些FSM会进行配对测试，自动识别出不同的偏差行为。我们使用25种不同的商用设备对BLEDiff进行评估，并证明它可以揭示13种不同的异常行为，其中包括10种可利用的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179330/](https://ieeexplore.ieee.org/document/10179330/)
## ViDeZZo: Dependency-aware Virtual Device Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#videzzo-dependency-aware-virtual-device-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#videzzo-dependency-aware-virtual-device-fuzzing)**
### 作者
* Qiang Liu, Zhejiang University; EPFL
* Flavio Toffalini, EPFL
* Yajin Zhou, Zhejiang University
* Mathias Payer, EPFL
### 摘要
> 一个虚拟机通过虚拟设备消息与其宿主环境交互，例如I/O操作。通过发出精心设计的消息，攻击者可以利用虚拟设备中的漏洞来逃离虚拟机，获取宿主访问权限。虽然已经发现了数百个虚拟设备中的漏洞，但基于覆盖率的虚拟设备模糊测试器几乎不考虑消息内部的依赖关系（一个虚拟设备消息中的一个字段可能依赖于另一个字段）和消息之间的依赖关系（一个消息可能依赖于之前发出的消息），因此导致测试规模或效率有限。ViDeZZo是我们针对虚拟设备的新型依赖感知模糊测试框架，通过使用轻量级语法对消息的内部依赖进行注释，并通过新的变异规则自学习消息之间的依赖关系，克服了现有虚拟设备模糊测试器的局限性。具体而言，ViDeZZo注释消息之间的依赖关系，并应用三类消息变异器。这种方法避免了繁重的手动分析规范的工作，并通过满足依赖关系加快了慢速探索，从而实现了可扩展和高效的模糊测试器，提高了对虚拟设备中漏洞的发现。在我们的评估中，ViDeZZo覆盖了两个虚拟化程序、四个体系结构、五个设备类别和28个虚拟设备，并更快地达到了竞争性的覆盖率。此外，ViDeZZo成功地发现了24个已知漏洞和28个新的漏洞，涵盖了各种漏洞类型。我们正在积极与社区互动，已经有7个我们提交的补丁被接受。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179354/](https://ieeexplore.ieee.org/document/10179354/)
## DevFuzz: Automatic Device Model-Guided Device Driver Fuzzing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#devfuzz-automatic-device-model-guided-device-driver-fuzzing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#devfuzz-automatic-device-model-guided-device-driver-fuzzing)**
### 作者
* Yilun Wu, Stony Brook University
* Tong Zhang, Samsung Electronics
* Changhee Jung, Purdue University
* Dongyoon Lee, Stony Brook University
### 摘要
> 设备驱动程序的安全性对整个操作系统的可靠性至关重要。然而，验证设备驱动程序是否能够正确处理来自硬件设备的潜在恶意输入仍然是一个非常具有挑战性的问题。不幸的是，现有的基于符号执行的解决方案往往不能扩展，而模糊测试解决方案需要真实设备或手动设备模型，导致许多设备驱动程序未经充分测试且存在安全隐患。本文提出了DevFuzz，一种新的基于模型引导的设备驱动程序模糊测试框架，它不需要物理设备。DevFuzz利用符号执行自动生成探测模型，以引导模糊测试器正确初始化被测试的设备驱动程序。DevFuzz还利用静态和动态程序分析构建MMIO、PIO和DMA设备模型，以进一步提高模糊测试的效果。DevFuzz成功测试了来自不同操作系统（Linux、FreeBSD和Windows）的各种总线类型（PCI、USB、RapidIO、I2C）的191个设备驱动程序，并检测到了72个漏洞，其中41个已经修补并合并到了主线版本中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179293/](https://ieeexplore.ieee.org/document/10179293/)
## SyzDescribe: Principled, Automated, Static Generation of Syscall Descriptions for Kernel Drivers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#syzdescribe-principled-automated-static-generation-of-syscall-descriptions-for-kernel-drivers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#syzdescribe-principled-automated-static-generation-of-syscall-descriptions-for-kernel-drivers)**
### 作者
* Yu Hao, University of California, Riverside
* Guoren Li, University of California, Riverside
* Xiaochen Zou, University of California, Riverside
* Weiteng Chen, University of California, Riverside
* Shitong Zhu, University of California, Riverside
* Zhiyun Qian, University of California, Riverside
* Ardalan Amiri Sani, University of California, Irvine
### 摘要
> 近年来，对操作系统内核进行模糊测试已经取得了显著成效。例如，自2017年以来，syzkaller在Linux内核中成功发现了数千个漏洞。syzkaller的一个必要组成部分是一系列系统调用描述，通常由人工专家提供。然而，据我们所知，目前的系统调用描述主要是手动编写的，这既耗时又容易出错。尤其考虑到有许多内核驱动程序（适用于新硬件设备等）在不断开发和演化中，这更具挑战性。在本文中，我们提出了一种有原则的解决方案，用于为Linux内核驱动程序生成系统调用描述。在其核心部分，我们总结和建模了来自核心内核与驱动程序之间的“合约”中提取的关键不变量或编程约定。这使我们能够以编程方式理解内核驱动程序的初始化方式以及其关联接口的构造方式。有了这个洞察力，我们开发了一个名为SyzDescribe的工具解决方案，并对上百个内核驱动程序进行了测试。我们展示了SyzDescribe生成的系统调用描述与手动编写的描述相竞争，并且比之前的工作（即DIFUZE和KSG）要好得多。最后，我们分析了我们的描述与事实之间的差距，并指出了未来的改进机会。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179298/](https://ieeexplore.ieee.org/document/10179298/)
## QueryX: Symbolic Query on Decompiled Code for Finding Bugs in COTS Binaries.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#queryx-symbolic-query-on-decompiled-code-for-finding-bugs-in-cots-binaries) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#queryx-symbolic-query-on-decompiled-code-for-finding-bugs-in-cots-binaries)**
### 作者
* HyungSeok Han, Theori Inc.; KAIST
* JeongOh Kyea, KAIST
* Yonghwi Jin, KAIST
* Jinoh Kang, KAIST
* Brian Pak, KAIST
* Insu Yun, Theori Inc.
### 摘要
> 可扩展的静态检查工具，如Sys和CodeQL，已成功发现源代码中的错误。这些工具允许分析员编写特定于应用程序的规则，称为查询。这些查询可以利用分析员的领域知识，从而使分析更准确和可扩展。然而，大多数这些工具不适用于仅限二进制的分析。其中一个例外是joern，它将二进制代码转换为反编译代码，并将反编译代码输入普通的C代码分析器。然而，这种方法对于符号分析来说不够精确，因为它忽略了反编译代码的独特特征。虽然二进制分析平台（如angr）支持符号分析，但分析员必须了解它们的中间表示（IR），尽管他们大多数时间都在使用反编译代码。在本文中，我们提出了一种称为无畏符号分析的精确可扩展符号分析方法，它使用直观的查询来处理二进制代码，并在QueryX中实现。为了使查询直观，QueryX允许分析员在反编译代码之上编写查询，而不是IR。特别是，QueryX支持对反编译代码的回调，分析员可以利用这些回调控制符号分析以发现代码中的错误。为了进行精确的分析，我们将反编译代码转换为名为DNR的IR，并在DNR上执行符号分析，同时考虑反编译代码的特征。值得注意的是，DNR仅在内部使用，使得分析员可以编写查询，而不必使用DNR。为了可扩展性，QueryX使用回调自动缩减控制流图，并根据查询中指定的回调之间的顺序依赖关系执行。我们将QueryX应用于Windows内核、Windows系统服务和一种汽车二进制文件。结果发现了15个独特的错误，包括10个CVE，从Microsoft的漏洞赏金计划中赚取了18万美元。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179314/](https://ieeexplore.ieee.org/document/10179314/)
## Pyfet: Forensically Equivalent Transformation for Python Binary Decompilation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pyfet-forensically-equivalent-transformation-for-python-binary-decompilation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#pyfet-forensically-equivalent-transformation-for-python-binary-decompilation)**
### 作者
* Ali Ahad, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Chijung Jung, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
* Ammar Askar, School of Computer Science, Georgia Institute of Technology, Atlanta, GA, USA
* Doowon Kim, Department of Electrical Engineering and Computer Science, University of Tennessee, Knoxville, TN, USA
* Taesoo Kim, School of Computer Science, Georgia Institute of Technology, Atlanta, GA, USA
* Yonghwi Kwon, Department of Computer Science, University of Virginia, Charlottesville, VA, USA
### 摘要
> 反编译是法证分析中至关重要的能力，有助于分析未知的二进制文件。最近Python恶意软件的增加引起了对Python反编译器的关注，旨在从Python二进制文件中获取源代码表示。然而，Python反编译器在处理各种二进制文件时存在问题，限制了它们在法证分析中的能力。本文提出了一种新颖的解决方案，将导致反编译错误的Python二进制文件转化为可反编译的二进制文件。我们的核心思想是通过将输入二进制文件中造成错误的代码块转化为另一种形式来解决反编译错误。我们的方法的核心是法证等效转换（FET）的概念，它允许在法证分析的背景下进行非语义保留转换。我们仔细定义了FET，以最小化它们不良后果的同时修复各种难以通过保留 exact semantics（准确的语义）来解决的错误指令。我们使用17,117个真实世界的Python恶意软件样本对我们方法的原型进行评估，这些样本在五个常用的反编译器中引起了反编译错误。它成功地识别并修复了77,022个错误。我们的方法还处理反分析技术，包括操作码重映射，并帮助将Python 3.9二进制文件迁移到3.8二进制文件。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179370/](https://ieeexplore.ieee.org/document/10179370/)
## Adaptive Risk-Limiting Comparison Audits.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#adaptive-risk-limiting-comparison-audits) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#adaptive-risk-limiting-comparison-audits)**
### 作者
* Benjamin Fuller, University of Connecticut – Voting Technology Research Center
* Abigail Harrison, University of Connecticut – Voting Technology Research Center
* Alexander Russell, University of Connecticut – Voting Technology Research Center
### 摘要
> 风险限制审计（RLA）是一种严格的统计程序，旨在检测无效的选举结果。RLA通过检查选举期间投票的纸质选票来统计评估选票确定的获胜者与计算报告的获胜者之间的分歧可能性。RLA的设计必须在风险与效率之间取得平衡：“风险”是指在出现分歧时，审计无法检测到这种分歧的机会的界限；“效率”是指进行审计所需的总努力。最高效的方法是以检查选票数量为指标的“选票比较”。然而，选票比较需要对每张投票选票的内容进行（不可信任的）声明，而不是简单的计票总数。这个“投票记录表”（CVR）然后与选票进行核查以确保一致。在许多实际情况下，生成合适的CVR的成本超过了进行审计的成本，这阻碍了这些样本高效技术的广泛采用。我们介绍了一种新的RLA程序：自适应选票比较审计。在这种审计中，不会产生全局CVR；相反，迭代执行三个阶段的程序：1）选择一个批次，2）为该批次生成CVR，3）从批次中随机抽取一张选票，由审计员进行检查，并与CVR进行比较。我们证明这样的审计可以在生成的CVR的一部分的情况下达到与标准比较审计相当的风险。我们提出了三个主要贡献：(1) 为RLA引入了一个形式的对抗模型；(2) 定义和分析了具有严格风险限制的自适应审计程序，并对典型审计中产生的偶然错误进行了相关性分析；(3) 对效率进行了分析。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179424/](https://ieeexplore.ieee.org/document/10179424/)
## Blue Is the New Black (Market): Privacy Leaks and Re-Victimization from Police-Auctioned Cellphones.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blue-is-the-new-black-market-privacy-leaks-and-re-victimization-from-police-auctioned-cellphones) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#blue-is-the-new-black-market-privacy-leaks-and-re-victimization-from-police-auctioned-cellphones)**
### 作者
* Richard Roberts, University of Maryland
* Julio Poveda, University of Maryland
* Raley Roberts, University of Maryland
* Dave Levin, University of Maryland
### 摘要
> 在美国，如果警方收到的物品无人认领，通常会通过拍卖出售。这包括通过民事财产没收程序获得的手机，被盗的手机，以及被交给失物招领处的手机。成千上万个美国警察局与PropertyRoom网站合作，将他们的物品进行拍卖。在几个月的时间里，我们从PropertyRoom购买了228部手机，以确定它们是否包含个人信息。我们的研究结果显示，即使对于一个没有取证专业知识的“低成本”对手来说，大量敏感的个人信息仍然可以轻松获取：我们购买的手机中，21.5%完全没有锁定，另外4.8%使用了前40个最常见的密码和模式，还有一部手机上有一张贴着PIN的便签。我们分析了能够访问的61部手机上的内容，发现了关于手机的先前拥有者的敏感信息，以及他们的个人联系人的信息，而且在某些情况下还包括这些人所犯罪行的受害者的信息。此外，我们分析了大约两年时间的PropertyRoom手机拍卖记录，发现了多个拍卖物品照片中的身份信息，包括贴有PIN的便签、所有者的姓名和电话号码，以及显示手机获取方式和获得者姓名的证据贴纸。我们的研究表明，警察程序和手机拍卖可能是个人信息泄露和再次受害化的重要来源。我们希望我们的研究能够呼吁制定新政策，要么禁止出售包含用户信息的计算设备，要么至少要求以美国联邦政府已采用的方式擦除手机数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179348/](https://ieeexplore.ieee.org/document/10179348/)
## No Privacy in the Electronics Repair Industry.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#no-privacy-in-the-electronics-repair-industry) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#no-privacy-in-the-electronics-repair-industry)**
### 作者
* Jason Ceci, University of Guelph
* Jonah Stegman, University of Guelph
* Hassan Khan, University of Guelph
### 摘要
> 电子设备维修和服务提供商为北美地区的计算设备所有者提供一系列服务，从软件安装到硬件维修。设备所有者将设备和访问凭据交给技术人员，这导致了对个人数据的隐私担忧。我们进行了一项全面的四部分研究，来衡量电子设备维修行业的隐私状况。首先，在与18个服务提供商进行的实地研究中，我们发现大多数服务提供商都没有任何隐私政策或控制措施，无法保护设备所有者的个人数据免受技术人员的窥视。其次，我们向16个服务提供商提交故意设置的设备进行维修，并收集了技术人员普遍侵犯隐私的数据，包括窥视个人数据、复制设备上的数据以及清除窥探活动的痕迹。第三，我们进行了一项在线调查（n=112），以收集顾客在维修设备时的经历数据。第四，我们邀请了调查回应者的一个子集（n=30）进行半结构化访谈，以深入了解他们的经历，并找出技术人员侵犯隐私问题的潜在解决方案。我们根据研究结果讨论了可能的控制和各利益相关方和监管机构应采取的行动，以改善维修行业的隐私状况。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179413/](https://ieeexplore.ieee.org/document/10179413/)
## How IoT Re-using Threatens Your Sensitive Data: Exploring the User-Data Disposal in Used IoT Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#how-iot-re-using-threatens-your-sensitive-data-exploring-the-user-data-disposal-in-used-iot-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#how-iot-re-using-threatens-your-sensitive-data-exploring-the-user-data-disposal-in-used-iot-devices)**
### 作者
* Peiyu Liu, Zhejiang University; NGICS Platform, Zhejiang University
* Shouling Ji, Zhejiang University
* Lirong Fu, Zhejiang University
* Kangjie Lu, University of Minnesota
* Xuhong Zhang, Zhejiang University
* Jingchang Qin, Zhejiang University
* Wenhai Wang, Zhejiang University; NGICS Platform, Zhejiang University
* Wenzhi Chen, Zhejiang University
### 摘要
> 随着物联网（IoT）技术的快速发展和用户需求的增加，现在物联网设备的再利用变得越来越普遍。例如，在Craigslist上有超过30万个二手物联网设备在出售。在物联网设备再利用的过程中，这些设备中存储的敏感数据（如凭证和生物特征）可能面临泄露的风险，如果用户未能正确处理这些数据。因此，一个重要的安全问题被提出：用户是否（或能否）正确处理二手物联网设备中的敏感数据？据我们所知，这仍然是一个未经探索的问题，需要进行系统的研究。在本文中，我们对二手物联网设备中用户数据处理进行了首次深入调查。我们的调查采用多种研究方法来探讨用户数据泄露的现状和根本原因。首先，我们进行用户调研，调查用户对数据处理的意识和理解。然后，我们对4749个物联网固件图像进行了大规模分析，以研究用户数据收集情况。最后，我们对33个物联网设备进行了全面的实证评估，以研究现有数据处理方法的有效性。通过系统的调查，我们发现物联网设备收集的敏感数据比用户预期的要多。具体而言，我们在测试的固件中检测到了121,984个敏感数据收集。此外，用户通常无法或甚至不能正确处理敏感数据。更糟糕的是，由于存储芯片的固有特性，13.2%的调查固件执行了“浅层”删除，这可能允许对手在数据处理后获取敏感数据。考虑到大规模的物联网设备再利用，这种泄露将造成广泛的影响。我们已将我们的研究结果报告给世界领先的公司。我们希望我们的发现能引起人们对物联网设备中用户数据处理失败的重视，并促进保护用户在物联网设备中的敏感数据。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179294/](https://ieeexplore.ieee.org/document/10179294/)
## Privacy Leakage via Unrestricted Motion-Position Sensors in the Age of Virtual Reality: A Study of Snooping Typed Input on Virtual Keyboards.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#privacy-leakage-via-unrestricted-motion-position-sensors-in-the-age-of-virtual-reality-a-study-of-snooping-typed-input-on-virtual-keyboards) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#privacy-leakage-via-unrestricted-motion-position-sensors-in-the-age-of-virtual-reality-a-study-of-snooping-typed-input-on-virtual-keyboards)**
### 作者
* Yi Wu, University of Tennessee, Knoxville, TN, USA
* Cong Shi, New Jersey Institute of Technology, Newark, NJ, USA
* Tianfang Zhang, Rutgers University, New Brunswick, NJ, USA
* Payton Walker, Texas A&M University, College Station, Texas, USA
* Jian Liu, University of Tennessee, Knoxville, TN, USA
* Nitesh Saxena, Texas A&M University, College Station, Texas, USA
* Yingying Chen, Rutgers University, New Brunswick, NJ, USA
### 摘要
> 虚拟现实（VR）已在众多领域中获得了普及，包括游戏、社交互动、购物和教育。本文中，我们进行了一项全面研究，以评估VR中嵌入的传感器的可信度，这些传感器嵌入了各种形式的敏感数据，可能会危及用户的隐私。我们发现访问VR SDKs / APIs（如OpenVR、Oculus Platform和WebXR）上的大多数内置传感器（例如运动、位置和按钮传感器）不需要安全权限，从而为对手窃取用户隐私提供了一个巨大的攻击面。我们通过开发恶意软件程序和恶意网站来验证这个漏洞，并在按键监听的情况下专门探索它在多大程度上暴露了用户的信息。为了检验其在实践中的实际威胁，所考虑的攻击模型中的对手不拥有用户的任何标记数据，也不了解用户的VR设置。涉及两个主流VR系统和四个具有不同打字机制的键盘的大量实验证实，我们的攻击概念证明可以以超过89.7%的准确率识别用户的虚拟输入。如果允许三次尝试，攻击可以以高达84.9%的识别准确率恢复用户的密码，并对段落推断实现平均87.1%的词识别率。我们希望这项研究能帮助社区意识到当前VR系统传感器管理中的漏洞，并为未来设计更全面和受限制的传感器访问控制机制提供见解。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179301/](https://ieeexplore.ieee.org/document/10179301/)
## Uncovering User Interactions on Smartphones via Contactless Wireless Charging Side Channels.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#uncovering-user-interactions-on-smartphones-via-contactless-wireless-charging-side-channels) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#uncovering-user-interactions-on-smartphones-via-contactless-wireless-charging-side-channels)**
### 作者
* Tao Ni, City University of Hong Kong
* Xiaokuan Zhang, George Mason University
* Chaoshun Zuo, The Ohio State University
* Jianfeng Li, The Hong Kong Polytechnic University
* Zhenyu Yan, The Chinese University of Hong Kong
* Wubing Wang, DBAPPSecurity Co., Ltd
* Weitao Xu, City University of Hong Kong
* Xiapu Luo, The Hong Kong Polytechnic University
* Qingchuan Zhao, City University of Hong Kong
### 摘要
> 如今，越来越多的智能手机支持无线充电技术，利用电磁感应将功率从无线充电器传输到充电中的智能手机。本文报告了一种新的无触点和上下文感知的无线充电侧信道攻击，该攻击捕获了在无线充电过程中产生的两种物理现象（即线圈嗡鸣和磁场扰动）并进一步推断出充电智能手机上的用户交互。我们设计并实现了一个三阶段攻击框架，名为WISERS，以展示这种新侧信道的实用性。WISERS首先捕获无线充电器发出的线圈嗡鸣和磁场扰动，然后推断出界面之间的切换（例如从主屏幕切换到应用界面）和界面内的活动（例如应用内的键盘输入），以构建用户交互背景，并进一步揭示敏感信息。我们对流行智能手机和商业化的无线充电器进行了广泛的WISERS效果评估。评估结果表明，WISERS可以在推断敏感信息方面达到90.4%以上的准确率，例如解锁屏幕密码和应用程序启动。此外，我们的研究还显示WISERS对一系列影响因素具有抵抗力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179322/](https://ieeexplore.ieee.org/document/10179322/)
## MagBackdoor: Beware of Your Loudspeaker as A Backdoor For Magnetic Injection Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#magbackdoor-beware-of-your-loudspeaker-as-a-backdoor-for-magnetic-injection-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#magbackdoor-beware-of-your-loudspeaker-as-a-backdoor-for-magnetic-injection-attacks)**
### 作者
* Tiantian Liu, Zhejiang University, Hangzhou, China
* Feng Lin, Zhejiang University, Hangzhou, China
* Zhangsen Wang, Zhejiang University, Hangzhou, China
* Chao Wang, Zhejiang University, Hangzhou, China
* Zhongjie Ba, Zhejiang University, Hangzhou, China
* Li Lu, Zhejiang University, Hangzhou, China
* Wenyao Xu, University at Buffalo, Buffalo, New York, USA
* Kui Ren, Zhejiang University, Hangzhou, China
### 摘要
> 一个包含扬声器和麦克风的音频系统是语音启用设备的基本硬件，能够实现与移动应用和智能家居的语音交互。本文介绍了MagBackdoor，这是第一个通过音频系统的扬声器后门注入恶意指令的磁场攻击，威胁与其相关的语音交互系统。MagBackdoor主要关注扬声器的磁场威胁，并以隐蔽的方式操纵其声音产生过程。由于内部音频系统的紧密排列，麦克风必然会捕捉到被攻击扬声器产生的恶意声音。为了验证MagBackdoor的可行性，我们进行了全面的模拟和实验。本研究进一步模拟了外部磁场如何激发扬声器的声音产生机制，为MagBackdoor提供了理论指导。为了实现在现实世界场景中的隐蔽磁场攻击，我们自制了一个原型，可以通过声音指令调制磁场。我们实现了MagBackdoor，并在包括16部智能手机、四台笔记本电脑、两台平板电脑和三个智能音箱的各种智能设备上进行了评估，达到了平均95%的注入成功率，并具有高质量的注入声学信号。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179364/](https://ieeexplore.ieee.org/document/10179364/)
## Private Eye: On the Limits of Textual Screen Peeking via Eyeglass Reflections in Video Conferencing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-eye-on-the-limits-of-textual-screen-peeking-via-eyeglass-reflections-in-video-conferencing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#private-eye-on-the-limits-of-textual-screen-peeking-via-eyeglass-reflections-in-video-conferencing)**
### 作者
* Yan Long, Electrical Engineering and Computer Science, University of Michigan, Ann Arbor, USA
* Chen Yan, College of Electrical Engineering, Zhejiang University, Hangzhou, China
* Shilin Xiao, College of Electrical Engineering, Zhejiang University, Hangzhou, China
* Shivan Prasad, Electrical Engineering and Computer Science, University of Michigan, Ann Arbor, USA
* Wenyuan Xu, College of Electrical Engineering, Zhejiang University, Hangzhou, China
* Kevin Fu, Electrical Engineering and Computer Science, University of Michigan, Ann Arbor, USA
### 摘要
> 在COVID-19疫情引起面对面会议和电话通话转变为视像会议的情况下，个人视频会议已成为一种新的常态。由于眼镜和其他反光物品无意中暴露了部分屏幕内容，视频会议泄露了参与者的屏幕信息。本研究利用数学建模和人体实验，探讨了新兴网络摄像头可能通过捕捉到的眼镜反射所折射的可识别文本和图形信息的程度。我们的工作的主要目标是测量、计算和预测网络摄像头技术未来发展中的可识别性因素、限制和阈值。我们的工作探讨和描述了基于光学攻击的可行威胁模型，利用多帧超分辨率技术对视频帧序列进行处理。我们的模型和实验结果在受控实验室环境中表明，使用720p摄像头可以重建和识别高度仅为10毫米的屏幕文字，并达到超过75%的准确率。我们进一步将这个威胁模型应用于具有不同攻击者能力的网络文本内容，以找到文本变得可识别的阈值。我们对20名参与者进行的用户研究表明，现今的720p摄像头已足够让对手重建在大字体网站上的文本内容。我们的模型还显示，朝着4K摄像头的发展将使得在流行网站上重建大多数页眉文本成为可能。除了文本目标，我们进行了一个案例研究，使用720p摄像头对Alexa前100个网站的封闭数据集进行识别，结果显示即使不使用机器学习模型，最高识别准确率为94%。我们的研究提出了近期的缓解方法，包括用户使用软件原型来模糊视频流中的眼镜区域。对于可能的长期防御，我们提倡一个个体反射测试程序来评估各种设置下的威胁，并强调在涉及隐私的情境中遵循最小特权原则的重要性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179423/](https://ieeexplore.ieee.org/document/10179423/)
## Low-effort VR Headset User Authentication Using Head-reverberated Sounds with Replay Resistance.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#low-effort-vr-headset-user-authentication-using-head-reverberated-sounds-with-replay-resistance) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2023].md#low-effort-vr-headset-user-authentication-using-head-reverberated-sounds-with-replay-resistance)**
### 作者
* Ruxin Wang, School of Electrical Engineering and Computer Science, Louisiana State University, Baton Rouge, LA, USA
* Long Huang, School of Electrical Engineering and Computer Science, Louisiana State University, Baton Rouge, LA, USA
* Chen Wang, School of Electrical Engineering and Computer Science, Louisiana State University, Baton Rouge, LA, USA
### 摘要
> 虚拟现实（VR）应用越来越普遍，但有效地验证VR设备用户以授予个人访问权限仍然是一个挑战。现有的VR认证方法需要用户使用控制器输入PIN码或绘制图形密码。尽管输入是在虚拟空间中进行的，但附近的其他人可以观察到，并且存在严重的安全问题。此外，空中手部动作或依靠手持控制器进行认证需要用户主动参与，时间效率低下。该研究提出了一种基于唯一头骨反射声音的低努力VR设备认证系统，当用户佩戴VR设备时可以获取到。具体来说，当用户戴上VR设备或佩戴VR设备登录在线账户时，该系统会主动发射超声波信号以启动认证会话。返回到VR设备麦克风的信号经过用户的头部产生回响，这个回响在大小、颅骨形状和质量上是独特的。因此，我们从接收到的信号中提取头部生物特征信息，以实现不显眼的VR设备认证。虽然主动声学感知已广泛应用于移动设备上，但之前的研究从未成功将这种技术应用到普通的VR设备上。因为VR设备旨在为用户提供虚拟现实的沉浸体验，用于主动感知的回响声是不需要的，并且被严重抑制。在没有内核/硬件修改的情况下，也无法访问此过程之前的原始音频。因此，我们的研究进一步解决了在回声消除下进行主动声学感知的挑战，以便在现成的VR设备上部署我们的系统。此外，我们还表明回声消除机制天然能够防止声学重播攻击。提出的系统基于自动编码器和卷积神经网络进行生物特征数据提取和识别。在独立式和手机VR头盔上进行的实验表明，我们的系统能够高效验证用户并且具有防止重播攻击的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/10179367/](https://ieeexplore.ieee.org/document/10179367/)
