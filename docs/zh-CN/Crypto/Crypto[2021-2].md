# Crypto[2021-2]
## Game-Theoretic Fairness Meets Multi-party Protocols: The Case of Leader Election.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#game-theoretic-fairness-meets-multi-party-protocols-the-case-of-leader-election) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#game-theoretic-fairness-meets-multi-party-protocols-the-case-of-leader-election)**
### 作者
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* T.-H. Hubert Chan, The University of Hong Kong, Pokfulam, Hong Kong
* Ting Wen, The University of Hong Kong, Pokfulam, Hong Kong
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 假设有n个玩家想要选出一个随机的领导者，并且他们通过向一个公共广播信道发布消息进行通信。这个问题被称为领导者选举，在分布式系统和密码学文献中具有基础性意义。最近，由于在分散环境中的应用前景，它吸引了重新关注。在博弈论上公平的领导者选举协议大致上要求，即使是多数联盟也不能增加自己当选的机会，也不能伤害任何诚实的个体的机会。按照民间传说的锦标赛-树协议，完成时间约为对数次数，可以轻松满足博弈论安全性。据我们所知，在我们考虑的设置中，不存在已知的亚对数轮协议。
> 
> 我们表明，通过采用适当的近似博弈论公平概念，并在标准密码学假设下，我们可以在r轮内实现\((1-1/2^{\varTheta (r)})\)-公平性，其中 \(\varTheta (\log \log n) \le r \le \varTheta (\log n)\)，其中n表示玩家数量。特别地，这意味着我们可以使用仅 \(O(\log \log n)\) 轮就近似匹配锦标赛-树协议的公平性。我们还证明了一个下界，表明如果限制在“完美”的博弈论公平和与锦标赛-树协议“非常相似结构”的协议，则必须进行对数次轮。尽管领导者选举在分布式计算的其他上下文中是一个经过深入研究的问题，但我们的工作是第一个探究在可能存在多数联盟的情况下，在博弈论上公平的领导者选举的轮复杂度。作为我们探索的副产品，我们提出了一个新的，近似的博弈论公平概念，称为“近似顺序公平性”，它提供了比一些先前研究的近似公平概念更理想的解决方案概念。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_1](https://doi.org/10.1007/978-3-030-84245-1_1)
## Computational Hardness of Optimal Fair Computation: Beyond Minicrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#computational-hardness-of-optimal-fair-computation-beyond-minicrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#computational-hardness-of-optimal-fair-computation-beyond-minicrypt)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 安全多方计算允许互不信任的参与方在其私有数据上进行安全计算。然而，在对手可能中止协议的情况下，保证输出传递给诚实方是一个具有挑战性的目标。作为一个代表性任务，本研究考虑了具有输出传递保障的两方硬币抛掷协议，即公平硬币抛掷。
> 
> 在信息论明文模型中，与两方零和博弈相似，一方可以强制确定输出。在承诺-混合模型中，任何r-消息硬币抛掷协议都是\(1/\sqrt{r}\)-不公平的，即对手可以通过统计距离将诚实方的输出分布改变\(1/\sqrt{r}\)。Moran、Naor和Segev（TCC-2009）构建了第一个1/r-不公平协议，使用了混合的忘记传递。由于Cleve（STOC-1986）证明了1/r-不公平是不可避免的，因此Moran、Naor和Segev的硬币抛掷协议是最佳的。然而，混淆传递是否对于最佳的公平硬币抛掷是必要的呢？
> 
> Maji和Wang（CRYPTO-2020）证明，任何使用单向函数以黑盒方式进行硬币抛掷的协议至少是\(1/\sqrt{r}\)-不公平的。也就是说，在Minicrypt中无法实现最佳公平硬币抛掷。我们的工作重点是在Cryptomania中紧密描述计算假设的难度，这些假设对于实现最佳公平硬币抛掷是必要且充分的，但不适用于Minicrypt。Haitner、Makriyannia、Nissim、Omri、Shaltiel和Silbak（FOCS-2018和TCC-2018）证明，对于任意常数r，更好于\(1/\sqrt{r}\)-不公平性意味着存在一个密钥协商协议。
> 
> 我们证明，任何使用公钥加密（或多轮密钥协商协议）以黑盒方式进行硬币抛掷的协议都必须是\(1/\sqrt{r}\)-不公平的。接下来，我们的工作完全描述了实现最佳公平硬币抛掷所需的安全功能评估额外能力。我们在模型中增加了f的理想安全功能评估，即f-混合。如果f是完备的，即在f-混合中可以实现混淆传递，那么在f-混合中也可以实现最佳公平硬币抛掷。另一方面，如果f不完备，那么在f-混合中使用公钥加密以黑盒方式进行硬币抛掷的协议至少是\(1/\sqrt{r}\)-不公平的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_2](https://doi.org/10.1007/978-3-030-84245-1_2)
## YOSO: You Only Speak Once - Secure MPC with Stateless Ephemeral Roles.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#yoso-you-only-speak-once-secure-mpc-with-stateless-ephemeral-roles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#yoso-you-only-speak-once-secure-mpc-with-stateless-ephemeral-roles)**
### 作者
* Craig Gentry, Algorand Foundation, New York, USA
* Shai Halevi, Algorand Foundation, New York, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
* Tal Rabin, Algorand Foundation, New York, USA
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Tal Rabin, UPenn, Philadelphia, USA
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### 摘要
> 在长时间内维持有状态环境的困难性催生了无服务器计算的范式，其中大部分是有状态组件，它们根据需求被部署来处理计算任务，并在任务完成后被撤销。无服务器架构可能提供额外的好处，通过隐藏攻击者在协议完成工作之前参与的物理机器，改善了针对性拒绝服务攻击的抵抗能力。然而，实现这样的保护需要协议仅使用无状态方，其中每个方只发送一条消息，永不再次通信。这种协议风格中最著名的例子可能就是比特币中使用的纳卡莫托共识协议：一个对等方可以通过运行本地抽奖（挖矿）以保持隐蔽，赢得产生下一个区块的权利。一旦权利获得，就通过发送一条消息来执行。在此之后，物理实体再也不需要发送更多消息。
> 
> 我们称之为“你只能说一次”（YOSO）属性，并在我们所称之为YOSO模型的新模型中对其进行了正式研究。我们的模型围绕角色的概念而建立，这些角色是只能发送一条消息的无状态方。至关重要的是，我们的建模将只使用角色的协议设计与将角色分配给实际物理实体的角色分配机制分离。这种分离使得能够分别研究这两个方面，而我们在这项工作中的YOSO模型只涉及协议设计方面。
> 
> 我们描述了实现YOSO MPC的几种技术，包括计算安全和信息论安全。我们的协议是同步的，并提供了输出交付的保证（对于区块链等应用领域非常重要），假设每个时间步中的角色都是诚实多数。我们描述了一种实际高效的计算安全协议，以及一个信息论安全协议的概念验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_3](https://doi.org/10.1007/978-3-030-84245-1_3)
## Fluid MPC: Secure Multiparty Computation with Dynamic Participants.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#fluid-mpc-secure-multiparty-computation-with-dynamic-participants) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#fluid-mpc-secure-multiparty-computation-with-dynamic-participants)**
### 作者
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 现有的安全多方计算（MPC）方法要求所有参与者在整个协议的持续时间内都做出承诺。随着对MPC的兴趣不断增长，人们将不可避免地希望将其用于评估越来越复杂的功能，从而导致计算跨越几个小时或几天。
> 
> 这种情况需要一个动态参与模型，使参与者可以根据需要随时离线并（重新）加入当他们有可用的计算资源时。这样的模型还将通过促进“以MPC为服务”的范式，使隐私保护计算的访问方式民主化-在志愿者运营网络（如区块链，固有动力学）中部署MPC，代表客户进行计算。
> 
> 在本文中，我们开始研究流体MPC，参与方可以动态地加入和离开计算。每个参与者所需的最低承诺被称为流动性，以其必须保持在线的通信回合数量来衡量。我们的贡献有三个方面：
> 
> - 我们对流体MPC进行了正式处理，并探索了各种可能的建模选择。
> 
> - 我们在诚实大多数设置下构建了信息论流体MPC协议。我们的协议实现了最大的流动性，意味着参与方在收发消息后可以退出计算。
> 
> - 我们实现了我们的协议并在多个网络环境中进行了测试。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_4](https://doi.org/10.1007/978-3-030-84245-1_4)
## Secure Computation from One-Way Noisy Communication, or: Anti-correlation via Anti-concentration.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#secure-computation-from-one-way-noisy-communication-or-anti-correlation-via-anti-concentration) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#secure-computation-from-one-way-noisy-communication-or-anti-correlation-via-anti-concentration)**
### 作者
* Shweta Agrawal, Indian Institute of Technology Madras, Chennai, India
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Varun Narayanan, Tata Institute of Fundamental Research, Mumbai, India
* Vinod Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
* Alon Rosen, IDC Herzliya, Herzliya, Israel
### 摘要
> 发送方是否可以联合编码一对信息\((m_0,m_1)\)，并将其编码发送到（例如）二进制擦除信道上，以便接收方可以解码出这两个信息中的一个，而发送方无法知道是哪一个？
> 
> Garg等人（Crypto 2015）证明了这是信息论上不可能的。我们通过假设接收方在计算上是有限的，接受一个反多项式安全错误（这是可以被证明是必要的），并依赖于理想混淆来绕过这个不可能性。我们的解决方案通过利用二项分布的反集中性，创建了“计算上的反相关性”，将接收\(m_0\)和接收\(m_1\)的事件联系起来。
> 
> 我们构建中的理想混淆原语可以直接使用（无状态）防篡改硬件来实现，从而产生无条件的结果，或者在普通模型中使用现有的不可区分混淆方案来启发地实现。
> 
> 作为推论，通过利用上述“随机遗忘转移”功能的完备性，我们可以得到类似的关于发送方-接收方功能的安全计算的可行性结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_5](https://doi.org/10.1007/978-3-030-84245-1_5)
## Broadcast-Optimal Two Round MPC with an Honest Majority.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#broadcast-optimal-two-round-mpc-with-an-honest-majority) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#broadcast-optimal-two-round-mpc-with-an-honest-majority)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Bernardo Magri, Aarhus University, Aarhus, Denmark
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### 摘要
> 本文解决了两轮MPC协议在是否有广播可用的情况下能否实现不同安全保证的问题。Cohen等人[CGZ20]在诚实多数方设置下研究了这个问题；我们通过研究诚实多数方设置来完善这个画面。
> 
> 在诚实多数方设置中，如果两轮都有广播，已知最强的保证——输出交付保证是可实现的[GLS15]。我们展示了，即使只有第一轮有广播，输出交付保证仍然是可实现的。如果只有第二轮有广播，我们给出了一个新的构造方法来实现可识别终止，并且我们展示了公平性和输出交付保证在这种情况下不能实现。最后，如果只有点对点通道可用，我们展示了在损坏阈值\(t > 1\)和\(t = 1\)且\(n = 3\)的情况下，最弱的保证——选择性终止是唯一可实现的。另一方面，已经知道在这些情况下可以实现选择性终止。在剩余的情况下，即\(t = 1\)且\(n \ge 4\)，已知[IKP10，IKKP15]可以实现输出交付保证（因此所有较弱的保证都是可能的）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_6](https://doi.org/10.1007/978-3-030-84245-1_6)
## Three-Round Secure Multiparty Computation from Black-Box Two-Round Oblivious Transfer.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#three-round-secure-multiparty-computation-from-black-box-two-round-oblivious-transfer) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#three-round-secure-multiparty-computation-from-black-box-two-round-oblivious-transfer)**
### 作者
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们给出了三轮安全多方计算（MPC）协议的构建，用于一般函数，并且这些协议在黑盒中使用了两轮匿名传输（OT）。对于半诚实的对手，我们使用了基于清晰模型的两轮半诚实安全OT。这解决了关于黑盒（半诚实）MPC协议的轮复杂性的最小假设，并回答了Applebaum等人（ITCS 2020）的一个悬而未决问题。对于恶意对手，我们使用了基于公共随机/参考字符串模型的两轮恶意安全OT，该模型满足了接收者的一种（温和的）自适应安全变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_7](https://doi.org/10.1007/978-3-030-84245-1_7)
## On the Round Complexity of Black-Box Secure MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#on-the-round-complexity-of-black-box-secure-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#on-the-round-complexity-of-black-box-secure-mpc)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, US
* Amit Sahai, UCLA, Los Angeles, US
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们考虑了在最小化安全多方计算（MPC）协议的轮复杂度方面的问题，该协议对简单的密码原语进行黑盒使用，并针对任意数量的恶意参与方提供安全性保障。在传统模型中，先前的黑盒协议需要较高的常数轮数（>15）。这远远低于具有黑盒模拟器的协议的已知下界4轮。
> 
> 当允许随机遗忘传输（OT）相关性时，我们已知一种使用伪随机生成器进行黑盒使用的2轮协议。然而，这些协议是通过一种称为“协议编码”的环节折叠技术获得的，其具体效率较低，并且在底层恶意安全协议中没有黑盒使用的情况。
> 
> 我们通过提出以下类型的黑盒协议来改进这种状况。
> 
> 传统模型下的四轮“逐对MPC”。这个轮优化协议使得每对有序参与方能够计算两者输入的函数，并将输出传送给第二方。该协议对于任意公钥加密（PKE）与伪随机公钥的黑盒使用都适用。作为特例，我们可以得到一种使每对有序参与方之间的（副本）OT安全的黑盒轮优化实现。
> 
> 基于OT相关性的两轮MPC。该轮优化协议对满足增强半诚实安全概念的任意二轮MPC协议进行黑盒使用。在两方参与的情况下，这也产生了新种类的两轮黑盒协议。
> 
> 传统模型下的五轮MPC。该协议通过使用具有伪随机公钥的PKE和具有"半恶意"安全性的两轮遗忘传输进行黑盒使用。
> 
> 第一个结果的关键技术工具是拆分状态非可塑编码（Dziembowski、Pietrzak和Wichs，JACM’18）与独立安全的双方协议的结合体，以构建不可塑造的双方协议。第二个结果是基于“IPS编译器”的新一轮优化变体（Ishai、Prabhakaran和Sahai，Crypto’08）。第三个结果是通过这两种技术的专门组合获得的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_8](https://doi.org/10.1007/978-3-030-84245-1_8)
## ATLAS: Efficient and Scalable MPC in the Honest Majority Setting.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#atlas-efficient-and-scalable-mpc-in-the-honest-majority-setting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#atlas-efficient-and-scalable-mpc-in-the-honest-majority-setting)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Hanjun Li, University of Washington, Seattle, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### 摘要
> 在这项工作中，我们解决了诚实多数设置下算术电路的无条件安全多方计算的通信、计算和轮效率问题。我们取得了算法和实际改进的双重成果：
> 
> 在半诚实设置中，迄今为止最好的结果是由Damgård和Nielsen（CRYPTO 2007）提出的。在过去的十年里，他们的构造在高效安全计算的进展中扮演了重要角色。然而，尽管有许多后续工作，但对基本的半诚实协议的重大改进一直很难实现。我们展示了该协议通信复杂性的33%改进。我们展示了如何将这个结果推广到恶意设置中，从而实现了目前已知的具有恶意安全性的无条件诚实多数MPC。
> 
> 我们专注于Damgård和Nielsen协议的轮复杂性，并将其改进了一倍。我们的改进基于一个关于Damgård和Nielsen乘法与Beaver三元组乘法之间相互作用的新颖观察。我们的构造实现表明，与现有技术相比，执行运行时间提高了30%至50%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_9](https://doi.org/10.1007/978-3-030-84245-1_9)
## Unconditional Communication-Efficient MPC via Hall's Marriage Theorem.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#unconditional-communication-efficient-mpc-via-halls-marriage-theorem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#unconditional-communication-efficient-mpc-via-halls-marriage-theorem)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### 摘要
> 已知最好的n方派无条件多方计算协议具有最佳腐败门限，每个门传输O（n）个域元素。尽管在这种情况下进行了十多年的通信复杂度研究，但即使在半诚实的情况下也是如此。进入略微次优化的腐败设置，Damgård，Ishai和Krøigaard（EUROCRYPT 2010）的工作为单一电路提供了第一个实现每个门传输复杂度为\(O(\log |C|)\)个元素的协议。尽管许多作品已经改进了这一结果，但获得每个门传输O（1）个域元素的协议仍然是一个悬而未决的问题。
> 
> 在这项工作中，我们构建了第一个无条件的多方计算协议，评估了具有摊销通信复杂度O（1）个元素的单个算术电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_10](https://doi.org/10.1007/978-3-030-84245-1_10)
## Non-interactive Secure Multiparty Computation for Symmetric Functions, Revisited: More Efficient Constructions and Extensions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#non-interactive-secure-multiparty-computation-for-symmetric-functions-revisited-more-efficient-constructions-and-extensions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#non-interactive-secure-multiparty-computation-for-symmetric-functions-revisited-more-efficient-constructions-and-extensions)**
### 作者
* Reo Eriguchi, The University of Tokyo, Tokyo, Japan
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Kazuma Ohara, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Shota Yamada, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, Kyushu University, Fukuoka, Japan
### 摘要
> 非交互式安全多方计算（NIMPC）是安全计算的一种变体，允许n个参与者中的每个人根据自己的输入和相关随机性只发送单个消息。阿贝尔程序定义为对阿贝尔群上的玩家输入总和的功能，可以实现任何对称函数，并为现实世界的应用提供有用的功能。我们通过以下方式改进和扩展了先前的结果：
> 
> 我们提出了适用于阿贝尔程序的NIMPC协议，改进了已知的通信复杂度。如果输入采用阿贝尔群\(\mathbb {G}\)的任何值，我们的协议实现了通信复杂度\(O(|\mathbb {G}|(\log |\mathbb {G}|)^2)\)，改进了Beimel等人（Crypto 2014）的\(O(|\mathbb {G}|^2n^2)\)。如果玩家的输入受限于大小最多为d的子集，我们的协议实现了\(|\mathbb {G}|(\log |\mathbb {G}|)^2(\max \{n,d\})^{(1+o(1))t}\)，其中t是腐败阈值。这结果改进了Beimel等人（Crypto 2014）的\(|\mathbb {G}|^3(nd)^{(1+o(1))t}\)，甚至改进了Benhamouda等人（Crypto 2017）的\(|\mathbb {G}|^{\log n+O(1)}n\)，如果\(t=o(\log n)\)和\(|\mathbb {G}|=n^{\varTheta (1)}\)。
> 
> 我们首次提出了适用于线性分类器的NIMPC协议，其效率比从通用构造获得的协议更高。
> 
> 我们重新审视了Benhamouda等人（Crypto 2017）的已知的从私人同时消息（PSM）到NIMPC的转换，我们在上述结果中反复使用它。我们发现转换中使用的一个子协议并不满足指定的安全性。我们还修复了他们的协议，只在通信复杂度上稍微增加。作为副产品，我们获得了一个指示函数的NIMPC协议，其通信复杂度在输入长度方面是渐近最优的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_11](https://doi.org/10.1007/978-3-030-84245-1_11)
## Efficient Information-Theoretic Multi-party Computation over Non-commutative Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#efficient-information-theoretic-multi-party-computation-over-non-commutative-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#efficient-information-theoretic-multi-party-computation-over-non-commutative-rings)**
### 作者
* Daniel Escudero, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Eduardo Soria-Vazquez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, UAE
### 摘要
> 我们构建了第一个只需要对一个非交换环R进行黑盒访问的高效、无条件安全的多方计算（MPC）协议。在相同的设置下，之前的结果只能在恶意行为数量为常数或者计算分支程序和公式时高效。我们的技术基于Shamir的秘密共享在非交换环中的推广，这是由Quintin、Barbier和Chabot（IEEE信息理论交易，2013）根据Reed Solomon码的工作导出的。当环的中心包含一个集合\(A = \{\alpha _0, \ldots , \alpha _n\}\)，使得对于所有\(i \ne j, \alpha _i \,-\, \alpha _j \in R^*\)，得到的秘密共享方案是强可乘的，并且我们可以轻松地推广现有的有限域上的构造方法。
> 
> 我们的大部分工作都致力于A的元素不与R的所有元素交换，而仅与彼此交换的情况。对于这样的环，秘密共享方案不能“双方面”线性，而且也不具备可乘性。然而，我们仍然能够构建具有具体高效的在线阶段和对R的黑盒访问的MPC协议。作为一个例子，我们考虑环\(\mathcal {M}_{m\times m}(\mathbb {Z}/2^k\mathbb {Z})\)，当\(m > \log (n+1)\)时，我们获得的协议所需的通信量约为\(\lceil \log (n+1)\rceil /2\)较少，并且计算量比基于电路摊销友好编码（Dalskov，Lee和Soria-Vazquez，ASIACRYPT 2020）的现有协议少\(2\lceil \log (n+1)\rceil \)。
> 
> 在这个设置中，当A“较不可交换”时，我们的黑盒预处理阶段的复杂度较低，为\(\mathsf {poly}(n)\)。为了解决这个问题，我们还提供了专门的、具体高效的预处理协议，用于\(\mathcal {M}_{m\times m}(\mathbb {Z}/2^k\mathbb {Z})\)，并利用矩阵环的结构。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_12](https://doi.org/10.1007/978-3-030-84245-1_12)
## Pushing the Limits of Valiant's Universal Circuits: Simpler, Tighter and More Compact.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#pushing-the-limits-of-valiants-universal-circuits-simpler-tighter-and-more-compact) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#pushing-the-limits-of-valiants-universal-circuits-simpler-tighter-and-more-compact)**
### 作者
* Hanlin Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Shuoyao Zhao, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Wenling Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Zhenkai Hu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
* Yu Yu, Shanghai Key Laboratory of Privacy-Preserving Computation, 701 Yunjin Road, Shanghai, 200232, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 通用电路（UC）是一种通用电路，可以模拟任意电路（最多到某个规模n）。Valiant提供了一种k路递归构造UC的方法（STOC 1976），其中k调节递归的复杂性。更具体地说，Valiant给出了2路和4路UC的理论构造，其渐近（乘法）尺寸分别为\(5n\log n\)和\(4.75n\log n\)，与\(n\log n\)的渐近下界\(\varOmega (n\log n)\)相匹配，只有一些常数因子的差异。
> 
> 受各种隐私保护密码应用的启发，Kiss等人（Eurocrypt 2016）通过给出私有函数计算的示例实现，验证了2路通用电路的可行性。Günther等人（Asiacrypt 2017）和Alhassan等人（J. Cryptology 2020）通过各种优化实现了2路/4路混合UC，以使通用电路更加实际。Zhao等人（Asiacrypt 2019）优化了Valiant的4路UC，将其渐近尺寸改进为\(4.5n\log n\)，并在Valiant的框架下证明了UC的下界\(3.64n\log n\)。随着计算规模超过1000万门（\(n=10^7\)）甚至十亿门级别（\(n=10^9\)），UC尺寸中的常数因子在应用性能中变得越来越重要。
> 
> 在这项工作中，我们研究了Valiant的通用电路，并提出了一个改进的构造通用电路的框架，具有以下优点。
> 
> 简单性。不再需要参数化。与先前的实现相反，先前的实现使用\(k=2\)和\(k=4\)的混合构造来在精细粒度和渐近尺寸效率之间进行权衡，而我们的构造在最低复杂度（即\(k=2\)）下同时兼顾了两者的优势。
> 
> 紧凑性。我们的通用电路的渐近尺寸为\(3n\log n\)，比先前已知的\(4.5n\log n\)提高了33%，并且超过了在Valiant的框架下构造的UC的下界\(3.64n\log n\)（Zhao等人，Asiacrypt 2019）。
> 
> 紧密性。我们证明，在我们的新框架下，UC的尺寸下界为\(2.95n\log n\)，几乎与我们的2路构造的\(3n\log n\)电路尺寸相匹配。
> 
> 我们实现了2路通用电路，并与其他实现进行性能评估，结果验证了我们的理论分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_13](https://doi.org/10.1007/978-3-030-84245-1_13)
## Oblivious Key-Value Stores and Amplification for Private Set Intersection.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#oblivious-key-value-stores-and-amplification-for-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#oblivious-key-value-stores-and-amplification-for-private-set-intersection)**
### 作者
* Gayathri Garimella, Oregon State University, Corvallis, Oregon, USA
* Mike Rosulek, Oregon State University, Corvallis, Oregon, USA
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Ni Trieu, Arizona State University, Tempe, Arizona, USA
* Avishay Yanai, VMware Research, Palo Alto, USA
### 摘要
> 许多最近的私密集合交集（PSI）协议将输入集合编码为多项式。我们考虑更一般的遗忘键值存储（OKVS）的概念，它是一种紧致地表示所需映射\(k_i \mapsto v_i\)的数据结构。当\(v_i\)的值是随机的时，OKVS数据结构隐藏了用于生成它的\(k_i\)的值。最简单（且大小最优）的OKVS是一个多项式p，通过插值选择，使得\(p(k_i)=v_i\)。
> 
> 我们开始正式研究遗忘键值存储，并展示了导致迄今最快的OKVS的新构建。
> 
> 类似于布谷鸟哈希，当前的分析技术无法找到具体的参数来保证OKVS构建的小失效概率。此外，运行实验证明小的失效概率的上界将会花费太多。因此，我们展示了一种新颖的技术，将具有失效概率p的OKVS构造增强为具有类似开销和失效概率\(p^c\)的OKVS。将p设置为适度小的值可以通过运行相对较少数量的O(1/p)实验来验证。这为放大后的OKVS验证了一个\(p^c\)的失效概率。
> 
> 最后，我们描述了OKVS如何显著改善基本上所有PSI变体的最新技术发展。这导致迄今为止最快的两方PSI协议，在半诚实和恶意环境下都如此。具体来说，在带宽适度的网络中（例如30-300 Mbps），我们的恶意双方PSI协议通信量减少了40％，速度比之前最先进的协议快20-40％，即使后者仅具有启发式置信。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_14](https://doi.org/10.1007/978-3-030-84245-1_14)
## MHz2k: MPC from HE over $\mathbb {Z}_{2^k}$ with New Packing, Simpler Reshare, and Better ZKP.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#mhz2k-mpc-from-he-over-mathbb-z-2-k-with-new-packing-simpler-reshare-and-better-zkp) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#mhz2k-mpc-from-he-over-mathbb-z-2-k-with-new-packing-simpler-reshare-and-better-zkp)**
### 作者
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Dongwoo Kim, Western Digital Research, Milpitas, USA
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### 摘要
> 本研究提出了一种针对有点同态加密的主动腐败大多数的 \(\mathbb {Z}_{2^k}\) 多方计算（MPC）协议。其主要技术贡献包括：（i）一种新的有效的 \(\mathbb {Z}_{2^k}\) -消息在基于点阵的有点同态加密方案中的打包方法，（ii）一种更简单的分配协议用于级别依赖的打包，（iii）一种更有效的零知识证明明确知识的循环同态环 \({\mathbb Z}[X]/\varPhi _M(X)\) ，其中 M 是质数。将它们整合起来，我们的协议在摊销通信成本方面相对于先前最佳结果实现了从 2.2 倍到 4.8 倍的改进。我们的技术不仅在很大程度上改善了 \(\mathbb {Z}_{2^k}\) 上的MPC的效率，而且在设计其他 \(\mathbb {Z}_{2^k}\) 上的加密原语时可以提供一个工具包。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_15](https://doi.org/10.1007/978-3-030-84245-1_15)
## Sublinear GMW-Style Compiler for MPC with Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#sublinear-gmw-style-compiler-for-mpc-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#sublinear-gmw-style-compiler-for-mpc-with-preprocessing)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### 摘要
> 本文考虑了对于有恶意多数方的安全多方计算（MPC）协议的效率。设计这类协议的一种流行方法是利用预处理。在输入已知之前，各方生成相关的秘密随机数，这些数会被一个快速且可能是"信息理论"的在线协议消耗掉。
> 
> 保护这种协议免受恶意方侵害的强大技术使用同态MAC来验证在线协议生成的值。与仅对抗半诚实方安全的基线协议相比，这会导致相关随机性的大小显著增加，高达一个统计安全参数的倍数。部分缓解这额外存储成本的不同方法会增加在线通信的开销。
> 
> 在这项工作中，我们提出了一种新的技术来保护预处理后的MPC免受恶意方的侵害。我们展示了，对于满足小安全性和结构要求的电路评估协议，这些要求是许多标准半诚实安全协议所满足的，额外的附加存储和在线通信成本都是电路大小的对数。这适用于布尔电路以及字段或环上的算术电路，并且也适用于信息理论和计算安全协议。我们的协议可以被视为广泛运用于具有预处理MPC自然协议的亚线性信息论变体的著名的“GMW编译器”。
> 
> 我们的编译器使用了Boneh等人（Crypto 2019）的次线性分布式零知识技术的新颖方法，这些技术之前仅在有诚实多数方MPC的情况下使用过。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_16](https://doi.org/10.1007/978-3-030-84245-1_16)
## Limits on the Adaptive Security of Yao's Garbling.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#limits-on-the-adaptive-security-of-yaos-garbling) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#limits-on-the-adaptive-security-of-yaos-garbling)**
### 作者
* Chethan Kamath, Boston, USA
* Karen Klein, IST Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Klosterneuburg, Austria
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Tokyo, Japan
### 摘要
> 姚的混淆方案是最基本的密码构造之一。 Lindell和Pinkas（密码学杂志2009）在选择性设置中证明了安全性，在此设置中，对手在看到混淆电路之前选择挑战输入，假设安全的对称密钥加密（因此是单向函数）。这之后出现的结果，无论是积极的还是消极的，都涉及到它在更强的自适应设置中的安全性。Applebaum等人（加密学2020年）表明，由于一个简单的不可压缩性论证，它无法满足自适应安全性。Jafargholi和Wichs（TCC 2017）考虑了对姚氏方案的一种自然改编（其中输出映射与混淆输入一起在在线阶段发送），以避开这一消极结果，并证明了它对于浅层电路至少是自适应安全的。特别地，他们表明对于深度 \(\delta \) 电路类，安全性的损失最多是 \(\delta \) 的指数。以上结果都涉及基于模拟的安全概念。
> 
> 在这项工作中，我们表明 Jafargholi和Wichs的上限从根本上是最佳的。作为我们的主要结果，我们表明存在一个布尔电路族，每个深度 \(\delta \in \mathbb {N}\) 都有一个，使得任何黑盒约简，证明了姚氏方案的自然改编与对称密钥加密之间的自适应不可区分性时，必须损失一个与 \(\sqrt{\delta }\) 指数成正比的因子。由于不可区分性比模拟更弱，我们的界限也适用于自适应模拟。
> 
> 为了确立我们的结果，我们借鉴了Kamath等人（Eprint 2021）最近的方法，该方法结合了石子游戏下界和预言分离，以证明密码安全性损失的细粒度下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_17](https://doi.org/10.1007/978-3-030-84245-1_17)
## Subtractive Sets over Cyclotomic Rings - Limits of Schnorr-Like Arguments over Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#subtractive-sets-over-cyclotomic-rings-limits-of-schnorr-like-arguments-over-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#subtractive-sets-over-cyclotomic-rings-limits-of-schnorr-like-arguments-over-lattices)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Russell W. F. Lai, Chair of Applied Cryptography, Friedrich-Alexander-Universität Erlangen-Nürnberg, Nürnberg, Germany
### 摘要
> 我们研究当形式为\(\mathbf {V} _T^{{(\intercal )}} \cdot \mathbf {z} = s\cdot \mathbf {w}\)的（双重）范德蒙德系统在环\(\mathcal {R}\)上是否存在解\(\mathbf {z}\)，其中\(\mathbf {V} _T\)是由集合T定义的范德蒙德矩阵，“松弛”s是解的质量衡量。为此，我们提出了在环\(\mathcal {R}\)上的（s，t）-可减集的概念，具有以下属性：如果S是（s，t）-可减集，则由S的任何t子集\(T \subseteq S\)定义的上述（双重）范德蒙德系统在\(\mathcal {R}\)上是可解的。挑战在于寻找大的集合S，同时在给定环\(\mathcal {R}\)的情况下，最小化s的（范数）。通过在素数p上构造大小为\(n = \textsf {poly}(\lambda )\)的环\(\mathcal {R}= \mathbb {Z}[\zeta _{p^\ell }]\)上的（s，t）-可减集S的族，我们构造了与SIS关系\(\mathbf {A} \cdot \mathbf {x} = s \cdot \mathbf {y} \bmod q\)相对应的Schnorr样式基于格的知识证明，有O(1/n)的知识错误，并且在\(p = \textsf {poly}(\lambda )\)的情况下，\(s = 1\)。我们的技术自然地适用于Crypto’20中的格Bulletproof框架，产生了更好参数的NP的基于格的简洁论证。
> 
> 然后，我们提出了关于相对于s的限制n的匹配的不可能结果，这表明我们基于Bulletproof的协议是最佳的，除非发现基本的新技术。注意，对于\(\mathcal {R}^k\)中的见证和可减集大小n，格Bulletproof的知识错误是\(\varOmega (\log k/n)\)，我们的结果对于Bulletproof框架中的基于格的简洁论证在实际上是有效的，代表了一个障碍。
> 
> 除了这些主要结果外，（s，t）-可减集的概念将基于群的阈值密码学与格设置联系起来，我们通过将其与分布式伪随机函数相关联来加以证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_18](https://doi.org/10.1007/978-3-030-84245-1_18)
## A Compressed $\varSigma $-Protocol Theory for Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#a-compressed-varsigma-protocol-theory-for-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#a-compressed-varsigma-protocol-theory-for-lattices)**
### 作者
* Thomas Attema, Cryptology Group, CWI, Amsterdam, The Netherlands
* Ronald Cramer, Cryptology Group, CWI, Amsterdam, The Netherlands
* Lisa Kohl, Cryptology Group, CWI, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Ronald Cramer, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, Cyber Security and Robustness, TNO, The Hague, The Netherlands
### 摘要
> 我们展示了一个基于格的解决方案，用于具有对数通信的提交证明透明电路零知识（ZK），这是第一个不依赖于PCPs的解决方案。
> 
> 我们从压缩的Σ协议理论（CRYPTO 2020）开始，该理论建立在基本的Σ协议上，用于打开一个紧凑提交的长秘密向量上的任意线性形式。首先使用从Bulletproofs中适应的递归“折叠技术”压缩这些协议，但以对数轮数为代价。通过（黑盒）将线性情况降低，通过从MPC中的算术秘密分享技术来证明秘密向量满足给定的约束 - 这些协议同时还可以进行提交和证明，即在任何电路-ZK证明之前创建对秘密向量的承诺。在多个平台上（包括DL），这将导致对数通信。非交互版本来自Fiat-Shamir。
> 
> 这个抽象的模块化理论强烈暗示它也应该得到格平台的支持。然而，当进行运动并尝试建立低通信（在SIS平台上）时，揭示了对多轮协议当前理解的某种显著缺乏。
> 
> 换句话说，与DL案例相反，所讨论的基本Σ协议通常具有多小的挑战空间。考虑到压缩步骤 - 这导致非常数轮数 - 以及为了降低错误而必要的并行化，目前没有已知的紧密结果表明复合协议可以使用有效的知识提取器。我们通过两个新颖的结果的组合来解决这个问题，这两个结果都是完全通用且具有独立的兴趣。第一个结果在非常数轮数和多小挑战空间的情况下给出了有效的知识提取的紧密分析，而第二个结果表明并行重复确实会迫使知识错误迅速减少。
> 
> 此外，在我们目前的环境中，算术秘密分享并非定义在一个大有限域上，而是定义在数环的商上，这迫使我们对线性化技术的部署进行仔细调整。
> 
> 我们在一个概念上简单且可以灵活实例化的抽象框架中开发我们的协议。特别是，该框架适用于任意环和范数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_19](https://doi.org/10.1007/978-3-030-84245-1_19)
## A New Simple Technique to Bootstrap Various Lattice Zero-Knowledge Proofs to QROM Secure NIZKs.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#a-new-simple-technique-to-bootstrap-various-lattice-zero-knowledge-proofs-to-qrom-secure-nizks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#a-new-simple-technique-to-bootstrap-various-lattice-zero-knowledge-proofs-to-qrom-secure-nizks)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
### 摘要
> 许多最近基于Lyubashevsky（Asiacrypt'09，Eurocrypt'12）开发的技术的先进基于格的Σ-/公开-硬币诚实验证者（HVZK）交互协议可以通过Fiat-Shamir变换在随机预言模型（ROM）中转化为非交互式零知识（NIZK）证明。然而，尽管它们在传统ROM中被认为是安全的，但现有的证明技术无法证明它们在量子ROM（QROM）中的安全性。或者，虽然我们可以依赖于Unruh变换（Eurocrypt'15），但由此产生的QROM安全NIZK与底层交互式协议相比会产生较大的开销。
> 
> 在本文中，我们提出了一种新的简单半通用转换，将许多现有的基于格的Σ-/公开-硬币HVZK交互协议编译成QROM安全NIZK。我们的转换基于一种称为可提取线性同态承诺协议的新原语。结果的NIZK具有几个吸引人的特点：它不仅是知识的证明，而且还是直线可提取的；与Unruh变换相比，证明开销较小；具有相对较小的降低损失；并且对量子计算的背景要求很少。为了说明我们技术的普遍性，我们展示了如何通过将Bootle等人的5轮协议与精确声音证明（Crypto'19）的证明大小增加2.6倍，将其转化为QROM安全NIZK。这与Unruh变换相比非常有利，后者需要超过50倍的增加。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_20](https://doi.org/10.1007/978-3-030-84245-1_20)
## SMILE: Set Membership from Ideal Lattices with Applications to Ring Signatures and Confidential Transactions.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#smile-set-membership-from-ideal-lattices-with-applications-to-ring-signatures-and-confidential-transactions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#smile-set-membership-from-ideal-lattices-with-applications-to-ring-signatures-and-confidential-transactions)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 在一个设置成员证明中，公共信息包括一组元素和一个承诺。然后证明者生成一个零知识证明，证明这个承诺确实是来自这个集合中的某个元素。这个基本原理与环签名和“众多中的一个”证明等概念密切相关，这些概念支撑了许多匿名和隐私协议。这项工作的主要成果是一个新的基于格的简洁的集合成员证明，其大小与集合的大小成对数关系。
> 
> 我们还将我们的集合成员证明转换为一个环签名方案。环签名的大小也与公钥集合的大小成对数关系，对于一个包含2^5个元素的集合，大小为16KB，对于一个大小为2^25的集合，大小为22KB。在约128比特安全级别下，这些输出比Beullens等人(Asiacrypt 2020)和Esgin等人(CCS 2019)当前最先进的简洁环签名要小1.5到7倍。接着我们展示了我们的环签名，结合几种其他技术和优化，可以转换成基于Esgin等人的MatRiCT框架的相当有效的类Monero保密交易系统。通过我们的新技术，我们能够将交易证明的大小减少4-10倍。例如，在我们的协议中，一个包含两个输入和两个输出的交易，其中每个输入在其他2^15个账户中隐藏，大约需要30KB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_21](https://doi.org/10.1007/978-3-030-84245-1_21)
## Deniable Fully Homomorphic Encryption from Learning with Errors.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#deniable-fully-homomorphic-encryption-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#deniable-fully-homomorphic-encryption-from-learning-with-errors)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Shafi Goldwasser, Simons Institute of TOC at UC Berkeley, Berkeley, CA, USA
* Saleet Mossel, MIT, Cambridge, MA, USA
### 摘要
> 我们基于误差学习（LWE）多项式困难性假设定义和构建了可否认的完全同态加密（Deniable Fully Homomorphic Encryption）。可否认的FHE使得加密数据可以安全地在云中进行处理而无需解密，保持加密数据的否认性，并且可以在电子投票方案中防止选票购买，在这种方案中，加密选票可以在不解密的情况下进行计算。
> 
> 我们的构建在可否认的程度上实现了紧凑性-公钥和密文的大小都受到固定多项式的限制，与方案实现的检测概率无关。这与所有先前的可否认加密方案构建（即使不需要同态）形成了对比，这些构建基于多项式困难性假设，源自Canetti、Dwork、Naor和Ostrovsky的开创性研究（CRYPTO 1997），其中密文大小随检测概率的倒数增长。Canetti等人认为这种依赖“似乎是固有的”，但我们的构建表明这并非如此。我们注意到，Sahai-Waters（STOC 2014）从不可区分混淆构建的可否认加密是紧凑的，并且可以很容易地修改为实现可否认的FHE，但它需要多个更强的次指数困难性假设，而且不是后量子安全的。相比之下，我们的构建仅依赖于LWE多项式困难性假设，即便不要求可否认，目前对于FHE也是必需的。
> 
> 我们的加密算法的运行时间取决于检测概率的倒数，因此该方案在同时实现紧凑性、可否认概率可以忽略不计和多项式加密时间方面尚不完善。然而，我们认为实现紧凑性是实现所有属性同时的基本步骤，就像对于其他原始加密算法一样的历史演变。我们的构建支持大的消息空间，而先前的构建是逐位进行的，并且可以在在线-离线加密模型中运行，其中大部分计算与消息无关，可以在离线预处理阶段执行。这导致了一个有效的在线阶段，其运行时间与检测概率无关。我们构建的核心是一种新的使用引导技术来无意生成FHE密文的方法，以便它支持在胁迫下的伪造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_22](https://doi.org/10.1007/978-3-030-84245-1_22)
## Counterexamples to New Circular Security Assumptions Underlying iO.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#counterexamples-to-new-circular-security-assumptions-underlying-io) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#counterexamples-to-new-circular-security-assumptions-underlying-io)**
### 作者
* Sam Hopkins, UC Berkeley, Berkeley, USA
* Aayush Jain, UCLA, Center for Encrypted Functionalities, and NTT Research, Los Angeles, USA
* Huijia Lin, UW, Los Angeles, USA
### 摘要
> 我们研究了几种对传统循环安全假设的加强，这些加强最近被引入到四种新的基于格的不可区分混淆构造中：Brakerski-Döttling-Garg-Malavolta（Eurocrypt 2020），Gay-Pass（STOC 2021），Brakerski-Döttling-Garg-Malavolta（Eprint 2020）和Wee-Wichs（Eprint 2020）。
> 
> 我们对Gay-Pass提出的Gentry-Sahai-Waters完全同态加密方案中的2-循环防护随机泄漏假设以及Wee-Wichs提出的同态伪随机LWE样本猜想提供了明确的反例。我们的研究表明，传统循环安全与近期iO构造的加强版本之间存在分离，表明它们（尚）不处于相同的基础上。
> 
> 我们的反例利用了根据Gay-Pass的假设可以选择特定电路实现的灵活性以及Wee-Wichs假设中未指定的实现方式。他们的不可区分混淆方案仍然未被破解。我们的工作表明，假设至少需要细化。特别是，泄漏鲁棒循环安全假设是脆弱的，其安全性对涉及的泄漏具体结构是敏感的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_23](https://doi.org/10.1007/978-3-030-84245-1_23)
## How to Meet Ternary LWE Keys.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#how-to-meet-ternary-lwe-keys) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#how-to-meet-ternary-lwe-keys)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
### 摘要
> LWE问题及其环变体是目前构建抵抗量子计算机的高效公钥加密系统的最主要候选方案。NTRU类型的加密系统采用了LWE类型的变体，其中最大范数的秘密通常为三元系数集合\(\{-1,0,1\}\)。对于这些方案，最好的攻击是一种混合攻击，结合了格减法技术和Odlyzko的Meet-in-the-Middle方法。Odlyzko算法是一种经典的组合攻击，对于密钥空间大小为\(\mathcal{S}\)，运行时间为\(\mathcal{S}^{0.5}\)。我们在这个Meet-in-the-Middle方法上做了大幅改进，采用了用于子集和算法的表示技术。从渐进的角度看，我们的启发式Meet-in-the-Middle攻击的运行时间大约为\(\mathcal{S}^{0.25}\)，这也超过了已知最佳量子算法的复杂性\(\mathcal{S}^{\frac{1}{3}}\)。
> 
> 对于第三轮NIST后量子加密NTRU和NTRU Prime，我们得到了非渐进的攻击实例，其复杂性大约为\(\mathcal{S}^{0.3}\)。与其他组合攻击不同，我们的攻击受益于更大的LWE字段大小q，因为它们通常用于现代基于格的签名。例如，对于BLISS和GLP签名，我们得到了大约\(\mathcal{S}^{0.28}\)的非渐进组合攻击。
> 
> 我们的攻击并不否定上述方案的安全性声明。然而，它们确立了改进的组合上界来评估它们的安全性。我们将这个新的Meet-in-the-Middle攻击与格减法相结合，是否可以加快混合攻击的速度，这是一个开放的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_24](https://doi.org/10.1007/978-3-030-84245-1_24)
## Lattice Reduction with Approximate Enumeration Oracles - Practical Algorithms and Concrete Performance.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#lattice-reduction-with-approximate-enumeration-oracles-practical-algorithms-and-concrete-performance) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#lattice-reduction-with-approximate-enumeration-oracles-practical-algorithms-and-concrete-performance)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Jianwei Li, Information Security Group, Royal Holloway, University of London, Egham, UK
* Joe Rowell, Information Security Group, Royal Holloway, University of London, Egham, UK
* Shi Bai, Department of Mathematical Sciences, Florida Atlantic University, Boca Raton, USA
### 摘要
> 该研究工作系统地探讨了在BKZ中使用近似枚举预言机的方法，该方法建立在最近有关加速格枚举的技术进展之上：放宽（枚举的搜索半径）和进行扩展预处理，该预处理在比枚举等级更高的等级上进行预处理。首先，我们通过启发式方法证明，通过某些极端修剪来放宽枚举可以渐近地实现指数级加速以达到相同的根Hermite因子（RHF）。其次，我们进行了模拟/实验来验证这一点，并验证了在常规和扩展预处理中进行数值优化修剪的松弛枚举的性能。通过将此类近似枚举预言机升级为BKZ，我们得到了我们的主要结果，即在实际和密码参数范围内，实际和更快（相对于以前的工作）的多项式空间格还原算法，以达到相同的RHF。我们通过大量模拟和实验评估了其具体的时间/质量性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_25](https://doi.org/10.1007/978-3-030-84245-1_25)
## Towards Faster Polynomial-Time Lattice Reduction.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#towards-faster-polynomial-time-lattice-reduction) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#towards-faster-polynomial-time-lattice-reduction)**
### 作者
* Paul Kirchner, IRISA/Inria, Rennes Univ., Rennes, France
* Pierre-Alain Fouque, IRISA/Inria, Rennes Univ., Rennes, France
* Thomas Espitau, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> lll算法是一种多项式时间算法，用于降低具有指数逼近因子的d维格子。目前，lll的最高效变种是由Neumaier和Stehlé提出的，其理论运行时间为\(d^4\cdot B^{1+o(1)}\)，其中B是条目的位数，但从未实现过。本研究引入了新的渐近快速、并行但启发式的降维算法及其优化实现。我们的算法是递归的，并充分利用快速矩阵乘法。我们通过在递归步骤中精确控制浮点精度来实验性地证明，我们可以在时间\(\tilde{O}(d^\omega \cdot C)\)内降低d秩的欧几里德格子，即几乎只需要进行固定次数的矩阵乘法，其中\(\omega\)是矩阵乘法的指数，C是矩阵的条件数的对数。对于密码应用，C接近于B，而在最坏情况下可能是d倍。它将现有最先进实现fplll的运行时间改进了一个乘法因子的数量级为\(d^2\cdot B\)。此外，我们还展示了我们可以通过渐进降维策略，在时间\(\tilde{O}(d^{\omega -1}\cdot C)\)内降低结构化格子，即所谓的背包格子。除了可以降低巨大的格子外，我们的实现还可以在维度2,230和4百万位的大整数上破解几个完全同态加密方案的实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_26](https://doi.org/10.1007/978-3-030-84245-1_26)
## Lower Bounds on Lattice Sieving and Information Set Decoding.
🌍 [English](../../../docs/en/Crypto/Crypto[2021-2].md#lower-bounds-on-lattice-sieving-and-information-set-decoding) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2021-2].md#lower-bounds-on-lattice-sieving-and-information-set-decoding)**
### 作者
* Elena Kirshanova, Immanuel Kant Baltic Federal University, Kaliningrad, Russia
* Elena Kirshanova, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Thijs Laarhoven, Eindhoven University of Technology, Eindhoven, The Netherlands
### 摘要
> 在后量子密码学的两个主要领域中，基于格和码的方法已经使用最近邻居技术加速了最先进的密码分析算法，并获得了迄今为止最低的渐近成本估计[May–Ozerov, Eurocrypt’15; Becker–Ducas–Gama–Laarhoven, SODA’16]。这些上界对于评估密码系统对已知攻击的安全性是有用的，但要保证长期安全性，人们希望有尽可能匹配的下界，以表明算法改进不会在未来大幅降低安全性。由于现有的来自最近邻居文献的下界不适用于此上下文中出现的最近邻居问题，人们可能会想知道，是否仍然可以通过改进最近邻居子程序来找到这些密码分析算法的进一步加速。
> 
> 我们推导出解决这些密码分析设置中出现的最近邻居搜索问题成本的新下界。对于欧几里德度量，我们表明对于球上的随机数据集，[Becker–Ducas–Gama–Laarhoven, SODA 2016]使用球冠的局部敏感过滤方法是最优的，因此在几乎覆盖到目前为止的几乎所有方法的广泛的格筛选算法类中，他们的渐近时间复杂度\(2^{0.292d + o(d)}\)是最优的。类似的条件最优结果也适用于格筛选变体，比如[Laarhoven, 博士论文 2016]中量子筛选的复杂度\(2^{0.265d + o(d)}\)和先前推导的元组筛选复杂度估计[Herold–Kirshanova–Laarhoven, PKC 2018]。对于汉明度量，我们推导出几乎与文献中最佳上界相匹配的最近邻居搜索的新下界[May–Ozerov, Eurocrypt 2015]。作为结果，我们对解码攻击推导出了条件下界，表明在这里也应该在文献中寻找其他改进，以显著削弱安全性估计。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-84245-1_27](https://doi.org/10.1007/978-3-030-84245-1_27)
