# Eurocrypt[2024-3]
## Polynomial Time Cryptanalytic Extraction of Neural Network Models.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#polynomial-time-cryptanalytic-extraction-of-neural-network-models) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#polynomial-time-cryptanalytic-extraction-of-neural-network-models)**
### 作者
* Adi Shamir, Weizmann Institute, Rehovot, Israel
* Isaac A. Canales-Martínez, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Jorge Chávez-Saab, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Anna Hambitzer, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Francisco Rodríguez-Henríquez, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Nitin Satpute, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
### 摘要
> 目前已花费数十亿美元和无数GPU小时用于训练各种任务的深度神经网络（DNNs）。因此，确定在访问其黑盒实现时提取所有这些神经网络的参数的难度至关重要。在过去的30年中研究了这个问题的许多版本，Carlini、Jagielski和Mironov在Crypto'20上提出了基于ReLU的深度神经网络最佳的攻击方法。它类似于对密码系统的差分选择明文攻击，密码系统的黑盒实现中嵌入了一个秘密密钥，并且需要多项式数量的查询，但需要指数量的时间（作为神经元数量的函数）。
> 
> 在本文中，我们通过开发几种新技术改进了这种攻击，使我们能够使用多项式数量的查询和多项式数量的时间来提取基于ReLU的DNN的所有实值参数，并且可以任意高精度。通过将其应用于一个用于分类CIFAR10数据集的全尺寸神经网络，该数据集具有3072个输入，8个具有256个神经元的隐藏层，约120万个神经元参数，我们展示了它的实际效率。遵循Carlini等人的方法进行攻击需要对\(2^{256}\)个可能性进行穷举搜索。我们的攻击使用我们的新技术取代了这一点，在一个256核的计算机上只需要30分钟。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_1](https://doi.org/10.1007/978-3-031-58734-4_1)
## Ordering Transactions with Bounded Unfairness: Definitions, Complexity and Constructions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#ordering-transactions-with-bounded-unfairness-definitions-complexity-and-constructions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#ordering-transactions-with-bounded-unfairness-definitions-complexity-and-constructions)**
### 作者
* Aggelos Kiayias, University of Edinburgh and IOG, Edinburgh, UK
* Nikos Leonardos, National and Kapodistrian University of Athens, Athens, Greece
* Yu Shen, University of Edinburgh, Edinburgh, UK
### 摘要
> 在分布式账本协议的背景下，一个重要考虑因素是交易排序的公平性。最近的研究[加密学2020]揭示了（接收者）顺序公平与社会选择理论以及源自孔多塞悖论的相关不可能结果之间的联系。由于这种不可能性，先前的工作提出了各种对顺序公平性的放宽。鉴于分布式账本协议，特别是处理智能合约的协议必须对输入交易进行串行化，一个自然的目标是尽量减少输出账本中任意一对不公平排序交易之间的距离（以交易数量衡量）—— 我们称之为有界不公平性的概念。在状态机复制（SMR）术语中，这要求在处理任何请求之前最小化发生的不公平状态更新次数。这种不公平性最小化目标引发了一类自然的参数化顺序公平性定义，这在以前从未被研究过。正如我们所观察到的，以前可实现的对顺序公平性的放宽并不能产生良好的不公平性边界。
> 
> 实现有界不公平性意义上的最佳顺序公平性与底层交易依赖图的图论特性以及特定的强连通分量中的带宽度量相关联。这产生了我们称之为“有向带宽度顺序公平性”的定义的一个具体实例，我们表明这捕捉了任何账本协议在限定不公平性方面可以达到的最佳水平。我们证明以这种方式排序交易是NP难的，并且无法以任何常数比率逼近。为实现该属性，我们提出了一种新的分布式账本协议Taxis，实现了有向带宽度顺序公平性。我们提出了两种变体，一种完全符合该属性但（必然）在性能和活性上欠缺，另一种在保留稍微放松版本的属性的同时实现了活性和更好的复杂性。最后，我们就我们的工作在社会选择领域的应用发表评论，我们认为这个方向是具有独立兴趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_2](https://doi.org/10.1007/978-3-031-58734-4_2)
## Asymptotically Optimal Message Dissemination with Applications to Blockchains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#asymptotically-optimal-message-dissemination-with-applications-to-blockchains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#asymptotically-optimal-message-dissemination-with-applications-to-blockchains)**
### 作者
* Chen-Da Liu-Zhang, Lucerne University of Applied Sciences and Arts & Web3 Foundation, Zug, Switzerland
* Christian Matt, Primev, Steinhausen, Switzerland
* Søren Eller Thomsen, Partisia, Aarhus, Denmark
### 摘要
> 在区块链等大规模网络中，消息通常使用洪泛协议进行传播，其中各方将消息发送到一组随机对等方，直到它到达所有各方。优化这种协议的通信复杂性，特别是每方通信复杂度，是主要关注的问题，因为网络中的节点常常受到带宽限制。以前的洪泛协议在保证 \(\gamma \) 良性节点的情况下，将 l 位消息在 n 个节点之间传播需要 \(\varOmega (l\cdot \gamma ^{-1} \cdot (\log (n) + \kappa ))\) 位每方通信复杂度。在这项研究中，我们提出了第一个洪泛协议，其每方通信复杂度是 \(O(l\cdot \gamma ^{-1})\) 位。我们进一步展示这是渐进最优的，且我们的协议可以被证明在权益证明区块链中被安全实现。为了证明我们的新协议不仅渐进最优而且实际可行，我们进行了多次概率模拟以估计给定参数的具体复杂性。我们的模拟显示，与实用参数的最新技术相比，我们的协议显著改善了每方通信复杂度。因此，在给定的带宽限制下，我们的结果允许例如增加块大小，提高区块链的整体吞吐量。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_3](https://doi.org/10.1007/978-3-031-58734-4_3)
## Proof-of-Work-Based Consensus in Expected-Constant Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#proof-of-work-based-consensus-in-expected-constant-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#proof-of-work-based-consensus-in-expected-constant-time)**
### 作者
* Juan Garay, Texas A &M University, College Station, USA
* Aggelos Kiayias, University of Edinburgh and IOG, Edinburgh, UK
* Yu Shen, University of Edinburgh, Edinburgh, UK
### 摘要
> 在传统的共识问题（又称拜占庭协议）中，各方需要在一些恶意行为的情况下达成共识，但条件是如果所有诚实的各方开始执行时具有相同的值，那么结果也将是相同的。这个问题已经被分布式计算和密码协议社区广泛研究。随着区块链的出现，其主要应用——分布式账本——本质上要求矿工们在他们的观点上达成一致，因此新的技术被提出来解决这个问题，特别是在所谓的“无需许可”环境中，各方没有经过认证或拥有点对点通道的访问，并且可以自由进出。
> 
> 到目前为止，在基于工作证明（PoW）机制的比特币中，实现共识的最快方法需要 \(O(\textsf{polylog} \kappa )\) 轮，其中 \(\kappa \) 是安全参数。我们提出了第一个在这种情况下需要预期常数轮数的协议。此外，我们展示了如何应用安全的顺序组合以产生一个快速的分布式账本协议，可以在预期常数时间内解决所有交易。我们的结果基于“m对1 PoW”在并行链上的新实例化，这有助于我们的基本构建块，Chain-King Consensus。我们使用的通过并行链将经典协议设计元素（诸如Phase-King Consensus、超级相顺序组合等）移植到无需许可设置中的技术可能具有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_4](https://doi.org/10.1007/978-3-031-58734-4_4)
## A Holistic Security Analysis of Monero Transactions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#a-holistic-security-analysis-of-monero-transactions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#a-holistic-security-analysis-of-monero-transactions)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> Monero是一种受欢迎的加密货币，为用户的交易提供了强大的隐私保障。Monero隐私声明的核心是一个名为RingCT的复杂交易系统，它以独特的方式结合了可链接的环签名、同态承诺和范围证明等多个构建模块。在这项工作中，我们首次为RingCT（Zero to Monero，v2.0.0，2020中的RingCT）提供了严格的安全分析，而不是先前只为RingCT的部分提供安全论证的工作。
> 
> 为了分析Monero的交易系统，我们引入了RingCT的第一个整体安全模型。然后我们在我们的模型中证明了RingCT的安全性。我们的框架是模块化的：它可以让我们把RingCT视为各种不同子协议的组合。我们的模块化方法的好处是，这些组件可以在将来的RingCT版本中进行简单的更新，并且只对我们的分析进行轻微的修改。
> 
> 在技术层面上，我们将我们的分析分为两部分。首先，我们确定了构建模块的安全概念，需要暗示整个系统的安全。有趣的是，我们观察到，现有的和已建立的概念（例如可链接环签名）是不够的。其次，我们分析了Monero中实现的所有构建模块，并证明它们符合我们新的概念。在这里，我们利用了代数群模型来克服对可链接环签名组件分析中的微妙问题。作为另一个技术亮点，我们展示了我们的安全目标可以映射到一个合适的图问题，这使我们能够在我们的分析中利用网络流理论。这种新的方法也对其他加密货币的安全性证明是有用的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_5](https://doi.org/10.1007/978-3-031-58734-4_5)
## Algorithms for Matrix Code and Alternating Trilinear Form Equivalences via New Isomorphism Invariants.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#algorithms-for-matrix-code-and-alternating-trilinear-form-equivalences-via-new-isomorphism-invariants) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#algorithms-for-matrix-code-and-alternating-trilinear-form-equivalences-via-new-isomorphism-invariants)**
### 作者
* Anand Kumar Narayanan, SandboxAQ, Palo Alto, USA
* Youming Qiao, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Gang Tang, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Gang Tang, University of Birmingham, Birmingham, UK
### 摘要
> 我们设计了算法，用于在线性群作用下，在有限域上寻找三线性形式的等价性。我们的关注点是这个范畴下的两个问题，矩阵码等价性（MCE）和交替三线性形式等价性（ATFE），因为它们的难度是NIST回合1签名候选者MEDS和ALTEQ的基础。
> 
> 我们提出了针对MCE和ATFE的新算法，这些算法是对Bouillaguet，Fouque和Véber（Eurocrypt 2013）以及Beullens（Crypto 2023）的多项式同构和交替三线性形式等价性算法的进一步发展。这些算法的关键因素是各自群作用下的新易于计算的区分不变量。
> 
> 对于MCE，我们将新的同构不变量与矩阵编码的秩为1的点相关联，从而引导birthday型算法的实现。我们提供经验证明表明，这些同构不变量易于计算和区分，并提供了该算法的实现。该算法对MEDS的安全具有一定的影响。
> 
> ATFE的不变函数类似，只是它与秩较低的点相关联。在将不变函数转化为规范形式的某些假设下，我们对ATFE的算法改进了Beullens（Crypto 2023）已知的最佳算法的运行时间。
> 
> 最后，我们提出了经典算法的量子变体，具有立方运行时间改进。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_6](https://doi.org/10.1007/978-3-031-58734-4_6)
## Generalized Feistel Ciphers for Efficient Prime Field Masking.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#generalized-feistel-ciphers-for-efficient-prime-field-masking) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#generalized-feistel-ciphers-for-efficient-prime-field-masking)**
### 作者
* Lorenzo Grassi, Ruhr University Bochum, Bochum, Germany
* Loïc Masure, LIRMM, Univ. Montpellier, CNRS, Montpellier, France
* Pierrick Méaux, Luxembourg University, Esch-sur-Alzette, Luxembourg
* Thorben Moos, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
### 摘要
> 来自2023年欧洲加密学会的最新研究表明，对于侧信道攻击中的掩码实现，素域掩码在低噪声物理泄漏的情况下具有优异的提高效率与安全性之间的权衡的潜力。我们接续这个种子结果带来的主要开放性挑战，即设计能够利用这种潜力的优化素数密码。考虑到在许多抗泄漏设计中使用具有廉价逆元的可微分块密码的兴趣，我们首先描述了基于广义 Feistel 结构的 FPM (素数掩码的 Feistel) 可微分块密码家族。然后，我们提出了 FPM 的第一个实例，即小型 pSquare。它建立在最近的观察结果之上，即平方操作（在 \(\mathbb {F}_p\) 中是非线性的）可以导致比乘法更高效的掩码小工具，并且专为硬件中的高效掩码实现而设计。我们分析了 FPM 密码族和小型 pSquare 实例的数学安全性，试图将我们研究的部分隔离出来，以便其他实例可以重复使用。此外，我们通过比较掩码 FPGA 电路的效率与安全性权衡与最先进的二进制密码 SKINNY，验证了在相关场景下的显著收益。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_7](https://doi.org/10.1007/978-3-031-58734-4_7)
## A Novel Framework for Explainable Leakage Assessment.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#a-novel-framework-for-explainable-leakage-assessment) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#a-novel-framework-for-explainable-leakage-assessment)**
### 作者
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, School of Computer Science, University of Birmingham, Birmingham, UK
### 摘要
> 一些方案，如公共标准或FIPS 140-3，要求在高安全级别下评估加密实现的侧信道。FIPS 140-3不采用“渗透测试”风格的方法，而是依赖于非特定的“泄漏评估”来发现对称方案实现中潜在的侧信道泄漏。如今所理解的泄漏评估是基于简单的泄漏检测测试制度。到目前为止，泄漏评估未提供任何证据表明潜在的泄漏是否可以在具体攻击中被利用：如果设备未通过测试（因此无法在FIPS 140-3方案下获得认证），则目前尚不清楚其未能通过的原因。
> 
> 我们提出了一种新的评估制度，它基于与现有泄漏检测测试不同的统计基础。我们的统计方法实现了非特定检测（即我们无需指定中间值），同时生成证据以设计利用已识别泄漏的攻击向量。我们通过迭代方法实现了这一点，基于构建和比较嵌套回归模型。我们还首次提供了密钥泄漏、可利用泄漏和可解释泄漏等概念的具体定义。最后，我们在已知存在微体系结构泄漏的处理器上的两个开源遮蔽软件实现的情境中，阐明了我们的新型泄漏评估框架。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_8](https://doi.org/10.1007/978-3-031-58734-4_8)
## Integrating Causality in Messaging Channels.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#integrating-causality-in-messaging-channels) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#integrating-causality-in-messaging-channels)**
### 作者
* Shan Chen, Southern University of Science and Technology, Shenzhen, China
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 因果推理在理解交流中起着重要作用，但到目前为止，即时通讯服务如何正确保留因果关系仍不明确。据我们所知，即使在大多数（如果不是全部）现有的安全通信协议（如Signal）中，因果性保持甚至都没有被视为期望的安全属性。这可能是因为直觉上，当所有接收到的消息都完好无损并按照发送顺序显示时，因果关系似乎已经得到了保留。我们的起点是注意到这种直觉是错误的。至今为止，针对消息传递渠道（即会话发生的地方），适当的因果模型和可以证明安全的构造方式都未被正式提出。我们的工作填补了这个空缺，旨在促进对消息传递中因果保留的形式化理解。首先，我们专注于常见的双用户安全消息通道，并对所需的因果保留属性进行建模。我们以流行的Signal协议为例，分析其加密核心（双向链条机制）的因果安全性。我们用简单的因果攻击证明了其不足，然后修复以获得保留因果的Signal通道，即使在可以保证后续妥协安全的情况下也能得到强烈的保障。我们的修复实际上是通用的：可以应用于任何双向通道以获得强大的因果安全性。然后，我们为所谓的邮寄消息通道建模因果安全性。这种通道此外还使最终用户向服务器（例如服务提供商）报告个别滥用信息，其中此服务器中继用户之间的端到端加密通信。在这种设置中的因果安全性进一步允许服务器检索每个报告消息的必要因果依赖关系，从而将孤立的报告消息扩展为消息流。这对于争议解决具有很大的安全价值，因为当孤立于上下文时，可以认为良性消息是有害的。例如，我们将我们的模型应用于分析Facebook的邮寄消息方案。我们表明，恶意用户可以轻松地欺骗Facebook（即服务器）指控无辜用户。然后，我们通过修正基础邮寄消息通道来保留所需的因果关系来解决此问题。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_9](https://doi.org/10.1007/978-3-031-58734-4_9)
## Symmetric Signcryption and E2EE Group Messaging in Keybase.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#symmetric-signcryption-and-e2ee-group-messaging-in-keybase) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#symmetric-signcryption-and-e2ee-group-messaging-in-keybase)**
### 作者
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Akshaya Kumar, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, GA, USA
* Igors Stepanovs, Riga, Latvia
### 摘要
> 我们介绍了一种称为对称签密的新密码原语，与传统的签密不同之处在于发送方和接收方共享一个秘密密钥。我们证明了对称加密和签名的自然组合实现了针对可以学习和控制多个密钥的攻击者的强安全性概念。然后，我们确定了Keybase加密通信协议的核心加密算法可以被建模为对称签密方案。尽管我们的证明需要假设底层原语具有非标准、脆弱的安全属性，我们还是证明了该算法的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_10](https://doi.org/10.1007/978-3-031-58734-4_10)
## Trapdoor Memory-Hard Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#trapdoor-memory-hard-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#trapdoor-memory-hard-functions)**
### 作者
* Benedikt Auerbach, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Christoph U. Günther, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, Institute of Science and Technology Austria, Klosterneuburg, Austria
### 摘要
> Memory-hard functions（MHF）是那些评估需要大量内存的函数。虽然MHF是一个不带密钥的原语，但自然而然地考虑到陷门MHF（TMHF）的概念。TMHF类似于MHF，但在抽样公共参数时还会抽样一个允许更便宜地评估函数的陷门。 Biryukov和Perrin（Asiacrypt'17）是第一个考虑TMHF并提出了一个名为\(\textsc {Diodon}\)的候选TMHF构建，它基于\(\textsc {Scrypt}\) MHF（Percival，BSDCan'09）。为了允许陷门，\(\textsc {Scrypt}\)的初始哈希链被未知阶数组中的平方序列所替代，其中组的阶数是陷门。对于长度n的平方序列和阶数为N的组，\(\textsc {Diodon}\)的累积内存复杂度（CMC）是没有陷门的\(O(n^2\log N)\)，有陷门时为\(O(n \log (n) \log (N)^2)\)。虽然证明\(\textsc {Scrypt}\)在随机预言机模型下是最优的内存难的（Alwen等人，Eurocrypt'17），但\(\textsc {Diodon}\)的内存难度到目前为止还没有被证明。在这项工作中，我们通过严格分析\(\textsc {Diodon}\)的特定实例来填补这一空白。我们表明它的CMC下限为\(\varOmega (\frac{n^2}{\log n} \log N)\)，几乎匹配了上限。我们的证明基于Alwen等人对\(\textsc {Scrypt}\) CMC的下限，但由于\(\textsc {Diodon}\)的代数结构，需要进行非平凡的修改。最重要的是，我们的分析涉及更为详细的压缩论证和某些丢番图方程的可解性准则。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_11](https://doi.org/10.1007/978-3-031-58734-4_11)
## Probabilistically Checkable Arguments for All NP.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#probabilistically-checkable-arguments-for-all-np) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#probabilistically-checkable-arguments-for-all-np)**
### 作者
* Shany Ben-David, Department of Computer Science, Bar-Ilan University, Petah Tikva, Israel
### 摘要
> 概率可检查论证（PCA）是对PCP的计算放松，其中声音性仅对由计算受限的对手生成的假证明保证有效。PCA的优点在于它们能够克服PCP的局限性。简洁的PCA具有在证人长度中是多项式的证明长度（并且与非确定性验证时间无关），这在标准复杂性假设下对PCP是不可能的。Bronfman和Rothblum（ITCS 2022）为NC构造了简洁的PCA，这些PCA是公开可验证的，并且在LWE的次指数难度下具有恒定的查询复杂度。
> 
> 我们构造了一个具有恒定查询复杂度的用于自适应安全设置中所有NP的公开可验证的简洁PCA。与Bronfman和Rothblum的构造相比，我们的PCA方案提供了几项改进：（1）适用于NP中的所有问题，（2）实现了自适应安全性，（3）可以基于以下任何一个假设实现：LWE的多项式难度；O(1)-LIN；或次指数DDH。
> 
> 此外，我们的PCA方案具有简洁的证明者，这意味着对于任何可在时间T和空间S内验证的NP关系，证明可以在时间Oλ,m(T⋅polylog(T))和空间Oλ,m(S⋅polylog(T))内生成。这里，Oλ,m考虑了安全参数和证人大小的多项式因子。在此过程中，我们构造了一个新的保持复杂性的RAM委托方案，该方案用于我们的PCA构造并可能具有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_12](https://doi.org/10.1007/978-3-031-58734-4_12)
## The Complexity of Algebraic Algorithms for LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#the-complexity-of-algebraic-algorithms-for-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#the-complexity-of-algebraic-algorithms-for-lwe)**
### 作者
* Matthias Johann Steiner, Alpen-Adria-Universität Klagenfurt, Klagenfurt am Wörthersee, Austria
### 摘要
> Arora和Ge引入了一个无噪声的多项式系统来通过线性化计算学习错误（LWE）实例的秘密。 Albrecht等人后来利用Arora-Ge多项式模型研究了在半规则条件下计算LWE多项式系统的Gröbner基础计算的复杂性。在本文中，我们重新审视了Arora-Ge多项式，并证明它满足Caminata＆Gorla最近引入的一般性条件，称为在一般坐标中。对于在一般坐标中的多项式系统，可以始终估计DRL Gröbner基础计算的复杂性，以Castelnuovo-Mumford正则性为代价，因此也可通过Macaulay界限进行估算。
> 
> 此外，我们将Semaev＆Tenti的Gröbner基础算法推广到任意正则度的多项式系统。特别是，该算法的存在使另一种方法可以通过正则度的程度估计DRL Gröbner基础计算的复杂性。在实践中，LWE多项式系统的正则度是未知的，尽管可以始终估计可以实现的最低正则度。因此，从设计者的最坏情况的角度来看，这种方法为一般的二进制秘密和二进制错误的LWE提供了次指数复杂度估计。
> 
> 在Dachman-Soled等人的最近工作中分析了LWE在存在副作用信息的情况下的难度。利用他们的框架，我们讨论了提示如何纳入LWE多项式系统以及它们如何影响Gröbner基础计算的复杂性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_13](https://doi.org/10.1007/978-3-031-58734-4_13)
## Pauli Manipulation Detection Codes and Applications to Quantum Communication over Adversarial Channels.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#pauli-manipulation-detection-codes-and-applications-to-quantum-communication-over-adversarial-channels) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#pauli-manipulation-detection-codes-and-applications-to-quantum-communication-over-adversarial-channels)**
### 作者
* Thiago Bergamaschi, Department of EECS, UC Berkeley, Berkeley, USA
### 摘要
> 我们介绍并明确构建了一种量子纠错码，我们称之为“Pauli 操作检测”码（PMD），它可以高概率地检测到每个 Pauli 错误。我们应用它们来构建第一个基于敌对信道的量子通信中两个任务的近最优码。
> 
> 我们的主要应用是一种近似量子码，它可以有效地纠正许多（最坏情况下）接近量子单体界的抹除错误。我们的构造基于 PMD 代码与一种可从抹除中解码出列表的稳定器代码的组合，这是由 Leung 和 Smith [49]以及 Bergamaschi 等人 [17] 研究的稳定器列表解码码的一种变体。
> 
> 我们的第二个应用是一种适用于“逐比特”信道的量子认证码，不需要秘密密钥。值得注意的是，这提供了一个在经典情况下被证明不可能的量子通信任务的例子。我们的构造基于 PMD 码、稳定器码和经典的非可塑码（Dziembowski 等人 [33]），并实现“最小冗余”（速率为 \(1-o(1)\)）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_14](https://doi.org/10.1007/978-3-031-58734-4_14)
## Certified Everlasting Secure Collusion-Resistant Functional Encryption, and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#certified-everlasting-secure-collusion-resistant-functional-encryption-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#certified-everlasting-secure-collusion-resistant-functional-encryption-and-more)**
### 作者
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Fuyuki Kitagawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Ryo Nishimaki, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Takashi Yamakawa, NTT Research Center for Theoretical Quantum Information, Atsugi, Japan
* Tapas Pal, Karlsruhe Institute of Technology, KASTEL Security Research Labs, Karlsruhe, Germany
### 摘要
> 我们在这项工作中研究了认证永久安全的功能加密（FE）以及许多其他密码学原语。认证永久安全大致意味着以下内容。拥有量子密码对象（如密文）的接收者可以发出一张证书，证明接收者已删除了密码对象并且对象中包含的信息（如明文）已丢失。如果证书有效，则即使接收者在删除后变得计算上无限制，安全性也得到保证。许多密码学原语已知在量子世界中甚至不太可能具有信息理论安全性。因此，认证永久安全是一个很好的折衷方案（固有于量子）。在这项工作中，我们定义了FE、计算和比较混淆、谓词加密（PE）、秘钥加密（SKE）、公钥加密（PKE）、接收者非承诺加密（RNCE）和混淆电路的认证永久安全版本。我们还提出了以下构造：
> 
> - 从区分不可混淆和单向函数中的所有多项式大小电路的适应认证永久安全防合谋公钥FE。
> 
> - 从标准PKE中的\(\textsf{NC}^1\)电路的有界合谋公钥FE的适应认证永久安全。
> 
> - 从标准全同态加密和标准计算和比较混淆中的计算和比较混淆的认证永久安全。
> 
> - 从标准适应（或选择性）安全属性加密和认证永久安全的计算和比较混淆中的PE的适应认证永久安全。
> 
> - 从标准SKE和PKE中的安全SKE和PKE的永久安全认证。
> 
> - 从标准PKE中的永久安全认证的RNCE。
> 
> - 从标准SKE中的永久安全认证的混淆电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_15](https://doi.org/10.1007/978-3-031-58734-4_15)
## Early Stopping for Any Number of Corruptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-3].md#early-stopping-for-any-number-of-corruptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-3].md#early-stopping-for-any-number-of-corruptions)**
### 作者
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 拓扑网络广播的轮复杂度是分布式计算和密码学中的一个基本问题。在这项工作中，我们提出了第一个早期停止的拜占庭广播协议，它容忍多达\(t=n-1\)个恶意破坏并在任何执行中以\(\mathcal {O}(\min \{f^2,t+1\})\)轮终止，其中\(f\le t\)为实际破坏数。我们的协议是确定性的，适应性安全的，并假定了一个普通的公钥基础设施。之前的早期停止协议要么需要诚实的多数，要么只容忍多达\(t=(1-\epsilon )n\)的恶意破坏，同时需要信任设置或者强的数论困难假设。作为我们的关键贡献，我们展示了一种名为偏振器的新工具，它使我们能够将基于证书的策略从诚实多数设置转移到具有不诚实多数的设置中。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58734-4_16](https://doi.org/10.1007/978-3-031-58734-4_16)
